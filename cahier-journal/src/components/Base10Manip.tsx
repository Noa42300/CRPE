/**
 * Matériel de numération base 10 à IMPRIMER et DÉCOUPER (manipulation) — GRAND
 * format pour de jeunes élèves. À imprimer en plusieurs exemplaires (un lot par
 * élève). Couleurs : centaines bleu, dizaines orange, unités vert.
 * - Base10Plaques : UNE grande plaque « centaine » (100) par page.
 * - Base10BarresUnites : grandes barres « dizaines » (10) + cubes « unités » (1).
 */
const cutWrap: React.CSSProperties = { border: "0.5mm dashed #94a3b8", padding: "2mm", borderRadius: "2mm", display: "inline-block", background: "#fff" };

function cube(bg: string, u: string, border = "0.4mm solid #fff"): React.CSSProperties {
  return { width: u, height: u, background: bg, border, boxSizing: "border-box" };
}

/** UNE grande plaque « centaine » (100) qui remplit presque la page. */
export function Base10Plaques() {
  const u = "17mm"; // 10 × 17 mm = 170 mm → ~pleine largeur A4
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "10mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "22px", margin: "0 0 1mm", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>Matériel base 10 — la plaque « centaine » (100)</h1>
      <div style={{ fontSize: "13px", color: "#555", marginBottom: "6mm" }}>À imprimer (une plaque par page) et découper. 1 plaque = 1 centaine = 100. (10 plaques = 1 000.)</div>
      <div style={{ display: "inline-block", ...cutWrap, padding: "3mm" }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(10, ${u})`, gridAutoRows: u, border: "1mm solid #2563eb" }}>
          {Array.from({ length: 100 }).map((_, k) => <div key={k} style={cube("#93c5fd", u, "0.6mm solid #fff")} />)}
        </div>
      </div>
    </div>
  );
}

/** Grandes barres « dizaines » (10) + cubes « unités » (1). */
export function Base10BarresUnites() {
  const ub = "13mm"; // barres
  const uu = "16mm"; // unités (bien grosses)
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "10mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "22px", margin: "0 0 1mm", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>Matériel base 10 — barres « dizaines » (10) et unités (1)</h1>
      <div style={{ fontSize: "13px", color: "#555", marginBottom: "5mm" }}>À imprimer et découper. 1 barre = 1 dizaine = 10 ; 1 carré = 1 unité. (10 barres = 100.)</div>

      <div style={{ fontSize: "14px", fontWeight: 800, color: "#c9481f", margin: "0 0 2mm" }}>Les barres « dizaines » (10)</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "4mm", alignItems: "flex-start" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={cutWrap}>
            <div style={{ display: "grid", gridTemplateColumns: ub, gridAutoRows: ub, border: "0.8mm solid #c9481f" }}>
              {Array.from({ length: 10 }).map((_, k) => <div key={k} style={cube("#f6b58f", ub, "0.5mm solid #fff")} />)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: "14px", fontWeight: 800, color: "#16a34a", margin: "6mm 0 2mm" }}>Les unités (1)</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "3mm", alignItems: "flex-start" }}>
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} style={cutWrap}>
            <div style={cube("#4ade80", uu, "0.8mm solid #16a34a")} />
          </div>
        ))}
      </div>
    </div>
  );
}
