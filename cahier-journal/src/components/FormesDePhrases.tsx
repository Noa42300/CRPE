/**
 * Français — Les FORMES de phrases (affirmative / négative). Suite des types de
 * phrases. Contenu :
 *   • Diaporama de découverte (à projeter)
 *   • DÉCOUVERTE : double page (CE1 à gauche, CE2 à droite) avec une bulle BD de
 *     deux enfants qui parlent + rappel des types, puis exercices de découverte.
 *   • Leçon à coller (imagée, mémorisable)
 *   • Fiches d'exercices CE1 et CE2 (format « Je m'entraîne »)
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { FicheModele, SectionBar, Exo, Choix, ListeIntrus, LignesModele, Defi } from "./ficheModele";
import { EvalFrame, GrilleLSU } from "./EvalEcritureLettres";

const FR = "#1d4ed8";
const VERT = "#16a34a", ROUGE = "#dc2626";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

/* ---------- Diaporama (inchangé, découverte projetée) ---------- */
const ET = ["Les formes de phrases", "La forme affirmative", "La forme négative", "On encadre le verbe", "Je transforme", "Je retiens"];
export function FormesPhrasesDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: FR }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Grammaire · Les formes de phrases</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (<div className="text-center"><div className="text-6xl">✅ ❌</div><h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: FR }}>Les formes de phrases</h1><p className="mt-3 text-2xl font-semibold text-stone-600">Une phrase peut dire <b>OUI</b>… ou dire <b>NON</b> !</p></div>)}
        {i === 1 && (<div className="text-center"><h2 className="text-4xl font-extrabold" style={{ color: FR }}>La forme affirmative ✅</h2><p className="mt-4 text-3xl font-bold text-stone-800">« J'aime les pommes. »</p><p className="mt-3 text-2xl text-stone-600">Elle dit <b>OUI</b> : elle affirme quelque chose.</p></div>)}
        {i === 2 && (<div className="text-center"><h2 className="text-4xl font-extrabold" style={{ color: FR }}>La forme négative ❌</h2><p className="mt-4 text-3xl font-bold text-stone-800">« Je <span style={{ color: ROUGE }}>n'</span>aime <span style={{ color: ROUGE }}>pas</span> les pommes. »</p><p className="mt-3 text-2xl text-stone-600">Elle dit <b>NON</b> : on utilise <b style={{ color: ROUGE }}>ne … pas</b>.</p></div>)}
        {i === 3 && (<div className="text-center"><h2 className="text-4xl font-extrabold" style={{ color: FR }}>On encadre le verbe</h2><p className="mt-4 text-3xl font-bold">Le chat <span style={{ color: ROUGE }}>ne</span> <u>dort</u> <span style={{ color: ROUGE }}>pas</span>.</p><p className="mt-4 text-2xl text-stone-600"><b style={{ color: ROUGE }}>ne … pas</b> · <b style={{ color: ROUGE }}>n' … pas</b> · ne … <b>plus</b> · ne … <b>jamais</b></p></div>)}
        {i === 4 && (<div className="w-full max-w-2xl text-center"><h2 className="text-4xl font-extrabold" style={{ color: FR }}>Je transforme</h2><div className="mt-4 space-y-3 text-2xl"><p>✅ Je mange à la cantine. → ❌ Je <b style={{ color: ROUGE }}>ne</b> mange <b style={{ color: ROUGE }}>pas</b> à la cantine.</p><p>❌ Tu n'écoutes pas. → ✅ Tu écoutes.</p></div></div>)}
        {i === 5 && (<div className="text-center"><div className="mb-2 text-5xl">✅❌</div><h1 className="text-4xl font-extrabold" style={{ color: FR }}>Je retiens</h1><p className="mt-3 text-2xl font-semibold text-stone-600">La phrase <b>affirmative</b> dit oui. La phrase <b>négative</b> dit non, avec <b style={{ color: ROUGE }}>ne … pas</b> autour du verbe.</p></div>)}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: FR, color: FR }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET.length} · {ET[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: FR }}>▶</button>
      </div>
    </div>
  );
}

/* ---------- BD : deux enfants qui parlent ---------- */
function Kid({ x, color, face }: { x: number; color: string; face: string }) {
  return (
    <g transform={`translate(${x},0)`}>
      <circle cx="0" cy="54" r="13" fill="#fde3c8" stroke="#8a5a36" strokeWidth="1.5" />
      <text x="0" y="59" textAnchor="middle" fontSize="13">{face}</text>
      <path d="M-11 95 Q0 66 11 95 Z" fill={color} />
      <rect x="-11" y="90" width="22" height="10" fill={color} />
    </g>
  );
}
function Bulle({ x, y, w, texte, color }: { x: number; y: number; w: number; texte: string; color: string }) {
  return (
    <g transform={`translate(${x},${y})`}>
      <rect x="0" y="0" width={w} height="34" rx="9" fill="#fff" stroke={color} strokeWidth="2" />
      <path d={`M${w * 0.4} 34 l 10 12 l 6 -12 Z`} fill="#fff" stroke={color} strokeWidth="2" />
      <text x={w / 2} y="22" textAnchor="middle" fontFamily={CURSIVE} fontSize="16" fill="#111">{texte}</text>
    </g>
  );
}
function SceneBD() {
  return (
    <svg viewBox="0 0 520 105" width="100%" height="auto" style={{ maxHeight: "34mm" }}>
      <Bulle x={8} y={2} w={150} texte="J'aime les carottes !" color={VERT} />
      <Bulle x={300} y={2} w={212} texte="Moi, je n'aime pas les carottes !" color={ROUGE} />
      <Kid x={200} color={VERT} face="🙂" />
      <Kid x={255} color={ROUGE} face="😄" />
    </svg>
  );
}

/* ---------- Tableau de tri OUI / NON (grand) ---------- */
function TriTable({ haut = "22mm" }: { haut?: string }) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "1mm" }}>
      <thead>
        <tr>
          <th style={{ border: `2px solid ${VERT}`, background: "#f0fdf4", color: VERT, fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "12px", padding: "1.2mm", width: "50%" }}>✅ Affirmative (dit OUI)</th>
          <th style={{ border: `2px solid ${ROUGE}`, background: "#fef2f2", color: ROUGE, fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "12px", padding: "1.2mm", width: "50%" }}>❌ Négative (dit NON)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ border: `2px solid ${VERT}`, height: haut, verticalAlign: "top" }} />
          <td style={{ border: `2px solid ${ROUGE}`, height: haut, verticalAlign: "top" }} />
        </tr>
      </tbody>
    </table>
  );
}

/* ---------- DÉCOUVERTE : double page CE1 (gauche) / CE2 (droite) ---------- */
export function FormesPhrasesDecouverte() {
  const Num = ({ n }: { n: number }) => <span style={{ display: "inline-flex", width: "6mm", height: "6mm", borderRadius: "50%", background: FR, color: "#fff", fontSize: "12px", fontWeight: 800, alignItems: "center", justifyContent: "center", marginRight: "1.5mm", flexShrink: 0 }}>{n}</span>;
  const C = ({ children }: { children: React.ReactNode }) => <div style={{ fontSize: "12.5px", fontWeight: 700, fontFamily: CONSIGNE_FONT, marginBottom: "0.8mm", display: "flex", alignItems: "flex-start", lineHeight: 1.25 }}>{children}</div>;
  const ph = { fontFamily: CURSIVE, fontSize: "15px", lineHeight: 1.6 } as const;
  return (
    <div className="fiche-a4 fiche-a4-landscape" style={{ width: "297mm", background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ height: "210mm", boxSizing: "border-box", padding: "6mm 7mm" }}>
        <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "3mm 4mm", height: "198mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
          {/* en-tête : titre + BD + Prénom */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1.5px solid #111", paddingBottom: "1.5mm", gap: "4mm" }}>
            <h1 style={{ fontSize: "22px", margin: 0, fontWeight: 700, fontFamily: CURSIVE, color: FR, whiteSpace: "nowrap" }}>Les formes de phrases — je découvre</h1>
            <div style={{ flex: 1, maxWidth: "150mm" }}><SceneBD /></div>
            <span style={{ fontSize: "11px", fontWeight: 700, fontFamily: CONSIGNE_FONT, whiteSpace: "nowrap" }}>Prénom : ..................</span>
          </div>
          {/* RAPPEL — bandeau pleine largeur, bien lisible */}
          <div style={{ border: `2.5px solid ${FR}`, borderRadius: "3mm", background: "#eff6ff", margin: "2mm 0", padding: "2mm 4mm", display: "flex", alignItems: "center", gap: "4mm" }}>
            <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "13px", color: FR, whiteSpace: "nowrap", borderRight: `1.5px solid ${FR}`, paddingRight: "4mm" }}>Je me<br />rappelle</div>
            <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "12.5px", lineHeight: 1.5 }}>
              Le <b>TYPE</b> d'une phrase, c'est son point final : <b>.</b> déclarative · <b>?</b> interrogative · <b>!</b> exclamative · impérative (un ordre).<br />
              La <b style={{ color: FR }}>FORME</b>, c'est autre chose : une phrase dit <b style={{ color: VERT }}>OUI</b> → elle est <b style={{ color: VERT }}>affirmative</b> ✅ ; elle dit <b style={{ color: ROUGE }}>NON</b> → elle est <b style={{ color: ROUGE }}>négative</b> ❌ (avec <b style={{ color: ROUGE }}>ne … pas</b> autour du verbe).
            </div>
          </div>
          {/* corps : CE1 | CE2 */}
          <div style={{ flex: 1, display: "flex", gap: "4mm", minHeight: 0 }}>
            {/* CE1 */}
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "1.4mm" }}>
              <div style={{ display: "inline-block", background: "#e0920a", color: "#fff", fontWeight: 800, fontSize: "12px", padding: "0.5mm 5mm", borderRadius: "999px", width: "fit-content", fontFamily: CONSIGNE_FONT }}>CE1</div>
              <div><C><Num n={1} /><span>Dans chaque ligne, <b>entoure</b> la phrase qui dit <b style={{ color: ROUGE }}>NON</b>.</span></C>
                <div style={ph}>a) Je joue. &nbsp;/&nbsp; Je ne joue pas.<br />b) Il mange. &nbsp;/&nbsp; Il ne mange pas.<br />c) Tu ne cours pas. &nbsp;/&nbsp; Tu cours.<br />d) Le chien aboie. &nbsp;/&nbsp; Le chien n'aboie pas.</div></div>
              <div><C><Num n={2} /><span><b>Colorie</b> en rouge les deux petits mots <b style={{ color: ROUGE }}>ne</b> (ou <b style={{ color: ROUGE }}>n'</b>) et <b style={{ color: ROUGE }}>pas</b>.</span></C>
                <div style={ph}>Le chat ne dort pas. · Tu n'écoutes pas.<br />Nous ne sortons pas. · Je n'aime pas les choux.</div></div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}><C><Num n={3} /><span><b>Classe</b> les phrases : écris la lettre dans la bonne colonne.</span></C>
                <div style={{ ...ph, fontSize: "14px", lineHeight: 1.5 }}>a) Je lis. &nbsp; b) Je ne lis pas. &nbsp; c) Il court.<br />d) Il ne court pas. &nbsp; e) Tu chantes. &nbsp; f) Tu ne chantes pas.</div>
                <TriTable haut="12mm" /></div>
              <div><C><Num n={4} /><span><b>Transforme</b> à la forme négative avec <b style={{ color: ROUGE }}>ne … pas</b>.</span></C>
                <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "11.5px", color: "#475569", marginBottom: "0.5mm" }}>Exemple : Je cours. → Je <b style={{ color: ROUGE }}>ne</b> cours <b style={{ color: ROUGE }}>pas</b>.</div>
                <div style={{ fontFamily: CURSIVE, fontSize: "15px" }}>Le chat dort. →</div><LignesModele n={1} />
                <div style={{ fontFamily: CURSIVE, fontSize: "15px" }}>Tu manges une pomme. →</div><LignesModele n={1} /></div>
            </div>
            <div style={{ borderLeft: "2px dashed #94a3b8" }} />
            {/* CE2 */}
            <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "1.4mm" }}>
              <div style={{ display: "inline-block", background: "#2C6FB5", color: "#fff", fontWeight: 800, fontSize: "12px", padding: "0.5mm 5mm", borderRadius: "999px", width: "fit-content", fontFamily: CONSIGNE_FONT }}>CE2</div>
              <div><C><Num n={1} /><span><b>Observe</b> les deux phrases et écris ce qui change pour dire non.</span></C>
                <div style={ph}>Le chat dort. → Le chat ne dort pas.</div><LignesModele n={2} /></div>
              <div><C><Num n={2} /><span><b>Entoure</b> les mots de la négation (<b style={{ color: ROUGE }}>ne / n'</b> … <b style={{ color: ROUGE }}>pas</b>, <b style={{ color: ROUGE }}>plus</b>, <b style={{ color: ROUGE }}>jamais</b>).</span></C>
                <div style={ph}>Je n'ai plus faim. · Il ne ment jamais.<br />Nous ne partons pas. · Elle ne pleure plus.<br />Tu n'écoutes jamais le maître.</div></div>
              <div style={{ flex: 1, display: "flex", flexDirection: "column" }}><C><Num n={3} /><span><b>Classe</b> les phrases : écris la lettre dans la bonne colonne.</span></C>
                <div style={{ ...ph, fontSize: "14px", lineHeight: 1.5 }}>a) Je lis. &nbsp; b) Je ne lis pas. &nbsp; c) Il ne vient plus.<br />d) Tu chantes. &nbsp; e) Elle n'écoute jamais. &nbsp; f) Nous jouons.</div>
                <TriTable haut="12mm" /></div>
              <div><C><Num n={4} /><span><b>Transforme</b> : d'abord à la forme négative, puis à la forme affirmative.</span></C>
                <div style={{ fontFamily: CURSIVE, fontSize: "15px" }}>→ négative : Les oiseaux chantent. →</div><LignesModele n={1} />
                <div style={{ fontFamily: CURSIVE, fontSize: "15px" }}>→ affirmative : Je ne joue pas dehors. →</div><LignesModele n={1} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Leçon imagée (mémorisable) ---------- */
export function FormesPhrasesLecon() {
  const Carte = ({ emoji, titre, color, phrase, dit }: { emoji: string; titre: string; color: string; phrase: React.ReactNode; dit: string }) => (
    <div style={{ flex: 1, border: `3px solid ${color}`, borderRadius: "5mm", padding: "3mm", textAlign: "center", background: color === VERT ? "#f0fdf4" : "#fef2f2" }}>
      <div style={{ fontSize: "48px" }}>{emoji}</div>
      <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "17px", color }}>{titre}</div>
      <div style={{ fontFamily: CURSIVE, fontSize: "17px", marginTop: "0.5mm" }}>elle dit <b>{dit}</b></div>
      <div style={{ fontFamily: CURSIVE, fontSize: "20px", marginTop: "1.5mm", background: "#fff", border: `1.5px solid ${color}`, borderRadius: "3mm", padding: "1mm 2mm" }}>{phrase}</div>
    </div>
  );
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "38px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: FR, fontFamily: CURSIVE }}>Les formes de phrases</h1>
      <p style={{ textAlign: "center", fontFamily: CURSIVE, fontSize: "18px", margin: "0 0 3mm" }}>Une phrase peut dire <b style={{ color: VERT }}>oui</b> ou dire <b style={{ color: ROUGE }}>non</b>.</p>
      <div style={{ display: "flex", gap: "5mm" }}>
        <Carte emoji="✅" titre="Forme affirmative" color={VERT} dit="OUI" phrase={<>Le chat dort.</>} />
        <Carte emoji="❌" titre="Forme négative" color={ROUGE} dit="NON" phrase={<>Le chat <b style={{ color: ROUGE }}>ne</b> dort <b style={{ color: ROUGE }}>pas</b>.</>} />
      </div>
      <div style={{ marginTop: "4mm", border: `2.5px solid ${FR}`, borderRadius: "4mm", padding: "3mm 5mm", background: "#eff6ff" }}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "14px", color: FR, textAlign: "center" }}>Pour dire NON, j'encadre le verbe :</div>
        <div style={{ textAlign: "center", fontFamily: CURSIVE, fontSize: "24px", marginTop: "1mm" }}>Le chat <b style={{ color: ROUGE }}>ne</b> <u>dort</u> <b style={{ color: ROUGE }}>pas</b>.</div>
        <div style={{ textAlign: "center", fontFamily: CURSIVE, fontSize: "18px", marginTop: "1mm" }}>Les deux petits mots vont <b>autour du verbe</b> : <b style={{ color: ROUGE }}>ne … pas</b> (aussi <b style={{ color: ROUGE }}>ne … plus</b>, <b style={{ color: ROUGE }}>ne … jamais</b>). Devant une voyelle : <b style={{ color: ROUGE }}>n'</b> (je <b style={{ color: ROUGE }}>n'</b>aime pas).</div>
      </div>
      <div style={{ marginTop: "3mm", textAlign: "center", fontFamily: CURSIVE, fontSize: "17px" }}>
        ⚠️ Attention : la <b>forme</b> (oui / non) n'est pas le <b>type</b> (le point . ? !).
      </div>
    </div>
  );
}

/* ---------- Fiche d'exercices CE1 ---------- */
export function FicheFormesCE1() {
  return (
    <FicheModele matiere="Grammaire" titre="Les formes de phrases" couleur={FR} dotActif={1} page="Les formes de phrases · CE1">
      <SectionBar couleur={FR}>Affirmative ou négative ?</SectionBar>
      <Exo n={1} couleur={FR} consigne={<><b>Colorie</b> en vert si la phrase dit OUI, en rouge si elle dit NON.</>}>
        <div style={{ fontSize: "14px", lineHeight: 2, fontFamily: CURSIVE }}>a) Je joue dans la cour. &nbsp; b) Tu ne cours pas.<br />c) Le chien aboie. &nbsp; d) Je n'aime pas les épinards.</div>
      </Exo>
      <Exo n={2} couleur={FR} consigne={<><b>Entoure</b> les deux petits mots de la négation (ne … pas).</>}>
        <div style={{ fontSize: "14px", lineHeight: 2, fontFamily: CURSIVE }}>a) Je ne mange pas. &nbsp; b) Il n'écoute pas. &nbsp; c) Nous ne dormons pas.</div>
      </Exo>
      <SectionBar couleur={FR}>Je transforme</SectionBar>
      <Exo n={3} couleur={FR} consigne={<><b>Transforme</b> à la forme négative (ajoute ne … pas).</>}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "12px", background: "#eef6ee", border: "1px solid #cfe3cf", borderRadius: "4px", padding: "0.5mm 3mm", width: "fit-content", marginBottom: "1mm" }}>Exemple : Je cours. → Je <b>ne</b> cours <b>pas</b>.</div>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>a) Le chat dort.</div><LignesModele n={1} />
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>b) Tu manges une pomme.</div><LignesModele n={1} />
      </Exo>
      <Exo n={4} couleur={FR} consigne={<><b>Colorie</b> la phrase négative dans chaque ligne.</>}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5mm", fontSize: "13px" }}>
          <Choix options={["Je range mes jouets.", "Je ne range pas mes jouets."]} />
          <Choix options={["Il ne pleut pas.", "Il pleut."]} />
        </div>
      </Exo>
      <Defi>Écris une phrase qui dit <b>NON</b> (négative) sur les bonbons.</Defi>
    </FicheModele>
  );
}

/* ---------- Fiche d'exercices CE2 ---------- */
export function FicheFormesCE2() {
  return (
    <FicheModele matiere="Grammaire" titre="Les formes de phrases" couleur={FR} dotActif={2} page="Les formes de phrases · CE2">
      <SectionBar couleur={FR}>Reconnaître la forme</SectionBar>
      <Exo n={1} couleur={FR} consigne={<><b>Écris</b> A (affirmative) ou N (négative) devant chaque phrase.</>}>
        <div style={{ fontSize: "13px", lineHeight: 1.9, fontFamily: CURSIVE }}>___ Nous partons en vacances. &nbsp; ___ Je ne comprends pas.<br />___ Tu n'as jamais menti. &nbsp; ___ Léa lit un livre. &nbsp; ___ Il ne reste plus de pain.</div>
      </Exo>
      <Exo n={2} couleur={FR} consigne={<><b>Barre</b> l'intrus : la phrase qui n'est PAS à la forme négative.</>}>
        <ListeIntrus mots={["Je ne sais pas.", "Il ne vient plus.", "Tu chantes bien.", "Elle n'écoute jamais."]} />
      </Exo>
      <SectionBar couleur={FR}>Je transforme</SectionBar>
      <Exo n={3} couleur={FR} consigne={<><b>Transforme</b> à la forme négative (ne … pas).</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>a) Les élèves écoutent la maîtresse.</div><LignesModele n={1} />
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>b) Tu as fini ton travail.</div><LignesModele n={1} />
      </Exo>
      <Exo n={4} couleur={FR} consigne={<><b>Transforme</b> à la forme affirmative.</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>a) Je ne joue pas dehors.</div><LignesModele n={1} />
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>b) Il ne pleut jamais.</div><LignesModele n={1} />
      </Exo>
      <Exo n={5} couleur={FR} consigne={<><b>Récris</b> la phrase avec ne … plus, puis ne … jamais.</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>Je mange des bonbons.</div><LignesModele n={2} />
      </Exo>
      <Defi>Écris deux phrases : une <b>affirmative</b> et sa transformation <b>négative</b>.</Defi>
    </FicheModele>
  );
}

/* ======================================================================
 * RÉVISION « au cas où » — types ET formes de phrases (lundi).
 * ==================================================================== */
export function FicheRevisionTypesFormesCE1() {
  return (
    <FicheModele matiere="Grammaire" titre="Types et formes de phrases" couleur={FR} dotActif={1} page="Révision — types et formes · CE1">
      <SectionBar couleur={FR}>Le type : le point final</SectionBar>
      <Exo n={1} couleur={FR} consigne={<><b>Mets</b> le bon point à la fin : <b>.</b> &nbsp; <b>?</b> &nbsp; <b>!</b></>}>
        <div style={{ fontSize: "14px", lineHeight: 2, fontFamily: CURSIVE }}>a) Le chat dort ____ &nbsp;&nbsp; b) Tu viens à la piscine ____<br />c) Quelle belle journée ____ &nbsp;&nbsp; d) Range tes affaires ____</div>
      </Exo>
      <Exo n={2} couleur={FR} consigne={<><b>Colorie</b> en bleu la phrase qui pose une <b>question</b>.</>}>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5mm", fontSize: "13px" }}>
          <Choix options={["Il fait beau aujourd'hui.", "Est-ce qu'il fait beau ?"]} />
          <Choix options={["Où vas-tu ?", "Je vais à l'école."]} />
        </div>
      </Exo>
      <SectionBar couleur={FR}>La forme : oui ou non</SectionBar>
      <Exo n={3} couleur={FR} consigne={<><b>Colorie</b> en vert si la phrase dit OUI, en rouge si elle dit NON.</>}>
        <div style={{ fontSize: "14px", lineHeight: 2, fontFamily: CURSIVE }}>a) Je joue dans la cour. &nbsp; b) Tu ne cours pas.<br />c) Le chien aboie. &nbsp; d) Je n'aime pas les épinards.</div>
      </Exo>
      <Exo n={4} couleur={FR} consigne={<><b>Transforme</b> à la forme négative (ajoute ne … pas).</>}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "12px", background: "#eef6ee", border: "1px solid #cfe3cf", borderRadius: "4px", padding: "0.5mm 3mm", width: "fit-content", marginBottom: "1mm" }}>Exemple : Je cours. → Je <b>ne</b> cours <b>pas</b>.</div>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>a) Le chat dort.</div><LignesModele n={1} />
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>b) Tu manges une pomme.</div><LignesModele n={1} />
      </Exo>
      <Defi>Écris une phrase qui pose une <b>question</b> (avec un <b>?</b>).</Defi>
    </FicheModele>
  );
}

export function FicheRevisionTypesFormesCE2() {
  return (
    <FicheModele matiere="Grammaire" titre="Types et formes de phrases" couleur={FR} dotActif={2} page="Révision — types et formes · CE2">
      <SectionBar couleur={FR}>Les types de phrases</SectionBar>
      <Exo n={1} couleur={FR} consigne={<><b>Écris</b> le type : déclarative, interrogative, exclamative ou impérative.</>}>
        <div style={{ fontSize: "13px", lineHeight: 2, fontFamily: CURSIVE }}>a) Viens ici tout de suite. → …………………<br />b) Est-ce que tu as fini ? → …………………<br />c) Comme c'est beau ! → …………………<br />d) Les oiseaux chantent. → …………………</div>
      </Exo>
      <Exo n={2} couleur={FR} consigne={<><b>Transforme</b> cette phrase déclarative en phrase interrogative, puis exclamative.</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>Tu as gagné la course.</div>
        <div style={{ fontSize: "12px", fontFamily: CONSIGNE_FONT }}>→ interrogative :</div><LignesModele n={1} />
        <div style={{ fontSize: "12px", fontFamily: CONSIGNE_FONT }}>→ exclamative :</div><LignesModele n={1} />
      </Exo>
      <SectionBar couleur={FR}>Les formes de phrases</SectionBar>
      <Exo n={3} couleur={FR} consigne={<><b>Écris</b> A (affirmative) ou N (négative).</>}>
        <div style={{ fontSize: "13px", lineHeight: 1.9, fontFamily: CURSIVE }}>___ Je comprends la leçon. &nbsp; ___ Tu n'as jamais menti.<br />___ Il ne reste plus de pain. &nbsp; ___ Léa lit un livre.</div>
      </Exo>
      <Exo n={4} couleur={FR} consigne={<><b>Transforme</b> à la forme négative, puis à la forme affirmative.</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>a) Les élèves écoutent le maître. (négative)</div><LignesModele n={1} />
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>b) Je ne joue pas dehors. (affirmative)</div><LignesModele n={1} />
      </Exo>
      <Exo n={5} couleur={FR} consigne={<><b>Récris</b> la phrase avec ne … plus, puis ne … jamais.</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>Je mange des bonbons.</div><LignesModele n={2} />
      </Exo>
      <Defi>Écris une phrase <b>impérative</b> (un ordre) à la forme <b>négative</b>.</Defi>
    </FicheModele>
  );
}

/* ======================================================================
 * ÉVALUATION — types ET formes de phrases (mardi, grille LSU).
 * ==================================================================== */
function ExoEval({ n, consigne, children }: { n: number; consigne: React.ReactNode; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: "2mm" }}>
      <div style={{ fontSize: "13.5px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}><span style={{ fontWeight: 800 }}>{n}.</span> <span style={{ textDecoration: "underline", textUnderlineOffset: "2px" }}>{consigne}</span></div>
      <div style={{ marginTop: "1mm", paddingLeft: "4mm" }}>{children}</div>
    </div>
  );
}

export function EvalTypesFormesCE1() {
  return (
    <EvalFrame titre="Types et formes de phrases" niveau="CE1" duree="~20 min">
      <ExoEval n={1} consigne="Mets le bon point à la fin : .  ?  !">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 2 }}>a) Le soleil brille ____ &nbsp;&nbsp; b) As-tu bien dormi ____<br />c) Quelle chance ____ &nbsp;&nbsp; d) Ferme la porte ____</div>
      </ExoEval>
      <ExoEval n={2} consigne="Écris D (déclarative), I (interrogative) ou E (exclamative).">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.9 }}>___ Tu as un chien. &nbsp;&nbsp; ___ Est-ce que tu as un chien ? &nbsp;&nbsp; ___ Comme ton chien est mignon !</div>
      </ExoEval>
      <ExoEval n={3} consigne="Colorie en vert si la phrase dit OUI (affirmative), en rouge si elle dit NON (négative).">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.9 }}>a) Je range mes jouets. &nbsp; b) Tu ne cours pas. &nbsp; c) Il n'aime pas les choux.</div>
      </ExoEval>
      <ExoEval n={4} consigne="Transforme à la forme négative (ne … pas).">
        <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>a) Le chien dort.</div>
        <div style={{ borderBottom: "1.6px solid #9aa4b2", height: "7mm", margin: "1mm 0" }} />
        <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>b) Je mange une pomme.</div>
        <div style={{ borderBottom: "1.6px solid #9aa4b2", height: "7mm", margin: "1mm 0" }} />
      </ExoEval>
      <ExoEval n={5} consigne="Écris une phrase qui pose une question (avec un ?).">
        <div style={{ borderBottom: "1.6px solid #9aa4b2", height: "8mm", marginTop: "1mm" }} />
      </ExoEval>
      <GrilleLSU competences={["Reconnaître le type (mettre le bon point final)", "Distinguer déclarative / interrogative / exclamative", "Reconnaître la forme (affirmative / négative)", "Transformer une phrase à la forme négative", "Produire une phrase d'un type demandé"]} />
    </EvalFrame>
  );
}

export function EvalTypesFormesCE2() {
  return (
    <EvalFrame titre="Types et formes de phrases" niveau="CE2" duree="~20 min">
      <ExoEval n={1} consigne="Écris le type de chaque phrase : déclarative, interrogative, exclamative ou impérative.">
        <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 1.8 }}>a) Range ta chambre. → …………………<br />b) Quel beau jardin ! → …………………<br />c) Est-ce que tu viens ? → …………………<br />d) Nous partons en voyage. → …………………</div>
      </ExoEval>
      <ExoEval n={2} consigne="Mets le bon point final.">
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 1.9 }}>a) Où habites-tu ____ &nbsp;&nbsp; b) Comme il fait froid ____ &nbsp;&nbsp; c) Le train arrive à midi ____</div>
      </ExoEval>
      <ExoEval n={3} consigne="Écris A (affirmative) ou N (négative).">
        <div style={{ fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.8 }}>___ Je comprends. &nbsp; ___ Tu n'as jamais menti. &nbsp; ___ Il ne reste plus rien. &nbsp; ___ Léa chante.</div>
      </ExoEval>
      <ExoEval n={4} consigne="Transforme à la forme négative, puis à la forme affirmative.">
        <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>a) Les élèves écoutent le maître. (négative)</div>
        <div style={{ borderBottom: "1.6px solid #9aa4b2", height: "7mm", margin: "1mm 0" }} />
        <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>b) Je ne joue pas dehors. (affirmative)</div>
        <div style={{ borderBottom: "1.6px solid #9aa4b2", height: "7mm", margin: "1mm 0" }} />
      </ExoEval>
      <ExoEval n={5} consigne="Transforme cette phrase déclarative en interrogative, puis en exclamative.">
        <div style={{ fontFamily: CURSIVE, fontSize: "16px" }}>Tu as gagné la course.</div>
        <div style={{ borderBottom: "1.6px solid #9aa4b2", height: "7mm", margin: "1mm 0" }} />
        <div style={{ borderBottom: "1.6px solid #9aa4b2", height: "7mm", margin: "1mm 0" }} />
      </ExoEval>
      <ExoEval n={6} consigne="Écris une phrase impérative (un ordre).">
        <div style={{ borderBottom: "1.6px solid #9aa4b2", height: "8mm", marginTop: "1mm" }} />
      </ExoEval>
      <GrilleLSU competences={["Identifier les 4 types de phrases", "Mettre le point final qui convient", "Reconnaître la forme (affirmative / négative)", "Transformer une phrase (forme négative / affirmative)", "Transformer le type d'une phrase", "Produire une phrase d'un type demandé"]} />
    </EvalFrame>
  );
}
