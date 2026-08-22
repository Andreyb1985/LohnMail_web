import { isRecaptchaConfigured } from "@/lib/recaptcha-client";

export default function RecaptchaNotice() {
  if (!isRecaptchaConfigured) return null;

  return (
    <p className="recaptcha-notice">
      Diese Website ist durch reCAPTCHA geschützt. Es gelten die{" "}
      <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
        Datenschutzerklärung
      </a>{" "}
      und{" "}
      <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">
        Nutzungsbedingungen
      </a>{" "}
      von Google.
    </p>
  );
}
