/**
 * EMC — « Le maire et la mairie » (découvrir les institutions proches, le vote).
 * Petite séance citoyenne : diaporama à projeter + leçon à coller.
 * Cycle 2 — EMC, « la règle et le droit » / « la vie démocratique ».
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { WikiImage } from "./WikiImage";

const EMC = "#9333ea";
const CURSIVE = "'Caveat','Comic Neue',cursive";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";

/* Le maire s'occupe de… (pictos simples). */
const ROLES = [
  { i: "🏫", t: "l'école" },
  { i: "🛣️", t: "les routes" },
  { i: "👮", t: "la sécurité" },
  { i: "🎉", t: "les fêtes" },
  { i: "🌳", t: "les parcs et jardins" },
  { i: "🗑️", t: "la propreté" },
];

/* Petit dessin : une écharpe tricolore (le maire). */
function Echarpe({ h = 90 }: { h?: number }) {
  return (
    <svg viewBox="0 0 120 120" width={h} height={h} aria-label="écharpe tricolore">
      <g transform="rotate(20 60 60)">
        <rect x="20" y="10" width="26" height="100" fill="#1d4ed8" />
        <rect x="46" y="10" width="26" height="100" fill="#fff" stroke="#e5e7eb" strokeWidth="1" />
        <rect x="72" y="10" width="26" height="100" fill="#dc2626" />
      </g>
    </svg>
  );
}

/* Petit dessin : la mairie (bâtiment + drapeau). */
function Mairie({ h = 150 }: { h?: number }) {
  return (
    <svg viewBox="0 0 200 150" width={h * 200 / 150} height={h} aria-label="la mairie">
      <rect x="20" y="55" width="160" height="80" fill="#f8fafc" stroke="#334155" strokeWidth="3" />
      <polygon points="12,55 100,22 188,55" fill="#e2e8f0" stroke="#334155" strokeWidth="3" />
      {[36, 64, 92, 120, 148].map((x) => <rect key={x} x={x} y="62" width="10" height="34" fill="#cbd5e1" stroke="#334155" strokeWidth="2" />)}
      <rect x="86" y="100" width="28" height="35" fill="#94a3b8" stroke="#334155" strokeWidth="2" />
      {/* drapeau */}
      <line x1="100" y1="22" x2="100" y2="2" stroke="#334155" strokeWidth="2" />
      <rect x="100" y="2" width="9" height="6" fill="#1d4ed8" />
      <rect x="109" y="2" width="9" height="6" fill="#fff" stroke="#e5e7eb" strokeWidth="0.5" />
      <rect x="118" y="2" width="9" height="6" fill="#dc2626" />
      <text x="100" y="128" textAnchor="middle" fontSize="9" fontWeight="700" fill="#334155" fontFamily={CONSIGNE_FONT}>MAIRIE</text>
    </svg>
  );
}

const ET = ["Le maire et la mairie", "La mairie", "Le maire", "À quoi sert le maire ?", "On choisit en votant", "Je retiens"];
export function EmcMaireDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: EMC }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">EMC · Le maire et la mairie</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="flex justify-center"><Mairie h={160} /></div>
            <h1 className="mt-2 text-4xl font-extrabold sm:text-5xl" style={{ color: EMC }}>Le maire et la mairie</h1>
            <p className="mt-2 text-2xl font-semibold text-stone-600">Qui dirige notre commune&nbsp;? À quoi sert la mairie&nbsp;?</p>
          </div>
        )}
        {i === 1 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: EMC }}>La mairie</h2>
            <div className="mt-3 flex justify-center"><WikiImage title="Hôtel de ville" alt="un hôtel de ville (mairie)" accent={EMC} height="clamp(170px, 34vh, 320px)" /></div>
            <p className="mt-3 text-2xl text-stone-600">C'est la <b>maison de la commune</b>. On reconnaît le <b>drapeau</b> 🇫🇷 et la devise « Liberté, Égalité, Fraternité ».</p>
            <p className="mt-1 text-xl text-stone-500">On y va pour : la carte d'identité, se marier, inscrire les enfants à l'école…</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: EMC }}>Le maire</h2>
            <div className="mt-3 flex justify-center"><Echarpe h={140} /></div>
            <p className="mt-3 text-2xl text-stone-600">C'est la personne qui <b>dirige la commune</b>. Les jours de fête, il porte une <b>écharpe bleu-blanc-rouge</b>.</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-2xl">
            <h2 className="mb-3 text-center text-4xl font-extrabold" style={{ color: EMC }}>À quoi sert le maire ?</h2>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {ROLES.map((r) => (
                <div key={r.t} className="flex flex-col items-center rounded-2xl border-2 bg-white px-3 py-3 text-center" style={{ borderColor: EMC }}>
                  <span className="text-4xl">{r.i}</span>
                  <span className="mt-1 text-xl font-semibold text-stone-800">{r.t}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xl text-stone-500">Il s'occupe de la <b>vie de tous les jours</b> dans la commune.</p>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <div className="text-6xl">🗳️</div>
            <h2 className="mt-2 text-4xl font-extrabold" style={{ color: EMC }}>On choisit le maire en votant</h2>
            <p className="mt-3 text-2xl text-stone-600">Les <b>habitants votent</b> lors des <b>élections</b> (tous les 6 ans). Voter, c'est <b>choisir</b>.</p>
            <p className="mt-1 text-xl text-stone-500">On met un bulletin dans l'urne : chacun donne son avis.</p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 flex justify-center gap-4"><Mairie h={110} /><Echarpe h={100} /></div>
            <h1 className="text-4xl font-extrabold" style={{ color: EMC }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">La <b>mairie</b> est la maison de la commune. Le <b>maire</b>, élu par les habitants, s'occupe de la commune.</p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: EMC, color: EMC }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ET.length} · {ET[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: EMC }}>▶</button>
      </div>
    </div>
  );
}

export function EmcMaireLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <h1 style={{ fontSize: "38px", margin: "0 0 3mm", textAlign: "center", fontWeight: 700, color: EMC, fontFamily: CURSIVE }}>Le maire et la mairie</h1>
      <div style={{ display: "flex", gap: "5mm", alignItems: "stretch" }}>
        <div style={{ flex: 1, border: `2.5px solid ${EMC}`, borderRadius: "4mm", padding: "3mm", textAlign: "center" }}>
          <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "15px", color: EMC }}>La mairie</div>
          <div style={{ display: "flex", justifyContent: "center", margin: "1mm 0" }}><Mairie h={95} /></div>
          <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>C'est la <b>maison de la commune</b> (drapeau, « Liberté, Égalité, Fraternité »).</div>
        </div>
        <div style={{ flex: 1, border: `2.5px solid ${EMC}`, borderRadius: "4mm", padding: "3mm", textAlign: "center" }}>
          <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "15px", color: EMC }}>Le maire</div>
          <div style={{ display: "flex", justifyContent: "center", margin: "1mm 0" }}><Echarpe h={80} /></div>
          <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>Il <b>dirige la commune</b>. Il porte une <b>écharpe bleu-blanc-rouge</b>.</div>
        </div>
      </div>
      <div style={{ marginTop: "3mm" }}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "15px", color: EMC, marginBottom: "1.5mm" }}>Le maire s'occupe de…</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2mm" }}>
          {ROLES.map((r) => (
            <div key={r.t} style={{ display: "flex", alignItems: "center", gap: "2mm", border: `2px solid ${EMC}`, borderRadius: "3mm", padding: "1.5mm 3mm" }}>
              <span style={{ fontSize: "24px" }}>{r.i}</span>
              <span style={{ fontFamily: CURSIVE, fontSize: "18px" }}>{r.t}</span>
            </div>
          ))}
        </div>
      </div>
      <div style={{ marginTop: "3mm", background: "#faf5ff", border: `2px dashed ${EMC}`, borderRadius: "4mm", padding: "2.5mm 5mm", textAlign: "center", fontFamily: CURSIVE, fontSize: "19px" }}>
        On <b>choisit le maire en votant</b> : les habitants votent aux <b>élections</b>. 🗳️
      </div>
    </div>
  );
}
