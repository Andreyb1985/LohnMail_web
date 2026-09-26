import {
  BarChart, Building, ClipboardList, FileText, Key, LayoutDashboard,
  Lock, Mail, Send, Table,
} from "./icons";

const firstRun = [
  { title: "Unternehmen einrichten", text: "Mandanten anlegen und seine Mitarbeiterliste auswählen.", target: "unternehmen" },
  { title: "Versand konfigurieren", text: "Absender, Verbindung, Nachrichtenvorlage und PDF-Schutz prüfen.", target: "einstellungen" },
  { title: "PDF und Excel verarbeiten", text: "Abrechnungszeitraum und Quelle wählen, Verarbeitung starten.", target: "verarbeitung" },
  { title: "Ergebnisse kontrollieren", text: "Zuordnungen prüfen und fehlende oder fehlerhafte Daten klären.", target: "pruefung" },
  { title: "Versand freigeben", text: "Empfänger auswählen, Vorschau kontrollieren und Versand bestätigen.", target: "versand" },
  { title: "Berichte prüfen", text: "Versandstatus kontrollieren und offene Fälle nachbearbeiten.", target: "berichte" },
];

const topics = [
  {
    id: "dashboard", title: "Dashboard", subtitle: "Den aktuellen Stand im Blick behalten", icon: LayoutDashboard,
    intro: "Das Dashboard zeigt den aktuellen Mandanten, den letzten Lauf und den Systemstatus.",
    steps: [
      "Prüfen Sie oben rechts, ob das richtige Unternehmen ausgewählt ist.",
      "Kontrollieren Sie den Status der Excel-Daten und der Versandkonfiguration.",
      "Öffnen Sie die Verarbeitung für einen neuen Lauf oder die Berichte zur Kontrolle eines abgeschlossenen Laufs.",
    ],
    note: "Die angezeigten Ergebnisse beziehen sich auf den ausgewählten Mandanten. Wechseln Sie ihn vor der Arbeit, nicht erst vor dem Versand.",
  },
  {
    id: "unternehmen", title: "Unternehmen & Mandanten", subtitle: "Unternehmen und Mitarbeiterdateien zuordnen", icon: Building,
    intro: "Ein Mandant steht für ein Unternehmen, dessen Abrechnungen Sie bearbeiten. Sie können beliebig viele Mandanten verwenden.",
    steps: [
      "Öffnen Sie Unternehmen und wählen Sie Neuer Mandant. Vergeben Sie einen Namen und eine eindeutige Mandanten-ID.",
      "Ordnen Sie dem Mandanten über Excel auswählen seine Mitarbeiterdatei zu.",
      "Kontrollieren Sie die aktive Konfiguration und speichern Sie Änderungen mit Änderungen speichern.",
      "Wechseln Sie künftig über die Mandantenauswahl oben rechts zwischen den Unternehmen. Die zugehörige Excel-Datei wird mitgeladen.",
    ],
    note: "Standardmäßig gelten die globalen E-Mail-Einstellungen. Ein eigener Absender oder SMTP-Zugang lässt sich unter Eigene SMTP Einstellungen für den Mandanten hinterlegen und testen.",
  },
  {
    id: "dateien", title: "Excel & Abrechnungs-PDF", subtitle: "Die Grundlage für die richtige Zuordnung", icon: Table,
    intro: "LohnMail verbindet Abrechnungen und Empfänger über die Personalnummer. Die Reihenfolge der Zeilen oder PDF-Seiten ist dafür nicht entscheidend.",
    steps: [
      "Verwenden Sie in der Excel-Datei die Spalten PersNr und Email. Name und Vorname können ergänzend enthalten sein.",
      "Tragen Sie pro Person eine eindeutige Personalnummer ein. Formatieren Sie Personalnummern als Text, damit führende Nullen erhalten bleiben.",
      "Prüfen Sie die Empfängeradressen und die Übereinstimmung der Personalnummern zwischen Excel und PDF.",
      "Verwenden Sie eine Gesamt-PDF oder bereits getrennte PDF-Dateien. Kontrollieren Sie nach der Verarbeitung, ob alle Dokumente richtig erkannt wurden.",
    ],
    note: "Die Beispieldateien finden Sie unter Demo-Dateien. Seiten ohne erkennbare Personalnummer müssen geklärt werden, bevor Sie den Versand freigeben.",
  },
  {
    id: "einstellungen", title: "Einstellungen & E-Mail", subtitle: "Absender, Verbindung und Monatsvorlage einrichten", icon: Mail,
    intro: "Richten Sie vor dem ersten echten Versand die Verbindung und Ihre Nachrichtenvorlage ein.",
    steps: [
      "Öffnen Sie Einstellungen → E-Mail und wählen Sie SMTP. Tragen Sie Server, Port, Sicherheit, Benutzername und Passwort gemäß Ihrem E-Mail-Anbieter ein.",
      "Ergänzen Sie die vollständige Absenderadresse und den Absendernamen. Klicken Sie auf E-Mail speichern und anschließend auf Verbindung testen.",
      "Für Outlook Classic unter Windows wählen Sie diese Versandmethode, laden die Konten und wählen das passende Konto. Outlook muss geöffnet und angemeldet sein; das neue Outlook ist nicht Outlook Classic.",
      "Unter Vorlagen legen Sie Betreff und Nachrichtentext fest. Verwenden Sie bei Bedarf {monat}, {jahr}, {from_name} und {company_name}, danach Vorlage speichern.",
      "Stellen Sie unter Allgemein den Abrechnungszeitraum passend zu Ihren Dokumenten ein und speichern Sie ihn.",
    ],
    note: "Ein erfolgreicher Verbindungstest ist noch kein Zustellnachweis. Prüfen Sie zusätzlich einen Testversand an eine berechtigte interne Empfängeradresse.",
  },
  {
    id: "pdf-schutz", title: "PDF-Schutz", subtitle: "Passwortgeschützte Anhänge vorbereiten", icon: Lock,
    intro: "Die Einstellungen für PDF-Passwörter finden Sie unter Einstellungen → Sicherheit.",
    steps: [
      "Aktivieren Sie PDF Passwort aktivieren.",
      "Wählen Sie die gewünschte Passwortbasis, zum Beispiel Personalnummer oder Geburtsdatum, und gegebenenfalls einen Präfix oder Suffix.",
      "Speichern Sie mit Verschlüsselung speichern und bereiten Sie die Dokumente neu vor.",
      "Öffnen Sie vor dem echten Versand eine vorbereitete Datei und prüfen Sie, ob sie mit dem vorgesehenen Passwort lesbar ist.",
    ],
    note: "Eine Personalnummer allein ist leicht zu erraten. Stimmen Sie die Passwortregel intern ab und teilen Sie Passwörter über einen getrennten Kanal mit.",
  },
  {
    id: "verarbeitung", title: "Verarbeitung", subtitle: "Den Monatslauf starten", icon: FileText,
    intro: "Hier wählen Sie die Quelldateien für das aktive Unternehmen und starten den Abgleich.",
    steps: [
      "Kontrollieren Sie Mandant, Mitarbeiterdatei und Abrechnungszeitraum.",
      "Wählen Sie Gesamt-PDF für ein Sammeldokument oder Ordner für bereits getrennte Abrechnungen.",
      "Wählen Sie die passende Quelle und kontrollieren Sie die Angaben zu PDF, Excel und Ausgabe. Nach einem Moduswechsel wählen Sie die Quelle erneut aus.",
      "Klicken Sie auf Verarbeitung starten. Öffnen Sie anschließend die Prüfung, bevor Sie Empfänger für den Versand auswählen.",
    ],
    note: "Bearbeiten Sie jeweils die Dokumente des ausgewählten Mandanten. Vermischen Sie keine Abrechnungen verschiedener Unternehmen in einem Lauf.",
  },
  {
    id: "pruefung", title: "Prüfung", subtitle: "Fehler und fehlende Daten vor dem Versand klären", icon: ClipboardList,
    intro: "Die Prüfübersicht unterscheidet kritische Probleme, Warnungen, Hinweise und unauffällige Ergebnisse.",
    steps: [
      "Prüfen Sie zuerst kritische Meldungen, anschließend Warnungen und Hinweise.",
      "Suchen Sie bei Rückfragen nach Name, Personalnummer, E-Mail-Adresse oder Dokument und kontrollieren Sie die Zuordnung.",
      "Korrigieren Sie fehlerhafte Daten in der Quelldatei und führen Sie die Verarbeitung erneut aus.",
      "Für Mitarbeitende ohne nutzbare E-Mail-Adresse öffnen Sie PDF ohne E-Mail. Die gesammelten Dokumente können intern für eine alternative Übergabe verwendet werden.",
    ],
    note: "Die Sammeldatei enthält mehrere Abrechnungen. Geben Sie jeder Person nur ihre eigene Abrechnung, niemals die gesamte Sammeldatei.",
  },
  {
    id: "versand", title: "Versand", subtitle: "Vorbereiten, prüfen und ausdrücklich bestätigen", icon: Send,
    intro: "Die Vorbereitung und der tatsächliche Versand sind getrennte Schritte. Versand vorbereiten allein verschickt noch keine E-Mails.",
    steps: [
      "Öffnen Sie Versand, filtern Sie nach Versandbereit und markieren Sie die gewünschten Empfänger.",
      "Klicken Sie auf Versand vorbereiten. Nur versandfähige Einträge mit Empfängeradresse und Dokument kommen für den Versand infrage.",
      "Kontrollieren Sie in der Vorschau Empfänger, Absender, Betreff, Nachricht, Anhänge, Versandmethode, Unternehmen und Abrechnungszeitraum.",
      "Klicken Sie auf Jetzt senden. Prüfen Sie die Bestätigung und lösen Sie den Versand erst mit Versand starten aus.",
      "Kontrollieren Sie danach Gesendet und Fehler. Bearbeiten Sie fehlgeschlagene Einträge gezielt, statt alle Empfänger erneut anzuschreiben.",
    ],
    note: "Nach Änderungen an Absender, Vorlage oder Versandmethode speichern Sie die Einstellungen und bereiten den Versand erneut vor.",
  },
  {
    id: "berichte", title: "Berichte", subtitle: "Ergebnisse und offene Fälle nachvollziehen", icon: BarChart,
    intro: "Unter Berichte finden Sie die erzeugten Dateien und Protokolle des Laufs. Über Suche und Filter lässt sich die gewünschte Ausgabe öffnen.",
    steps: [
      "audit_check.xlsx enthält die Prüfergebnisse, Zuordnungen und erkannten Probleme.",
      "send_report.xlsx dokumentiert erfolgreiche, übersprungene und fehlerhafte Versandvorgänge.",
      "ohne_email_gesamt.pdf sammelt die Abrechnungen ohne nutzbare Empfängeradresse für die interne Nachbearbeitung.",
      "Im Ausgabeordner finden Sie außerdem die vorbereiteten PDF-Dateien. Deren Existenz bestätigt noch keinen Versand.",
    ],
    note: "Bei SMTP bedeutet eine erfolgreiche Übergabe an den Mailserver nicht automatisch, dass die Nachricht im Posteingang angekommen oder gelesen worden ist.",
  },
  {
    id: "nachricht", title: "Nachricht", subtitle: "Eine freie Mitteilung an ausgewählte Mitarbeitende senden", icon: Mail,
    intro: "Neben dem Abrechnungsversand können Sie eine eigene Nachricht an Empfänger des aktiven Mandanten vorbereiten.",
    steps: [
      "Öffnen Sie Nachricht und wählen Sie die gewünschten Empfänger aus.",
      "Tragen Sie Betreff und Nachrichtentext ein. Ergänzen Sie bei Bedarf über Dateien auswählen gemeinsame Anhänge.",
      "Kontrollieren Sie den Inhalt mit Vorschau laden und prüfen Sie Empfänger sowie Anhänge.",
      "Starten Sie den Versand über Nachricht senden und bestätigen Sie die angezeigte Rückfrage.",
    ],
    note: "Gemeinsame Anhänge erhalten alle ausgewählten Empfänger. Individuelle Lohnabrechnungen versenden Sie über den Bereich Versand, nicht als gemeinsamen Anhang einer freien Nachricht.",
  },
  {
    id: "lizenzen", title: "Lizenzen", subtitle: "Testphase und Aktivierung verwalten", icon: Key,
    intro: "Unter Lizenzen sehen Sie den aktuellen Lizenzstatus und die verbleibende Testzeit.",
    steps: [
      "Aktualisieren Sie den Status mit Lizenz prüfen.",
      "Wenn Sie einen Lizenzschlüssel erhalten haben, verwenden Sie Lizenzschlüssel eingeben und folgen der Aktivierung.",
      "Nutzen Sie die angebotenen Links zur Lizenz- und Zahlungsverwaltung, wenn Sie Ihren Vertrag verwalten möchten.",
    ],
    note: "Bei Verbindungs- oder Aktivierungsproblemen prüfen Sie zuerst den Status und wenden sich mit der Fehlermeldung an den Support. Kaufen Sie nicht vorsorglich eine zweite Lizenz.",
  },
];

export default function HelpGuide() {
  return (
    <div className="help-guide">
      <section aria-labelledby="first-run-title">
        <div className="help-section-heading">
          <h2 id="first-run-title">Ihr erster Monatslauf</h2>
          <p>Einmal einrichten. Danach jeden Monat denselben Ablauf durchgehen.</p>
        </div>
        <ol className="help-steps">
          {firstRun.map((step, index) => (
            <li key={step.target}>
              <span className="help-step-number" aria-hidden="true">{index + 1}</span>
              <div>
                <h3>
                  <a
                    href={`#funktion-${step.target}`}
                    onClick={() => {
                      const topic = document.getElementById(`funktion-${step.target}`);
                      if (topic instanceof HTMLDetailsElement) topic.open = true;
                    }}
                  >{step.title}</a>
                </h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="help-functions" aria-labelledby="functions-title">
        <div className="help-section-heading">
          <h2 id="functions-title">Die Funktionen im Detail</h2>
          <p>Einrichtung, tägliche Arbeit und Kontrolle, nach Programmbereich geordnet.</p>
        </div>
        <div className="help-topics">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <details className="help-topic" id={`funktion-${topic.id}`} key={topic.id}>
                <summary>
                  <span className="help-topic-icon"><Icon size={21} /></span>
                  <span className="help-topic-label"><strong>{topic.title}</strong><small>{topic.subtitle}</small></span>
                  <span className="help-topic-toggle" aria-hidden="true" />
                </summary>
                <div className="help-topic-body">
                  <p>{topic.intro}</p>
                  <ol>{topic.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                  <p className="help-note">{topic.note}</p>
                </div>
              </details>
            );
          })}
        </div>
      </section>
    </div>
  );
}
