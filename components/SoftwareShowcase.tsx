"use client";

import { useEffect, useRef, useState } from "react";
import { Monitor, Search, X } from "./icons";

type Crop = readonly [x: number, y: number, width: number, height: number];
const capture = { width: 1600, height: 1000, path: "/software/2026-10-02" };

const views = [
  {
    label: "Übersicht",
    image: `${capture.path}/dashboard.png`,
    alt: "LohnMail Dashboard: acht verarbeitete Mitarbeiter, eine fehlende E-Mail-Adresse und aktuelle Berichte. Demodaten.",
    title: "Der Monatslauf auf einen Blick",
    text: "Mitarbeitende, versendete Abrechnungen, fehlende E-Mail-Adressen und Systemstatus sind sofort sichtbar.",
    metrics: [[256, 160, 318, 122], [590, 160, 318, 122], [924, 160, 318, 122], [1258, 160, 318, 122]],
    filters: [],
    details: [[670, 298, 379, 224]],
  },
  {
    label: "Prüfung",
    image: `${capture.path}/pruefung.png`,
    alt: "LohnMail Prüfung: acht geprüfte Mitarbeiter, keine kritischen Fehler und eine Warnung wegen einer fehlenden E-Mail-Adresse. Demodaten.",
    title: "Fehlende Angaben vor dem Versand erkennen",
    text: "Kritische Fehler, Warnungen und Hinweise werden gesammelt dargestellt und lassen sich gezielt bearbeiten.",
    metrics: [[256, 158, 317, 108], [587, 158, 317, 108], [918, 158, 317, 108], [1249, 158, 317, 108]],
    filters: [[256, 282, 466, 40]],
    details: [[300, 337, 435, 240]],
  },
  {
    label: "Versand",
    image: `${capture.path}/versand.png`,
    alt: "LohnMail Versand: sieben geschützte PDFs im Dry-Run vorbereitet, keine E-Mails gesendet, ein Mitarbeiter ohne E-Mail. Demodaten.",
    title: "Den Versand sicher vorbereiten",
    text: "Versandbereite Abrechnungen, fehlende E-Mail-Adressen und der aktuelle Status sind vor dem Senden klar erkennbar.",
    metrics: [[256, 158, 251, 118], [521, 158, 251, 118], [786, 158, 251, 118], [1050, 158, 251, 118]],
    filters: [],
    details: [[256, 492, 300, 240], [1248, 492, 140, 240]],
  },
  {
    label: "Unternehmen",
    image: `${capture.path}/unternehmen.png`,
    alt: "LohnMail Unternehmensverwaltung mit drei Demo-Mandanten und den Einstellungen der Musterfirma GmbH.",
    title: "Mandanten zentral verwalten",
    text: "Unternehmen, Excel-Stammdaten, Ausgabeordner und individuelle E-Mail-Einstellungen werden übersichtlich verwaltet.",
    metrics: [[256, 158, 427, 112], [697, 158, 427, 112], [1139, 158, 427, 112]],
    filters: [],
    details: [[275, 339, 370, 254], [704, 339, 75, 254]],
  },
] satisfies { label: string; image: string; alt: string; title: string; text: string; metrics: Crop[]; filters: Crop[]; details: Crop[] }[];

function ScreenshotCrop({ image, rect }: { image: string; rect: Crop }) {
  const [x, y, width, height] = rect;
  // Keep crop coordinates tied to the original capture, including on narrow screens.
  return <div className="software-mobile-crop" style={{
    aspectRatio: `${width} / ${height}`,
    backgroundImage: `url("${image}")`,
    backgroundSize: `${capture.width / width * 100}% ${capture.height / height * 100}%`,
    backgroundPosition: `${x / (capture.width - width) * 100}% ${y / (capture.height - height) * 100}%`,
  }} />;
}

export default function SoftwareShowcase() {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const view = views[active];

  useEffect(() => {
    if (!expanded || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [expanded]);

  return (
    <section className="section section-alt software-section" id="software" aria-labelledby="software-title">
      <div className="container center">
        <span className="eyebrow"><Monitor size={14} /> Die Software</span>
        <h2 className="section-title" id="software-title">Alles im Blick, bevor Sie auf Senden klicken</h2>
        <p className="section-lead">Klare Statusanzeigen statt verstreuter Listen und manueller Zwischenkontrollen.</p>

        <div className="software-tabs" role="tablist" aria-label="Ansichten der LohnMail Software">
          {views.map((item, index) => (
            <button key={item.label} id={`software-tab-${index}`} type="button" role="tab"
              aria-selected={active === index} aria-controls="software-view" tabIndex={active === index ? 0 : -1}
              className={active === index ? "active" : ""} onClick={() => setActive(index)}
              onKeyDown={(event) => {
                let next = index;
                if (event.key === "ArrowRight") next = (index + 1) % views.length;
                else if (event.key === "ArrowLeft") next = (index + views.length - 1) % views.length;
                else if (event.key === "Home") next = 0;
                else if (event.key === "End") next = views.length - 1;
                else return;
                event.preventDefault();
                setActive(next);
                document.getElementById(`software-tab-${next}`)?.focus();
              }}>
              {item.label}
            </button>
          ))}
        </div>

        <div id="software-view" role="tabpanel" aria-labelledby={`software-tab-${active}`}>
          <div className="software-frame software-mobile-composite-frame">
            <div className="software-mobile-preview" role="img" aria-label={view.alt}>
              <div className="software-mobile-inner" aria-hidden="true">
                <ScreenshotCrop image={view.image} rect={[256, 88, 380, 40]} />
                <div className={`software-mobile-kpis${view.metrics.length % 2 ? " software-mobile-kpis-odd" : ""}`}>
                  {view.metrics.map((rect, index) => <ScreenshotCrop key={index} image={view.image} rect={rect} />)}
                </div>
                {view.filters.map((rect, index) => <ScreenshotCrop key={index} image={view.image} rect={rect} />)}
                <div className="software-mobile-detail" style={{ gridTemplateColumns: view.details.map(rect => `${rect[2]}fr`).join(" ") }}>
                  {view.details.map((rect, index) => <ScreenshotCrop key={index} image={view.image} rect={rect} />)}
                </div>
              </div>
            </div>
            <picture className="software-desktop-picture">
              <img src={view.image} alt={view.alt} width={capture.width} height={capture.height} loading="lazy" />
            </picture>
          </div>
          <div className="software-image-meta">
            <span>Beispielansicht mit Demodaten</span>
            <button type="button" className="software-expand" onClick={() => { setZoomed(false); setExpanded(true); }}>
              <Search size={16} /> Vollbild
            </button>
          </div>
          <div className="software-caption" aria-live="polite">
            <h3>{view.title}</h3>
            <p>{view.text}</p>
          </div>
        </div>
      </div>

      <dialog ref={dialog} className="software-dialog" aria-labelledby="software-dialog-title"
        onClose={() => setExpanded(false)}
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        <div className="software-dialog-heading">
          <h2 id="software-dialog-title">LohnMail · {view.label}</h2>
          <div>
            <button type="button" onClick={() => setZoomed(value => !value)} aria-label="Originalgröße" aria-pressed={zoomed} title="Originalgröße"><Search size={20} /></button>
            <button type="button" onClick={() => dialog.current?.close()} aria-label="Screenshot schließen" title="Schließen" autoFocus><X size={22} /></button>
          </div>
        </div>
        <div className={`software-dialog-image${zoomed ? " is-zoomed" : ""}`} tabIndex={0}>
          <img src={view.image} alt={view.alt} width={capture.width} height={capture.height} />
        </div>
      </dialog>
    </section>
  );
}
