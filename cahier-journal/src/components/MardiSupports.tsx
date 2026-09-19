/**
 * Supports du mardi
 * -----------------
 *  1. <ComparerDiapo/> : diaporama projetable pour INTRODUIRE les signes
 *     < > = (maths). La « bouche » s'ouvre vers le plus grand nombre. Dessins
 *     originaux (SVG maison), interactif (révélation).
 *  2. <SolideLiquideDiapo/> : diaporama de sciences (séance 1) avec de vraies
 *     photos (Wikimedia via <WikiImage/>) et un tri à révéler.
 *  3. <SolideLiquideLecon/> : leçon à coller façon ENFANTINE (gros titre, petits
 *     dessins, peu de texte) — modèle validé.
 */
import { useRef, useState } from "react";
import { WikiImage } from "./WikiImage";
import { requestFullscreen } from "../lib/board";

/* =================== MATHS — Comparer les nombres (< > =) =================== */

const BLEU = "#1d4ed8";
const VERT = "#159a63";

/** Le signe « bouche » : ouvert vers le plus grand. Dessin original. */
function SigneBouche({ signe, size = 120 }: { signe: "<" | ">" | "="; size?: number }) {
  const s = size;
  const stroke = signe === "=" ? VERT : BLEU;
  return (
    <svg width={s} height={s} viewBox="0 0 100 100" aria-hidden="true">
      {signe === "=" ? (
        <>
          <line x1="20" y1="40" x2="80" y2="40" stroke={stroke} strokeWidth="10" strokeLinecap="round" />
          <line x1="20" y1="62" x2="80" y2="62" stroke={stroke} strokeWidth="10" strokeLinecap="round" />
        </>
      ) : (
        <>
          {/* la bouche ouverte : pointe vers le petit, ouverture vers le grand */}
          <path
            d={signe === ">" ? "M25 22 L78 50 L25 78" : "M75 22 L22 50 L75 78"}
            fill="none" stroke={stroke} strokeWidth="11" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* deux petits yeux au-dessus, du côté de l'ouverture (le grand) */}
          <circle cx={signe === ">" ? 30 : 70} cy="14" r="4" fill="#111" />
          <circle cx={signe === ">" ? 46 : 54} cy="14" r="4" fill="#111" />
        </>
      )}
    </svg>
  );
}

const PAIRES: { a: number; b: number }[] = [
  { a: 24, b: 42 }, { a: 70, b: 30 }, { a: 356, b: 365 }, { a: 500, b: 500 }, { a: 89, b: 98 }, { a: 640, b: 604 },
];

function signeDe(a: number, b: number): "<" | ">" | "=" { return a < b ? "<" : a > b ? ">" : "="; }

function PaireCarte({ a, b }: { a: number; b: number }) {
  const [on, setOn] = useState(false);
  const sg = signeDe(a, b);
  return (
    <button onClick={() => setOn((v) => !v)} className="flex items-center justify-center gap-3 rounded-2xl border-2 bg-white p-3 transition hover:scale-[1.03]" style={{ borderColor: BLEU }} title="Cliquer pour révéler">
      <span className="text-4xl font-extrabold" style={{ color: "#111", fontFamily: "'Caveat','Comic Neue',cursive" }}>{a}</span>
      <span className="grid h-14 w-14 place-items-center">
        {on ? <SigneBouche signe={sg} size={50} /> : <span className="text-4xl font-extrabold text-stone-300">?</span>}
      </span>
      <span className="text-4xl font-extrabold" style={{ color: "#111", fontFamily: "'Caveat','Comic Neue',cursive" }}>{b}</span>
    </button>
  );
}

const CETAPES = ["La bouche", "Les 3 signes", "On s'entraîne", "Bravo"];

export function ComparerDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = CETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[960px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: BLEU }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Maths · Comparer les nombres — &lt; &gt; =</span>
        <div className="ml-2 flex gap-1.5">
          {CETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}
        </div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>

      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: BLEU }}>La bouche mange le plus grand !</h1>
            <div className="my-6 flex items-center justify-center gap-6">
              <span className="text-6xl font-extrabold" style={{ fontFamily: "'Caveat','Comic Neue',cursive" }}>3</span>
              <SigneBouche signe="<" size={130} />
              <span className="text-6xl font-extrabold" style={{ fontFamily: "'Caveat','Comic Neue',cursive" }}>8</span>
            </div>
            <p className="text-2xl font-semibold text-stone-500">La bouche s'ouvre toujours vers le nombre le plus <b>grand</b>.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full text-center">
            <h2 className="mb-6 text-4xl font-extrabold" style={{ color: BLEU }}>Les trois signes</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {[
                { sg: "<" as const, t: "plus petit que", ex: "3 < 8" },
                { sg: ">" as const, t: "plus grand que", ex: "9 > 5" },
                { sg: "=" as const, t: "égal à", ex: "6 = 6" },
              ].map((c) => (
                <div key={c.sg} className="flex flex-col items-center gap-2 rounded-2xl border-2 p-4" style={{ borderColor: c.sg === "=" ? VERT : BLEU }}>
                  <SigneBouche signe={c.sg} size={90} />
                  <span className="text-xl font-bold" style={{ color: c.sg === "=" ? VERT : BLEU }}>{c.t}</span>
                  <span className="text-2xl font-extrabold" style={{ fontFamily: "'Caveat','Comic Neue',cursive" }}>{c.ex}</span>
                </div>
              ))}
            </div>
            <p className="mt-5 text-xl text-stone-500">Pour comparer : je regarde d'abord le rang le plus <b>grand</b> (centaines, puis dizaines, puis unités).</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: BLEU }}>À toi ! Quel signe ?</h2>
            <p className="mt-1 text-xl text-stone-500">Devine dans ta tête, puis clique pour vérifier.</p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {PAIRES.map((p) => <PaireCarte key={`${p.a}-${p.b}`} {...p} />)}
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <SigneBouche signe="<" size={70} /><SigneBouche signe="=" size={70} /><SigneBouche signe=">" size={70} />
            </div>
            <h1 className="text-5xl font-extrabold" style={{ color: BLEU }}>Bravo !</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">Je sais comparer avec &lt;, &gt; et =.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: BLEU, color: BLEU }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{CETAPES.length} · {CETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: BLEU }}>▶</button>
      </div>
    </div>
  );
}

/* =================== FRANÇAIS — Les déterminants (leçon) =================== */

const DET = "#7c3aed";

function Bulle({ mot, color }: { mot: string; color: string }) {
  return (
    <span style={{ display: "inline-block", padding: "1.5mm 4mm", margin: "1.5mm", borderRadius: "999px", border: `2.5px solid ${color}`, background: "#fff", fontSize: "22px", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive", color: "#111" }}>{mot}</span>
  );
}

/** Leçon à coller « Les déterminants » — style enfantin validé (bulles + peu de texte). */
export function DeterminantsLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box" }}>
        <h1 style={{ fontSize: "42px", margin: "0 0 4mm", textAlign: "center", fontWeight: 700, color: DET, fontFamily: "'Caveat','Comic Neue',cursive" }}>Les déterminants</h1>

        <p style={{ fontSize: "17px", lineHeight: 1.5, textAlign: "center", margin: "0 auto 5mm", maxWidth: "150mm" }}>
          Le déterminant est un <b>petit mot placé devant le nom</b>.
          On dit&nbsp;: <span style={{ fontFamily: "'Caveat','Comic Neue',cursive", fontSize: "22px" }}>le chat, une maison, les oiseaux.</span>
        </p>

        {/* Brainstorming : plein de déterminants en bulles */}
        <div style={{ border: `2.5px dashed ${DET}`, borderRadius: "5mm", padding: "4mm", textAlign: "center", marginBottom: "6mm" }}>
          <div style={{ fontSize: "16px", fontWeight: 800, color: DET, marginBottom: "1mm" }}>Des déterminants que je connais :</div>
          {["le", "la", "les", "un", "une", "des"].map((m) => <Bulle key={m} mot={m} color="#2563eb" />)}
          {["mon", "ma", "mes", "ce", "cette", "ces"].map((m) => <Bulle key={m} mot={m} color="#e11d48" />)}
        </div>

        {/* 2 grandes familles */}
        <div style={{ display: "flex", gap: "5mm" }}>
          <div style={{ flex: 1, border: "3px solid #2563eb", borderRadius: "5mm", padding: "4mm", textAlign: "center" }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: "#2563eb", fontFamily: "'Caveat','Comic Neue',cursive" }}>défini</div>
            <div style={{ fontSize: "24px", fontFamily: "'Caveat','Comic Neue',cursive" }}>le · la · les</div>
            <div style={{ fontSize: "14px", color: "#555" }}>je sais de quoi je parle</div>
          </div>
          <div style={{ flex: 1, border: "3px solid #e11d48", borderRadius: "5mm", padding: "4mm", textAlign: "center" }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: "#e11d48", fontFamily: "'Caveat','Comic Neue',cursive" }}>indéfini</div>
            <div style={{ fontSize: "24px", fontFamily: "'Caveat','Comic Neue',cursive" }}>un · une · des</div>
            <div style={{ fontSize: "14px", color: "#555" }}>je ne sais pas encore</div>
          </div>
        </div>

        <p style={{ marginTop: "6mm", textAlign: "center", fontSize: "18px", fontFamily: "'Caveat','Comic Neue',cursive" }}>
          Mon astuce&nbsp;: si « <b>le …</b> » marche devant le mot, c'est un déterminant&nbsp;!
        </p>
      </div>
    </div>
  );
}

/** Diaporama projeté « Démonstratifs & possessifs » (cartes à révéler). */
function CarteDet({ mot, phrase, color }: { mot: string; phrase: string; color: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="flex flex-col items-center gap-1 rounded-2xl border-2 bg-white p-3 transition hover:scale-105" style={{ borderColor: color }} title="Cliquer pour révéler">
      <span className="text-4xl font-extrabold" style={{ color, fontFamily: "'Caveat','Comic Neue',cursive" }}>{mot}</span>
      <span className={`text-lg font-semibold ${on ? "" : "opacity-0"}`} style={{ color: "#334155" }}>{on ? phrase : "?"}</span>
    </button>
  );
}
const DP_ETAPES = ["C'est quoi ?", "Je montre", "À qui c'est", "Bravo"];
export function DeterminantsDemoPossDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = DP_ETAPES.length - 1;
  const CY = "#0891b2", PK = "#db2777";
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[960px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: DET }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Français · D'autres déterminants</span>
        <div className="ml-2 flex gap-1.5">{DP_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: DET }}>Il existe d'autres déterminants !</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">Pas seulement le, la, les, un, une, des…</p>
            <p className="mt-4 text-3xl font-bold" style={{ fontFamily: "'Caveat','Comic Neue',cursive" }}>👉 les démonstratifs &nbsp;·&nbsp; 💛 les possessifs</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: CY }}>Les démonstratifs — je MONTRE</h2>
            <p className="mt-1 text-xl text-stone-500">Devine la fin, puis clique.</p>
            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <CarteDet mot="ce" phrase="ce chien" color={CY} />
              <CarteDet mot="cet" phrase="cet arbre" color={CY} />
              <CarteDet mot="cette" phrase="cette fleur" color={CY} />
              <CarteDet mot="ces" phrase="ces enfants" color={CY} />
            </div>
            <p className="mt-5 text-lg" style={{ color: CY }}>Devant une voyelle : <b>ce → cet</b> (cet arbre).</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: PK }}>Les possessifs — à QUI c'est</h2>
            <p className="mt-1 text-xl text-stone-500">Devine, puis clique.</p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              <CarteDet mot="mon" phrase="mon cartable" color={PK} />
              <CarteDet mot="ta" phrase="ta trousse" color={PK} />
              <CarteDet mot="ses" phrase="ses crayons" color={PK} />
            </div>
            <p className="mt-5 text-lg text-stone-500">mon / ton / son · ma / ta / sa · mes / tes / ses</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <div className="mb-4 text-7xl">🎉</div>
            <h1 className="text-5xl font-extrabold" style={{ color: DET }}>Bravo !</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-500">Démonstratifs (je montre) et possessifs (à qui c'est) sont des déterminants.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: DET, color: DET }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{DP_ETAPES.length} · {DP_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: DET }}>▶</button>
      </div>
    </div>
  );
}

/** Leçon « Les déterminants démonstratifs et possessifs » — style enfantin. */
export function DeterminantsDemoPossLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "40px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: DET, fontFamily: "'Caveat','Comic Neue',cursive" }}>D'autres déterminants</h1>
        <p style={{ textAlign: "center", fontSize: "19px", margin: "0 0 5mm", fontFamily: "'Caveat','Comic Neue',cursive", color: "#555" }}>les démonstratifs &amp; les possessifs</p>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "5mm" }}>
          {/* Démonstratifs */}
          <div style={{ border: "3px solid #0891b2", borderRadius: "5mm", padding: "5mm", textAlign: "center" }}>
            <div style={{ fontSize: "30px", fontWeight: 800, color: "#0891b2", fontFamily: "'Caveat','Comic Neue',cursive" }}>👉 Les démonstratifs</div>
            <div style={{ fontSize: "17px", color: "#555", marginBottom: "2mm" }}>je MONTRE quelque chose</div>
            <div>{["ce", "cet", "cette", "ces"].map((m) => <Bulle key={m} mot={m} color="#0891b2" />)}</div>
            <div style={{ fontSize: "22px", fontFamily: "'Caveat','Comic Neue',cursive", marginTop: "2mm" }}><b>ce</b> chien · <b>cette</b> fleur · <b>ces</b> enfants</div>
          </div>

          {/* Possessifs */}
          <div style={{ border: "3px solid #db2777", borderRadius: "5mm", padding: "5mm", textAlign: "center" }}>
            <div style={{ fontSize: "30px", fontWeight: 800, color: "#db2777", fontFamily: "'Caveat','Comic Neue',cursive" }}>💛 Les possessifs</div>
            <div style={{ fontSize: "17px", color: "#555", marginBottom: "2mm" }}>je dis à QUI c'est</div>
            <div>{["mon", "ma", "mes", "ton", "ta", "tes", "son", "sa", "ses"].map((m) => <Bulle key={m} mot={m} color="#db2777" />)}</div>
            <div style={{ fontSize: "22px", fontFamily: "'Caveat','Comic Neue',cursive", marginTop: "2mm" }}><b>mon</b> cartable · <b>ta</b> trousse · <b>ses</b> crayons</div>
          </div>

          <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "'Caveat','Comic Neue',cursive" }}>
            Comme tous les déterminants, ils sont <b>devant le nom</b> et <b>s'accordent</b> avec lui.
          </p>
        </div>
      </div>
    </div>
  );
}

/** Leçon « Le nom » — style enfantin (bulles). */
export function LeNomLecon() {
  const NOM = "#dc2626";
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "46px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: NOM, fontFamily: "'Caveat','Comic Neue',cursive" }}>Le nom</h1>
        <p style={{ textAlign: "center", fontSize: "19px", margin: "0 auto 5mm", maxWidth: "155mm", lineHeight: 1.4 }}>
          Le <b>nom</b> est un mot qui désigne une <b>personne</b>, un <b>animal</b>, une <b>chose</b> ou un <b>lieu</b>.
        </p>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "5mm" }}>
          <div style={{ border: "3px solid #2563eb", borderRadius: "5mm", padding: "5mm", textAlign: "center" }}>
            <div style={{ fontSize: "30px", fontWeight: 800, color: "#2563eb", fontFamily: "'Caveat','Comic Neue',cursive" }}>le nom commun</div>
            <div style={{ fontSize: "16px", color: "#555", marginBottom: "2mm" }}>il nomme tout le monde pareil — avec un petit mot devant</div>
            <div>{["un chat", "une école", "la ville", "un arbre", "le bonheur"].map((m) => <Bulle key={m} mot={m} color="#2563eb" />)}</div>
          </div>

          <div style={{ border: "3px solid #16a34a", borderRadius: "5mm", padding: "5mm", textAlign: "center" }}>
            <div style={{ fontSize: "30px", fontWeight: 800, color: "#16a34a", fontFamily: "'Caveat','Comic Neue',cursive" }}>le nom propre</div>
            <div style={{ fontSize: "16px", color: "#555", marginBottom: "2mm" }}>un nom à lui tout seul — il prend une <b>MAJUSCULE</b></div>
            <div>{["Léa", "Médor", "Paris", "la France", "Saint-Étienne"].map((m) => <Bulle key={m} mot={m} color="#16a34a" />)}</div>
          </div>

          <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "'Caveat','Comic Neue',cursive" }}>
            Mon astuce&nbsp;: si je peux mettre « <b>un</b> » ou « <b>le</b> » devant, c'est un nom&nbsp;!
          </p>
        </div>
      </div>
    </div>
  );
}

/* =================== SCIENCES — Solide ou liquide ? =================== */

const SCI = "#0e7490";

function RevealTri({ title, alt, rep }: { title: string; alt: string; rep: "solide" | "liquide" }) {
  const [on, setOn] = useState(false);
  const col = rep === "liquide" ? "#2563eb" : "#7c4a1e";
  return (
    <button onClick={() => setOn((v) => !v)} className="flex flex-col items-center gap-1 rounded-2xl border-2 bg-white p-2 transition hover:scale-[1.03]" style={{ borderColor: SCI }} title="Cliquer pour révéler">
      <WikiImage title={title} alt={alt} accent={SCI} height="clamp(110px, 20vh, 180px)" />
      <span className="text-base font-bold" style={{ color: "#334155" }}>{alt}</span>
      <span className={`text-lg font-extrabold ${on ? "" : "opacity-0"}`} style={{ color: col }}>{on ? rep.toUpperCase() : "?"}</span>
    </button>
  );
}

const SETAPES = ["La matière", "Solide", "Liquide", "On trie", "Je retiens"];

export function SolideLiquideDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = SETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[960px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: SCI }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Sciences · Solide ou liquide ?</span>
        <div className="ml-2 flex gap-1.5">
          {SETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}
        </div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>

      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full text-center">
            <div className="mx-auto mb-4 max-w-xl"><WikiImage title="Eau" alt="de l'eau qui coule" accent={SCI} height="clamp(190px, 38vh, 340px)" /></div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: SCI }}>Solide ou liquide ?</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-500">Autour de nous, il y a de la matière : on va apprendre à la reconnaître.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full text-center">
            <h2 className="mb-2 text-4xl font-extrabold" style={{ color: "#7c4a1e" }}>Le solide garde sa forme</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {[{ t: "Galet", a: "un caillou" }, { t: "Crayon", a: "un crayon" }, { t: "Pomme", a: "une pomme" }].map((c) => (
                <div key={c.t} className="flex flex-col items-center gap-2 rounded-2xl border-2 p-3" style={{ borderColor: "#7c4a1e" }}>
                  <WikiImage title={c.t} alt={c.a} accent="#7c4a1e" height="clamp(150px, 26vh, 230px)" />
                  <span className="text-lg font-bold" style={{ color: "#7c4a1e" }}>{c.a}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xl text-stone-500">Je le pose : il <b>garde sa forme</b>.</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full text-center">
            <h2 className="mb-2 text-4xl font-extrabold" style={{ color: "#2563eb" }}>Le liquide coule et prend la forme du récipient</h2>
            <div className="grid gap-5 sm:grid-cols-3">
              {[{ t: "Eau", a: "de l'eau" }, { t: "Lait", a: "du lait" }, { t: "Huile d'olive", a: "de l'huile" }].map((c) => (
                <div key={c.t} className="flex flex-col items-center gap-2 rounded-2xl border-2 p-3" style={{ borderColor: "#2563eb" }}>
                  <WikiImage title={c.t} alt={c.a} accent="#2563eb" height="clamp(150px, 26vh, 230px)" />
                  <span className="text-lg font-bold" style={{ color: "#2563eb" }}>{c.a}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xl text-stone-500">Je le verse : il <b>coule</b> et prend la forme du verre.</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: SCI }}>On trie : solide ou liquide ?</h2>
            <p className="mt-1 text-xl text-stone-500">Devine, puis clique pour vérifier.</p>
            <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
              <RevealTri title="Sable" alt="le sable" rep="solide" />
              <RevealTri title="Miel" alt="le miel" rep="liquide" />
              <RevealTri title="Clé" alt="une clé" rep="solide" />
              <RevealTri title="Jus d'orange" alt="le jus" rep="liquide" />
            </div>
            <p className="mt-4 text-lg text-stone-500">Et le sable ? Il coule… mais chaque petit grain est un <b>solide</b> !</p>
          </div>
        )}
        {i === 4 && (
          <div className="w-full text-center">
            <h2 className="mb-4 text-4xl font-extrabold" style={{ color: SCI }}>Je retiens</h2>
            <div className="mx-auto flex max-w-2xl flex-col gap-3 sm:flex-row">
              <div className="flex-1 rounded-2xl border-2 p-4" style={{ borderColor: "#7c4a1e" }}>
                <div className="text-2xl font-extrabold" style={{ color: "#7c4a1e" }}>SOLIDE</div>
                <div className="mt-1 text-lg">il garde sa forme</div>
              </div>
              <div className="flex-1 rounded-2xl border-2 p-4" style={{ borderColor: "#2563eb" }}>
                <div className="text-2xl font-extrabold" style={{ color: "#2563eb" }}>LIQUIDE</div>
                <div className="mt-1 text-lg">il coule et prend la forme du récipient</div>
              </div>
            </div>
            <p className="mt-4 text-xs text-stone-400">Photos : Wikipédia / Wikimedia Commons (chargées en ligne).</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: SCI, color: SCI }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{SETAPES.length} · {SETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: SCI }}>▶</button>
      </div>
    </div>
  );
}

/* ---- Petits dessins maison pour la leçon sciences ---- */
function GoutteDoodle() {
  return (
    <svg width="40" height="46" viewBox="0 0 40 46" aria-hidden="true">
      <path d="M20 4 C20 4 34 22 34 31 A14 14 0 1 1 6 31 C6 22 20 4 20 4 Z" fill="#bae6fd" stroke="#2563eb" strokeWidth="2.5" />
    </svg>
  );
}
function CailllouDoodle() {
  return (
    <svg width="46" height="40" viewBox="0 0 46 40" aria-hidden="true">
      <path d="M6 30 C2 20 12 8 24 8 C36 8 44 16 42 26 C41 34 30 36 22 35 C14 34 9 35 6 30 Z" fill="#e7d3b3" stroke="#7c4a1e" strokeWidth="2.5" strokeLinejoin="round" />
    </svg>
  );
}

/** Leçon à coller « Solide ou liquide ? » — style enfantin validé. */
export function SolideLiquideLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center", marginBottom: "6mm" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "3mm" }}>
            <CailllouDoodle />
            <h1 style={{ fontSize: "40px", margin: 0, fontWeight: 700, color: SCI, fontFamily: "'Caveat','Comic Neue',cursive" }}>Solide ou liquide&nbsp;?</h1>
            <GoutteDoodle />
          </div>
        </div>

        <div style={{ display: "flex", gap: "5mm", marginBottom: "7mm" }}>
          <div style={{ flex: 1, border: "3px solid #7c4a1e", borderRadius: "5mm", padding: "4mm", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1mm" }}><CailllouDoodle /></div>
            <div style={{ fontSize: "30px", fontWeight: 800, color: "#7c4a1e", fontFamily: "'Caveat','Comic Neue',cursive" }}>Le solide</div>
            <div style={{ fontSize: "20px", fontFamily: "'Caveat','Comic Neue',cursive" }}>il garde sa forme</div>
            <div style={{ fontSize: "15px", color: "#555", marginTop: "1mm" }}>une pierre, un crayon, une pomme…</div>
          </div>
          <div style={{ flex: 1, border: "3px solid #2563eb", borderRadius: "5mm", padding: "4mm", textAlign: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: "1mm" }}><GoutteDoodle /></div>
            <div style={{ fontSize: "30px", fontWeight: 800, color: "#2563eb", fontFamily: "'Caveat','Comic Neue',cursive" }}>Le liquide</div>
            <div style={{ fontSize: "20px", fontFamily: "'Caveat','Comic Neue',cursive" }}>il coule et prend la forme du récipient</div>
            <div style={{ fontSize: "15px", color: "#555", marginTop: "1mm" }}>l'eau, le lait, le sirop…</div>
          </div>
        </div>

        <div style={{ textAlign: "center", fontSize: "20px", fontFamily: "'Caveat','Comic Neue',cursive", marginBottom: "4mm" }}>
          Pour savoir&nbsp;: <b>je le pose</b>. Est-ce qu'il garde sa forme&nbsp;?
        </div>

        {/* Petit tri à compléter */}
        <div style={{ fontWeight: 800, fontSize: "16px", marginBottom: "2mm" }}>Je relie chaque mot à sa famille :</div>
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0 6mm" }}>
          <div style={{ fontSize: "20px", lineHeight: 2, fontFamily: "'Caveat','Comic Neue',cursive" }}>l'eau<br />la pierre<br />le lait<br />le crayon</div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", fontSize: "22px", fontWeight: 800 }}>
            <span style={{ color: "#7c4a1e" }}>● SOLIDE</span>
            <span style={{ color: "#2563eb" }}>● LIQUIDE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
