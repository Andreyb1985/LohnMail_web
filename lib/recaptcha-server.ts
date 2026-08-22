type RecaptchaResponse = {
  success?: boolean;
  score?: number;
  action?: string;
  hostname?: string;
  "error-codes"?: string[];
};

type RecaptchaVerification =
  | { ok: true; configured: boolean }
  | { ok: false; status: number; error: string };

export async function verifyRecaptchaToken(
  token: string,
  expectedAction: string,
): Promise<RecaptchaVerification> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!siteKey && !secretKey) {
    return { ok: true, configured: false };
  }

  if (!siteKey || !secretKey) {
    console.error("reCAPTCHA configuration is incomplete.");
    return {
      ok: false,
      status: 503,
      error: "Die Sicherheitsprüfung ist noch nicht vollständig konfiguriert.",
    };
  }

  if (!token) {
    return {
      ok: false,
      status: 400,
      error: "Die Sicherheitsprüfung konnte nicht bestätigt werden.",
    };
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret: secretKey, response: token }),
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`Google verification returned ${response.status}`);
    }

    const result = (await response.json()) as RecaptchaResponse;
    const configuredMinimumScore = Number(process.env.RECAPTCHA_MIN_SCORE || "0.5");
    const minimumScore = Number.isFinite(configuredMinimumScore)
      ? configuredMinimumScore
      : 0.5;
    const score = typeof result.score === "number" ? result.score : 0;

    if (!result.success || result.action !== expectedAction || score < minimumScore) {
      console.warn("reCAPTCHA verification rejected a form submission.", {
        action: result.action,
        expectedAction,
        hostname: result.hostname,
        score,
        errorCodes: result["error-codes"],
      });
      return {
        ok: false,
        status: 403,
        error: "Die Sicherheitsprüfung ist fehlgeschlagen. Bitte versuchen Sie es erneut.",
      };
    }

    return { ok: true, configured: true };
  } catch (error) {
    console.error(
      "reCAPTCHA verification failed:",
      error instanceof Error ? error.message : "Unknown verification error",
    );
    return {
      ok: false,
      status: 502,
      error: "Die Sicherheitsprüfung ist derzeit nicht erreichbar. Bitte versuchen Sie es erneut.",
    };
  }
}
