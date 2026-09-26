"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CheckCircle, FileText, Lock, Search, X } from "./icons";
import styles from "./DatevExportGuide.module.css";

type Step = {
  title: string;
  file: string;
  width: number;
  height: number;
  actions: string[];
  note?: string;
};

const combined: Step[] = [
  {
    title: "Mandant, Monat und Auswertungen wählen",
    file: "1.PNG", width: 1676, height: 905,
    actions: [
      "Öffnen Sie LODAS Auswertungen und wechseln Sie zu „Am PC vorhandene Auswertungen“.",
      "Wählen Sie den richtigen Mandanten und Abrechnungsmonat. Für die Lohnabrechnungen markieren Sie „10 Abrechnung der Brutto-Netto-Bezüge“.",
      "Weitere personenbezogene Auswertungen nur auswählen, wenn sie ebenfalls ausgegeben und in LohnMail verarbeitet werden sollen.",
    ],
    note: "Die Auswahl im Beispiel enthält zusätzlich die Auswertungen 19 und 65. Diese sind nicht für jeden Export erforderlich.",
  },
  {
    title: "Den PDF-Export öffnen",
    file: "2.PNG", width: 1920, height: 1080,
    actions: [
      "Markieren Sie die gewünschten Einträge in der rechten Auswahlliste.",
      "Öffnen Sie mit der rechten Maustaste das Kontextmenü und wählen Sie „Exportieren…“.",
      "Alternativ erreichen Sie denselben Export über „Lohn-Auswertung → Exportieren…“.",
    ],
    note: "Dieser direkte Export fasst die ausgewählten Auswertungen in einer gemeinsamen PDF-Datei zusammen.",
  },
  {
    title: "Eine Gesamt-PDF speichern",
    file: "3.PNG", width: 1920, height: 1080,
    actions: [
      "Wählen Sie im Exportdialog den Reiter „ILA/PDF“.",
      "Legen Sie unter „Name der Exportdatei“ einen geschützten Speicherort und einen eindeutigen PDF-Dateinamen fest, zum Beispiel mit Mandant und Abrechnungsmonat.",
      "Für den hier gezeigten lokalen Verarbeitungsweg wählen Sie „Hohe Qualität ohne Kennwort (*.pdf)“. Beachten Sie den Sicherheitshinweis unten.",
      "Klicken Sie auf „Starten“. Prüfen Sie anschließend, ob die PDF am gewählten Speicherort vollständig vorhanden ist.",
    ],
  },
];

const folder: Step[] = [
  {
    title: "Mitarbeiterauswertungen markieren",
    file: "Screenshot (10).png", width: 1920, height: 1080,
    actions: [
      "Öffnen Sie in LODAS Auswertungen den passenden Mandanten und Abrechnungsmonat.",
      "Wählen Sie die gewünschten Mitarbeiterauswertungen aus, insbesondere „10 Abrechnung der Brutto-Netto-Bezüge“, und markieren Sie die Einträge rechts.",
    ],
    note: "Achtung: Das auf diesem Screenshot blau markierte „Exportieren…“ ist der direkte Export für eine Gesamt-PDF. Für einzelne Mitarbeiterdateien verwenden Sie stattdessen den Menüweg im nächsten Schritt.",
  },
  {
    title: "Den Mitarbeiter-Export wählen",
    file: "Screenshot (11).png", width: 1920, height: 1080,
    actions: [
      "Öffnen Sie oben das Menü „Lohn-Auswertung“.",
      "Wählen Sie „Mitarbeiterauswertungen ausgeben → Exportieren…“.",
      "Es öffnet sich der Dialog „Mitarbeiterauswertungen ausgeben / Exportieren“ mit der Mitarbeiterliste und dem Exportpfad.",
    ],
  },
  {
    title: "Zielordner und Dateinamen prüfen",
    file: "Screenshot (12).png", width: 1920, height: 1080,
    actions: [
      "Prüfen Sie den Mandanten und die angezeigten Mitarbeitenden.",
      "Wählen Sie unter „Exportpfad“ einen geschützten Ordner für genau diesen Mandanten und Abrechnungsmonat. Übernehmen Sie nicht ungeprüft einen Pfad aus dem Vormonat.",
      "Kontrollieren Sie die Dateinamen. Über „Namen festlegen…“ lassen sich die Namensbestandteile einstellen.",
      "Lassen Sie „Komprimieren im ZIP-Format“ deaktiviert, wenn die PDF-Dateien direkt im Ordner liegen sollen.",
    ],
  },
  {
    title: "Kennwortentscheidung und Export abschließen",
    file: "Screenshot (13).png", width: 1920, height: 1080,
    actions: [
      "Für den gezeigten lokalen Verarbeitungsweg aktivieren Sie „Diesmal ausnahmsweise kein Kennwort verwenden“ nur, wenn der Zielordner entsprechend geschützt ist und Ihre internen Vorgaben dies erlauben.",
      "DATEV zeigt die Warnung #LR05413 zum unverschlüsselten Export. Bestätigen Sie mit „Ja“ nur unter diesen Voraussetzungen. Andernfalls wählen Sie „Nein“ und klären Sie den Umgang mit den Daten intern.",
      "Lassen Sie die Warnung für künftige Exporte aktiviert. Schließen Sie anschließend den Exportdialog mit „OK“ ab.",
      "Kontrollieren Sie den Zielordner: Die Mitarbeiter-PDFs müssen vollständig vorhanden sein.",
    ],
  },
];

function imagePath(step: Step) {
  return `/tutorial/datev/${encodeURIComponent(step.file)}`;
}

export default function DatevExportGuide() {
  const [mode, setMode] = useState<"combined" | "folder">("combined");
  const [selected, setSelected] = useState<Step | null>(null);
  const [zoomed, setZoomed] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  const steps = mode === "combined" ? combined : folder;

  useEffect(() => {
    if (!selected || !dialog.current) return;
    const element = dialog.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    element.showModal();
    return () => {
      element.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  return (
    <section className={styles.guide} aria-labelledby="datev-title">
      <div className="help-section-heading">
        <span className={styles.eyebrow}>DATEV LODAS</span>
        <h2 id="datev-title">Lohnabrechnungen für LohnMail exportieren</h2>
        <p>Eine Gesamt-PDF oder einzelne Mitarbeiter-PDFs: Wählen Sie den Export, der zu Ihrem Arbeitsablauf passt.</p>
      </div>
      <p className={styles.version}>Gezeigt: LODAS Auswertungen V16.0 / LODAS V16.01. Bezeichnungen können je nach Version abweichen.</p>

      <fieldset className={styles.modes}>
        <legend className={styles.srOnly}>Exportformat</legend>
        <label>
          <input type="radio" name="datev-export" checked={mode === "combined"} onChange={() => setMode("combined")} />
          <span>Eine Gesamt-PDF</span>
        </label>
        <label>
          <input type="radio" name="datev-export" checked={mode === "folder"} onChange={() => setMode("folder")} />
          <span>Einzel-PDFs im Ordner</span>
        </label>
      </fieldset>

      <div className={styles.result}>
        <FileText size={24} />
        <div>
          <strong>{mode === "combined" ? "Eine Datei. Alle ausgewählten Abrechnungen." : "Ein Ordner. Einzelne Mitarbeiter-PDFs."}</strong>
          <p>Danach in LohnMail: Verarbeitung → <b>{mode === "combined" ? "Gesamt-PDF" : "Ordner"}</b></p>
        </div>
        <span className={styles.stepCount}>{steps.length} Schritte</span>
      </div>

      <ol className={styles.steps} key={mode}>
        {steps.map((step, index) => (
          <li className={styles.step} key={step.file}>
            <div className={styles.instructions}>
              <span className={styles.stepNumber}>Schritt {index + 1}</span>
              <h3>{step.title}</h3>
              <ul>{step.actions.map((action) => <li key={action}>{action}</li>)}</ul>
              {step.note && <p className={styles.note}>{step.note}</p>}
            </div>
            <figure className={styles.figure}>
              <button
                type="button"
                className={styles.screenshot}
                aria-label={`Screenshot vergrößern: ${step.title}`}
                title="Screenshot vergrößern"
                onClick={() => { setZoomed(false); setSelected(step); }}
              >
                <Image src={imagePath(step)} alt={`DATEV LODAS: ${step.title}`} width={step.width} height={step.height} unoptimized />
                <span className={styles.magnifier}><Search size={20} /></span>
              </button>
              <figcaption>LODAS Auswertungen · {step.title}</figcaption>
            </figure>
          </li>
        ))}
      </ol>

      <aside className={styles.security} aria-labelledby="datev-security">
        <Lock size={24} />
        <div>
          <h3 id="datev-security">Unverschlüsselte Exporte geschützt aufbewahren</h3>
          <p>Die gezeigten Exporte ohne Kennwort enthalten sensible Lohndaten. Speichern Sie sie nur in einem zugriffsbeschränkten Arbeitsordner, nicht in öffentlich freigegebenen oder unkontrolliert synchronisierten Verzeichnissen. Versenden Sie diese Quelldateien nicht ungeschützt. Prüfen Sie vor dem Versand in LohnMail die PDF-Verschlüsselung und die Empfängerzuordnung.</p>
        </div>
      </aside>

      <section className={styles.next} aria-labelledby="datev-next">
        <CheckCircle size={26} />
        <div>
          <h3 id="datev-next">Weiter in LohnMail</h3>
          <ol>
            <li>Passenden Mandanten und die zugehörige Excel-Mitarbeiterliste auswählen.</li>
            <li>In <strong>Verarbeitung → {mode === "combined" ? "Gesamt-PDF" : "Ordner"}</strong> {mode === "combined" ? "die exportierte PDF-Datei" : "den Ordner mit den exportierten PDFs, nicht eine ZIP-Datei,"} auswählen.</li>
            <li>Abrechnungszeitraum kontrollieren, Verarbeitung starten und Zuordnungen in <strong>Prüfung</strong> überprüfen.</li>
            <li>Verschlüsselung und Versandvorschau kontrollieren. Erst danach den tatsächlichen Versand bestätigen.</li>
          </ol>
          <a href="#videos">Zu den LohnMail Video-Tutorials →</a>
        </div>
      </section>
      <p className={styles.source}>Anleitung für DATEV LODAS, nicht für DATEV Lohn und Gehalt. Ergänzend: <a href="https://www.datev-community.de/t5/Personalwirtschaft/Alle-Auswertungen-als-PDF-exportieren/td-p/79740" target="_blank" rel="noreferrer">DATEV-Hinweis zu den beiden Exportwegen</a>.</p>

      <dialog ref={dialog} className={styles.dialog} aria-labelledby="datev-image-title" onClose={() => setSelected(null)} onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
        {selected && <>
          <header className={styles.viewerHeader}>
            <h2 id="datev-image-title">{selected.title}</h2>
            <button type="button" onClick={() => setZoomed(!zoomed)} aria-pressed={zoomed} title={zoomed ? "An Fenster anpassen" : "Originalgröße anzeigen"}><Search size={18} /><span>{zoomed ? "Anpassen" : "100 %"}</span></button>
            <button type="button" className={styles.close} onClick={() => dialog.current?.close()} aria-label="Screenshot schließen" title="Schließen" autoFocus><X size={22} /></button>
          </header>
          <div className={`${styles.viewerImage} ${zoomed ? styles.zoomed : ""}`}>
            <Image src={imagePath(selected)} alt={`DATEV LODAS: ${selected.title}`} width={selected.width} height={selected.height} style={zoomed ? { width: selected.width } : undefined} unoptimized />
          </div>
        </>}
      </dialog>
    </section>
  );
}
