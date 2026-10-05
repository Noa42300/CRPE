/**
 * Matériel de numération base 10 à IMPRIMER et DÉCOUPER (manipulation) — GRAND
 * format et PROPORTIONNEL : le cube-unité fait la même taille partout (18 mm),
 * donc 10 unités = 1 barre, et 10 barres recouvrent EXACTEMENT la plaque de 100.
 * Couleurs : centaines bleu, dizaines orange, unités vert.
 *
 * NB : les pièces sont construites en FLEX (rangées de cubes), pas en CSS grid :
 * l'export PDF (html2canvas) rend mal `grid repeat(…)` sur de grandes planches
 * (page blanche). En flex, le rendu PDF est fidèle.
 */
const U = 18; // mm — taille du cube, IDENTIQUE pour plaques, barres, unités
const mm = (n: number) => `${n}mm`;
const cutWrap: React.CSSProperties = { border: "0.5mm dashed #94a3b8", padding: "1.5mm", borderRadius: "2mm", display: "inline-block", background: "#fff" };

function Cube({ bg, border = "0.5mm solid #fff" }: { bg: string; border?: string }) {
  return <div style={{ width: mm(U), height: mm(U), background: bg, border, boxSizing: "border-box" }} />;
}
/** Plaque 10×10 (flex : 10 rangées de 10 cubes). */
function PlaqueFlex({ cube = "#93c5fd" }: { cube?: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", border: "1mm solid #2563eb", width: "fit-content" }}>
      {Array.from({ length: 10 }).map((_, r) => (
        <div key={r} style={{ display: "flex" }}>
          {Array.from({ length: 10 }).map((_, c) => <Cube key={c} bg={cube} />)}
        </div>
      ))}
    </div>
  );
}
/** Barre 1×10 (flex : colonne de 10 cubes). */
function BarreFlex() {
  return (
    <div style={{ display: "flex", flexDirection: "column", border: "0.6mm solid #c9481f", width: "fit-content" }}>
      {Array.from({ length: 10 }).map((_, i) => <Cube key={i} bg="#f6b58f" />)}
    </div>
  );
}

/** UNE grande plaque « centaine » (100) par page. */
export function Base10Plaques() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "10mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1 style={{ fontSize: "22px", margin: "0 0 1mm", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>Matériel base 10 — la plaque « centaine » (100)</h1>
      <div style={{ fontSize: "13px", color: "#555", marginBottom: "6mm", textAlign: "center" }}>À imprimer (1 plaque par page) et découper. 1 plaque = 100. Les barres et les unités s'emboîtent dessus : 10 barres recouvrent la plaque.</div>
      <div style={{ ...cutWrap, padding: "3mm" }}>
        <PlaqueFlex />
      </div>
    </div>
  );
}

/** 10 barres « dizaines » (10) + cubes « unités » (1) — même cube que la plaque. */
export function Base10BarresUnites() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "9mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "21px", margin: "0 0 1mm", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>Matériel base 10 — barres « dizaines » (10) et unités (1)</h1>
      <div style={{ fontSize: "12.5px", color: "#555", marginBottom: "4mm" }}>Même taille de cube que la plaque. 1 barre = 10 ; 1 carré = 1. Les 10 barres recouvrent exactement une plaque de 100.</div>

      <div style={{ fontSize: "13px", fontWeight: 800, color: "#c9481f", margin: "0 0 2mm" }}>Les 10 barres « dizaines » (10)</div>
      <div style={{ display: "flex", flexWrap: "nowrap", gap: "1mm", alignItems: "flex-start" }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{ ...cutWrap, padding: "0.8mm" }}><BarreFlex /></div>
        ))}
      </div>

      <div style={{ fontSize: "13px", fontWeight: 800, color: "#16a34a", margin: "5mm 0 2mm" }}>Les unités (1)</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2mm", alignItems: "flex-start" }}>
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} style={{ ...cutWrap, padding: "0.8mm" }}><Cube bg="#4ade80" border="0.8mm solid #16a34a" /></div>
        ))}
      </div>
    </div>
  );
}
