/**
 * Schémas de Physique-Chimie en SVG / HTML-CSS natif (aucune image externe).
 */
import type { ReactElement } from "react";

const NAVY = "#16244d";
const SKY = "#2478ea";
const EMERALD = "#059669";
const AMBER = "#d97706";
const ROSE = "#e11d48";
const VIOLET = "#7c3aed";

function Figure({ children, caption }: { children: React.ReactNode; caption?: string }) {
  return (
    <figure className="my-1 flex flex-col items-center">
      <div className="w-full max-w-md">{children}</div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs italic text-navy-400">{caption}</figcaption>
      )}
    </figure>
  );
}

/** Schéma en flux : étapes reliées par des flèches (vertical, responsive). */
function Flow({ steps, color = SKY, caption }: { steps: string[]; color?: string; caption?: string }) {
  return (
    <Figure caption={caption}>
      <div className="flex flex-col items-center gap-1.5">
        {steps.map((s, i) => (
          <div key={i} className="flex w-full flex-col items-center">
            <div
              className="w-full rounded-xl border-2 px-4 py-2 text-center text-sm font-semibold text-navy-800"
              style={{ borderColor: color, background: `${color}14` }}
            >
              {s}
            </div>
            {i < steps.length - 1 && (
              <span className="text-lg leading-none" style={{ color }} aria-hidden>↓</span>
            )}
          </div>
        ))}
      </div>
    </Figure>
  );
}

// ---------- États de la matière ----------
function EtatsMatiere() {
  // Positions FIXES (déterministes) pour éviter tout décalage d'hydratation.
  const solide = [
    [12, 8], [30, 8], [48, 8], [12, 20], [30, 20], [48, 20], [12, 32], [30, 32], [48, 32],
  ];
  const liquide = [
    [14, 12], [34, 10], [48, 20], [20, 26], [40, 30], [10, 32],
  ];
  const gaz = [[12, 10], [46, 14], [26, 28], [50, 34]];
  const cells = [
    { t: "Solide", d: "forme + volume propres", c: SKY, dots: solide },
    { t: "Liquide", d: "volume propre, pas de forme", c: EMERALD, dots: liquide },
    { t: "Gaz", d: "ni forme ni volume propres", c: ROSE, dots: gaz },
  ];
  return (
    <Figure caption="Les 3 états : les particules sont de plus en plus dispersées.">
      <div className="grid grid-cols-3 gap-2">
        {cells.map((c) => (
          <div key={c.t} className="rounded-xl border-2 p-2 text-center" style={{ borderColor: c.c, background: `${c.c}12` }}>
            <svg viewBox="0 0 60 40" className="mx-auto h-10 w-full">
              {c.dots.map(([cx, cy], i) => (
                <circle key={i} cx={cx} cy={cy} r="3.5" fill={c.c} />
              ))}
            </svg>
            <p className="mt-1 text-xs font-bold" style={{ color: c.c }}>{c.t}</p>
            <p className="text-[10px] leading-tight text-navy-500">{c.d}</p>
          </div>
        ))}
      </div>
    </Figure>
  );
}

// ---------- Atome ----------
function Atome() {
  return (
    <Figure caption="Un atome : un noyau central entouré d'électrons.">
      <svg viewBox="0 0 220 200" className="h-auto w-full" role="img" aria-label="Schéma d'un atome">
        <ellipse cx="110" cy="100" rx="95" ry="45" fill="none" stroke={SKY} strokeWidth="1.5" />
        <ellipse cx="110" cy="100" rx="45" ry="95" fill="none" stroke={SKY} strokeWidth="1.5" />
        <circle cx="110" cy="100" r="20" fill={ROSE} />
        <text x="110" y="104" textAnchor="middle" fill="#fff" fontSize="11" fontWeight="700">noyau</text>
        <circle cx="205" cy="100" r="6" fill={SKY} />
        <circle cx="15" cy="100" r="6" fill={SKY} />
        <circle cx="110" cy="5" r="6" fill={SKY} />
        <text x="150" y="60" fill={SKY} fontSize="11" fontWeight="600">électrons</text>
      </svg>
    </Figure>
  );
}

// ---------- Molécule d'eau ----------
function MoleculeEau() {
  return (
    <Figure caption="Molécule d'eau H₂O : 1 atome d'oxygène + 2 atomes d'hydrogène.">
      <svg viewBox="0 0 220 160" className="h-auto w-full" role="img" aria-label="Molécule d'eau">
        <line x1="110" y1="80" x2="55" y2="130" stroke={NAVY} strokeWidth="5" />
        <line x1="110" y1="80" x2="165" y2="130" stroke={NAVY} strokeWidth="5" />
        <circle cx="110" cy="80" r="34" fill={ROSE} />
        <text x="110" y="86" textAnchor="middle" fill="#fff" fontSize="20" fontWeight="700">O</text>
        <circle cx="55" cy="130" r="20" fill={SKY} />
        <text x="55" y="136" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">H</text>
        <circle cx="165" cy="130" r="20" fill={SKY} />
        <text x="165" y="136" textAnchor="middle" fill="#fff" fontSize="14" fontWeight="700">H</text>
      </svg>
    </Figure>
  );
}

// ---------- Circuits ----------
function Circuit({ type }: { type: "simple" | "serie" | "derivation" }) {
  const lamp = (x: number, y: number) => (
    <g>
      <circle cx={x} cy={y} r="12" fill="#fffbeb" stroke={AMBER} strokeWidth="2.5" />
      <path d={`M${x - 6},${y - 6} L${x + 6},${y + 6} M${x + 6},${y - 6} L${x - 6},${y + 6}`} stroke={AMBER} strokeWidth="2" />
    </g>
  );
  const pile = (x: number, y: number) => (
    <g>
      <line x1={x - 8} y1={y - 12} x2={x - 8} y2={y + 12} stroke={NAVY} strokeWidth="4" />
      <line x1={x + 4} y1={y - 7} x2={x + 4} y2={y + 7} stroke={NAVY} strokeWidth="8" />
      <text x={x} y={y + 30} textAnchor="middle" fill={NAVY} fontSize="10">pile</text>
    </g>
  );
  const captions = {
    simple: "Circuit simple : une pile alimente une lampe (circuit fermé).",
    serie: "En série : une seule boucle. Si une lampe grille, tout s'éteint.",
    derivation: "En dérivation : deux branches. Chaque lampe est indépendante.",
  };
  return (
    <Figure caption={captions[type]}>
      <svg viewBox="0 0 240 160" className="h-auto w-full" role="img" aria-label={`Circuit ${type}`}>
        <rect x="30" y="30" width="180" height="100" fill="none" stroke={SKY} strokeWidth="2.5" rx="6" />
        {pile(30, 80)}
        {type === "simple" && lamp(120, 30)}
        {type === "serie" && (
          <>
            {lamp(90, 30)}
            {lamp(160, 30)}
          </>
        )}
        {type === "derivation" && (
          <>
            <line x1="120" y1="30" x2="120" y2="130" stroke={SKY} strokeWidth="2.5" />
            {lamp(75, 80)}
            {lamp(165, 80)}
          </>
        )}
      </svg>
    </Figure>
  );
}

// ---------- Lentille convergente ----------
function LentilleConvergente() {
  return (
    <Figure caption="Lentille convergente : elle rassemble les rayons en un foyer.">
      <svg viewBox="0 0 260 160" className="h-auto w-full" role="img" aria-label="Lentille convergente">
        <ellipse cx="120" cy="80" rx="14" ry="60" fill="#dbeafe" stroke={SKY} strokeWidth="2.5" />
        {[40, 80, 120].map((y) => (
          <g key={y}>
            <line x1="10" y1={y} x2="120" y2="80" stroke={ROSE} strokeWidth="2" />
          </g>
        ))}
        <line x1="120" y1="80" x2="240" y2="80" stroke={ROSE} strokeWidth="2" />
        <circle cx="200" cy="80" r="4" fill={NAVY} />
        <text x="200" y="100" textAnchor="middle" fill={NAVY} fontSize="11">foyer</text>
      </svg>
    </Figure>
  );
}

// ---------- Ombre ----------
function Ombre() {
  return (
    <Figure caption="La lumière est bloquée par l'objet : une ombre portée se forme.">
      <svg viewBox="0 0 280 150" className="h-auto w-full" role="img" aria-label="Formation d'une ombre">
        <circle cx="30" cy="60" r="16" fill={AMBER} />
        <text x="30" y="100" textAnchor="middle" fill={AMBER} fontSize="10">source</text>
        {[40, 60, 80].map((y) => (
          <line key={y} x1="46" y1="60" x2="120" y2={y} stroke={AMBER} strokeWidth="1.5" strokeDasharray="3 3" />
        ))}
        <rect x="120" y="35" width="16" height="55" fill={NAVY} />
        <text x="128" y="105" textAnchor="middle" fill={NAVY} fontSize="10">objet</text>
        <polygon points="136,45 260,20 260,120 136,80" fill="#16244d22" />
        <text x="215" y="75" textAnchor="middle" fill={NAVY} fontSize="11" fontWeight="600">ombre portée</text>
      </svg>
    </Figure>
  );
}

// ---------- Registre ----------
export const PHYS_SCHEMAS: Record<string, ReactElement> = {
  "etats-matiere": <EtatsMatiere />,
  atome: <Atome />,
  "molecule-eau": <MoleculeEau />,
  "circuit-simple": <Circuit type="simple" />,
  "circuit-serie": <Circuit type="serie" />,
  "circuit-derivation": <Circuit type="derivation" />,
  "lentille-convergente": <LentilleConvergente />,
  ombre: <Ombre />,
  "changements-etat": (
    <Flow
      color={SKY}
      steps={["Solide", "↓ fusion / ↑ solidification", "Liquide", "↓ vaporisation / ↑ liquéfaction", "Gaz"]}
      caption="Les changements d'état relient solide, liquide et gaz."
    />
  ),
  "chaine-energetique": (
    <Flow
      color={EMERALD}
      steps={["Source d'énergie", "Convertisseur (appareil)", "Énergie utile + pertes (chaleur)"]}
      caption="Toute conversion s'accompagne de pertes sous forme de chaleur."
    />
  ),
  combustion: (
    <Flow
      color={AMBER}
      steps={["Combustible + comburant (O₂)", "→ combustion", "Produits + énergie (chaleur, lumière)"]}
      caption="Ex : bois + dioxygène → dioxyde de carbone + eau + énergie."
    />
  ),
};

export function PhysSchema({ id }: { id?: string }) {
  if (!id || !PHYS_SCHEMAS[id]) return null;
  return PHYS_SCHEMAS[id];
}

// (VIOLET conservé pour cohérence de palette éventuelle)
void VIOLET;
