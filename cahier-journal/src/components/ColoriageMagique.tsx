/**
 * Coloriage magique (calcul → couleur) — CE1.
 * Grille de cases carrées : l'élève calcule chaque case, colorie selon le code,
 * et une vraie image apparaît (ici un PAPILLON). Chaque couleur correspond à un
 * résultat. Dessin original, aucune image externe, aucun orange « IA ».
 */

// Légende : résultat -> couleur. (Additions générées pour chaque case.)
const CODE: { res: number; couleur: string; hex: string; ink: string }[] = [
  { res: 10, couleur: "bleu ciel", hex: "#bfe3ff", ink: "#0b4a7a" },
  { res: 12, couleur: "jaune", hex: "#ffe45e", ink: "#7a5a00" },
  { res: 14, couleur: "rouge", hex: "#f4776b", ink: "#7a1d16" },
  { res: 16, couleur: "vert", hex: "#8fd39a", ink: "#1c5a2a" },
  { res: 18, couleur: "marron", hex: "#c79a6b", ink: "#5a3a17" },
];

// Le dessin : chaque lettre = une couleur (donc un résultat).
//  .=bleu(10)  R=rouge(14)  V=vert(16)  J=jaune(12)  B=marron(18)
const PICTURE: string[] = [
  ".RR...B...RR.",
  "RRRR..B..RRRR",
  "RJRR..B..RRJR",
  "RRRR..B..RRRR",
  "..RR..B..RR..",
  ".VVV..B..VVV.",
  "VVJV..B..VJVV",
  ".VVV..B..VVV.",
  "..V...B...V..",
];

const LETTER_RES: Record<string, number> = { ".": 10, R: 14, V: 16, J: 12, B: 18 };

/** Additions variées mais valides CE1 (opérandes 1..10) qui font `sum`. */
function addition(sum: number, seed: number): string {
  const lo = Math.max(1, sum - 10);
  const hi = Math.min(10, sum - 1);
  const a = lo + (seed % (hi - lo + 1));
  return `${a}+${sum - a}`;
}

export function ColoriageMagique() {
  const cols = PICTURE[0].length;
  const cell = "14mm";
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "7mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "6mm 7mm", minHeight: "283mm", boxSizing: "border-box" }}>
        {/* En-tête simple, façon manuel */}
        <div style={{ borderBottom: "1.5px solid #111", paddingBottom: "2mm", marginBottom: "4mm", display: "flex", alignItems: "baseline", gap: "3mm" }}>
          <h1 style={{ fontSize: "27px", margin: 0, fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>Coloriage magique</h1>
          <span style={{ fontSize: "14px", color: "#333", fontFamily: "'Caveat','Comic Neue',cursive" }}>· CE1 · additions</span>
          <div style={{ marginLeft: "auto", fontSize: "13px" }}>Prénom : <span style={{ display: "inline-block", width: "42mm", borderBottom: "1px solid #333" }} /></div>
        </div>

        <p style={{ fontSize: "15px", margin: "0 0 3mm" }}>
          Je calcule chaque case, puis je la colorie selon le code. Une image va apparaître&nbsp;!
        </p>

        {/* Code des couleurs */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6mm", marginBottom: "5mm", alignItems: "center" }}>
          {CODE.map((c) => (
            <div key={c.res} style={{ display: "flex", alignItems: "center", gap: "2mm" }}>
              <span style={{ display: "inline-block", width: "8mm", height: "8mm", borderRadius: "2px", border: "1.5px solid #333", background: c.hex }} />
              <span style={{ fontSize: "15px", fontWeight: 700 }}>= {c.res} → {c.couleur}</span>
            </div>
          ))}
        </div>

        {/* Grille de cases carrées */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "3mm" }}>
          <div style={{ display: "grid", gridTemplateColumns: `repeat(${cols}, ${cell})`, gridAutoRows: cell, border: "2px solid #111" }}>
            {PICTURE.flatMap((row, r) =>
              row.split("").map((ch, c) => (
                <div key={`${r}-${c}`} style={{ display: "grid", placeItems: "center", border: "0.5px solid #111", boxSizing: "border-box" }}>
                  <span style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "16px", color: "#111" }}>{addition(LETTER_RES[ch], r * cols + c)}</span>
                </div>
              )),
            )}
          </div>
        </div>

        <p style={{ marginTop: "7mm", fontSize: "12px", color: "#666", textAlign: "center" }}>
          Astuce : commence par le fond (les cases qui font 10 → bleu ciel), puis les ailes.
        </p>
      </div>
    </div>
  );
}
