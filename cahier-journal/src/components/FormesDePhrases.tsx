/**
 * Français — Les FORMES de phrases (affirmative / négative). Suite logique des
 * types de phrases. Diaporama de découverte + leçon imagée (à coller) + fiches
 * d'exercices au format « Je m'entraîne » (une CE1, une CE2).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { FicheModele, SectionBar, Exo, Choix, ListeIntrus, LignesModele, Defi } from "./ficheModele";

const FR = "#1d4ed8";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

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
        {i === 0 && (
          <div className="text-center">
            <div className="text-6xl">✅ ❌</div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: FR }}>Les formes de phrases</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Une phrase peut dire <b>OUI</b>… ou dire <b>NON</b> !</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>La forme affirmative ✅</h2>
            <p className="mt-4 text-3xl font-bold text-stone-800">« J'aime les pommes. »</p>
            <p className="mt-3 text-2xl text-stone-600">Elle dit <b>OUI</b> : elle affirme quelque chose.</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>La forme négative ❌</h2>
            <p className="mt-4 text-3xl font-bold text-stone-800">« Je <span style={{ color: "#dc2626" }}>n'</span>aime <span style={{ color: "#dc2626" }}>pas</span> les pommes. »</p>
            <p className="mt-3 text-2xl text-stone-600">Elle dit <b>NON</b> : on utilise <b style={{ color: "#dc2626" }}>ne … pas</b>.</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>On encadre le verbe</h2>
            <p className="mt-4 text-3xl font-bold">Le chat <span style={{ color: "#dc2626" }}>ne</span> <u>dort</u> <span style={{ color: "#dc2626" }}>pas</span>.</p>
            <p className="mt-4 text-2xl text-stone-600"><b style={{ color: "#dc2626" }}>ne … pas</b> · <b style={{ color: "#dc2626" }}>n' … pas</b> · ne … <b>plus</b> · ne … <b>jamais</b> · ne … <b>rien</b></p>
            <p className="mt-2 text-xl text-stone-500">Les deux petits mots se mettent <b>autour du verbe</b>.</p>
          </div>
        )}
        {i === 4 && (
          <div className="w-full max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>Je transforme</h2>
            <div className="mt-4 space-y-3 text-2xl">
              <p>✅ Je mange à la cantine. &nbsp;→&nbsp; ❌ Je <b style={{ color: "#dc2626" }}>ne</b> mange <b style={{ color: "#dc2626" }}>pas</b> à la cantine.</p>
              <p>❌ Tu n'écoutes pas. &nbsp;→&nbsp; ✅ Tu écoutes.</p>
            </div>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">✅❌</div>
            <h1 className="text-4xl font-extrabold" style={{ color: FR }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">La phrase <b>affirmative</b> dit oui. La phrase <b>négative</b> dit non, avec <b style={{ color: "#dc2626" }}>ne … pas</b> autour du verbe.</p>
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

export function FormesPhrasesLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "38px", margin: "0 0 3mm", textAlign: "center", fontWeight: 700, color: FR, fontFamily: CURSIVE }}>Les formes de phrases</h1>
      <div style={{ display: "flex", gap: "5mm" }}>
        <div style={{ flex: 1, border: `2.5px solid #16a34a`, borderRadius: "4mm", padding: "3mm", textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>✅</div>
          <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "16px", color: "#16a34a" }}>La forme affirmative</div>
          <div style={{ fontFamily: CURSIVE, fontSize: "19px", marginTop: "1mm" }}>Elle dit <b>oui</b>.</div>
          <div style={{ fontFamily: CURSIVE, fontSize: "19px" }}>« Le chat dort. »</div>
        </div>
        <div style={{ flex: 1, border: `2.5px solid #dc2626`, borderRadius: "4mm", padding: "3mm", textAlign: "center" }}>
          <div style={{ fontSize: "40px" }}>❌</div>
          <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "16px", color: "#dc2626" }}>La forme négative</div>
          <div style={{ fontFamily: CURSIVE, fontSize: "19px", marginTop: "1mm" }}>Elle dit <b>non</b>.</div>
          <div style={{ fontFamily: CURSIVE, fontSize: "19px" }}>« Le chat <b style={{ color: "#dc2626" }}>ne</b> dort <b style={{ color: "#dc2626" }}>pas</b>. »</div>
        </div>
      </div>
      <div style={{ marginTop: "4mm", border: `2px dashed ${FR}`, borderRadius: "3mm", padding: "3mm 5mm", fontFamily: CURSIVE, fontSize: "19px", textAlign: "center", background: "#eff6ff" }}>
        Pour dire non, j'encadre le verbe : <b style={{ color: "#dc2626" }}>ne … pas</b> (aussi : ne … <b>plus</b>, ne … <b>jamais</b>).
      </div>
    </div>
  );
}

/* ---- Fiche d'exercices CE1 (format « Je m'entraîne ») ---- */
export function FicheFormesCE1() {
  return (
    <FicheModele matiere="Grammaire" titre="Les formes de phrases" couleur={FR} dotActif={1} page="Les formes de phrases · CE1">
      <SectionBar couleur={FR}>Affirmative ou négative ?</SectionBar>
      <Exo n={1} couleur={FR} consigne={<><b>Colorie</b> en vert si la phrase dit OUI (affirmative), en rouge si elle dit NON (négative).</>}>
        <div style={{ fontSize: "14px", lineHeight: 2, fontFamily: CURSIVE }}>
          a) Je joue dans la cour. &nbsp;&nbsp; b) Tu ne cours pas. <br />
          c) Le chien aboie. &nbsp;&nbsp; d) Je n'aime pas les épinards.
        </div>
      </Exo>
      <Exo n={2} couleur={FR} consigne={<><b>Entoure</b> les deux petits mots de la négation (ne … pas).</>}>
        <div style={{ fontSize: "14px", lineHeight: 2, fontFamily: CURSIVE }}>
          a) Je ne mange pas. &nbsp;&nbsp; b) Il n'écoute pas. &nbsp;&nbsp; c) Nous ne dormons pas.
        </div>
      </Exo>
      <SectionBar couleur={FR}>Je transforme</SectionBar>
      <Exo n={3} couleur={FR} consigne={<><b>Transforme</b> à la forme négative (ajoute ne … pas).</>}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "12px", background: "#eef6ee", border: "1px solid #cfe3cf", borderRadius: "4px", padding: "0.5mm 3mm", width: "fit-content", marginBottom: "1mm" }}>Exemple : Je cours. → Je <b>ne</b> cours <b>pas</b>.</div>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>a) Le chat dort.</div>
        <LignesModele n={1} />
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>b) Tu manges une pomme.</div>
        <LignesModele n={1} />
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

/* ---- Fiche d'exercices CE2 (format « Je m'entraîne », plus difficile) ---- */
export function FicheFormesCE2() {
  return (
    <FicheModele matiere="Grammaire" titre="Les formes de phrases" couleur={FR} dotActif={2} page="Les formes de phrases · CE2">
      <SectionBar couleur={FR}>Reconnaître la forme</SectionBar>
      <Exo n={1} couleur={FR} consigne={<><b>Écris</b> A (affirmative) ou N (négative) devant chaque phrase.</>}>
        <div style={{ fontSize: "13px", lineHeight: 1.9, fontFamily: CURSIVE }}>
          ___ Nous partons en vacances. &nbsp; ___ Je ne comprends pas.<br />
          ___ Tu n'as jamais menti. &nbsp; ___ Léa lit un livre. &nbsp; ___ Il ne reste plus de pain.
        </div>
      </Exo>
      <Exo n={2} couleur={FR} consigne={<><b>Barre</b> l'intrus : la phrase qui n'est PAS à la forme négative.</>}>
        <ListeIntrus mots={["Je ne sais pas.", "Il ne vient plus.", "Tu chantes bien.", "Elle n'écoute jamais."]} />
      </Exo>
      <SectionBar couleur={FR}>Je transforme</SectionBar>
      <Exo n={3} couleur={FR} consigne={<><b>Transforme</b> à la forme négative (ne … pas).</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>a) Les élèves écoutent la maîtresse.</div>
        <LignesModele n={1} />
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>b) Tu as fini ton travail.</div>
        <LignesModele n={1} />
      </Exo>
      <Exo n={4} couleur={FR} consigne={<><b>Transforme</b> à la forme affirmative.</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>a) Je ne joue pas dehors.</div>
        <LignesModele n={1} />
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>b) Il ne pleut jamais.</div>
        <LignesModele n={1} />
      </Exo>
      <Exo n={5} couleur={FR} consigne={<><b>Récris</b> la phrase avec ne … plus, puis ne … jamais.</>}>
        <div style={{ fontSize: "13px", fontFamily: CURSIVE }}>Je mange des bonbons.</div>
        <LignesModele n={2} />
      </Exo>
      <Defi>Écris deux phrases : une <b>affirmative</b> et sa transformation <b>négative</b>.</Defi>
    </FicheModele>
  );
}
