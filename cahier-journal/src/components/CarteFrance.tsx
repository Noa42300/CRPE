/**
 * Carte de France réutilisable (vraie cartographie, vectorielle, imprimable).
 * Fond de carte © amCharts geodata (licence libre, amcharts.com), reprojeté.
 *  - régions métropolitaines (contour de la France),
 *  - Auvergne-Rhône-Alpes mise en valeur,
 *  - département de la Loire,
 *  - point de notre école (Saint-Priest-en-Jarez),
 *  - rose des vents N / S / E / O.
 * Props pour : projection (leçon/diapo) ou version VIERGE à imprimer (poser le point).
 */
import { FRANCE_MAP } from "./carteFranceData";

const GEO = "#0e7490";
const ORANGE = "#ea580c";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

const { W, H, regions, loireD, school } = FRANCE_MAP;

/** Rose des vents (N/S/E/O) autonome. `labels=false` → à compléter par l'élève. */
export function RoseDesVents({ labels = true, size = 150 }: { labels?: boolean; size?: number }) {
  const c = size / 2;
  const L = (x: number, y: number, t: string) => (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontFamily={CONSIGNE_FONT} fontWeight="800" fontSize={size * 0.15} fill={GEO}>{labels ? t : "…"}</text>
  );
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width={size} height={size}>
      <circle cx={c} cy={c} r={c * 0.6} fill="none" stroke="#cbd5e1" strokeWidth="2" />
      <polygon points={`${c},${c * 0.12} ${c * 1.1},${c * 0.9} ${c * 1.88},${c} ${c * 1.1},${c * 1.1} ${c},${c * 1.88} ${c * 0.9},${c * 1.1} ${c * 0.12},${c} ${c * 0.9},${c * 0.9}`} fill={GEO} opacity="0.85" stroke="#083344" strokeWidth="1.5" />
      {L(c, size * 0.14, "N")}
      {L(c, size * 0.86, "S")}
      {L(size * 0.86, c, "E")}
      {L(size * 0.14, c, "O")}
    </svg>
  );
}

type CarteProps = {
  /** largeur CSS (px, %, mm…) ; la carte garde son ratio. */
  width?: string | number;
  /** version vierge à imprimer : régions blanches, bords noirs, pas de point/couleur. */
  blank?: boolean;
  /** met en couleur la région Auvergne-Rhône-Alpes. */
  ara?: boolean;
  /** dessine le contour du département de la Loire. */
  loire?: boolean;
  /** pose le point rouge de notre école + étiquette. */
  ecole?: boolean;
  /** étiquette « Auvergne-Rhône-Alpes » à côté de la région. */
  nomARA?: boolean;
  /** rose des vents en coin. */
  rose?: boolean;
  roseLabels?: boolean;
};

export function CarteFrance({ width = "100%", blank = false, ara = false, loire = false, ecole = false, nomARA = false, rose = false, roseLabels = true }: CarteProps) {
  const stroke = blank ? "#111" : "#64748b";
  const baseFill = blank ? "#ffffff" : "#eef2f6";
  const roseSize = W * 0.2;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width={width} style={{ display: "block", maxWidth: "100%", height: "auto" }}>
      {/* régions */}
      {regions.map((r) => (
        <path
          key={r.id}
          d={r.d}
          fill={!blank && ara && r.ara ? GEO : baseFill}
          fillOpacity={!blank && ara && r.ara ? 0.78 : 1}
          stroke={stroke}
          strokeWidth={blank ? 1.4 : 1}
          strokeLinejoin="round"
        />
      ))}
      {/* département de la Loire */}
      {loire && loireD && (
        <path d={loireD} fill={blank ? "none" : "#fff7ed"} fillOpacity={blank ? 0 : 0.9} stroke={blank ? "#111" : ORANGE} strokeWidth={blank ? 1.4 : 2} strokeLinejoin="round" />
      )}
      {/* étiquette région */}
      {nomARA && !blank && (
        <g>
          <line x1={school.x + 70} y1={school.y - 60} x2={W - 230} y2={H - 120} stroke={GEO} strokeWidth="1.5" strokeDasharray="4 3" />
          <text x={W - 225} y={H - 112} fontFamily={CONSIGNE_FONT} fontWeight="800" fontSize="22" fill={GEO}>Auvergne-</text>
          <text x={W - 225} y={H - 86} fontFamily={CONSIGNE_FONT} fontWeight="800" fontSize="22" fill={GEO}>Rhône-Alpes</text>
        </g>
      )}
      {/* point école */}
      {ecole && !blank && (
        <g>
          <circle cx={school.x} cy={school.y} r="16" fill={ORANGE} opacity="0.25" />
          <circle cx={school.x} cy={school.y} r="7" fill="#dc2626" stroke="#fff" strokeWidth="2" />
          <g transform={`translate(${school.x + 12}, ${school.y - 30})`}>
            <rect x="0" y="0" width="150" height="34" rx="8" fill="#fff" stroke="#dc2626" strokeWidth="2" />
            <text x="10" y="22" fontFamily={CONSIGNE_FONT} fontWeight="800" fontSize="17" fill="#dc2626">🏫 Notre école</text>
          </g>
        </g>
      )}
      {/* rose des vents en coin haut-droit */}
      {rose && (
        <g transform={`translate(${W - roseSize - 8}, 8)`}>
          <RoseVentsInline size={roseSize} labels={roseLabels} />
        </g>
      )}
    </svg>
  );
}

/* Rose des vents dessinée DANS le svg carte (coordonnées locales, pas de <svg> imbriqué). */
function RoseVentsInline({ size, labels }: { size: number; labels: boolean }) {
  const c = size / 2;
  const L = (x: number, y: number, t: string) => (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontFamily={CONSIGNE_FONT} fontWeight="800" fontSize={size * 0.17} fill={GEO}>{labels ? t : "…"}</text>
  );
  return (
    <g>
      <circle cx={c} cy={c} r={c * 0.58} fill="#fff" stroke="#cbd5e1" strokeWidth="2" />
      <polygon points={`${c},${c * 0.14} ${c * 1.1},${c * 0.9} ${c * 1.86},${c} ${c * 1.1},${c * 1.1} ${c},${c * 1.86} ${c * 0.9},${c * 1.1} ${c * 0.14},${c} ${c * 0.9},${c * 0.9}`} fill={GEO} opacity="0.85" stroke="#083344" strokeWidth="1.5" />
      {L(c, size * 0.16, "N")}
      {L(c, size * 0.84, "S")}
      {L(size * 0.84, c, "E")}
      {L(size * 0.16, c, "O")}
    </g>
  );
}
