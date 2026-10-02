/**
 * Matériel de numération base 10 à IMPRIMER et DÉCOUPER (manipulation).
 * - Base10Plaques : plaques « centaines » (100) — pour construire 1000 (CE2).
 * - Base10BarresUnites : barres « dizaines » (10) + cubes « unités » (1) —
 *   pour construire 100 (CE1) et compléter.
 * Couleurs cohérentes avec le reste de l'appli : centaines bleu, dizaines
 * orange, unités vert. Chaque pièce a un liseré pointillé = trait de découpe.
 */
const U = "4mm";
const cube = (bg: string): React.CSSProperties => ({ width: U, height: U, background: bg, border: "0.4mm solid #fff", boxSizing: "border-box" });
const cutWrap: React.CSSProperties = { border: "0.4mm dashed #94a3b8", padding: "1.2mm", borderRadius: "1mm", display: "inline-block", background: "#fff" };

function Plaque() {
  return (
    <div style={cutWrap}>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(10, ${U})`, gridAutoRows: U, border: "0.5mm solid #2563eb" }}>
        {Array.from({ length: 100 }).map((_, k) => <div key={k} style={cube("#93c5fd")} />)}
      </div>
    </div>
  );
}
function Barre() {
  return (
    <div style={cutWrap}>
      <div style={{ display: "grid", gridTemplateColumns: U, gridAutoRows: U, border: "0.5mm solid #c9481f" }}>
        {Array.from({ length: 10 }).map((_, k) => <div key={k} style={cube("#f6b58f")} />)}
      </div>
    </div>
  );
}
function Unite() {
  return (
    <div style={cutWrap}>
      <div style={{ ...cube("#4ade80"), width: U, height: U, border: "0.5mm solid #16a34a" }} />
    </div>
  );
}

function Shell({ titre, sousTitre, children }: { titre: string; sousTitre: string; children: React.ReactNode }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "6mm", minHeight: "283mm", boxSizing: "border-box" }}>
        <h1 style={{ fontSize: "24px", margin: "0 0 1mm", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>{titre}</h1>
        <div style={{ fontSize: "13px", color: "#555", marginBottom: "4mm" }}>{sousTitre}</div>
        {children}
      </div>
    </div>
  );
}

/** Plaques « centaines » (100) à découper — 12 par page (CE2 : construire 1000). */
export function Base10Plaques() {
  return (
    <Shell titre="Matériel base 10 — les plaques « centaines » (100)" sousTitre="À imprimer et découper. Chaque plaque = 1 centaine = 100. (Imprime 1 feuille par élève ; 10 plaques = 1 000.)">
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4mm", justifyContent: "flex-start" }}>
        {Array.from({ length: 12 }).map((_, i) => <Plaque key={i} />)}
      </div>
    </Shell>
  );
}

/** Barres « dizaines » (10) + cubes « unités » (1) à découper (CE1 : construire 100). */
export function Base10BarresUnites() {
  return (
    <Shell titre="Matériel base 10 — barres « dizaines » (10) et unités (1)" sousTitre="À imprimer et découper. 1 barre = 1 dizaine = 10 ; 1 petit carré = 1 unité. (10 barres = 1 centaine = 100.)">
      <div style={{ fontSize: "13px", fontWeight: 800, color: "#c9481f", margin: "0 0 2mm" }}>Les barres « dizaines » (10)</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "3mm", alignItems: "flex-start" }}>
        {Array.from({ length: 24 }).map((_, i) => <Barre key={i} />)}
      </div>
      <div style={{ fontSize: "13px", fontWeight: 800, color: "#16a34a", margin: "6mm 0 2mm" }}>Les unités (1)</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2.5mm", alignItems: "flex-start" }}>
        {Array.from({ length: 50 }).map((_, i) => <Unite key={i} />)}
      </div>
    </Shell>
  );
}
