/**
 * Questionner le monde — séances du mardi 13.
 * - Histoire : « Raconter la Préhistoire » (synthèse de la séquence Préhistoire).
 * - Sciences : « L'eau change d'état — faire fondre et faire geler » (nouvelle séquence).
 * Modèle validé : diaporama à projeter (vraies photos Wikimedia) + leçon/fiche.
 */
import { useRef, useState } from "react";
import { WikiImage } from "./WikiImage";
import { requestFullscreen } from "../lib/board";
import { LandscapeDoc, Feuille, Col, Trait, Consigne, Lines, CURSIVE } from "./ficheLandscape";

const MES = "#0e7490";

/* ===================== HISTOIRE — Raconter la Préhistoire (synthèse) ===================== */
export function RaconterPrehistoireFiche() {
  return (
    <LandscapeDoc>
      <Feuille titre="Je raconte la Préhistoire" sousTitre="Synthèse — CE1 · CE2">
        <Col>
          <div>
            <Consigne n={1}>Numérote ces étapes dans l'ordre (de 1 = le plus ancien à 5).</Consigne>
            <div style={{ display: "flex", flexDirection: "column", gap: "2mm", marginTop: "1mm" }}>
              {["les peintures des grottes", "les premiers hommes", "l'invention de l'écriture", "la maîtrise du feu", "l'agriculture et les premiers villages"].map((e) => (
                <div key={e} style={{ display: "flex", alignItems: "center", gap: "3mm" }}>
                  <span style={{ width: "9mm", height: "9mm", border: "1.8px solid #111", borderRadius: "2mm", flexShrink: 0 }} />
                  <span style={{ fontSize: "17px", fontFamily: CURSIVE }}>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Consigne n={2}>Vrai ou faux ?</Consigne>
            <div style={{ fontFamily: CURSIVE, fontSize: "16px", lineHeight: 1.7 }}>
              « La Préhistoire est la période la plus récente. » ……<br />
              « Les premiers hommes étaient nomades. » ……<br />
              « La Préhistoire se termine avec l'écriture. » ……
            </div>
          </div>
        </Col>
        <Trait />
        <Col>
          <div>
            <Consigne n={3}>Complète la frise avec les mots : Paléolithique · Néolithique.</Consigne>
            <div style={{ display: "flex", alignItems: "stretch", marginTop: "2mm", border: "2px solid #111", borderRadius: "2mm", overflow: "hidden" }}>
              <div style={{ flex: 1, borderRight: "2px solid #111", padding: "3mm", textAlign: "center" }}>
                <div style={{ fontSize: "12px", color: "#555" }}>chasseurs-cueilleurs, feu, grottes</div>
                <div style={{ borderBottom: "1.6px dotted #64748b", height: "8mm", margin: "2mm 4mm 0" }} />
              </div>
              <div style={{ flex: 1, padding: "3mm", textAlign: "center" }}>
                <div style={{ fontSize: "12px", color: "#555" }}>agriculture, élevage, villages</div>
                <div style={{ borderBottom: "1.6px dotted #64748b", height: "8mm", margin: "2mm 4mm 0" }} />
              </div>
            </div>
            <div style={{ textAlign: "center", fontSize: "11px", color: "#777", marginTop: "1mm" }}>← le plus ancien ———— vers nous →</div>
          </div>
          <div>
            <Consigne n={4}>Raconte la Préhistoire en 3 ou 4 phrases (utilise les mots de la frise).</Consigne>
            <Lines n={5} />
          </div>
        </Col>
      </Feuille>
    </LandscapeDoc>
  );
}

/* ===================== SCIENCES — L'eau change d'état ===================== */
const EAU_ETAPES = ["Les 3 états de l'eau", "Faire fondre", "Faire geler", "Dans la nature", "Je retiens"];
function Card({ title, alt, mot, sub }: { title: string; alt: string; mot: string; sub: string }) {
  return (
    <div className="rounded-2xl border-4 bg-white p-2 text-center" style={{ borderColor: MES }}>
      <WikiImage title={title} alt={alt} accent={MES} height="clamp(110px,20vh,180px)" />
      <div className="mt-1 text-xl font-extrabold" style={{ color: MES }}>{mot}</div>
      <div className="text-sm text-stone-500">{sub}</div>
    </div>
  );
}
export function EauEtatDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = EAU_ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: MES }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Sciences · L'eau change d'état</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{EAU_ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-4xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: MES }}>L'eau a 3 états</h2>
            <div className="grid gap-3 sm:grid-cols-3">
              <Card title="Glaçon" alt="glaçon" mot="solide" sub="la glace (dure)" />
              <Card title="Eau" alt="eau liquide" mot="liquide" sub="l'eau qui coule" />
              <Card title="Nuage" alt="vapeur, nuage" mot="gazeux" sub="la vapeur d'eau (invisible)" />
            </div>
            <p className="mt-3 text-center text-lg text-stone-600">C'est <b>toujours de l'eau</b>, mais elle change de <b>forme</b> !</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MES }}>Faire fondre</h2>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Quand on <b>réchauffe</b> la glace, elle <b>fond</b> : le solide devient liquide.</p>
            <div className="mt-4 text-5xl">🧊&nbsp;→&nbsp;💧</div>
            <p className="mt-3 text-xl text-stone-700">La glace fond à partir de <b>0 °C</b>. On appelle ça la <b>fusion</b>.</p>
          </div>
        )}
        {i === 2 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MES }}>Faire geler</h2>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Quand on <b>refroidit</b> l'eau (au congélateur), elle <b>gèle</b> : le liquide devient solide.</p>
            <div className="mt-4 text-5xl">💧&nbsp;→&nbsp;🧊</div>
            <p className="mt-3 text-xl text-stone-700">L'eau gèle à <b>0 °C</b>. On appelle ça la <b>solidification</b>.</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: MES }}>Dans la nature</h2>
            <div className="mx-auto mt-3 max-w-md"><WikiImage title="Glace" alt="glace dans la nature" accent={MES} height="clamp(130px,24vh,210px)" /></div>
            <p className="mt-3 text-xl text-stone-600">En hiver, les flaques <b>gèlent</b>. Au soleil, la glace et la neige <b>fondent</b>. L'eau change d'état tout le temps autour de nous.</p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">🧊💧☁️</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: MES }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">On <b>réchauffe</b> → la glace <b>fond</b> (solide → liquide).</p>
            <p className="text-2xl font-semibold text-stone-600">On <b>refroidit</b> → l'eau <b>gèle</b> (liquide → solide). À <b>0 °C</b>.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: MES, color: MES }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{EAU_ETAPES.length} · {EAU_ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: MES }}>▶</button>
      </div>
    </div>
  );
}

export function EauEtatLecon() {
  const Row = ({ title, alt, etat, desc }: { title: string; alt: string; etat: string; desc: string }) => (
    <div style={{ border: `3px solid ${MES}`, borderRadius: "5mm", padding: "3mm 5mm", display: "flex", gap: "4mm", alignItems: "center" }}>
      <div style={{ width: "34mm", flexShrink: 0 }}><WikiImage title={title} alt={alt} accent={MES} height="26mm" /></div>
      <div><div style={{ fontSize: "24px", fontWeight: 800, color: MES, fontFamily: CURSIVE }}>{etat}</div><div style={{ fontSize: "15px", color: "#333" }}>{desc}</div></div>
    </div>
  );
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "36px", margin: "0 0 1mm", textAlign: "center", fontWeight: 700, color: MES, fontFamily: CURSIVE }}>L'eau change d'état</h1>
        <p style={{ textAlign: "center", fontSize: "16px", margin: "0 auto 5mm", maxWidth: "160mm" }}>C'est toujours de l'eau, mais elle peut changer de <b>forme</b>.</p>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-around", gap: "4mm" }}>
          <Row title="Glaçon" alt="glaçon" etat="Solide (la glace)" desc="dure, elle garde sa forme" />
          <Row title="Eau" alt="eau" etat="Liquide (l'eau)" desc="elle coule, elle prend la forme du récipient" />
          <div style={{ border: `3px solid ${MES}`, borderRadius: "5mm", padding: "3mm 5mm", textAlign: "center" }}>
            <div style={{ fontSize: "20px", fontWeight: 800, color: MES, fontFamily: CURSIVE }}>Fondre et geler</div>
            <div style={{ fontSize: "20px", marginTop: "1mm" }}>🧊 → 💧 je <b>réchauffe</b> : la glace <b>fond</b> &nbsp;·&nbsp; 💧 → 🧊 je <b>refroidis</b> : l'eau <b>gèle</b></div>
            <div style={{ fontSize: "14px", color: "#555" }}>L'eau gèle et la glace fond à <b>0 °C</b>.</div>
          </div>
        </div>
        <p style={{ textAlign: "center", fontSize: "16px", fontFamily: CURSIVE, marginTop: "3mm" }}>Mon astuce&nbsp;: chaud → ça fond ; froid → ça gèle.</p>
      </div>
    </div>
  );
}

export function EauEtatExp() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", padding: "9mm", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ border: "3px solid #111", borderRadius: "4mm", padding: "7mm", minHeight: "283mm", boxSizing: "border-box", display: "flex", flexDirection: "column" }}>
        <h1 style={{ fontSize: "30px", margin: "0 0 2mm", textAlign: "center", fontWeight: 700, color: MES, fontFamily: CURSIVE }}>Mon expérience : je fais fondre un glaçon</h1>
        <p style={{ fontSize: "14px", margin: "0 0 3mm" }}><b>Question :</b> que devient un glaçon posé dans la classe ? <b>Je prévois :</b> <span style={{ borderBottom: "1.5px dotted #64748b", display: "inline-block", width: "90mm" }} /></p>
        <div style={{ display: "flex", gap: "4mm", flex: 1 }}>
          {["Au début (le glaçon)", "Après 10 minutes", "À la fin"].map((t) => (
            <div key={t} style={{ flex: 1, border: `2px solid ${MES}`, borderRadius: "4mm", display: "flex", flexDirection: "column" }}>
              <div style={{ background: MES, color: "#fff", fontSize: "13px", fontWeight: 800, textAlign: "center", padding: "1.5mm" }}>{t}</div>
              <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", fontSize: "13px" }}>je dessine</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "4mm", border: "2px dashed #94a3b8", borderRadius: "4mm", padding: "3mm 5mm" }}>
          <div style={{ fontSize: "15px" }}><b>Je conclus :</b> le glaçon (solide) est devenu de l'…………… (……………). Il a ………………… .</div>
          <div style={{ fontSize: "13px", color: "#555", marginTop: "1mm" }}>mots à utiliser : eau · liquide · fondu</div>
        </div>
      </div>
    </div>
  );
}
