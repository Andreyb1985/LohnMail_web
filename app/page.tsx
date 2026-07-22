import Header from "@/components/Header";
import BrandLogo from "@/components/BrandLogo";
import ContactForm from "@/components/ContactForm";
import HeroBenefitsCarousel from "@/components/HeroBenefitsCarousel";
import SoftwareShowcase from "@/components/SoftwareShowcase";
import {
  Mail,
  FileText,
  Table,
  Scissors,
  Hash,
  Lock,
  Send,
  Users,
  AlertTriangle,
  ClipboardList,
  BarChart,
  Monitor,
  Key,
  Check,
  CheckCircle,
  X,
  Leaf,
  Clock,
  Shield,
  Euro,
  Zap,
  Building,
  Home,
  Search,
} from "@/components/icons";

/* ------------------------------------------------------------------ */
/* Inhalte                                                             */
/* ------------------------------------------------------------------ */

const problems = [
  "PDF-Dateien müssen manuell getrennt werden.",
  "Personalnummern müssen einzeln geprüft werden.",
  "E-Mail-Adressen müssen manuell gesucht oder abgeglichen werden.",
  "Abrechnungen müssen korrekt zugeordnet werden.",
  "Mitarbeitende ohne E-Mail müssen separat behandelt werden.",
  "Fehler sind schwer nachvollziehbar.",
  "Papier, Toner und Umschläge verursachen laufende Kosten.",
  "Der gesamte Prozess bindet wertvolle Arbeitszeit in der Lohnbuchhaltung.",
];

const workflow = [
  { icon: <FileText size={20} />, label: "PDF importieren" },
  { icon: <Table size={20} />, label: "Excel-Liste laden" },
  { icon: <Hash size={20} />, label: "Personalnummer erkennen" },
  { icon: <Scissors size={20} />, label: "Dokumente trennen" },
  { icon: <Lock size={20} />, label: "PDF verschlüsseln" },
  { icon: <Mail size={20} />, label: "E-Mail vorbereiten" },
  { icon: <Send size={20} />, label: "Versenden" },
  { icon: <BarChart size={20} />, label: "Bericht erstellen" },
];

const features = [
  {
    icon: <FileText size={21} />,
    title: "PDF-Import",
    text: "Importieren Sie komplette Sammel-PDFs mit Lohnabrechnungen aus Ihrer bestehenden Lohnsoftware.",
  },
  {
    icon: <Table size={21} />,
    title: "Excel-Abgleich",
    text: "Verknüpfen Sie Personalnummern automatisch mit E-Mail-Adressen aus einer Excel-Liste.",
  },
  {
    icon: <Scissors size={21} />,
    title: "Automatische PDF-Trennung",
    text: "LohnMail trennt Sammel-PDFs automatisch in einzelne Mitarbeiterdokumente.",
  },
  {
    icon: <Hash size={21} />,
    title: "Personalnummer-Erkennung",
    text: "Die Software erkennt Personalnummern und ordnet Dokumente den richtigen Mitarbeitenden zu.",
  },
  {
    icon: <Lock size={21} />,
    title: "PDF-Verschlüsselung",
    text: "Sensible Lohnabrechnungen können vor dem Versand geschützt und sicher vorbereitet werden.",
  },
  {
    icon: <Send size={21} />,
    title: "E-Mail-Versand",
    text: "Versenden Sie Lohnabrechnungen direkt per E-Mail oder bereiten Sie den Versand strukturiert vor.",
  },
  {
    icon: <Users size={21} />,
    title: "Mitarbeitende ohne E-Mail",
    text: "Alle Fälle ohne hinterlegte E-Mail-Adresse werden automatisch gesammelt und separat ausgewiesen.",
  },
  {
    icon: <AlertTriangle size={21} />,
    title: "Prüfung und Fehlerübersicht",
    text: "LohnMail zeigt fehlende Daten, Warnungen und Fehler übersichtlich an, bevor der Versand gestartet wird.",
  },
  {
    icon: <ClipboardList size={21} />,
    title: "Versandprotokoll",
    text: "Jeder Versand wird nachvollziehbar dokumentiert.",
  },
  {
    icon: <BarChart size={21} />,
    title: "Berichte und Exporte",
    text: "Erstellen Sie Berichte für Verarbeitung, Versand, fehlende E-Mail-Adressen und offene Fälle.",
  },
  {
    icon: <Monitor size={21} />,
    title: "Lokale Verarbeitung",
    text: "Die Anwendung läuft lokal auf Ihrem Computer. Ihre Daten bleiben in Ihrer Arbeitsumgebung.",
  },
  {
    icon: <Key size={21} />,
    title: "Lizenzverwaltung",
    text: "Integrierte Lizenzverwaltung für eine einfache und kontrollierte Nutzung im Unternehmen.",
  },
];

const sustainability = [
  "Weniger Papierverbrauch",
  "Weniger Druckaufwand",
  "Weniger Toner",
  "Weniger Umschläge",
  "Weniger physische Ablage",
  "Weniger interne Verteilungswege",
  "Weniger Transport- und Sortierarbeit",
  "Ein regelmäßiger Beitrag zum Umweltschutz",
];

const benefits = [
  {
    icon: <Clock size={19} />,
    title: "Zeitersparnis",
    text: "Weniger manuelle Arbeit bei der monatlichen Verarbeitung und Verteilung von Lohnabrechnungen.",
  },
  {
    icon: <CheckCircle size={19} />,
    title: "Weniger Fehler",
    text: "Automatische Zuordnung reduziert das Risiko falscher Empfänger oder übersehener Dokumente.",
  },
  {
    icon: <Shield size={19} />,
    title: "Mehr Sicherheit",
    text: "Sensible Dokumente werden strukturiert verarbeitet und können verschlüsselt versendet werden.",
  },
  {
    icon: <Search size={19} />,
    title: "Bessere Nachvollziehbarkeit",
    text: "Berichte und Protokolle schaffen Transparenz für Verarbeitung, Versand und offene Fälle.",
  },
  {
    icon: <Euro size={19} />,
    title: "Geringere Kosten",
    text: "Weniger Papier, weniger Umschläge, weniger Druck und weniger manuelle Arbeitszeit.",
  },
  {
    icon: <Zap size={19} />,
    title: "Schnellere Prozesse",
    text: "Der monatliche Versand kann deutlich schneller abgeschlossen werden.",
  },
  {
    icon: <Users size={19} />,
    title: "Praxisnah entwickelt",
    text: "Die Software wurde aus realen Payroll-Prozessen heraus entwickelt.",
  },
  {
    icon: <Monitor size={19} />,
    title: "Lokale Kontrolle",
    text: "Die Verarbeitung erfolgt lokal in der Arbeitsumgebung des Unternehmens.",
  },
];

const audience = [
  { icon: <Home size={17} />, label: "Pflegeeinrichtungen" },
  { icon: <Home size={17} />, label: "Seniorenzentren" },
  { icon: <Building size={17} />, label: "Mittelständische Unternehmen" },
  { icon: <ClipboardList size={17} />, label: "Steuerkanzleien" },
  { icon: <Users size={17} />, label: "HR-Abteilungen" },
  { icon: <Users size={17} />, label: "Unternehmen mit vielen Mitarbeitenden" },
  { icon: <Building size={17} />, label: "Organisationen mit mehreren Standorten" },
  { icon: <Leaf size={17} />, label: "Firmen, die Papierprozesse reduzieren möchten" },
  { icon: <Mail size={17} />, label: "Lohnbuchhaltungen mit vielen Abrechnungen pro Monat" },
];

const security = [
  "Lokale Verarbeitung",
  "Keine unnötige Cloud-Abhängigkeit",
  "PDF-Verschlüsselung",
  "Klare Zuordnung über Personalnummern",
  "Prüfung vor dem Versand",
  "Übersicht über fehlende E-Mail-Adressen",
  "Versandberichte",
  "Protokollierung der Verarbeitung",
];

const pricingIncluded = [
  "Unbegrenzt viele Mandanten und Unternehmen",
  "PDF-Import",
  "Excel-Abgleich",
  "Automatische Dokumententrennung",
  "Personalnummer-Erkennung",
  "PDF-Verschlüsselung",
  "E-Mail-Versand",
  "Prüfübersicht",
  "Versandprotokoll",
  "Berichte und Exporte",
  "Lizenzverwaltung",
  "Lokale Verarbeitung",
];

const manualSteps = [
  "500 Abrechnungen drucken",
  "500 Dokumente sortieren",
  "500 Umschläge vorbereiten",
  "500 Abrechnungen verteilen",
  "Fehlende Dokumente nachverfolgen",
  "Rückfragen beantworten",
  "Versand und Ablage kontrollieren",
];

const digitalSteps = [
  "PDF und Excel-Liste importieren",
  "Automatische Zuordnung und Trennung",
  "Prüfung vor dem Versand",
  "Verschlüsselter E-Mail-Versand",
  "Übersicht über offene Fälle",
  "Vollständiges Versandprotokoll",
  "Berichte auf Knopfdruck",
];

/* ------------------------------------------------------------------ */
/* Seite                                                               */
/* ------------------------------------------------------------------ */

export default function Page() {
  return (
    <div id="top">
      <Header />

      {/* 1. Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="eyebrow">
              <Mail size={14} /> Digitaler Lohnabrechnungsversand
            </span>
            <h1>
              Lohnabrechnungen <span className="accent">automatisch, sicher und papierlos</span> versenden
            </h1>
            <p className="hero-sub">
              LohnMail automatisiert den Versand Ihrer Lohnabrechnungen — vom PDF-Import über die
              Zuordnung der Personalnummern bis zum verschlüsselten E-Mail-Versand und vollständigen
              Bericht.
            </p>
            <div className="hero-trust">
              <CheckCircle size={19} />
              <span>
                Entwickelt von einem Lohnbuchhalter aus der Praxis. Bereits bei der{" "}
                <strong>GeSoB GmbH</strong> in einer Unternehmensumgebung mit rund{" "}
                <strong>500 Mitarbeitenden</strong> integriert.
              </span>
            </div>
            <div className="hero-actions">
              <a href="#kontakt" className="btn btn-primary btn-lg">
                2 Monate kostenlos testen
              </a>
              <a href="#software" className="btn btn-secondary btn-lg">
                Software ansehen
              </a>
            </div>
            <p className="hero-note">Keine Kreditkarte erforderlich · Lokale Verarbeitung · Made in Germany</p>
          </div>

          <HeroBenefitsCarousel />
        </div>
      </section>

      {/* 2. Problem */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">
            <AlertTriangle size={14} /> Das Problem
          </span>
          <h2 className="section-title">
            Der manuelle Versand von Lohnabrechnungen kostet Zeit, Geld und Nerven
          </h2>
          <p className="section-lead">
            In vielen Unternehmen werden Lohnabrechnungen noch immer gedruckt, sortiert, kuvertiert
            und intern verteilt. Dieser Prozess kostet jeden Monat wertvolle Zeit in der
            Lohnbuchhaltung, verursacht laufende Kosten und erhöht das Risiko manueller Fehler.
          </p>
          <p className="section-lead">
            Besonders bei vielen Mitarbeitenden wird der klassische Papierprozess schnell
            unübersichtlich: Sammel-PDFs müssen getrennt, Personalnummern geprüft, E-Mail-Adressen
            gesucht und fehlende Daten manuell nachbearbeitet werden.
          </p>

          <div className="problem-grid">
            {problems.map((p) => (
              <div className="problem-item" key={p}>
                <X size={17} />
                <span>{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Solution */}
      <section className="section section-alt">
        <div className="container center">
          <span className="eyebrow">
            <Zap size={14} /> Die Lösung
          </span>
          <h2 className="section-title">LohnMail übernimmt den Prozess für Sie</h2>
          <p className="section-lead">
            Mit LohnMail wird der Versand von Lohnabrechnungen zu einem klaren, strukturierten und
            nachvollziehbaren digitalen Workflow. Die Software importiert das Lohnabrechnungs-PDF,
            liest die Personalnummern, verknüpft diese mit den E-Mail-Adressen aus einer
            Excel-Liste, trennt die Dokumente pro Mitarbeiter, verschlüsselt die PDF-Dateien und
            bereitet den Versand per E-Mail vor.
          </p>
          <p className="section-lead">
            Nach der Verarbeitung erstellt LohnMail übersichtliche Berichte und Protokolle, damit
            die Lohnbuchhaltung jederzeit nachvollziehen kann, welche Dokumente verarbeitet,
            versendet oder noch offen sind.
          </p>

          <div className="workflow">
            {workflow.map((step, i) => (
              <div className="workflow-step" key={step.label}>
                <span className="workflow-num">{i + 1}</span>
                <div className="workflow-icon">{step.icon}</div>
                <h3>{step.label}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Praxis / Trust */}
      <section className="section" id="praxis">
        <div className="container">
          <span className="eyebrow">
            <Users size={14} /> Aus der Praxis
          </span>
          <h2 className="section-title">Aus der Praxis der Lohnbuchhaltung entwickelt</h2>

          <div className="praxis-grid">
            <div className="praxis-text">
              <p>
                LohnMail wurde nicht als theoretisches Softwareprojekt entwickelt, sondern direkt
                aus dem Alltag der Lohnbuchhaltung heraus.
              </p>
              <p>
                Der Entwickler arbeitet selbst als Lohnbuchhalter und kennt die typischen
                Herausforderungen beim monatlichen Versand von Lohnabrechnungen: Zeitdruck, sensible
                Daten, fehlende E-Mail-Adressen, manuelle Kontrolle, Rückfragen von Mitarbeitenden
                und die Notwendigkeit einer sauberen Dokumentation.
              </p>
              <p>
                Deshalb ist LohnMail konsequent auf den praktischen Einsatz ausgerichtet:
                verständlich, lokal, übersichtlich und auf reale Arbeitsabläufe in der
                Lohnbuchhaltung abgestimmt.
              </p>
            </div>

            <div className="trust-card">
              <span className="trust-label">
                <CheckCircle size={14} /> Bereits im Unternehmenseinsatz
              </span>
              <h3>GeSoB GmbH · rund 500 Mitarbeitende</h3>
              <p>
                LohnMail wurde bei der <strong>GeSoB GmbH</strong> in einer Unternehmensumgebung mit
                rund <strong>500 Mitarbeitenden</strong> integriert. Dadurch basiert die Software
                auf echten Anforderungen aus dem Arbeitsalltag und nicht auf theoretischen Annahmen.
              </p>
            </div>
          </div>

          <p className="praxis-claim">
            Entwickelt von einem Lohnbuchhalter.<span className="sep">·</span>Getestet im echten
            Unternehmensalltag.<span className="sep">·</span>Optimiert für HR und Payroll.
          </p>
        </div>
      </section>

      {/* 5. Software */}
      <SoftwareShowcase />

      {/* 6. Features */}
      <section className="section" id="funktionen">
        <div className="container center">
          <span className="eyebrow">
            <ClipboardList size={14} /> Funktionen
          </span>
          <h2 className="section-title">
            Alle wichtigen Funktionen für den digitalen Lohnabrechnungsversand
          </h2>

          <div className="features-grid" style={{ textAlign: "left" }}>
            {features.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Sustainability */}
      <section className="section sustain">
        <div className="container center">
          <span className="eyebrow">
            <Leaf size={14} /> Nachhaltigkeit
          </span>
          <h2 className="section-title">Weniger Papier. Weniger Umschläge. Mehr Verantwortung.</h2>
          <p className="section-lead">
            LohnMail hilft Unternehmen nicht nur dabei, Zeit und Kosten zu sparen, sondern auch
            nachhaltiger zu arbeiten. Jede digital versendete Lohnabrechnung reduziert
            Papierverbrauch, Druckaufwand, Toner, Umschläge und interne Verteilungswege — gerade bei
            Unternehmen mit vielen Mitarbeitenden summiert sich dieser Effekt Monat für Monat.
          </p>
          <p className="section-lead">
            Wenn beispielsweise rund 500 Lohnabrechnungen nicht mehr gedruckt, sortiert und in
            Umschlägen verteilt werden müssen, spart das regelmäßig eine erhebliche Menge Papier und
            Material.
          </p>

          <div className="sustain-grid" style={{ textAlign: "left" }}>
            {sustainability.map((s) => (
              <div className="sustain-item" key={s}>
                <Leaf size={17} />
                <span>{s}</span>
              </div>
            ))}
          </div>

          <p className="sustain-quote">
            „Jeder nicht gedruckte Lohnzettel ist ein kleiner Beitrag zum Schutz von Bäumen und
            unserer Umwelt.“
          </p>
          <p className="sustain-after">
            Digitale Lohnabrechnungen sparen nicht nur Zeit und Geld. Sie zeigen auch, dass moderne
            Lohnbuchhaltung effizienter, ressourcenschonender und verantwortungsvoller sein kann.
          </p>
        </div>
      </section>

      {/* 8. Business Benefits */}
      <section className="section">
        <div className="container center">
          <span className="eyebrow">
            <BarChart size={14} /> Vorteile
          </span>
          <h2 className="section-title">Warum Unternehmen LohnMail einsetzen</h2>

          <div className="benefits-grid" style={{ textAlign: "left" }}>
            {benefits.map((b) => (
              <div className="benefit" key={b.title}>
                <h3>
                  {b.icon}
                  {b.title}
                </h3>
                <p>{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Target Audience */}
      <section className="section section-alt">
        <div className="container center">
          <span className="eyebrow">
            <Users size={14} /> Zielgruppen
          </span>
          <h2 className="section-title">Ideal für Unternehmen mit regelmäßigen Lohnabrechnungen</h2>
          <p className="section-lead">
            LohnMail wurde für Organisationen entwickelt, die jeden Monat viele Lohnabrechnungen
            verarbeiten und versenden — von 50 bis 1000 Mitarbeitenden.
          </p>

          <div className="audience-list">
            {audience.map((a) => (
              <span className="audience-tag" key={a.label}>
                {a.icon}
                {a.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Security */}
      <section className="section" id="sicherheit">
        <div className="container">
          <span className="eyebrow">
            <Shield size={14} /> Sicherheit
          </span>
          <h2 className="section-title">Sensible Lohndaten verdienen einen sicheren Prozess</h2>
          <p className="section-lead">
            Lohnabrechnungen enthalten besonders sensible personenbezogene Daten. Deshalb
            unterstützt LohnMail einen klaren und kontrollierten digitalen Prozess. Die Software
            hilft dabei, Lohnabrechnungen korrekt zuzuordnen, vor dem Versand zu prüfen und die
            Verarbeitung nachvollziehbar zu dokumentieren.
          </p>

          <div className="security-grid">
            {security.map((s) => (
              <div className="security-item" key={s}>
                <Shield size={18} />
                <span>{s}</span>
              </div>
            ))}
          </div>

          <p className="security-claim">
            LohnMail ersetzt unübersichtliche manuelle Zwischenschritte durch einen klaren digitalen
            Workflow.
          </p>
        </div>
      </section>

      {/* 11. Pricing */}
      <section className="section section-alt" id="preis">
        <div className="container center">
          <span className="eyebrow">
            <Euro size={14} /> Preis
          </span>
          <h2 className="section-title">Einfache Preisstruktur</h2>

          <div className="pricing-card">
            <div className="pricing-plan">LohnMail Professional</div>
            <div className="pricing-price">
              40&nbsp;€ <span>/ Monat</span>
            </div>
            <p className="pricing-sub">Für Unternehmen, HR-Abteilungen und Lohnbuchhaltungsteams.</p>

            <ul className="pricing-list">
              {pricingIncluded.map((item) => (
                <li key={item}>
                  <Check size={17} />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pricing-trial">
              <strong>2 Monate kostenlos testen</strong>
              Testen Sie LohnMail zwei Monate lang kostenlos in Ihrem Unternehmen und prüfen Sie,
              wie viel Zeit Sie bei der monatlichen Lohnabrechnung sparen können.
            </div>

            <a href="#kontakt" className="btn btn-primary btn-lg">
              Kostenlos testen
            </a>
          </div>
        </div>
      </section>

      {/* 12. Savings Example */}
      <section className="section">
        <div className="container">
          <span className="eyebrow">
            <Clock size={14} /> Rechenbeispiel
          </span>
          <h2 className="section-title">
            Schon bei wenigen hundert Mitarbeitenden lohnt sich die Automatisierung
          </h2>
          <p className="section-lead">
            Bei 500 Mitarbeitenden entstehen jeden Monat viele manuelle Schritte. Mit LohnMail wird
            daraus ein digitaler Prozess, der strukturierter, schneller und besser nachvollziehbar
            ist.
          </p>

          <div className="savings-grid">
            <div className="savings-col manual">
              <h3>Manueller Prozess · jeden Monat</h3>
              <ul>
                {manualSteps.map((s) => (
                  <li key={s}>
                    <X size={16} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className="savings-col digital">
              <h3>Mit LohnMail · jeden Monat</h3>
              <ul>
                {digitalSteps.map((s) => (
                  <li key={s}>
                    <Check size={16} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="savings-claim">
            Je größer das Unternehmen, desto stärker macht sich die Automatisierung bemerkbar.
          </p>
        </div>
      </section>

      {/* 13. Final CTA */}
      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="container">
          <div className="final-cta">
            <h2>Bereit für den digitalen Lohnabrechnungsversand?</h2>
            <p>
              Starten Sie mit LohnMail und modernisieren Sie den monatlichen Versand Ihrer
              Lohnabrechnungen.
            </p>
            <div className="actions">
              <a href="#kontakt" className="btn btn-primary btn-lg">
                2 Monate kostenlos testen
              </a>
              <a href="#kontakt" className="btn btn-secondary btn-lg">
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Contact Form */}
      <section className="section" id="kontakt">
        <div className="container center">
          <span className="eyebrow">
            <Mail size={14} /> Kontakt
          </span>
          <h2 className="section-title">Testzugang anfragen</h2>
          <p className="section-lead">
            Füllen Sie das Formular aus — wir richten Ihren kostenlosen Testzugang ein und melden
            uns zeitnah bei Ihnen.
          </p>
          <p className="contact-email"><a href="mailto:support@lohn-mail.de">support@lohn-mail.de</a></p>

          <ContactForm />
        </div>
      </section>

      {/* 15. Footer */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <span className="logo">
                <BrandLogo />
              </span>
              <p>
                LohnMail automatisiert die Verarbeitung, Verschlüsselung und den E-Mail-Versand von
                Lohnabrechnungen — lokal, sicher und papierlos. Entwickelt von einem Lohnbuchhalter
                für die Praxis.
              </p>
            </div>

            <div className="footer-col">
              <h4>Rechtliches</h4>
              <ul>
                <li>
                  <a href="#impressum">Impressum</a>
                </li>
                <li>
                  <a href="#datenschutz" id="datenschutz">
                    Datenschutz
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Kontakt</h4>
              <ul>
                <li>
                  <a href="#kontakt">Testzugang anfragen</a>
                </li>
                <li>
                  <a href="mailto:support@lohn-mail.de">support@lohn-mail.de</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 LohnMail. Alle Rechte vorbehalten.</span>
            <span>Lohnabrechnungen automatisch, sicher und papierlos versenden.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
