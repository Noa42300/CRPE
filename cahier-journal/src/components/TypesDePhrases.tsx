/**
 * Français — Les types de phrases (CE1 : déclarative / interrogative / exclamative ;
 * CE2 : + impérative). Diaporama à projeter + leçon à coller (cahier bleu) +
 * GRAND QCM paysage (phrases très courtes) pour habituer les élèves au QCM.
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { LandscapeDoc, PageBreak, Feuille, Col, Trait, Consigne, Exemple, Lines, Defi, CURSIVE } from "./ficheLandscape";
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const FR = "#1d4ed8";
const TYPES = [
  { nom: "déclarative", role: "elle raconte, elle dit quelque chose", point: ".", ex: "Le chat dort sur le canapé.", col: "#2563eb" },
  { nom: "interrogative", role: "elle pose une question", point: "?", ex: "Où est le chat ?", col: "#0d9488" },
  { nom: "exclamative", role: "elle exprime une émotion (joie, surprise…)", point: "!", ex: "Quel beau chat !", col: "#d97706" },
  { nom: "impérative", role: "elle donne un ordre ou un conseil", point: ". ou !", ex: "Caresse le chat.", col: "#7c3aed", ce2: true },
];

function Reveal({ q, a, accent }: { q: string; a: string; accent: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="w-full rounded-2xl border-2 bg-white p-3 text-left transition hover:scale-[1.02]" style={{ borderColor: accent }}>
      <div className="text-lg font-bold" style={{ color: "#334155" }}>{q}</div>
      <div className={`mt-1 text-xl font-extrabold ${on ? "" : "opacity-0"}`} style={{ color: accent }}>{on ? a : "?"}</div>
    </button>
  );
}

const ETAPES = ["La phrase", "Déclarative", "Interrogative", "Exclamative", "Impérative (CE2)", "Quel point ?", "Je retiens"];
export function TypesPhrasesDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ETAPES.length - 1;
  const TypeSlide = ({ t }: { t: typeof TYPES[number] }) => (
    <div className="w-full max-w-3xl text-center">
      <h2 className="text-4xl font-extrabold sm:text-5xl" style={{ color: t.col }}>La phrase {t.nom}</h2>
      <p className="mt-3 text-2xl font-semibold text-stone-600">{t.role}.</p>
      <div className="mx-auto mt-5 max-w-xl rounded-2xl border-4 bg-white px-5 py-4" style={{ borderColor: t.col }}>
        <span className="text-3xl font-bold text-stone-800">{t.ex}</span>
      </div>
      <p className="mt-4 text-2xl">Elle se termine par <span className="text-5xl font-extrabold" style={{ color: t.col }}>{t.point}</span></p>
    </div>
  );
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: FR }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Français · Les types de phrases</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: FR }}>Les types de phrases</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Une phrase porte un <b>message</b>. Selon le message, le <b>point</b> change&nbsp;!</p>
            <div className="mt-5 flex justify-center gap-6 text-6xl font-extrabold">
              <span style={{ color: TYPES[0].col }}>.</span><span style={{ color: TYPES[1].col }}>?</span><span style={{ color: TYPES[2].col }}>!</span>
            </div>
          </div>
        )}
        {i === 1 && <TypeSlide t={TYPES[0]} />}
        {i === 2 && <TypeSlide t={TYPES[1]} />}
        {i === 3 && <TypeSlide t={TYPES[2]} />}
        {i === 4 && <TypeSlide t={TYPES[3]} />}
        {i === 5 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: FR }}>Quel point mettre ?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <Reveal q="Tu as fini ton travail" a="? (question)" accent={FR} />
              <Reveal q="Comme il fait chaud" a="! (émotion)" accent={FR} />
              <Reveal q="Je mange une pomme" a=". (on raconte)" accent={FR} />
              <Reveal q="Range tes affaires" a=". ou ! (ordre)" accent={FR} />
            </div>
          </div>
        )}
        {i === 6 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">. ? !</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: FR }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600"><b>Déclarative</b> → . &nbsp;·&nbsp; <b>Interrogative</b> → ? &nbsp;·&nbsp; <b>Exclamative</b> → !</p>
            <p className="text-2xl font-semibold text-stone-600">(CE2) <b>Impérative</b> → un ordre : . ou !</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: FR, color: FR }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ETAPES.length} · {ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: FR }}>▶</button>
      </div>
    </div>
  );
}

/* ===================== QUIZ À PROJETER (au tableau) ===================== */
type QKey = "decl" | "inter" | "excl" | "imper";
const QOPTS: { key: QKey; label: string; col: string; pt: string }[] = [
  { key: "decl", label: "déclarative", col: "#2563eb", pt: "." },
  { key: "inter", label: "interrogative", col: "#0d9488", pt: "?" },
  { key: "excl", label: "exclamative", col: "#d97706", pt: "!" },
  { key: "imper", label: "impérative", col: "#7c3aed", pt: ". / !" },
];
const QUIZ: { ph: string; rep: QKey }[] = [
  { ph: "Le chien dort dans sa niche", rep: "decl" },
  { ph: "Où as-tu rangé mon cahier", rep: "inter" },
  { ph: "Comme ce gâteau est bon", rep: "excl" },
  { ph: "Range tes affaires", rep: "imper" },
  { ph: "Les oiseaux chantent le matin", rep: "decl" },
  { ph: "Est-ce que tu viens jouer", rep: "inter" },
  { ph: "Quelle belle surprise", rep: "excl" },
  { ph: "Ferme la porte, s'il te plaît", rep: "imper" },
  { ph: "Nous partons à la piscine", rep: "decl" },
  { ph: "As-tu fini ton travail", rep: "inter" },
];

export function TypesPhrasesQuiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<QKey | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const q = QUIZ[i];
  const next = () => { setPicked(null); setI((n) => Math.min(QUIZ.length - 1, n + 1)); };
  const prev = () => { setPicked(null); setI((n) => Math.max(0, n - 1)); };
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: FR }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Quiz · Les types de phrases</span>
        <span className="ml-2 rounded-full bg-white/20 px-3 py-0.5 text-xs font-bold text-white">Question {i + 1}/{QUIZ.length}</span>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 p-6 sm:p-10">
        <div className="text-sm font-bold uppercase tracking-wide text-stone-400">Quel est le type de cette phrase&nbsp;?</div>
        <div className="rounded-3xl border-4 bg-slate-50 px-8 py-6 text-center" style={{ borderColor: FR }}>
          <span className="text-4xl font-extrabold text-stone-800 sm:text-5xl">{q.ph}</span>
          <span className="text-4xl font-extrabold text-stone-300 sm:text-5xl"> …</span>
        </div>
        <div className="grid w-full max-w-3xl grid-cols-2 gap-3">
          {QOPTS.map((o) => {
            const isRep = o.key === q.rep;
            const show = picked !== null;
            const state = !show ? "idle" : isRep ? "good" : o.key === picked ? "bad" : "dim";
            return (
              <button key={o.key} onClick={() => setPicked(o.key)}
                className="rounded-2xl border-4 px-4 py-3 text-2xl font-extrabold transition"
                style={{
                  borderColor: o.col,
                  background: state === "good" ? o.col : state === "bad" ? "#fee2e2" : "#fff",
                  color: state === "good" ? "#fff" : state === "dim" ? "#cbd5e1" : o.col,
                  opacity: state === "dim" ? 0.5 : 1,
                }}>
                {o.label} <span className="font-black">{o.pt}</span>
                {state === "good" && <span> ✓</span>}
              </button>
            );
          })}
        </div>
        <div className="h-6 text-xl font-bold" style={{ color: FR }}>
          {picked !== null && (picked === q.rep ? "Bravo ! 🎉" : `Non : c'est ${QOPTS.find((o) => o.key === q.rep)!.label} (${QOPTS.find((o) => o.key === q.rep)!.pt})`)}
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={prev} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: FR, color: FR }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">Clique une réponse, la bonne s'allume</span>
        <button onClick={next} disabled={i === QUIZ.length - 1} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: FR }}>▶</button>
      </div>
    </div>
  );
}

export function TypesPhrasesLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "38px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: FR, fontFamily: CURSIVE }}>Les types de phrases</h1>
        <p style={{ textAlign: "center", fontSize: "16px", margin: "0 auto 5mm", maxWidth: "160mm" }}>Selon le <b>message</b> de la phrase, le <b>point</b> change.</p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "4mm" }}>
          {TYPES.map((t) => (
            <div key={t.nom} style={{ border: `3px solid ${t.col}`, borderRadius: "5mm", padding: "3mm 5mm", display: "flex", alignItems: "center", gap: "5mm" }}>
              <div style={{ flexShrink: 0, width: "18mm", textAlign: "center" }}>
                <div style={{ fontSize: "42px", fontWeight: 800, color: t.col, lineHeight: 1 }}>{t.point}</div>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "22px", fontWeight: 800, color: t.col, fontFamily: CURSIVE }}>La phrase {t.nom} {t.ce2 ? "(CE2)" : ""}</div>
                <div style={{ fontSize: "14px", color: "#333" }}>{t.role}.</div>
                <div style={{ fontSize: "18px", fontFamily: CURSIVE, color: "#111" }}>{t.ex}</div>
              </div>
            </div>
          ))}
        </div>
        <p style={{ textAlign: "center", fontSize: "16px", fontFamily: CURSIVE, marginTop: "3mm" }}>Mon astuce&nbsp;: je lis la phrase « dans ma tête » et j'écoute le message pour choisir le point.</p>
      </div>
    </div>
  );
}

/* ===================== GRAND QCM (paysage) ===================== */
const QCM = [
  "Le soleil brille.",
  "As-tu froid ?",
  "Quelle belle journée !",
  "Je lis un livre.",
  "Où vas-tu ?",
  "Attention, ça glisse !",
  "Nous jouons dehors.",
  "Tu aimes les pommes ?",
  "Bravo, tu as gagné !",
  "Le train arrive.",
];
export function QcmTypesPhrases() {
  const cols = ["déclarative (.)", "interrogative (?)", "exclamative (!)"];
  return (
    <LandscapeDoc>
      <Feuille titre="QCM — Les types de phrases" sousTitre="Je découvre le QCM : je coche UNE case par phrase">
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: "13px", fontFamily: CONSIGNE_FONT, fontWeight: 700, marginBottom: "2mm", textDecoration: "underline" }}>
            Pour chaque phrase, coche (✗) la case qui correspond au bon type de phrase.
          </div>
          <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: CURSIVE }}>
            <thead>
              <tr>
                <th style={{ border: "1.5px solid #111", padding: "2mm", background: FR, color: "#fff", fontSize: "14px", fontFamily: CONSIGNE_FONT, width: "46%" }}>La phrase</th>
                {cols.map((c) => <th key={c} style={{ border: "1.5px solid #111", padding: "2mm", background: FR, color: "#fff", fontSize: "13px", fontFamily: CONSIGNE_FONT }}>{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {QCM.map((ph, i) => (
                <tr key={i}>
                  <td style={{ border: "1.5px solid #111", padding: "2mm 3mm", fontSize: "19px" }}>{ph}</td>
                  {cols.map((c) => <td key={c} style={{ border: "1.5px solid #111", textAlign: "center", fontSize: "20px" }}>☐</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          <div style={{ marginTop: "3mm", fontSize: "12px", fontFamily: CONSIGNE_FONT, color: "#444" }}>
            <b>Astuce :</b> la phrase déclarative raconte (.) · l'interrogative pose une question (?) · l'exclamative montre une émotion (!).
          </div>
        </div>
      </Feuille>
    </LandscapeDoc>
  );
}

/* ===================== FEUILLE D'EXERCICES (paysage, ~10 exos) ===================== */
function Aphrase({ children }: { children: React.ReactNode }) {
  return <div style={{ fontFamily: CURSIVE, fontSize: "18px", margin: "0.5mm 0", color: "#111" }}>{children}</div>;
}
function MiniCoche({ lignes }: { lignes: string[] }) {
  const cols = ["déclar. (.)", "interro. (?)", "exclam. (!)"];
  return (
    <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: CURSIVE, marginTop: "0.5mm" }}>
      <thead><tr>
        <th style={{ border: "1.2px solid #111", padding: "0.5mm 2mm", background: FR, color: "#fff", fontSize: "11px", fontFamily: CONSIGNE_FONT, textAlign: "left" }}>Phrase</th>
        {cols.map((c) => <th key={c} style={{ border: "1.2px solid #111", padding: "0.5mm", background: FR, color: "#fff", fontSize: "10px", fontFamily: CONSIGNE_FONT }}>{c}</th>)}
      </tr></thead>
      <tbody>{lignes.map((p, i) => (
        <tr key={i}>
          <td style={{ border: "1.2px solid #111", padding: "0.3mm 2mm", fontSize: "15px" }}>{p}</td>
          {cols.map((c) => <td key={c} style={{ border: "1.2px solid #111", textAlign: "center", fontSize: "15px" }}>☐</td>)}
        </tr>
      ))}</tbody>
    </table>
  );
}

export function FicheTypesPhrasesExos() {
  return (
    <LandscapeDoc>
      <Feuille titre="Les types de phrases" sousTitre="Exercices — CE1 / CE2 (page 1)">
        <Col>
          <div>
            <Consigne n={1} aide=". ? !">Mets le bon point à la fin de chaque phrase.</Consigne>
            <Exemple>Tu viens jouer <b>?</b></Exemple>
            <Aphrase>a) Le chat dort sur le lit ___</Aphrase>
            <Aphrase>b) Où est mon cartable ___</Aphrase>
            <Aphrase>c) Quelle belle journée ___</Aphrase>
            <Aphrase>d) Range tes crayons ___</Aphrase>
          </div>
          <div>
            <Consigne n={2}>Coche (✗) le bon type pour chaque phrase.</Consigne>
            <MiniCoche lignes={["Le soleil brille.", "As-tu froid ?", "Comme il est tard !", "Je lis un conte."]} />
          </div>
        </Col>
        <Trait />
        <Col>
          <div>
            <Consigne n={3}>Relie chaque phrase à son type (tire un trait).</Consigne>
            <div style={{ display: "flex", justifyContent: "space-between", fontFamily: CURSIVE, fontSize: "16px", marginTop: "1mm" }}>
              <div>
                <div>• Tu as perdu ta dent ?</div>
                <div>• Les fleurs poussent.</div>
                <div>• Quel beau dessin !</div>
              </div>
              <div style={{ textAlign: "right", color: "#444" }}>
                <div>déclarative •</div>
                <div>interrogative •</div>
                <div>exclamative •</div>
              </div>
            </div>
          </div>
          <div>
            <Consigne n={4}>Transforme la phrase en question.</Consigne>
            <Exemple>Tu as faim. → As-tu faim ?</Exemple>
            <Aphrase>a) Tu aimes les pommes.</Aphrase>
            <Lines n={1} />
            <Aphrase>b) Le train arrive.</Aphrase>
            <Lines n={1} />
          </div>
        </Col>
      </Feuille>
      <PageBreak />
      <Feuille titre="Les types de phrases" sousTitre="Exercices — CE1 / CE2 (page 2)">
        <Col>
          <div>
            <Consigne n={5}>Transforme en phrase exclamative.</Consigne>
            <Exemple>C'est beau. → Comme c'est beau !</Exemple>
            <Aphrase>a) Ce gâteau est bon.</Aphrase>
            <Lines n={1} />
            <Aphrase>b) Il fait chaud.</Aphrase>
            <Lines n={1} />
          </div>
          <div>
            <Consigne n={6} aide="D · I · E">Écris D, I ou E devant chaque phrase.</Consigne>
            <Exemple>___ Tu viens ? → <b>I</b></Exemple>
            <Aphrase>___ Nous jouons dehors.</Aphrase>
            <Aphrase>___ Bravo, tu as gagné !</Aphrase>
            <Aphrase>___ Quelle heure est-il ?</Aphrase>
          </div>
        </Col>
        <Trait />
        <Col>
          <div>
            <Consigne n={7}>Écris une phrase de chaque type.</Consigne>
            <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700 }}>Une déclarative (.) :</div>
            <Lines n={1} />
            <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700 }}>Une interrogative (?) :</div>
            <Lines n={1} />
            <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "12px", fontWeight: 700 }}>Une exclamative (!) :</div>
            <Lines n={1} />
            <div style={{ marginTop: "0.5mm" }}><Defi>CE2 : écris une phrase impérative (un ordre).</Defi></div>
            <Lines n={1} />
          </div>
          <div>
            <Consigne n={8}>Entoure la phrase interrogative, souligne l'exclamative.</Consigne>
            <Aphrase>Le vélo roule vite. — Est-ce que tu dors ? — Quel vacarme !</Aphrase>
          </div>
        </Col>
      </Feuille>
    </LandscapeDoc>
  );
}
