import type { Metadata } from "next";
import Link from "next/link";
import HelpCenter from "@/components/HelpCenter";

export const metadata: Metadata = {
  title: "Hilfe & Tutorials | LohnMail",
  description:
    "LohnMail Schritt für Schritt: Einrichtung, Excel und PDF, Prüfung, Versand und Berichte. Mit 12 Video-Tutorials und Demo-Dateien.",
};

export default function HelpPage() {
  return (
    <div className="help-page">
      <section className="page-intro">
        <div className="container">
          <h1>Hilfe &amp; Tutorials</h1>
          <p>Von der ersten Einrichtung bis zum monatlichen Versand.</p>
          <p><Link href="/hilfe-tutorials/email-adressen-erfassen" className="help-text-link">Einwilligung zum Empfang von Lohnabrechnungen per E-Mail: Musterformular und Excel-Beispiel →</Link></p>
        </div>
      </section>
      <HelpCenter />
    </div>
  );
}
