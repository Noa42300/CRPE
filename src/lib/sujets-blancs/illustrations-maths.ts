/**
 * Illustrations SVG pour les sujets de MATHÉMATIQUES
 * --------------------------------------------------
 * Figures géométriques, graphiques et schémas ORIGINAUX, avec libellés,
 * dans la charte du site (traits navy, accents sky). Utilisés à l'écran
 * (SVG) et dans les PDF (rasterisés).
 */
import type { Illustration } from "./illustrations";

const NAVY = "#0b1730";
const SKY = "#2478ea";

export const MATHS_ILLUSTRATIONS: Record<string, Illustration> = {
  // Triangle rectangle ABC (angle droit en A) avec côtés étiquetés
  "maths-triangle-rectangle": {
    vb: [360, 260],
    alt: "Triangle rectangle ABC, angle droit en A, avec AB, AC et l'hypoténuse BC.",
    inner: `
      <polygon points="60,210 60,60 300,210" fill="#eef4ff" stroke="${NAVY}" stroke-width="2.5"/>
      <rect x="60" y="188" width="22" height="22" fill="none" stroke="${NAVY}" stroke-width="2"/>
      <circle cx="60" cy="210" r="4" fill="${NAVY}"/>
      <circle cx="60" cy="60" r="4" fill="${NAVY}"/>
      <circle cx="300" cy="210" r="4" fill="${NAVY}"/>
      <text x="46" y="226" font-family="Arial" font-size="20" font-weight="bold" fill="${NAVY}">A</text>
      <text x="46" y="56" font-family="Arial" font-size="20" font-weight="bold" fill="${NAVY}">B</text>
      <text x="308" y="226" font-family="Arial" font-size="20" font-weight="bold" fill="${NAVY}">C</text>
      <text x="30" y="140" font-family="Arial" font-size="16" fill="${SKY}">AB</text>
      <text x="170" y="232" font-family="Arial" font-size="16" fill="${SKY}">AC</text>
      <text x="188" y="120" font-family="Arial" font-size="16" fill="${SKY}" transform="rotate(-32 188 120)">BC</text>
    `,
  },

  // Terrain composite : rectangle + triangle rectangle accolé, cotes en m
  "maths-terrain-composite": {
    vb: [380, 260],
    alt: "Figure composite : un rectangle de 20 m sur 12 m surmonté d'un triangle rectangle de hauteur 9 m.",
    inner: `
      <polygon points="40,90 40,210 300,210 300,90" fill="#eef4ff" stroke="${NAVY}" stroke-width="2.5"/>
      <polygon points="40,90 300,90 170,30" fill="#dbeafe" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="40" y1="90" x2="40" y2="210" stroke="${NAVY}" stroke-width="2.5"/>
      <text x="150" y="232" font-family="Arial" font-size="16" fill="${NAVY}">20 m</text>
      <text x="308" y="155" font-family="Arial" font-size="16" fill="${NAVY}">12 m</text>
      <text x="176" y="66" font-family="Arial" font-size="16" fill="${NAVY}">9 m</text>
      <line x1="322" y1="90" x2="322" y2="30" stroke="${SKY}" stroke-width="1.2"/>
      <text x="328" y="64" font-family="Arial" font-size="13" fill="${SKY}">h</text>
    `,
  },

  // Cercle inscrit dans un carré (aire d'une zone coloriée)
  "maths-cercle-dans-carre": {
    vb: [260, 260],
    alt: "Carré de côté 10 cm avec le cercle inscrit ; la zone entre le carré et le cercle est coloriée.",
    inner: `
      <rect x="30" y="30" width="200" height="200" fill="#dbeafe" stroke="${NAVY}" stroke-width="2.5"/>
      <circle cx="130" cy="130" r="100" fill="#ffffff" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="130" y1="130" x2="230" y2="130" stroke="${SKY}" stroke-width="1.6" stroke-dasharray="4 3"/>
      <text x="165" y="124" font-family="Arial" font-size="14" fill="${SKY}">r = 5 cm</text>
      <text x="96" y="20" font-family="Arial" font-size="15" fill="${NAVY}">10 cm</text>
    `,
  },

  // Graphique : deux tarifs (fonctions affines) sur un repère
  "maths-graph-tarifs": {
    vb: [380, 300],
    alt: "Repère : deux droites représentant deux formules de tarif en fonction du nombre de séances.",
    inner: `
      <line x1="50" y1="250" x2="360" y2="250" stroke="${NAVY}" stroke-width="2"/>
      <line x1="50" y1="250" x2="50" y2="30" stroke="${NAVY}" stroke-width="2"/>
      <g stroke="#c9d6ee" stroke-width="1">
        <line x1="110" y1="250" x2="110" y2="35"/><line x1="170" y1="250" x2="170" y2="35"/>
        <line x1="230" y1="250" x2="230" y2="35"/><line x1="290" y1="250" x2="290" y2="35"/>
        <line x1="50" y1="200" x2="355" y2="200"/><line x1="50" y1="150" x2="355" y2="150"/>
        <line x1="50" y1="100" x2="355" y2="100"/><line x1="50" y1="50" x2="355" y2="50"/>
      </g>
      <polygon points="50,26 46,36 54,36" fill="${NAVY}"/>
      <polygon points="364,250 354,246 354,254" fill="${NAVY}"/>
      <!-- Formule A : sans abonnement, part de l'origine, pente plus forte -->
      <line x1="50" y1="250" x2="340" y2="55" stroke="${SKY}" stroke-width="2.5"/>
      <!-- Formule B : abonnement (ordonnée à l'origine), pente plus faible -->
      <line x1="50" y1="185" x2="340" y2="105" stroke="#e23b32" stroke-width="2.5"/>
      <circle cx="50" cy="185" r="4" fill="#e23b32"/>
      <text x="16" y="182" font-family="Arial" font-size="12" fill="#e23b32">30€</text>
      <circle cx="214" cy="140" r="5" fill="none" stroke="${NAVY}" stroke-width="2"/>
      <text x="300" y="66" font-family="Arial" font-size="13" fill="${SKY}">Formule A</text>
      <text x="300" y="120" font-family="Arial" font-size="13" fill="#e23b32">Formule B</text>
      <text x="150" y="278" font-family="Arial" font-size="14" fill="${NAVY}">Nombre de séances</text>
      <text x="8" y="140" font-family="Arial" font-size="14" fill="${NAVY}" transform="rotate(-90 16 140)">Coût (€)</text>
      <text x="44" y="266" font-family="Arial" font-size="12" fill="${NAVY}">0</text>
    `,
  },

  // Diagramme en barres (statistiques)
  "maths-graph-barres": {
    vb: [380, 280],
    alt: "Diagramme en barres des effectifs par mode de déplacement.",
    inner: `
      <line x1="55" y1="230" x2="360" y2="230" stroke="${NAVY}" stroke-width="2"/>
      <line x1="55" y1="230" x2="55" y2="25" stroke="${NAVY}" stroke-width="2"/>
      <g stroke="#c9d6ee" stroke-width="1">
        <line x1="55" y1="190" x2="355" y2="190"/><line x1="55" y1="150" x2="355" y2="150"/>
        <line x1="55" y1="110" x2="355" y2="110"/><line x1="55" y1="70" x2="355" y2="70"/>
      </g>
      <rect x="80" y="110" width="46" height="120" fill="${SKY}"/>
      <rect x="160" y="150" width="46" height="80" fill="#3a97f5"/>
      <rect x="240" y="190" width="46" height="40" fill="#93d0fd"/>
      <text x="86" y="248" font-family="Arial" font-size="13" fill="${NAVY}">À pied</text>
      <text x="168" y="248" font-family="Arial" font-size="13" fill="${NAVY}">Vélo</text>
      <text x="244" y="248" font-family="Arial" font-size="13" fill="${NAVY}">Voiture</text>
      <text x="38" y="234" font-family="Arial" font-size="12" fill="${NAVY}">0</text>
      <text x="30" y="194" font-family="Arial" font-size="12" fill="${NAVY}">20</text>
      <text x="30" y="154" font-family="Arial" font-size="12" fill="${NAVY}">40</text>
      <text x="30" y="114" font-family="Arial" font-size="12" fill="${NAVY}">60</text>
      <text x="30" y="74" font-family="Arial" font-size="12" fill="${NAVY}">80</text>
      <text x="6" y="120" font-family="Arial" font-size="13" fill="${NAVY}" transform="rotate(-90 14 120)">Effectif</text>
    `,
  },

  // Plan à l'échelle d'une cour rectangulaire
  "maths-plan-cour": {
    vb: [360, 240],
    alt: "Plan à l'échelle d'une cour rectangulaire avec une allée diagonale.",
    inner: `
      <rect x="40" y="40" width="280" height="150" fill="#eef4ff" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="40" y1="190" x2="320" y2="40" stroke="${SKY}" stroke-width="2" stroke-dasharray="6 4"/>
      <text x="150" y="30" font-family="Arial" font-size="15" fill="${NAVY}">15 cm</text>
      <text x="326" y="120" font-family="Arial" font-size="15" fill="${NAVY}">9 cm</text>
      <text x="150" y="128" font-family="Arial" font-size="13" fill="${SKY}">allée</text>
      <text x="40" y="215" font-family="Arial" font-size="13" fill="${NAVY}">Échelle 1/200</text>
    `,
  },
};
