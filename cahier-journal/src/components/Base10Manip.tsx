/**
 * Matériel de numération base 10 à IMPRIMER et DÉCOUPER (manipulation) — GRAND
 * format et PROPORTIONNEL : le cube-unité fait la même taille partout (18 mm),
 * donc 10 unités = 1 barre, et 10 barres recouvrent EXACTEMENT la plaque de 100.
 * Les élèves peuvent réellement superposer et manipuler.
 * Couleurs : centaines bleu, dizaines orange, unités vert.
 * - Base10Plaques : UNE grande plaque « centaine » (100) par page.
 * - Base10BarresUnites : 10 barres « dizaines » (10) + cubes « unités » (1).
 *
 * NB : les deux feuilles sont des A4 (.fiche-a4, 210×297) dont le contenu tient
 * dans la page → à l'impression PDF (mode « une page ») elles sont mises à la
 * même échelle, ce qui préserve la proportionnalité entre les pièces.
 */
const U = "18mm"; // taille du cube, IDENTIQUE pour plaques, barres et unités
const cutWrap: React.CSSProperties = { border: "0.5mm dashed #94a3b8", padding: "1.5mm", borderRadius: "2mm", display: "inline-block", background: "#fff" };
function cube(bg: string, border = "0.5mm solid #fff"): React.CSSProperties {
  return { width: U, height: U, background: bg, border, boxSizing: "border-box" };
}

/** UNE grande plaque « centaine » (100) — 10×10 cubes de 18 mm. */
export function Base10Plaques() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "10mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif", textAlign: "center" }}>
      <h1 style={{ fontSize: "22px", margin: "0 0 1mm", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>Matériel base 10 — la plaque « centaine » (100)</h1>
      <div style={{ fontSize: "13px", color: "#555", marginBottom: "6mm" }}>À imprimer (1 plaque par page) et découper. 1 plaque = 100. Les barres et les unités s'emboîtent dessus : 10 barres recouvrent la plaque.</div>
      <div style={{ display: "inline-block", ...cutWrap, padding: "3mm" }}>
        <div style={{ display: "grid", gridTemplateColumns: `repeat(10, ${U})`, gridAutoRows: U, border: "1mm solid #2563eb" }}>
          {Array.from({ length: 100 }).map((_, k) => <div key={k} style={cube("#93c5fd")} />)}
        </div>
      </div>
    </div>
  );
}

/** 10 barres « dizaines » (10) + cubes « unités » (1), même cube que la plaque. */
export function Base10BarresUnites() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "21px", margin: "0 0 1mm", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>Matériel base 10 — barres « dizaines » (10) et unités (1)</h1>
      <div style={{ fontSize: "12.5px", color: "#555", marginBottom: "4mm" }}>Même taille de cube que la plaque. 1 barre = 10 ; 1 carré = 1. Les 10 barres recouvrent exactement une plaque de 100.</div>

      <div style={{ fontSize: "13px", fontWeight: 800, color: "#c9481f", margin: "0 0 2mm" }}>Les 10 barres « dizaines » (10)</div>
      <div style={{ display: "flex", flexWrap: "nowrap", gap: "1mm", alignItems: "flex-start" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{ ...cutWrap, padding: "0.8mm" }}>
            <div style={{ display: "grid", gridTemplateColumns: U, gridAutoRows: U, border: "0.6mm solid #c9481f" }}>
              {Array.from({ length: 10 }).map((_, k) => <div key={k} style={cube("#f6b58f")} />)}
            </div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: "13px", fontWeight: 800, color: "#16a34a", margin: "5mm 0 2mm" }}>Les unités (1)</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2mm", alignItems: "flex-start" }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} style={{ ...cutWrap, padding: "0.8mm" }}>
            <div style={cube("#4ade80", "0.8mm solid #16a34a")} />
          </div>
        ))}
      </div>
    </div>
  );
}
