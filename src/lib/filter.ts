/**
 * Filtrage des ressources (fonction PURE, utilisable partout)
 * -----------------------------------------------------------
 * Ce fichier ne dépend d'aucun code serveur : il peut donc être utilisé
 * aussi bien côté serveur que côté navigateur (barre de recherche, filtres).
 */
import type { Resource, Subject } from "./types";

export function filterResources(
  resources: Resource[],
  options: {
    query?: string;
    subject?: Subject | "all";
    access?: "all" | "free" | "premium";
  }
): Resource[] {
  const { query = "", subject = "all", access = "all" } = options;
  const q = query.trim().toLowerCase();

  return resources.filter((r) => {
    // Filtre par texte (titre + description)
    const matchesQuery =
      !q ||
      r.title.toLowerCase().includes(q) ||
      r.description.toLowerCase().includes(q);

    // Filtre par matière
    const matchesSubject = subject === "all" || r.subject === subject;

    // Filtre gratuit / premium
    const matchesAccess =
      access === "all" ||
      (access === "free" && !r.is_premium) ||
      (access === "premium" && r.is_premium);

    return matchesQuery && matchesSubject && matchesAccess;
  });
}

/** Liste des matières réellement présentes dans un ensemble de ressources. */
export function getAvailableSubjects(resources: Resource[]): Subject[] {
  const set = new Set<Subject>();
  resources.forEach((r) => set.add(r.subject));
  return Array.from(set);
}
