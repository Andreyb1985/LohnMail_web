import {
  LayoutDashboard,
  FileText,
  CheckCircle,
  Send,
  BarChart,
  Lock,
  Leaf,
} from "./icons";

export default function AppMockup() {
  return (
    <div className="mockup-wrap" aria-hidden="true">
      <div className="mockup">
        <div className="mockup-titlebar">
          <span className="dot dot-r" />
          <span className="dot dot-y" />
          <span className="dot dot-g" />
          <span className="mockup-title">LohnMail — Lohnabrechnungen Versand</span>
        </div>

        <div className="mockup-body">
          <aside className="mockup-sidebar">
            <div className="m-nav active">
              <LayoutDashboard size={14} /> Dashboard
            </div>
            <div className="m-nav">
              <FileText size={14} /> Verarbeitung
            </div>
            <div className="m-nav">
              <CheckCircle size={14} /> Prüfung
            </div>
            <div className="m-nav">
              <Send size={14} /> Versand
            </div>
            <div className="m-nav">
              <BarChart size={14} /> Berichte
            </div>
          </aside>

          <main className="mockup-main">
            <div className="m-topbar">
              <span className="m-heading">Dashboard · Juni 2026</span>
              <span className="m-status">
                <span className="pulse" /> System bereit
              </span>
            </div>

            <div className="m-kpis">
              <div className="m-kpi">
                <div className="m-kpi-label">Verarbeitet</div>
                <div className="m-kpi-value">498</div>
              </div>
              <div className="m-kpi">
                <div className="m-kpi-label">Versendet</div>
                <div className="m-kpi-value ok">486</div>
              </div>
              <div className="m-kpi">
                <div className="m-kpi-label">Ohne E-Mail</div>
                <div className="m-kpi-value warn">12</div>
              </div>
            </div>

            <div className="m-panel">
              <div className="m-panel-title">Versand läuft…</div>
              <div className="m-progress">
                <span />
              </div>
              <div style={{ marginTop: 12 }}>
                <div className="m-row">
                  <span>PN 10234 · abrechnung_10234.pdf</span>
                  <span className="m-badge sent">Versendet</span>
                </div>
                <div className="m-row">
                  <span>PN 10235 · abrechnung_10235.pdf</span>
                  <span className="m-badge sent">Versendet</span>
                </div>
                <div className="m-row">
                  <span>PN 10236 · abrechnung_10236.pdf</span>
                  <span className="m-badge pending">Wartet</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="mockup-chip chip-1">
        <Lock size={16} /> PDF verschlüsselt
      </div>
      <div className="mockup-chip chip-2">
        <Leaf size={16} /> 100 % papierlos
      </div>
    </div>
  );
}
