"use client";

/**
 * Explorateur de FICHES CLAIRES
 * -----------------------------
 * Barre de recherche + filtres par bloc, puis affichage des fiches en
 * colonnes façon "magazine" (masonry). Réutilise le style de la plateforme.
 */
import { useMemo, useState } from "react";
import { FicheCard } from "./FicheCard";
import { FICHE_BLOCS, FICHES, type FicheBloc } from "@/lib/fiches-data";

export function FichesExplorer() {
  const [query, setQuery] = useState("");
  const [bloc, setBloc] = useState<FicheBloc | "all">("all");

  // On numérote les fiches à l'intérieur de chaque bloc (Fiche 01, 02...).
  const numbered = useMemo(() => {
    const counters: Record<string, number> = {};
    return FICHES.map((f) => {
      counters[f.bloc] = (counters[f.bloc] ?? 0) + 1;
      return { fiche: f, numero: counters[f.bloc] };
    });
  }, []);

  // Nombre de fiches par bloc (pour les compteurs des filtres).
  const counts = useMemo(() => {
    const c: Record<string, number> = {};
    FICHES.forEach((f) => (c[f.bloc] = (c[f.bloc] ?? 0) + 1));
    return c;
  }, []);

  // Application des filtres.
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return numbered.filter(({ fiche }) => {
      const okBloc = bloc === "all" || fiche.bloc === bloc;
      const haystack = (
        fiche.titre +
        " " +
        fiche.definition +
        " " +
        fiche.points.join(" ") +
        " " +
        fiche.exemple.join(" ") +
        " " +
        fiche.pieges.join(" ") +
        " " +
        fiche.retenir
      ).toLowerCase();
      const okQuery = !q || haystack.includes(q);
      return okBloc && okQuery;
    });
  }, [numbered, query, bloc]);

  const blocKeys = Object.keys(FICHE_BLOCS) as FicheBloc[];

  return (
    <div>
      {/* ---------- Recherche ---------- */}
      <div className="relative">
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-300">
          <SearchIcon />
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher une notion (ex : subjonctif, métaphore…)"
          className="w-full rounded-full border border-navy-200 bg-white py-3.5 pl-12 pr-4 text-navy-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
        />
      </div>

      {/* ---------- Filtres par bloc ---------- */}
      <div className="mt-5 flex flex-wrap items-center gap-1.5 rounded-full bg-navy-50 p-1.5">
        <Chip active={bloc === "all"} onClick={() => setBloc("all")}>
          Tout <Count>{FICHES.length}</Count>
        </Chip>
        {blocKeys.map((key) => (
          <Chip key={key} active={bloc === key} onClick={() => setBloc(key)}>
            <span className={`h-2 w-2 rounded-full ${FICHE_BLOCS[key].swatch}`} />
            {FICHE_BLOCS[key].label} <Count>{counts[key]}</Count>
          </Chip>
        ))}
      </div>

      {/* ---------- Résultats ---------- */}
      <p className="mt-6 text-sm text-navy-400">
        {filtered.length} fiche{filtered.length > 1 ? "s" : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-navy-200 py-16 text-center text-navy-400">
          Aucune fiche ne correspond à ta recherche.
        </div>
      ) : (
        <div className="mt-4 columns-1 gap-6 sm:columns-2 lg:columns-3">
          {filtered.map(({ fiche, numero }) => (
            <FicheCard key={fiche.bloc + numero} fiche={fiche} numero={numero} />
          ))}
        </div>
      )}
    </div>
  );
}

// ------------------- Sous-composants -------------------
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
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium transition ${
        active ? "bg-white text-navy-900 shadow-sm" : "text-navy-500 hover:text-navy-900"
      }`}
    >
      {children}
    </button>
  );
}

function Count({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-navy-100 px-2 py-0.5 text-xs font-semibold text-navy-500">
      {children}
    </span>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
