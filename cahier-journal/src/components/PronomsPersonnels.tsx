/**
 * Français (grammaire) — Les pronoms personnels sujets.
 * CE1 : repérer les pronoms + remplacer un nom / groupe nominal par il, elle,
 *       ils, elles (Timoté et Alia → ils).
 * CE2 : + accord du pronom sujet avec le verbe (je marche, nous marchons…).
 * Contenu et illustrations ORIGINAUX (emoji), dans l'esprit du fichier « Je
 * m'entraîne ». Fichier sur 2 jours (2 pages / niveau), sans correction.
 *   • Diaporama à projeter · Leçon à coller · Fichier CE1 · Fichier CE2.
 */
import { useRef, useState } from "react";
import { requestFullscreen } from "../lib/board";
import { FicheModele, SectionBar, Exo, LignesModele, Defi } from "./ficheModele";

const FR = "#1d4ed8";
const CONSIGNE_FONT = "'Aptos','Inter','Segoe UI',system-ui,sans-serif";
const CURSIVE = "'Caveat','Comic Neue',cursive";

/* Ligne « image → pronom » (illustration en emoji, original). */
function ImgRow({ emoji, grand = false }: { emoji: string; grand?: boolean }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "2mm", margin: "0 5mm 2mm 0" }}>
      <span style={{ fontSize: grand ? "26px" : "22px" }}>{emoji}</span>
      <span style={{ fontSize: "18px", fontWeight: 800 }}>→</span>
      <span style={{ display: "inline-block", width: "24mm", height: "8mm", border: "1.4px solid #94a3b8", borderRadius: "1.5mm" }} />
    </span>
  );
}

/* ----------------------------- DIAPORAMA ----------------------------- */
const ET = ["Les pronoms personnels", "On évite de répéter", "La famille des pronoms", "Image → pronom", "Le pronom commande le verbe", "Je retiens"];
export function PronomsDiapo() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const last = ET.length - 1;
  const Case = ({ children, c = FR }: { children: React.ReactNode; c?: string }) => (
    <span style={{ display: "inline-block", background: c, color: "#fff", borderRadius: "10px", padding: "2px 14px", fontWeight: 800, margin: "3px" }}>{children}</span>
  );
  return (
    <div ref={ref} className="flex w-[92vw] max-w-[980px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl" style={{ fontFamily: "'Lexend','Nunito',sans-serif" }}>
      <div className="flex items-center gap-3 px-4 py-2" style={{ background: FR }}>
        <span className="text-sm font-extrabold uppercase tracking-wide text-white">Grammaire · Les pronoms personnels sujets</span>
        <div className="ml-2 flex flex-wrap gap-1.5">{ET.map((t, k) => <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full" style={{ background: k === i ? "#fff" : "rgba(255,255,255,.4)" }} />)}</div>
        <button onClick={() => requestFullscreen(ref.current)} className="ml-auto rounded-full bg-white/20 px-3 py-1 text-xs font-bold text-white hover:bg-white/30">Plein écran</button>
      </div>
      <div className="grid min-h-[62vh] place-items-center p-5 sm:p-8">
        {i === 0 && (
          <div className="text-center">
            <div className="text-6xl">🧒👦👧</div>
            <h1 className="mt-3 text-4xl font-extrabold sm:text-5xl" style={{ color: FR }}>Les pronoms personnels</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">De petits mots qui <b>remplacent</b> un nom pour ne pas le <b>répéter</b>.</p>
          </div>
        )}
        {i === 1 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>On évite de répéter</h2>
            <p className="mt-5 text-2xl text-stone-700"><b>Léa</b> prend son cartable. <b>Léa</b> part à l'école.</p>
            <p className="mt-2 text-xl text-stone-400">⬇️ on remplace le 2ᵉ « Léa »</p>
            <p className="mt-2 text-2xl text-stone-700">Léa prend son cartable. <b style={{ color: FR }}>Elle</b> part à l'école.</p>
          </div>
        )}
        {i === 2 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>La famille des pronoms</h2>
            <div className="mt-4 text-xl">
              <div className="text-stone-500 font-bold">SINGULIER (1)</div>
              <div><Case>je / j'</Case><Case>tu</Case><Case>il</Case><Case>elle</Case><Case c="#64748b">on</Case></div>
              <div className="mt-3 text-stone-500 font-bold">PLURIEL (plusieurs)</div>
              <div><Case>nous</Case><Case>vous</Case><Case>ils</Case><Case>elles</Case></div>
            </div>
          </div>
        )}
        {i === 3 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>Image → pronom</h2>
            <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-3 text-3xl">
              <div>👦 → <b style={{ color: FR }}>il</b></div>
              <div>👧 → <b style={{ color: FR }}>elle</b></div>
              <div>👦👦 → <b style={{ color: FR }}>ils</b></div>
              <div>👧👧 → <b style={{ color: FR }}>elles</b></div>
              <div className="col-span-2">👦👧 → <b style={{ color: FR }}>ils</b> <span className="text-base text-stone-500">(un garçon + une fille = ils)</span></div>
            </div>
          </div>
        )}
        {i === 4 && (
          <div className="text-center">
            <h2 className="text-4xl font-extrabold" style={{ color: FR }}>Le pronom commande le verbe <span className="text-xl text-stone-500">(CE2)</span></h2>
            <p className="mt-3 text-2xl text-stone-600">Le pronom est <b>sujet</b> : il décide de la fin du verbe.</p>
            <p className="mt-4 text-2xl" style={{ fontFamily: CURSIVE }}>je march<b>e</b> · tu march<b>es</b> · il/elle march<b>e</b></p>
            <p className="mt-1 text-2xl" style={{ fontFamily: CURSIVE }}>nous march<b>ons</b> · vous march<b>ez</b> · ils/elles march<b>ent</b></p>
          </div>
        )}
        {i === 5 && (
          <div className="text-center">
            <div className="mb-2 text-5xl">⭐</div>
            <h1 className="text-4xl font-extrabold" style={{ color: FR }}>Je retiens</h1>
            <p className="mt-3 text-2xl font-semibold text-stone-600">Un <b>pronom personnel sujet</b> (je, tu, il, elle, on, nous, vous, ils, elles) <b>remplace</b> un nom ou un groupe nominal sujet. Il est <b>sujet du verbe</b>.</p>
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

/* ------------------------------- LEÇON ------------------------------- */
export function PronomsLecon() {
  const Case = ({ children, c = FR }: { children: React.ReactNode; c?: string }) => (
    <span style={{ display: "inline-block", background: c, color: "#fff", borderRadius: "8px", padding: "0.5mm 3mm", fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "15px", margin: "1mm" }}>{children}</span>
  );
  return (
    <div className="fiche-a4" style={{ background: "#fff", color: "#111", boxSizing: "border-box", fontFamily: "'Lexend','Nunito',system-ui,sans-serif" }}>
      <div style={{ display: "inline-block", background: FR, color: "#fff", fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "11px", letterSpacing: "0.08em", padding: "1mm 4mm", borderRadius: "2mm" }}>GRAMMAIRE</div>
      <h1 style={{ fontSize: "30px", margin: "1mm 0 3mm", fontWeight: 800, color: FR, fontFamily: CURSIVE }}>Les pronoms personnels sujets</h1>

      <div style={{ fontSize: "15px", lineHeight: 1.5 }}>
        Un <b style={{ color: FR }}>pronom personnel sujet</b> est un petit mot qui <b>remplace un nom ou un groupe nominal sujet</b>, pour ne pas le répéter.
      </div>
      <div style={{ margin: "2mm 0", fontFamily: CURSIVE, fontSize: "19px", background: "#eff6ff", border: "1.5px solid #bfdbfe", borderRadius: "2mm", padding: "2mm 4mm" }}>
        Léa prend son cartable. <b style={{ color: FR }}>Elle</b> part à l'école. <span style={{ fontSize: "14px", color: "#64748b" }}>(Elle = Léa)</span>
      </div>

      <table style={{ borderCollapse: "collapse", width: "100%", margin: "2mm 0", fontFamily: CONSIGNE_FONT, textAlign: "center" }}>
        <thead>
          <tr>
            <th style={{ border: "1.3px solid #cbd5e1", padding: "1mm", width: "26mm", background: "#f1f5f9" }}></th>
            <th style={{ border: "1.3px solid #cbd5e1", padding: "1mm", background: "#eff6ff", color: FR, fontSize: "13px" }}>Singulier (1)</th>
            <th style={{ border: "1.3px solid #cbd5e1", padding: "1mm", background: "#eff6ff", color: FR, fontSize: "13px" }}>Pluriel (plusieurs)</th>
          </tr>
        </thead>
        <tbody>
          {[["1ʳᵉ pers.", <><Case>je / j'</Case></>, <><Case>nous</Case></>], ["2ᵉ pers.", <><Case>tu</Case></>, <><Case>vous</Case></>], ["3ᵉ pers.", <><Case>il</Case><Case>elle</Case><Case c="#64748b">on</Case></>, <><Case>ils</Case><Case>elles</Case></>]].map((r, k) => (
            <tr key={k}>
              <td style={{ border: "1.3px solid #cbd5e1", padding: "1mm", fontSize: "12px", fontWeight: 700, background: "#fafafa" }}>{r[0] as React.ReactNode}</td>
              <td style={{ border: "1.3px solid #cbd5e1", padding: "1mm" }}>{r[1] as React.ReactNode}</td>
              <td style={{ border: "1.3px solid #cbd5e1", padding: "1mm" }}>{r[2] as React.ReactNode}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ border: `2px solid ${FR}`, borderRadius: "2mm", padding: "2mm 4mm", background: "#f8fbff" }}>
        <div style={{ fontFamily: CONSIGNE_FONT, fontWeight: 800, fontSize: "12px", color: FR }}>CE2 — le pronom commande le verbe</div>
        <div style={{ fontFamily: CURSIVE, fontSize: "18px", marginTop: "1mm", lineHeight: 1.5 }}>
          Le pronom est <b>sujet</b> : le verbe s'accorde avec lui.<br />
          je chant<b>e</b> · tu chant<b>es</b> · il/elle chant<b>e</b> · nous chant<b>ons</b> · vous chant<b>ez</b> · ils/elles chant<b>ent</b>
        </div>
      </div>
    </div>
  );
}

/* ----------------------------- FICHES ----------------------------- */
export function FichePronomsCE1() {
  return (
    <>
      <FicheModele matiere="Grammaire" titre="Les pronoms personnels" couleur={FR} dots={4} dotActif={1} page="Les pronoms personnels · CE1 (1/2)">
        <SectionBar couleur={FR}>Je reconnais les pronoms</SectionBar>
        <Exo n={1} couleur={FR} consigne={<><b>Écris</b> le pronom qui correspond à l'image (<b>il · elle · ils · elles</b>).</>}>
          <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1mm" }}>
            <ImgRow emoji="👦" /><ImgRow emoji="👧" /><ImgRow emoji="👦👦" /><ImgRow emoji="👧👧" /><ImgRow emoji="👦👧" />
          </div>
        </Exo>
        <Exo n={2} couleur={FR} consigne={<><b>Entoure</b> le pronom personnel dans chaque phrase.</>}>
          <div style={{ fontSize: "15px", fontFamily: CURSIVE, lineHeight: 2 }}>Il court vite. &nbsp;·&nbsp; Elles chantent. &nbsp;·&nbsp; Nous jouons. &nbsp;·&nbsp; Tu manges une pomme. &nbsp;·&nbsp; Ils dorment.</div>
        </Exo>
        <Exo n={3} couleur={FR} consigne={<><b>Écris</b> le pronom qui remplace le nom (<b>il · elle · ils · elles</b>).</>}>
          <div style={{ fontSize: "15px", fontFamily: CURSIVE, lineHeight: 2 }}>
            Timoté → …… &nbsp;&nbsp; Alia → …… &nbsp;&nbsp; Timoté et Alia → …… <br />
            Léa et Jade → …… &nbsp;&nbsp; le chat → …… &nbsp;&nbsp; les enfants → ……
          </div>
        </Exo>
        <Exo n={4} couleur={FR} consigne={<><b>Complète</b> avec le bon pronom.</>}>
          <div style={{ fontSize: "15px", fontFamily: CURSIVE, lineHeight: 2.1 }}>…… mange une glace (👧). &nbsp;&nbsp; …… jouent au ballon (👦👦). &nbsp;&nbsp; …… dort (👦).</div>
        </Exo>
      </FicheModele>

      <FicheModele matiere="Grammaire" titre="Les pronoms personnels" couleur={FR} dots={4} dotActif={2} page="Les pronoms personnels · CE1 (2/2)">
        <SectionBar couleur={FR}>Je remplace et je réécris</SectionBar>
        <Exo n={5} couleur={FR} consigne={<><b>Réécris</b> la phrase en remplaçant le groupe souligné par <b>il, elle, ils</b> ou <b>elles</b>.</>}>
          <div style={{ fontSize: "14px", fontFamily: CURSIVE }}><u>Timoté et Alia</u> jouent dans la cour.</div>
          <LignesModele n={1} />
          <div style={{ fontSize: "14px", fontFamily: CURSIVE, marginTop: "1mm" }}><u>La maîtresse</u> lit une histoire.</div>
          <LignesModele n={1} />
          <div style={{ fontSize: "14px", fontFamily: CURSIVE, marginTop: "1mm" }}><u>Les oiseaux</u> chantent dans l'arbre.</div>
          <LignesModele n={1} />
        </Exo>
        <Exo n={6} couleur={FR} consigne={<><b>Classe</b> les pronoms : <b>il · elle · ils · elles · nous · tu</b>.</>}>
          <div style={{ display: "flex", gap: "4mm", fontFamily: CURSIVE, fontSize: "15px" }}>
            <div style={{ flex: 1, border: `1.5px solid ${FR}`, borderRadius: "2mm", padding: "2mm", minHeight: "16mm" }}>Un seul (singulier) :</div>
            <div style={{ flex: 1, border: `1.5px solid ${FR}`, borderRadius: "2mm", padding: "2mm", minHeight: "16mm" }}>Plusieurs (pluriel) :</div>
          </div>
        </Exo>
        <Defi>✍️ <b>Écris une phrase</b> avec le pronom <b>elles</b>.<LignesModele n={2} /></Defi>
      </FicheModele>
    </>
  );
}

export function FichePronomsCE2() {
  return (
    <>
      <FicheModele matiere="Grammaire" titre="Les pronoms personnels" couleur={FR} dots={4} dotActif={1} page="Les pronoms personnels + accord · CE2 (1/2)">
        <SectionBar couleur={FR}>Je repère et je remplace</SectionBar>
        <Exo n={1} couleur={FR} consigne={<><b>Écris</b> le pronom qui convient (<b>il · elle · ils · elles · nous · vous</b>).</>}>
          <div style={{ fontSize: "15px", fontFamily: CURSIVE, lineHeight: 2 }}>
            👦 → …… &nbsp; 👧 → …… &nbsp; 👦👧 → …… &nbsp; 👧👧 → …… <br />
            moi et un ami → …… &nbsp;&nbsp; toi et un ami → ……
          </div>
        </Exo>
        <Exo n={2} couleur={FR} consigne={<><b>Remplace</b> le groupe souligné par un pronom et <b>réécris</b> la phrase.</>}>
          <div style={{ fontSize: "14px", fontFamily: CURSIVE }}><u>Mon frère et moi</u> partons en voyage.</div>
          <LignesModele n={1} />
          <div style={{ fontSize: "14px", fontFamily: CURSIVE, marginTop: "1mm" }}><u>Les écureuils</u> cachent des noisettes.</div>
          <LignesModele n={1} />
        </Exo>
        <SectionBar couleur={FR}>Le pronom commande le verbe</SectionBar>
        <Exo n={3} couleur={FR} consigne={<><b>Colorie</b> la bonne forme du verbe.</>}>
          <div style={{ fontSize: "15px", fontFamily: CURSIVE, lineHeight: 2.2 }}>
            Elles ( <b>mange</b> / <b>mangent</b> ) une pomme. &nbsp;&nbsp; Il ( <b>cours</b> / <b>court</b> ) vite.<br />
            Nous ( <b>chantons</b> / <b>chantent</b> ). &nbsp;&nbsp; Vous ( <b>jouez</b> / <b>joue</b> ).
          </div>
        </Exo>
      </FicheModele>

      <FicheModele matiere="Grammaire" titre="Les pronoms personnels" couleur={FR} dots={4} dotActif={2} page="Les pronoms personnels + accord · CE2 (2/2)">
        <SectionBar couleur={FR}>J'accorde le verbe</SectionBar>
        <Exo n={4} couleur={FR} consigne={<><b>Complète</b> la terminaison du verbe (<b>-e · -es · -ons · -ez · -ent</b>).</>}>
          <div style={{ fontSize: "15px", fontFamily: CURSIVE, lineHeight: 2.2 }}>
            je chant…… &nbsp;·&nbsp; tu chant…… &nbsp;·&nbsp; elle chant…… <br />
            nous chant…… &nbsp;·&nbsp; vous chant…… &nbsp;·&nbsp; ils chant……
          </div>
        </Exo>
        <Exo n={5} couleur={FR} consigne={<><b>Récris</b> au pluriel (change le pronom <u>et</u> le verbe).</>}>
          <div style={{ fontSize: "14px", fontFamily: CURSIVE }}>Il joue dans le jardin. →</div>
          <LignesModele n={1} />
          <div style={{ fontSize: "14px", fontFamily: CURSIVE, marginTop: "1mm" }}>Elle regarde un film. →</div>
          <LignesModele n={1} />
        </Exo>
        <Exo n={6} couleur={FR} consigne={<><b>Souligne</b> le pronom sujet, puis <b>complète</b> avec le bon pronom.</>}>
          <div style={{ fontSize: "15px", fontFamily: CURSIVE, lineHeight: 2.1 }}>…… finissons le travail. &nbsp;&nbsp; …… arrives à l'heure. &nbsp;&nbsp; …… applaudissent.</div>
        </Exo>
        <Defi>✍️ <b>Écris 2 phrases</b> : une avec <b>il</b>, une avec <b>ils</b>. Attention à la fin du verbe !<LignesModele n={2} /></Defi>
      </FicheModele>
    </>
  );
}
