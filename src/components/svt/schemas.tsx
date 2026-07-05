/**
 * Schémas de SVT en SVG / HTML-CSS natif (aucune image externe)
 * -------------------------------------------------------------
 * Chaque fiche référence un schéma par sa clé (champ `schema`).
 */
import type { ReactElement } from "react";

const NAVY = "#16244d";
const EMERALD = "#059669";
const SKY = "#2478ea";
const ROSE = "#e11d48";
const AMBER = "#d97706";
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

/** Schéma en flux : des étapes reliées par des flèches (vertical, responsive). */
function Flow({
  steps,
  color = SKY,
  caption,
}: {
  steps: string[];
  color?: string;
  caption?: string;
}) {
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

// ---------- Cellule ----------
function Cellule() {
  return (
    <Figure caption="Cellule animale : membrane, cytoplasme et noyau.">
      <svg viewBox="0 0 300 220" className="h-auto w-full" role="img" aria-label="Schéma d'une cellule">
        <ellipse cx="150" cy="110" rx="135" ry="95" fill="#ecfdf5" stroke={EMERALD} strokeWidth="3" />
        <text x="150" y="30" textAnchor="middle" fill={EMERALD} fontSize="12" fontWeight="700">membrane</text>
        <text x="60" y="170" fill={NAVY} fontSize="12">cytoplasme</text>
        <circle cx="150" cy="110" r="42" fill="#dbeafe" stroke={SKY} strokeWidth="2.5" />
        <circle cx="150" cy="110" r="12" fill={SKY} />
        <text x="150" y="115" textAnchor="middle" fill="#fff" fontSize="10" fontWeight="700">ADN</text>
        <text x="150" y="170" textAnchor="middle" fill={SKY} fontSize="12" fontWeight="700">noyau</text>
      </svg>
    </Figure>
  );
}

// ---------- ADN (double hélice simplifiée) ----------
function Adn() {
  const rungs = Array.from({ length: 9 });
  return (
    <Figure caption="ADN : une double hélice de nucléotides appariés.">
      <svg viewBox="0 0 200 220" className="h-auto w-full" role="img" aria-label="Molécule d'ADN en double hélice">
        {rungs.map((_, i) => {
          const y = 15 + i * 22;
          const x1 = 100 + 55 * Math.sin(i * 0.7);
          const x2 = 100 - 55 * Math.sin(i * 0.7);
          return (
            <g key={i}>
              <line x1={x1} y1={y} x2={x2} y2={y} stroke={i % 2 ? VIOLET : SKY} strokeWidth="4" strokeLinecap="round" />
              <circle cx={x1} cy={y} r="5" fill={VIOLET} />
              <circle cx={x2} cy={y} r="5" fill={SKY} />
            </g>
          );
        })}
      </svg>
    </Figure>
  );
}

// ---------- Chromosomes (paire XX / XY) ----------
function Chromosomes() {
  return (
    <Figure caption="46 chromosomes chez l'humain (23 paires) — dont la paire sexuelle.">
      <svg viewBox="0 0 260 160" className="h-auto w-full" role="img" aria-label="Chromosomes sexuels">
        <g stroke={VIOLET} strokeWidth="9" strokeLinecap="round" fill="none">
          <path d="M50,30 L80,130 M80,30 L50,130" />
          <path d="M120,30 L150,130 M150,30 L120,130" />
        </g>
        <text x="65" y="150" textAnchor="middle" fill={VIOLET} fontSize="14" fontWeight="700">XX (femme)</text>
        <g stroke={SKY} strokeWidth="9" strokeLinecap="round" fill="none">
          <path d="M195,30 L225,130 M225,30 L195,130" />
          <path d="M240,30 L240,80 M240,80 L228,110 M240,80 L252,110" />
        </g>
        <text x="222" y="150" textAnchor="middle" fill={SKY} fontSize="14" fontWeight="700">XY (homme)</text>
      </svg>
    </Figure>
  );
}

// ---------- Cœur (4 cavités) ----------
function Coeur() {
  return (
    <Figure caption="Le cœur : 2 oreillettes (haut) et 2 ventricules (bas).">
      <svg viewBox="0 0 260 220" className="h-auto w-full" role="img" aria-label="Schéma du cœur">
        <rect x="35" y="30" width="90" height="70" rx="10" fill="#dbeafe" stroke={SKY} strokeWidth="2" />
        <rect x="135" y="30" width="90" height="70" rx="10" fill="#fee2e2" stroke={ROSE} strokeWidth="2" />
        <rect x="35" y="110" width="90" height="90" rx="10" fill="#bfdbfe" stroke={SKY} strokeWidth="2" />
        <rect x="135" y="110" width="90" height="90" rx="10" fill="#fecaca" stroke={ROSE} strokeWidth="2" />
        <text x="80" y="70" textAnchor="middle" fill={NAVY} fontSize="11" fontWeight="600">oreillette D</text>
        <text x="180" y="70" textAnchor="middle" fill={NAVY} fontSize="11" fontWeight="600">oreillette G</text>
        <text x="80" y="160" textAnchor="middle" fill={NAVY} fontSize="11" fontWeight="600">ventricule D</text>
        <text x="180" y="160" textAnchor="middle" fill={NAVY} fontSize="11" fontWeight="600">ventricule G</text>
        <text x="30" y="18" fill={SKY} fontSize="11">sang pauvre en O₂</text>
        <text x="140" y="18" fill={ROSE} fontSize="11">sang riche en O₂</text>
      </svg>
    </Figure>
  );
}

// ---------- Photosynthèse ----------
function Photosynthese() {
  return (
    <Figure caption="La feuille capte lumière, eau et CO₂ pour produire glucose et O₂.">
      <svg viewBox="0 0 300 200" className="h-auto w-full" role="img" aria-label="Schéma de la photosynthèse">
        <path d="M150,40 C90,40 60,110 150,170 C240,110 210,40 150,40 Z" fill="#dcfce7" stroke={EMERALD} strokeWidth="3" />
        <line x1="150" y1="60" x2="150" y2="160" stroke={EMERALD} strokeWidth="2" />
        {/* Entrées */}
        <text x="10" y="55" fill={AMBER} fontSize="12" fontWeight="700">☀️ lumière</text>
        <text x="10" y="110" fill={SKY} fontSize="12" fontWeight="700">CO₂ →</text>
        <text x="10" y="150" fill={SKY} fontSize="12" fontWeight="700">eau →</text>
        {/* Sorties */}
        <text x="235" y="95" fill={EMERALD} fontSize="12" fontWeight="700">→ glucose</text>
        <text x="235" y="135" fill={EMERALD} fontSize="12" fontWeight="700">→ O₂</text>
      </svg>
    </Figure>
  );
}

// ---------- Registre ----------
export const SVT_SCHEMAS: Record<string, ReactElement> = {
  cellule: <Cellule />,
  adn: <Adn />,
  chromosomes: <Chromosomes />,
  coeur: <Coeur />,
  photosynthese: <Photosynthese />,
  "niveaux-organisation": (
    <Flow
      color={EMERALD}
      steps={["Cellule", "Tissu", "Organe", "Appareil", "Organisme"]}
      caption="Du plus petit au plus grand : chaque niveau dépend du précédent."
    />
  ),
  "chaine-alimentaire": (
    <Flow
      color={EMERALD}
      steps={["Producteur (herbe)", "Consommateur 1 (lapin)", "Consommateur 2 (renard)", "Décomposeurs"]}
      caption="L'énergie circule du producteur vers les consommateurs."
    />
  ),
  digestion: (
    <Flow
      color={AMBER}
      steps={["Bouche", "Œsophage", "Estomac", "Intestin grêle", "Gros intestin", "Rectum → Anus"]}
      caption="Trajet des aliments ; l'absorption se fait dans l'intestin grêle."
    />
  ),
  "circulation-double": (
    <Flow
      color={ROSE}
      steps={["Cœur", "Poumons (petite circulation) ou Organes (grande circulation)", "Retour au cœur"]}
      caption="Deux boucles : cœur → poumons → cœur, et cœur → organes → cœur."
    />
  ),
  "echanges-gazeux": (
    <Flow
      color={SKY}
      steps={["Air inspiré", "Alvéoles pulmonaires", "O₂ passe dans le sang", "CO₂ quitte le sang"]}
      caption="Les échanges se font dans les alvéoles, pas dans les bronches."
    />
  ),
  fecondation: (
    <Flow
      color={VIOLET}
      steps={["Ovulation", "Rencontre dans une trompe", "Fusion spermatozoïde + ovule", "Cellule-œuf"]}
      caption="La fécondation a lieu dans une trompe de Fallope."
    />
  ),
  "developpement-embryon": (
    <Flow
      color={VIOLET}
      steps={["Cellule-œuf", "Embryon", "Fœtus", "Naissance"]}
      caption="Développement continu (~9 mois), nourri par le placenta."
    />
  ),
  "respiration-cellulaire": (
    <Flow
      color={EMERALD}
      steps={["Glucose + dioxygène", "→ dans la cellule", "Énergie + eau + CO₂"]}
      caption="La cellule utilise l'O₂ pour produire de l'énergie."
    />
  ),
};

export function SvtSchema({ id }: { id?: string }) {
  if (!id || !SVT_SCHEMAS[id]) return null;
  return SVT_SCHEMAS[id];
}
