import type { NextFunction, Request, Response } from "express";
import { randomUUID } from "node:crypto";
import { promises as fs } from "node:fs";
import path from "node:path";
import { brotliCompressSync, constants, gzipSync } from "node:zlib";

export interface SubmissionMeta {
  id: string;
  createdAt: string;
  ip: string;
  userAgent: string;
}

const fileQueues = new Map<string, Promise<void>>();

export function normalizeText(value: unknown, maxLength = 5000): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\s+/g, " ").slice(0, maxLength);
}

export function normalizeMultilineText(value: unknown, maxLength = 10000): string {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().replace(/\r\n/g, "\n").slice(0, maxLength);
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function isLikelyUrl(value: string): boolean {
  if (!value) {
    return true;
  }

  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function createSubmissionMeta(request: Request): SubmissionMeta {
  return {
    id: randomUUID(),
    createdAt: new Date().toISOString(),
    ip: request.ip || request.socket.remoteAddress || "unknown",
    userAgent: request.get("user-agent") || "unknown",
  };
}

export async function ensureDirectory(directoryPath: string): Promise<void> {
  await fs.mkdir(directoryPath, { recursive: true });
}

export async function readJsonArray<T>(filePath: string): Promise<T[]> {
  try {
    const contents = await fs.readFile(filePath, "utf8");
    const parsed = JSON.parse(contents);
    return Array.isArray(parsed) ? (parsed as T[]) : [];
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      return [];
    }

    return [];
  }
}

export async function appendJsonRecord<T>(filePath: string, record: T): Promise<void> {
  const runTask = async () => {
    const records = await readJsonArray<T>(filePath);
    records.push(record);
    await ensureDirectory(path.dirname(filePath));
    await fs.writeFile(filePath, `${JSON.stringify(records, null, 2)}\n`, "utf8");
  };

  const previousTask = fileQueues.get(filePath) || Promise.resolve();
  const nextTask = previousTask.then(runTask, runTask);
  fileQueues.set(filePath, nextTask.then(() => undefined, () => undefined));
  await nextTask;
}

function wantsCompression(request: Request, contentType: string, length: number): boolean {
  if (length < 1024) {
    return false;
  }

  const acceptEncoding = request.get("accept-encoding") || "";
  const textLike =
    contentType.startsWith("text/") ||
    contentType.includes("json") ||
    contentType.includes("javascript") ||
    contentType.includes("xml") ||
    contentType.includes("svg");

  return textLike && (acceptEncoding.includes("br") || acceptEncoding.includes("gzip"));
}

function compressBody(request: Request, body: Buffer, contentType: string): { body: Buffer; encoding?: string } {
  if (!wantsCompression(request, contentType, body.length)) {
    return { body };
  }

  const acceptEncoding = request.get("accept-encoding") || "";
  if (acceptEncoding.includes("br")) {
    return {
      body: brotliCompressSync(body, {
        params: {
          [constants.BROTLI_PARAM_QUALITY]: 5,
        },
      }),
      encoding: "br",
    };
  }

  return {
    body: gzipSync(body),
    encoding: "gzip",
  };
}

export function sendJsonResponse(
  response: Response,
  statusCode: number,
  payload: Record<string, unknown>,
): void {
  const request = response.req;
  const body = Buffer.from(`${JSON.stringify(payload)}\n`, "utf8");
  const compressed = compressBody(request, body, "application/json; charset=utf-8");

  response.status(statusCode);
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.setHeader("Content-Length", compressed.body.byteLength);
  response.setHeader("Vary", "Accept-Encoding, Origin");
  if (compressed.encoding) {
    response.setHeader("Content-Encoding", compressed.encoding);
  }

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  response.end(compressed.body);
}

export function sendTextResponse(
  response: Response,
  statusCode: number,
  content: string,
  contentType = "text/plain; charset=utf-8",
): void {
  const request = response.req;
  const body = Buffer.from(content, "utf8");
  const compressed = compressBody(request, body, contentType);

  response.status(statusCode);
  response.setHeader("Content-Type", contentType);
  response.setHeader("Content-Length", compressed.body.byteLength);
  response.setHeader("Vary", "Accept-Encoding, Origin");
  if (compressed.encoding) {
    response.setHeader("Content-Encoding", compressed.encoding);
  }

  if (request.method === "HEAD") {
    response.end();
    return;
  }

  response.end(compressed.body);
}

function mimeTypeForFile(filePath: string): string {
  const extension = path.extname(filePath).toLowerCase();
  const contentTypes: Record<string, string> = {
    ".css": "text/css; charset=utf-8",
    ".gif": "image/gif",
    ".html": "text/html; charset=utf-8",
    ".ico": "image/x-icon",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".map": "application/json; charset=utf-8",
    ".mp4": "video/mp4",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".txt": "text/plain; charset=utf-8",
    ".webp": "image/webp",
  };

  return contentTypes[extension] || "application/octet-stream";
}

function cacheControlForFile(filePath: string): string {
  const normalizedPath = filePath.replace(/\\/g, "/");
  if (normalizedPath.endsWith("/index.html")) {
    return "no-cache";
  }

  const isHashedAsset = /-[a-f0-9]{8,}\./i.test(path.basename(filePath));
  if (normalizedPath.includes("/assets/") || isHashedAsset) {
    return "public, max-age=31536000, immutable";
  }

  return "public, max-age=3600";
}

function isProbablyHtmlRequest(request: Request): boolean {
  const accept = request.get("accept") || "";
  return accept.includes("text/html") || accept.includes("*/*");
}

export function createStaticAssetSender({ distDir }: { distDir: string }) {
  return async function staticAssetSender(request: Request, response: Response, next: NextFunction) {
    if (request.path.startsWith("/api")) {
      next();
      return;
    }

    if (request.method !== "GET" && request.method !== "HEAD") {
      next();
      return;
    }

    try {
      const normalizedRequestPath = decodeURIComponent(request.path || "/");
      const requestedPath = normalizedRequestPath === "/" ? "/index.html" : normalizedRequestPath;
      const distRoot = path.resolve(distDir);
      const absoluteRequestedPath = path.resolve(distRoot, `.${requestedPath}`);

      if (
        absoluteRequestedPath !== distRoot &&
        !absoluteRequestedPath.startsWith(`${distRoot}${path.sep}`)
      ) {
        sendTextResponse(response, 403, "Forbidden");
        return;
      }

      const fileExists = await fs
        .stat(absoluteRequestedPath)
        .then((stat) => stat.isFile())
        .catch(() => false);

      if (!fileExists) {
        const hasFileExtension = Boolean(path.extname(normalizedRequestPath));
        const shouldFallbackToIndex = !hasFileExtension && isProbablyHtmlRequest(request);

        if (shouldFallbackToIndex) {
          const indexPath = path.resolve(distRoot, "index.html");
          const indexExists = await fs
            .stat(indexPath)
            .then((stat) => stat.isFile())
            .catch(() => false);

          if (!indexExists) {
            sendTextResponse(
              response,
              503,
              "Frontend build not found. Run `npm run build` before starting the production server.",
            );
            return;
          }

          const html = await fs.readFile(indexPath, "utf8");
          response.setHeader("Cache-Control", "no-cache");
          sendTextResponse(response, 200, html, "text/html; charset=utf-8");
          return;
        }

        sendJsonResponse(response, 404, {
          ok: false,
          error: "Not Found",
          path: request.path,
        });
        return;
      }

      const buffer = await fs.readFile(absoluteRequestedPath);
      const contentType = mimeTypeForFile(absoluteRequestedPath);
      const compressed = compressBody(request, buffer, contentType);

      response.status(200);
      response.setHeader("Content-Type", contentType);
      response.setHeader("Cache-Control", cacheControlForFile(absoluteRequestedPath));
      response.setHeader("Vary", "Accept-Encoding, Origin");
      response.setHeader("Content-Length", compressed.body.byteLength);
      if (compressed.encoding) {
        response.setHeader("Content-Encoding", compressed.encoding);
      }

      if (request.method === "HEAD") {
        response.end();
        return;
      }

      response.end(compressed.body);
    } catch (error) {
      next(error);
    }
  };
}

export function createSecurityHeadersMiddleware() {
  return (_request: Request, response: Response, next: NextFunction) => {
    response.setHeader("X-Content-Type-Options", "nosniff");
    response.setHeader("X-Frame-Options", "DENY");
    response.setHeader("X-XSS-Protection", "1; mode=block");
    response.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
    response.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
    response.setHeader("Cross-Origin-Opener-Policy", "same-origin");
    response.setHeader("Cross-Origin-Resource-Policy", "same-site");
    next();
  };
}

export function createCorsMiddleware(allowedOrigins: string[]) {
  const normalizedAllowedOrigins = new Set(allowedOrigins);

  return (request: Request, response: Response, next: NextFunction) => {
    const origin = request.get("origin");

    if (origin && normalizedAllowedOrigins.has(origin)) {
      response.setHeader("Access-Control-Allow-Origin", origin);
      response.setHeader("Vary", "Origin");
      response.setHeader("Access-Control-Allow-Credentials", "true");
      response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
      response.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    }

    if (request.method === "OPTIONS" && request.path.startsWith("/api")) {
      response.status(204).end();
      return;
    }

    next();
  };
}

export function createRateLimitMiddleware({ windowMs, limit }: { windowMs: number; limit: number }) {
  const requestBuckets = new Map<string, number[]>();

  return (request: Request, response: Response, next: NextFunction) => {
    if (!request.path.startsWith("/api") || request.path === "/api/health") {
      next();
      return;
    }

    const ip = request.ip || request.socket.remoteAddress || "unknown";
    const now = Date.now();
    const cutoff = now - windowMs;
    const timestamps = requestBuckets.get(ip) || [];
    const recentTimestamps = timestamps.filter((timestamp) => timestamp > cutoff);

    if (recentTimestamps.length >= limit) {
      requestBuckets.set(ip, recentTimestamps);
      sendJsonResponse(response, 429, {
        ok: false,
        error: "Too many requests",
        retryAfterMs: windowMs,
      });
      return;
    }

    recentTimestamps.push(now);
    requestBuckets.set(ip, recentTimestamps);
    next();
  };
}

export async function attemptSmtpDelivery(params: {
  to: string;
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<{ delivered: boolean; provider?: string; error?: string }> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || 587);
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;

  if (!smtpHost || !smtpUser || !smtpPass) {
    return { delivered: false, error: "SMTP not configured" };
  }

  try {
    const dynamicImport = new Function(
      "specifier",
      "return import(specifier);",
    ) as (specifier: string) => Promise<{ createTransport: (options: Record<string, unknown>) => any }>;

    const nodemailer = await dynamicImport("nodemailer");
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || smtpUser,
      to: params.to,
      subject: params.subject,
      text: params.text,
      replyTo: params.replyTo,
    });

    return { delivered: true, provider: "nodemailer" };
  } catch (error) {
    return {
      delivered: false,
      error: error instanceof Error ? error.message : "SMTP delivery failed",
    };
  }
}
