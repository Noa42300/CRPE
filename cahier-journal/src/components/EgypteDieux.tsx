/**
 * Histoire — Antiquité · L'Égypte des pharaons · Les DIEUX de l'Égypte.
 * Un cours « point spécifique » qui passionne : les dieux à tête d'animal
 * (Rê, Anubis, Horus, Isis, Osiris) et la grande légende d'Osiris.
 *  • Diaporama à projeter (vraies images) · Leçon à coller · Fiche d'exercices.
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { WikiImage } from "./WikiImage";
import { LeconCahier, MotCle } from "./LeconCahier";

const HIST = "#b45309";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

/* ----------------------------- DIAPORAMA ----------------------------- */
const ET = ["Les dieux de l'Égypte", "Beaucoup de dieux", "Rê, le Soleil", "Anubis et les momies", "La légende d'Osiris", "Je retiens"];
export function EgypteDieuxDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: HIST }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Histoire · Les dieux de l'Égypte</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center"><WikiImage title="Anubis" alt="le dieu Anubis, à tête de chacal" accent={HIST} height="clamp(180px, 36vh, 330px)" /></div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: HIST }}>Les dieux de l'Égypte</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Dans l'Antiquité, les Égyptiens croyaient en de très nombreux dieux… souvent à <b>tête d'animal</b> !</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Beaucoup de dieux</h2>
            <p className="mt-3 text-2xl text-stone-600">Les Égyptiens priaient <b>des centaines de dieux</b> (on dit qu'ils étaient <b>polythéistes</b>). Chaque dieu protégeait quelque chose : le Soleil, le Nil, les récoltes…</p>
            <div className="mt-3 flex justify-center"><WikiImage title="Horus" alt="le dieu Horus, à tête de faucon" accent={HIST} height="clamp(150px, 30vh, 270px)" /></div>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Rê, le dieu du Soleil</h2>
            <p className="mt-3 text-2xl text-stone-600"><b>Rê</b> (ou Râ) est le <b>plus important</b> des dieux. Chaque jour, il traverse le ciel sur sa barque et apporte la lumière. ☀️</p>
            <div className="mt-3 flex justify-center"><WikiImage title="Rê" alt="le dieu Rê, dieu du Soleil" accent={HIST} height="clamp(150px, 30vh, 270px)" /></div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: HIST }}>Anubis et les momies</h2>
            <p className="mt-3 text-2xl text-stone-600"><b>Anubis</b>, à <b>tête de chacal</b> (un chien du désert), est le dieu des morts. C'est lui qui veille sur les <b>momies</b> pour le grand voyage vers l'au-delà.</p>
            <div className="mt-3 flex justify-center"><WikiImage title="Anubis" alt="Anubis prépare la momie" accent={HIST} height="clamp(150px, 30vh, 270px)" /></div>
          </div>
        )}
        {i === 4 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-3xl font-extrabold" style={{ color: HIST }}>La légende d'Osiris</h2>
            <div className="mt-2 flex items-center gap-5">
              <WikiImage title="Osiris" alt="le dieu Osiris" accent={HIST} height="clamp(150px, 30vh, 260px)" />
              <ol className="text-left text-xl text-stone-700" style={{ lineHeight: 1.5 }}>
                <li>• <b>Osiris</b> était un roi aimé des Égyptiens.</li>
                <li>• Son frère <b>Seth</b>, jaloux, le fit disparaître.</li>
                <li>• <b>Isis</b>, son épouse magicienne, le ramena à la vie.</li>
                <li>• Leur fils <b>Horus</b> vengea son père.</li>
                <li>• Osiris devint le <b>roi du royaume des morts</b>.</li>
              </ol>
            </div>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">𓂀</div>
            <h1 className="text-4xl font-extrabold" style={{ color: HIST }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Les Égyptiens avaient <b>beaucoup de dieux</b>, souvent à <b>tête d'animal</b> : <b>Rê</b> (le Soleil), <b>Anubis</b> (les morts), <b>Horus</b> (le ciel), <b>Isis</b> et <b>Osiris</b>.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: HIST, color: HIST }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET.length} · {ET[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: HIST }}>▶</button>
      </div>
    </div>
  );
}

/* ------------------------------- LEÇON ------------------------------- */
export function EgypteDieuxLecon() {
  return (
    <LeconCahier
      titre="Les dieux de l'Égypte" emojiL="𓁟" emojiR="☀️" accent={HIST} variant="cote"
      sousTitre="HISTOIRE · L'ANTIQUITÉ — L'ÉGYPTE DES PHARAONS"
      visuel={<WikiImage title="Anubis" alt="le dieu Anubis" accent={HIST} height="140mm" />} visuelMaxH="150mm"
      legende="Anubis, le dieu à tête de chacal."
      points={[
        { t: <>Les Égyptiens croyaient en de très nombreux dieux : ils étaient <MotCle accent={HIST}>polythéistes</MotCle>. Beaucoup de dieux ont une <MotCle accent={HIST}>tête d'animal</MotCle>.</> },
        { t: <><MotCle accent={HIST}>Rê</MotCle> est le dieu du <b>Soleil</b>, le plus important. <MotCle accent={HIST}>Anubis</MotCle> (tête de chacal) est le dieu des morts et des <b>momies</b>. <MotCle accent={HIST}>Horus</MotCle> (tête de faucon) est le dieu du ciel.</> },
        { t: <>La <MotCle accent={HIST}>légende d'Osiris</MotCle> : le roi Osiris, tué par son frère Seth, est ramené à la vie par <b>Isis</b> ; leur fils <b>Horus</b> le venge. Osiris devient le roi des morts.</> },
      ]}
      savaisTu={<>💡 <b style={{ color: HIST }}>Le savais-tu ?</b> Le pharaon était considéré comme le fils des dieux sur Terre, le représentant d'Horus.</>}
    />
  );
}

/* ------------------------------- EXOS ------------------------------- */
export function EgypteDieuxExos() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "2.5px solid #111", borderRadius: "2mm", padding: "5mm 6mm", minHeight: "265mm", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "2px solid #111", paddingBottom: "1.5mm", marginBottom: "3mm" }}>
          <h1 style={{ fontSize: "24px", margin: 0, fontWeight: 700, fontFamily: CURSIVE }}>Les dieux de l'Égypte</h1>
          <span style={{ fontSize: "12px", fontWeight: 700, fontFamily: CONSIGNE_FONT }}>Prénom : ..................</span>
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT }}>1. Relie chaque dieu à son rôle.</div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: CURSIVE, fontSize: "18px", marginTop: "2mm", padding: "0 8mm" }}>
          <div style={{ lineHeight: 2.3 }}><div>Rê •</div><div>Anubis •</div><div>Horus •</div></div>
          <div style={{ textAlign: "right", lineHeight: 2.3 }}><div>• le dieu du ciel (faucon)</div><div>• le dieu du Soleil</div><div>• le dieu des morts (chacal)</div></div>
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "3mm" }}>2. Complète avec : <i>animal · polythéistes · Soleil · momies</i>.</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", lineHeight: 2, marginTop: "1mm" }}>
          Les Égyptiens priaient beaucoup de dieux : ils étaient ...................... .<br />
          Beaucoup de dieux ont une tête d'...................... .<br />
          Rê est le dieu du ...................... . Anubis veille sur les ...................... .
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "3mm" }}>3. La légende d'Osiris — remets dans l'ordre (1 à 4).</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "17px", lineHeight: 1.9, marginTop: "1mm" }}>
          ….. Isis ramène Osiris à la vie. &nbsp;&nbsp; ….. Seth, jaloux, fait disparaître Osiris.<br />
          ….. Osiris devient le roi des morts. &nbsp;&nbsp; ….. Horus venge son père.
        </div>

        <div style={{ fontSize: "14px", fontWeight: 800, fontFamily: CONSIGNE_FONT, marginTop: "3mm" }}>4. Invente et dessine ton dieu égyptien (avec une tête d'animal) et donne-lui un rôle.</div>
        <div style={{ border: "1.5px dashed #94a3b8", borderRadius: "3mm", height: "40mm", marginTop: "1.5mm" }} />
      </div>
    </div>
  );
}
