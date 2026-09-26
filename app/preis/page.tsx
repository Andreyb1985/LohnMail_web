import Link from "next/link";
import { Check, Euro } from "@/components/icons";
import PricingComparison from "@/components/PricingComparison";

const included = [
  "Unbegrenzt viele Mandanten und Unternehmen",
  "PDF-Import",
  "Excel-Abgleich",
  "Automatische Dokumententrennung",
  "Personalnummer-Erkennung",
  "PDF-Verschlüsselung",
  "E-Mail-Versand",
  "Prüfübersicht",
  "Versandprotokoll",
  "Berichte und Exporte",
  "Lizenzverwaltung",
  "Lokale Verarbeitung",
];

export default function PricingPage() {
  return (
    <>
      <section className="page-intro">
        <div className="container">
          <span className="eyebrow">
            <Euro size={14} /> Preis
          </span>
          <h1>Mehr Mandanten. Gleicher Preis.</h1>
          <p>
            Für Steuerkanzleien, Lohnbüros und Unternehmensgruppen.
            Ein fester Monatspreis, ohne zusätzliche Lizenzgebühr pro Mandant.
          </p>
        </div>
      </section>

      <section className="section page-section pricing-page">
        <div className="container pricing-layout">
          <div className="pricing-summary">
            <span className="pricing-plan">LohnMail Professional</span>
            <div className="pricing-price">
              40&nbsp;€ <span>/ Monat</span>
            </div>
            <small className="pricing-tax-note">
              Endpreis. Soweit Umsatzsteuer anfällt, ist sie enthalten.
            </small>
            <p>
              Lohnabrechnungen per E-Mail versenden.
              Für unbegrenzt viele Mandanten und Unternehmen.
            </p>
            <div className="pricing-trial">
              <strong>2 Monate kostenlos testen</strong>
              Während der Testphase 0 €. Danach 40 € pro Monat.
              Die Zahlungsart wählen Sie erst zum Ende der Testphase: Karte oder Rechnung.
            </div>
            <Link className="btn btn-primary btn-lg" href="/testzugang">
              2 Monate kostenlos testen
            </Link>
            <p className="pricing-installation-note">
              Eine Lizenz kann auf einer Installation gleichzeitig aktiviert sein.
              <Link href="/agb"> Lizenzbedingungen</Link>
            </p>
          </div>

          <div className="pricing-included">
            <span className="eyebrow">In der Lizenz enthalten</span>
            <h2>Eine Lizenz. Alle Mandanten.</h2>
            <p className="pricing-growth-copy">
              Ob 10, 50 oder 100 Mandanten: Ihre Kanzlei wächst,
              der Preis je Lizenz bleibt gleich. Der vollständige Arbeitsablauf ist enthalten.
            </p>
            <ul>
              {included.map((item) => (
                <li key={item}>
                  <Check size={17} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <PricingComparison />

      <section className="pricing-next-step">
        <div className="container">
          <div>
            <h2>Der nächste Mandant? Ist schon mitgedacht.</h2>
            <p>Testen Sie LohnMail zwei Monate kostenlos mit Ihren eigenen Arbeitsabläufen.</p>
          </div>
          <Link href="/testzugang" className="btn btn-primary btn-lg">
            Jetzt kostenlos testen
          </Link>
        </div>
      </section>
    </>
  );
}
