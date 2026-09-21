/**
 * Diaporama d'anglais — « Let's discover the USA! » (séance 1)
 * -----------------------------------------------------------
 * Slideshow projetable et interactif (cartes à révéler) : découverte des USA,
 * mots transparents, puis attention aux mots qui NE se ressemblent PAS.
 * S'ouvre dans l'aperçu (loupe) de la séance d'anglais ; bouton plein écran.
 * Pictogrammes maison (aucune image externe).
 */
import { useRef, useState } from "react";
import { Picto } from "./pictos";
import { WikiImage } from "./WikiImage";
import { requestFullscreen } from "../lib/board";

const BLEU = "#1d4ed8";
const ROUGE = "#dc2626";

const ETAPES = ["USA", "Welcome", "Transparents", "Attention", "Bravo"];

const TRANSPARENTS = [
  { name: "taxi", en: "a taxi", fr: "un taxi" },
  { name: "pizza", en: "a pizza", fr: "une pizza" },
  { name: "burger", en: "a hamburger", fr: "un hamburger" },
  { name: "banane", en: "a banana", fr: "une banane" },
  { name: "tomate", en: "a tomato", fr: "une tomate" },
  { name: "smartphone", en: "a telephone", fr: "un téléphone" },
];
const DIFFERENTS = [
  { name: "chien", en: "a dog", fr: "un chien" },
  { name: "chat", en: "a cat", fr: "un chat" },
  { name: "maison", en: "a house", fr: "une maison" },
  { name: "pomme", en: "an apple", fr: "une pomme" },
  { name: "goutte", en: "water", fr: "de l'eau" },
  { name: "livre", en: "a book", fr: "un livre" },
];

function RevealCard({ name, en, fr, accent }: { name: string; en: string; fr: string; accent: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      className="flex flex-col items-center gap-1 rounded-2xl border-2 bg-white p-3 transition hover:scale-105"
      style={{ borderColor: accent }}
      title="Cliquer pour révéler"
    >
      <Picto name={name} size={64} />
      <span className="text-lg font-extrabold" style={{ color: accent }}>{en}</span>
      <span className={`text-base font-semibold ${on ? "" : "opacity-0"}`} style={{ color: "#334155" }}>
        {on ? fr : "?"}
      </span>
    </button>
  );
}

export function AnglaisDiaporama() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ETAPES.length - 1;
  const next = () => setI((n) => Math.min(last, n + 1));
  const prev = () => setI((n) => Math.max(0, n - 1));

  return (
    <div ref={ref} className="flex w-[92vw] max-w-[900px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      {/* Bandeau drapeau */}
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: BLEU }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">English · Let's discover the USA!</span>
        <div className="ml-2 flex gap-1.5">
          {ETAPES.map((t, k) => (
            <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full"
              style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />
          ))}
        </div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>

      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full text-center">
            <div className="mx-auto mb-4 max-w-2xl">
              <WikiImage title="Statue de la Liberté" alt="la statue de la Liberté" accent={BLEU} height="clamp(200px, 40vh, 380px)" />
            </div>
            <h1 className="text-5xl font-extrabold" style={{ color: BLEU }}>Let's discover the USA!</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-500">On découvre l'anglais avec les États-Unis</p>
            <div className="mx-auto mt-4 flex h-4 w-56 overflow-hidden rounded-full">
              {[ROUGE, "#fff", BLEU].map((c) => <div key={c} className="flex-1" style={{ background: c, border: c === "#fff" ? "1px solid #e5e7eb" : "none" }} />)}
            </div>
          </div>
        )}

        {i === 1 && (
          <div className="w-full text-center">
            <h2 className="mb-6 text-4xl font-extrabold" style={{ color: ROUGE }}>Welcome to the USA!</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                { title: "Statue de la Liberté", t: "the Statue of Liberty" },
                { title: "Taxis de New York", t: "a yellow taxi" },
                { title: "Empire State Building", t: "the big buildings" },
              ].map((c) => (
                <div key={c.title} className="flex flex-col items-center gap-2 rounded-2xl border-2 p-3" style={{ borderColor: BLEU }}>
                  <WikiImage title={c.title} alt={c.t} accent={BLEU} height="clamp(150px, 26vh, 240px)" />
                  <span className="text-lg font-bold" style={{ color: BLEU }}>{c.t}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-stone-400">Photos : Wikipédia / Wikimedia Commons (chargées en ligne).</p>
          </div>
        )}

        {i === 2 && (
          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: BLEU }}>Transparent words!</h2>
            <p className="mt-1 text-xl text-stone-500">Ils ressemblent au français. Devine, puis clique pour vérifier.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {TRANSPARENTS.map((w) => <RevealCard key={w.en} {...w} accent={BLEU} />)}
            </div>
          </div>
        )}

        {i === 3 && (
          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: ROUGE }}>Attention !</h2>
            <p className="mt-1 text-xl text-stone-500">Ces mots ne se ressemblent PAS du tout : il faut les apprendre.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {DIFFERENTS.map((w) => <RevealCard key={w.en} {...w} accent={ROUGE} />)}
            </div>
          </div>
        )}

        {i === 4 && (
          <div className="text-center">
            <div className="mb-4 flex justify-center"><Picto name="sourire" size={110} /></div>
            <h1 className="text-5xl font-extrabold" style={{ color: BLEU }}>Well done! Bravo !</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">Certains mots se ressemblent… d'autres non !</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={prev} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: BLEU, color: BLEU }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ETAPES.length} · {ETAPES[i]}</span>
        <button onClick={next} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: BLEU }}>▶</button>
      </div>
    </div>
  );
}

/* =============== Diaporama « Action verbs! » (verbes d'action, jeu du mime) =============== */

const VERT = "#16a34a";
const AV_ETAPES = ["Action verbs", "Watch & repeat (1)", "Watch & repeat (2)", "Let's mime!", "Well done"];

const ecoleCursive = "'Borel','Comic Neue',cursive";

/** Les 10 verbes d'action : image (Wikimedia) + anglais + français + phrase. */
const ACTION_VERBS: { wiki: string; en: string; fr: string; phrase: string }[] = [
  { wiki: "Course à pied", en: "run", fr: "courir", phrase: "I run" },
  { wiki: "Saut", en: "jump", fr: "sauter", phrase: "I jump" },
  { wiki: "Natation", en: "swim", fr: "nager", phrase: "I swim" },
  { wiki: "Danse", en: "dance", fr: "danser", phrase: "I dance" },
  { wiki: "Chant", en: "sing", fr: "chanter", phrase: "I sing" },
  { wiki: "Applaudissement", en: "clap", fr: "taper des mains", phrase: "I clap" },
  { wiki: "Repas", en: "eat", fr: "manger", phrase: "I eat" },
  { wiki: "Boisson", en: "drink", fr: "boire", phrase: "I drink" },
  { wiki: "Sommeil", en: "sleep", fr: "dormir", phrase: "I sleep" },
  { wiki: "Marche à pied", en: "walk", fr: "marcher", phrase: "I walk" },
];

function VerbCard({ wiki, en, fr }: { wiki: string; en: string; fr: string; phrase: string }) {
  const [on, setOn] = useState(false);
  return (
    <button
      onClick={() => setOn((v) => !v)}
      className="flex flex-col items-center gap-1 rounded-2xl border-2 bg-white p-2 transition hover:scale-105"
      style={{ borderColor: VERT }}
      title="Cliquer pour révéler"
    >
      <div className="w-full"><WikiImage title={wiki} alt={en} accent={VERT} height="clamp(90px,16vh,150px)" /></div>
      <span className="text-xl font-extrabold" style={{ color: VERT }}>{en}</span>
      <span className={`text-base font-semibold ${on ? "" : "opacity-0"}`} style={{ color: "#334155" }}>
        {on ? fr : "?"}
      </span>
    </button>
  );
}

export function AnglaisActionVerbsDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = AV_ETAPES.length - 1;
  const next = () => setI((n) => Math.min(last, n + 1));
  const prev = () => setI((n) => Math.max(0, n - 1));

  return (
    <div ref={ref} className="flex w-[92vw] max-w-[900px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: VERT }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">English · Action verbs!</span>
        <div className="ml-2 flex gap-1.5">
          {AV_ETAPES.map((t, k) => (
            <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full"
              style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />
          ))}
        </div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>

      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="mb-4 text-7xl">🏃 🦘 💃</div>
            <h1 className="text-5xl font-extrabold" style={{ color: VERT }}>Action verbs!</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-500">Les verbes d'action : ce qu'on FAIT.</p>
            <p className="mt-4 text-xl text-stone-500">Watch, listen, repeat… and mime!</p>
          </div>
        )}

        {(i === 1 || i === 2) && (
          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: VERT }}>Watch and repeat!</h2>
            <p className="mt-1 text-xl text-stone-500">Je dis et je mime, tu répètes. Clique pour la traduction.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-5">
              {(i === 1 ? ACTION_VERBS.slice(0, 5) : ACTION_VERBS.slice(5)).map((w) => (
                <VerbCard key={w.en} {...w} />
              ))}
            </div>
          </div>
        )}

        {i === 3 && (
          <div className="w-full max-w-2xl text-center">
            <div className="mb-3 text-6xl">🎭</div>
            <h2 className="text-4xl font-extrabold" style={{ color: VERT }}>Let's mime!</h2>
            <div className="mt-5 space-y-3 text-left text-xl text-stone-700">
              <p>1️⃣ Un élève passe au tableau et pioche un verbe.</p>
              <p>2️⃣ Il le <b>mime</b> (sans parler !).</p>
              <p>3️⃣ Les autres devinent en anglais : « <b>Run!</b> », « <b>Jump!</b> »…</p>
              <p>4️⃣ Bonne réponse → c'est à toi de mimer !</p>
            </div>
          </div>
        )}

        {i === 4 && (
          <div className="text-center">
            <div className="mb-4 text-7xl">🎉</div>
            <h1 className="text-5xl font-extrabold" style={{ color: VERT }}>Well done! Bravo !</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">On apprend ses verbes d'action pour la semaine prochaine.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={prev} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: VERT, color: VERT }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{AV_ETAPES.length} · {AV_ETAPES[i]}</span>
        <button onClick={next} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: VERT }}>▶</button>
      </div>
    </div>
  );
}

/* Leçon illustrée « Action verbs » (A4) — cursive + vraies photos (Wikimedia). */
export function AnglaisVerbsLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "34px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: VERT, fontFamily: "'Caveat','Comic Neue',cursive" }}>Action verbs — les verbes d'action</h1>
        <p style={{ textAlign: "center", fontSize: "16px", margin: "0 0 4mm", color: "#555" }}>Un verbe d'action dit ce qu'on FAIT. Je les apprends pour la semaine prochaine.</p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm", flex: 1, alignContent: "start" }}>
          {ACTION_VERBS.map((v) => (
            <div key={v.en} style={{ display: "flex", alignItems: "center", gap: "3mm", border: `2px solid ${VERT}`, borderRadius: "10px", padding: "2mm 3mm" }}>
              <div style={{ width: "22mm", flexShrink: 0 }}><WikiImage title={v.wiki} alt={v.en} accent={VERT} height="16mm" /></div>
              <div>
                <div style={{ fontSize: "26px", color: VERT, fontFamily: ecoleCursive, lineHeight: 1.1 }}>{v.en}</div>
                <div style={{ fontSize: "13px", color: "#555" }}>= {v.fr}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ background: "#f0fdf4", border: "1.5px solid #bbf7d0", borderRadius: "8px", padding: "3mm 4mm", marginTop: "3mm", fontSize: "14px", textAlign: "center" }}>
          <b>Let's mime!</b> Un élève mime un verbe, les autres devinent en anglais : « Run! », « Jump! »…
        </div>
        <p style={{ fontSize: "10px", color: "#94a3b8", textAlign: "center", marginTop: "2mm" }}>Photos : Wikimedia Commons (licences libres, chargées en ligne).</p>
      </div>
    </div>
  );
}

/* Cartes « Action verbs » à découper (A4) : image + phrase « I run ». */
export function AnglaisVerbsCartes() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "8mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "22px", margin: "0 0 3mm", textAlign: "center", fontWeight: 800, color: VERT }}>Action verbs — cartes à découper ✂️</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4mm" }}>
        {ACTION_VERBS.map((v) => (
          <div key={v.en} style={{ border: `2px dashed ${VERT}`, borderRadius: "10px", padding: "3mm", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5mm", height: "48mm", boxSizing: "border-box" }}>
            <div style={{ width: "100%", flex: 1, minHeight: 0 }}><WikiImage title={v.wiki} alt={v.en} accent={VERT} height="26mm" /></div>
            <div style={{ fontSize: "30px", color: VERT, fontFamily: ecoleCursive, lineHeight: 1 }}>{v.phrase}</div>
            <div style={{ fontSize: "12px", color: "#64748b" }}>({v.fr})</div>
          </div>
        ))}
      </div>
      <p style={{ fontSize: "10px", color: "#94a3b8", textAlign: "center", marginTop: "3mm" }}>Photos : Wikimedia Commons (licences libres, chargées en ligne).</p>
    </div>
  );
}
