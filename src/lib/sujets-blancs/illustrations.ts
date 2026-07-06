/**
 * Illustrations originales (SVG) pour les sujets blancs
 * -----------------------------------------------------
 * Ce sont des créations schématiques ORIGINALES (aucune reproduction
 * d'œuvre existante sous droits). Elles servent de support visuel — en
 * particulier pour les arts plastiques — sans dépendance à une image
 * externe (le site interdit les ressources distantes).
 *
 * Chaque illustration fournit :
 *  - vb : les dimensions du viewBox [largeur, hauteur] ;
 *  - inner : le contenu SVG (sans la balise <svg>) ;
 *  - alt : une description textuelle (accessibilité + repli).
 *
 * `svgString()` reconstruit un SVG complet, utilisé à la fois pour
 * l'affichage web et pour la rasterisation dans les PDF.
 */

export interface Illustration {
  vb: [number, number];
  inner: string;
  alt: string;
}

// Les illustrations spécifiques aux maths et aux sciences sont définies dans
// leurs propres fichiers puis fusionnées ci-dessous (voir bas du fichier).
import { MATHS_ILLUSTRATIONS } from "./illustrations-maths";
import { SCIENCES_ILLUSTRATIONS } from "./illustrations-sciences";

const ARTS_ILLUSTRATIONS: Record<string, Illustration> = {
  // Portrait en clair-obscur (support pour l'analyse du portrait)
  "portrait-clair-obscur": {
    vb: [400, 300],
    alt: "Portrait schématique de trois-quarts éclairé latéralement, visage émergeant d'un fond sombre.",
    inner: `
      <defs>
        <linearGradient id="pcoBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#33333d"/><stop offset="1" stop-color="#0a0a10"/>
        </linearGradient>
        <radialGradient id="pcoFace" cx="0.33" cy="0.38" r="0.85">
          <stop offset="0" stop-color="#f0d0b0"/>
          <stop offset="0.55" stop-color="#b07f58"/>
          <stop offset="1" stop-color="#33241a"/>
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="url(#pcoBg)"/>
      <path d="M150 300 Q160 238 200 232 Q240 238 250 300 Z" fill="#241a12"/>
      <ellipse cx="200" cy="150" rx="70" ry="92" fill="url(#pcoFace)"/>
      <path d="M200 58 Q285 66 274 176 Q266 122 240 94 Q224 68 200 63 Z" fill="#17100a"/>
      <ellipse cx="180" cy="140" rx="9" ry="5" fill="#3a2a1e"/>
      <ellipse cx="223" cy="143" rx="9" ry="5" fill="#2a1d14"/>
      <path d="M198 150 Q191 173 203 178" fill="none" stroke="#5b4130" stroke-width="3" stroke-linecap="round"/>
      <path d="M181 197 Q200 208 221 196" fill="none" stroke="#6b3b2e" stroke-width="4" stroke-linecap="round"/>
    `,
  },

  // Paysage en plans successifs (perspective atmosphérique)
  "paysage-plans": {
    vb: [400, 260],
    alt: "Paysage schématique : arbres au premier plan, rivière, village, collines s'estompant dans une brume bleutée sous un ciel doré.",
    inner: `
      <defs>
        <linearGradient id="plSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stop-color="#f7dc93"/><stop offset="1" stop-color="#e8a86c"/>
        </linearGradient>
      </defs>
      <rect width="400" height="150" fill="url(#plSky)"/>
      <circle cx="300" cy="66" r="30" fill="#fff3d0"/>
      <path d="M0 128 Q100 88 200 118 Q300 144 400 108 L400 150 L0 150 Z" fill="#a3bad2"/>
      <path d="M0 150 Q120 120 240 148 Q322 166 400 144 L400 192 L0 192 Z" fill="#6f9a86"/>
      <rect y="182" width="400" height="78" fill="#3f5d43"/>
      <path d="M192 182 Q206 210 182 236 Q172 250 152 260 L236 260 Q212 236 221 206 Q227 192 231 182 Z" fill="#c3d9ea"/>
      <g fill="#22321f">
        <ellipse cx="58" cy="176" rx="27" ry="42"/><rect x="54" y="200" width="8" height="34"/>
        <ellipse cx="342" cy="188" rx="21" ry="34"/><rect x="339" y="210" width="7" height="30"/>
      </g>
    `,
  },

  // Buste sculpté sur un socle (support pour l'analyse de la sculpture)
  "sculpture-buste": {
    vb: [260, 300],
    alt: "Buste sculpté posé sur un socle, éclairé de façon à faire ressortir le relief du visage.",
    inner: `
      <defs>
        <linearGradient id="scStone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#f2efe9"/><stop offset="0.5" stop-color="#d8d2c6"/><stop offset="1" stop-color="#a8a294"/>
        </linearGradient>
      </defs>
      <rect width="260" height="300" fill="#2b2f38"/>
      <rect x="90" y="235" width="80" height="55" fill="#6b6f78"/>
      <rect x="82" y="228" width="96" height="10" fill="#83878f"/>
      <path d="M96 235 Q96 175 130 168 Q164 175 164 235 Z" fill="url(#scStone)"/>
      <ellipse cx="130" cy="130" rx="42" ry="52" fill="url(#scStone)"/>
      <path d="M130 90 Q168 96 164 150 Q160 118 144 104 Q138 94 130 92 Z" fill="#bdb6a8"/>
      <ellipse cx="116" cy="126" rx="6" ry="4" fill="#8a8474"/>
      <ellipse cx="146" cy="128" rx="6" ry="4" fill="#8a8474"/>
      <path d="M129 132 Q124 150 133 154" fill="none" stroke="#9a9384" stroke-width="2.5"/>
      <path d="M118 168 Q130 176 143 167" fill="none" stroke="#8a8474" stroke-width="2.5"/>
    `,
  },

  // Art urbain : une fresque colorée sur un mur de briques
  "art-urbain": {
    vb: [360, 240],
    alt: "Fresque colorée peinte sur un mur de briques, mêlant formes géométriques et courbes.",
    inner: `
      <rect width="360" height="240" fill="#b5651d"/>
      <g stroke="#9c561a" stroke-width="2">
        <line x1="0" y1="40" x2="360" y2="40"/><line x1="0" y1="80" x2="360" y2="80"/>
        <line x1="0" y1="120" x2="360" y2="120"/><line x1="0" y1="160" x2="360" y2="160"/>
        <line x1="0" y1="200" x2="360" y2="200"/>
        <line x1="60" y1="0" x2="60" y2="40"/><line x1="180" y1="0" x2="180" y2="40"/><line x1="300" y1="0" x2="300" y2="40"/>
        <line x1="120" y1="40" x2="120" y2="80"/><line x1="240" y1="40" x2="240" y2="80"/>
        <line x1="60" y1="80" x2="60" y2="120"/><line x1="180" y1="80" x2="180" y2="120"/><line x1="300" y1="80" x2="300" y2="120"/>
        <line x1="120" y1="120" x2="120" y2="160"/><line x1="240" y1="120" x2="240" y2="160"/>
        <line x1="60" y1="160" x2="60" y2="200"/><line x1="180" y1="160" x2="180" y2="200"/><line x1="300" y1="160" x2="300" y2="200"/>
      </g>
      <path d="M60 190 Q90 90 150 120 Q170 60 210 110 Q250 80 280 140 Q300 180 250 190 Z" fill="#e23b32" opacity="0.92"/>
      <circle cx="150" cy="120" r="20" fill="#f4c430"/>
      <path d="M120 150 Q160 130 200 160" fill="none" stroke="#2d6cdf" stroke-width="8" stroke-linecap="round"/>
      <path d="M225 180 l10 -26 l10 26 z" fill="#2f9e44"/>
    `,
  },

  // Composition abstraite géométrique (aplats de couleurs primaires)
  "composition-abstraite": {
    vb: [320, 260],
    alt: "Composition abstraite : aplats de rouge, jaune et bleu séparés par des lignes noires épaisses sur fond clair.",
    inner: `
      <rect width="320" height="260" fill="#f7f7f2"/>
      <rect x="0" y="0" width="150" height="150" fill="#e23b32"/>
      <rect x="230" y="0" width="90" height="90" fill="#f4c430"/>
      <rect x="230" y="170" width="90" height="90" fill="#2d6cdf"/>
      <rect x="0" y="200" width="90" height="60" fill="#f4c430"/>
      <g stroke="#111111" stroke-width="10">
        <line x1="150" y1="0" x2="150" y2="260"/>
        <line x1="230" y1="0" x2="230" y2="260"/>
        <line x1="0" y1="150" x2="320" y2="150"/>
        <line x1="0" y1="200" x2="320" y2="200"/>
        <line x1="230" y1="90" x2="320" y2="90"/>
        <line x1="230" y1="170" x2="320" y2="170"/>
      </g>
    `,
  },
};

/** Registre complet : arts + maths + sciences. */
export const ILLUSTRATIONS: Record<string, Illustration> = {
  ...ARTS_ILLUSTRATIONS,
  ...MATHS_ILLUSTRATIONS,
  ...SCIENCES_ILLUSTRATIONS,
};

/** Reconstruit un SVG complet (avec xmlns, requis pour la rasterisation). */
export function svgString(key: string): string | null {
  const ill = ILLUSTRATIONS[key];
  if (!ill) return null;
  const [w, h] = ill.vb;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${ill.inner}</svg>`;
}
