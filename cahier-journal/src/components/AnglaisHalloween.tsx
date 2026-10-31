/**
 * Anglais — Nouvelle séquence « Happy Halloween » (P1, de saison).
 * Lexique illustré (vraies photos libres de droits) + phrases rituelles, avec un
 * PROJET final sympa : fabriquer « My Halloween card » + une petite grille
 * d'évaluation (non grammaticale). Diaporama + leçon + flashcards + fiche projet.
 */
import { useRef, useState } from "react";
import { WikiImage } from "./WikiImage";
import { requestFullscreen } from "../lib/board";

const ORA = "#ea580c"; const PUR = "#6b21a8";

export interface HalloWord { en: string; fr: string; wiki: string; }
export const HALLO_VOCAB: HalloWord[] = [
  { en: "a pumpkin", fr: "une citrouille", wiki: "Jack-o'-lantern" },
  { en: "a ghost", fr: "un fantôme", wiki: "Fantôme" },
  { en: "a witch", fr: "une sorcière", wiki: "Sorcière" },
  { en: "a vampire", fr: "un vampire", wiki: "Vampire" },
  { en: "a monster", fr: "un monstre", wiki: "Monstre" },
  { en: "a spider", fr: "une araignée", wiki: "Araignée" },
  { en: "a bat", fr: "une chauve-souris", wiki: "Chauve-souris" },
  { en: "a black cat", fr: "un chat noir", wiki: "Chat noir" },
];

function ImgReveal({ w }: { w: HalloWord }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="flex flex-col items-center gap-1 rounded-2xl border-2 bg-white p-2 transition hover:scale-[1.03]" style={{ borderColor: ORA }}>
      <WikiImage title={w.wiki} alt={w.fr} accent={ORA} height="clamp(90px, 16vh, 150px)" />
      <span className={`text-xl font-extrabold ${on ? "" : "opacity-0"}`} style={{ color: PUR }}>{on ? w.en : "?"}</span>
      <span className="text-xs text-stone-500">{on ? w.fr : "clique"}</span>
    </button>
  );
}

const ETAPES = ["Happy Halloween!", "The words (1)", "The words (2)", "Trick or treat!", "Our project", "Let's say it!"];
export function HalloweenDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: ORA }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">English · Happy Halloween</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-3xl text-center">
            <div className="text-6xl">🎃👻🦇</div>
            <h1 className="mt-2 text-5xl font-extrabold" style={{ color: ORA }}>Happy Halloween!</h1>
            <div className="mx-auto mt-4 max-w-md"><WikiImage title="Halloween" alt="Halloween" accent={ORA} height="clamp(140px,26vh,240px)" /></div>
            <p className="mt-3 text-xl text-stone-600">On fête Halloween le <b>31 octobre</b>, surtout au <b>Royaume-Uni</b> et aux <b>USA</b>. Les enfants se déguisent et disent « <b>Trick or treat!</b> ».</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-3 text-center text-4xl font-extrabold" style={{ color: ORA }}>The words</h2>
            <div className="grid gap-3 sm:grid-cols-4">{HALLO_VOCAB.slice(0, 4).map((w) => <ImgReveal key={w.en} w={w} />)}</div>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-3 text-center text-4xl font-extrabold" style={{ color: ORA }}>The words</h2>
            <div className="grid gap-3 sm:grid-cols-4">{HALLO_VOCAB.slice(4).map((w) => <ImgReveal key={w.en} w={w} />)}</div>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: PUR }}>The magic words</h2>
            <div className="mx-auto mt-5 flex max-w-xl flex-col gap-3">
              <div className="rounded-2xl border-4 px-5 py-3 text-3xl font-bold" style={{ borderColor: ORA, color: "#334155" }}>Trick or treat! 🍬</div>
              <div className="rounded-2xl border-4 px-5 py-3 text-3xl font-bold" style={{ borderColor: PUR, color: "#334155" }}>Happy Halloween! 🎃</div>
              <div className="rounded-2xl border-4 px-5 py-3 text-3xl font-bold" style={{ borderColor: "#334155", color: "#334155" }}>Boo! 👻</div>
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="w-full max-w-3xl text-center">
            <div className="text-6xl">🖍️✂️🎃</div>
            <h2 className="mt-2 text-4xl font-extrabold" style={{ color: ORA }}>Our project: a Halloween card</h2>
            <p className="mx-auto mt-3 max-w-xl text-xl text-stone-600">À la fin de la séquence, chacun fabrique sa <b>carte d'Halloween</b> : un dessin + les <b>mots anglais</b> + « <b>Happy Halloween!</b> ». On s'évalue avec une petite grille. 🎉</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <h1 className="text-4xl font-extrabold" style={{ color: ORA }}>Let's say it!</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">a pumpkin · a ghost · a witch · a vampire</p>
            <p className="text-2xl font-semibold text-stone-600">a monster · a spider · a bat · a black cat</p>
            <p className="mt-3 text-3xl font-bold" style={{ color: PUR }}>Happy Halloween! 🎃</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: ORA, color: ORA }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ETAPES.length} · {ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: ORA }}>▶</button>
      </div>
    </div>
  );
}

/* ===== Diaporama qui LANCE le projet « affiche d'Halloween » ===== */
const PETAPES = ["Our project 🎃", "Draw + write", "Use the words", "Make it scary!", "Let's go!"];
export function HalloweenAfficheDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = PETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: PUR }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">English · My scary Halloween poster</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{PETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="text-7xl">🎃👻🕷️</div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: ORA }}>Our project: a scary Halloween poster!</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Je fabrique une <b>affiche d'Halloween</b> qui fait <b>peur</b>… en anglais&nbsp;!</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: PUR }}>Je dessine + j'écris le mot</h2>
            <div className="mt-5 inline-flex items-center gap-4 rounded-3xl border-4 bg-orange-50 px-6 py-4" style={{ borderColor: ORA }}>
              <span className="text-6xl">🎃</span>
              <span className="text-4xl font-extrabold" style={{ color: ORA }}>→ a pumpkin</span>
            </div>
            <p className="mt-4 text-2xl text-stone-600">Je dessine une citrouille, puis j'écris <b>pumpkin</b> à côté.</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="mb-4 text-4xl font-extrabold" style={{ color: PUR }}>Use these words</h2>
            <div className="grid grid-cols-2 gap-2 text-2xl font-bold sm:grid-cols-4" style={{ color: "#111" }}>
              {HALLO_VOCAB.map((w) => <div key={w.en} className="rounded-xl border-2 bg-white px-2 py-2" style={{ borderColor: ORA }}>{w.en.replace("a ", "")}</div>)}
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: "#dc2626" }}>Make it SCARY! 👻</h2>
            <div className="mx-auto mt-5 max-w-xl space-y-2 text-left text-2xl font-semibold text-stone-700">
              <div>✅ au moins <b>5 mots anglais</b> bien écrits</div>
              <div>✅ un <b>dessin</b> pour chaque mot</div>
              <div>✅ des <b>couleurs</b> et… ça fait <b>peur</b>&nbsp;!</div>
              <div>✅ un titre : <b>Happy Halloween!</b></div>
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="text-6xl">🖍️🎃🦇</div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: ORA }}>Let's go!</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Au travail&nbsp;! (le maître met une petite musique d'Halloween 🎵)</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: PUR, color: PUR }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{PETAPES.length} · {PETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: PUR }}>▶</button>
      </div>
    </div>
  );
}

export function HalloweenLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "40px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: ORA, fontFamily: "'Caveat','Comic Neue',cursive" }}>Happy Halloween! 🎃</h1>
        <p style={{ textAlign: "center", fontSize: "15px", margin: "0 auto 4mm", maxWidth: "160mm" }}>Halloween, c'est le <b>31 octobre</b> (Royaume-Uni & USA). On dit « <b>Trick or treat!</b> » et « <b>Happy Halloween!</b> ».</p>
        <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "4mm", alignContent: "space-around" }}>
          {HALLO_VOCAB.map((w) => (
            <div key={w.en} style={{ border: `2.5px solid ${ORA}`, borderRadius: "4mm", padding: "2mm", textAlign: "center" }}>
              <div style={{ width: "34mm", margin: "0 auto" }}><WikiImage title={w.wiki} alt={w.fr} accent={ORA} height="26mm" /></div>
              <div style={{ fontSize: "17px", fontWeight: 800, color: PUR }}>{w.en}</div>
              <div style={{ fontSize: "12px", color: "#555" }}>{w.fr}</div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: "15px", fontFamily: "'Caveat','Comic Neue',cursive", marginTop: "3mm" }}>Projet : je fabrique <b>ma carte d'Halloween</b> en anglais !</p>
      </div>
    </div>
  );
}

export function HalloweenFlashcards() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "8mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ minHeight: "283mm" }}>
        <h1 style={{ fontSize: "22px", margin: "0 0 3mm", fontWeight: 700, textAlign: "center" }}>Halloween — flashcards à découper</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4mm" }}>
          {HALLO_VOCAB.map((w) => (
            <div key={w.en} style={{ border: "2px dashed #111", borderRadius: "3mm", padding: "3mm", display: "flex", alignItems: "center", gap: "4mm", minHeight: "32mm" }}>
              <div style={{ width: "30mm", flexShrink: 0 }}><WikiImage title={w.wiki} alt={w.fr} accent={ORA} height="26mm" /></div>
              <div><div style={{ fontSize: "22px", fontWeight: 800, color: PUR }}>{w.en}</div><div style={{ fontSize: "13px", color: "#555" }}>{w.fr}</div></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function HalloweenProjetCarte() {
  const grille = [
    "Je connais et je dis les mots d'Halloween.",
    "J'ai dessiné / décoré ma carte.",
    "J'ai écrit les mots en anglais (sans erreur de copie).",
    "J'ai écrit « Happy Halloween! ».",
    "Je présente ma carte à l'oral.",
  ];
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "32px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: ORA, fontFamily: "'Caveat','Comic Neue',cursive" }}>My Halloween card — mon projet</h1>
        <p style={{ fontSize: "14px", margin: "0 0 3mm" }}><b>But :</b> fabriquer une carte d'Halloween en anglais. <b>Étapes :</b> 1) je dessine un personnage (pumpkin, ghost, witch…) · 2) j'écris son nom en anglais · 3) j'écris « Happy Halloween! » · 4) je la présente.</p>
        <div style={{ flex: 1, border: "2px dashed #94a3b8", borderRadius: "4mm", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", fontSize: "16px" }}>
          ✍️ Ici, je dessine et j'écris ma carte (ou je colle ma carte faite à part).
        </div>
        <div style={{ marginTop: "4mm", border: `2.5px solid ${PUR}`, borderRadius: "4mm", padding: "3mm 5mm" }}>
          <div style={{ fontSize: "18px", fontWeight: 800, color: PUR, fontFamily: "'Caveat','Comic Neue',cursive", marginBottom: "1mm" }}>Ma grille d'évaluation</div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px" }}>
            <thead><tr>
              <th style={{ border: "1px solid #94a3b8", padding: "1.5mm", textAlign: "left" }}>Je réussis à…</th>
              <th style={{ border: "1px solid #94a3b8", padding: "1.5mm", width: "16mm" }}>😀</th>
              <th style={{ border: "1px solid #94a3b8", padding: "1.5mm", width: "16mm" }}>🙂</th>
              <th style={{ border: "1px solid #94a3b8", padding: "1.5mm", width: "16mm" }}>😕</th>
            </tr></thead>
            <tbody>
              {grille.map((g) => (
                <tr key={g}><td style={{ border: "1px solid #94a3b8", padding: "1.5mm" }}>{g}</td>
                  <td style={{ border: "1px solid #94a3b8" }} /><td style={{ border: "1px solid #94a3b8" }} /><td style={{ border: "1px solid #94a3b8" }} /></tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
