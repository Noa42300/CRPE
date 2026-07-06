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

export const ILLUSTRATIONS: Record<string, Illustration> = {
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

/** Reconstruit un SVG complet (avec xmlns, requis pour la rasterisation). */
export function svgString(key: string): string | null {
  const ill = ILLUSTRATIONS[key];
  if (!ill) return null;
  const [w, h] = ill.vb;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${ill.inner}</svg>`;
}
