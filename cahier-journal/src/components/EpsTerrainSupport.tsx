/**
 * Fiche EPS imprimable (A4) : schéma du terrain à installer (plots, distances,
 * sens de course) + dispositif + sécurité active / passive / affective.
 * Zéro image externe (SVG maison). Utilise `.fiche-a4` + styles d'impression.
 */
import type { ReactNode } from "react";

const ORANGE = "#c9481f";

/** Un petit plot (cône) vu de dessus. */
function Cone({ x, y, label }: { x: number; y: number; label?: string }) {
  return (
    <g>
      <polygon points={`${x - 6},${y + 6} ${x + 6},${y + 6} ${x},${y - 7}`} fill="#f97316" stroke="#b45309" strokeWidth={1} />
      {label && <text x={x} y={y + 20} fontSize={11} textAnchor="middle" fill="#334155">{label}</text>}
    </g>
  );
}

/** Schéma du parcours de course longue : grand ovale balisé. */
function TerrainCourseLongue() {
  // Ovale (piste) : centre (300,150), rayons 220 x 95.
  const cx = 300, cy = 150, rx = 220, ry = 95;
  // Plots aux "coins" et milieux des grands côtés.
  const cones = [
    { x: cx - rx, y: cy, label: "Départ /\nArrivée" },
    { x: cx, y: cy - ry, label: "25 m" },
    { x: cx + rx, y: cy, label: "50 m" },
    { x: cx, y: cy + ry, label: "75 m" },
  ];
  return (
    <svg viewBox="0 0 600 320" style={{ width: "100%", height: "auto" }} role="img" aria-label="Schéma du parcours de course longue">
      {/* pelouse / zone */}
      <rect x={8} y={8} width={584} height={304} rx={10} fill="#f2f7ee" stroke="#cfe0c4" />
      {/* piste extérieure et intérieure (couloir) */}
      <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 5" />
      <ellipse cx={cx} cy={cy} rx={rx - 26} ry={ry - 26} fill="none" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="4 6" />
      {/* sens de course (flèche) */}
      <path d="M 300 47 q 60 2 96 40" fill="none" stroke={ORANGE} strokeWidth={2.5} markerEnd="url(#arrow)" />
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={ORANGE} />
        </marker>
      </defs>
      <text x={cx} y={cy - 2} fontSize={13} textAnchor="middle" fill="#475569" fontWeight={700}>sens de la course →</text>
      {/* ligne départ/arrivée */}
      <line x1={cx - rx} y1={cy - 12} x2={cx - rx} y2={cy + 12} stroke="#111" strokeWidth={3} />
      {/* plots */}
      {cones.map((c, i) => (
        <g key={i}>
          <polygon points={`${c.x - 6},${c.y + 6} ${c.x + 6},${c.y + 6} ${c.x},${c.y - 7}`} fill="#f97316" stroke="#b45309" strokeWidth={1} />
          {c.label.split("\n").map((l, j) => (
            <text key={j} x={c.x} y={c.y + 22 + j * 12} fontSize={11} textAnchor="middle" fill="#334155" fontWeight={j === 0 && c.label.includes("Départ") ? 700 : 400}>{l}</text>
          ))}
        </g>
      ))}
      {/* zone de marche / récupération */}
      <rect x={cx - 55} y={cy + ry + 22} width={110} height={30} rx={6} fill="#eef2ff" stroke="#c7d2fe" />
      <text x={cx} y={cy + ry + 41} fontSize={11} textAnchor="middle" fill="#4338ca">zone de marche (récup.)</text>
      {/* zone observateurs (binômes) */}
      <g>
        <Cone x={70} y={250} />
        <Cone x={110} y={250} />
        <text x={90} y={272} fontSize={11} textAnchor="middle" fill="#334155">observateurs</text>
      </g>
      {/* légende périmètre */}
      <text x={cx} y={300} fontSize={12} textAnchor="middle" fill="#475569">Périmètre ≈ 100 m · un plot tous les 25 m · couloir large de 2-3 m</text>
    </svg>
  );
}

export function EpsTerrainSupport(): ReactNode {
  const Sec = ({ titre, couleur, points }: { titre: string; couleur: string; points: string[] }) => (
    <div style={{ flex: 1, border: `1.5px solid ${couleur}`, borderRadius: 8, padding: "2.5mm 3mm", background: "#fff" }}>
      <div style={{ fontSize: 12.5, fontWeight: 800, color: couleur, marginBottom: "1mm" }}>{titre}</div>
      <ul style={{ margin: 0, paddingLeft: "4.5mm", fontSize: 11.5, lineHeight: 1.45, color: "#333" }}>
        {points.map((p, i) => <li key={i}>{p}</li>)}
      </ul>
    </div>
  );
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "flex", alignItems: "baseline", gap: "3mm", borderBottom: `3px solid ${ORANGE}`, paddingBottom: "2mm", marginBottom: "3mm" }}>
        <span style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.14em", color: ORANGE, fontWeight: 800 }}>Fiche de mise en place (terrain)</span>
        <span style={{ marginLeft: "auto", fontSize: 13, fontWeight: 800, color: "#fff", background: ORANGE, borderRadius: 999, padding: "0.5mm 4mm" }}>CE1-CE2</span>
      </div>
      <h1 style={{ fontSize: 22, margin: "0 0 1mm", fontWeight: 800 }}>EPS — Courir longtemps (séance 2)</h1>
      <div style={{ fontSize: 12, color: "#888", marginBottom: "3mm" }}>Athlétisme — champ 1 · Période 1 · suite de la séance 1 (jeu du contrat)</div>

      <div style={{ border: "1px solid #e7e2d8", borderRadius: 8, padding: "2mm", marginBottom: "3mm" }}>
        <TerrainCourseLongue />
      </div>

      <div style={{ display: "flex", gap: "4mm", marginBottom: "3mm" }}>
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 800, color: ORANGE, marginBottom: "1mm" }}>Dispositif</div>
          <ul style={{ margin: 0, paddingLeft: "5mm", fontSize: 12, lineHeight: 1.5 }}>
            <li>1 grande boucle balisée ≈ 100 m, un plot tous les 25 m.</li>
            <li>Couloir de 2-3 m de large (2 ovales de plots), sol stable et dégagé.</li>
            <li>Binômes : l'un court, l'autre compte les tours (fiche binôme) puis on échange.</li>
            <li>Contrat de temps : 6 min sans s'arrêter (4 à 8 min selon l'élève).</li>
            <li>But de la séance 2 : tenir une allure RÉGULIÈRE et battre son contrat de la séance 1.</li>
          </ul>
        </div>
      </div>

      <div style={{ fontSize: 13, fontWeight: 800, color: ORANGE, marginBottom: "1.5mm" }}>Sécurité</div>
      <div style={{ display: "flex", gap: "3mm" }}>
        <Sec titre="Active" couleur="#16a34a" points={[
          "Échauffement progressif (trottiner, mobiliser les articulations).",
          "Signal d'arrêt unique et non verbal (bras levé), testé avant.",
          "Allure adaptée : on doit pouvoir parler en courant.",
          "Lacets serrés, gourde d'eau, on ne part pas trop vite.",
        ]} />
        <Sec titre="Passive" couleur="#2563eb" points={[
          "Terrain plat, dégagé, sans obstacle ni flaque.",
          "Plots bien visibles délimitant clairement le couloir.",
          "Espace de sécurité autour de la piste.",
          "Trousse de secours à portée ; sens de course unique.",
        ]} />
        <Sec titre="Affective" couleur="#c026d3" points={[
          "Pas de classement : chacun court contre son propre contrat.",
          "Droit de marcher pour récupérer sans être jugé.",
          "Binôme bienveillant : on encourage, on ne se moque pas.",
          "On valorise l'effort et la régularité, pas la vitesse.",
        ]} />
      </div>
    </div>
  );
}
