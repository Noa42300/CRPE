/**
 * Système de comportement & sanctions — « La fusée du comportement »
 * ------------------------------------------------------------------
 * Demandé par le tuteur : un système CLAIR, illustré, coloré, compréhensible
 * par les CE1-CE2, applicable dès maintenant, qui GARDE l'idée « je note le
 * prénom au tableau → je retire de la récré », mais qui s'applique à TOUT
 * (bavardage, travail non soigné, matériel abîmé, déplacements, respect…) et
 * dont les étapes sont explicites (plus de « je laisse passer 2-3 fois »).
 *
 * 4 documents :
 *   • FuseeComportement   — affiche élève (A4 portrait), l'échelle graduée.
 *   • EchelleSanctions    — document enseignant (référence : comportement →
 *                           ce que je fais → réparation).
 *   • FicheReflexion      — fiche élève à remplir pendant la privation de récré
 *                           (2 par A4).
 *   • MotFamille          — petits mots à la famille à découper (6 par A4).
 *
 * Chrome lisible, grosses couleurs par niveau (vert → rouge), emojis pour les
 * repères visuels (pas d'image à télécharger : impression fiable hors ligne).
 */
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const LUDIQUE = "'Baloo 2','Fredoka','Lexend',system-ui,sans-serif";

/* ============================ 1. AFFICHE FUSÉE ============================ */
/* GROSSE fusée dessinée qui remplit la page, pour des CE1-CE2 : nez = « tout va
 * bien », étages vert→rouge avec, écrit GROS à côté, ce qui se passe (minutes de
 * récré en moins). Tracé noir épais façon affiche de classe (pas « IA »). */

const MANU = "'Caveat','Comic Neue',cursive"; // écriture manuscrite d'affiche

type Band = { c: string; t: string; label: string[]; callout: string[] };

const NOSE = { c: "#22c55e", bord: "#15803d", callout: ["Tout va bien !", "Je décolle 🚀"] };
const BANDS: Band[] = [
  { c: "#bbf7d0", t: "#166534", label: ["1 rappel"], callout: ["Le maître", "te prévient"] },
  { c: "#fde047", t: "#854d0e", label: ["2 rappels"], callout: ["Dernier avertissement"] },
  { c: "#fdba74", t: "#7c2d12", label: ["Prénom", "au tableau"], callout: ["− 2 min de récré"] },
  { c: "#fca5a5", t: "#7f1d1d", label: ["Prénom ✗"], callout: ["− 5 min de récré"] },
  { c: "#f87171", t: "#450a0a", label: ["Prénom ✗✗"], callout: ["− 10 min de récré", "+ un mot aux parents"] },
];

/** Grande fusée + bulles d'explication alignées, tout en SVG (alignement parfait). */
function RocketBig() {
  const bandH = 112;
  const y0 = 206;
  const cx = 240;
  const bodyX = 150, bodyW = 180, bodyR = bodyX + bodyW; // 150..330
  const coX = 408, coW = 372; // bulles de droite
  const centerOf = (i: number) => y0 + i * bandH + bandH / 2;

  function Bulle({ cy, lines, fill }: { cy: number; lines: string[]; fill: string }) {
    const h = 92;
    return (
      <g>
        <line x1={bodyR} y1={cy} x2={coX} y2={cy} stroke="#111" strokeWidth="2.5" strokeDasharray="5 5" />
        <rect x={coX} y={cy - h / 2} width={coW} height={h} rx="14" fill={fill} stroke="#111" strokeWidth="3" />
        {lines.length === 1 ? (
          <text x={coX + coW / 2} y={cy + 12} textAnchor="middle" fontFamily={MANU} fontSize="34" fontWeight="700" fill="#111">{lines[0]}</text>
        ) : (
          <text x={coX + coW / 2} textAnchor="middle" fontFamily={MANU} fontWeight="700" fill="#111">
            <tspan x={coX + coW / 2} y={cy - 4} fontSize="33">{lines[0]}</tspan>
            <tspan x={coX + coW / 2} y={cy + 32} fontSize="33">{lines[1]}</tspan>
          </text>
        )}
      </g>
    );
  }

  return (
    <svg viewBox="0 0 800 820" style={{ width: "100%", height: "auto", display: "block" }}>
      {/* flammes */}
      <path d="M168,766 L312,766 L292,826 Q240,900 188,826 Z" fill="#f97316" stroke="#111" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M200,768 L280,768 L266,816 Q240,858 214,816 Z" fill="#fde047" />
      {/* ailerons */}
      <path d="M150,612 L84,778 L150,742 Z" fill="#60a5fa" stroke="#111" strokeWidth="4" strokeLinejoin="round" />
      <path d="M330,612 L396,778 L330,742 Z" fill="#60a5fa" stroke="#111" strokeWidth="4" strokeLinejoin="round" />
      {/* corps (étages) */}
      {BANDS.map((e, i) => {
        const cy = centerOf(i);
        return (
          <g key={i}>
            <rect x={bodyX} y={y0 + i * bandH} width={bodyW} height={bandH} fill={e.c} />
            {e.label.length === 1 ? (
              <text x={cx} y={cy + 12} textAnchor="middle" fontFamily={MANU} fontSize="34" fontWeight="700" fill={e.t}>{e.label[0]}</text>
            ) : (
              <text x={cx} textAnchor="middle" fontFamily={MANU} fontWeight="700" fill={e.t}>
                <tspan x={cx} y={cy - 6} fontSize="34">{e.label[0]}</tspan>
                <tspan x={cx} y={cy + 32} fontSize="34">{e.label[1]}</tspan>
              </text>
            )}
            {i > 0 && <line x1={bodyX} y1={y0 + i * bandH} x2={bodyR} y2={y0 + i * bandH} stroke="#111" strokeWidth="2" strokeDasharray="5 5" />}
            <Bulle cy={cy} lines={e.callout} fill={e.c} />
          </g>
        );
      })}
      {/* contour du corps */}
      <rect x={bodyX} y={y0} width={bodyW} height={bandH * 5} fill="none" stroke="#111" strokeWidth="4.5" />
      {/* nez vert = tout va bien */}
      <path d={`M${bodyX},${y0} Q${bodyX},44 ${cx},26 Q${bodyR},44 ${bodyR},${y0} Z`} fill={NOSE.c} stroke="#111" strokeWidth="4.5" strokeLinejoin="round" />
      {/* hublot + sourire */}
      <circle cx={cx} cy="118" r="46" fill="#eff6ff" stroke="#111" strokeWidth="4.5" />
      <circle cx={cx - 16} cy="108" r="6.5" fill="#111" />
      <circle cx={cx + 16} cy="108" r="6.5" fill="#111" />
      <path d={`M${cx - 20},128 Q${cx},150 ${cx + 20},128`} fill="none" stroke="#111" strokeWidth="5" strokeLinecap="round" />
      {/* bulle du nez */}
      <Bulle cy={120} lines={NOSE.callout} fill="#dcfce7" />
    </svg>
  );
}

export function FuseeComportement() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: MANU, display: "flex", flexDirection: "column" }}>
      {/* Titre */}
      <div style={{ textAlign: "center", marginBottom: "1mm" }}>
        <div style={{ fontSize: "54px", fontWeight: 700, color: "#dc2626", lineHeight: 1, fontFamily: MANU }}>La fusée du comportement 🚀</div>
        <div style={{ fontSize: "20px", fontWeight: 700, color: "#334155", fontFamily: MANU, marginTop: "0.5mm" }}>
          Je reste tout en haut, près du nez de la fusée&nbsp;!
        </div>
      </div>

      {/* Grande fusée */}
      <div style={{ flex: 1, minHeight: 0, display: "flex", alignItems: "center" }}><RocketBig /></div>

      {/* Ça compte quand */}
      <div style={{ border: "4px solid #dc2626", borderRadius: "4mm", padding: "3mm 4mm", marginTop: "2mm" }}>
        <div style={{ fontSize: "30px", fontWeight: 700, color: "#dc2626", fontFamily: MANU, textAlign: "center", marginBottom: "1mm" }}>⭐ Ça compte aussi quand…</div>
        <div style={{ fontSize: "24px", fontWeight: 700, color: "#111", fontFamily: MANU, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1mm 8mm", lineHeight: 1.2 }}>
          <span>📝 je fais mal mon travail</span>
          <span>✍️ mon travail n'est pas propre</span>
          <span>🧰 j'abîme le matériel</span>
          <span>🗣️ je gêne les autres</span>
        </div>
      </div>
    </div>
  );
}

/* ====================== 2. DOCUMENT ENSEIGNANT (RÉFÉRENCE) ====================== */

type Ligne = { comportement: string; sanction: string[]; reparation: string[] };

const LIGNES: Ligne[] = [
  {
    comportement: "Bavardages, perturbation du travail en classe, travail non soigné, déplacements",
    sanction: ["1ᵉʳ rappel (mot/regard)", "2ᵉ rappel = dernier avertissement", "Prénom au tableau → −5 min de récré + fiche de réflexion", "+ 1 croix → −10 min + mot à la famille", "+ 2 croix → récré entière + mot à signer"],
    reparation: ["Fiche de réflexion pendant la privation de récré", "Refaire proprement le travail"],
  },
  {
    comportement: "Dégradation du matériel commun / des autres, objets interdits",
    sanction: ["Objet confisqué + mot à la famille", "Si répété : mission de réparation pour la classe", "−5 min de récré"],
    reparation: ["Remplacement si petit matériel", "Je rends service à la classe", "Réflexion sur la réparation avec la famille"],
  },
  {
    comportement: "Vol",
    sanction: ["Mot + appel à la famille", "−5 min de récré"],
    reparation: ["Rendre / remplacer", "Service à la classe"],
  },
  {
    comportement: "Insolence, manque de respect (lever les yeux au ciel, souffler, protester, refuser de coopérer…)",
    sanction: ["Isolement immédiat + rappel à la règle", "Information écrite aux parents", "Si plus de 3 mots sur l'année : exclusion de la classe (½ journée)"],
    reparation: ["Fiche de réflexion", "Être attentif à l'autre"],
  },
  {
    comportement: "Violences verbales envers un enfant (insultes, humiliations, moqueries)",
    sanction: ["Isolement immédiat", "Information écrite aux parents", "−5 min sur la récré suivante", "Si plus de 3 mots : exclusion de la classe (½ journée)"],
    reparation: ["Fiche de réflexion", "Mot d'excuses", "Être attentif à l'autre"],
  },
  {
    comportement: "Violences physiques envers un enfant",
    sanction: ["Rappel à la règle + information écrite aux parents", "−5 min et/ou exclusion", "Si plus de 3 mots : exclusion de la classe (½ journée)"],
    reparation: ["Fiche de réflexion", "Mot d'excuses"],
  },
  {
    comportement: "Harcèlement",
    sanction: ["Déclenchement du protocole pHARe"],
    reparation: ["Suivi dans le cadre du protocole"],
  },
  {
    comportement: "Violences verbales et/ou physiques envers un adulte",
    sanction: ["Information écrite aux parents + rappel à la règle", "−5 min et/ou exclusion de la classe (½ journée)", "Fait établissement signalé à l'IEN"],
    reparation: ["Réparation discutée en conseil de classe"],
  },
];

function Puces({ items, color }: { items: string[]; color: string }) {
  return (
    <div style={{ fontSize: "10px", fontFamily: CONSIGNE_FONT, lineHeight: 1.3 }}>
      {items.map((t, i) => <div key={i} style={{ display: "flex", gap: "1.5mm" }}><span style={{ color, fontWeight: 900 }}>›</span><span>{t}</span></div>)}
    </div>
  );
}

export function EchelleSanctions() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: LUDIQUE }}>
      <div style={{ textAlign: "center", marginBottom: "2mm" }}>
        <div style={{ fontSize: "24px", fontWeight: 900, color: "#1d4ed8" }}>L'échelle des sanctions — document enseignant</div>
        <div style={{ fontSize: "10.5px", fontWeight: 600, color: "#475569", fontFamily: CONSIGNE_FONT, marginTop: "0.5mm" }}>
          Règle d'or : 2 rappels, puis prénom au tableau (−5 min de récré). Même progression pour tout. Les faits graves sautent les rappels.
        </div>
      </div>

      <div style={{ border: "2px solid #111", borderRadius: "2mm", overflow: "hidden" }}>
        {/* En-têtes */}
        <div style={{ display: "flex", background: "#1d4ed8", color: "#fff", fontWeight: 800, fontSize: "11px", fontFamily: CONSIGNE_FONT }}>
          <div style={{ flex: "0 0 34%", padding: "1.5mm 2mm", borderRight: "1px solid #fff" }}>Comportement</div>
          <div style={{ flex: "0 0 40%", padding: "1.5mm 2mm", borderRight: "1px solid #fff" }}>Ce que je fais (gradué)</div>
          <div style={{ flex: 1, padding: "1.5mm 2mm" }}>Réparation</div>
        </div>
        {LIGNES.map((l, i) => (
          <div key={i} style={{ display: "flex", borderTop: "1px solid #cbd5e1", background: i % 2 ? "#f8fafc" : "#fff" }}>
            <div style={{ flex: "0 0 34%", padding: "2mm", borderRight: "1px solid #e2e8f0", fontSize: "10.5px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>{l.comportement}</div>
            <div style={{ flex: "0 0 40%", padding: "2mm", borderRight: "1px solid #e2e8f0" }}><Puces items={l.sanction} color="#ea580c" /></div>
            <div style={{ flex: 1, padding: "2mm" }}><Puces items={l.reparation} color="#16a34a" /></div>
          </div>
        ))}
      </div>

      <div style={{ fontSize: "9.5px", fontFamily: CONSIGNE_FONT, color: "#64748b", marginTop: "2mm", fontStyle: "italic" }}>
        En cas de violence grave et/ou répétée, l'équipe enseignante, en accord avec l'IEN et le règlement départemental, se réserve le droit d'exclure temporairement l'élève de l'école.
      </div>
    </div>
  );
}

/* ====================== 3. FICHE DE RÉFLEXION (2 par A4) ====================== */

function CaseReflexion() {
  const Check = ({ children }: { children: React.ReactNode }) => (
    <div style={{ display: "flex", alignItems: "center", gap: "2mm", fontSize: "12px", fontWeight: 600, fontFamily: CONSIGNE_FONT, marginBottom: "0.8mm" }}>
      <span style={{ width: "4mm", height: "4mm", border: "1.6px solid #334155", borderRadius: "1mm", flexShrink: 0 }} /> {children}
    </div>
  );
  return (
    <div style={{ flex: 1, border: "2.5px solid #1d4ed8", borderRadius: "3mm", padding: "3mm 4mm", margin: "0 0 4mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
      <div style={{ fontSize: "19px", fontWeight: 900, color: "#1d4ed8", fontFamily: LUDIQUE }}>🧊 Ma fiche de réflexion</div>
      <div style={{ display: "flex", gap: "6mm", fontSize: "11px", fontWeight: 700, fontFamily: CONSIGNE_FONT, margin: "1mm 0 2mm" }}>
        <span>Prénom : ....................</span><span>Date : ............</span>
      </div>
      <div style={{ fontSize: "12.5px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginBottom: "1mm" }}>Qu'est-ce qui s'est passé ? (je coche)</div>
      <Check>J'ai bavardé / gêné le travail</Check>
      <Check>Je n'ai pas respecté une règle</Check>
      <Check>Mon travail n'était pas soigné</Check>
      <Check>J'ai abîmé du matériel</Check>
      <Check>Je n'ai pas respecté un camarade ou un adulte</Check>
      <div style={{ fontSize: "12.5px", fontWeight: 800, fontFamily: CONSIGNE_FONT, margin: "1.5mm 0 1mm" }}>La prochaine fois, je vais…</div>
      <div style={{ borderBottom: "1.5px dotted #64748b", height: "6mm" }} />
      <div style={{ borderBottom: "1.5px dotted #64748b", height: "6mm" }} />
    </div>
  );
}

export function FicheReflexion() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", display: "flex", flexDirection: "column", fontFamily: LUDIQUE }}>
      <CaseReflexion />
      <CaseReflexion />
    </div>
  );
}

/* ====================== 4. MOT À LA FAMILLE (6 par A4) ====================== */

function CaseMot() {
  return (
    <div style={{ flex: 1, border: "1.5px solid #334155", borderRadius: "2mm", padding: "2.5mm 3mm", margin: "1mm", boxSizing: "border-box", display: "flex", flexDirection: "column", fontFamily: CONSIGNE_FONT }}>
      <div style={{ textAlign: "right", fontSize: "10px", fontWeight: 700 }}>Date : ...../...../..........</div>
      <div style={{ fontSize: "11px", fontWeight: 700, marginTop: "0.5mm" }}>Madame, Monsieur,</div>
      <div style={{ fontSize: "11px", fontWeight: 600, marginTop: "0.8mm" }}>Le comportement de votre enfant à l'école n'est pas adapté :</div>
      <div style={{ borderBottom: "1px solid #94a3b8", height: "4.5mm" }} />
      <div style={{ borderBottom: "1px solid #94a3b8", height: "4.5mm" }} />
      <div style={{ borderBottom: "1px solid #94a3b8", height: "4.5mm" }} />
      <div style={{ fontSize: "10.5px", fontWeight: 600, marginTop: "1mm" }}>Merci d'en discuter avec votre enfant.</div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: "0.8mm" }}>
        <span style={{ fontSize: "10.5px", fontWeight: 600 }}>Cordialement,</span>
        <span style={{ fontSize: "10px", fontWeight: 700 }}>Signature :</span>
      </div>
    </div>
  );
}

export function MotFamille() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", display: "flex", flexDirection: "column", fontFamily: CONSIGNE_FONT }}>
      {[0, 1, 2].map((r) => (
        <div key={r} style={{ flex: 1, display: "flex" }}>
          <CaseMot />
          <CaseMot />
        </div>
      ))}
    </div>
  );
}
