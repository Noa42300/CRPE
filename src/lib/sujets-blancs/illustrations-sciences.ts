/**
 * Illustrations SVG pour les sujets de SCIENCES ET TECHNOLOGIE
 * -----------------------------------------------------------
 * Schémas et graphiques ORIGINAUX (circuit, graphiques de données, cycle
 * de l'eau, chaîne alimentaire, dispositif expérimental), avec libellés.
 */
import type { Illustration } from "./illustrations";

const NAVY = "#0b1730";
const SKY = "#2478ea";
const GREEN = "#16a34a";

export const SCIENCES_ILLUSTRATIONS: Record<string, Illustration> = {
  // Circuit électrique : pile, interrupteur, deux lampes
  "sciences-circuit": {
    vb: [360, 240],
    alt: "Circuit électrique : une pile, un interrupteur et deux lampes reliés par des fils.",
    inner: `
      <rect x="40" y="40" width="280" height="160" fill="none" stroke="${NAVY}" stroke-width="2.5"/>
      <!-- pile -->
      <line x1="150" y1="40" x2="150" y2="20" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="150" y1="30" x2="150" y2="30" stroke="none"/>
      <line x1="140" y1="40" x2="160" y2="40" stroke="${NAVY}" stroke-width="6"/>
      <line x1="146" y1="46" x2="154" y2="46" stroke="${NAVY}" stroke-width="2.5"/>
      <text x="168" y="46" font-family="Arial" font-size="14" fill="${NAVY}">pile</text>
      <!-- interrupteur -->
      <circle cx="40" cy="120" r="4" fill="${NAVY}"/>
      <line x1="40" y1="120" x2="62" y2="104" stroke="${NAVY}" stroke-width="2.5"/>
      <text x="8" y="118" font-family="Arial" font-size="13" fill="${NAVY}">inter.</text>
      <!-- lampe 1 -->
      <circle cx="200" cy="200" r="16" fill="#fff3c4" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="189" y1="189" x2="211" y2="211" stroke="${NAVY}" stroke-width="1.6"/>
      <line x1="211" y1="189" x2="189" y2="211" stroke="${NAVY}" stroke-width="1.6"/>
      <text x="184" y="235" font-family="Arial" font-size="13" fill="${NAVY}">L1</text>
      <!-- lampe 2 -->
      <circle cx="320" cy="120" r="16" fill="#fff3c4" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="309" y1="109" x2="331" y2="131" stroke="${NAVY}" stroke-width="1.6"/>
      <line x1="331" y1="109" x2="309" y2="131" stroke="${NAVY}" stroke-width="1.6"/>
      <text x="336" y="124" font-family="Arial" font-size="13" fill="${NAVY}">L2</text>
    `,
  },

  // Graphique : refroidissement (température en fonction du temps) avec palier
  "sciences-graph-refroidissement": {
    vb: [380, 300],
    alt: "Courbe de refroidissement : la température décroît puis marque un palier à 0 °C pendant la solidification.",
    inner: `
      <line x1="50" y1="250" x2="360" y2="250" stroke="${NAVY}" stroke-width="2"/>
      <line x1="50" y1="250" x2="50" y2="30" stroke="${NAVY}" stroke-width="2"/>
      <g stroke="#c9d6ee" stroke-width="1">
        <line x1="50" y1="200" x2="355" y2="200"/><line x1="50" y1="150" x2="355" y2="150"/>
        <line x1="50" y1="100" x2="355" y2="100"/><line x1="50" y1="50" x2="355" y2="50"/>
      </g>
      <polyline points="50,60 120,150 190,200 270,200 340,235" fill="none" stroke="${SKY}" stroke-width="2.8"/>
      <line x1="50" y1="200" x2="190" y2="200" stroke="#e23b32" stroke-width="1.4" stroke-dasharray="4 3"/>
      <text x="196" y="196" font-family="Arial" font-size="12" fill="#e23b32">palier : 0 °C</text>
      <text x="150" y="278" font-family="Arial" font-size="14" fill="${NAVY}">Temps (min)</text>
      <text x="8" y="150" font-family="Arial" font-size="14" fill="${NAVY}" transform="rotate(-90 16 150)">Température (°C)</text>
      <text x="40" y="266" font-family="Arial" font-size="12" fill="${NAVY}">0</text>
    `,
  },

  // Cycle de l'eau (schéma simplifié)
  "sciences-cycle-eau": {
    vb: [380, 260],
    alt: "Cycle de l'eau : évaporation, condensation (nuage), précipitations, ruissellement vers la mer.",
    inner: `
      <rect x="0" y="0" width="380" height="260" fill="#eff8ff"/>
      <path d="M0 210 Q70 190 140 205 L140 260 L0 260 Z" fill="#bfe2fe"/>
      <path d="M140 205 Q240 220 380 200 L380 260 L140 260 Z" fill="#3a97f5" opacity="0.5"/>
      <circle cx="300" cy="55" r="26" fill="#ffd166"/>
      <ellipse cx="120" cy="70" rx="52" ry="24" fill="#ffffff" stroke="#9fb6cf" stroke-width="1.5"/>
      <ellipse cx="150" cy="60" rx="34" ry="20" fill="#ffffff" stroke="#9fb6cf" stroke-width="1.5"/>
      <path d="M250 200 Q250 150 180 120" fill="none" stroke="${SKY}" stroke-width="2.5" marker-end="url(#ar)"/>
      <path d="M120 92 L118 140" stroke="${SKY}" stroke-width="2.5" stroke-dasharray="3 3"/>
      <path d="M120 92 L128 140" stroke="${SKY}" stroke-width="2.5" stroke-dasharray="3 3"/>
      <text x="252" y="170" font-family="Arial" font-size="13" fill="${NAVY}">évaporation</text>
      <text x="86" y="44" font-family="Arial" font-size="13" fill="${NAVY}">condensation</text>
      <text x="96" y="158" font-family="Arial" font-size="13" fill="${NAVY}">pluie</text>
      <text x="300" y="235" font-family="Arial" font-size="13" fill="#0b3a6b">mer</text>
      <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><polygon points="0,0 8,4 0,8" fill="${SKY}"/></marker></defs>
    `,
  },

  // Chaîne alimentaire (réseau trophique simple)
  "sciences-chaine-alimentaire": {
    vb: [400, 150],
    alt: "Chaîne alimentaire : herbe, puis sauterelle, puis grenouille, puis couleuvre, reliées par des flèches « est mangé par ».",
    inner: `
      <defs><marker id="fa" markerWidth="10" markerHeight="10" refX="7" refY="5" orient="auto"><polygon points="0,0 10,5 0,10" fill="${NAVY}"/></marker></defs>
      <rect x="10" y="55" width="70" height="42" rx="6" fill="#dcfce7" stroke="${GREEN}" stroke-width="2"/>
      <rect x="115" y="55" width="80" height="42" rx="6" fill="#eef4ff" stroke="${NAVY}" stroke-width="2"/>
      <rect x="230" y="55" width="80" height="42" rx="6" fill="#eef4ff" stroke="${NAVY}" stroke-width="2"/>
      <rect x="330" y="55" width="60" height="42" rx="6" fill="#eef4ff" stroke="${NAVY}" stroke-width="2"/>
      <text x="30" y="80" font-family="Arial" font-size="13" fill="${GREEN}">herbe</text>
      <text x="126" y="80" font-family="Arial" font-size="12" fill="${NAVY}">sauterelle</text>
      <text x="238" y="80" font-family="Arial" font-size="12" fill="${NAVY}">grenouille</text>
      <text x="336" y="80" font-family="Arial" font-size="12" fill="${NAVY}">couleuvre</text>
      <line x1="82" y1="76" x2="113" y2="76" stroke="${NAVY}" stroke-width="2" marker-end="url(#fa)"/>
      <line x1="197" y1="76" x2="228" y2="76" stroke="${NAVY}" stroke-width="2" marker-end="url(#fa)"/>
      <line x1="312" y1="76" x2="328" y2="76" stroke="${NAVY}" stroke-width="2" marker-end="url(#fa)"/>
      <text x="150" y="128" font-family="Arial" font-size="11" fill="#5a6478">flèche = « est mangé par »</text>
    `,
  },

  // Dispositif expérimental : dissolution / conservation de la masse (balance)
  "sciences-balance-masse": {
    vb: [360, 240],
    alt: "Deux béchers sur une balance : avant et après dissolution, la masse totale est conservée.",
    inner: `
      <rect x="30" y="120" width="90" height="70" rx="4" fill="#eff8ff" stroke="${NAVY}" stroke-width="2.5"/>
      <path d="M40 150 h70 v34 a6 6 0 0 1 -6 6 h-58 a6 6 0 0 1 -6 -6 z" fill="#bfe2fe"/>
      <text x="34" y="212" font-family="Arial" font-size="12" fill="${NAVY}">eau + sel</text>
      <text x="52" y="112" font-family="Arial" font-size="13" fill="${NAVY}">avant</text>
      <rect x="235" y="120" width="90" height="70" rx="4" fill="#eff8ff" stroke="${NAVY}" stroke-width="2.5"/>
      <path d="M245 150 h70 v34 a6 6 0 0 1 -6 6 h-58 a6 6 0 0 1 -6 -6 z" fill="#93d0fd"/>
      <text x="238" y="212" font-family="Arial" font-size="12" fill="${NAVY}">solution</text>
      <text x="256" y="112" font-family="Arial" font-size="13" fill="${NAVY}">après</text>
      <text x="150" y="150" font-family="Arial" font-size="26" fill="${SKY}">=</text>
      <rect x="150" y="60" width="60" height="26" rx="4" fill="#fff3c4" stroke="${NAVY}" stroke-width="2"/>
      <text x="158" y="78" font-family="Arial" font-size="13" fill="${NAVY}">m = m'</text>
    `,
  },

  // Germination / croissance d'une plante (le vivant)
  "sciences-germination": {
    vb: [360, 200],
    alt: "Trois étapes de la germination d'une graine : graine, jeune pousse, plante avec feuilles.",
    inner: `
      <line x1="0" y1="160" x2="360" y2="160" stroke="#8a6d3b" stroke-width="3"/>
      <rect x="0" y="160" width="360" height="40" fill="#e7d3b3"/>
      <ellipse cx="60" cy="172" rx="10" ry="7" fill="#a9772f"/>
      <text x="40" y="196" font-family="Arial" font-size="12" fill="${NAVY}">graine</text>
      <path d="M180 160 v-30" stroke="#2f9e44" stroke-width="3"/>
      <path d="M180 140 q10 -6 16 -2" fill="none" stroke="#2f9e44" stroke-width="3"/>
      <path d="M180 172 v14" stroke="#a9772f" stroke-width="2"/>
      <text x="150" y="196" font-family="Arial" font-size="12" fill="${NAVY}">jeune pousse</text>
      <path d="M300 160 v-70" stroke="#2f9e44" stroke-width="3.5"/>
      <path d="M300 120 q-18 -10 -30 -4" fill="#40c057" stroke="#2f9e44" stroke-width="2"/>
      <path d="M300 105 q18 -10 30 -4" fill="#40c057" stroke="#2f9e44" stroke-width="2"/>
      <path d="M300 95 q-14 -8 -22 -2" fill="#40c057" stroke="#2f9e44" stroke-width="2"/>
      <text x="286" y="196" font-family="Arial" font-size="12" fill="${NAVY}">plante</text>
    `,
  },
};
