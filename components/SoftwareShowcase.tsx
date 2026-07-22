"use client";

import { useState } from "react";
import { Monitor } from "./icons";

const views = [
  {
    label: "Übersicht",
    image: "/dashboard-current.jpg",
    mobileImage: "/dashboard-mobile.jpg",
    alt: "LohnMail Dashboard mit Status des aktuellen Monatslaufs",
    title: "Der Monatslauf auf einen Blick",
    text: "Mitarbeitende, versendete Abrechnungen, fehlende E-Mail-Adressen und Systemstatus sind sofort sichtbar.",
  },
  {
    label: "Prüfung",
    image: "/pruefung-current.jpg",
    mobileImage: "/pruefung-mobile.jpg",
    alt: "Prüfübersicht mit Fehlern und Warnungen in LohnMail",
    title: "Fehler erkennen, bevor sie teuer werden",
    text: "Kritische Fehler, Warnungen und Hinweise werden gesammelt dargestellt und lassen sich gezielt bearbeiten.",
  },
  {
    label: "Berichte",
    image: "/berichte-current.jpg",
    mobileImage: "/berichte-mobile.jpg",
    alt: "Berichtsansicht mit Versandstatus und Monatsdaten in LohnMail",
    title: "Jeder Lauf bleibt nachvollziehbar",
    text: "Versandstatus, offene Fälle und Exporte stehen für interne Kontrolle und spätere Rückfragen bereit.",
  },
];

export default function SoftwareShowcase() {
  const [active, setActive] = useState(0);
  const view = views[active];

  return (
    <section className="section section-alt software-section" id="software" aria-labelledby="software-title">
      <div className="container center">
        <span className="eyebrow"><Monitor size={14} /> Die Software</span>
        <h2 className="section-title" id="software-title">Alles im Blick, bevor Sie auf Senden klicken</h2>
        <p className="section-lead">Klare Statusanzeigen statt verstreuter Listen und manueller Zwischenkontrollen.</p>

        <div className="software-tabs" role="tablist" aria-label="Ansichten der LohnMail Software">
          {views.map((item, index) => (
            <button
              key={item.label}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="software-view"
              className={active === index ? "active" : ""}
              onClick={() => setActive(index)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="software-frame" id="software-view" role="tabpanel">
          <picture>
            <source media="(max-width: 720px)" srcSet={view.mobileImage} />
            <img src={view.image} alt={view.alt} width="1440" height="900" />
          </picture>
        </div>

        <div className="software-caption" aria-live="polite">
          <h3>{view.title}</h3>
          <p>{view.text}</p>
        </div>
      </div>
    </section>
  );
}
