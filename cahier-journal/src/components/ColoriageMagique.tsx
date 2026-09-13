/**
 * Coloriage magique (calcul → couleur) — CE1.
 * Grille de cases CARRÉES : l'élève calcule chaque case, colorie selon le code,
 * et une forme apparaît (ici un cœur = les cases dont le résultat fait 10).
 * A4 (.fiche-a4 + print). Aucune image externe, aucun orange « IA ».
 */
const GRID: string[][] = [
  ["4+4", "8+2", "3+7", "7+5", "5+3", "7+3", "4+6", "7+5"],
  ["5+5", "6+4", "7+3", "3+7", "3+7", "7+3", "5+5", "7+3"],
  ["3+7", "6+4", "7+3", "5+5", "6+4", "3+7", "6+4", "5+5"],
  ["7+5", "8+2", "9+1", "3+7", "8+2", "7+3", "9+1", "6+2"],
  ["5+3", "8+4", "4+6", "7+3", "7+3", "6+4", "6+2", "6+6"],
  ["6+6", "4+4", "6+6", "2+8", "4+6", "4+4", "8+4", "6+2"],
];

const CODE: { res: number; couleur: string; hex: string }[] = [
  { res: 10, couleur: "rouge", hex: "#e23b3b" },
  { res: 8, couleur: "bleu", hex: "#3b82c4" },
  { res: 12, couleur: "vert", hex: "#3ea55a" },
];

export function ColoriageMagique() {
  const cell = "20mm";
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "7mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "6mm 7mm", minHeight: "283mm", boxSizing: "border-box" }}>
        {/* En-tête simple, façon manuel */}
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "4mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
          <h1 style={{ fontSize: "27px", margin: 0, fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>Coloriage magique</h1>
          <span style={{ fontSize: "14px", color: "#333", fontFamily: "'Caveat','Comic Neue',cursive" }}>· CE1</span>
          <div style={{ marginLeft: "auto", fontSize: "13px" }}>Prénom : <span style={{ display: "inline-block", width: "42mm", borderBottom: "1px solid #333" }} /></div>
        </div>

        <p style={{ fontSize: "15px", margin: "0 0 3mm" }}>
          Calcule chaque case dans ta tête, puis colorie selon le code. Une surprise va apparaître&nbsp;!
        </p>

        {/* Code des couleurs */}
        <div style={{ display: "flex", gap: "8mm", marginBottom: "5mm", alignItems: "center" }}>
          {CODE.map((c) => (
            <div key={c.res} style={{ display: "flex", alignItems: "center", gap: "2mm" }}>
              <span style={{ display: "inline-block", width: "8mm", height: "8mm", borderRadius: "2px", border: "1.5px solid #333", background: c.hex }} />
              <span style={{ fontSize: "15px", fontWeight: 700 }}>= {c.res} → {c.couleur}</span>
            </div>
          ))}
        </div>

        {/* Grille de cases carrées */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4mm" }}>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${GRID[0].length}, ${cell})`, gridAutoRows: cell, border: "2px solid #111" }}>
            {GRID.flatMap((row, r) =>
              row.map((calc, c) => (
                <div key={`${r}-${c}`} style={{ display: "grid", placeItems: "center", border: "0.6px solid #111", boxSizing: "border-box" }}>
                  <span style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "22px", color: "#111" }}>{calc}</span>
                </div>
              )),
            )}
          </div>
        </div>

        <p style={{ marginTop: "8mm", fontSize: "12px", color: "#666", textAlign: "center" }}>
          Astuce : commence par toutes les cases qui font 10 (le rouge).
        </p>
      </div>
    </div>
  );
}
