/**
 * Questionner le monde — séances du mardi 29 (après-midi).
 * - Histoire (séance 4) : La Préhistoire (après « lire une frise »).
 * - Sciences (séance 4) : Le vivant et le non-vivant.
 * Modèle validé : diaporama à projeter (cartes à révéler + vraies photos libres
 * de droits Wikimedia) + leçon imagée à coller. Jamais de dessins générés.
 */
import { useRef, useState } from "react";
import { WikiImage } from "./WikiImage";
import { requestFullscreen } from "../lib/board";

const HIST = "#92400e"; // préhistoire (brun)

function RevealCard({ q, a, accent }: { q: string; a: string; accent: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="w-full rounded-2xl border-2 bg-white p-3 text-center transition hover:scale-[1.03]" style={{ borderColor: accent }} title="Cliquer pour révéler">
      <div className="text-lg font-bold" style={{ color: "#334155" }}>{q}</div>
      <div className={`mt-1 text-xl font-extrabold ${on ? "" : "opacity-0"}`} style={{ color: accent }}>{on ? a : "?"}</div>
    </button>
  );
}

function ImgReveal({ title, alt, mot, rep, accent }: { title: string; alt: string; mot: string; rep: string; accent: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="flex flex-col items-center gap-1 rounded-2xl border-2 bg-white p-2 transition hover:scale-[1.03]" style={{ borderColor: accent }} title="Cliquer pour révéler">
      <WikiImage title={title} alt={alt} accent={accent} height="clamp(100px, 18vh, 160px)" />
      <span className="text-base font-bold" style={{ color: "#334155" }}>{mot}</span>
      <span className={`text-lg font-extrabold ${on ? "" : "opacity-0"}`} style={{ color: accent }}>{on ? rep : "?"}</span>
    </button>
  );
}

/* ===================== HISTOIRE — La Préhistoire ===================== */
const H_ETAPES = ["Il y a très longtemps", "Comment vivaient-ils ?", "Les traces laissées", "Les dates clés", "Je retiens"];
/** Repères simples de la Préhistoire (cycle 2) : on retient surtout l'ordre et le début/la fin. */
const PREHIST_DATES = [
  { quand: "il y a ~3 millions d'années", quoi: "les premiers hommes et leurs premiers outils en pierre" },
  { quand: "il y a ~400 000 ans", quoi: "la maîtrise du feu 🔥" },
  { quand: "il y a ~30 000 ans", quoi: "les peintures dans les grottes 🎨" },
  { quand: "il y a ~10 000 ans", quoi: "l'agriculture et les premiers villages 🌾" },
  { quand: "il y a ~5 000 ans", quoi: "l'invention de l'écriture ✍️ → fin de la Préhistoire" },
];
export function PrehistoireDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = H_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: HIST }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Histoire · La Préhistoire</span>
        <div className="ml-2 flex gap-1.5">{H_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: HIST }}>La Préhistoire</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">C'est le tout début de l'histoire des hommes, il y a <b>très, très longtemps</b> — <b>avant l'écriture</b>.</p>
            <div className="mx-auto mt-4 max-w-md"><WikiImage title="Mammouth" alt="un mammouth" accent={HIST} height="clamp(150px,28vh,260px)" /></div>
            <p className="mt-2 text-lg text-stone-500">À cette époque vivaient des animaux disparus, comme le mammouth.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: HIST }}>Comment vivaient-ils ?</h2>
            <div className="grid gap-3 sm:grid-cols-4">
              <ImgReveal title="Lascaux" alt="grotte" mot="Où dorment-ils ?" rep="dans des grottes" accent={HIST} />
              <ImgReveal title="Feu" alt="le feu" mot="Leur grande invention ?" rep="maîtriser le feu" accent={HIST} />
              <ImgReveal title="Silex" alt="silex" mot="Leurs outils ?" rep="en pierre (silex)" accent={HIST} />
              <ImgReveal title="Chasse" alt="la chasse" mot="Pour manger ?" rep="chasse, pêche, cueillette" accent={HIST} />
            </div>
            <p className="mt-4 text-center text-lg text-stone-600">D'abord <b>nomades</b> (ils se déplaçaient), puis ils ont appris à cultiver et à s'<b>installer</b>.</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Les traces qu'ils ont laissées</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border-4 p-2" style={{ borderColor: HIST }}>
                <WikiImage title="Grotte de Lascaux" alt="peintures rupestres" accent={HIST} height="clamp(120px,22vh,200px)" />
                <div className="mt-1 text-lg font-bold" style={{ color: HIST }}>Les peintures des grottes</div>
              </div>
              <div className="rounded-2xl border-4 p-2" style={{ borderColor: HIST }}>
                <WikiImage title="Dolmen" alt="un dolmen" accent={HIST} height="clamp(120px,22vh,200px)" />
                <div className="mt-1 text-lg font-bold" style={{ color: HIST }}>Les grandes pierres (dolmens)</div>
              </div>
            </div>
            <p className="mt-3 text-lg text-stone-600">On connaît la Préhistoire grâce aux <b>objets</b> et aux <b>dessins</b> retrouvés (l'archéologie).</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: HIST }}>Les dates clés</h2>
            <div className="flex flex-col gap-2">
              {PREHIST_DATES.map((d, k) => (
                <div key={k} className="flex items-center gap-3 rounded-2xl border-2 bg-white p-2" style={{ borderColor: HIST }}>
                  <span className="shrink-0 rounded-full px-3 py-1 text-sm font-extrabold text-white" style={{ background: HIST }}>{d.quand}</span>
                  <span className="text-lg font-semibold text-stone-700">{d.quoi}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-lg text-stone-600">Sur une frise, tout ça se lit <b>de gauche</b> (le plus ancien) <b>vers la droite</b> (vers nous).</p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">🦣🔥🎨</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: HIST }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">La <b>Préhistoire</b> = la période la plus ancienne, <b>avant l'écriture</b>.</p>
            <p className="text-2xl font-semibold text-stone-600">Les hommes chassaient, ont maîtrisé le <b>feu</b> et ont peint dans les <b>grottes</b>.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: HIST, color: HIST }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{H_ETAPES.length} · {H_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: HIST }}>▶</button>
      </div>
    </div>
  );
}

function Bulle({ mot, color }: { mot: string; color: string }) {
  return (
    <span style={{ display: "inline-block", padding: "1.5mm 4mm", margin: "1.5mm", borderRadius: "999px", border: `2.5px solid ${color}`, background: "#fff", fontSize: "20px", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive", color: "#111" }}>{mot}</span>
  );
}

export function PrehistoireLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "42px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive" }}>La Préhistoire</h1>
        <p style={{ textAlign: "center", fontSize: "18px", margin: "0 auto 5mm", maxWidth: "158mm", lineHeight: 1.4 }}>
          La Préhistoire, c'est le <b>tout début</b> de l'histoire des hommes, il y a très longtemps, <b>avant l'écriture</b>.
        </p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "5mm" }}>
          <div style={{ border: `3px solid ${HIST}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>Comment vivaient-ils ?</div>
            <div style={{ display: "flex", gap: "4mm", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
              <div style={{ width: "40mm" }}><WikiImage title="Feu" alt="le feu" accent={HIST} height="26mm" /></div>
              <div style={{ flex: 1, minWidth: "80mm", textAlign: "center" }}>{["ils chassaient", "ils ont maîtrisé le feu", "ils vivaient dans des grottes", "des outils en pierre (silex)"].map((m) => <Bulle key={m} mot={m} color={HIST} />)}</div>
            </div>
          </div>
          <div style={{ border: `3px solid ${HIST}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>Les traces qu'ils ont laissées</div>
            <div style={{ display: "flex", gap: "4mm", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}><div style={{ width: "42mm", margin: "0 auto" }}><WikiImage title="Grotte de Lascaux" alt="peintures rupestres" accent={HIST} height="26mm" /></div><div style={{ fontSize: "15px", fontWeight: 700 }}>les peintures des grottes</div></div>
              <div style={{ textAlign: "center" }}><div style={{ width: "42mm", margin: "0 auto" }}><WikiImage title="Dolmen" alt="un dolmen" accent={HIST} height="26mm" /></div><div style={{ fontSize: "15px", fontWeight: 700 }}>les grandes pierres (dolmens)</div></div>
            </div>
          </div>
          <div style={{ border: `3px solid ${HIST}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "26px", fontWeight: 800, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center", marginBottom: "2mm" }}>Les dates clés</div>
            {PREHIST_DATES.map((d, k) => (
              <div key={k} style={{ display: "flex", alignItems: "center", gap: "3mm", marginBottom: "1.5mm" }}>
                <span style={{ flexShrink: 0, minWidth: "50mm", fontSize: "13px", fontWeight: 800, color: "#fff", background: HIST, borderRadius: "999px", padding: "0.5mm 3mm", textAlign: "center" }}>{d.quand}</span>
                <span style={{ fontSize: "14px", fontWeight: 600, color: "#333" }}>{d.quoi}</span>
              </div>
            ))}
            <div style={{ fontSize: "13px", fontStyle: "italic", color: "#555", marginTop: "1mm" }}>Sur une frise, on lit de gauche (le plus ancien) vers la droite (vers nous).</div>
          </div>
          <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "'Caveat','Comic Neue',cursive" }}>
            Mon astuce&nbsp;: la Préhistoire s'arrête quand on invente l'<b>écriture</b>.
          </p>
        </div>
      </div>
    </div>
  );
}
/* ===================== HISTOIRE — Le Néolithique (séance 5) ===================== */
/* Suite de « La Préhistoire » : on zoome sur LE grand changement du Néolithique
   (l'homme devient agriculteur et éleveur, se sédentarise). Vraies photos libres. */
const NEO_ETAPES = ["On se repère", "Avant / après", "L'agriculture", "L'élevage", "Le village", "De nouveaux objets", "Les mégalithes", "Les dates clés", "Je retiens"];
/** Repères simplifiés du Néolithique (cycle 2) : on retient surtout l'ordre et le début/la fin. */
const NEO_DATES = [
  { quand: "il y a ~10 000 ans", quoi: "au Proche-Orient, l'homme invente l'agriculture et l'élevage 🌾" },
  { quand: "il y a ~9 000 ans", quoi: "il construit les premiers villages de maisons 🏘️" },
  { quand: "il y a ~7 500 ans", quoi: "le Néolithique arrive en Europe, puis en France 🚶" },
  { quand: "il y a ~6 500 ans", quoi: "il dresse les grandes pierres : menhirs et dolmens (Carnac) 🪨" },
  { quand: "il y a ~5 000 ans", quoi: "les premiers métaux, puis l'écriture ✍️ → fin de la Préhistoire" },
];
function ImgCard({ title, alt, legende }: { title: string; alt: string; legende: string }) {
  return (
    <div className="rounded-2xl border-4 bg-white p-2 text-center" style={{ borderColor: HIST }}>
      <WikiImage title={title} alt={alt} accent={HIST} height="clamp(110px,20vh,190px)" />
      <div className="mt-1 text-base font-bold text-stone-700">{legende}</div>
    </div>
  );
}
export function NeolithiqueDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = NEO_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: HIST }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Histoire · Le Néolithique</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{NEO_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: HIST }}>Le Néolithique</h1>
            <p className="mx-auto mt-2 max-w-2xl text-xl font-semibold text-stone-600">La <b>dernière partie</b> de la Préhistoire, il y a environ <b>10 000 ans</b>.</p>
            <div className="mx-auto mt-4 max-w-lg"><WikiImage title="Çatal Höyük" alt="village néolithique" accent={HIST} height="clamp(150px,28vh,250px)" /></div>
            <p className="mt-2 text-lg text-stone-500">Çatal Höyük : un des plus vieux villages du monde (reconstitution).</p>
            <p className="mt-2 text-base text-stone-500">« Néo » = nouveau, « lithos » = pierre : c'est l'âge de la <b>pierre nouvelle, polie</b>.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: HIST }}>Le grand changement</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border-4 p-2 text-center" style={{ borderColor: "#a8a29e" }}>
                <div className="text-sm font-extrabold uppercase text-stone-500">Avant (Paléolithique)</div>
                <WikiImage title="Chasse" alt="la chasse" accent={HIST} height="clamp(110px,20vh,180px)" />
                <div className="mt-1 text-lg font-bold text-stone-700">Il chasse et cueille, il se <b>déplace</b> tout le temps (<b>nomade</b>).</div>
              </div>
              <div className="rounded-2xl border-4 p-2 text-center" style={{ borderColor: HIST }}>
                <div className="text-sm font-extrabold uppercase" style={{ color: HIST }}>Après (Néolithique)</div>
                <WikiImage title="Blé" alt="un champ de blé" accent={HIST} height="clamp(110px,20vh,180px)" />
                <div className="mt-1 text-lg font-bold text-stone-700">Il <b>cultive</b> et <b>élève</b> des animaux, il s'<b>installe</b> (<b>sédentaire</b>).</div>
              </div>
            </div>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-3 text-center text-4xl font-extrabold" style={{ color: HIST }}>Il invente l'agriculture</h2>
            <p className="mb-3 text-center text-lg text-stone-600">Il remarque que les graines tombées donnent de nouvelles plantes : alors il <b>sème</b> des céréales, les cultive et les <b>récolte</b>.</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <ImgCard title="Blé" alt="le blé" legende="il sème et récolte le blé" />
              <ImgCard title="Faucille" alt="une faucille" legende="la faucille pour couper les épis" />
              <ImgCard title="Meule à grains" alt="une meule à grains" legende="la meule pour écraser le grain en farine" />
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-3 text-center text-4xl font-extrabold" style={{ color: HIST }}>Il invente l'élevage</h2>
            <p className="mb-3 text-center text-lg text-stone-600">Au lieu de seulement chasser, il <b>capture</b> des animaux, les garde et les nourrit : il les <b>domestique</b>. Ils donnent lait, viande, laine et peau.</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <ImgCard title="Mouton" alt="un mouton" legende="le mouton (laine, viande, lait)" />
              <ImgCard title="Chèvre" alt="une chèvre" legende="la chèvre (lait, viande)" />
              <ImgCard title="Aurochs" alt="un aurochs" legende="l'aurochs, l'ancêtre de la vache" />
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Il construit des villages</h2>
            <p className="mx-auto mt-2 max-w-2xl text-lg text-stone-600">Comme il reste au même endroit, il bâtit des <b>maisons</b> en bois, en terre et en pierre, les unes à côté des autres.</p>
            <div className="mx-auto mt-3 max-w-lg"><WikiImage title="Çatal Höyük" alt="reconstitution d'un village néolithique" accent={HIST} height="clamp(140px,26vh,230px)" /></div>
            <p className="mt-2 text-lg font-semibold text-stone-700">Il fait aussi des <b>réserves</b> de nourriture (les greniers) pour l'hiver.</p>
          </div>
        )}
        {i === 5 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: HIST }}>De nouveaux objets</h2>
            <div className="grid gap-3 sm:grid-cols-4">
              <ImgReveal title="Hache polie" alt="une hache polie" mot="La pierre devient…" rep="polie, bien lisse" accent={HIST} />
              <ImgReveal title="Poterie" alt="une poterie" mot="Pour conserver ?" rep="la poterie (terre cuite)" accent={HIST} />
              <ImgReveal title="Tissage" alt="du tissage" mot="Pour s'habiller ?" rep="il tisse des vêtements" accent={HIST} />
              <ImgReveal title="Meule à grains" alt="une meule" mot="Pour la farine ?" rep="il moud le grain" accent={HIST} />
            </div>
            <p className="mt-4 text-center text-lg text-stone-600">Ce sont des <b>traces</b> (des archives !) : on les retrouve en creusant la terre. C'est le travail des <b>archéologues</b>.</p>
          </div>
        )}
        {i === 6 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-3 text-center text-4xl font-extrabold" style={{ color: HIST }}>Les grandes pierres (mégalithes)</h2>
            <p className="mb-3 text-center text-lg text-stone-600">Les hommes du Néolithique dressent d'énormes pierres : les <b>menhirs</b> (debout) et les <b>dolmens</b> (une grande table de pierre).</p>
            <div className="grid gap-3 sm:grid-cols-3">
              <ImgCard title="Menhir" alt="un menhir" legende="le menhir : une pierre dressée" />
              <ImgCard title="Dolmen" alt="un dolmen" legende="le dolmen : une table de pierre" />
              <ImgCard title="Carnac" alt="les alignements de Carnac" legende="à Carnac (Bretagne), des milliers de menhirs alignés" />
            </div>
          </div>
        )}
        {i === 7 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: HIST }}>Les dates clés</h2>
            <div className="flex flex-col gap-2">
              {NEO_DATES.map((d, k) => (
                <div key={k} className="flex items-center gap-3 rounded-2xl border-2 bg-white p-2" style={{ borderColor: HIST }}>
                  <span className="shrink-0 rounded-full px-3 py-1 text-sm font-extrabold text-white" style={{ background: HIST }}>{d.quand}</span>
                  <span className="text-lg font-semibold text-stone-700">{d.quoi}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-lg text-stone-600">Sur la frise, tout ça se place <b>à la fin</b> de la Préhistoire, juste avant l'écriture.</p>
          </div>
        )}
        {i === 8 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">🌾🐑🏺🪨</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: HIST }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">Au <b>Néolithique</b>, l'homme devient <b>agriculteur</b> et <b>éleveur</b>.</p>
            <p className="text-2xl font-semibold text-stone-600">Il se <b>sédentarise</b>, construit les <b>premiers villages</b> et dresse les <b>mégalithes</b>.</p>
            <p className="mt-2 text-xl text-stone-500">La Préhistoire se termine quand on invente l'<b>écriture</b>.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: HIST, color: HIST }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{NEO_ETAPES.length} · {NEO_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: HIST }}>▶</button>
      </div>
    </div>
  );
}

export function NeolithiqueLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "8mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "6mm 7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "38px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive" }}>Le Néolithique</h1>
        <p style={{ textAlign: "center", fontSize: "16px", margin: "0 auto 3mm", maxWidth: "160mm", lineHeight: 1.35 }}>
          À la fin de la Préhistoire, il y a environ <b>10 000 ans</b>, l'homme change de vie : il devient <b>agriculteur</b> et <b>éleveur</b>. (« Néo » = nouveau, « lithos » = pierre : l'âge de la pierre <b>polie</b>.)
        </p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "3.5mm" }}>
          <div style={{ border: `3px solid ${HIST}`, borderRadius: "5mm", padding: "3mm 5mm" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>Le grand changement</div>
            <div style={{ display: "flex", gap: "4mm", alignItems: "center", justifyContent: "space-around", flexWrap: "wrap" }}>
              <div style={{ textAlign: "center" }}><Bulle mot="avant : nomade" color="#a8a29e" /><div style={{ fontSize: "13px", color: "#555" }}>il chassait et se déplaçait</div></div>
              <div style={{ fontSize: "26px", fontWeight: 800, color: HIST }}>➜</div>
              <div style={{ textAlign: "center" }}><Bulle mot="après : sédentaire" color={HIST} /><div style={{ fontSize: "13px", color: "#555" }}>il s'installe au même endroit</div></div>
            </div>
          </div>
          <div style={{ border: `3px solid ${HIST}`, borderRadius: "5mm", padding: "3mm 5mm" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center", marginBottom: "1mm" }}>Les nouveautés</div>
            <div style={{ display: "flex", gap: "3mm", alignItems: "flex-start", justifyContent: "space-around", flexWrap: "wrap" }}>
              {[{ t: "Blé", a: "l'agriculture", l: "il cultive la terre" }, { t: "Mouton", a: "l'élevage", l: "il élève des animaux" }, { t: "Çatal Höyük", a: "le village", l: "il s'installe ensemble" }, { t: "Poterie", a: "la poterie", l: "il range sa récolte" }, { t: "Carnac", a: "les mégalithes", l: "il dresse de grandes pierres" }].map((c) => (
                <div key={c.t} style={{ textAlign: "center", width: "31mm" }}>
                  <div style={{ width: "31mm", margin: "0 auto" }}><WikiImage title={c.t} alt={c.a} accent={HIST} height="20mm" /></div>
                  <div style={{ fontSize: "14px", fontWeight: 800, color: HIST }}>{c.a}</div>
                  <div style={{ fontSize: "11px", color: "#333" }}>{c.l}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ border: `3px solid ${HIST}`, borderRadius: "5mm", padding: "3mm 5mm" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: HIST, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center", marginBottom: "1mm" }}>Les dates clés</div>
            {NEO_DATES.map((d, k) => (
              <div key={k} style={{ display: "flex", alignItems: "center", gap: "3mm", marginBottom: "1mm" }}>
                <span style={{ flexShrink: 0, minWidth: "46mm", fontSize: "12px", fontWeight: 800, color: "#fff", background: HIST, borderRadius: "999px", padding: "0.5mm 3mm", textAlign: "center" }}>{d.quand}</span>
                <span style={{ fontSize: "13px", fontWeight: 600, color: "#333" }}>{d.quoi}</span>
              </div>
            ))}
          </div>
          <div style={{ border: "2px dashed #94a3b8", borderRadius: "5mm", padding: "2.5mm 5mm" }}>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#475569" }}>Des mots à retenir</div>
            <div style={{ fontSize: "13px", color: "#333" }}><b>Agriculture</b> = cultiver la terre · <b>Élevage</b> = élever des animaux · <b>Sédentaire</b> = qui reste au même endroit (≠ nomade) · <b>Mégalithe</b> = très grande pierre (menhir, dolmen).</div>
          </div>
          <p style={{ textAlign: "center", fontSize: "16px", fontFamily: "'Caveat','Comic Neue',cursive", margin: 0 }}>
            Mon astuce&nbsp;: au Néolithique, l'homme ne se contente plus de chercher sa nourriture, il la <b>produit</b> !
          </p>
        </div>
      </div>
    </div>
  );
}

/* ===================== SCIENCES — Mesurer (2 séances) ===================== */
const MES = "#0e7490"; // sciences (teal)

/* --- Séance 1 : LA MASSE (peser avec la balance) --- */
const MASSE_ETAPES = ["C'est quoi la masse ?", "Je pèse avec la balance", "Plus lourd / plus léger", "Je retiens"];
export function MasseDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = MASSE_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MES }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Sciences · La masse (1/2)</span>
        <div className="ml-2 flex gap-1.5">{MASSE_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: MES }}>C'est quoi la masse ?</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">La masse, c'est <b>combien pèse</b> un objet : est-il <b>lourd</b> ou <b>léger</b> ?</p>
            <div className="mx-auto mt-4 max-w-md"><WikiImage title="Balance Roberval" alt="une balance" accent={MES} height="clamp(150px,26vh,240px)" /></div>
            <p className="mt-2 text-lg text-stone-500">Pour la mesurer, j'utilise une <b>balance</b>.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MES }}>Je pèse avec la balance</h2>
            <p className="mt-2 text-2xl font-semibold text-stone-600">La balance donne la masse en <b>grammes (g)</b> et en <b>kilogrammes (kg)</b>.</p>
            <div className="mx-auto mt-3 max-w-sm"><WikiImage title="Pomme" alt="une pomme" accent={MES} height="clamp(120px,20vh,180px)" /></div>
            <p className="mt-3 text-xl text-stone-700">Astuce&nbsp;: <b>1 kg = 1000 g</b>. Une pomme ≈ 150 g, un paquet de sucre = 1 kg.</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: MES }}>Plus lourd ou plus léger ?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <RevealCard q="Une plume ou un livre ?" a="le livre est plus lourd" accent={MES} />
              <RevealCard q="1 kg de plumes ou 1 kg de fer ?" a="c'est pareil : 1 kg !" accent={MES} />
              <RevealCard q="Un crayon, en g ou en kg ?" a="en grammes (g)" accent={MES} />
              <RevealCard q="Un cartable, en g ou en kg ?" a="en kilogrammes (kg)" accent={MES} />
            </div>
            <p className="mt-4 text-center text-lg text-stone-600">On va peser de vrais objets de la classe avec la balance !</p>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">⚖️🍎</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: MES }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">La <b>masse</b> se mesure avec une <b>balance</b>.</p>
            <p className="text-2xl font-semibold text-stone-600">Unités : <b>gramme (g)</b> et <b>kilogramme (kg)</b> — 1 kg = 1000 g.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: MES, color: MES }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{MASSE_ETAPES.length} · {MASSE_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: MES }}>▶</button>
      </div>
    </div>
  );
}

export function MasseLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "40px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: MES, fontFamily: "'Caveat','Comic Neue',cursive" }}>La masse : je pèse avec la balance</h1>
        <p style={{ textAlign: "center", fontSize: "18px", margin: "0 auto 5mm", maxWidth: "158mm", lineHeight: 1.4 }}>
          La <b>masse</b> d'un objet, c'est combien il <b>pèse</b>. Je la mesure avec une <b>balance</b>.
        </p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "5mm" }}>
          <div style={{ border: `3px solid ${MES}`, borderRadius: "5mm", padding: "4mm 5mm", display: "flex", gap: "4mm", alignItems: "center" }}>
            <div style={{ width: "40mm", flexShrink: 0 }}><WikiImage title="Balance Roberval" alt="une balance" accent={MES} height="28mm" /></div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "24px", fontWeight: 800, color: MES, fontFamily: "'Caveat','Comic Neue',cursive" }}>L'instrument : la balance</div>
              <div style={{ fontSize: "16px", color: "#333" }}>Je pose l'objet, je lis la masse affichée.</div>
            </div>
          </div>
          <div style={{ border: `3px solid ${MES}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "24px", fontWeight: 800, color: MES, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center" }}>Les unités</div>
            <div style={{ display: "flex", gap: "3mm", justifyContent: "center", flexWrap: "wrap", marginTop: "2mm" }}>
              <span style={{ border: `2.5px solid ${MES}`, borderRadius: "999px", padding: "1.5mm 5mm", fontSize: "20px", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>le gramme (g)</span>
              <span style={{ border: `2.5px solid ${MES}`, borderRadius: "999px", padding: "1.5mm 5mm", fontSize: "20px", fontWeight: 700, fontFamily: "'Caveat','Comic Neue',cursive" }}>le kilogramme (kg)</span>
              <span style={{ background: MES, color: "#fff", borderRadius: "999px", padding: "1.5mm 5mm", fontSize: "20px", fontWeight: 800, fontFamily: "'Caveat','Comic Neue',cursive" }}>1 kg = 1000 g</span>
            </div>
          </div>
          <div style={{ border: "2px dashed #94a3b8", borderRadius: "5mm", padding: "3mm 5mm" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#475569" }}>Des repères</div>
            <div style={{ fontSize: "15px", color: "#333" }}>Une pomme ≈ 150 g · un paquet de sucre = 1 kg · un crayon ≈ quelques grammes.</div>
          </div>
          <p style={{ textAlign: "center", fontSize: "18px", fontFamily: "'Caveat','Comic Neue',cursive" }}>
            Mon astuce&nbsp;: les petits objets se pèsent en <b>g</b>, les gros en <b>kg</b>.
          </p>
        </div>
      </div>
    </div>
  );
}

/* --- Séance 2 : LE VOLUME ET LA TEMPÉRATURE --- */
const VT_ETAPES = ["Le volume", "La température", "Le tableau de conversion", "Quel instrument ?", "Je retiens"];
/** Petit tableau de conversion des contenances (projeté et sur la leçon). */
function TableauConversion({ big }: { big?: boolean }) {
  const fs = big ? "clamp(18px,3.2vh,30px)" : "15px";
  const th: React.CSSProperties = { border: `2px solid ${MES}`, padding: big ? "2mm 4mm" : "1mm 2mm", textAlign: "center", fontWeight: 800, color: "#fff", background: MES };
  const td: React.CSSProperties = { border: `2px solid ${MES}`, padding: big ? "2mm 4mm" : "1mm 2mm", textAlign: "center", fontWeight: 700, color: "#0f172a" };
  const sub: React.CSSProperties = { fontSize: big ? "0.5em" : "10px", fontWeight: 600, color: "#64748b", display: "block" };
  return (
    <table style={{ borderCollapse: "collapse", margin: "0 auto", fontSize: fs, fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <thead><tr>
        <th style={th}>L<span style={sub}>litre</span></th>
        <th style={th}>dL<span style={sub}>décilitre</span></th>
        <th style={th}>cL<span style={sub}>centilitre</span></th>
        <th style={th}>mL<span style={sub}>millilitre</span></th>
      </tr></thead>
      <tbody>
        <tr><td style={td}>1</td><td style={td}>0</td><td style={td}>0</td><td style={td}>0</td></tr>
        <tr><td style={td}>1</td><td style={td}>5</td><td style={td}>0</td><td style={td}>0</td></tr>
      </tbody>
    </table>
  );
}
export function VolTempDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = VT_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MES }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Sciences · Le volume et la température (2/2)</span>
        <div className="ml-2 flex gap-1.5">{VT_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: MES }}>Le volume</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Le volume, c'est <b>combien de liquide</b> il y a. Je le mesure avec un <b>verre doseur</b>.</p>
            <div className="mx-auto mt-4 max-w-sm"><WikiImage title="Éprouvette graduée" alt="verre doseur gradué" accent={MES} height="clamp(140px,24vh,220px)" /></div>
            <p className="mt-2 text-xl text-stone-700">Unités : le <b>litre (L)</b> et le <b>millilitre (mL)</b> — 1 L = 1000 mL.</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: MES }}>La température</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">La température dit s'il fait <b>chaud</b> ou <b>froid</b>. Je la mesure avec un <b>thermomètre</b>.</p>
            <div className="mx-auto mt-4 max-w-sm"><WikiImage title="Thermomètre" alt="un thermomètre" accent={MES} height="clamp(140px,24vh,220px)" /></div>
            <p className="mt-2 text-xl text-stone-700">Unité : le <b>degré Celsius (°C)</b>. L'eau gèle à 0 °C, notre corps est à 37 °C.</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="mb-2 text-4xl font-extrabold" style={{ color: MES }}>Le tableau de conversion</h2>
            <p className="mb-4 text-xl font-semibold text-stone-600">Pour passer d'une unité à l'autre, je range les chiffres dans les bonnes colonnes.</p>
            <TableauConversion big />
            <div className="mx-auto mt-4 max-w-xl rounded-2xl p-3 text-xl font-bold text-white" style={{ background: MES }}>1 L = 10 dL = 100 cL = 1000 mL</div>
            <p className="mt-3 text-lg text-stone-600">Exemple (2ᵉ ligne) : <b>1 L 500 mL</b> = 1 500 mL (une grande bouteille de soda).</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: MES }}>Quel instrument ?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              <RevealCard q="Mesurer du sirop 🥤" a="le verre doseur (L / mL)" accent={MES} />
              <RevealCard q="Savoir s'il fait froid dehors ❄️" a="le thermomètre (°C)" accent={MES} />
              <RevealCard q="1 litre, c'est combien de mL ?" a="1000 mL" accent={MES} />
              <RevealCard q="La glace fond à…" a="0 °C" accent={MES} />
            </div>
            <p className="mt-4 text-center text-lg text-stone-600">Chaque grandeur a son <b>instrument</b> et son <b>unité</b>.</p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">🥛🌡️</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: MES }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">Le <b>volume</b> → verre doseur (L, mL). 1 L = 1000 mL.</p>
            <p className="text-2xl font-semibold text-stone-600">La <b>température</b> → thermomètre (°C).</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: MES, color: MES }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{VT_ETAPES.length} · {VT_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: MES }}>▶</button>
      </div>
    </div>
  );
}

export function VolTempLecon() {
  const Ligne = ({ title, alt, grandeur, instrument, unite }: { title: string; alt: string; grandeur: string; instrument: string; unite: string }) => (
    <div style={{ border: `3px solid ${MES}`, borderRadius: "5mm", padding: "3mm 5mm", display: "flex", gap: "4mm", alignItems: "center" }}>
      <div style={{ width: "36mm", flexShrink: 0 }}><WikiImage title={title} alt={alt} accent={MES} height="28mm" /></div>
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: "24px", fontWeight: 800, color: MES, fontFamily: "'Caveat','Comic Neue',cursive" }}>{grandeur}</div>
        <div style={{ fontSize: "16px", color: "#333" }}>je mesure avec <b>{instrument}</b></div>
        <div style={{ fontSize: "16px", color: "#333" }}>unité : <b>{unite}</b></div>
      </div>
    </div>
  );
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "38px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: MES, fontFamily: "'Caveat','Comic Neue',cursive" }}>Le volume et la température</h1>
        <p style={{ textAlign: "center", fontSize: "18px", margin: "0 auto 5mm", maxWidth: "158mm", lineHeight: 1.4 }}>
          Pour mesurer, j'utilise le bon <b>instrument</b> et la bonne <b>unité</b>.
        </p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "4mm" }}>
          <Ligne title="Éprouvette graduée" alt="un verre doseur" grandeur="Le volume (les liquides)" instrument="un verre doseur / une éprouvette graduée" unite="litre (L), millilitre (mL)" />
          <Ligne title="Thermomètre" alt="un thermomètre" grandeur="La température" instrument="un thermomètre" unite="degré Celsius (°C)" />
          <div style={{ border: `3px solid ${MES}`, borderRadius: "5mm", padding: "3mm 5mm" }}>
            <div style={{ fontSize: "22px", fontWeight: 800, color: MES, fontFamily: "'Caveat','Comic Neue',cursive", textAlign: "center", marginBottom: "2mm" }}>Le tableau de conversion des contenances</div>
            <TableauConversion />
            <div style={{ textAlign: "center", marginTop: "2mm", fontSize: "16px", fontWeight: 800, color: MES }}>1 L = 10 dL = 100 cL = 1000 mL</div>
            <div style={{ textAlign: "center", fontSize: "13px", color: "#555" }}>(2ᵉ ligne : 1 L 500 mL = 1 500 mL)</div>
          </div>
          <div style={{ border: "2px dashed #94a3b8", borderRadius: "5mm", padding: "2.5mm 5mm" }}>
            <div style={{ fontSize: "14px", fontWeight: 800, color: "#475569" }}>Des repères</div>
            <div style={{ fontSize: "14px", color: "#333" }}>Une petite bouteille = 50 cL = 500 mL · une brique de lait = 1 L · l'eau gèle à 0 °C · notre corps est à 37 °C.</div>
          </div>
          <p style={{ textAlign: "center", fontSize: "16px", fontFamily: "'Caveat','Comic Neue',cursive", margin: 0 }}>
            Mon astuce&nbsp;: à chaque grandeur son instrument et son unité !
          </p>
        </div>
      </div>
    </div>
  );
}

/* --- Fiche « expérience à la maison » : 1 L, combien de verres ? --- */
export function ExperienceBouteilleMaison() {
  const Dots = ({ w = "22mm" }: { w?: string }) => (
    <span style={{ display: "inline-block", width: w, borderBottom: "2px dotted #94a3b8", height: "1em", verticalAlign: "bottom" }} />
  );
  const Step = ({ n, children }: { n: number; children: React.ReactNode }) => (
    <div style={{ display: "flex", gap: "3mm", alignItems: "flex-start", marginBottom: "2mm" }}>
      <span style={{ flexShrink: 0, width: "7mm", height: "7mm", borderRadius: "50%", background: MES, color: "#fff", fontWeight: 800, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px" }}>{n}</span>
      <span style={{ fontSize: "15px", color: "#1f2937", lineHeight: 1.4 }}>{children}</span>
    </div>
  );
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", borderBottom: "2px solid #111", paddingBottom: "2mm" }}>
          <div>
            <h1 style={{ fontSize: "34px", margin: 0, fontWeight: 700, color: MES, fontFamily: "'Caveat','Comic Neue',cursive" }}>Mon expérience à la maison</h1>
            <div style={{ fontSize: "20px", fontWeight: 800, color: "#0f172a" }}>1 litre, combien de verres&nbsp;?</div>
          </div>
          <div style={{ fontSize: "14px" }}>Prénom&nbsp;: <Dots w="34mm" /></div>
        </div>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "4mm", marginTop: "4mm" }}>
          <div style={{ display: "flex", gap: "5mm", alignItems: "center" }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: "20px", fontWeight: 800, color: MES, fontFamily: "'Caveat','Comic Neue',cursive" }}>Ce qu'il me faut</div>
              <div style={{ fontSize: "15px", color: "#333" }}>une <b>bouteille d'eau pleine de 1 litre (1 L)</b>, un <b>verre</b>, et un évier (pour ne pas tout renverser&nbsp;!).</div>
            </div>
            <div style={{ width: "30mm", flexShrink: 0 }}><WikiImage title="Bouteille d'eau" alt="une bouteille d'eau" accent={MES} height="30mm" /></div>
          </div>

          <div style={{ border: `3px solid ${MES}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "20px", fontWeight: 800, color: MES, fontFamily: "'Caveat','Comic Neue',cursive", marginBottom: "2mm" }}>Ce que je fais</div>
            <Step n={1}>Je remplis mon verre <b>à ras bord</b> en versant l'eau de la bouteille.</Step>
            <Step n={2}>Je recommence jusqu'à <b>vider toute la bouteille</b> (1 litre), et je <b>compte</b> les verres.</Step>
            <Step n={3}>J'écris mon résultat&nbsp;: avec 1 litre, j'ai rempli <Dots /> verres.</Step>
          </div>

          <div style={{ border: `3px solid ${MES}`, borderRadius: "5mm", padding: "4mm 5mm" }}>
            <div style={{ fontSize: "20px", fontWeight: 800, color: MES, fontFamily: "'Caveat','Comic Neue',cursive", marginBottom: "2mm" }}>Je réfléchis</div>
            <div style={{ fontSize: "15px", color: "#1f2937", lineHeight: 1.6 }}>
              1 litre = <b>1000 mL</b>. Si j'ai rempli <Dots w="14mm" /> verres, alors <b>un verre</b> contient à peu près&nbsp;:<br />
              1000 mL ÷ <Dots w="14mm" /> = <Dots w="20mm" /> mL environ.
            </div>
          </div>

          <div style={{ border: "2px dashed #94a3b8", borderRadius: "5mm", padding: "3mm 5mm" }}>
            <div style={{ fontSize: "15px", fontWeight: 800, color: "#475569", marginBottom: "1mm" }}>Pour aller plus loin (si je veux)</div>
            <div style={{ fontSize: "14px", color: "#333" }}>Je refais avec une <b>petite bouteille de 50 cL (500 mL)</b>&nbsp;: combien de verres&nbsp;? <Dots w="16mm" /> verres.</div>
            <table style={{ borderCollapse: "collapse", margin: "2mm auto 0", fontSize: "13px", width: "100%" }}>
              <thead><tr>
                <th style={{ border: "2px solid #94a3b8", padding: "1.5mm", background: "#f1f5f9" }}>Ma bouteille</th>
                <th style={{ border: "2px solid #94a3b8", padding: "1.5mm", background: "#f1f5f9" }}>Sa contenance</th>
                <th style={{ border: "2px solid #94a3b8", padding: "1.5mm", background: "#f1f5f9" }}>Nombre de verres</th>
              </tr></thead>
              <tbody>
                <tr><td style={{ border: "2px solid #94a3b8", padding: "3mm" }}>la grande</td><td style={{ border: "2px solid #94a3b8", padding: "3mm", textAlign: "center" }}>1 L = 1000 mL</td><td style={{ border: "2px solid #94a3b8", padding: "3mm" }} /></tr>
                <tr><td style={{ border: "2px solid #94a3b8", padding: "3mm" }}>la petite</td><td style={{ border: "2px solid #94a3b8", padding: "3mm", textAlign: "center" }}>50 cL = 500 mL</td><td style={{ border: "2px solid #94a3b8", padding: "3mm" }} /></tr>
              </tbody>
            </table>
          </div>

          <p style={{ textAlign: "center", fontSize: "16px", fontWeight: 700, color: MES, margin: 0 }}>Je rapporte ma fiche en classe pour comparer nos résultats&nbsp;! 🥤</p>
        </div>
      </div>
    </div>
  );
}
