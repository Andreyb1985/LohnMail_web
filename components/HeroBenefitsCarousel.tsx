"use client";

import { useEffect, useRef, useState } from "react";
import { Building, CheckCircle, Clock, Shield } from "./icons";
import styles from "./HeroBenefitsCarousel.module.css";

const SLIDE_DURATION = 6500;

const slides = [
  {
    label: "Zeit",
    kicker: "Weniger manuelle Arbeit",
    title: "Zeit sparen. Fehler reduzieren.",
    text: "PDF importieren, Personalnummern zuordnen, Dokumente trennen, prüfen und versenden – in einem klaren Monatslauf.",
  },
  {
    label: "Sicherheit",
    kicker: "Sensible Daten im Griff",
    title: "Lokal. Sicher. Nachvollziehbar.",
    text: "Ihre Lohndaten bleiben in Ihrer Arbeitsumgebung. Warnungen werden vor dem Versand sichtbar und alle Schritte dokumentiert.",
  },
  {
    label: "Mandanten",
    kicker: "Ohne Mandantenlimit",
    title: "Beliebig viele Unternehmen verwalten.",
    text: "Nutzen Sie LohnMail für so viele Unternehmen und Mandanten, wie Ihre Lohnbuchhaltung betreut – ohne zusätzliche Begrenzung.",
  },
];

export default function HeroBenefitsCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [timerVersion, setTimerVersion] = useState(0);
  const elapsedRef = useRef(0);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || paused) {
      return;
    }

    const startedAt = window.performance.now() - elapsedRef.current;
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - startedAt;
      elapsedRef.current = elapsed;
      progressRef.current?.style.setProperty(
        "transform",
        `scaleX(${Math.min(elapsed / SLIDE_DURATION, 1)})`,
      );

      if (elapsed >= SLIDE_DURATION) {
        elapsedRef.current = 0;
        progressRef.current?.style.setProperty("transform", "scaleX(0)");
        setActive((current) => (current + 1) % slides.length);
        return;
      }

      frame = window.requestAnimationFrame(tick);
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [active, paused, timerVersion]);

  function selectSlide(index: number) {
    elapsedRef.current = 0;
    progressRef.current?.style.setProperty("transform", "scaleX(0)");
    setActive(index);
    setTimerVersion((current) => current + 1);
  }

  const slide = slides[active];

  return (
    <div
      className={`${styles.carousel} ${active === 1 ? styles.securityActive : ""}`}
      aria-label="Die wichtigsten Vorteile von LohnMail"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.tabs} role="tablist" aria-label="Vorteil auswählen">
        {slides.map((item, index) => (
          <button
            key={item.label}
            type="button"
            role="tab"
            aria-selected={active === index}
            aria-controls="hero-benefit-panel"
            className={active === index ? styles.activeTab : ""}
            onClick={() => selectSlide(index)}
          >
            <span>{item.label}</span>
            <span className={styles.progressTrack} aria-hidden="true">
              {active === index ? (
                <span
                  className={styles.progressValue}
                  ref={progressRef}
                  style={{ transform: "scaleX(0)" }}
                />
              ) : null}
            </span>
          </button>
        ))}
      </div>

      <div className={styles.panel} id="hero-benefit-panel" role="tabpanel" aria-live="polite">
        <div className={styles.copy}>
          <span className={styles.kicker}>{slide.kicker}</span>
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
        </div>

        {active === 0 ? (
          <div className={styles.process} aria-label="Automatisierter Ablauf">
            <span><Clock size={17} /><b>Import</b><small>PDF &amp; Excel</small></span>
            <span><CheckCircle size={17} /><b>Zuordnung</b><small>automatisch</small></span>
            <span><CheckCircle size={17} /><b>Versand</b><small>kontrolliert</small></span>
            <span><CheckCircle size={17} /><b>Bericht</b><small>vollständig</small></span>
          </div>
        ) : null}

        {active === 1 ? (
          <div className={styles.securityPoints}>
            <strong><Shield size={26} /> LOKAL</strong>
            <span><CheckCircle size={16} /> Keine unnötige Cloud-Abhängigkeit</span>
            <span><CheckCircle size={16} /> Prüfung vor dem Versand</span>
            <span><CheckCircle size={16} /> Vollständige Protokolle</span>
          </div>
        ) : null}

        {active === 2 ? (
          <div className={styles.companyList}>
            <span><Building size={17} /><b>Unternehmen Nord</b><small>bereit</small></span>
            <span><Building size={17} /><b>Unternehmen Mitte</b><small>bereit</small></span>
            <span><b>+</b><strong>Weitere Mandanten</strong><small>ohne Limit</small></span>
          </div>
        ) : null}
      </div>

      <div className={styles.footer}>
        <button
          className={styles.arrow}
          type="button"
          aria-label="Vorheriger Vorteil"
          onClick={() => selectSlide((active - 1 + slides.length) % slides.length)}
        >
          ←
        </button>
        <div className={styles.pagination} aria-label="Seite auswählen">
          {slides.map((item, index) => (
            <button
              key={item.label}
              type="button"
              aria-label={`Seite ${index + 1}: ${item.label}`}
              aria-current={active === index ? "page" : undefined}
              className={active === index ? styles.activePage : ""}
              onClick={() => selectSlide(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button
          className={styles.arrow}
          type="button"
          aria-label="Nächster Vorteil"
          onClick={() => selectSlide((active + 1) % slides.length)}
        >
          →
        </button>
      </div>
    </div>
  );
}
