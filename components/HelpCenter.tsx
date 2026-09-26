"use client";

import { useEffect, useRef, useState } from "react";
import HelpGuide from "./HelpGuide";
import DatevExportGuide from "./DatevExportGuide";
import TutorialLibrary from "./TutorialLibrary";
import { Download, FileText, Mail, Table } from "./icons";

const tabs = [
  { id: "anleitung", label: "Anleitung" },
  { id: "datev", label: "DATEV-Export" },
  { id: "videos", label: "Video-Tutorials" },
  { id: "dateien", label: "Demo-Dateien" },
  { id: "fragen", label: "Fragen & Hilfe" },
] as const;

type TabId = typeof tabs[number]["id"];

const questions = [
  {
    title: "Was mache ich, wenn die Excel-Datei nicht geladen wird?",
    answer: "Prüfen Sie zuerst den aktiven Mandanten. Wurde die Datei verschoben oder umbenannt, wählen Sie sie unter Unternehmen → Excel auswählen erneut aus. Kontrollieren Sie die Spalten PersNr und Email sowie eindeutige Personalnummern.",
  },
  {
    title: "Warum werden PDF und Mitarbeitende nicht richtig zugeordnet?",
    answer: "Vergleichen Sie die Personalnummer im PDF mit PersNr in Excel, einschließlich führender Nullen. Kontrollieren Sie außerdem, ob die Dateien zum ausgewählten Mandanten gehören. Korrigieren Sie die Quelle und starten Sie die Verarbeitung erneut. Unklare Zuordnungen nicht versenden.",
  },
  {
    title: "Wie gehe ich mit Mitarbeitenden ohne E-Mail-Adresse um?",
    answer: "Diese Fälle bleiben in der Prüfung sichtbar und werden nicht regulär per E-Mail versendet. Über PDF ohne E-Mail erhalten Sie eine Sammeldatei für die interne Nachbearbeitung. Organisieren Sie eine alternative Übergabe und geben Sie jeder Person ausschließlich ihre eigene Abrechnung.",
  },
  {
    title: "Warum schlägt der SMTP-Verbindungstest fehl?",
    answer: "Prüfen Sie Server, Port, Verschlüsselung, Benutzername und Passwort anhand der Angaben Ihres Anbieters. Manche Anbieter verlangen ein App-Passwort oder eine ausdrückliche SMTP-Freigabe. Speichern Sie die Einstellungen vor dem Test. Verwenden Sie nur die vom Anbieter vorgesehenen Sicherheitsoptionen.",
  },
  {
    title: "Versand vorbereiten wurde ausgeführt. Sind die E-Mails schon versendet?",
    answer: "Nein. Die Vorbereitung erstellt die Warteschlange und die Dokumente. Prüfen Sie danach die Vorschau. Der tatsächliche Versand wird über Jetzt senden und anschließend Versand starten ausdrücklich bestätigt.",
  },
  {
    title: "Einige Nachrichten sind fehlgeschlagen. Soll ich den ganzen Lauf wiederholen?",
    answer: "Prüfen Sie zuerst die Fehleransicht und den Versandbericht. Klären Sie die betroffenen Einträge und wählen Sie nur die notwendigen Empfänger für einen erneuten Versand. Ein kompletter erneuter Lauf kann dazu führen, dass bereits versendete Abrechnungen doppelt ankommen.",
  },
  {
    title: "Der Testzugang oder die Lizenz wird nicht erkannt. Was hilft?",
    answer: "Öffnen Sie Lizenzen und klicken Sie auf Lizenz prüfen. Kontrollieren Sie die Internetverbindung und den eingegebenen Schlüssel. Falls die Meldung bestehen bleibt, senden Sie dem Support die Programmversion und den genauen Fehlertext, aber keine Passwörter oder vertraulichen Abrechnungen.",
  },
];

function DemoFiles() {
  return (
    <section aria-labelledby="demo-title">
      <div className="help-section-heading">
        <h2 id="demo-title">Mit Beispieldaten ausprobieren</h2>
        <p>Eine Mitarbeiterliste und drei passende Beispielabrechnungen für Ihren ersten Probelauf.</p>
      </div>
      <div className="help-demo-layout">
        <div>
          <h3>So verwenden Sie die Dateien</h3>
          <ol className="help-instructions">
            <li>Laden Sie beide Dateien herunter und legen Sie einen separaten Demo-Mandanten an.</li>
            <li>Ordnen Sie ihm Mitarbeiter-Demo.xlsx zu. Die Spalten heißen PersNr, Email, Name und Vorname.</li>
            <li>Wählen Sie in Verarbeitung den Modus Gesamt-PDF und die Datei Lohnabrechnung-Demo.pdf.</li>
            <li>Stellen Sie den Zeitraum passend zur Beispielabrechnung ein. Starten Sie die Verarbeitung und prüfen Sie die Zuordnungen.</li>
          </ol>
          <p className="help-note">Die Dateien enthalten Demodaten. Für einen echten Testversand ersetzen Sie Empfängeradressen ausschließlich durch eigene, autorisierte Testadressen. Versenden Sie nicht an die Beispieladressen.</p>
        </div>
        <div className="tutorial-downloads">
          <a href="/tutorial/demo/Mitarbeiter-Demo.xlsx" download>
            <span className="tutorial-file-icon"><Table size={22} /></span>
            <span><strong>Mitarbeiter-Demo.xlsx</strong><small>Excel-Mitarbeiterliste · 8 KB</small></span>
            <Download size={18} />
          </a>
          <a href="/tutorial/demo/Lohnabrechnung-Demo.pdf" download>
            <span className="tutorial-file-icon"><FileText size={22} /></span>
            <span><strong>Lohnabrechnung-Demo.pdf</strong><small>3 Beispielabrechnungen · 65 KB</small></span>
            <Download size={18} />
          </a>
          <p className="help-download-note">Die Kapitel Excel, PDF und Prüfung zeigen die einzelnen Arbeitsschritte.</p>
          <a className="help-text-link" href="#videos">Zu den Video-Tutorials <span aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  );
}

function HelpQuestions() {
  return (
    <section aria-labelledby="questions-title">
      <div className="help-section-heading">
        <h2 id="questions-title">Wenn etwas nicht wie erwartet funktioniert</h2>
        <p>Antworten auf häufige Fragen bei Einrichtung und Monatslauf.</p>
      </div>
      <div className="help-topics help-questions">
        {questions.map((question) => (
          <details className="help-topic" key={question.title}>
            <summary><strong>{question.title}</strong><span className="help-topic-toggle" aria-hidden="true" /></summary>
            <div className="help-topic-body"><p>{question.answer}</p></div>
          </details>
        ))}
      </div>
      <div className="help-support">
        <div>
          <h3>Ihre Frage ist noch offen?</h3>
          <p>Nennen Sie uns Programmversion, Betriebssystem und die genaue Fehlermeldung. Bitte keine Passwörter oder personenbezogenen Lohnunterlagen mitsenden.</p>
        </div>
        <a className="btn btn-secondary" href="mailto:support@lohn-mail.de"><Mail size={18} /> support@lohn-mail.de</a>
      </div>
    </section>
  );
}

export default function HelpCenter() {
  const [active, setActive] = useState<TabId>("anleitung");
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.slice(1);
      const tab = tabs.find((item) => item.id === hash);
      if (tab) setActive(tab.id);
      else if (hash.startsWith("funktion-") || !hash) setActive("anleitung");
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
    };
  }, []);

  useEffect(() => {
    const revealTopic = () => {
      const hash = window.location.hash.slice(1);
      if (active !== "anleitung" || !hash.startsWith("funktion-")) return;
      const topic = document.getElementById(hash);
      if (topic instanceof HTMLDetailsElement) {
        topic.open = true;
        topic.scrollIntoView({ block: "start" });
      }
    };
    revealTopic();
    window.addEventListener("hashchange", revealTopic);
    return () => window.removeEventListener("hashchange", revealTopic);
  }, [active]);

  const selectTab = (id: TabId) => {
    setActive(id);
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <div className="help-center container">
      <div className="help-tabs" role="tablist" aria-label="Hilfebereiche">
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            ref={(element) => { tabRefs.current[index] = element; }}
            type="button"
            role="tab"
            id={`help-tab-${tab.id}`}
            aria-selected={active === tab.id}
            aria-controls={`help-panel-${tab.id}`}
            tabIndex={active === tab.id ? 0 : -1}
            onClick={() => selectTab(tab.id)}
            onKeyDown={(event) => {
              let next: number;
              if (event.key === "ArrowRight") next = (index + 1) % tabs.length;
              else if (event.key === "ArrowLeft") next = (index - 1 + tabs.length) % tabs.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = tabs.length - 1;
              else return;
              event.preventDefault();
              selectTab(tabs[next].id);
              tabRefs.current[next]?.focus();
            }}
          >{tab.label}</button>
        ))}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`help-panel-${tab.id}`}
          aria-labelledby={`help-tab-${tab.id}`}
          hidden={active !== tab.id}
          tabIndex={0}
          className="help-panel"
        >
          {active === tab.id && (
            tab.id === "anleitung" ? <HelpGuide /> :
            tab.id === "datev" ? <DatevExportGuide /> :
            tab.id === "videos" ? <TutorialLibrary /> :
            tab.id === "dateien" ? <DemoFiles /> : <HelpQuestions />
          )}
        </div>
      ))}
    </div>
  );
}
