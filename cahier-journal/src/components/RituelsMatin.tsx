/**
 * Rituels du matin — vue projetable (Période 1)
 * ---------------------------------------------
 * Reprend, jour par jour, tous les rituels de la période : date & météo,
 * nombre du jour (pailles + tableau c/d/u), calcul mental sur ardoise,
 * phrase du jour, problème et découverte. Différenciation CE1 (jaune) /
 * CE2 (bleu). Tout est projetable en grand, en écriture d'enseignant.
 */
import { useMemo, useRef, useState } from "react";
import { JOURS, SCRIPTS, type RitualDay, type QA } from "../lib/ritualsP1";
import { requestFullscreen } from "../lib/board";

const CE1 = "#e0920a"; // jaune / ambre
const CE2 = "#2C6FB5"; // bleu

type PoliceId = "cursive" | "manuscrite" | "ecole";
type ModuleId = "vue" | "dt" | "nb" | "cm" | "ph" | "pb" | "bo";

/* ------------------------------------------------------------ nombres */
const U = [
  "zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix",
  "onze","douze","treize","quatorze","quinze","seize","dix-sept","dix-huit","dix-neuf",
];
const DIZ: Record<number, string> = {
  2: "vingt", 3: "trente", 4: "quarante", 5: "cinquante", 6: "soixante", 8: "quatre-vingt",
};
function enLettres(n: number): string {
  if (n < 20) return U[n];
  if (n < 100) {
    const d = Math.floor(n / 10), u = n % 10;
    if (d === 7 || d === 9) {
      const b = d === 7 ? "soixante" : "quatre-vingt";
      const r = n - (d === 7 ? 60 : 80);
      if (r === 11 && d === 7) return b + " et onze";
      return b + "-" + U[r];
    }
    const s = DIZ[d];
    if (u === 0) return d === 8 ? s + "s" : s;
    if (u === 1 && d !== 8) return s + " et un";
    return s + "-" + U[u];
  }
  const c = Math.floor(n / 100), r = n % 100;
  const s = (c === 1 ? "cent" : U[c] + " cent") + (r === 0 && c > 1 ? "s" : "");
  return r === 0 ? s : s + " " + enLettres(r);
}

/* ------------------------------------------------------------ icônes */
function Ico({ d, className = "" }: { d: string; className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d={d} />
    </svg>
  );
}
const ICONS: Record<ModuleId, string> = {
  vue: "M4 5h16v14H4zM4 10h16M10 10v9",
  dt: "M5 6h14v14H5zM5 10h14M9 3v4M15 3v4",
  nb: "M6 20V7M10 20V7M14 20V9M18 20V9M4 12h8M12 13h8",
  cm: "M4 5h16v11H4zM8 20h8M9 9h4M11 7v4M15 9.5h2",
  ph: "M4 19l1-4L16 4l3 3L8 18l-4 1z",
  pb: "M12 3a9 9 0 100 18 9 9 0 000-18zM12 8v8M8 12h8",
  bo: "M12 3.6l2.5 5.3 5.6.8-4 4 .9 5.7-5-2.7-5 2.7.9-5.7-4-4 5.6-.8z",
};

/* ---- météo (petites vignettes) ---- */
const METEO: [string, string][] = [
  ["☀️", "Soleil"], ["🌤️", "Éclaircies"], ["☁️", "Nuageux"], ["🌧️", "Pluie"],
  ["⛈️", "Orage"], ["❄️", "Neige"], ["🌫️", "Brouillard"], ["💨", "Vent"],
];

/* ---- pailles (unités / dizaines / centaines) ---- */
function Paille({ x, fill, stroke }: { x: number; fill: string; stroke: string }) {
  return <rect x={x} y={6} width={7} height={74} rx={3.5} fill={fill} stroke={stroke} strokeWidth={1.5} />;
}
function PaquetDix() {
  return (
    <svg viewBox="0 0 88 88" width={72} height={72}>
      {Array.from({ length: 10 }, (_, i) => (
        <Paille key={i} x={4 + i * 8} fill="#2C6FB5" stroke="#1B4D80" />
      ))}
      <rect x={0} y={22} width={88} height={7} rx={3} fill="#8B5E3C" />
      <rect x={0} y={56} width={88} height={7} rx={3} fill="#8B5E3C" />
    </svg>
  );
}
function PaquetCent() {
  return (
    <svg viewBox="0 0 88 88" width={72} height={72}>
      <rect x={2} y={4} width={84} height={80} rx={6} fill="#E6F1E9" stroke="#3E8E5A" strokeWidth={3} />
      {Array.from({ length: 10 }, (_, i) => (
        <rect key={i} x={7 + i * 8} y={10} width={4} height={68} rx={2} fill="#3E8E5A" opacity={0.55} />
      ))}
      <text x={44} y={52} textAnchor="middle" fontSize={26} fontWeight={700} fill="#245C39" fontFamily="Verdana">100</text>
    </svg>
  );
}
function Unites({ u }: { u: number }) {
  const w = Math.max(30, 4 + u * 11);
  return (
    <svg viewBox={`0 0 ${w} 88`} height={72}>
      {Array.from({ length: u }, (_, i) => (
        <Paille key={i} x={4 + i * 11} fill="#F2A900" stroke="#B37E00" />
      ))}
    </svg>
  );
}
function BoitePailles({ n }: { n: number }) {
  const c = Math.floor(n / 100), d = Math.floor((n % 100) / 10), u = n % 10;
  return (
    <div className="flex flex-wrap items-end justify-center gap-6 py-3">
      {c > 0 && (
        <Groupe label={`${c} centaine${c > 1 ? "s" : ""}`}>
          {Array.from({ length: c }, (_, i) => <PaquetCent key={i} />)}
        </Groupe>
      )}
      {d > 0 && (
        <Groupe label={`${d} dizaine${d > 1 ? "s" : ""}`}>
          {Array.from({ length: d }, (_, i) => <PaquetDix key={i} />)}
        </Groupe>
      )}
      <Groupe label={`${u} unité${u > 1 ? "s" : ""}`}>
        {u > 0 ? <Unites u={u} /> : <svg viewBox="0 0 30 88" height={72} />}
      </Groupe>
    </div>
  );
}
function Groupe({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="text-center">
      <div className="flex items-end gap-1">{children}</div>
      <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-stone-500">{label}</div>
    </div>
  );
}
function TableauCDU({ n, reveal }: { n: number; reveal: boolean }) {
  const c = Math.floor(n / 100), d = Math.floor((n % 100) / 10), u = n % 10;
  const cell = (label: string, bg: string, val: number, fg = "#fff") => (
    <div className="flex flex-col overflow-hidden rounded-lg border-2 border-stone-800">
      <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider" style={{ background: bg, color: fg }}>{label}</div>
      <div className="grid h-16 place-items-center text-3xl font-bold" style={{ color: reveal ? "#111" : "transparent" }}>{val}</div>
    </div>
  );
  return (
    <div className="mx-auto my-4 grid w-fit grid-cols-3 gap-2">
      {cell("centaines", "#3E8E5A", c)}
      {cell("dizaines", "#2C6FB5", d)}
      {cell("unités", "#F2A900", u, "#2b2000")}
    </div>
  );
}

/* ------------------------------------------------------------ niveaux */
function Niveau({ niv, items, reveal }: { niv: "ce1" | "ce2"; items: QA[]; reveal: boolean }) {
  const color = niv === "ce1" ? CE1 : CE2;
  return (
    <div className="rounded-xl border-2 bg-white/70 p-4 dark:bg-stone-900/40" style={{ borderTopColor: color, borderTopWidth: 6 }}>
      <span className="mb-2 inline-block rounded-md px-2 py-0.5 text-[11px] font-bold uppercase tracking-wider text-white" style={{ background: color, color: niv === "ce1" ? "#2b2000" : "#fff" }}>
        {niv.toUpperCase()}
      </span>
      <ol className="list-decimal space-y-1.5 pl-5 text-[15px] leading-snug text-stone-800 dark:text-stone-100">
        {items.map((q, i) => (
          <li key={i}>
            {q[0]}
            {reveal && <span className="ml-1 font-semibold text-rose-600 dark:text-rose-400">→ {q[1]}</span>}
          </li>
        ))}
      </ol>
    </div>
  );
}

function BlocProf({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <div className="mt-4 rounded-r-lg border-l-4 border-rose-500 bg-rose-50/70 px-4 py-3 text-sm leading-relaxed text-rose-900 dark:bg-rose-500/10 dark:text-rose-200">
      <div className="mb-1 text-[11px] font-bold uppercase tracking-wider text-rose-600 dark:text-rose-300">{titre}</div>
      {children}
    </div>
  );
}
function CeQueJeDis({ k }: { k: string }) {
  return (
    <BlocProf titre="Ce que je peux dire">
      <p className="italic">« {SCRIPTS[k]} »</p>
    </BlocProf>
  );
}

/* ------------------------------------------------------------ carte */
function Carte({ icon, titre, duree, children }: { icon: ModuleId; titre: string; duree?: string; children: React.ReactNode }) {
  return (
    <div className="card mb-5 p-6">
      <h2 className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
        <Ico d={ICONS[icon]} className="h-5 w-5 text-ink-600" />
        {titre}
        {duree && <span className="ml-auto font-medium normal-case tracking-normal">≈ {duree}</span>}
      </h2>
      {children}
    </div>
  );
}

/* ------------------------------------------------------------ vue jour */
export function RituelsMatin() {
  const [iJour, setIJour] = useState(0);
  const [module, setModule] = useState<ModuleId>("dt");
  const [prof, setProf] = useState(false);
  const [police, setPolice] = useState<PoliceId>("cursive");
  const [cmIndex, setCmIndex] = useState(0);
  const [cmRep, setCmRep] = useState(false);
  const [meteo, setMeteo] = useState<string | null>(null);
  const sceneRef = useRef<HTMLDivElement>(null);

  const J = JOURS[iJour];

  const modules = useMemo(() => {
    const base: [ModuleId, string, string][] = [
      ["vue", "Vue d’ensemble", ""],
      ["dt", "La date", "4 min"],
      ["nb", "Le nombre du jour", "6 min"],
      ["cm", "Calcul mental", "5 min"],
      ["ph", "La phrase du jour", "8 min"],
    ];
    if (J.pb) base.push(["pb", "Le problème", "7 min"]);
    if (J.bo) base.push(["bo", "Découverte", "5 min"]);
    return base;
  }, [J]);

  const goDay = (i: number) => {
    setIJour(i);
    setCmIndex(0);
    setCmRep(false);
    setMeteo(null);
    if (module === "vue") setModule("dt");
  };

  return (
    <div>
      {/* Barre enseignant */}
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <div className="flex items-center gap-1">
          <button className="btn-outline px-2 py-1" disabled={iJour === 0} onClick={() => goDay(Math.max(0, iJour - 1))}>◀</button>
          <select
            className="input w-auto py-1"
            value={iJour}
            onChange={(e) => goDay(+e.target.value)}
          >
            {JOURS.map((d, i) => (
              <option key={d.n} value={i}>{d.j} {d.c} · jour n°{d.n}</option>
            ))}
          </select>
          <button className="btn-outline px-2 py-1" disabled={iJour === JOURS.length - 1} onClick={() => goDay(Math.min(JOURS.length - 1, iJour + 1))}>▶</button>
        </div>
        <button className={`btn-outline py-1 text-xs ${prof ? "!bg-ink-600 !text-white" : ""}`} onClick={() => setProf((p) => !p)}>
          {prof ? "✓ " : ""}Mode prof
        </button>
        <select className="input w-auto py-1" value={police} onChange={(e) => setPolice(e.target.value as PoliceId)} title="Écriture affichée aux élèves">
          <option value="cursive">Écriture cursive</option>
          <option value="manuscrite">Écriture manuscrite</option>
          <option value="ecole">Script école</option>
        </select>
        <button className="btn-outline py-1 text-xs" onClick={() => requestFullscreen(sceneRef.current)}>⛶ Projeter</button>
      </div>

      {/* Onglets modules */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {modules.map(([id, label, dur]) => (
          <button
            key={id}
            onClick={() => { setModule(id); if (id === "cm") { setCmIndex(0); setCmRep(false); } }}
            className={`toggle-chip flex items-center gap-1.5 ${module === id ? "toggle-chip-on" : "toggle-chip-off"}`}
          >
            <Ico d={ICONS[id]} className="h-4 w-4" />
            {label}{dur && <span className="opacity-60">· {dur}</span>}
          </button>
        ))}
      </div>

      {/* Scène projetable */}
      <div ref={sceneRef} className="rituel-scene bg-paper-light p-1 dark:bg-paper-dark" data-police={police}>
        {module === "vue" ? (
          <VueEnsemble />
        ) : (
          <>
            <div className="mb-4 flex flex-wrap items-baseline gap-3">
              <h1 className="text-2xl font-bold text-stone-900 dark:text-white">{J.j} {J.c.slice(0, 5)}</h1>
              <span className="rounded-full bg-ink-100 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink-700 dark:bg-ink-500/20 dark:text-ink-200">Jour d’école n° {J.n}</span>
              <span className="rounded-full bg-stone-200 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:bg-stone-700 dark:text-stone-200">{J.phase}</span>
            </div>

            {module === "dt" && <VueDate J={J} prof={prof} meteo={meteo} setMeteo={setMeteo} />}
            {module === "nb" && <VueNombre J={J} prof={prof} />}
            {module === "cm" && (
              <VueCalcul J={J} prof={prof} index={cmIndex} rep={cmRep} setIndex={setCmIndex} setRep={setCmRep} />
            )}
            {module === "ph" && <VuePhrase J={J} prof={prof} />}
            {module === "pb" && J.pb && <VueProbleme J={J} prof={prof} />}
            {module === "bo" && J.bo && <VueBonus J={J} prof={prof} />}
          </>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------ modules */
function VueDate({ J, prof, meteo, setMeteo }: { J: RitualDay; prof: boolean; meteo: string | null; setMeteo: (m: string) => void }) {
  return (
    <Carte icon="dt" titre="La date et le temps qu'il fait" duree="4 min">
      <p className="seyes eleve rounded-lg p-4 text-3xl leading-relaxed sm:text-4xl">
        Aujourd’hui, nous sommes le<br />{J.d}.
      </p>
      <p className="eleve mt-6 text-center text-xl">Quel temps fait-il aujourd’hui ?</p>
      <div className="mt-2 flex flex-wrap justify-center gap-2">
        {METEO.map(([emo, lab]) => (
          <button
            key={lab}
            onClick={() => setMeteo(lab)}
            className={`flex w-24 flex-col items-center gap-1 rounded-xl border-2 px-2 py-2 text-sm transition ${meteo === lab ? "border-ink-500 bg-ink-50 dark:bg-ink-500/15" : "border-stone-200 bg-white dark:border-stone-700 dark:bg-stone-900/40"}`}
          >
            <span className="text-3xl">{emo}</span>
            <span className="eleve">{lab}</span>
          </button>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Niveau niv="ce1" items={J.dt.ce1} reveal={prof} />
        <Niveau niv="ce2" items={J.dt.ce2} reveal={prof} />
      </div>
      {prof && <CeQueJeDis k="dt" />}
      {prof && J.dt.note && <BlocProf titre="Point de vigilance"><p>{J.dt.note}</p></BlocProf>}
    </Carte>
  );
}

function VueNombre({ J, prof }: { J: RitualDay; prof: boolean }) {
  const n = J.n;
  return (
    <Carte icon="nb" titre="Le nombre du jour" duree="6 min">
      <p className="eleve text-center text-3xl sm:text-4xl">
        Aujourd’hui, nous sommes au <strong>{n}<sup>e</sup></strong> jour d’école.
      </p>
      <BoitePailles n={n} />
      <TableauCDU n={n} reveal={prof} />
      {prof && (
        <p className="text-center text-lg text-rose-600 dark:text-rose-400">
          {n} s’écrit « {enLettres(n)} »
          {J.nb.g ? ` — grand nombre du jour : ${J.nb.g} (« ${enLettres(J.nb.g)} »)` : ""}
        </p>
      )}
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <Niveau niv="ce1" items={J.nb.ce1} reveal={prof} />
        <Niveau niv="ce2" items={J.nb.ce2} reveal={prof} />
      </div>
      {prof && <CeQueJeDis k="nb" />}
      {prof && J.nb.note && <BlocProf titre="Point de vigilance"><p>{J.nb.note}</p></BlocProf>}
    </Carte>
  );
}

function VueCalcul({ J, prof, index, rep, setIndex, setRep }: {
  J: RitualDay; prof: boolean; index: number; rep: boolean;
  setIndex: (n: number) => void; setRep: (b: boolean) => void;
}) {
  const a = J.cm.ce1, b = J.cm.ce2;
  const max = Math.max(a.length, b.length);
  const i = index >= max ? 0 : index;
  const ca = a[i], cb = b[i];
  return (
    <Carte icon="cm" titre={`Calcul mental — ${J.cm.t}`} duree="5 min">
      <div className="rounded-2xl border-4 border-[#5A4A38] bg-[#333C3F] p-6 text-center text-[#F3F0E7]">
        <p className="text-xs uppercase tracking-widest opacity-60">Calcul {i + 1} sur {max}</p>
        <p className="mt-3"><span className="rounded-full px-2 py-0.5 text-xs font-bold" style={{ background: CE1, color: "#2b2000" }}>CE1</span></p>
        <p className="eleve my-1 text-5xl sm:text-6xl">{ca ? ca[0] : "—"}</p>
        <p className="text-3xl font-semibold text-[#F2A900]" style={{ minHeight: "1.2em" }}>{rep && ca ? ca[1] : ""}</p>
        <hr className="my-4 border-dashed border-white/25" />
        <p><span className="rounded-full px-2 py-0.5 text-xs font-bold text-white" style={{ background: CE2 }}>CE2</span></p>
        <p className="eleve my-1 text-5xl sm:text-6xl">{cb ? cb[0] : "—"}</p>
        <p className="text-3xl font-semibold text-[#F2A900]" style={{ minHeight: "1.2em" }}>{rep && cb ? cb[1] : ""}</p>
      </div>
      <div className="mt-4 flex flex-wrap justify-center gap-2">
        <button className="btn-primary" onClick={() => setRep(!rep)}>{rep ? "Masquer la réponse" : "Montrez !"}</button>
        <button className="btn-outline" onClick={() => { setIndex(Math.max(0, i - 1)); setRep(false); }}>◀ Précédent</button>
        <button className="btn-outline" onClick={() => { setIndex(Math.min(max - 1, i + 1)); setRep(false); }}>Suivant ▶</button>
      </div>
      {prof && <BlocProf titre="Objectif du jour"><p>{J.cm.but}</p></BlocProf>}
      {prof && <CeQueJeDis k="cm" />}
      {prof && (
        <BlocProf titre="Série complète">
          <ul className="list-disc space-y-1 pl-4">
            <li><strong>CE1 :</strong> {a.map((x) => `${x[0]} = ${x[1]}`).join(" · ")}</li>
            <li><strong>CE2 :</strong> {b.map((x) => `${x[0]} = ${x[1]}`).join(" · ")}</li>
          </ul>
        </BlocProf>
      )}
    </Carte>
  );
}

function VuePhrase({ J, prof }: { J: RitualDay; prof: boolean }) {
  return (
    <Carte icon="ph" titre="La phrase du jour" duree="8 min">
      <p className="seyes eleve rounded-lg p-4 text-3xl leading-relaxed sm:text-4xl">{J.ph.t}</p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Niveau niv="ce1" items={J.ph.ce1} reveal={prof} />
        <Niveau niv="ce2" items={J.ph.ce2} reveal={prof} />
      </div>
      {prof && <BlocProf titre="Notion travaillée"><p>{J.ph.f}</p></BlocProf>}
      {prof && <CeQueJeDis k="ph" />}
    </Carte>
  );
}

function VueProbleme({ J, prof }: { J: RitualDay; prof: boolean }) {
  const pb = J.pb!;
  return (
    <Carte icon="pb" titre="Le problème du jour" duree="7 min">
      <div className="eleve rounded-xl border-2 border-dashed border-stone-400 bg-white/60 p-5 text-2xl dark:bg-stone-900/40">{pb.t}</div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Niveau niv="ce1" items={pb.ce1} reveal={prof} />
        <Niveau niv="ce2" items={pb.ce2} reveal={prof} />
      </div>
      {prof && <BlocProf titre="Aide et étayage"><p>{pb.aide}</p></BlocProf>}
      {prof && <CeQueJeDis k="pb" />}
    </Carte>
  );
}

function VueBonus({ J, prof }: { J: RitualDay; prof: boolean }) {
  const bo = J.bo!;
  return (
    <Carte icon="bo" titre={bo.t} duree="5 min">
      <div className="eleve rounded-xl border-2 border-dashed border-stone-400 bg-white/60 p-5 text-2xl dark:bg-stone-900/40">{bo.txt}</div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Niveau niv="ce1" items={bo.ce1} reveal={prof} />
        <Niveau niv="ce2" items={bo.ce2} reveal={prof} />
      </div>
      {prof && <CeQueJeDis k="bo" />}
    </Carte>
  );
}

/* ------------------------------------------------------------ vue d'ensemble */
function VueEnsemble() {
  return (
    <div>
      <Carte icon="vue" titre="La période 1 en un coup d’œil">
        <div className="prose-sm max-w-none space-y-3 text-[15px] leading-relaxed text-stone-700 dark:text-stone-200">
          <p><strong>Calendrier :</strong> rentrée le mardi 1<sup>er</sup> septembre 2026, vacances de la Toussaint du samedi 17 octobre au lundi 2 novembre 2026. Dernier jour de classe : vendredi 16 octobre. Aucun jour férié dans la période.</p>
          <p><strong>Mes jours de classe :</strong> 6 lundis et 7 mardis, soit <strong>13 journées de rituels</strong>. Les numéros de jour d’école sont calculés sur une semaine de 4 jours (lundi, mardi, jeudi, vendredi) : ils vont de 1 à 25 sur mes jours, la période en compte 27 au total.</p>
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border-collapse text-left text-[13px]">
            <thead>
              <tr className="bg-stone-100 dark:bg-stone-800">
                {["Jour", "Date", "N°", "Nombre", "Calcul mental", "Phrase du jour", "Problème", "Autre"].map((h) => (
                  <th key={h} className="border border-stone-300 px-2 py-1.5 text-[11px] font-bold uppercase tracking-wide dark:border-stone-600">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {JOURS.map((J) => (
                <tr key={J.n} className={J.j === "Lundi" ? "bg-amber-50/50 dark:bg-stone-800/40" : ""}>
                  <td className="whitespace-nowrap border border-stone-300 px-2 py-1.5 font-semibold dark:border-stone-600">{J.j}</td>
                  <td className="border border-stone-300 px-2 py-1.5 dark:border-stone-600">{J.c}</td>
                  <td className="border border-stone-300 px-2 py-1.5 dark:border-stone-600"><span className="rounded bg-ink-600 px-1.5 py-0.5 font-bold text-white">{J.n}</span></td>
                  <td className="border border-stone-300 px-2 py-1.5 dark:border-stone-600">{J.n}{J.nb.g ? ` / ${J.nb.g}` : ""}</td>
                  <td className="border border-stone-300 px-2 py-1.5 dark:border-stone-600">{J.cm.t}</td>
                  <td className="border border-stone-300 px-2 py-1.5 dark:border-stone-600">{J.ph.f}</td>
                  <td className="border border-stone-300 px-2 py-1.5 dark:border-stone-600">{J.pb ? "✓" : "—"}</td>
                  <td className="border border-stone-300 px-2 py-1.5 dark:border-stone-600">{J.bo ? J.bo.t.split(" — ")[0] : "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Carte>

      <Carte icon="vue" titre="La routine du matin">
        <div className="space-y-2 text-[15px] leading-relaxed text-stone-700 dark:text-stone-200">
          <p>Une routine reconnaissable, jamais plus de 30 minutes, toujours dans le même ordre.</p>
          <p className="font-semibold text-ink-700 dark:text-ink-300">Chaque lundi (≈ 23 min)</p>
          <ul className="list-disc pl-5">
            <li>La date et la météo — 4 min</li>
            <li>Le nombre du jour — 6 min</li>
            <li>Calcul mental sur ardoise — 5 min</li>
            <li>La phrase du jour — 8 min</li>
          </ul>
          <p className="font-semibold text-ink-700 dark:text-ink-300">Chaque mardi (≈ 30 min)</p>
          <ul className="list-disc pl-5"><li>Les quatre rituels du lundi</li><li>+ le problème du jour — 7 min</li></ul>
          <p className="font-semibold text-ink-700 dark:text-ink-300">Ponctuellement (4 lundis)</p>
          <ul className="list-disc pl-5"><li>J8 : vocabulaire · J16 : lecture-inférence · J20 : EMC · J24 : questionner le monde — 5 min si le temps le permet</li></ul>
        </div>
      </Carte>

      <Carte icon="nb" titre="Le système des pailles">
        <div className="space-y-2 text-[15px] leading-relaxed text-stone-700 dark:text-stone-200">
          <p>Une boîte à trois compartiments près du tableau. Un élève responsable ajoute une paille chaque matin — <strong>y compris les jeudis et vendredis</strong> (à convenir avec mon binôme), sinon le compte est faux le lundi suivant.</p>
          <ul className="list-disc pl-5">
            <li><span style={{ color: "#F2A900", fontWeight: 700 }}>■</span> <strong>Jaune = 1 unité</strong> — une paille seule.</li>
            <li><span style={{ color: "#2C6FB5", fontWeight: 700 }}>■</span> <strong>Bleu = 1 dizaine</strong> — 10 pailles réunies par un élastique.</li>
            <li><span style={{ color: "#3E8E5A", fontWeight: 700 }}>■</span> <strong>Vert = 1 centaine</strong> — 10 paquets de 10 dans un sachet.</li>
          </ul>
          <p>Deux moments forts : le <strong>jour 10</strong> (premier paquet, fabriqué un jeudi — à vérifier le lundi 21) et le <strong>jour 20</strong> (deuxième paquet, plus aucune paille jaune).</p>
        </div>
      </Carte>
    </div>
  );
}
