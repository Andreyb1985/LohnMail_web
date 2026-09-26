import type { Metadata } from "next";
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
        </div>
      </section>
      <HelpCenter />
    </div>
  );
}
