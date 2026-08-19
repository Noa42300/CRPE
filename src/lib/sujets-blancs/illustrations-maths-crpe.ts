/**
 * Illustrations SVG pour les sujets de MATHÉMATIQUES « Niveau CRPE »
 * -----------------------------------------------------------------
 * Figures géométriques exactes et illustrations de contexte sobres, dans la
 * charte du site (traits navy, accents sky). Utilisées à l'écran (SVG) et
 * dans les PDF (rasterisées). Les figures respectent les données des énoncés
 * (points, longueurs, parallélisme, rapports) ; elles sont schématiques et
 * « non à l'échelle » lorsque cela est précisé dans la légende.
 */
import type { Illustration } from "./illustrations";

const NAVY = "#0b1730";
const SKY = "#2478ea";

export const MATHS_CRPE_ILLUSTRATIONS: Record<string, Illustration> = {
  // Sujet 6 — Ex 2 : configuration de Thalès (avion, hélicoptères, motos).
  // A sommet commun ; L et H tels que AL = AH ; N et M tels que AN = AM ;
  // (LH) ∥ (MN). Rapport respecté : AL/AN = AH/AM = 720/1000 = 0,72.
  "crpe-thales-course": {
    vb: [400, 300],
    alt: "Deux droites issues du point A (avion) coupées par les parallèles (LH) et (MN) ; AL = AH = 720 m, LH = 270 m, AN = AM = 1 km.",
    inner: `
      <line x1="200" y1="34" x2="70" y2="255" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="200" y1="34" x2="330" y2="255" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="70" y1="255" x2="330" y2="255" stroke="${SKY}" stroke-width="2.5"/>
      <line x1="106" y1="188" x2="294" y2="188" stroke="${SKY}" stroke-width="2.5"/>
      <path d="M196 183 l6 5 l-6 5" fill="none" stroke="${SKY}" stroke-width="2"/>
      <path d="M196 250 l6 5 l-6 5" fill="none" stroke="${SKY}" stroke-width="2"/>
      <circle cx="200" cy="34" r="4" fill="${NAVY}"/>
      <circle cx="106" cy="188" r="4" fill="${NAVY}"/>
      <circle cx="294" cy="188" r="4" fill="${NAVY}"/>
      <circle cx="70" cy="255" r="4" fill="${NAVY}"/>
      <circle cx="330" cy="255" r="4" fill="${NAVY}"/>
      <text x="186" y="26" font-family="Arial" font-size="18" font-weight="bold" fill="${NAVY}">A</text>
      <text x="84" y="182" font-family="Arial" font-size="18" font-weight="bold" fill="${NAVY}">L</text>
      <text x="300" y="182" font-family="Arial" font-size="18" font-weight="bold" fill="${NAVY}">H</text>
      <text x="50" y="273" font-family="Arial" font-size="18" font-weight="bold" fill="${NAVY}">N</text>
      <text x="336" y="273" font-family="Arial" font-size="18" font-weight="bold" fill="${NAVY}">M</text>
      <text x="110" y="106" font-family="Arial" font-size="13" fill="${NAVY}">720 m</text>
      <text x="256" y="106" font-family="Arial" font-size="13" fill="${NAVY}">720 m</text>
      <text x="176" y="180" font-family="Arial" font-size="13" fill="${NAVY}">270 m</text>
      <text x="56" y="230" font-family="Arial" font-size="13" fill="${NAVY}">1 km</text>
      <text x="312" y="230" font-family="Arial" font-size="13" fill="${NAVY}">1 km</text>
      <text x="172" y="242" font-family="Arial" font-size="13" fill="${SKY}">MN = ?</text>
    `,
  },

  // Sujet 7 — Ex 1 : illustration de contexte (œuf + poisson en chocolat).
  "crpe-chocolats": {
    vb: [340, 172],
    alt: "Un œuf et un poisson en chocolat, illustration de contexte pour l'atelier de chocolaterie.",
    inner: `
      <defs>
        <linearGradient id="crpeChoc1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#8a5a34"/><stop offset="1" stop-color="#5b3a22"/>
        </linearGradient>
        <linearGradient id="crpeChoc2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stop-color="#7a4f2e"/><stop offset="1" stop-color="#5b3a22"/>
        </linearGradient>
      </defs>
      <ellipse cx="95" cy="90" rx="42" ry="52" fill="url(#crpeChoc1)" stroke="#3f2a18" stroke-width="2"/>
      <path d="M95 42 Q108 90 95 142" fill="none" stroke="#a06a3d" stroke-width="5" opacity="0.45"/>
      <rect x="53" y="84" width="84" height="12" rx="3" fill="#3f2a18" opacity="0.32"/>
      <ellipse cx="245" cy="90" rx="54" ry="28" fill="url(#crpeChoc2)" stroke="#3f2a18" stroke-width="2"/>
      <polygon points="299,90 326,68 326,112" fill="url(#crpeChoc2)" stroke="#3f2a18" stroke-width="2"/>
      <circle cx="214" cy="82" r="4" fill="#2a1a0e"/>
      <path d="M226 104 Q238 110 250 104" fill="none" stroke="#3f2a18" stroke-width="2"/>
      <path d="M232 76 Q244 90 232 104 M252 76 Q264 90 252 104 M272 76 Q284 90 272 104" fill="none" stroke="#3f2a18" stroke-width="1.5" opacity="0.5"/>
      <text x="74" y="162" font-family="Arial" font-size="13" fill="${NAVY}">Œuf</text>
      <text x="218" y="162" font-family="Arial" font-size="13" fill="${NAVY}">Poisson</text>
    `,
  },

  // Sujet 7 — Ex 4 : triangle équilatéral (côté 6) dont on découpe trois
  // petits triangles équilatéraux (côté c) aux coins ; l'hexagone gris reste.
  // Chaque côté est partagé en c, 6 − 2c, c (ici c représenté par 1/4 du côté).
  "crpe-triangle-hexagone": {
    vb: [360, 300],
    alt: "Triangle équilatéral de côté 6 cm ; trois petits triangles équilatéraux de côté c sont découpés aux coins ; l'hexagone gris central reste. Chaque côté est partagé en c, 6 − 2c, c.",
    inner: `
      <polygon points="180,42 60,250 300,250" fill="none" stroke="${NAVY}" stroke-width="2.5"/>
      <polygon points="120,250 240,250 270,198 210,94 150,94 90,198" fill="#d8dfe9" stroke="${NAVY}" stroke-width="2"/>
      <polygon points="60,250 120,250 90,198" fill="#ffffff" stroke="${NAVY}" stroke-width="1.4" stroke-dasharray="4 3"/>
      <polygon points="300,250 240,250 270,198" fill="#ffffff" stroke="${NAVY}" stroke-width="1.4" stroke-dasharray="4 3"/>
      <polygon points="180,42 150,94 210,94" fill="#ffffff" stroke="${NAVY}" stroke-width="1.4" stroke-dasharray="4 3"/>
      <text x="172" y="36" font-family="Arial" font-size="18" font-weight="bold" fill="${NAVY}">A</text>
      <text x="44" y="266" font-family="Arial" font-size="18" font-weight="bold" fill="${NAVY}">B</text>
      <text x="306" y="266" font-family="Arial" font-size="18" font-weight="bold" fill="${NAVY}">C</text>
      <text x="80" y="270" font-family="Arial" font-size="13" fill="${SKY}">c</text>
      <text x="158" y="270" font-family="Arial" font-size="13" fill="${NAVY}">6 − 2c</text>
      <text x="256" y="270" font-family="Arial" font-size="13" fill="${SKY}">c</text>
      <text x="149" y="184" font-family="Arial" font-size="13" fill="#5a6478">hexagone</text>
    `,
  },

  // Sujet 8 — Ex 1 : pyramide SABC, base triangle rectangle isocèle en A
  // (AB = AC = 7,5 cm), hauteur [AS] = 15 cm perpendiculaire à la base ;
  // section S'MN parallèle à la base avec SS' = 6 cm.
  "crpe-pyramide-sabc": {
    vb: [340, 300],
    alt: "Pyramide SABC de sommet S ; base ABC rectangle et isocèle en A (AB = AC = 7,5 cm) ; hauteur AS = 15 cm ; section S'MN parallèle à la base (SS' = 6 cm).",
    inner: `
      <line x1="120" y1="235" x2="55" y2="190" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="120" y1="235" x2="300" y2="235" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="55" y1="190" x2="300" y2="235" stroke="${NAVY}" stroke-width="1.6" stroke-dasharray="5 4"/>
      <line x1="120" y1="55" x2="120" y2="235" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="120" y1="55" x2="55" y2="190" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="120" y1="55" x2="300" y2="235" stroke="${NAVY}" stroke-width="2.5"/>
      <polygon points="120,127 94,109 192,127" fill="${SKY}" fill-opacity="0.14" stroke="${SKY}" stroke-width="1.8" stroke-dasharray="5 3"/>
      <polygon points="120,235 134,235 134,221 120,221" fill="none" stroke="${NAVY}" stroke-width="1.4"/>
      <circle cx="120" cy="55" r="3.5" fill="${NAVY}"/>
      <circle cx="120" cy="235" r="3.5" fill="${NAVY}"/>
      <circle cx="55" cy="190" r="3.5" fill="${NAVY}"/>
      <circle cx="300" cy="235" r="3.5" fill="${NAVY}"/>
      <circle cx="120" cy="127" r="3" fill="${SKY}"/>
      <circle cx="94" cy="109" r="3" fill="${SKY}"/>
      <circle cx="192" cy="127" r="3" fill="${SKY}"/>
      <text x="112" y="48" font-family="Arial" font-size="17" font-weight="bold" fill="${NAVY}">S</text>
      <text x="106" y="252" font-family="Arial" font-size="17" font-weight="bold" fill="${NAVY}">A</text>
      <text x="34" y="188" font-family="Arial" font-size="17" font-weight="bold" fill="${NAVY}">B</text>
      <text x="304" y="240" font-family="Arial" font-size="17" font-weight="bold" fill="${NAVY}">C</text>
      <text x="98" y="133" font-family="Arial" font-size="13" font-weight="bold" fill="${SKY}">S'</text>
      <text x="75" y="106" font-family="Arial" font-size="13" font-weight="bold" fill="${SKY}">M</text>
      <text x="198" y="128" font-family="Arial" font-size="13" font-weight="bold" fill="${SKY}">N</text>
      <text x="126" y="200" font-family="Arial" font-size="13" fill="${NAVY}">15 cm</text>
      <text x="212" y="250" font-family="Arial" font-size="13" fill="${NAVY}">7,5 cm</text>
      <text x="36" y="222" font-family="Arial" font-size="13" fill="${NAVY}">7,5 cm</text>
      <text x="126" y="96" font-family="Arial" font-size="12" fill="${SKY}">SS' = 6 cm</text>
    `,
  },

  // Sujet 8 — Ex 2 : pyramide régulière à base carrée ABCD (côté 35,50 m),
  // arêtes latérales 33,14 m, sommet S, centre H, hauteur [SH].
  "crpe-pyramide-carree": {
    vb: [420, 300],
    alt: "Pyramide régulière de base carrée ABCD (côté 35,50 m) et de sommet S ; les arêtes latérales mesurent 33,14 m ; H est le centre du carré, pied de la hauteur SH.",
    inner: `
      <line x1="80" y1="250" x2="290" y2="250" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="290" y1="250" x2="350" y2="200" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="350" y1="200" x2="140" y2="200" stroke="${NAVY}" stroke-width="1.6" stroke-dasharray="5 4"/>
      <line x1="140" y1="200" x2="80" y2="250" stroke="${NAVY}" stroke-width="1.6" stroke-dasharray="5 4"/>
      <line x1="80" y1="250" x2="350" y2="200" stroke="${SKY}" stroke-width="1.2" stroke-dasharray="4 3"/>
      <line x1="290" y1="250" x2="140" y2="200" stroke="${SKY}" stroke-width="1.2" stroke-dasharray="4 3"/>
      <line x1="215" y1="60" x2="215" y2="225" stroke="${NAVY}" stroke-width="1.6" stroke-dasharray="5 3"/>
      <line x1="215" y1="60" x2="80" y2="250" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="215" y1="60" x2="290" y2="250" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="215" y1="60" x2="350" y2="200" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="215" y1="60" x2="140" y2="200" stroke="${NAVY}" stroke-width="1.6" stroke-dasharray="5 4"/>
      <polygon points="215,225 215,213 204,213 204,225" fill="none" stroke="${NAVY}" stroke-width="1.2"/>
      <circle cx="80" cy="250" r="3.5" fill="${NAVY}"/>
      <circle cx="290" cy="250" r="3.5" fill="${NAVY}"/>
      <circle cx="350" cy="200" r="3.5" fill="${NAVY}"/>
      <circle cx="140" cy="200" r="3.5" fill="${NAVY}"/>
      <circle cx="215" cy="60" r="3.5" fill="${NAVY}"/>
      <circle cx="215" cy="225" r="3" fill="${SKY}"/>
      <text x="64" y="266" font-family="Arial" font-size="17" font-weight="bold" fill="${NAVY}">A</text>
      <text x="292" y="266" font-family="Arial" font-size="17" font-weight="bold" fill="${NAVY}">B</text>
      <text x="356" y="196" font-family="Arial" font-size="17" font-weight="bold" fill="${NAVY}">C</text>
      <text x="120" y="194" font-family="Arial" font-size="17" font-weight="bold" fill="${NAVY}">D</text>
      <text x="208" y="52" font-family="Arial" font-size="17" font-weight="bold" fill="${NAVY}">S</text>
      <text x="222" y="240" font-family="Arial" font-size="13" font-weight="bold" fill="${SKY}">H</text>
      <text x="146" y="268" font-family="Arial" font-size="13" fill="${NAVY}">35,50 m</text>
      <text x="264" y="150" font-family="Arial" font-size="13" fill="${NAVY}">33,14 m</text>
      <text x="222" y="150" font-family="Arial" font-size="12" fill="${SKY}">SH</text>
    `,
  },

  // Sujet 8 — Ex 3 : pavé droit (aquarium) 1,2 m × 0,8 m × 0,5 m.
  "crpe-pave-aquarium": {
    vb: [420, 320],
    alt: "Pavé droit représentant un aquarium de dimensions 1,2 m (longueur) sur 0,8 m (profondeur) sur 0,5 m (hauteur).",
    inner: `
      <polygon points="70,180 310,180 310,280 70,280" fill="#eef4ff" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="70" y1="180" x2="130" y2="135" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="310" y1="180" x2="370" y2="135" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="310" y1="280" x2="370" y2="235" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="130" y1="135" x2="370" y2="135" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="370" y1="135" x2="370" y2="235" stroke="${NAVY}" stroke-width="2.5"/>
      <line x1="70" y1="280" x2="130" y2="235" stroke="${NAVY}" stroke-width="1.4" stroke-dasharray="5 4"/>
      <line x1="130" y1="135" x2="130" y2="235" stroke="${NAVY}" stroke-width="1.4" stroke-dasharray="5 4"/>
      <line x1="130" y1="235" x2="370" y2="235" stroke="${NAVY}" stroke-width="1.4" stroke-dasharray="5 4"/>
      <text x="168" y="300" font-family="Arial" font-size="13" fill="${NAVY}">1,2 m</text>
      <text x="38" y="236" font-family="Arial" font-size="13" fill="${NAVY}">0,5 m</text>
      <text x="336" y="162" font-family="Arial" font-size="13" fill="${NAVY}">0,8 m</text>
    `,
  },

  // Sujet 10 — Ex 4 : un carré de côté c (support du tableur).
  "crpe-carre-cote-c": {
    vb: [200, 190],
    alt: "Un carré de côté c, avec l'angle droit marqué à un sommet.",
    inner: `
      <rect x="40" y="30" width="120" height="120" fill="#eef4ff" stroke="${NAVY}" stroke-width="2.5"/>
      <rect x="40" y="132" width="18" height="18" fill="none" stroke="${NAVY}" stroke-width="1.4"/>
      <text x="94" y="172" font-family="Arial" font-size="15" fill="${SKY}">c</text>
      <text x="22" y="95" font-family="Arial" font-size="15" fill="${SKY}">c</text>
    `,
  },
};
