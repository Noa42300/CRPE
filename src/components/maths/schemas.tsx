/**
 * Schémas mathématiques en SVG natif
 * ----------------------------------
 * Tous les schémas sont dessinés directement en SVG (aucune image
 * externe). Chaque fiche référence un schéma par sa clé (champ `schema`).
 *
 * Palette : navy #16244d · sky #2478ea · emerald #059669
 *           amber #d97706 · rose #e11d48 · violet #7c3aed
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
    <figure className="my-2 flex flex-col items-center">
      <div className="w-full max-w-md">{children}</div>
      {caption && (
        <figcaption className="mt-2 text-center text-xs italic text-navy-400">{caption}</figcaption>
      )}
    </figure>
  );
}

// ---------- Ensembles de nombres (boîtes emboîtées) ----------
function Ensembles() {
  return (
    <Figure caption="ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ : chaque ensemble est inclus dans le suivant.">
      <svg viewBox="0 0 340 230" className="h-auto w-full" role="img" aria-label="Ensembles de nombres emboîtés">
        <rect x="6" y="6" width="328" height="218" rx="14" fill="#f5f3ff" stroke={VIOLET} strokeWidth="2" />
        <text x="18" y="26" fill={VIOLET} fontSize="15" fontWeight="700">ℝ réels</text>
        <text x="250" y="210" fill={VIOLET} fontSize="12">π · √2</text>

        <rect x="26" y="34" width="288" height="168" rx="12" fill="#eff8ff" stroke={SKY} strokeWidth="2" />
        <text x="38" y="52" fill={SKY} fontSize="14" fontWeight="700">ℚ rationnels</text>
        <text x="225" y="188" fill={SKY} fontSize="12">0,25 · ½</text>

        <rect x="46" y="60" width="248" height="120" rx="10" fill="#ecfdf5" stroke={EMERALD} strokeWidth="2" />
        <text x="58" y="78" fill={EMERALD} fontSize="14" fontWeight="700">ℤ entiers relatifs</text>
        <text x="210" y="166" fill={EMERALD} fontSize="12">−2 · −7</text>

        <rect x="66" y="86" width="150" height="72" rx="8" fill="#fffbeb" stroke={AMBER} strokeWidth="2" />
        <text x="78" y="104" fill={AMBER} fontSize="14" fontWeight="700">ℕ naturels</text>
        <text x="100" y="138" fill={NAVY} fontSize="13">0 · 3 · 42</text>
      </svg>
    </Figure>
  );
}

// ---------- Fraction 3/4 ----------
function Fraction() {
  const parts = [0, 1, 2, 3];
  return (
    <Figure caption="¾ : 3 parts coloriées sur 4 parts égales.">
      <svg viewBox="0 0 320 110" className="h-auto w-full" role="img" aria-label="Représentation de la fraction trois quarts">
        {parts.map((p) => (
          <rect
            key={p}
            x={10 + p * 75}
            y="20"
            width="75"
            height="60"
            fill={p < 3 ? SKY : "#eff8ff"}
            stroke={NAVY}
            strokeWidth="2"
          />
        ))}
        <text x="160" y="102" textAnchor="middle" fill={NAVY} fontSize="14" fontWeight="700">
          numérateur 3 · dénominateur 4
        </text>
      </svg>
    </Figure>
  );
}

// ---------- Triangle rectangle (Pythagore) ----------
function Pythagore() {
  return (
    <Figure caption="Le carré de l'hypoténuse (c) = somme des carrés des côtés a et b.">
      <svg viewBox="0 0 280 220" className="h-auto w-full" role="img" aria-label="Triangle rectangle de Pythagore">
        <polygon points="50,190 250,190 50,50" fill="#eff8ff" stroke={NAVY} strokeWidth="2.5" />
        {/* angle droit */}
        <rect x="50" y="172" width="18" height="18" fill="none" stroke={ROSE} strokeWidth="2" />
        {/* côtés */}
        <text x="30" y="125" fill={EMERALD} fontSize="16" fontWeight="700">a</text>
        <text x="145" y="210" fill={EMERALD} fontSize="16" fontWeight="700">b</text>
        <text x="158" y="112" fill={SKY} fontSize="16" fontWeight="700">c</text>
        <text x="150" y="150" fill={SKY} fontSize="12" fontWeight="600">hypoténuse</text>
      </svg>
    </Figure>
  );
}

// ---------- Inégalité triangulaire ----------
function InegaliteTriangulaire() {
  return (
    <Figure caption="Chaque côté est plus court que la somme des deux autres.">
      <svg viewBox="0 0 300 190" className="h-auto w-full" role="img" aria-label="Inégalité triangulaire">
        <polygon points="40,160 260,160 170,40" fill="#ecfdf5" stroke={NAVY} strokeWidth="2.5" />
        <text x="30" y="175" fill={NAVY} fontSize="14" fontWeight="700">A</text>
        <text x="262" y="175" fill={NAVY} fontSize="14" fontWeight="700">B</text>
        <text x="170" y="32" fill={NAVY} fontSize="14" fontWeight="700">C</text>
        <text x="140" y="178" fill={EMERALD} fontSize="13">AB</text>
        <text x="95" y="100" fill={EMERALD} fontSize="13">AC</text>
        <text x="222" y="100" fill={EMERALD} fontSize="13">BC</text>
      </svg>
    </Figure>
  );
}

// ---------- Triangles semblables ----------
function TrianglesSemblables() {
  return (
    <Figure caption="Même forme (mêmes angles), tailles différentes : côtés proportionnels.">
      <svg viewBox="0 0 320 180" className="h-auto w-full" role="img" aria-label="Triangles semblables">
        <polygon points="20,150 110,150 20,90" fill="#eff8ff" stroke={SKY} strokeWidth="2.5" />
        <text x="45" y="145" fill={NAVY} fontSize="12">3</text>
        <text x="6" y="125" fill={NAVY} fontSize="12">4</text>
        <polygon points="160,150 300,150 160,60" fill="#fff7ed" stroke={AMBER} strokeWidth="2.5" />
        <text x="215" y="145" fill={NAVY} fontSize="12">6</text>
        <text x="146" y="110" fill={NAVY} fontSize="12">8</text>
        <text x="120" y="95" fill={EMERALD} fontSize="20">→</text>
        <text x="112" y="80" fill={EMERALD} fontSize="12" fontWeight="700">×2</text>
      </svg>
    </Figure>
  );
}

// ---------- Théorème de Thalès ----------
function Thales() {
  return (
    <Figure caption="(MN) ∥ (BC) : AM/AB = AN/AC = MN/BC.">
      <svg viewBox="0 0 300 210" className="h-auto w-full" role="img" aria-label="Configuration de Thalès">
        <polygon points="150,20 40,190 260,190" fill="#eff8ff" stroke={NAVY} strokeWidth="2.5" />
        <line x1="95" y1="105" x2="205" y2="105" stroke={SKY} strokeWidth="2.5" />
        <text x="150" y="15" textAnchor="middle" fill={NAVY} fontSize="13" fontWeight="700">A</text>
        <text x="82" y="103" fill={SKY} fontSize="13" fontWeight="700">M</text>
        <text x="210" y="103" fill={SKY} fontSize="13" fontWeight="700">N</text>
        <text x="26" y="200" fill={NAVY} fontSize="13" fontWeight="700">B</text>
        <text x="264" y="200" fill={NAVY} fontSize="13" fontWeight="700">C</text>
        <text x="130" y="98" fill={SKY} fontSize="11">MN</text>
        <text x="140" y="185" fill={NAVY} fontSize="11">BC</text>
      </svg>
    </Figure>
  );
}

// ---------- Trigonométrie (SOH-CAH-TOA) ----------
function Trigonometrie() {
  return (
    <Figure caption="Par rapport à l'angle θ : opposé, adjacent et hypoténuse.">
      <svg viewBox="0 0 300 210" className="h-auto w-full" role="img" aria-label="Triangle rectangle et trigonométrie">
        <polygon points="40,180 260,180 260,50" fill="#eff8ff" stroke={NAVY} strokeWidth="2.5" />
        {/* angle droit en bas à droite */}
        <rect x="242" y="162" width="18" height="18" fill="none" stroke={ROSE} strokeWidth="2" />
        {/* angle theta en bas à gauche */}
        <path d="M40,180 A40,40 0 0,1 78,168" fill="none" stroke={VIOLET} strokeWidth="2" />
        <text x="82" y="172" fill={VIOLET} fontSize="15" fontWeight="700">θ</text>
        <text x="150" y="198" fill={EMERALD} fontSize="13" fontWeight="700">adjacent</text>
        <text x="266" y="120" fill={AMBER} fontSize="13" fontWeight="700">opposé</text>
        <text x="120" y="105" fill={SKY} fontSize="13" fontWeight="700">hypoténuse</text>
      </svg>
    </Figure>
  );
}

// ---------- Parallélogramme ----------
function Parallelogramme() {
  return (
    <Figure caption="Côtés opposés parallèles et égaux ; diagonales se coupant en leur milieu.">
      <svg viewBox="0 0 300 180" className="h-auto w-full" role="img" aria-label="Parallélogramme">
        <polygon points="60,40 250,40 190,150 0,150" fill="#f5f3ff" stroke={NAVY} strokeWidth="2.5"
          transform="translate(20,0)" />
        {/* diagonales */}
        <line x1="80" y1="40" x2="210" y2="150" stroke={VIOLET} strokeWidth="1.5" strokeDasharray="4 3" />
        <line x1="270" y1="40" x2="20" y2="150" stroke={VIOLET} strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="145" cy="95" r="4" fill={ROSE} />
        <text x="150" y="88" fill={ROSE} fontSize="11">milieu</text>
      </svg>
    </Figure>
  );
}

// ---------- Cercle (rayon / diamètre) ----------
function Cercle() {
  return (
    <Figure caption="Rayon r (centre → bord) et diamètre D = 2r.">
      <svg viewBox="0 0 240 200" className="h-auto w-full" role="img" aria-label="Cercle, rayon et diamètre">
        <circle cx="120" cy="100" r="80" fill="#eff8ff" stroke={NAVY} strokeWidth="2.5" />
        <line x1="40" y1="100" x2="200" y2="100" stroke={SKY} strokeWidth="2" />
        <line x1="120" y1="100" x2="176" y2="44" stroke={EMERALD} strokeWidth="2.5" />
        <circle cx="120" cy="100" r="3.5" fill={NAVY} />
        <text x="112" y="118" fill={NAVY} fontSize="13" fontWeight="700">O</text>
        <text x="140" y="66" fill={EMERALD} fontSize="14" fontWeight="700">r</text>
        <text x="95" y="94" fill={SKY} fontSize="14" fontWeight="700">D</text>
      </svg>
    </Figure>
  );
}

// ---------- Escaliers de conversion ----------
function Escalier({ units, factor, color }: { units: string[]; factor: string; color: string }) {
  const w = 44;
  return (
    <Figure caption={`Un déplacement d'une colonne = ${factor}.`}>
      <svg viewBox={`0 0 ${units.length * w + 20} 90`} className="h-auto w-full" role="img" aria-label="Tableau de conversion">
        {units.map((u, i) => (
          <g key={u}>
            <rect x={10 + i * w} y="28" width={w} height="34" fill="#ffffff" stroke={NAVY} strokeWidth="1.5" />
            <text x={10 + i * w + w / 2} y="50" textAnchor="middle" fill={NAVY} fontSize="12" fontWeight="700">
              {u}
            </text>
            {i < units.length - 1 && (
              <text x={10 + i * w + w} y="20" textAnchor="middle" fill={color} fontSize="11" fontWeight="700">
                {factor}
              </text>
            )}
          </g>
        ))}
      </svg>
    </Figure>
  );
}

// ---------- Registre des schémas ----------
export const SCHEMAS: Record<string, ReactElement> = {
  ensembles: <Ensembles />,
  fraction: <Fraction />,
  pythagore: <Pythagore />,
  "inegalite-triangulaire": <InegaliteTriangulaire />,
  "triangles-semblables": <TrianglesSemblables />,
  thales: <Thales />,
  trigonometrie: <Trigonometrie />,
  parallelogramme: <Parallelogramme />,
  cercle: <Cercle />,
  "escalier-longueur": <Escalier units={["km", "hm", "dam", "m", "dm", "cm", "mm"]} factor="×10" color={SKY} />,
  "escalier-aire": <Escalier units={["km²", "hm²", "dam²", "m²", "dm²", "cm²", "mm²"]} factor="×100" color={AMBER} />,
  "escalier-volume": <Escalier units={["km³", "hm³", "dam³", "m³", "dm³", "cm³", "mm³"]} factor="×1000" color={VIOLET} />,
};

/** Rend le schéma correspondant à la clé, ou rien si la clé est inconnue. */
export function Schema({ id }: { id?: string }) {
  if (!id || !SCHEMAS[id]) return null;
  return SCHEMAS[id];
}
