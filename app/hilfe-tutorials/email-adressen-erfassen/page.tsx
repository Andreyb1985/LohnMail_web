import type { Metadata } from "next";
import "./guide.css";
import Link from "next/link";
import { Download, FileText } from "@/components/icons";

export const metadata: Metadata = {
  title: "Einwilligung zum E-Mail-Versand erfassen | LohnMail Hilfe",
  description: "Einwilligung zum Empfang von Lohnabrechnungen per E-Mail und die zugehörige E-Mail-Adresse erfassen. Mit Musterformular und Excel-Beispiel für LohnMail.",
};

const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSemlGcwGpV856UHOH4hnWctA9h3cR-242OHvfaI-1ldebCgEg/viewform";

export default function EmailGuidePage() {
  return <>
    <section className="page-intro"><div className="container">
      <Link className="consent-guide-back" href="/hilfe-tutorials">← Alle Anleitungen</Link>
      <span className="eyebrow"><FileText size={14} /> Daten vorbereiten</span>
      <h1>Einwilligung zum Empfang von Lohnabrechnungen per E-Mail</h1>
      <p>Mit dem Formular erfassen Sie die Zustimmung Ihrer Mitarbeitenden zum E-Mail-Versand und die dafür vorgesehene E-Mail-Adresse.</p>
    </div></section>
    <section className="section page-section"><article className="container consent-guide-content consent-guide-guide">
      <div className="consent-guide-downloads">
        <a className="btn btn-primary" href={formUrl} target="_blank" rel="noopener noreferrer">Musterformular ansehen <span aria-hidden="true">↗</span><span className="consent-guide-sr-only"> (neuer Tab, Google Forms)</span></a>
        <a className="btn btn-secondary" href="/downloads/LohnMail_Formular_Excel_DEMO.xlsx" download><Download size={18} /> Excel-Beispiel herunterladen</a>
      </div>
      <p className="consent-guide-note">Nur zur Demonstration: Bitte im Musterformular ausschließlich fiktive Angaben verwenden. Die Excel-Datei enthält fünf erfundene Mitarbeitende und keine echten Einwilligungen.</p>
      <section>
        <h2>1. Ein eigenes Formular vorbereiten</h2>
        <p><strong>Dieses Formular ist nicht nur eine Adressabfrage.</strong> Es dient dazu, die ausdrückliche Zustimmung zum Empfang von Lohnabrechnungen per E-Mail zu erfassen und der jeweiligen Person zuzuordnen. Eine angegebene E-Mail-Adresse allein ist keine Zustimmung.</p>
        <p>Nutzen Sie das Muster als Orientierung für ein eigenes Formular in der für Ihr Unternehmen freigegebenen Umgebung. Unser Musterformular ist kein Sammelpunkt für echte Mitarbeiterdaten.</p>
        <p>Erfassen Sie Vorname, Nachname, Personalnummer, Betriebsstätte und E-Mail-Adresse. Eine feste Auswahlliste für die Betriebsstätte vermeidet unterschiedliche Schreibweisen.</p>
        <p>Sehen Sie eine separate, nicht vorausgewählte Bestätigung zum Empfang von Lohnabrechnungen per E-Mail vor. Bewahren Sie die Antwort mit Datum, dem zugehörigen Einwilligungstext und dessen Version nachvollziehbar auf. Stimmen Sie den Umgang mit Ablehnung und Widerruf vorab im Unternehmen ab.</p>
        <p>Verteilen Sie den Link zu Ihrem eigenen Formular über einen internen Kanal oder einen QR-Code. Fragen Sie keine Passwörter oder Abrechnungsdokumente ab.</p>
      </section>
      <section>
        <h2>2. Antworten exportieren und prüfen</h2>
        <p>Öffnen Sie in Google Forms den Bereich „Antworten“ und verknüpfen Sie die Antworten mit Google Tabellen. Dort können Sie über „Datei → Herunterladen → Microsoft Excel (.xlsx)“ eine Datei herunterladen. Die Menübezeichnungen können je nach Sprache abweichen.</p>
        <ul>
          <li>Liegt eine ausdrückliche Zustimmung zum E-Mail-Versand vor, und wurde sie zwischenzeitlich widerrufen? Übernehmen Sie für diesen Ablauf nur Mitarbeitende mit vorliegender, nicht widerrufener Zustimmung in die Versandliste.</li>
          <li>Stimmen Name, Personalnummer und Betriebsstätte mit Ihren Personalstammdaten überein?</li>
          <li>Gibt es fehlende Angaben, Tippfehler oder mehrere Antworten derselben Person?</li>
          <li>Ist die E-Mail-Adresse der richtigen Person zugeordnet? Klären Sie Unstimmigkeiten über einen bekannten Kontaktweg.</li>
        </ul>
        <p>Die Eingabe in ein Formular allein bestätigt weder die Identität noch die Inhaberschaft einer E-Mail-Adresse.</p>
      </section>
      <section>
        <h2>3. Excel für LohnMail vorbereiten</h2>
        <p className="consent-guide-note">Die Importdatei ersetzt keinen Einwilligungsnachweis. Bewahren Sie diesen getrennt und nachvollziehbar auf. Eine Adresse in der Excel-Datei darf nicht automatisch als erteilte Zustimmung behandelt werden.</p>
        <p>LohnMail erwartet die Spaltenüberschriften in der ersten Zeile des aktiven Tabellenblatts. Benennen Sie die Felder wie folgt um:</p>
        <div className="consent-guide-table-wrap"><table className="consent-guide-table">
          <caption>Zuordnung der Formularfelder zu den Excel-Spalten</caption>
          <thead><tr><th scope="col">Formularfeld</th><th scope="col">Excel-Spalte</th></tr></thead>
          <tbody><tr><td>Personalnummer</td><td><code>PersNr</code> (erforderlich)</td></tr>
            <tr><td>E-Mail Adresse</td><td><code>Email</code> (erforderlich)</td></tr>
            <tr><td>Name / Nachname</td><td><code>Name</code></td></tr>
            <tr><td>Vorname</td><td><code>Vorname</code></td></tr></tbody>
        </table></div>
        <p>Speichern Sie Personalnummern als Text, damit führende Nullen erhalten bleiben, etwa <code>01001</code>. Jede Personalnummer darf pro Importdatei nur einmal vorkommen.</p>
        <p>Bereiten Sie bei mehreren Mandanten getrennte Dateien vor. Die zusätzliche Spalte „Betriebsstätte“ dient der Übersicht; sie bewirkt keine automatische Zuordnung zu einem Mandanten.</p>
        <p>Im Download steht das vorbereitete Blatt <code>Import_DEMO</code> an erster Stelle. <code>Formular_Beispiel</code> zeigt lokal erstellte Musterantworten und Hinweise, keinen echten Export. Wählen Sie vor dem Speichern das Blatt <code>Import_DEMO</code> aus.</p>
      </section>
      <section>
        <h2>4. Beim richtigen Mandanten laden</h2>
        <p>Wählen Sie in LohnMail den passenden Mandanten und laden Sie die vorbereitete Excel-Datei. Prüfen Sie die Zuordnung und offene Hinweise vor der weiteren Verarbeitung.</p>
        <p>Es besteht keine automatische Synchronisierung mit Google Forms. Neue oder korrigierte Angaben müssen erneut geprüft und in die Excel-Datei übernommen werden.</p>
        <p className="consent-guide-note">Mit der Beispieldatei nur den Import testen. Keine echten E-Mails versenden. Die Adressen unter example.com sind Demonstrationsdaten. Je nach gewählter PDF-Passwortregel sind zusätzliche Stammdaten erforderlich.</p>
      </section>
      <section>
        <h2>Vor dem Einsatz im Unternehmen</h2>
        <p>Das Muster ersetzt keine Prüfung Ihrer betrieblichen Anforderungen. Lassen Sie Formular, Datenschutzhinweise und Einwilligungstext vor einem echten Einsatz prüfen und anpassen. Legen Sie außerdem fest, wer auf Antworten zugreifen darf und wie lange diese aufbewahrt werden.</p>
      </section>
      <p className="consent-guide-support">Fragen zur Vorbereitung für LohnMail? <a href="mailto:support@lohn-mail.de">support@lohn-mail.de</a></p>
    </article></section>
  </>;
}

