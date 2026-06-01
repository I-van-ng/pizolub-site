import { Router } from "express";
import path from "node:path";
import {
  appendJsonRecord,
  createSubmissionMeta,
  isValidEmail,
  normalizeText,
  readJsonArray,
  sendJsonResponse,
} from "./shared.js";

interface NewsletterRouterOptions {
  dataDir: string;
}

interface NewsletterPayload {
  email: string;
}

export function createNewsletterRouter(options: NewsletterRouterOptions) {
  const router = Router();

  router.post("/newsletter", async (request, response) => {
    const payload = request.body as Partial<NewsletterPayload>;
    const email = normalizeText(payload.email, 320).toLowerCase();

    if (!email || !isValidEmail(email)) {
      sendJsonResponse(response, 400, {
        ok: false,
        error: "Valid email is required",
      });
      return;
    }

    const newsletterFile = path.resolve(options.dataDir, "newsletter.json");
    const currentSubscribers = await readJsonArray<{ email: string }>(newsletterFile);
    const duplicate = currentSubscribers.some((subscriber) => subscriber.email.toLowerCase() === email);

    if (duplicate) {
      sendJsonResponse(response, 200, {
        ok: true,
        message: "Email already subscribed",
        stored: true,
        duplicate: true,
      });
      return;
    }

    await appendJsonRecord(newsletterFile, {
      ...createSubmissionMeta(request),
      email,
    });

    sendJsonResponse(response, 200, {
      ok: true,
      message: "Newsletter subscription saved",
      stored: true,
      duplicate: false,
    });
  });

  return router;
}
