/**
 * Diaporama « Autour du monde » — design ludique Cycle 2 (TBI / vidéoprojecteur)
 * ----------------------------------------------------------------------------
 * 5 slides : 1) Introduction du continent · 2) Énigme (cryptogramme calcul →
 * lettres) · 3) Géographie (vrai planisphère) · 4) Tradition · 5) Patrimoine.
 * Grandes cartes colorées, police ronde et lisible, contrastes forts.
 */
import { useEffect, useMemo, useRef, useState } from "react";
import type { Pays } from "../lib/projets";
import { THEMES } from "../lib/projets";
import { distanceKm, direction } from "../lib/geo";
import { requestFullscreen, exitFullscreen } from "../lib/board";
import { WorldMap } from "./WorldMap";

const ETAPES = ["Continent", "Énigme", "Géographie", "Tradition", "Patrimoine"];

interface Cell {
  type: "letter" | "space" | "sep";
  letter?: string;
  a?: number;
  b?: number;
  ch?: string;
}
function toCryptogramme(nom: string): Cell[] {
  const norm = nom.normalize("NFD").replace(/[̀-ͯ]/g, "");
  return Array.from(norm).map((ch): Cell => {
    const up = ch.toUpperCase();
    if (up >= "A" && up <= "Z") {
      const pos = up.charCodeAt(0) - 64;
      const a = Math.ceil(pos / 2);
      return { type: "letter", letter: up, a, b: pos - a };
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

  const next = () => setI((n) => Math.min(4, n + 1));
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
    <div
      ref={ref}
      className="board-overlay font-ludique flex flex-col"
      style={{ background: theme.bg }}
    >
      {/* Barre haute */}
      <div className="flex shrink-0 flex-wrap items-center gap-3 border-b px-4 py-2" style={{ borderColor: theme.soft }}>
        <span className="text-2xl">{pays.drapeau}</span>
        <span className="text-sm font-extrabold uppercase tracking-wide" style={{ color: theme.accent }}>
          Autour du monde · {continent}
        </span>
        <div className="ml-2 flex gap-1.5">
          {ETAPES.map((t, k) => (
            <button
              key={t}
              onClick={() => setI(k)}
              title={t}
              className="h-3 w-3 rounded-full transition"
              style={{ background: k === i ? theme.accent : "#d6d3d1", transform: k === i ? "scale(1.2)" : "none" }}
            />
          ))}
        </div>
        <button onClick={() => requestFullscreen(ref.current)} className="rounded-full border-2 px-3 py-1 text-xs font-bold" style={{ borderColor: theme.accent, color: theme.accent }}>⛶ Plein écran</button>
        <button onClick={() => { exitFullscreen(); onClose(); }} className="ml-auto rounded-full px-4 py-1 text-xs font-bold text-white" style={{ background: theme.accent }}>✕ Fermer</button>
      </div>

      {/* Slides */}
      <div className="grid flex-1 place-items-center overflow-auto p-4 sm:p-8">
        <div className="w-full max-w-5xl">
          {i === 0 && <SlideIntro pays={pays} continent={continent} periodNumber={periodNumber} theme={theme} />}
          {i === 1 && <SlideEnigme pays={pays} theme={theme} />}
          {i === 2 && <SlideGeo pays={pays} theme={theme} />}
          {i === 3 && <SlideTradition pays={pays} theme={theme} />}
          {i === 4 && <SlidePatrimoine pays={pays} theme={theme} />}
        </div>
      </div>

      {/* Navigation */}
      <div className="flex shrink-0 items-center justify-between px-6 py-3">
        <button onClick={prev} disabled={i === 0} className="rounded-full border-2 px-5 py-2 text-lg font-bold disabled:opacity-30" style={{ borderColor: theme.accent, color: theme.accent }}>◀</button>
        <span className="text-sm font-bold uppercase tracking-wide text-stone-500">{i + 1}/5 · {ETAPES[i]}</span>
        <button onClick={next} disabled={i === 4} className="rounded-full px-6 py-2 text-lg font-bold text-white disabled:opacity-30" style={{ background: theme.accent }}>▶</button>
      </div>
    </div>
  );
}

type Theme = { accent: string; bg: string; soft: string; emoji: string };

function Carte({ children, theme }: { children: React.ReactNode; theme: Theme }) {
  return (
    <div className="rounded-[2rem] bg-white p-6 text-center shadow-xl sm:p-10" style={{ boxShadow: `0 20px 50px -20px ${theme.accent}66` }}>
      {children}
    </div>
  );
}

/* -------------------------------------------------- Slide 1 : intro */
function SlideIntro({ pays, continent, periodNumber, theme }: { pays: Pays; continent: string; periodNumber: number; theme: Theme }) {
  return (
    <Carte theme={theme}>
      <div className="text-8xl">{theme.emoji}</div>
      <p className="mt-4 text-xl font-bold uppercase tracking-widest text-stone-400">Autour du monde</p>
      <h1 className="mt-2 text-6xl font-extrabold sm:text-7xl" style={{ color: theme.accent }}>{continent}</h1>
      <p className="mt-4 text-2xl text-stone-600">Période {periodNumber} · notre nouvelle escale</p>
      <div className="mt-6 inline-flex items-center gap-3 rounded-full px-6 py-3 text-2xl font-bold" style={{ background: theme.soft, color: theme.accent }}>
        {pays.drapeau} Aujourd'hui : {pays.nom}
      </div>
    </Carte>
  );
}

/* -------------------------------------------------- Slide 2 : cryptogramme */
function SlideEnigme({ pays, theme }: { pays: Pays; theme: Theme }) {
  const cells = useMemo(() => toCryptogramme(pays.nom), [pays.nom]);
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});
  const [showKey, setShowKey] = useState(false);
  const allShown = cells.every((c, k) => c.type !== "letter" || revealed[k]);

  const toggleAll = () => {
    if (allShown) setRevealed({});
    else {
      const all: Record<number, boolean> = {};
      cells.forEach((c, k) => { if (c.type === "letter") all[k] = true; });
      setRevealed(all);
    }
  };

  return (
    <Carte theme={theme}>
      <h2 className="text-4xl font-extrabold text-stone-800">Quel est ce pays&nbsp;?</h2>
      <p className="mt-2 text-xl text-stone-500">Calcule chaque opération, puis trouve la lettre&nbsp;: A=1, B=2, C=3…</p>

      <div className="mt-6 flex flex-wrap items-end justify-center gap-2">
        {cells.map((c, k) => {
          if (c.type === "space") return <div key={k} className="w-6" />;
          if (c.type === "sep") return <div key={k} className="self-center text-4xl font-bold text-stone-300">{c.ch}</div>;
          const on = !!revealed[k];
          return (
            <button
              key={k}
              onClick={() => setRevealed((r) => ({ ...r, [k]: !r[k] }))}
              className="flex w-16 flex-col items-center rounded-2xl border-2 bg-white p-1 transition hover:scale-105"
              style={{ borderColor: theme.accent }}
            >
              <span className="rounded-lg px-1 text-lg font-bold" style={{ background: theme.soft, color: theme.accent }}>
                {c.a} + {c.b}
              </span>
              <span className="mt-1 grid h-12 w-full place-items-center text-3xl font-extrabold" style={{ color: on ? theme.accent : "#d6d3d1" }}>
                {on ? c.letter : "?"}
              </span>
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <button onClick={toggleAll} className="rounded-full px-6 py-2 text-base font-bold text-white" style={{ background: theme.accent }}>
          {allShown ? "Cacher" : "Tout révéler"}
        </button>
        <button onClick={() => setShowKey((s) => !s)} className="rounded-full border-2 px-6 py-2 text-base font-bold" style={{ borderColor: theme.accent, color: theme.accent }}>
          {showKey ? "Cacher l'alphabet" : "Aide : l'alphabet"}
        </button>
      </div>

      {showKey && (
        <div className="mt-4 flex flex-wrap justify-center gap-1 text-sm">
          {Array.from({ length: 26 }, (_, n) => (
            <span key={n} className="rounded-md bg-stone-100 px-2 py-1 font-semibold text-stone-600">
              {String.fromCharCode(65 + n)}={n + 1}
            </span>
          ))}
        </div>
      )}
    </Carte>
  );
}

/* -------------------------------------------------- Slide 3 : géographie */
function SlideGeo({ pays, theme }: { pays: Pays; theme: Theme }) {
  const dist = Math.round(distanceKm(pays.lat, pays.lon) / 100) * 100;
  const dir = direction(pays.lat, pays.lon);
  return (
    <Carte theme={theme}>
      <h2 className="mb-3 text-4xl font-extrabold" style={{ color: theme.accent }}>{pays.drapeau} {pays.nom}</h2>
      <div className="overflow-hidden rounded-2xl border-4" style={{ borderColor: theme.soft }}>
        {/* pays étudié toujours en orange, France toujours en bleu (repères stables) */}
        <WorldMap iso={pays.iso} lat={pays.lat} lon={pays.lon} accent="#f97316" nom={pays.nom} drapeau={pays.drapeau} />
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-center gap-4 text-sm font-bold">
        <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full" style={{ background: "#3b82f6" }} /> France</span>
        <span className="flex items-center gap-1.5"><span className="inline-block h-3 w-3 rounded-full" style={{ background: "#f97316" }} /> {pays.nom}</span>
      </div>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xl">
        <span className="rounded-full px-4 py-2 font-bold" style={{ background: theme.soft, color: theme.accent }}>🏙️ Capitale : {pays.capitale}</span>
        <span className="rounded-full px-4 py-2 font-bold" style={{ background: theme.soft, color: theme.accent }}>👥 {pays.population}</span>
      </div>
      <p className="mt-4 text-2xl text-stone-700">
        C'est au <strong style={{ color: theme.accent }}>{dir}</strong> de la France, à environ <strong style={{ color: theme.accent }}>{dist.toLocaleString("fr-FR")} km</strong>.
      </p>
    </Carte>
  );
}

/* -------------------------------------------------- Slide 4 : tradition */
function SlideTradition({ pays, theme }: { pays: Pays; theme: Theme }) {
  return (
    <Carte theme={theme}>
      <div className="text-7xl">🎉</div>
      <h2 className="mt-3 text-4xl font-extrabold text-stone-800">La vie là-bas</h2>
      <p className="mx-auto mt-4 max-w-3xl text-3xl leading-relaxed text-stone-700">{pays.culture}</p>
      <div className="mt-6 inline-flex items-center gap-3 rounded-2xl px-6 py-4 text-2xl font-bold" style={{ background: theme.soft, color: theme.accent }}>
        🍽️ On y goûte : {pays.specialite}
      </div>
    </Carte>
  );
}

/* -------------------------------------------------- Slide 5 : patrimoine */
function SlidePatrimoine({ pays, theme }: { pays: Pays; theme: Theme }) {
  return (
    <Carte theme={theme}>
      <div className="text-7xl">🏛️</div>
      <p className="mt-3 text-lg font-bold uppercase tracking-widest text-stone-400">Le monument à connaître</p>
      <h2 className="mt-1 text-5xl font-extrabold" style={{ color: theme.accent }}>{pays.monument}</h2>
      <p className="mx-auto mt-5 max-w-3xl text-3xl leading-relaxed text-stone-700">{pays.patrimoine}</p>
    </Carte>
  );
}
