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
  grammaire: { label: "Français / grammaire", color: "#dc2626", emoji: "🔴" },
  ortho: { label: "Orthographe / conjugaison", color: "#ca8a04", emoji: "🟡" },
  methodo: { label: "Méthodo / autonomie", color: "#334155", emoji: "⚫" },
};

function AideCard({ color, titre, sous, children }: { color: string; titre: string; sous?: string; children: ReactNode }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: `3px solid ${color}`, borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box" }}>
        <div style={{ background: color, color: "#fff", borderRadius: "3mm", padding: "3mm 5mm", marginBottom: "6mm", textAlign: "center" }}>
          <div style={{ fontSize: "32px", fontWeight: 800, fontFamily: "'Caveat','Comic Neue',cursive", lineHeight: 1.1 }}>{titre}</div>
          {sous && <div style={{ fontSize: "15px", opacity: 0.92 }}>{sous}</div>}
        </div>
        {children}
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

export interface Aide { id: string; domaine: keyof typeof DOMAINES; titre: string; node: ReactNode; }

export const MATERIEL: Aide[] = [
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
  { id: "je-bloque", domaine: "methodo", titre: "Je bloque, que faire ?", node: <JeBloque /> },
  { id: "probleme", domaine: "methodo", titre: "Résoudre un problème", node: <ResoudreProbleme /> },
  { id: "consignes", domaine: "methodo", titre: "Les mots des consignes", node: <MotsConsignes /> },
];
