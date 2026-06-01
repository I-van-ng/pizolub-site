import { Router } from "express";
import path from "node:path";
import {
  appendJsonRecord,
  attemptSmtpDelivery,
  createSubmissionMeta,
  isLikelyUrl,
  isValidEmail,
  normalizeMultilineText,
  normalizeText,
  sendJsonResponse,
} from "./shared.js";

interface CareersRouterOptions {
  dataDir: string;
  contactEmail: string;
}

interface CareersPayload {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience?: string;
  message: string;
  cvUrl?: string;
}

export function createCareersRouter(options: CareersRouterOptions) {
  const router = Router();

  router.post("/careers", async (request, response) => {
    const payload = request.body as Partial<CareersPayload>;
    const fullName = normalizeText(payload.fullName, 160);
    const email = normalizeText(payload.email, 320).toLowerCase();
    const phone = normalizeText(payload.phone, 60);
    const position = normalizeText(payload.position, 120);
    const experience = normalizeMultilineText(payload.experience || "", 3000);
    const message = normalizeMultilineText(payload.message, 12000);
    const cvUrl = normalizeText(payload.cvUrl || "", 1000);
    const validationErrors: string[] = [];

    if (!fullName) {
      validationErrors.push("full name is required");
    }

    if (!email || !isValidEmail(email)) {
      validationErrors.push("valid email is required");
    }

    if (!phone) {
      validationErrors.push("phone number is required");
    }

    if (!position) {
      validationErrors.push("position is required");
    }

    if (!message || message.length < 10) {
      validationErrors.push("message must contain at least 10 characters");
    }

    if (cvUrl && !isLikelyUrl(cvUrl)) {
      validationErrors.push("cv url must be a valid http(s) link");
    }

    if (validationErrors.length > 0) {
      sendJsonResponse(response, 400, {
        ok: false,
        error: "Invalid application submission",
        validationErrors,
      });
      return;
    }

    const record = {
      ...createSubmissionMeta(request),
      fullName,
      email,
      phone,
      position,
      experience,
      message,
      cvUrl,
    };

    const applicationsFile = path.resolve(options.dataDir, "applications.json");
    await appendJsonRecord(applicationsFile, record);

    const emailResult = await attemptSmtpDelivery({
      to: options.contactEmail,
      replyTo: email,
      subject: `[Pizolub RH] Nouvelle candidature - ${position}`,
      text: [
        `Nom complet: ${fullName}`,
        `Email: ${email}`,
        `Telephone: ${phone}`,
        `Poste vise: ${position}`,
        `Experience: ${experience || "Non precisee"}`,
        `CV: ${cvUrl || "Non fourni"}`,
        "",
        message,
      ].join("\n"),
    });

    sendJsonResponse(response, 200, {
      ok: true,
      message: emailResult.delivered
        ? "Application sent successfully"
        : "Application stored successfully",
      stored: true,
      delivered: emailResult.delivered,
      provider: emailResult.provider || "local-json",
      fallback: !emailResult.delivered,
    });
  });

  return router;
}
