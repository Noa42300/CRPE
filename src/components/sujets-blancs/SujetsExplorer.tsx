"use client";

/**
 * SujetsExplorer
 * --------------
 * Explorateur des sujets blancs : recherche plein texte + filtres par
 * matière + filtres par difficulté, puis grille de cartes. Chaque carte
 * mène à la page du sujet (/sujets-blancs/[slug]).
 *
 * Les filtres n'affichent que les matières réellement présentes : ajouter
 * un sujet suffit à le faire apparaître, sans toucher à ce composant.
 */
import { useMemo, useState } from "react";
import Link from "next/link";
import {
  SUJET_MATIERES,
  SUJET_MATIERE_ORDER,
  type SujetBlanc,
  type SujetMatiere,
} from "@/lib/sujets-blancs/types";

export function SujetsExplorer({ sujets }: { sujets: SujetBlanc[] }) {
  const [query, setQuery] = useState("");
  const [matiere, setMatiere] = useState<SujetMatiere | "all">("all");

  const matieres = useMemo(
    () =>
      SUJET_MATIERE_ORDER.filter((m) => sujets.some((s) => s.matiere === m)),
    [sujets]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sujets.filter((s) => {
      const okQuery =
        !q ||
        s.titre.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q);
      const okMatiere = matiere === "all" || s.matiere === matiere;
      return okQuery && okMatiere;
    });
  }, [sujets, query, matiere]);

  // Regroupement par matière pour un affichage clair.
  const grouped = useMemo(() => {
    const map = new Map<SujetMatiere, SujetBlanc[]>();
    for (const m of matieres) {
      const list = filtered.filter((s) => s.matiere === m);
      if (list.length) map.set(m, list);
    }
    return map;
  }, [filtered, matieres]);

  return (
    <div>
      {/* Recherche */}
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-300">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un sujet blanc…"
          className="w-full rounded-full border border-navy-200 bg-white py-3.5 pl-12 pr-4 text-navy-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
        />
      </div>

      {/* Filtres matière */}
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <div className="flex flex-wrap items-center gap-1.5 rounded-full bg-navy-50 p-1.5">
          <Chip active={matiere === "all"} onClick={() => setMatiere("all")}>
            Toutes les matières
          </Chip>
          {matieres.map((m) => (
            <Chip
              key={m}
              active={matiere === m}
              onClick={() => setMatiere(m)}
            >
              {SUJET_MATIERES[m].emoji} {SUJET_MATIERES[m].label}
            </Chip>
          ))}
        </div>
      </div>

      <p className="mt-6 text-sm text-navy-400">
        {filtered.length} sujet{filtered.length > 1 ? "s" : ""} blanc
        {filtered.length > 1 ? "s" : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-navy-200 py-16 text-center text-navy-400">
          Aucun sujet ne correspond à ta recherche.
        </div>
      ) : (
        <div className="mt-6 space-y-12">
          {Array.from(grouped.entries()).map(([m, list]) => (
            <section key={m}>
              <div className="mb-4 flex items-center gap-2">
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-lg ${SUJET_MATIERES[m].pill}`}
                >
                  {SUJET_MATIERES[m].emoji}
                </span>
                <h2 className="text-lg font-bold text-navy-900">
                  {SUJET_MATIERES[m].label}
                </h2>
                <span className="text-sm text-navy-400">
                  · {list.length} sujet{list.length > 1 ? "s" : ""}
                </span>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((s) => (
                  <SujetCard key={s.slug} sujet={s} />
                ))}
              </div>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}

function SujetCard({ sujet }: { sujet: SujetBlanc }) {
  const meta = SUJET_MATIERES[sujet.matiere];
  return (
    <Link
      href={`/sujets-blancs/${sujet.slug}`}
      className="card card-hover flex flex-col"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className={`badge border ${meta.pill}`}>
          {meta.emoji} {meta.label}
        </span>
      </div>
      <h3 className="text-lg font-semibold leading-snug text-navy-900">
        {sujet.titre}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
        {sujet.description}
      </p>
      <div className="mt-4 flex items-center gap-3 text-xs text-navy-400">
        <span>⏱️ {sujet.duree}</span>
        <span>🎯 {sujet.totalPoints} pts</span>
      </div>
      <div className="mt-4">
        <span className="btn-primary w-full">Ouvrir le sujet</span>
      </div>
    </Link>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
        active
          ? "bg-white text-navy-900 shadow-sm"
          : "text-navy-500 hover:text-navy-900"
      }`}
    >
      {children}
    </button>
  );
}

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
