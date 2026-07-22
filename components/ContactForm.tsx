"use client";

import { useState } from "react";
import { CheckCircle, Download, Monitor } from "./icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    const subject = `LohnMail Testzugang – ${String(payload.firmenname || "Anfrage")}`;
    const body = [
      `Firmenname: ${String(payload.firmenname || "")}`,
      `Ansprechpartner: ${String(payload.ansprechpartner || "")}`,
      `E-Mail: ${String(payload.email || "")}`,
      `Telefonnummer: ${String(payload.telefon || "Nicht angegeben")}`,
      `Anzahl Mitarbeitende: ${String(payload.mitarbeitende || "Nicht angegeben")}`,
      "",
      "Nachricht:",
      String(payload.nachricht || "Keine zusätzliche Nachricht."),
    ].join("\n");

    try {
      // Anfrage an die eigene API-Route senden.
      // Dort kann z. B. ein E-Mail-Versand (Resend, Nodemailer, SMTP)
      // oder ein CRM-Eintrag angebunden werden.
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    } catch {
      // Auch bei Netzwerkfehlern die Bestätigung zeigen —
      // in Produktion hier ggf. Fehlerbehandlung ergänzen.
    } finally {
      setSending(false);
      setSent(true);
      window.setTimeout(() => {
        window.location.href = `mailto:support@lohn-mail.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      }, 150);
    }
  }

  if (sent) {
    return (
      <div className="contact-wrap download-screen" role="status">
        <div className="download-heading">
          <div className="success-icon">
            <CheckCircle size={28} />
          </div>
          <div>
            <h3>Vielen Dank. Wählen Sie Ihre Version.</h3>
            <p>Die Anfrage an <strong>support@lohn-mail.de</strong> wurde vorbereitet.</p>
          </div>
        </div>

        <div className="download-options" aria-label="LohnMail herunterladen">
          <a href="/downloads/LohnMail-Setup-Windows.exe" download>
            <span className="platform-icon"><Monitor size={24} /></span>
            <span><strong>Für Windows</strong><small>Windows 10 und 11 · EXE</small></span>
            <Download size={20} />
          </a>
          <a href="/downloads/LohnMail-macOS.dmg" download>
            <span className="platform-icon platform-text">MAC</span>
            <span><strong>Für macOS</strong><small>Apple Silicon und Intel · DMG</small></span>
            <Download size={20} />
          </a>
        </div>

        <p className="download-note">Das E-Mail-Programm öffnet sich separat. Senden Sie die vorbereitete Anfrage ab, damit wir Sie persönlich kontaktieren können.</p>
      </div>
    );
  }

  return (
    <div className="contact-wrap">
      <form className="form-grid" onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="firma">Firmenname *</label>
          <input id="firma" name="firmenname" type="text" required autoComplete="organization" />
        </div>

        <div className="form-field">
          <label htmlFor="name">Ansprechpartner *</label>
          <input id="name" name="ansprechpartner" type="text" required autoComplete="name" />
        </div>

        <div className="form-field">
          <label htmlFor="email">E-Mail *</label>
          <input id="email" name="email" type="email" required autoComplete="email" />
        </div>

        <div className="form-field">
          <label htmlFor="tel">Telefonnummer</label>
          <input id="tel" name="telefon" type="tel" autoComplete="tel" />
        </div>

        <div className="form-field full">
          <label htmlFor="anzahl">Anzahl Mitarbeitende</label>
          <select id="anzahl" name="mitarbeitende" defaultValue="">
            <option value="" disabled>
              Bitte auswählen
            </option>
            <option value="1-49">1 – 49</option>
            <option value="50-199">50 – 199</option>
            <option value="200-499">200 – 499</option>
            <option value="500-1000">500 – 1000</option>
            <option value="1000+">mehr als 1000</option>
          </select>
        </div>

        <div className="form-field full">
          <label htmlFor="nachricht">Nachricht</label>
          <textarea id="nachricht" name="nachricht" rows={4} />
        </div>

        <label className="form-check">
          <input type="checkbox" name="datenschutz" required />
          <span>
            Ich habe die <a href="#datenschutz" style={{ textDecoration: "underline" }}>Datenschutzerklärung</a>{" "}
            gelesen und stimme der Verarbeitung meiner Angaben zur Bearbeitung der Anfrage zu. *
          </span>
        </label>

        <button type="submit" className="btn btn-primary btn-lg" disabled={sending}>
          {sending ? "Wird gesendet…" : "Testzugang anfragen"}
        </button>
      </form>
    </div>
  );
}
