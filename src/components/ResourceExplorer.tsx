"use client";

/**
 * Explorateur de ressources (avec recherche et filtres)
 * -----------------------------------------------------
 * Composant réutilisable qui affiche :
 *  - une barre de recherche
 *  - des filtres par matière
 *  - la grille des cartes de ressources
 *
 * Il est utilisé sur les pages de catégories et sur la page de recherche.
 */
import { useMemo, useState } from "react";
import { ResourceCard } from "./ResourceCard";
import { filterResources } from "@/lib/filter";
import { SUBJECT_LABELS, type Resource, type Subject } from "@/lib/types";

export function ResourceExplorer({
  resources,
  initialQuery = "",
  showSubjectFilter = true,
  showSearch = true,
}: {
  resources: Resource[];
  initialQuery?: string;
  showSubjectFilter?: boolean;
  showSearch?: boolean;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [subject, setSubject] = useState<Subject | "all">("all");

  // Matières réellement présentes dans cette liste (pour ne pas afficher
  // des filtres inutiles).
  const subjects = useMemo(() => {
    const set = new Set<Subject>();
    resources.forEach((r) => set.add(r.subject));
    return Array.from(set);
  }, [resources]);

  // Application des filtres (recalculée à chaque changement).
  const filtered = useMemo(
    () => filterResources(resources, { query, subject }),
    [resources, query, subject]
  );

  return (
    <div>
      {/* ---------- Barre de recherche ---------- */}
      {showSearch && (
        <div className="relative">
          <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-navy-300">
            <SearchIcon />
          </span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher une fiche, une vidéo, un sujet..."
            className="w-full rounded-full border border-navy-200 bg-white py-3.5 pl-12 pr-4 text-navy-900 shadow-sm outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
          />
        </div>
      )}

      {/* ---------- Filtres par matière ---------- */}
      {showSubjectFilter && subjects.length > 1 && (
        <div className={`flex flex-wrap items-center gap-2 ${showSearch ? "mt-5" : ""}`}>
          <FilterGroup>
            <FilterChip active={subject === "all"} onClick={() => setSubject("all")}>
              Toutes les matières
            </FilterChip>
            {subjects.map((s) => (
              <FilterChip key={s} active={subject === s} onClick={() => setSubject(s)}>
                {SUBJECT_LABELS[s]}
              </FilterChip>
            ))}
          </FilterGroup>
        </div>
      )}

      {/* ---------- Résultats ---------- */}
      <p className="mt-6 text-sm text-navy-400">
        {filtered.length} ressource{filtered.length > 1 ? "s" : ""}
      </p>

      {filtered.length === 0 ? (
        <div className="mt-6 rounded-3xl border border-dashed border-navy-200 py-16 text-center text-navy-400">
          Aucune ressource ne correspond à ta recherche.
        </div>
      ) : (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((r) => (
            <ResourceCard key={r.id} resource={r} />
          ))}
        </div>
      )}
    </div>
  );
}

// ------------------- Sous-composants d'interface -------------------
function FilterGroup({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 rounded-full bg-navy-50 p-1.5">
      {children}
    </div>
  );
}

function FilterChip({
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
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
