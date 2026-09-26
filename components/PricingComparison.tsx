"use client";

import { useState } from "react";
import { Euro } from "./icons";
import styles from "./PricingComparison.module.css";

const MONTHLY_PRICE = 40;
const euro = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export default function PricingComparison() {
  const [currentCost, setCurrentCost] = useState("200");
  const [licenses, setLicenses] = useState("1");
  const amount = Number(currentCost);
  const licenseCount = Number(licenses);
  const costValid = currentCost.trim() !== "" && Number.isFinite(amount) && amount >= 0 && amount <= 1_000_000;
  const licensesValid = licenses.trim() !== "" && Number.isInteger(licenseCount) && licenseCount >= 1 && licenseCount <= 1_000;
  const valid = costValid && licensesValid;
  // Compare whole cents so decimal input does not create rounding differences.
  const currentCents = Math.round(amount * 100);
  const lohnmailCents = licenseCount * MONTHLY_PRICE * 100;
  const differenceCents = currentCents - lohnmailCents;
  const savings = differenceCents > 0;
  const equal = differenceCents === 0;
  const money = (cents: number) => euro.format(cents / 100);

  return (
    <section className={styles.section} id="kostenvergleich" aria-labelledby="comparison-title">
      <div className="container">
        <div className={styles.heading}>
          <span className="eyebrow"><Euro size={14} /> Ihr Kostenvergleich</span>
          <h2 id="comparison-title">Was zahlen Sie heute für die digitale Zustellung?</h2>
          <p>Vergleichen Sie Ihre laufenden Lizenzkosten mit LohnMail.</p>
        </div>

        <div className={styles.layout}>
          <div className={styles.inputs}>
            <label htmlFor="current-license-cost">Bisherige Lizenzkosten pro Monat</label>
            <div className={styles.amountInput}>
              <input
                id="current-license-cost"
                type="number"
                inputMode="decimal"
                min="0"
                max="1000000"
                step="0.01"
                value={currentCost}
                onChange={(event) => setCurrentCost(event.target.value)}
                aria-invalid={!costValid}
                aria-describedby="current-cost-hint current-cost-error"
              />
              <span aria-hidden="true">€</span>
            </div>
            <p id="current-cost-hint" className={styles.hint}>200 € sind ein Rechenbeispiel, keine Preisangabe zu einem bestimmten Anbieter.</p>
            <p id="current-cost-error" className={styles.error} hidden={costValid}>Bitte einen Betrag zwischen 0 und 1.000.000 € eingeben.</p>

            <label htmlFor="lohnmail-license-count">Benötigte LohnMail-Lizenzen</label>
            <input
              id="lohnmail-license-count"
              className={styles.licenseInput}
              type="number"
              inputMode="numeric"
              min="1"
              max="1000"
              step="1"
              value={licenses}
              onChange={(event) => setLicenses(event.target.value)}
              aria-invalid={!licensesValid}
              aria-describedby="license-count-hint license-count-error"
            />
            <p id="license-count-hint" className={styles.hint}>40 € pro Lizenz und Monat. Unbegrenzt viele Mandanten je Lizenz, eine gleichzeitig aktive Installation.</p>
            <p id="license-count-error" className={styles.error} hidden={licensesValid}>Bitte eine ganze Zahl zwischen 1 und 1.000 eingeben.</p>
          </div>

          <div className={styles.comparison}>
            <table>
              <caption>Laufende Lizenzkosten</caption>
              <thead>
                <tr><th scope="col">Zeitraum</th><th scope="col">Bisher*</th><th scope="col">LohnMail</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">Pro Monat</th><td>{valid ? money(currentCents) : "—"}</td><td>{valid ? money(lohnmailCents) : "—"}</td></tr>
                <tr><th scope="row">Pro Jahr</th><td>{valid ? money(currentCents * 12) : "—"}</td><td>{valid ? money(lohnmailCents * 12) : "—"}</td></tr>
              </tbody>
            </table>

            <div className={`${styles.result} ${valid && savings ? styles.savings : ""}`} aria-live="polite" aria-atomic="true">
              {valid ? (
                <>
                  <span className={styles.resultLabel}>{equal ? "Kein Preisunterschied" : savings ? "Mögliche jährliche Ersparnis*" : "Jährliche Mehrkosten im Vergleich*"}</span>
                  <strong className={styles.resultAmount}>{money(Math.abs(differenceCents) * 12)}</strong>
                  <p>{equal
                    ? "Ihre bisherigen Kosten und die gewählte Anzahl an LohnMail-Lizenzen kosten gleich viel."
                    : `${money(Math.abs(differenceCents))} ${savings ? "weniger" : "mehr"} Lizenzkosten pro Monat bei ${licenseCount === 1 ? "einer LohnMail-Lizenz" : `${licenseCount} LohnMail-Lizenzen`}.`}</p>
                </>
              ) : (
                <p className={styles.emptyResult}>Geben Sie gültige Monatskosten und eine Lizenzanzahl ein, um den Vergleich zu berechnen.</p>
              )}
            </div>
          </div>
        </div>

        <p className={styles.disclaimer}>
          * Rechenbeispiel auf Basis Ihrer Eingaben. Voreinstellung: 200 € bisherige
          monatliche Lizenzkosten und eine LohnMail-Lizenz für 40 € monatlich als Endpreis.
          Berechnet für zwölf regulär bezahlte Monate, ohne kostenlose Testphase.
          Die tatsächliche Ersparnis hängt von Ihrem bisherigen Vertrag und der benötigten
          Lizenzanzahl ab. Leistungsumfang und Zusatzkosten können sich unterscheiden.
          Vergleichen Sie Beträge auf derselben Steuerbasis. Die Beispielkosten sind keine
          allgemeine Preisangabe für andere Anbieter.
        </p>
      </div>
    </section>
  );
}
