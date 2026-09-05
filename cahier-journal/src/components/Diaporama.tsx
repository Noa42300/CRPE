/**
 * Diaporama « Autour du monde » — 4 slides, design épuré type Canva (Cycle 2)
 * --------------------------------------------------------------------------
 * 1) Introduction du continent (aucune mention du pays)
 * 2) L'énigme (cryptogramme calcul → lettres) puis « Révéler la solution »
 * 3) Géographie : carte régionale zoomée (pays en bleu, France en orange)
 * 4) Découvertes : tradition + monument, en vraies photos + points courts
 * Police ronde et lisible (Lexend), grands aplats blancs, zéro émoji de contenu.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import type { Pays } from "../lib/projets";
import { THEMES } from "../lib/projets";
import { distanceKm, direction } from "../lib/geo";
import { requestFullscreen, exitFullscreen } from "../lib/board";
import { WorldMap } from "./WorldMap";
import { WikiImage } from "./WikiImage";

const ETAPES = ["Continent", "Énigme", "Géographie", "La vie là-bas", "Le monument"];
const LAST = ETAPES.length - 1; // 4

interface Cell { type: "letter" | "space" | "sep"; letter?: string; expr?: string; ch?: string }

/**
 * Opération de calcul mental dont le résultat = position de la lettre (1..26).
 * Elle évolue au fil de l'année : additions (P1), soustractions (P2),
 * multiplications quand c'est possible (P3), puis mélange (P4-P5).
 */
function opFor(pos: number, period: number): string {
  const mult = () => {
    for (let d = 2; d <= 9; d++) if (pos % d === 0 && pos / d >= 2 && pos / d <= 10) return `${d} × ${pos / d}`;
    return "";
  };
  const add = () => { const a = Math.ceil(pos / 2); return `${a} + ${pos - a}`; };
  const sub = () => `${pos + 4} − 4`;
  if (period <= 1) return add();
  if (period === 2) return sub();
  if (period === 3) return mult() || add();
  if (period === 4) return pos % 2 === 0 ? sub() : add();
  return mult() || sub(); // P5
}

function toCryptogramme(nom: string, period: number): Cell[] {
  const norm = nom.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return Array.from(norm).map((ch): Cell => {
    const up = ch.toUpperCase();
    if (up >= "A" && up <= "Z") {
      const pos = up.charCodeAt(0) - 64;
      return { type: "letter", letter: up, expr: opFor(pos, period) };
    }
    if (ch === " ") return { type: "space" };
    return { type: "sep", ch };
  });
}

export function Diaporama({
  pays,
  continent,
  periodNumber,
  onClose,
}: {
  pays: Pays;
  continent: string;
  periodNumber: number;
  onClose: () => void;
}) {
  const theme = THEMES[periodNumber] ?? THEMES[1];
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const next = () => setI((n) => Math.min(LAST, n + 1));
  const prev = () => setI((n) => Math.max(0, n - 1));

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "Escape") { exitFullscreen(); onClose(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div ref={ref} className="board-overlay font-ludique flex flex-col" style={{ background: theme.bg }}>
      {/* Barre haute (sans émoji de contenu) */}
      <div className="flex shrink-0 flex-wrap items-center gap-3 border-b px-4 py-2" style={{ borderColor: theme.soft }}>
        <span className="text-sm font-extrabold uppercase tracking-wide" style={{ color: theme.accent }}>
          Autour du monde · {continent}
        </span>
        <div className="ml-2 flex gap-1.5">
          {ETAPES.map((t, k) => (
            <button key={t} onClick={() => setI(k)} title={t} className="h-3 w-3 rounded-full transition"
              style={{ background: k === i ? theme.accent : "#d6d3d1", transform: k === i ? "scale(1.25)" : "none" }} />
          ))}
        </div>
        <button onClick={() => requestFullscreen(ref.current)} className="rounded-full border-2 px-3 py-1 text-xs font-bold" style={{ borderColor: theme.accent, color: theme.accent }}>Plein écran</button>
        <button onClick={() => { exitFullscreen(); onClose(); }} className="ml-auto rounded-full px-4 py-1 text-xs font-bold text-white" style={{ background: theme.accent }}>Fermer</button>
      </div>

      <div className="grid flex-1 place-items-center overflow-auto p-4 sm:p-8">
        <div className="w-full max-w-5xl">
          {i === 0 && <SlideIntro continent={continent} periodNumber={periodNumber} theme={theme} />}
          {i === 1 && <SlideEnigme pays={pays} theme={theme} periodNumber={periodNumber} />}
          {i === 2 && <SlideGeo pays={pays} theme={theme} />}
          {i === 3 && <SlideVie pays={pays} theme={theme} />}
          {i === 4 && <SlideMonument pays={pays} theme={theme} />}
        </div>
      </div>

      <div className="flex shrink-0 items-center justify-between px-6 py-3">
        <button onClick={prev} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: theme.accent, color: theme.accent }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/{ETAPES.length} · {ETAPES[i]}</span>
        <button onClick={next} disabled={i === LAST} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: theme.accent }}>▶</button>
      </div>
    </div>
  );
}

type Theme = { accent: string; bg: string; soft: string; emoji: string };

function Carte({ children, theme }: { children: React.ReactNode; theme: Theme }) {
  return (
    <div className="rounded-[2rem] bg-white p-6 shadow-xl sm:p-10" style={{ boxShadow: `0 24px 60px -24px ${theme.accent}55` }}>
      {children}
    </div>
  );
}

/* --------------------------------------------- Slide 1 : intro continent */
function SlideIntro({ continent, periodNumber, theme }: { continent: string; periodNumber: number; theme: Theme }) {
  return (
    <Carte theme={theme}>
      <div className="py-8 text-center">
        <p className="text-2xl font-bold uppercase tracking-[0.2em] text-stone-400">Autour du monde</p>
        <h1 className="mt-3 text-6xl font-extrabold leading-tight sm:text-8xl" style={{ color: theme.accent }}>{continent}</h1>
        <div className="mx-auto mt-6 h-2 w-40 rounded-full" style={{ background: theme.accent }} />
        <p className="mt-6 text-3xl font-semibold text-stone-500">Période {periodNumber} : notre nouvelle escale</p>
      </div>
    </Carte>
  );
}

/* --------------------------------------------- Slide 2 : énigme */
function SlideEnigme({ pays, theme, periodNumber }: { pays: Pays; theme: Theme; periodNumber: number }) {
  const cells = useMemo(() => toCryptogramme(pays.nom, periodNumber), [pays.nom, periodNumber]);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [showKey, setShowKey] = useState(false);
  const allShown = cells.every((c, k) => c.type !== "letter" || revealed[k]);

  const revealAll = () => {
    const all: Record<number, boolean> = {};
    cells.forEach((c, k) => { if (c.type === "letter") all[k] = true; });
    setRevealed(all);
  };

  return (
    <Carte theme={theme}>
      <h2 className="text-center text-4xl font-extrabold text-stone-800 sm:text-5xl">Quel est ce pays&nbsp;?</h2>
      <p className="mt-2 text-center text-xl text-stone-500">Calcule chaque opération, puis trouve la lettre : A=1, B=2, C=3…</p>

      <div className="mt-8 flex flex-wrap items-end justify-center gap-2">
        {cells.map((c, k) => {
          if (c.type === "space") return <div key={k} className="w-6" />;
          if (c.type === "sep") return <div key={k} className="self-center text-4xl font-bold text-stone-300">{c.ch}</div>;
          const on = !!revealed[k];
          return (
            <button key={k} onClick={() => setRevealed((r) => ({ ...r, [k]: !r[k] }))}
              className="flex w-[4.5rem] flex-col items-center rounded-2xl border-2 bg-white p-1 transition hover:scale-105"
              style={{ borderColor: theme.accent }}>
              <span className="rounded-lg px-1 text-lg font-bold" style={{ background: theme.soft, color: theme.accent }}>{c.expr}</span>
              <span className="mt-1 grid h-12 w-full place-items-center text-3xl font-extrabold" style={{ color: on ? theme.accent : "#d6d3d1" }}>{on ? c.letter : "?"}</span>
            </button>
          );
        })}
      </div>

      {allShown && (
        <p className="mt-8 text-center text-6xl font-extrabold" style={{ color: theme.accent }}>{pays.nom}</p>
      )}

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <button onClick={() => (allShown ? setRevealed({}) : revealAll())} className="rounded-full px-7 py-3 text-lg font-bold text-white" style={{ background: theme.accent }}>
          {allShown ? "Cacher" : "Révéler la solution"}
        </button>
        <button onClick={() => setShowKey((s) => !s)} className="rounded-full border-2 px-6 py-3 text-base font-bold" style={{ borderColor: theme.accent, color: theme.accent }}>
          {showKey ? "Cacher l'alphabet" : "Aide : l'alphabet"}
        </button>
      </div>

      {showKey && (
        <div className="mt-4 flex flex-wrap justify-center gap-1 text-sm">
          {Array.from({ length: 26 }, (_, n) => (
            <span key={n} className="rounded-md bg-stone-100 px-2 py-1 font-semibold text-stone-600">{String.fromCharCode(65 + n)}={n + 1}</span>
          ))}
        </div>
      )}
    </Carte>
  );
}

/* --------------------------------------------- Slide 3 : géographie */
function SlideGeo({ pays, theme }: { pays: Pays; theme: Theme }) {
  const dist = Math.round(distanceKm(pays.lat, pays.lon) / 100) * 100;
  const dir = direction(pays.lat, pays.lon);
  return (
    <Carte theme={theme}>
      <h2 className="mb-4 text-center text-4xl font-extrabold" style={{ color: theme.accent }}>{pays.nom}</h2>
      <div className="overflow-hidden rounded-2xl border-4" style={{ borderColor: theme.soft }}>
        <WorldMap iso={pays.iso} lat={pays.lat} lon={pays.lon} nom={pays.nom} />
      </div>
      <div className="mt-3 flex flex-wrap items-center justify-center gap-5 text-base font-bold">
        <span className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full" style={{ background: "#f97316" }} /> France</span>
        <span className="flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full" style={{ background: "#2563eb" }} /> {pays.nom}</span>
        <span className="text-stone-300">Autres pays en gris</span>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xl">
        <span className="rounded-full px-4 py-2 font-bold" style={{ background: theme.soft, color: theme.accent }}>Capitale : {pays.capitale}</span>
        <span className="rounded-full px-4 py-2 font-bold" style={{ background: theme.soft, color: theme.accent }}>{pays.population}</span>
      </div>
      <p className="mt-4 text-center text-2xl text-stone-700">
        C'est au <strong style={{ color: theme.accent }}>{dir}</strong> de la France, à environ <strong style={{ color: theme.accent }}>{dist.toLocaleString("fr-FR")} km</strong>.
      </p>
    </Carte>
  );
}

/* --------------------------------------------- Slide 4 : découvertes */
function Puce({ children, color }: { children: React.ReactNode; color: string }) {
  return (
    <li className="flex items-start gap-2 text-xl leading-snug text-stone-700">
      <span className="mt-2 inline-block h-2.5 w-2.5 shrink-0 rounded-full" style={{ background: color }} />
      <span>{children}</span>
    </li>
  );
}
/* Slide 4 : la vie là-bas (mode de vie, traditions) */
function SlideVie({ pays, theme }: { pays: Pays; theme: Theme }) {
  return (
    <Carte theme={theme}>
      <h2 className="mb-5 text-center text-4xl font-extrabold" style={{ color: theme.accent }}>La vie là-bas</h2>
      <div className="mx-auto max-w-3xl">
        <WikiImage title={pays.wikiVie} alt={`La vie quotidienne — ${pays.nom}`} accent={theme.accent} />
        <ul className="mt-5 space-y-3">
          <Puce color={theme.accent}>{pays.culture}</Puce>
          <Puce color={theme.accent}><strong>Spécialité à goûter :</strong> {pays.specialite}</Puce>
        </ul>
      </div>
      <p className="mt-4 text-center text-xs text-stone-400">Photo : Wikipédia / Wikimedia Commons (chargée en ligne).</p>
    </Carte>
  );
}

/* Slide 5 : le monument à connaître (patrimoine) */
function SlideMonument({ pays, theme }: { pays: Pays; theme: Theme }) {
  return (
    <Carte theme={theme}>
      <h2 className="mb-5 text-center text-4xl font-extrabold" style={{ color: theme.accent }}>Le monument à connaître</h2>
      <div className="mx-auto max-w-3xl">
        <WikiImage title={pays.wikiMonument} alt={pays.monument} accent={theme.accent} />
        <p className="mt-5 text-center text-3xl font-extrabold text-stone-800">{pays.monument}</p>
        <ul className="mt-4 space-y-3">
          <Puce color={theme.accent}>{pays.patrimoine}</Puce>
        </ul>
      </div>
      <p className="mt-4 text-center text-xs text-stone-400">Photo : Wikipédia / Wikimedia Commons (chargée en ligne).</p>
    </Carte>
  );
}
