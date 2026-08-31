/**
 * Support élève « La fleur du nombre » (FICHE 2 — Le nombre du jour), au format
 * A4. Le nombre de la classe (23) au cœur de la fleur ; l'élève écrit une
 * écriture différente sur chaque pétale. CE1 : 3 écritures. CE2 : 5 écritures.
 * `correction` : remplit les pétales avec des exemples (à projeter / distribuer).
 */
const N = 23;

// Exemples d'écritures de 23 (pour la correction).
const EXEMPLES = ["20 + 3", "10 + 10 + 3", "30 − 7", "11 + 12", "25 − 2", "19 + 4", "2 d + 3 u", "15 + 8"];

export function FleurDuNombreSupport({ niveau, correction = false }: { niveau: "CE1" | "CE2"; correction?: boolean }) {
  const nb = niveau === "CE1" ? 3 : 5;
  const consigne =
    niveau === "CE1"
      ? "Trouve 3 façons différentes d'écrire le nombre 23."
      : "Trouve 5 façons différentes d'écrire le nombre 23.";
  const nbPetales = niveau === "CE1" ? 6 : 8;

  const cx = 300, cy = 320, rCenter = 62, rPetal = 150, petalRx = 96, petalRy = 58;
  const petals = Array.from({ length: nbPetales }, (_, i) => {
    const ang = (i / nbPetales) * 2 * Math.PI - Math.PI / 2;
    return {
      px: cx + rPetal * Math.cos(ang),
      py: cy + rPetal * Math.sin(ang),
      deg: (ang * 180) / Math.PI + 90,
      i,
    };
  });

  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #c9481f", paddingBottom: "3mm", marginBottom: "4mm" }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>
            Le nombre du jour · {niveau}{correction ? " · Correction" : ""}
          </div>
          <h1 style={{ fontSize: "26px", margin: "1mm 0 0", fontWeight: 800 }}>La fleur du nombre</h1>
        </div>
        {correction ? (
          <div style={{ fontSize: "13px", fontWeight: 700, color: "#16a34a" }}>CORRECTION</div>
        ) : (
          <div style={{ fontSize: "15px", color: "#333" }}>Prénom : ………………………………</div>
        )}
      </div>

      <p style={{ fontSize: "18px", fontWeight: 700, textAlign: "center", margin: "0 0 3mm" }}>{consigne}</p>
      <p style={{ fontSize: "13px", color: "#666", textAlign: "center", margin: "0 0 2mm" }}>
        Écris dans chaque pétale une façon différente d'écrire le nombre au centre.
      </p>

      <svg viewBox="0 0 600 640" style={{ width: "100%", maxHeight: "165mm" }}>
        {petals.map((p) => {
          const filled = correction && p.i < nb;
          return (
            <g key={p.i} transform={`translate(${p.px},${p.py}) rotate(${p.deg})`}>
              <ellipse cx={0} cy={0} rx={petalRx} ry={petalRy} fill="#fff" stroke="#c9481f" strokeWidth={2.5} />
              <text x={0} y={0} transform={`rotate(${-p.deg})`} textAnchor="middle" dominantBaseline="middle" fontSize={filled ? 24 : 20} fontWeight={filled ? 700 : 700} fill={filled ? "#16a34a" : "#e6c9bd"}>
                {filled ? EXEMPLES[p.i] : p.i + 1}
              </text>
            </g>
          );
        })}
        <circle cx={cx} cy={cy} r={rCenter} fill="#f2a900" stroke="#b37e00" strokeWidth={3} />
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize={56} fontWeight={800} fill="#4a3200">{N}</text>
      </svg>

      <p style={{ marginTop: "4mm", fontSize: "11px", color: "#999", textAlign: "center" }}>
        Projet de rentrée — CE1/CE2 · à photocopier pour la classe (23 élèves).
      </p>
    </div>
  );
}
