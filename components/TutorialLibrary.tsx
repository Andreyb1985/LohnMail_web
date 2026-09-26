"use client";

import { useRef, useState } from "react";

const chapters = [
  {
    title: "Überblick",
    duration: "0:32",
    file: "01-Ueberblick.mp4",
    text: "Vom Mandanten bis zur Versandkontrolle: der vollständige Ablauf in LohnMail.",
  },
  {
    title: "Unternehmen anlegen",
    duration: "0:43",
    file: "02-Unternehmen.mp4",
    text: "Einen Mandanten einrichten und die passende Mitarbeiterliste zuordnen.",
  },
  {
    title: "Excel vorbereiten",
    duration: "1:01",
    file: "03-Excel.mp4",
    text: "Personalnummer, E-Mail-Adresse, Name und Vorname korrekt strukturieren.",
  },
  {
    title: "PDF verstehen",
    duration: "0:44",
    file: "04-PDF.mp4",
    text: "Abrechnungen über die Personalnummer sicher den Mitarbeitenden zuordnen.",
  },
  {
    title: "E-Mail einrichten",
    duration: "1:25",
    file: "05-Mail.mp4",
    text: "SMTP oder Outlook Classic als Versandmethode konfigurieren.",
  },
  {
    title: "Vorlagen erstellen",
    duration: "0:43",
    file: "06-Vorlagen.mp4",
    text: "Betreff, Nachrichtentext und Platzhalter für den Monatslauf vorbereiten.",
  },
  {
    title: "PDF schützen",
    duration: "0:53",
    file: "07-PDF-Schutz.mp4",
    text: "Passwortschutz aktivieren und geschützte Anhänge kontrollieren.",
  },
  {
    title: "Prüfung durchführen",
    duration: "1:21",
    file: "08-Pruefung.mp4",
    text: "PDF und Excel einlesen, Ergebnisse prüfen und Warnungen bearbeiten.",
  },
  {
    title: "Ohne E-Mail bearbeiten",
    duration: "1:01",
    file: "09-Ohne-Email.mp4",
    text: "Abrechnungen ohne Empfängeradresse für die alternative Übergabe sammeln.",
  },
  {
    title: "Versand vorbereiten",
    duration: "0:46",
    file: "10-Versand.mp4",
    text: "Empfänger, Absender, Nachricht und Anhänge vor der Freigabe kontrollieren.",
  },
  {
    title: "Berichte prüfen",
    duration: "0:59",
    file: "11-Berichte.mp4",
    text: "Prüfberichte, vorbereitete Dateien und den Status eines Laufs nachvollziehen.",
  },
  {
    title: "Freie Nachricht",
    duration: "0:48",
    file: "12-Nachricht.mp4",
    text: "Eine freie Mitteilung mit optionalem Dokumentanhang vorbereiten.",
  },
];

export default function TutorialLibrary() {
  const [active, setActive] = useState(0);
  const playerRef = useRef<HTMLDivElement>(null);
  const chapter = chapters[active];

  return (
    <section className="tutorial-library" aria-labelledby="tutorial-title">
        <div className="tutorial-heading">
          <div>
            <h2 id="tutorial-title">
              LohnMail in 12 kurzen Kapiteln
            </h2>
          </div>
          <p>
            Wählen Sie ein Thema aus und sehen Sie direkt, wo die Funktion zu finden
            ist und worauf Sie bei der Kontrolle achten sollten.
          </p>
        </div>

        <div className="tutorial-layout">
          <div className="tutorial-player-column">
            <div className="tutorial-video-frame" ref={playerRef}>
              <video
                key={chapter.file}
                controls
                playsInline
                preload="metadata"
                aria-label={`${active + 1}. ${chapter.title}`}
              >
                <source src={`/tutorial/videos/${chapter.file}`} type="video/mp4" />
                Ihr Browser unterstützt die Videowiedergabe nicht.
              </video>
            </div>
            <div className="tutorial-current" aria-live="polite">
              <span>Kapitel {active + 1} von {chapters.length} · {chapter.duration}</span>
              <h3>{chapter.title}</h3>
              <p>{chapter.text}</p>
            </div>
          </div>

          <div className="tutorial-chapters" role="group" aria-label="Videokapitel">
            {chapters.map((item, index) => (
              <button
                className={`tutorial-chapter${active === index ? " active" : ""}`}
                type="button"
                onClick={() => {
                  setActive(index);
                  if (window.matchMedia("(max-width: 1040px)").matches) {
                    playerRef.current?.scrollIntoView({ block: "start" });
                  }
                }}
                aria-current={active === index ? "true" : undefined}
                key={item.file}
              >
                <span className="tutorial-chapter-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="tutorial-chapter-copy">
                  <strong>{item.title}</strong>
                  <small>{item.duration}</small>
                </span>
              </button>
            ))}
          </div>
        </div>

    </section>
  );
}
