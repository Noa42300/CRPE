/**
 * Maths — Le sens de la multiplication (groupes égaux).
 * Remédiation du problème de P1 : les élèves faisaient 6 + 4 au lieu de 6 × 4.
 *  • Diaporama à projeter (addition réitérée → multiplication).
 *  • Leçon à coller (cahier rouge).
 *  • Feuille d'exercices paysage (dessiner les groupes, écrire la multiplication, problèmes).
 *  • Référence « Toutes mes tables de multiplication » (à coller, 1 table / semaine à apprendre).
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { LandscapeDoc, Feuille, Col, Trait, Consigne, Exemple, Lines, Defi, CURSIVE } from "./ficheLandscape";
import { CONSIGNE_FONT } from "./FichePedagogiqueA4";

const ACC = "#4338ca"; // indigo

/* Petits ronds pour figurer un groupe. */
function Groupe({ n, color }: { n: number; color: string }) {
  return (
    <span style={{ display: "inline-flex", gap: "2px", border: `2px solid ${color}`, borderRadius: "8px", padding: "3px 5px", margin: "0 3px" }}>
      {Array.from({ length: n }).map((_, i) => <span key={i} style={{ width: 12, height: 12, borderRadius: "50%", background: color, display: "inline-block" }} />)}
    </span>
  );
}

function RevealM({ q, a }: { q: string; a: string }) {
  const [on, setOn] = useState(false);
  return (
    <button onClick={() => setOn((v) => !v)} className="rounded-2xl border-2 bg-white px-4 py-3 text-center transition hover:scale-[1.03]" style={{ borderColor: ACC }}>
      <div className="text-2xl font-extrabold text-stone-700">{q}</div>
      <div className={`mt-1 text-2xl font-extrabold ${on ? "" : "opacity-0"}`} style={{ color: ACC, fontFamily: CURSIVE }}>{on ? a : "?"}</div>
    </button>
  );
}

const ETAPES = ["Des groupes égaux", "On additionne", "On va plus vite : ×", "Le piège !", "À toi", "Je retiens"];
export function MultiplicationDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ETAPES.length - 1;
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: ACC }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Maths · Le sens de la multiplication</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ETAPES.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="w-full max-w-3xl text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: ACC }}>3 paquets de 4 bonbons</h1>
            <div className="mt-6 flex justify-center">{[0, 1, 2].map((k) => <Groupe key={k} n={4} color={ACC} />)}</div>
            <p className="mt-6 text-2xl font-semibold text-stone-600">Combien de bonbons en tout&nbsp;?</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: ACC }}>J'additionne les groupes</h2>
            <div className="mt-6 flex items-center justify-center gap-3">{[0, 1, 2].map((k) => <Groupe key={k} n={4} color={ACC} />)}</div>
            <p className="mt-6 text-4xl font-extrabold" style={{ fontFamily: CURSIVE }}>4 + 4 + 4 = 12</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: ACC }}>On écrit plus vite&nbsp;: ×</h2>
            <p className="mt-4 text-2xl font-semibold text-stone-600">3 groupes de 4, c'est <b>3 fois 4</b>.</p>
            <p className="mt-5 text-5xl font-extrabold" style={{ color: ACC, fontFamily: CURSIVE }}>4 + 4 + 4 = 3 × 4 = 12</p>
            <p className="mt-4 text-2xl">Le signe <b style={{ color: ACC }}>×</b> veut dire « <b>fois</b> ».</p>
          </div>
        )}
        {i === 3 && (
          <div className="w-full max-w-3xl text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: "#dc2626" }}>⚠️ Attention au piège&nbsp;!</h2>
            <p className="mt-4 text-2xl font-semibold text-stone-600">« Dans la classe, il y a <b>6 tables</b> de <b>4 élèves</b>. »</p>
            <div className="mt-5 flex flex-col items-center gap-2 text-3xl font-extrabold">
              <span style={{ color: "#dc2626" }}>6 + 4 = 10 &nbsp;❌</span>
              <span style={{ color: "#16a34a" }}>6 × 4 = 24 &nbsp;✓</span>
            </div>
            <p className="mt-4 text-xl text-stone-500">Des <b>groupes égaux</b> → on <b>multiplie</b> (on ne fait pas +).</p>
          </div>
        )}
        {i === 4 && (
          <div className="w-full max-w-3xl">
            <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: ACC }}>À toi de jouer</h2>
            <div className="grid grid-cols-3 gap-3">
              <RevealM q="2 × 5" a="= 10" />
              <RevealM q="3 × 3" a="= 9" />
              <RevealM q="4 × 2" a="= 8" />
              <RevealM q="5 × 2" a="= 10" />
              <RevealM q="2 × 6" a="= 12" />
              <RevealM q="3 × 5" a="= 15" />
            </div>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-3 text-6xl">✖️</div>
            <h1 className="text-4xl font-extrabold sm:text-5xl" style={{ color: ACC }}>Je retiens</h1>
            <p className="mt-4 text-2xl font-semibold text-stone-600">Des <b>groupes égaux</b> → je <b>multiplie</b>.</p>
            <p className="text-2xl font-semibold text-stone-600"><b>a + a + a = 3 × a</b></p>
          </div>
        )}
      </div>
      <div className="flex items-center justify-between px-5 py-3">
        <button onClick={() => setI((n) => Math.max(0, n - 1))} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: ACC, color: ACC }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ETAPES.length} · {ETAPES[i]}</span>
        <button onClick={() => setI((n) => Math.min(last, n + 1))} disabled={i === last} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: ACC }}>▶</button>
      </div>
    </div>
  );
}

function GrosGroupe({ n, color }: { n: number; color: string }) {
  return (
    <span style={{ display: "inline-flex", gap: "5px", border: `3px solid ${color}`, borderRadius: "12px", padding: "7px 9px" }}>
      {Array.from({ length: n }).map((_, i) => <span key={i} style={{ width: 20, height: 20, borderRadius: "50%", background: color, display: "inline-block" }} />)}
    </span>
  );
}

export function MultiplicationLecon() {
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", display: "flex", flexDirection: "column", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      {/* Gros titre */}
      <h1 style={{ fontSize: "48px", margin: "0 0 2mm", textAlign: "center", fontWeight: 700, color: ACC, fontFamily: CURSIVE }}>La multiplication ✖️</h1>

      {/* Le grand schéma : groupes → addition → multiplication */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "8mm" }}>
        <div style={{ textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", gap: "8mm", marginBottom: "4mm" }}>
            <GrosGroupe n={4} color={ACC} /><GrosGroupe n={4} color={ACC} /><GrosGroupe n={4} color={ACC} />
          </div>
          <div style={{ fontSize: "34px", fontWeight: 700, fontFamily: CURSIVE, color: "#111" }}>3 groupes de 4</div>
          <div style={{ fontSize: "40px", fontWeight: 800, fontFamily: CURSIVE, marginTop: "2mm" }}>
            4 + 4 + 4 &nbsp;=&nbsp; <span style={{ color: ACC }}>3 × 4</span> &nbsp;=&nbsp; 12
          </div>
        </div>

        {/* La règle en grosse pastille */}
        <div style={{ margin: "0 auto", background: "#eef2ff", border: `4px solid ${ACC}`, borderRadius: "10mm", padding: "5mm 10mm", textAlign: "center", maxWidth: "150mm" }}>
          <div style={{ fontSize: "30px", fontWeight: 700, color: ACC, fontFamily: CURSIVE, lineHeight: 1.15 }}>
            Des groupes égaux → je multiplie&nbsp;!
          </div>
          <div style={{ fontSize: "22px", fontFamily: CURSIVE, marginTop: "2mm", color: "#111" }}>Le signe <b style={{ color: ACC, fontSize: "28px" }}>×</b> se lit « fois ».</div>
        </div>

        {/* Astuce / piège, discret */}
        <div style={{ margin: "0 auto", textAlign: "center", fontSize: "22px", fontFamily: CURSIVE, color: "#111" }}>
          Astuce : je dessine les groupes.<br />
          6 tables de 4 → <b style={{ color: "#16a34a" }}>6 × 4 = 24</b> &nbsp;(pas <span style={{ color: "#dc2626" }}>6 + 4</span>&nbsp;!)
        </div>
      </div>
    </div>
  );
}

/* --- Feuille d'exercices (paysage) --- */
export function MultiplicationExos() {
  return (
    <LandscapeDoc>
      <Feuille titre="La multiplication" sousTitre="Exercices — CE1 / CE2">
        <Col>
          <div>
            <Consigne n={1}>Écris l'addition PUIS la multiplication.</Consigne>
            <Exemple>3 groupes de 2 → 2 + 2 + 2 = 3 × 2 = 6</Exemple>
            <div style={{ display: "flex", gap: "3mm", margin: "1mm 0" }}>{[0, 1, 2, 3].map((k) => <Groupe key={k} n={3} color={ACC} />)}</div>
            <Lines n={1} />
            <div style={{ display: "flex", gap: "3mm", margin: "1mm 0" }}>{[0, 1].map((k) => <Groupe key={k} n={5} color={ACC} />)}</div>
            <Lines n={1} />
          </div>
          <div>
            <Consigne n={2}>Complète.</Consigne>
            <Exemple>4 + 4 + 4 = 3 × 4</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>a) 5 + 5 + 5 = …… × ……</div>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>b) 2 + 2 + 2 + 2 = …… × ……</div>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>c) 6 × 2 = …… + ……</div>
          </div>
        </Col>
        <Trait />
        <Col>
          <div>
            <Consigne n={3}>Problème. Dessine les groupes, puis écris ta multiplication et la réponse.</Consigne>
            <Exemple>Pose 4 × 5 si c'est 4 paquets de 5.</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "17px" }}>Il y a 5 paniers. Dans chaque panier, 3 pommes. Combien de pommes en tout ?</div>
            <div style={{ border: "1.5px dashed #94a3b8", borderRadius: "3mm", height: "24mm", margin: "1mm 0" }} />
            <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "11px", fontWeight: 700 }}>Mon calcul : ............................  Réponse : ............................</div>
          </div>
          <div>
            <Consigne n={4}>Calcule (sers-toi de ta table).</Consigne>
            <Exemple>2 × 3 = 6</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>2 × 4 = …… &nbsp;&nbsp; 2 × 6 = …… &nbsp;&nbsp; 5 × 2 = ……</div>
            <div style={{ marginTop: "0.5mm" }}><Defi>CE2 : 3 × 5 = …… &nbsp; 4 × 5 = …… &nbsp; 6 × 3 = ……</Defi></div>
          </div>
        </Col>
      </Feuille>
    </LandscapeDoc>
  );
}

/* === Feuille d'exercices n° 2 (mardi) — même modèle, nombres différents :
 * faire des paquets, écrire la multiplication, un problème, et des calculs
 * directs « combien font 3 × 4 ». === */
export function MultiplicationExos2() {
  return (
    <LandscapeDoc>
      <Feuille titre="La multiplication" sousTitre="Exercices (2) — CE1 / CE2">
        <Col>
          <div>
            <Consigne n={1}>Écris l'addition PUIS la multiplication.</Consigne>
            <Exemple>4 groupes de 2 → 2 + 2 + 2 + 2 = 4 × 2 = 8</Exemple>
            <div style={{ display: "flex", gap: "3mm", margin: "1mm 0" }}>{[0, 1, 2].map((k) => <Groupe key={k} n={4} color={ACC} />)}</div>
            <Lines n={1} />
            <div style={{ display: "flex", gap: "3mm", margin: "1mm 0" }}>{[0, 1, 2, 3].map((k) => <Groupe key={k} n={2} color={ACC} />)}</div>
            <Lines n={1} />
          </div>
          <div>
            <Consigne n={2}>Complète.</Consigne>
            <Exemple>3 + 3 + 3 = 3 × 3</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>a) 4 + 4 + 4 = …… × ……</div>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>b) 5 + 5 = …… × ……</div>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>c) 2 × 5 = …… + ……</div>
          </div>
        </Col>
        <Trait />
        <Col>
          <div>
            <Consigne n={3}>Problème. Dessine les groupes, puis écris ta multiplication et la réponse.</Consigne>
            <Exemple>Pose 3 × 4 si c'est 3 paquets de 4.</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "17px" }}>Il y a 4 boîtes. Dans chaque boîte, 5 crayons. Combien de crayons en tout ?</div>
            <div style={{ border: "1.5px dashed #94a3b8", borderRadius: "3mm", height: "24mm", margin: "1mm 0" }} />
            <div style={{ fontFamily: CONSIGNE_FONT, fontSize: "11px", fontWeight: 700 }}>Mon calcul : ............................  Réponse : ............................</div>
          </div>
          <div>
            <Consigne n={4}>Combien font… ? (sers-toi de ta table).</Consigne>
            <Exemple>3 × 4 = 12</Exemple>
            <div style={{ fontFamily: CURSIVE, fontSize: "18px" }}>2 × 5 = …… &nbsp;&nbsp; 2 × 7 = …… &nbsp;&nbsp; 10 × 2 = ……</div>
            <div style={{ marginTop: "0.5mm" }}><Defi>CE2 : 4 × 4 = …… &nbsp; 5 × 5 = …… &nbsp; 6 × 4 = ……</Defi></div>
          </div>
        </Col>
      </Feuille>
    </LandscapeDoc>
  );
}

/* --- Référence : TOUTES les tables (liste simple « façon Word », à apprendre
 * par cœur de 1 à 10). Police lisible type Arial/Aptos, encre noire, pas de
 * déco : on lit et on apprend. --- */
const TABLE_FONT = "'Aptos','Arial','Liberation Sans','Helvetica',sans-serif";

function UneTableListe({ k }: { k: number }) {
  return (
    <div style={{ breakInside: "avoid", marginBottom: "4mm" }}>
      <div style={{ fontSize: "15px", fontWeight: 700, color: "#111", borderBottom: "1.5px solid #111", paddingBottom: "0.5mm", marginBottom: "1mm" }}>Table de {k}</div>
      {Array.from({ length: 10 }).map((_, j) => {
        const n = j + 1;
        return <div key={n} style={{ fontSize: "13.5px", lineHeight: 1.4, color: "#111" }}>{k} × {n} = {k * n}</div>;
      })}
    </div>
  );
}

export function TablesReference() {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: TABLE_FONT }}>
      <div style={{ textAlign: "center", marginBottom: "3mm" }}>
        <div style={{ fontSize: "24px", fontWeight: 700, color: "#111" }}>Les tables de multiplication</div>
        <div style={{ fontSize: "13px", color: "#111", marginTop: "0.5mm" }}>À apprendre par cœur, de la table de 1 à la table de 10 (une table par semaine).</div>
      </div>
      <div style={{ columnCount: 4, columnGap: "7mm" }}>
        {tables.map((k) => <UneTableListe key={k} k={k} />)}
      </div>
    </div>
  );
}
