const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

type RecaptchaApi = {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
};

declare global {
  interface Window {
    grecaptcha?: RecaptchaApi;
  }
}

async function waitForRecaptcha() {
  for (let attempt = 0; attempt < 50; attempt += 1) {
    if (window.grecaptcha) return window.grecaptcha;
    await new Promise((resolve) => window.setTimeout(resolve, 100));
  }

  throw new Error("Die Sicherheitsprüfung konnte nicht geladen werden.");
}

export async function getRecaptchaToken(action: string) {
  if (!RECAPTCHA_SITE_KEY) return "";

  const recaptcha = await waitForRecaptcha();
  return new Promise<string>((resolve, reject) => {
    recaptcha.ready(() => {
      recaptcha.execute(RECAPTCHA_SITE_KEY, { action }).then(resolve).catch(reject);
    });
  });
}

export const isRecaptchaConfigured = Boolean(RECAPTCHA_SITE_KEY);
