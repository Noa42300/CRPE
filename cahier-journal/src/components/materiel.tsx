/**
 * « Matériel » — boîte à outils individuelle CE1-CE2 (à imprimer & plastifier).
 * Chaque aide = une fiche A4, très visuelle, peu de texte, un exemple, pensée
 * pour qu'un enfant se débrouille seul avant d'appeler le PE. Code couleur fixe
 * par domaine. Dessins originaux (SVG maison), aucune image externe.
 */
import type { ReactNode } from "react";

export const DOMAINES: Record<string, { label: string; color: string; emoji: string }> = {
  numeration: { label: "Nombres / numération", color: "#2563eb", emoji: "🔵" },
  calcul: { label: "Calcul", color: "#159a63", emoji: "🟢" },
  mesures: { label: "Grandeurs / mesures", color: "#d97706", emoji: "🟠" },
  geometrie: { label: "Géométrie", color: "#7c3aed", emoji: "🟣" },
  grammaire: { label: "Français / grammaire", color: "#dc2626", emoji: "🔴" },
  ortho: { label: "Orthographe / conjugaison", color: "#ca8a04", emoji: "🟡" },
  lecture: { label: "Lecture / vocabulaire", color: "#db2777", emoji: "🩷" },
  methodo: { label: "Méthodo / autonomie", color: "#334155", emoji: "⚫" },
};

function AideCard({ color, titre, sous, children }: { color: string; titre: string; sous?: string; children: ReactNode }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "8mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: `6px solid ${color}`, borderRadius: "7mm", padding: "9mm 9mm 11mm", minHeight: "285mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        {/* Gros titre manuscrit, coloré, sur toute la largeur, sans bandeau « appli » */}
        <h1 style={{ fontSize: "56px", lineHeight: 1.02, textAlign: "center", color, fontFamily: "'Caveat','Comic Neue',cursive", fontWeight: 700, margin: 0 }}>{titre}</h1>
        {sous && <div style={{ textAlign: "center", fontSize: "24px", color: "#555", fontFamily: "'Caveat','Comic Neue',cursive", marginTop: "1mm" }}>{sous}</div>}
        {/* Un filet coloré épais sous le titre (repère franc, pas « IA ») */}
        <div style={{ height: "3px", background: color, borderRadius: "2px", margin: "4mm 0 0" }} />
        {/* Le corps s'étale sur toute la hauteur de la page */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "5mm", paddingTop: "5mm" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

const cursive = "'Caveat','Comic Neue',cursive";
const C = "#2563eb", D = "#d97706", U = "#16a34a"; // centaines / dizaines / unités (couleurs fixes)

/* ============================ NUMÉRATION ============================ */

function CDU() {
  const cell = (bg: string, label: string, ex: string) => (
    <div style={{ flex: 1, textAlign: "center" }}>
      <div style={{ background: bg, color: "#fff", fontWeight: 800, fontSize: "20px", padding: "2mm", borderRadius: "2mm 2mm 0 0" }}>{label}</div>
      <div style={{ border: `2px solid ${bg}`, borderTop: "none", borderRadius: "0 0 2mm 2mm", height: "34mm", display: "grid", placeItems: "center", fontSize: "56px", fontWeight: 800, fontFamily: cursive }}>{ex}</div>
    </div>
  );
  return (
    <AideCard color={DOMAINES.numeration.color} titre="Le tableau des nombres" sous="centaines · dizaines · unités">
      <div style={{ display: "flex", gap: "3mm", marginBottom: "6mm" }}>
        {cell("#7c3aed", "m", "2")}
        {cell(C, "c", "3")}
        {cell(D, "d", "4")}
        {cell(U, "u", "7")}
      </div>
      <p style={{ textAlign: "center", fontSize: "24px", fontFamily: cursive, margin: "0 0 5mm" }}>
        je lis&nbsp;: <b>2 347</b>
      </p>
      <div style={{ background: "#f6f8f4", border: "1.5px solid #dfe6d8", borderRadius: "3mm", padding: "4mm", fontSize: "20px", fontFamily: cursive, textAlign: "center" }}>
        347 = <span style={{ color: C }}>3 centaines</span> + <span style={{ color: D }}>4 dizaines</span> + <span style={{ color: U }}>7 unités</span><br />
        347 = <span style={{ color: C }}>300</span> + <span style={{ color: D }}>40</span> + <span style={{ color: U }}>7</span>
      </div>
      <p style={{ marginTop: "6mm", textAlign: "center", fontSize: "16px", color: "#555" }}>
        1 dizaine = 10 unités · 1 centaine = 10 dizaines · 1 millier = 10 centaines
      </p>
    </AideCard>
  );
}

function Comparer() {
  const Mouth = ({ s }: { s: "<" | ">" }) => (
    <svg width="80" height="80" viewBox="0 0 100 100" aria-hidden="true">
      <path d={s === ">" ? "M28 22 L74 50 L28 78" : "M72 22 L26 50 L72 78"} fill="none" stroke="#2563eb" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={s === ">" ? 34 : 66} cy="16" r="4" fill="#111" /><circle cx={s === ">" ? 48 : 52} cy="16" r="4" fill="#111" />
    </svg>
  );
  return (
    <AideCard color={DOMAINES.numeration.color} titre="Comparer 2 nombres" sous="< plus petit · > plus grand · = égal">
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "5mm", margin: "2mm 0 6mm" }}>
        <span style={{ fontSize: "48px", fontWeight: 800, fontFamily: cursive }}>3</span>
        <Mouth s="<" />
        <span style={{ fontSize: "48px", fontWeight: 800, fontFamily: cursive }}>8</span>
      </div>
      <p style={{ textAlign: "center", fontSize: "22px", fontFamily: cursive, margin: "0 0 6mm" }}>La bouche mange le plus grand&nbsp;!</p>
      <div style={{ border: "2px solid #2563eb", borderRadius: "3mm", padding: "4mm", fontSize: "18px", lineHeight: 1.7 }}>
        <b>Ma méthode :</b>
        <div>1. Je compare les <span style={{ color: C }}>centaines</span>.</div>
        <div>2. Si c'est pareil, les <span style={{ color: D }}>dizaines</span>.</div>
        <div>3. Si c'est pareil, les <span style={{ color: U }}>unités</span>.</div>
      </div>
      <p style={{ marginTop: "6mm", textAlign: "center", fontSize: "22px", fontFamily: cursive }}>Exemple&nbsp;: <b>246 &lt; 254</b></p>
    </AideCard>
  );
}

/* ============================ CALCUL ============================ */

function CalculMental() {
  const item = (t: string) => (
    <div style={{ border: "2px solid #159a63", borderRadius: "2mm", padding: "2mm", textAlign: "center", fontSize: "16px", fontFamily: cursive }}>{t}</div>
  );
  return (
    <AideCard color={DOMAINES.calcul.color} titre="Le calcul mental" sous="mes petits trucs">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "3mm" }}>
        {[
          "+1 · −1", "+10 · −10", "+100 · −100",
          "doubles : 6+6=12", "moitiés : moitié de 8 = 4", "compléments à 10 : 7+3",
          "compléter à 20", "compléter à 100", "dizaines : 30+40=70",
          "ajouter 9 = +10 −1", "ajouter 11 = +10 +1", "retirer 9 = −10 +1",
        ].map(item)}
      </div>
      <p style={{ marginTop: "7mm", textAlign: "center", fontSize: "18px", color: "#444" }}>
        Astuce&nbsp;: pour <b>+9</b>, j'ajoute <b>10</b> puis j'enlève <b>1</b>.
      </p>
    </AideCard>
  );
}

function Pythagore() {
  const n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <AideCard color={DOMAINES.calcul.color} titre="Les tables de multiplication" sous="table de Pythagore">
      <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: cursive }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #111", background: "#159a63", color: "#fff", width: "9mm", height: "9mm", fontSize: "18px" }}>×</th>
            {n.map((c) => <th key={c} style={{ border: "1px solid #111", background: "#dcfce7", fontSize: "18px", fontWeight: 800 }}>{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {n.map((r) => (
            <tr key={r}>
              <th style={{ border: "1px solid #111", background: "#dcfce7", fontSize: "18px", fontWeight: 800 }}>{r}</th>
              {n.map((c) => (
                <td key={c} style={{ border: "1px solid #94a3b8", textAlign: "center", fontSize: "16px", height: "9mm", background: r === c ? "#bbf7d0" : "#fff" }}>{r * c}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: "6mm", textAlign: "center", fontSize: "18px", fontFamily: cursive }}>
        3 × 4 = 4 + 4 + 4 = <b>12</b> &nbsp;·&nbsp; ×2 = double &nbsp;·&nbsp; ×10 = je change de rang
      </p>
    </AideCard>
  );
}

function PoserAddition() {
  return (
    <AideCard color={DOMAINES.calcul.color} titre="Poser une addition" sous="j'aligne u sous u">
      <div style={{ display: "flex", justifyContent: "center", gap: "10mm", alignItems: "center" }}>
        <div style={{ fontFamily: cursive, fontSize: "40px", lineHeight: 1.15, textAlign: "right" }}>
          <div style={{ color: D, fontSize: "20px", marginBottom: "1mm" }}>¹</div>
          <div><span style={{ color: C }}>2</span><span style={{ color: D }}>4</span><span style={{ color: U }}>7</span></div>
          <div style={{ borderBottom: "3px solid #111" }}>+&nbsp;<span style={{ color: D }}>3</span><span style={{ color: U }}>5</span></div>
          <div><span style={{ color: C }}>2</span><span style={{ color: D }}>8</span><span style={{ color: U }}>2</span></div>
        </div>
        <div style={{ fontSize: "18px", lineHeight: 1.9 }}>
          1. J'aligne&nbsp;: <span style={{ color: U }}>u</span> sous <span style={{ color: U }}>u</span>.<br />
          2. Je calcule les <span style={{ color: U }}>unités</span> → 7+5=12.<br />
          3. J'écris 2, je <b>retiens 1</b> dizaine.<br />
          4. Je calcule les <span style={{ color: D }}>dizaines</span>, puis les <span style={{ color: C }}>centaines</span>.
        </div>
      </div>
    </AideCard>
  );
}

function PoserSoustraction() {
  return (
    <AideCard color={DOMAINES.calcul.color} titre="Poser une soustraction" sous="je calcule u, puis d, puis c">
      <div style={{ display: "flex", justifyContent: "center", gap: "10mm", alignItems: "center" }}>
        <div style={{ fontFamily: cursive, fontSize: "40px", lineHeight: 1.15, textAlign: "right" }}>
          <div><span style={{ color: C }}>5</span><span style={{ color: D }}>2</span><span style={{ color: U }}>3</span></div>
          <div style={{ borderBottom: "3px solid #111" }}>−&nbsp;<span style={{ color: D }}>1</span><span style={{ color: U }}>8</span><span style={{ color: D, fontSize: "18px" }}>&nbsp;⁺¹</span></div>
          <div><span style={{ color: C }}>3</span><span style={{ color: D }}>0</span><span style={{ color: U }}>5</span></div>
        </div>
        <div style={{ fontSize: "17px", lineHeight: 1.8 }}>
          1. Les <span style={{ color: U }}>unités</span> : 3 − 8 impossible.<br />
          2. J'<b>échange</b> : 13 − 8 = 5.<br />
          3. Je rends <b>+1</b> dizaine en bas.<br />
          4. Puis les <span style={{ color: D }}>dizaines</span> et <span style={{ color: C }}>centaines</span>.
        </div>
      </div>
      <p style={{ marginTop: "8mm", textAlign: "center", fontSize: "17px", color: "#444" }}>1 dizaine = 10 unités &nbsp;·&nbsp; 1 centaine = 10 dizaines</p>
    </AideCard>
  );
}

/* ============================ MESURES ============================ */

function LireLHeure() {
  const cx = 150, cy = 150, r = 120;
  return (
    <AideCard color={DOMAINES.mesures.color} titre="Lire l'heure" sous="la grande aiguille = les minutes">
      <div style={{ display: "flex", justifyContent: "center" }}>
        <svg width="300" height="300" viewBox="0 0 300 300" aria-hidden="true">
          <circle cx={cx} cy={cy} r={r} fill="#fff" stroke="#111" strokeWidth="4" />
          {Array.from({ length: 12 }).map((_, i) => {
            const a = ((i + 1) / 12) * 2 * Math.PI - Math.PI / 2;
            const x = cx + Math.cos(a) * (r - 22), y = cy + Math.sin(a) * (r - 22);
            const xm = cx + Math.cos(a) * (r + 16), ym = cy + Math.sin(a) * (r + 16);
            return (
              <g key={i}>
                <text x={x} y={y + 8} textAnchor="middle" fontSize="24" fontWeight="800" fill="#d97706" fontFamily={cursive}>{i + 1}</text>
                <text x={xm} y={ym + 5} textAnchor="middle" fontSize="13" fill="#2563eb">{((i + 1) * 5) % 60}</text>
              </g>
            );
          })}
          {/* aiguilles : 3 h 10 */}
          <line x1={cx} y1={cy} x2={cx + 45} y2={cy} stroke="#111" strokeWidth="7" strokeLinecap="round" />
          <line x1={cx} y1={cy} x2={cx + Math.cos(-Math.PI / 2 + Math.PI / 3) * 90} y2={cy + Math.sin(-Math.PI / 2 + Math.PI / 3) * 90} stroke="#e11d48" strokeWidth="5" strokeLinecap="round" />
          <circle cx={cx} cy={cy} r="6" fill="#111" />
        </svg>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "4mm", fontSize: "17px", fontFamily: cursive }}>
        <span><b style={{ color: "#111" }}>petite aiguille</b> = les heures</span>
        <span><b style={{ color: "#e11d48" }}>grande aiguille</b> = les minutes</span>
      </div>
      <p style={{ marginTop: "5mm", textAlign: "center", fontSize: "18px" }}>½ heure = 30 min · ¼ d'heure = 15 min · 1 h = 60 min</p>
    </AideCard>
  );
}

/* ============================ GRAMMAIRE ============================ */

function ClassesDeMots() {
  const row = (nom: string, ex: string, astuce: string) => (
    <tr>
      <td style={{ border: "1px solid #dc2626", padding: "2mm 3mm", fontWeight: 800, fontFamily: cursive, fontSize: "20px", color: "#dc2626", whiteSpace: "nowrap" }}>{nom}</td>
      <td style={{ border: "1px solid #dc2626", padding: "2mm 3mm", fontSize: "16px", fontFamily: cursive }}>{ex}</td>
      <td style={{ border: "1px solid #dc2626", padding: "2mm 3mm", fontSize: "14px", color: "#555" }}>{astuce}</td>
    </tr>
  );
  return (
    <AideCard color={DOMAINES.grammaire.color} titre="Les classes de mots" sous="la nature d'un mot">
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <tbody>
          {row("le nom", "chat, école, Léa", "je peux mettre un déterminant devant")}
          {row("le déterminant", "le, la, les, un, mon, ce", "petit mot devant le nom")}
          {row("l'adjectif", "grand, rouge, joli", "il décrit le nom")}
          {row("le verbe", "manger, courir, être", "l'action ; il change avec le temps")}
          {row("le pronom", "je, tu, il, elle, nous", "il remplace un nom")}
          {row("l'adverbe", "vite, bien, hier", "il ne change jamais")}
        </tbody>
      </table>
      <p style={{ marginTop: "6mm", textAlign: "center", fontSize: "18px", fontFamily: cursive }}>
        Exemple&nbsp;: <b>les</b> (dét.) <b>petites</b> (adj.) <b>maisons</b> (nom)
      </p>
    </AideCard>
  );
}

/* ============================ ORTHOGRAPHE / CONJUGAISON ============================ */

function AccordsGN() {
  return (
    <AideCard color={DOMAINES.ortho.color} titre="Les accords" sous="dans le groupe du nom">
      <p style={{ textAlign: "center", fontSize: "20px", fontFamily: cursive, margin: "0 0 5mm" }}>
        déterminant → nom → adjectif <b>vont ensemble</b>
      </p>
      <div style={{ border: "2px solid #ca8a04", borderRadius: "3mm", padding: "4mm", textAlign: "center", fontSize: "24px", fontFamily: cursive, marginBottom: "5mm" }}>
        <span style={{ color: "#2563eb" }}>les</span> <span style={{ color: "#dc2626" }}>petites</span> <span style={{ color: "#111" }}>maisons</span><br />
        <span style={{ fontSize: "16px", color: "#555" }}>pluriel + féminin → tout au pluriel, tout au féminin</span>
      </div>
      <div style={{ fontSize: "18px", lineHeight: 1.8 }}>
        Je vérifie&nbsp;:<br />
        👧👦 <b>le genre</b> : masculin (un) ou féminin (une) ?<br />
        1️⃣🔟 <b>le nombre</b> : singulier (un) ou pluriel (des) ?
      </div>
      <p style={{ marginTop: "5mm", textAlign: "center", fontSize: "16px", color: "#444" }}>Pluriel → souvent <b>-s</b> (ou -x).</p>
    </AideCard>
  );
}

function Homophones() {
  const row = (paire: string, test: string) => (
    <div style={{ border: "2px solid #ca8a04", borderRadius: "2mm", padding: "2.5mm 3mm", marginBottom: "2.5mm" }}>
      <span style={{ fontSize: "22px", fontWeight: 800, fontFamily: cursive, color: "#a16207" }}>{paire}</span>
      <span style={{ fontSize: "16px", marginLeft: "3mm" }}>{test}</span>
    </div>
  );
  return (
    <AideCard color={DOMAINES.ortho.color} titre="Les homophones" sous="le test qui sauve">
      {row("a / à", "a = « avait » ? → a (verbe). Sinon → à.")}
      {row("et / est", "est = « était » ? → est. Sinon → et (= et puis).")}
      {row("son / sont", "sont = « étaient » ? → sont. Sinon → son.")}
      {row("on / ont", "ont = « avaient » ? → ont. Sinon → on (= il).")}
      {row("ou / où", "ou = « ou bien » ? → ou. Sinon → où (le lieu).")}
      {row("ce / se", "se est devant un verbe (il se lave). Sinon → ce.")}
    </AideCard>
  );
}

function Terminaisons() {
  const bloc = (titre: string, term: string[], color: string) => (
    <div style={{ flex: 1, border: `2px solid ${color}`, borderRadius: "3mm", padding: "3mm" }}>
      <div style={{ fontWeight: 800, fontSize: "18px", color, textAlign: "center", fontFamily: cursive }}>{titre}</div>
      <div style={{ fontSize: "17px", fontFamily: cursive, lineHeight: 1.55, textAlign: "center" }}>
        {["je", "tu", "il/elle", "nous", "vous", "ils/elles"].map((p, i) => (
          <div key={p}>{p} <b>{term[i]}</b></div>
        ))}
      </div>
    </div>
  );
  return (
    <AideCard color={DOMAINES.ortho.color} titre="Les terminaisons" sous="verbes en -er (chanter)">
      <div style={{ display: "flex", gap: "3mm" }}>
        {bloc("présent", ["-e", "-es", "-e", "-ons", "-ez", "-ent"], "#16a34a")}
        {bloc("futur", ["-erai", "-eras", "-era", "-erons", "-erez", "-eront"], "#2563eb")}
        {bloc("imparfait", ["-ais", "-ais", "-ait", "-ions", "-iez", "-aient"], "#dc2626")}
      </div>
      <p style={{ marginTop: "6mm", textAlign: "center", fontSize: "17px", fontFamily: cursive }}>
        Passé composé = <b>avoir</b> ou <b>être</b> + participe passé (j'ai chant<b>é</b>).
      </p>
    </AideCard>
  );
}

/* ============================ MÉTHODO / AUTONOMIE ============================ */

function JeBloque() {
  const step = (n: string, txt: string, bg: string) => (
    <div style={{ display: "flex", alignItems: "center", gap: "3mm", background: bg, borderRadius: "3mm", padding: "3mm 4mm", marginBottom: "3mm" }}>
      <span style={{ fontSize: "26px", fontWeight: 800, fontFamily: cursive, minWidth: "10mm", textAlign: "center" }}>{n}</span>
      <span style={{ fontSize: "20px", fontFamily: cursive }}>{txt}</span>
    </div>
  );
  return (
    <AideCard color={DOMAINES.methodo.color} titre="Je bloque, que faire ?" sous="j'essaie seul avant de demander">
      {step("1", "Je relis la consigne. 🟢", "#dcfce7")}
      {step("2", "Je regarde l'exemple. 🟢", "#dcfce7")}
      {step("3", "Je prends mon aide (mes outils). 🟢", "#dcfce7")}
      {step("4", "J'essaie ! 🟢", "#dcfce7")}
      {step("5", "Je demande à mon camarade. 🟠", "#ffedd5")}
      {step("6", "Je demande au maître. 🔴", "#fee2e2")}
    </AideCard>
  );
}

function ResoudreProbleme() {
  return (
    <AideCard color={DOMAINES.methodo.color} titre="Résoudre un problème" sous="étape par étape">
      <ol style={{ margin: "0 0 5mm", paddingLeft: "8mm", fontSize: "19px", fontFamily: cursive, lineHeight: 1.55 }}>
        <li>Je lis (2 fois).</li>
        <li>Ce que je <b>sais</b>.</li>
        <li>Ce qu'on me <b>demande</b>.</li>
        <li>Je choisis l'<b>opération</b>.</li>
        <li>Je <b>calcule</b>.</li>
        <li>Je <b>vérifie</b>.</li>
        <li>Je réponds par une <b>phrase</b>.</li>
      </ol>
      <table style={{ borderCollapse: "collapse", width: "100%", fontSize: "15px" }}>
        <thead><tr><th style={{ border: "1px solid #334155", background: "#e2e8f0", padding: "1.5mm" }}>Je vois…</th><th style={{ border: "1px solid #334155", background: "#e2e8f0", padding: "1.5mm" }}>je peux penser à…</th></tr></thead>
        <tbody>
          {[["en tout, ensemble, de plus", "+"], ["reste, différence, il manque", "−"], ["fois, chaque", "×"], ["partager, par personne", "÷"]].map(([a, b]) => (
            <tr key={a}><td style={{ border: "1px solid #334155", padding: "1.5mm 3mm" }}>{a}</td><td style={{ border: "1px solid #334155", padding: "1.5mm 3mm", textAlign: "center", fontSize: "20px", fontWeight: 800 }}>{b}</td></tr>
          ))}
        </tbody>
      </table>
      <p style={{ marginTop: "3mm", fontSize: "13px", color: "#b45309" }}>⚠ Ce sont des <b>indices</b>, pas une règle : je réfléchis toujours à l'histoire.</p>
    </AideCard>
  );
}

function MotsConsignes() {
  const list = ["entoure", "souligne", "barre", "relie", "complète", "coche", "classe", "range", "compare", "calcule", "écris", "recopie", "colorie", "trace", "mesure", "explique"];
  return (
    <AideCard color={DOMAINES.methodo.color} titre="Les mots des consignes" sous="ce qu'on me demande de faire">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3mm" }}>
        {list.map((m) => (
          <div key={m} style={{ border: "2px solid #334155", borderRadius: "2mm", padding: "2.5mm 4mm", fontSize: "20px", fontFamily: cursive, fontWeight: 700 }}>{m}</div>
        ))}
      </div>
    </AideCard>
  );
}

/* ==================== NUMÉRATION (suite) ==================== */

/** Une portion de bande numérique (20 nombres), graduée à l'unité. */
function LigneNombres({ start }: { start: number }) {
  const W = 1000, m = 26, span = 20;
  const step = (W - 2 * m) / span;
  const axisY = 46;
  const BL = "#2563eb";
  return (
    <svg viewBox="0 0 1000 96" style={{ width: "100%", height: "auto" }} aria-hidden="true">
      <line x1={m - 6} y1={axisY} x2={W - m + 6} y2={axisY} stroke="#111" strokeWidth={6} strokeLinecap="round" />
      {Array.from({ length: span + 1 }).map((_, i) => {
        const num = start + i;
        const x = m + i * step;
        const ten = num % 10 === 0, five = num % 5 === 0;
        const h = ten ? 24 : five ? 16 : 9;
        return (
          <g key={i}>
            <line x1={x} y1={axisY - h} x2={x} y2={axisY} stroke={ten ? BL : "#111"} strokeWidth={ten ? 5 : five ? 3 : 1.6} strokeLinecap="round" />
            {ten
              ? <text x={x} y={axisY + 30} textAnchor="middle" fontSize={30} fontWeight={800} fill={BL} fontFamily={cursive}>{num}</text>
              : <text x={x} y={axisY + 24} textAnchor="middle" fontSize={16} fill="#333" fontFamily={cursive}>{num}</text>}
          </g>
        );
      })}
    </svg>
  );
}

function BandeNumerique() {
  return (
    <AideCard color={DOMAINES.numeration.color} titre="La bande numérique" sous="✂ de 0 à 100 — à découper et scotcher bout à bout">
      {[0, 20, 40, 60, 80].map((s) => <LigneNombres key={s} start={s} />)}
      <p style={{ textAlign: "center", fontSize: "22px", fontFamily: cursive }}>
        👉 vers la <b style={{ color: "#16a34a" }}>droite</b> j'ajoute · 👈 vers la <b style={{ color: "#dc2626" }}>gauche</b> j'enlève
        &nbsp;·&nbsp; les CE2 : la même bande existe de 0 à 1 000 (de 100 en 100).
      </p>
    </AideCard>
  );
}

function NombresEnLettres() {
  const petits = [["0", "zéro"], ["1", "un"], ["2", "deux"], ["3", "trois"], ["4", "quatre"], ["5", "cinq"], ["6", "six"], ["7", "sept"], ["8", "huit"], ["9", "neuf"], ["10", "dix"], ["11", "onze"], ["12", "douze"], ["13", "treize"], ["14", "quatorze"], ["15", "quinze"], ["16", "seize"]];
  const diz = [["20", "vingt"], ["30", "trente"], ["40", "quarante"], ["50", "cinquante"], ["60", "soixante"], ["70", "soixante-dix"], ["80", "quatre-vingts"], ["90", "quatre-vingt-dix"], ["100", "cent"]];
  return (
    <AideCard color={DOMAINES.numeration.color} titre="Les nombres en lettres" sous="je sais les écrire">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: "1.5mm", marginBottom: "4mm" }}>
        {petits.map(([n, m]) => (
          <div key={n} style={{ border: "1.5px solid #2563eb", borderRadius: "2mm", padding: "1.5mm", textAlign: "center", fontSize: "14px", fontFamily: cursive }}><b>{n}</b> {m}</div>
        ))}
      </div>
      <div style={{ fontWeight: 800, fontSize: "15px", marginBottom: "1.5mm", color: "#2563eb" }}>Les dizaines :</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1.5mm" }}>
        {diz.map(([n, m]) => (
          <div key={n} style={{ border: "1.5px solid #2563eb", borderRadius: "2mm", padding: "1.5mm", textAlign: "center", fontSize: "15px", fontFamily: cursive }}><b>{n}</b> {m}</div>
        ))}
      </div>
      <p style={{ marginTop: "5mm", textAlign: "center", fontSize: "17px", fontFamily: cursive }}>
        Exemple&nbsp;: <b>74</b> = soixante-quatorze &nbsp;·&nbsp; <b>92</b> = quatre-vingt-douze
      </p>
    </AideCard>
  );
}

/* ==================== CALCUL (suite) ==================== */

function PoserMultiplication() {
  return (
    <AideCard color={DOMAINES.calcul.color} titre="Poser une multiplication" sous="par 1 chiffre">
      <div style={{ display: "flex", justifyContent: "center", gap: "10mm", alignItems: "center" }}>
        <div style={{ fontFamily: cursive, fontSize: "38px", lineHeight: 1.15, textAlign: "right" }}>
          <div style={{ color: D, fontSize: "18px" }}>¹</div>
          <div><span style={{ color: D }}>2</span><span style={{ color: U }}>4</span></div>
          <div style={{ borderBottom: "3px solid #111" }}>× &nbsp;<span style={{ color: U }}>3</span></div>
          <div><span style={{ color: C }}>7</span><span style={{ color: D }}>2</span></div>
        </div>
        <div style={{ fontSize: "17px", lineHeight: 1.8 }}>
          1. Je multiplie les <span style={{ color: U }}>unités</span> : 3 × 4 = 12.<br />
          2. J'écris 2, je <b>retiens 1</b>.<br />
          3. Je multiplie les <span style={{ color: D }}>dizaines</span> : 3 × 2 = 6, <b>+1</b> = 7.<br />
          4. Résultat : <b>72</b>.
        </div>
      </div>
    </AideCard>
  );
}

function Division() {
  return (
    <AideCard color={DOMAINES.calcul.color} titre="La division (CE2)" sous="partager en parts égales">
      <div style={{ border: "2px solid #159a63", borderRadius: "3mm", padding: "4mm", marginBottom: "5mm", fontSize: "18px", lineHeight: 1.9 }}>
        <b>Le vocabulaire :</b>
        <div><span style={{ color: "#2563eb" }}>dividende</span> ÷ <span style={{ color: "#d97706" }}>diviseur</span> = <span style={{ color: "#16a34a" }}>quotient</span> (+ <b>reste</b>)</div>
        <div style={{ fontFamily: cursive, fontSize: "24px" }}>13 ÷ 4 = 3 &nbsp;reste&nbsp; 1</div>
      </div>
      <p style={{ fontSize: "18px", lineHeight: 1.7 }}>
        Je cherche&nbsp;: <b>« dans la table du 4, combien de fois pour approcher 13 ? »</b><br />
        4 × 3 = 12 → il reste 1. &nbsp;Le reste est toujours <b>plus petit</b> que le diviseur.
      </p>
      <p style={{ marginTop: "5mm", textAlign: "center", fontSize: "17px", fontFamily: cursive }}>Partager 13 billes entre 4 enfants → 3 chacun, il en reste 1.</p>
    </AideCard>
  );
}

function Fractions() {
  const G = "#159a63";
  const bar = (parts: number, label: string, color: string) => (
    <div style={{ marginBottom: "5mm" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "3mm" }}>
        <span style={{ width: "34mm", fontSize: "22px", fontFamily: cursive, fontWeight: 700, color }}>{label}</span>
        <div style={{ flex: 1, display: "flex", border: `2.5px solid ${color}`, borderRadius: "1mm", overflow: "hidden", height: "18mm" }}>
          {Array.from({ length: parts }).map((_, i) => (
            <div key={i} style={{ flex: 1, borderRight: i < parts - 1 ? `2px dashed ${color}` : "none", display: "grid", placeItems: "center", fontSize: parts > 6 ? "16px" : "22px", fontFamily: cursive, fontWeight: 700, background: i % 2 ? `${color}22` : "#fff" }}>{parts === 1 ? "1" : `1/${parts}`}</div>
          ))}
        </div>
      </div>
    </div>
  );
  return (
    <AideCard color={G} titre="Les bandes de fractions" sous="✂ à découper et à superposer (même longueur)">
      {bar(1, "1 entier", "#111")}
      {bar(2, "les demis", "#dc2626")}
      {bar(3, "les tiers", "#ea580c")}
      {bar(4, "les quarts", "#ca8a04")}
      {bar(5, "les cinquièmes", "#16a34a")}
      {bar(6, "les sixièmes", "#0891b2")}
      {bar(8, "les huitièmes", "#2563eb")}
      {bar(10, "les dixièmes", "#7c3aed")}
      <p style={{ marginTop: "3mm", textAlign: "center", fontSize: "20px", fontFamily: cursive }}>
        Je superpose&nbsp;: <b>1/2 = 2/4 = 4/8</b> · le haut = <b>numérateur</b>, le bas = <b>dénominateur</b>.
      </p>
    </AideCard>
  );
}

/* ==================== MESURES (suite) ==================== */

function Longueurs() {
  return (
    <AideCard color={DOMAINES.mesures.color} titre="Les longueurs" sous="mm · cm · m · km">
      {/* petite règle graduée */}
      <svg viewBox="0 0 1000 90" style={{ width: "100%", height: "auto", marginBottom: "4mm" }} aria-hidden="true">
        <rect x="10" y="20" width="980" height="45" fill="#fef3c7" stroke="#d97706" strokeWidth="2" />
        {Array.from({ length: 21 }).map((_, i) => {
          const x = 20 + i * 48; const big = i % 5 === 0;
          return (
            <g key={i}>
              <line x1={x} y1="20" x2={x} y2={big ? 45 : 33} stroke="#111" strokeWidth={big ? 2.5 : 1.5} />
              {big && <text x={x} y="60" textAnchor="middle" fontSize="15" fontWeight="700" fill="#111">{i / 5 * 5}</text>}
            </g>
          );
        })}
      </svg>
      <div style={{ border: "2px solid #d97706", borderRadius: "3mm", padding: "3mm", fontSize: "17px", lineHeight: 1.8, marginBottom: "4mm" }}>
        1 cm = 10 mm · 1 m = 100 cm · 1 km = 1 000 m
      </div>
      <div style={{ fontSize: "17px", fontFamily: cursive, textAlign: "center" }}>
        crayon ≈ des <b>cm</b> · porte ≈ des <b>m</b> · trajet ≈ des <b>km</b>
      </div>
    </AideCard>
  );
}

/* ==================== GÉOMÉTRIE ==================== */

function FiguresPlanes() {
  const G = DOMAINES.geometrie.color;
  const fig = (draw: ReactNode, nom: string, props: string) => (
    <div style={{ border: `2px solid ${G}`, borderRadius: "3mm", padding: "3mm", textAlign: "center" }}>
      <svg width="70" height="60" viewBox="0 0 70 60" aria-hidden="true">{draw}</svg>
      <div style={{ fontSize: "18px", fontWeight: 800, color: G, fontFamily: cursive }}>{nom}</div>
      <div style={{ fontSize: "12px", color: "#555", lineHeight: 1.25 }}>{props}</div>
    </div>
  );
  const st = { fill: "#ede9fe", stroke: G, strokeWidth: 2.5 } as const;
  return (
    <AideCard color={G} titre="Les figures planes" sous="je les reconnais">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3mm" }}>
        {fig(<rect x="12" y="8" width="44" height="44" {...st} />, "le carré", "4 côtés égaux · 4 angles droits")}
        {fig(<rect x="6" y="14" width="58" height="32" {...st} />, "le rectangle", "4 angles droits · côtés opposés égaux")}
        {fig(<polygon points="35,8 62,52 8,52" {...st} />, "le triangle", "3 côtés · 3 sommets")}
        {fig(<polygon points="14,10 60,10 46,52 8,52" {...st} />, "le losange / autre", "4 côtés")}
        {fig(<circle cx="35" cy="30" r="22" {...st} />, "le cercle", "rond · un centre · un rayon")}
        {fig(<polygon points="35,8 62,52 8,52 8,52" fill="#ede9fe" stroke={G} strokeWidth="2.5" />, "triangle rectangle", "un angle droit")}
      </div>
    </AideCard>
  );
}

function AngleSymetrie() {
  const G = DOMAINES.geometrie.color;
  return (
    <AideCard color={G} titre="Angle droit & symétrie" sous="mes repères de géométrie">
      <div style={{ display: "flex", gap: "5mm", marginBottom: "5mm" }}>
        <div style={{ flex: 1, border: `2px solid ${G}`, borderRadius: "3mm", padding: "3mm", textAlign: "center" }}>
          <svg width="90" height="80" viewBox="0 0 90 80" aria-hidden="true">
            <path d="M15 10 L15 65 L80 65" fill="none" stroke="#111" strokeWidth="3" />
            <rect x="15" y="52" width="13" height="13" fill="none" stroke="#e11d48" strokeWidth="2" />
          </svg>
          <div style={{ fontSize: "17px", fontFamily: cursive }}>L'<b>angle droit</b></div>
          <div style={{ fontSize: "13px", color: "#555" }}>je vérifie avec l'équerre 📐</div>
        </div>
        <div style={{ flex: 1, border: `2px solid ${G}`, borderRadius: "3mm", padding: "3mm", textAlign: "center" }}>
          <svg width="90" height="80" viewBox="0 0 90 80" aria-hidden="true">
            <line x1="45" y1="6" x2="45" y2="74" stroke="#e11d48" strokeWidth="2" strokeDasharray="5 4" />
            <polygon points="40,20 12,40 40,60" fill="#ede9fe" stroke={G} strokeWidth="2" />
            <polygon points="50,20 78,40 50,60" fill="#ede9fe" stroke={G} strokeWidth="2" />
          </svg>
          <div style={{ fontSize: "17px", fontFamily: cursive }}>La <b>symétrie</b></div>
          <div style={{ fontSize: "13px", color: "#555" }}>pareil de chaque côté de l'axe</div>
        </div>
      </div>
      <p style={{ textAlign: "center", fontSize: "16px", color: "#444" }}>Pour tracer : je pose bien ma règle, je trace un trait net au crayon.</p>
    </AideCard>
  );
}

/* ==================== GRAMMAIRE (suite) ==================== */

function SujetVerbe() {
  return (
    <AideCard color={DOMAINES.grammaire.color} titre="Le sujet et le verbe" sous="qui fait l'action ?">
      <div style={{ border: "2px solid #dc2626", borderRadius: "3mm", padding: "4mm", textAlign: "center", fontSize: "24px", fontFamily: cursive, marginBottom: "5mm" }}>
        <span style={{ color: "#2563eb", fontWeight: 800 }}>Le chat</span> <span style={{ color: "#16a34a", fontWeight: 800 }}>dort</span> sur le lit.
        <div style={{ fontSize: "15px", color: "#555" }}><span style={{ color: "#2563eb" }}>sujet</span> → <span style={{ color: "#16a34a" }}>verbe</span></div>
      </div>
      <div style={{ fontSize: "18px", lineHeight: 1.9 }}>
        <b style={{ color: "#16a34a" }}>Trouver le verbe :</b> le mot qui change si je dis « hier… / demain… ».<br />
        <b style={{ color: "#2563eb" }}>Trouver le sujet :</b> je demande <b>« Qui est-ce qui</b> dort ? »
      </div>
      <p style={{ marginTop: "5mm", textAlign: "center", fontSize: "16px", color: "#444" }}>Le verbe s'accorde avec le sujet.</p>
    </AideCard>
  );
}

function GroupeNominal() {
  return (
    <AideCard color={DOMAINES.grammaire.color} titre="Le groupe nominal" sous="autour du nom">
      <p style={{ textAlign: "center", fontSize: "20px", fontFamily: cursive, margin: "0 0 4mm" }}>
        déterminant + (adjectif) + <b>nom</b>
      </p>
      <div style={{ border: "2px solid #dc2626", borderRadius: "3mm", padding: "4mm", textAlign: "center", fontSize: "24px", fontFamily: cursive, marginBottom: "5mm" }}>
        <span style={{ color: "#2563eb" }}>un</span> <span style={{ color: "#ca8a04" }}>gros</span> <span style={{ color: "#111", fontWeight: 800 }}>chien</span>
        <div style={{ fontSize: "14px", color: "#555" }}>déterminant · adjectif · nom</div>
      </div>
      <div style={{ fontSize: "17px", lineHeight: 1.8 }}>
        Le <b>nom</b> est le mot le plus important. Je le trouve : il désigne une personne, un animal, une chose. Autour, le déterminant et l'adjectif <b>s'accordent</b> avec lui.
      </div>
    </AideCard>
  );
}

/* ==================== ORTHOGRAPHE (suite) ==================== */

function AccordSujetVerbe() {
  return (
    <AideCard color={DOMAINES.ortho.color} titre="L'accord sujet-verbe" sous="le verbe suit le sujet">
      <div style={{ border: "2px solid #ca8a04", borderRadius: "3mm", padding: "4mm", fontSize: "24px", fontFamily: cursive, textAlign: "center", marginBottom: "5mm", lineHeight: 1.7 }}>
        Le chat mang<b style={{ color: "#16a34a" }}>e</b>.<br />
        Les chats mang<b style={{ color: "#dc2626" }}>ent</b>.
      </div>
      <div style={{ fontSize: "18px", lineHeight: 1.9 }}>
        1. Je trouve le <b style={{ color: "#2563eb" }}>sujet</b> (Qui est-ce qui… ?).<br />
        2. Je trouve le <b style={{ color: "#16a34a" }}>verbe</b>.<br />
        3. <b>Plusieurs</b> → souvent <b>-nt</b> à la fin du verbe.
      </div>
      <p style={{ marginTop: "5mm", textAlign: "center", fontSize: "17px", fontFamily: cursive }}>ils / elles + verbe → <b>-nt</b></p>
    </AideCard>
  );
}

/* ==================== LECTURE / VOCABULAIRE ==================== */

function Dictionnaire() {
  return (
    <AideCard color={DOMAINES.lecture.color} titre="Chercher dans le dictionnaire" sous="l'ordre alphabétique">
      <div style={{ background: "#fce7f3", border: "2px solid #db2777", borderRadius: "3mm", padding: "3mm", textAlign: "center", fontSize: "19px", fontFamily: cursive, letterSpacing: "1px", marginBottom: "5mm" }}>
        a b c d e f g h i j k l m<br />n o p q r s t u v w x y z
      </div>
      <div style={{ fontSize: "18px", lineHeight: 1.8 }}>
        1. Je regarde la <b>1re lettre</b> du mot.<br />
        2. Même lettre ? je regarde la <b>2e</b>, puis la <b>3e</b>.<br />
        3. J'utilise les <b>mots-repères</b> en haut des pages.
      </div>
      <p style={{ marginTop: "5mm", textAlign: "center", fontSize: "17px", fontFamily: cursive }}>
        <b>chat</b> vient avant <b>chien</b> (c-h-<b>a</b>… avant c-h-<b>i</b>…)
      </p>
    </AideCard>
  );
}

function ComprendreTexte() {
  return (
    <AideCard color={DOMAINES.lecture.color} titre="Comprendre un texte" sous="les questions que je me pose">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3mm", marginBottom: "5mm" }}>
        {[["Qui ?", "les personnages"], ["Où ?", "le lieu"], ["Quand ?", "le moment"], ["Quoi ?", "ce qui se passe"], ["Pourquoi ?", "la raison"], ["Comment ?", "de quelle façon"]].map(([q, s]) => (
          <div key={q} style={{ border: "2px solid #db2777", borderRadius: "3mm", padding: "3mm", textAlign: "center" }}>
            <div style={{ fontSize: "22px", fontWeight: 800, color: "#db2777", fontFamily: cursive }}>{q}</div>
            <div style={{ fontSize: "14px", color: "#555" }}>{s}</div>
          </div>
        ))}
      </div>
      <p style={{ textAlign: "center", fontSize: "17px", fontFamily: cursive }}>
        Un mot inconnu ? Je relis la phrase et je regarde les mots autour.
      </p>
    </AideCard>
  );
}

/* ==================== MÉTHODO (suite) ==================== */

function MethodeCopie() {
  const step = (emoji: string, txt: string) => (
    <div style={{ flex: 1, textAlign: "center", border: "2px solid #334155", borderRadius: "3mm", padding: "3mm" }}>
      <div style={{ fontSize: "30px" }}>{emoji}</div>
      <div style={{ fontSize: "16px", fontFamily: cursive, fontWeight: 700 }}>{txt}</div>
    </div>
  );
  return (
    <AideCard color={DOMAINES.methodo.color} titre="La méthode de copie" sous="copier sans erreur">
      <div style={{ display: "flex", gap: "2.5mm", marginBottom: "6mm" }}>
        {step("👀", "je regarde")}
        {step("🧠", "je mémorise")}
        {step("🙈", "je cache")}
        {step("✍️", "j'écris")}
        {step("🔎", "je vérifie")}
      </div>
      <div style={{ border: "2px solid #334155", borderRadius: "3mm", padding: "4mm", fontSize: "18px", lineHeight: 1.9 }}>
        <b>Je relis :</b><br />
        ✓ tous les mots ? ✓ les majuscules ? ✓ les points ?<br />
        ✓ les accords ? ✓ mon écriture est lisible ?
      </div>
    </AideCard>
  );
}

/* ==================== NUMÉRATION — matériel base 10 à découper ==================== */

const U_BG = "#4ade80", U_BD = "#16a34a"; // unités (vert)
const D_BG = "#f6b58f", D_BD = "#c9481f"; // dizaines (orange)
const C_BG = "#93c5fd", C_BD = "#2563eb"; // centaines (bleu)
const SZ = "6mm";

function miniCube(bg: string) {
  return { width: SZ, height: SZ, background: bg, border: "0.4mm solid #fff", boxSizing: "border-box" as const };
}
function Plaque() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(10, ${SZ})`, gridAutoRows: SZ, border: `0.8mm solid ${C_BD}`, borderRadius: "1mm" }}>
      {Array.from({ length: 100 }).map((_, k) => <div key={k} style={miniCube(C_BG)} />)}
    </div>
  );
}
function Barre() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: SZ, gridAutoRows: SZ, border: `0.8mm solid ${D_BD}`, borderRadius: "1mm" }}>
      {Array.from({ length: 10 }).map((_, k) => <div key={k} style={miniCube(D_BG)} />)}
    </div>
  );
}
function CubeU() {
  return <div style={{ width: SZ, height: SZ, background: U_BG, border: `0.8mm solid ${U_BD}`, borderRadius: "1mm", boxSizing: "border-box" }} />;
}

function Base10Cutout() {
  return (
    <AideCard color={DOMAINES.numeration.color} titre="Le matériel base 10" sous="✂ à découper : centaines · dizaines · unités">
      {/* Légende parlante */}
      <div style={{ display: "flex", justifyContent: "space-around", alignItems: "flex-end", marginBottom: "6mm", padding: "3mm", background: "#f8fafc", borderRadius: "3mm" }}>
        <div style={{ textAlign: "center" }}><CubeU /><div style={{ fontSize: "18px", fontFamily: cursive, marginTop: "1mm" }}>1 cube<br /><b style={{ color: U_BD }}>= 1</b></div></div>
        <div style={{ fontSize: "26px", color: "#94a3b8" }}>·</div>
        <div style={{ textAlign: "center" }}><div style={{ display: "inline-block" }}><Barre /></div><div style={{ fontSize: "18px", fontFamily: cursive, marginTop: "1mm" }}>1 barre<br /><b style={{ color: D_BD }}>= 1 dizaine = 10</b></div></div>
        <div style={{ fontSize: "26px", color: "#94a3b8" }}>·</div>
        <div style={{ textAlign: "center" }}><div style={{ display: "inline-block" }}><Plaque /></div><div style={{ fontSize: "18px", fontFamily: cursive, marginTop: "1mm" }}>1 plaque<br /><b style={{ color: C_BD }}>= 1 centaine = 100</b></div></div>
      </div>

      <div style={{ fontSize: "20px", fontFamily: cursive, fontWeight: 700, color: DOMAINES.numeration.color, marginBottom: "2mm" }}>✂ À découper :</div>

      {/* plaque + barres à côté */}
      <div style={{ display: "flex", gap: "8mm", alignItems: "flex-start", marginBottom: "5mm", flexWrap: "wrap" }}>
        <Plaque />
        <div style={{ display: "flex", gap: "2mm" }}>
          {Array.from({ length: 9 }).map((_, i) => <Barre key={i} />)}
        </div>
      </div>

      {/* cubes unités */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2mm" }}>
        {Array.from({ length: 20 }).map((_, i) => <CubeU key={i} />)}
      </div>

      <p style={{ marginTop: "6mm", textAlign: "center", fontSize: "19px", fontFamily: cursive }}>
        10 cubes = 1 barre · 10 barres = 1 plaque · <b>je fabrique mes nombres !</b>
      </p>
    </AideCard>
  );
}

export interface Aide { id: string; domaine: keyof typeof DOMAINES; titre: string; node: ReactNode; }

export const MATERIEL: Aide[] = [
  { id: "base10", domaine: "numeration", titre: "Le matériel base 10 (à découper)", node: <Base10Cutout /> },
  { id: "cdu", domaine: "numeration", titre: "Le tableau des nombres (c · d · u)", node: <CDU /> },
  { id: "comparer", domaine: "numeration", titre: "Comparer 2 nombres (< > =)", node: <Comparer /> },
  { id: "calcul-mental", domaine: "calcul", titre: "Le calcul mental (mes trucs)", node: <CalculMental /> },
  { id: "pythagore", domaine: "calcul", titre: "Les tables de multiplication", node: <Pythagore /> },
  { id: "poser-addition", domaine: "calcul", titre: "Poser une addition", node: <PoserAddition /> },
  { id: "poser-soustraction", domaine: "calcul", titre: "Poser une soustraction", node: <PoserSoustraction /> },
  { id: "lire-heure", domaine: "mesures", titre: "Lire l'heure", node: <LireLHeure /> },
  { id: "classes-mots", domaine: "grammaire", titre: "Les classes de mots", node: <ClassesDeMots /> },
  { id: "accords-gn", domaine: "ortho", titre: "Les accords (groupe du nom)", node: <AccordsGN /> },
  { id: "homophones", domaine: "ortho", titre: "Les homophones (a/à, et/est…)", node: <Homophones /> },
  { id: "terminaisons", domaine: "ortho", titre: "Les terminaisons (présent/futur/imparfait)", node: <Terminaisons /> },
  { id: "bande-num", domaine: "numeration", titre: "La bande numérique (0 → 100)", node: <BandeNumerique /> },
  { id: "nombres-lettres", domaine: "numeration", titre: "Les nombres en lettres", node: <NombresEnLettres /> },
  { id: "poser-multiplication", domaine: "calcul", titre: "Poser une multiplication", node: <PoserMultiplication /> },
  { id: "division", domaine: "calcul", titre: "La division (CE2)", node: <Division /> },
  { id: "fractions", domaine: "calcul", titre: "Les fractions (bandes à découper)", node: <Fractions /> },
  { id: "longueurs", domaine: "mesures", titre: "Les longueurs (mm · cm · m · km)", node: <Longueurs /> },
  { id: "figures", domaine: "geometrie", titre: "Les figures planes", node: <FiguresPlanes /> },
  { id: "angle-symetrie", domaine: "geometrie", titre: "Angle droit & symétrie", node: <AngleSymetrie /> },
  { id: "sujet-verbe", domaine: "grammaire", titre: "Le sujet et le verbe", node: <SujetVerbe /> },
  { id: "groupe-nominal", domaine: "grammaire", titre: "Le groupe nominal", node: <GroupeNominal /> },
  { id: "accord-sv", domaine: "ortho", titre: "L'accord sujet-verbe", node: <AccordSujetVerbe /> },
  { id: "dictionnaire", domaine: "lecture", titre: "Chercher dans le dictionnaire", node: <Dictionnaire /> },
  { id: "comprendre-texte", domaine: "lecture", titre: "Comprendre un texte", node: <ComprendreTexte /> },
  { id: "je-bloque", domaine: "methodo", titre: "Je bloque, que faire ?", node: <JeBloque /> },
  { id: "probleme", domaine: "methodo", titre: "Résoudre un problème", node: <ResoudreProbleme /> },
  { id: "consignes", domaine: "methodo", titre: "Les mots des consignes", node: <MotsConsignes /> },
  { id: "copie", domaine: "methodo", titre: "La méthode de copie", node: <MethodeCopie /> },
];
