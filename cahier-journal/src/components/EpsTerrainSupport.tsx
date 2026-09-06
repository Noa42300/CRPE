/**
 * Fiche EPS imprimable (A4) : schéma du terrain à installer (plots, distances,
 * sens), dispositif + sécurité active / passive / affective. Plusieurs mises en
 * place d'athlétisme (courir longtemps, courir vite, relais, sauter, lancer).
 * Zéro image externe (SVG maison). Utilise `.fiche-a4` + styles d'impression.
 */
import type { ReactNode } from "react";

const ORANGE = "#c9481f";

export type EpsVariant = "courseLongue" | "vitesse" | "relais" | "saut" | "lancer";

export interface EpsFiche {
  variant: EpsVariant;
  titre: string;
  sousTitre: string;
  dispositif: string[];
  active: string[];
  passive: string[];
  affective: string[];
}

/** Un plot (cône) vu de dessus. */
function Cone({ x, y }: { x: number; y: number }) {
  return <polygon points={`${x - 6},${y + 6} ${x + 6},${y + 6} ${x},${y - 7}`} fill="#f97316" stroke="#b45309" strokeWidth={1} />;
}

const defs = (
  <defs>
    <marker id="epsArrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill={ORANGE} />
    </marker>
  </defs>
);

function Schema({ variant }: { variant: EpsVariant }) {
  const frame = <rect x={8} y={8} width={584} height={304} rx={10} fill="#f2f7ee" stroke="#cfe0c4" />;
  const txt = (x: number, y: number, s: string, opt: Record<string, unknown> = {}) => (
    <text x={x} y={y} fontSize={12} fill="#475569" {...opt}>{s}</text>
  );

  if (variant === "courseLongue") {
    const cx = 300, cy = 155, rx = 220, ry = 95;
    const cones = [[cx - rx, cy, "Départ /\nArrivée"], [cx, cy - ry, "25 m"], [cx + rx, cy, "50 m"], [cx, cy + ry, "75 m"]] as const;
    return (
      <svg viewBox="0 0 600 320" style={{ width: "100%", height: "auto" }}>
        {defs}{frame}
        <ellipse cx={cx} cy={cy} rx={rx} ry={ry} fill="none" stroke="#94a3b8" strokeWidth={2} strokeDasharray="6 5" />
        <ellipse cx={cx} cy={cy} rx={rx - 26} ry={ry - 26} fill="none" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="4 6" />
        <path d="M 300 52 q 60 2 96 40" fill="none" stroke={ORANGE} strokeWidth={2.5} markerEnd="url(#epsArrow)" />
        <line x1={cx - rx} y1={cy - 12} x2={cx - rx} y2={cy + 12} stroke="#111" strokeWidth={3} />
        {cones.map(([x, y, l], i) => (
          <g key={i}>
            <Cone x={x as number} y={y as number} />
            {(l as string).split("\n").map((line, j) => txt(x as number, (y as number) + 22 + j * 12, line, { textAnchor: "middle", fontSize: 11 }))}
          </g>
        ))}
        {txt(cx, 300, "Boucle ≈ 100 m · un plot tous les 25 m · couloir large de 2-3 m", { textAnchor: "middle" })}
      </svg>
    );
  }

  if (variant === "vitesse") {
    const lanes = [80, 130, 180, 230];
    const x0 = 90, x1 = 500;
    return (
      <svg viewBox="0 0 600 320" style={{ width: "100%", height: "auto" }}>
        {defs}{frame}
        {lanes.map((y, i) => (
          <g key={i}>
            <rect x={x0} y={y - 16} width={x1 - x0} height={32} rx={4} fill="#fff" stroke="#e2e8f0" />
            <Cone x={x0} y={y} /><Cone x={x1} y={y} />
            <path d={`M ${x0 + 20} ${y} H ${x1 - 20}`} stroke={ORANGE} strokeWidth={1.5} markerEnd="url(#epsArrow)" opacity={0.5} />
          </g>
        ))}
        <line x1={x0} y1={60} x2={x0} y2={250} stroke="#111" strokeWidth={3} />
        <line x1={x1} y1={60} x2={x1} y2={250} stroke="#111" strokeWidth={3} strokeDasharray="6 4" />
        {txt(x0, 275, "Ligne de DÉPART", { textAnchor: "middle", fontWeight: 700 })}
        {txt(x1, 275, "ARRIVÉE", { textAnchor: "middle", fontWeight: 700 })}
        {txt(300, 300, "3-4 couloirs parallèles · ≈ 25 m · 1 coureur par couloir · un starter, un juge d'arrivée", { textAnchor: "middle" })}
      </svg>
    );
  }

  if (variant === "relais") {
    const lanes = [90, 165, 240];
    const x0 = 80, xrelais = 300, x1 = 520;
    return (
      <svg viewBox="0 0 600 320" style={{ width: "100%", height: "auto" }}>
        {defs}{frame}
        {lanes.map((y, i) => (
          <g key={i}>
            <rect x={x0} y={y - 16} width={x1 - x0} height={32} rx={4} fill="#fff" stroke="#e2e8f0" />
            <Cone x={x0} y={y} /><Cone x={x1} y={y} />
            {/* zone de passage du témoin */}
            <rect x={xrelais - 25} y={y - 16} width={50} height={32} fill="#fde68a" opacity={0.6} stroke="#f59e0b" strokeDasharray="3 3" />
            <path d={`M ${x0 + 18} ${y} H ${xrelais - 30}`} stroke={ORANGE} strokeWidth={1.5} markerEnd="url(#epsArrow)" opacity={0.5} />
          </g>
        ))}
        {txt(xrelais, 285, "zone de passage du témoin", { textAnchor: "middle", fontWeight: 700, fill: "#b45309" })}
        {txt(300, 305, "Équipes en relais navette · le témoin se passe dans la zone jaune · plots de virage", { textAnchor: "middle" })}
      </svg>
    );
  }

  if (variant === "saut") {
    const y = 165, xElan0 = 60, xTakeoff = 300, xBank2 = 380;
    return (
      <svg viewBox="0 0 600 320" style={{ width: "100%", height: "auto" }}>
        {defs}{frame}
        {/* couloir d'élan */}
        <path d={`M ${xElan0} ${y} H ${xTakeoff - 8}`} stroke={ORANGE} strokeWidth={2.5} strokeDasharray="8 5" markerEnd="url(#epsArrow)" />
        {txt((xElan0 + xTakeoff) / 2, y - 14, "élan (course)", { textAnchor: "middle" })}
        {/* ligne d'appel */}
        <line x1={xTakeoff} y1={y - 45} x2={xTakeoff} y2={y + 45} stroke="#111" strokeWidth={3} />
        {txt(xTakeoff, y - 55, "ligne d'appel", { textAnchor: "middle", fontWeight: 700 })}
        {/* la rivière (zone à franchir) */}
        <rect x={xTakeoff} y={y - 45} width={xBank2 - xTakeoff} height={90} fill="#bfdbfe" opacity={0.6} stroke="#3b82f6" />
        {txt((xTakeoff + xBank2) / 2, y, "la rivière", { textAnchor: "middle", fill: "#1d4ed8", fontWeight: 700 })}
        {/* zone de réception + repères de distance */}
        <rect x={xBank2} y={y - 45} width={150} height={90} fill="#fee2e2" opacity={0.5} stroke="#ef4444" strokeDasharray="4 4" />
        {[0, 1, 2].map((k) => <line key={k} x1={xBank2 + 40 + k * 40} y1={y - 45} x2={xBank2 + 40 + k * 40} y2={y + 45} stroke="#f87171" strokeWidth={1} />)}
        {txt(xBank2 + 75, y + 60, "zone de réception (repères 1-2-3)", { textAnchor: "middle" })}
        <Cone x={xTakeoff} y={y + 60} />
        {txt(300, 305, "Sauter loin après un élan · appel un pied · réception souple sur deux pieds · tapis conseillé", { textAnchor: "middle" })}
      </svg>
    );
  }

  // lancer
  const lx = 180, cy = 165;
  return (
    <svg viewBox="0 0 600 320" style={{ width: "100%", height: "auto" }}>
      {defs}{frame}
      {/* zone d'élan derrière la ligne */}
      <rect x={40} y={cy - 60} width={lx - 40} height={120} fill="#e2e8f0" opacity={0.5} />
      {txt((40 + lx) / 2, cy, "zone", { textAnchor: "middle" })}
      {txt((40 + lx) / 2, cy + 16, "d'élan", { textAnchor: "middle" })}
      {/* ligne de lancer */}
      <line x1={lx} y1={cy - 70} x2={lx} y2={cy + 70} stroke="#111" strokeWidth={3} />
      {txt(lx, cy - 80, "ligne de lancer", { textAnchor: "middle", fontWeight: 700 })}
      {/* arcs de distance */}
      {[110, 180, 250].map((r, i) => (
        <g key={i}>
          <path d={`M ${lx} ${cy - r * 0.55} A ${r} ${r} 0 0 1 ${lx} ${cy + r * 0.55}`} fill="none" stroke="#f59e0b" strokeWidth={1.5} strokeDasharray="4 4" />
          {txt(lx + r * 0.9, cy + 4, `${i + 1}`, { fill: "#b45309", fontWeight: 700 })}
        </g>
      ))}
      <Cone x={lx} y={cy + 90} />
      {txt(410, cy - 30, "personne devant", { textAnchor: "middle", fill: "#dc2626", fontWeight: 700 })}
      {txt(410, cy - 14, "la ligne !", { textAnchor: "middle", fill: "#dc2626", fontWeight: 700 })}
      {txt(300, 305, "Lancer loin (vortex, balle lestée) · on lance TOUS au signal · on ramasse TOUS au signal", { textAnchor: "middle" })}
    </svg>
  );
}

export function EpsTerrainSupport(fiche?: EpsFiche): ReactNode {
  const data: EpsFiche =
    fiche ?? {
      variant: "courseLongue",
      titre: "EPS — Courir longtemps",
      sousTitre: "Athlétisme — champ 1 · Période 1",
      dispositif: [
        "1 grande boucle balisée ≈ 100 m, un plot tous les 25 m.",
        "Binômes : l'un court, l'autre compte les tours puis on échange.",
        "Contrat de temps : courir sans s'arrêter (4 à 8 min).",
      ],
      active: ["Échauffement progressif.", "Signal d'arrêt unique (bras levé), testé avant.", "Allure adaptée : pouvoir parler en courant.", "Lacets serrés, gourde d'eau."],
      passive: ["Terrain plat, dégagé, sans obstacle.", "Plots bien visibles, couloir délimité.", "Sens de course unique.", "Trousse de secours à portée."],
      affective: ["Pas de classement : chacun son contrat.", "Droit de marcher pour récupérer.", "Binôme bienveillant : on encourage.", "On valorise l'effort et la régularité."],
    };

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
      <h1 style={{ fontSize: 22, margin: "0 0 1mm", fontWeight: 800 }}>{data.titre}</h1>
      <div style={{ fontSize: 12, color: "#888", marginBottom: "3mm" }}>{data.sousTitre}</div>

      <div style={{ border: "1px solid #e7e2d8", borderRadius: 8, padding: "2mm", marginBottom: "3mm" }}>
        <Schema variant={data.variant} />
      </div>

      <div style={{ marginBottom: "3mm" }}>
        <div style={{ fontSize: 13, fontWeight: 800, color: ORANGE, marginBottom: "1mm" }}>Dispositif & matériel</div>
        <ul style={{ margin: 0, paddingLeft: "5mm", fontSize: 12, lineHeight: 1.5 }}>
          {data.dispositif.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>

      <div style={{ fontSize: 13, fontWeight: 800, color: ORANGE, marginBottom: "1.5mm" }}>Sécurité</div>
      <div style={{ display: "flex", gap: "3mm" }}>
        <Sec titre="Active" couleur="#16a34a" points={data.active} />
        <Sec titre="Passive" couleur="#2563eb" points={data.passive} />
        <Sec titre="Affective" couleur="#c026d3" points={data.affective} />
      </div>
    </div>
  );
}
