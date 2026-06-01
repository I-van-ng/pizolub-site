import "dotenv/config";

import express from "express";
import path from "node:path";
import { createContactRouter } from "./src/api/contact.js";
import { createCareersRouter } from "./src/api/careers.js";
import { createNewsletterRouter } from "./src/api/newsletter.js";
import {
  createStaticAssetSender,
  createSecurityHeadersMiddleware,
  createCorsMiddleware,
  createRateLimitMiddleware,
  sendJsonResponse,
} from "./src/api/shared.js";

const app = express();
const port = Number(process.env.PORT || 3001);
const projectRoot = process.cwd();
const distDir = path.resolve(projectRoot, "dist");
const dataDir = path.resolve(projectRoot, "data");
const contactEmail = process.env.CONTACT_EMAIL || "accueil@pizolub.ga";
const allowedOrigins = [
  process.env.CORS_ORIGIN,
  process.env.APP_URL,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://localhost:3001",
  "http://127.0.0.1:3001",
]
  .filter(Boolean)
  .flatMap((value) => String(value).split(","))
  .map((value) => value.trim())
  .filter(Boolean);

app.disable("x-powered-by");
app.set("trust proxy", true);
app.use(createSecurityHeadersMiddleware());
app.use(createCorsMiddleware(allowedOrigins));
app.use(createRateLimitMiddleware({ windowMs: 60_000, limit: 10 }));
app.use(express.json({ limit: "100kb" }));

app.get("/api/health", (_req, res) => {
  sendJsonResponse(res, 200, {
    ok: true,
    service: "pizolub",
    timestamp: new Date().toISOString(),
    storageDir: path.resolve(process.cwd(), "data"),
    smtpConfigured:
      Boolean(process.env.SMTP_HOST) &&
      Boolean(process.env.SMTP_USER) &&
      Boolean(process.env.SMTP_PASS),
  });
});

app.use("/api", createContactRouter({ contactEmail, dataDir }));
app.use("/api", createCareersRouter({ contactEmail, dataDir }));
app.use("/api", createNewsletterRouter({ dataDir }));

app.use(createStaticAssetSender({ distDir }));

app.use((req, res) => {
  sendJsonResponse(res, 404, {
    ok: false,
    error: "Not Found",
    path: req.path,
  });
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Pizolub backend running at http://127.0.0.1:${port}`);
});
