import { Router } from "express";
import path from "node:path";
import {
  appendJsonRecord,
  attemptSmtpDelivery,
  createSubmissionMeta,
  isValidEmail,
  normalizeMultilineText,
  normalizeText,
  sendJsonResponse,
} from "./shared.js";

interface ContactRouterOptions {
  dataDir: string;
  contactEmail: string;
}

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function createContactRouter(options: ContactRouterOptions) {
  const router = Router();

  router.post("/contact", async (request, response) => {
    const payload = request.body as Partial<ContactPayload>;
    const name = normalizeText(payload.name, 120);
    const email = normalizeText(payload.email, 320).toLowerCase();
    const subject = normalizeText(payload.subject, 180);
    const message = normalizeMultilineText(payload.message, 12000);
    const validationErrors: string[] = [];

    if (!name) {
      validationErrors.push("name is required");
    }

    if (!email || !isValidEmail(email)) {
      validationErrors.push("valid email is required");
    }

    if (!subject) {
      validationErrors.push("subject is required");
    }

    if (!message || message.length < 10) {
      validationErrors.push("message must contain at least 10 characters");
    }

    if (validationErrors.length > 0) {
      sendJsonResponse(response, 400, {
        ok: false,
        error: "Invalid contact submission",
        validationErrors,
      });
      return;
    }

    const record = {
      ...createSubmissionMeta(request),
      name,
      email,
      subject,
      message,
    };

    const contactsFile = path.resolve(options.dataDir, "contacts.json");
    await appendJsonRecord(contactsFile, record);

    const emailResult = await attemptSmtpDelivery({
      to: options.contactEmail,
      replyTo: email,
      subject: `[Pizolub] ${subject}`,
      text: [
        `Nom: ${name}`,
        `Email: ${email}`,
        `Sujet: ${subject}`,
        "",
        message,
      ].join("\n"),
    });

    sendJsonResponse(response, 200, {
      ok: true,
      message: emailResult.delivered
        ? "Message sent successfully"
        : "Message stored successfully",
      stored: true,
      delivered: emailResult.delivered,
      provider: emailResult.provider || "local-json",
      fallback: !emailResult.delivered,
    });
  });

  return router;
}
