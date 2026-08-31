/**
 * Support élève « La fleur du nombre » (FICHE 2 — Le nombre du jour), au format
 * A4. Le nombre de la classe (23) au cœur de la fleur ; l'élève écrit une
 * écriture différente sur chaque pétale. Versions CE1 (3 écritures) et CE2
 * (5 écritures, dont une multiplication).
 */
const N = 23;

export function FleurDuNombreSupport({ niveau }: { niveau: "CE1" | "CE2" }) {
  const consigne =
    niveau === "CE1"
      ? "Trouve 3 façons différentes d'écrire le nombre 23."
      : "Trouve 5 façons différentes d'écrire 23, dont une avec une multiplication.";
  const nbPetales = niveau === "CE1" ? 6 : 8;

  const cx = 300, cy = 320, rCenter = 62, rPetal = 150, petalRx = 96, petalRy = 58;
  const petals = Array.from({ length: nbPetales }, (_, i) => {
    const ang = (i / nbPetales) * 2 * Math.PI - Math.PI / 2;
    const px = cx + rPetal * Math.cos(ang);
    const py = cy + rPetal * Math.sin(ang);
    const deg = (ang * 180) / Math.PI + 90;
    return { px, py, deg, i };
  });

  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "2px solid #c9481f", paddingBottom: "3mm", marginBottom: "4mm" }}>
        <div>
          <div style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#888" }}>Le nombre du jour · {niveau}</div>
          <h1 style={{ fontSize: "26px", margin: "1mm 0 0", fontWeight: 800 }}>La fleur du nombre</h1>
        </div>
        <div style={{ fontSize: "15px", color: "#333" }}>Prénom : ………………………………</div>
      </div>

      <p style={{ fontSize: "18px", fontWeight: 700, textAlign: "center", margin: "0 0 3mm" }}>{consigne}</p>
      <p style={{ fontSize: "13px", color: "#666", textAlign: "center", margin: "0 0 2mm" }}>
        Écris dans chaque pétale une façon différente d'écrire le nombre au centre.
      </p>

      <svg viewBox="0 0 600 640" style={{ width: "100%", maxHeight: "170mm" }}>
        {petals.map((p) => (
          <g key={p.i} transform={`translate(${p.px},${p.py}) rotate(${p.deg})`}>
            <ellipse cx={0} cy={0} rx={petalRx} ry={petalRy} fill="#fff" stroke="#c9481f" strokeWidth={2.5} />
            <text x={0} y={0} transform={`rotate(${-p.deg})`} textAnchor="middle" dominantBaseline="middle" fontSize={20} fill="#e6c9bd" fontWeight={700}>{p.i + 1}</text>
          </g>
        ))}
        <circle cx={cx} cy={cy} r={rCenter} fill="#f2a900" stroke="#b37e00" strokeWidth={3} />
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="central" fontSize={56} fontWeight={800} fill="#4a3200">{N}</text>
      </svg>

      <p style={{ marginTop: "4mm", fontSize: "11px", color: "#999", textAlign: "center" }}>
        Projet de rentrée — CE1/CE2 · à photocopier pour la classe (23 élèves).
      </p>
    </div>
  );
}
