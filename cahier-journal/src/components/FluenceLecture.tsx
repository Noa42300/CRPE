/**
 * Français — Lecture : LA FLUENCE (lire à voix haute : vite, bien, avec le ton).
 * D'après la séquence Éduscol « Lecture : enseigner la fluence à visée expressive »
 * (livret d'accompagnement français cycle 2, 2025). Appui : une fable de
 * La Fontaine, « Le Corbeau et le Renard » (domaine public).
 *   • Diaporama à projeter · Leçon à coller · Fiche d'entraînement CE1 / CE2.
 * Démarche : lire plusieurs fois, par groupes de mots, en respectant la
 * ponctuation (le ton), + auto/co-évaluation.
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";

const FR = "#1d4ed8";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";
const CURSIVE = "'Caveat','Comic Neue',cursive";

/* Fable (Jean de La Fontaine, 1668 — domaine public). */
const FABLE: string[] = [
  "Maître Corbeau, sur un arbre perché,",
  "Tenait en son bec un fromage.",
  "Maître Renard, par l'odeur alléché,",
  "Lui tint à peu près ce langage :",
  "« Hé ! bonjour, Monsieur du Corbeau.",
  "Que vous êtes joli ! que vous me semblez beau !",
  "Sans mentir, si votre ramage",
  "Se rapporte à votre plumage,",
  "Vous êtes le Phénix des hôtes de ces bois. »",
  "À ces mots le Corbeau ne se sent pas de joie ;",
  "Et pour montrer sa belle voix,",
  "Il ouvre un large bec, laisse tomber sa proie.",
  "Le Renard s'en saisit, et dit : « Mon bon Monsieur,",
  "Apprenez que tout flatteur",
  "Vit aux dépens de celui qui l'écoute.",
  "Cette leçon vaut bien un fromage, sans doute. »",
  "Le Corbeau, honteux et confus,",
  "Jura, mais un peu tard, qu'on ne l'y prendrait plus.",
];
// CE1 : première moitié (plus court), gros caractères.
const FABLE_CE1 = FABLE.slice(0, 9);

/* Grille d'entraînement : on lit plusieurs fois, un camarade écoute et coche. */
function GrilleFluence() {
  const criteres = [
    "Je lis tous les mots sans erreur.",
    "Je m'arrête aux points, petite pause aux virgules.",
    "Je mets le ton (?  !  les paroles « … »).",
    "Je lis par groupes de mots (pas mot à mot).",
  ];
  return (
    <table style={{ borderCollapse: "collapse", width: "100%", fontFamily: CONSIGNE_FONT, marginTop: "2mm" }}>
      <thead>
        <tr>
          <th style={{ border: "1.3px solid #94a3b8", textAlign: "left", padding: "1.5mm 3mm", fontSize: "12px", background: "#eff6ff" }}>Mon camarade écoute et coche</th>
          {["Lecture 1", "Lecture 2", "Lecture 3"].map((l) => (
            <th key={l} style={{ border: "1.3px solid #94a3b8", padding: "1.5mm", fontSize: "11px", width: "22mm", background: "#eff6ff" }}>{l}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {criteres.map((c, i) => (
          <tr key={i}>
            <td style={{ border: "1.3px solid #94a3b8", padding: "1.6mm 3mm", fontSize: "12px" }}>{c}</td>
            {[0, 1, 2].map((k) => (
              <td key={k} style={{ border: "1.3px solid #94a3b8", textAlign: "center" }}>
                <span style={{ display: "inline-block", width: "5mm", height: "5mm", border: "1.5px solid #64748b", borderRadius: "1px" }} />
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/* ----------------------------- DIAPORAMA ----------------------------- */
const ET = ["Bien lire à voix haute", "Les 3 secrets", "La ponctuation = le ton", "Lire par groupes de mots", "La fable", "Je m'entraîne"];
export function FluenceDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: FR }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Lecture · Bien lire à voix haute (la fluence)</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="text-6xl">🗣️📖</div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: FR }}>Bien lire à voix haute</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Lire <b>couramment</b>, c'est lire <b>sans erreur</b>, à la <b>bonne vitesse</b>, et en <b>mettant le ton</b>.</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>Les 3 secrets</h2>
            <div className="mt-4 flex flex-col gap-3 text-2xl text-stone-700">
              <p>1️⃣ Je lis <b>tous les mots</b>, sans en oublier.</p>
              <p>2️⃣ Je ne vais <b>ni trop vite ni trop lentement</b>.</p>
              <p>3️⃣ Je <b>mets le ton</b> et je respecte la <b>ponctuation</b>.</p>
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>La ponctuation = le ton</h2>
            <div className="mt-4 grid grid-cols-2 gap-3 text-2xl text-stone-700">
              <p><b>.</b> je m'arrête</p>
              <p><b>,</b> petite pause</p>
              <p><b>?</b> ma voix monte</p>
              <p><b>!</b> je lis plus fort</p>
              <p className="col-span-2"><b>« … »</b> ce sont des <b>paroles</b> : je prends la voix du personnage.</p>
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>Lire par groupes de mots</h2>
            <p className="mt-3 text-2xl text-stone-600">Je ne lis pas mot à mot : je lis des <b>groupes</b> (barre = je respire).</p>
            <p className="mt-5 text-3xl" style={{ fontFamily: CURSIVE }}>Maître Corbeau, / sur un arbre perché, / tenait en son bec / un fromage. /</p>
          </div>
        )}
        {i === 4 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: FR }}>Le Corbeau et le Renard <span className="text-lg text-stone-500">— Jean de La Fontaine</span></h2>
            <div className="mt-3 text-left text-xl leading-relaxed text-stone-800" style={{ columns: 1 }}>
              {FABLE.map((l, k) => <div key={k}>{l}</div>)}
            </div>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">🏆</div>
            <h1 className="text-4xl font-extrabold" style={{ color: FR }}>Je m'entraîne</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Je lis le texte <b>plusieurs fois</b> : à chaque lecture, je lis <b>mieux</b> et <b>plus facilement</b>. Un camarade m'écoute et me dit ce qui est réussi.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: FR, color: FR }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET.length} · {ET[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: FR }}>▶</button>
      </div>
    </div>
  );
}

/* ------------------------------- LEÇON ------------------------------- */
export function FluenceLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "32px", margin: "0 0 1mm", textAlign: "center", fontWeight: 800, color: FR, fontFamily: CURSIVE }}>Bien lire à voix haute</h1>
      <div style={{ textAlign: "center", fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700, color: "#1e3a8a", marginBottom: "3mm" }}>LA FLUENCE · lire sans erreur, à la bonne vitesse, avec le ton</div>

      <div style={{ display: "flex", gap: "3mm" }}>
        {[["👀", "Je lis tous les mots", "sans en oublier et sans me tromper."], ["⏱️", "À la bonne vitesse", "ni trop vite, ni trop lentement."], ["🎭", "Je mets le ton", "je respecte la ponctuation."]].map(([e, t, s]) => (
          <div key={t} style={{ flex: 1, border: `2px solid ${FR}`, borderRadius: "3mm", padding: "2.5mm", textAlign: "center", background: "#eff6ff" }}>
            <div style={{ fontSize: "26px" }}>{e}</div>
            <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "13px", color: FR }}>{t}</div>
            <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>{s}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "3mm", border: "1.5px solid #bfdbfe", borderRadius: "3mm", padding: "2.5mm 4mm" }}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "13px", color: FR, marginBottom: "1mm" }}>La ponctuation me donne le ton</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "19px", lineHeight: 1.7 }}>
          <b>.</b> je m'arrête &nbsp;·&nbsp; <b>,</b> petite pause &nbsp;·&nbsp; <b>?</b> ma voix monte &nbsp;·&nbsp; <b>!</b> plus fort &nbsp;·&nbsp; <b>« … »</b> je prends la voix du personnage.
        </div>
      </div>

      <div style={{ marginTop: "3mm", border: `2px dashed ${FR}`, borderRadius: "3mm", padding: "2.5mm 5mm", background: "#f8fbff" }}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "12px", color: FR }}>Astuce : je lis par groupes de mots (/ = je respire)</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "20px", marginTop: "1mm" }}>Maître Corbeau, / sur un arbre perché, / tenait en son bec / un fromage. /</div>
      </div>

      <div style={{ marginTop: "3mm", textAlign: "center", fontFamily: CURSIVE, fontSize: "18px", color: "#334155" }}>
        🏆 Je lis le texte <b>plusieurs fois</b> : à chaque fois, je lis <b>mieux</b> !
      </div>
    </div>
  );
}

/* --------------------------- FICHES ÉLÈVES --------------------------- */
function FicheFluence({ niveau, lignes, marquees }: { niveau: string; lignes: string[]; marquees: number }) {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", padding: "8mm 10mm", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", borderBottom: `2px solid ${FR}`, paddingBottom: "1.5mm" }}>
        <h1 style={{ fontSize: "22px", margin: 0, fontWeight: 800, color: FR, fontFamily: CONSIGNE_FONT }}>Je m'entraîne à bien lire — <span style={{ fontFamily: CURSIVE, fontSize: "26px" }}>la fluence</span></h1>
        <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : .............. · {niveau}</span>
      </div>
      <div style={{ fontSize: "13px", fontWeight: 700, fontFamily: CONSIGNE_FONT, margin: "2mm 0 1mm" }}>
        <span style={{ color: FR }}>Lis le texte à voix haute, <u>3 fois</u>.</span> Les barres <b>/</b> montrent où respirer (groupes de mots). Je respecte la ponctuation.
      </div>
      <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "11px", color: "#64748b", marginBottom: "2mm" }}>Le Corbeau et le Renard — Jean de La Fontaine</div>

      <div style={{ border: "1.3px solid #cbd5e1", borderRadius: "2mm", padding: "3mm 5mm", background: "#fffef7" }}>
        {lignes.map((l, k) => (
          <div key={k} style={{ fontFamily: CURSIVE, fontSize: niveau === "CE1" ? "22px" : "19px", lineHeight: niveau === "CE1" ? 1.9 : 1.7 }}>
            {k < marquees ? l.replace(/, /g, ", / ").replace(/ : /g, " : / ") : l}
          </div>
        ))}
      </div>

      <GrilleFluence />

      <div style={{ marginTop: "2.5mm", display: "flex", alignItems: "center", gap: "4mm", fontFamily: CONSIGNE_FONT, fontSize: "12px" }}>
        <b style={{ color: FR }}>Comment je me sens après mes 3 lectures ?</b>
        <span style={{ fontSize: "20px" }}>😟 &nbsp; 😐 &nbsp; 🙂 &nbsp; 😃</span>
      </div>
    </div>
  );
}

export function FluenceFicheCE1() {
  return <FicheFluence niveau="CE1" lignes={FABLE_CE1} marquees={4} />;
}
export function FluenceFicheCE2() {
  return <FicheFluence niveau="CE2" lignes={FABLE} marquees={3} />;
}
