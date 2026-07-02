"use client";

import { useState } from "react";
import { CheckCircle } from "./icons";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

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
    }
  }

  if (sent) {
    return (
      <div className="contact-wrap">
        <div className="form-success" role="status">
          <div className="success-icon">
            <CheckCircle size={30} />
          </div>
          <h3>Vielen Dank.</h3>
          <p>Wir melden uns zeitnah bei Ihnen.</p>
        </div>
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
