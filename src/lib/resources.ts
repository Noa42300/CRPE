/**
 * Récupération et filtrage des ressources (côté serveur)
 * ------------------------------------------------------
 * - Si Supabase est configuré ET contient des ressources : on les utilise.
 * - Sinon : on affiche les données de démonstration (src/lib/demo-data.ts).
 *
 * Ainsi, le site est TOUJOURS rempli, même avant configuration.
 */
import { createClient } from "./supabase/server";
import { isSupabaseConfigured } from "./supabase/config";
import { DEMO_RESOURCES } from "./demo-data";
import type { Category, Resource } from "./types";

// Ré-export du filtre (défini dans filter.ts pour être utilisable côté client).
export { filterResources, getAvailableSubjects } from "./filter";

/** Récupère toutes les ressources (base de données ou démonstration). */
export async function getAllResources(): Promise<Resource[]> {
  if (isSupabaseConfigured()) {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from("resources")
        .select("*")
        .order("created_at", { ascending: false });

      // Si la table contient des données, on les renvoie.
      if (!error && data && data.length > 0) {
        return data as Resource[];
      }
    } catch {
      // En cas de souci, on retombe sur les données de démo.
    }
  }
  return DEMO_RESOURCES;
}

/** Récupère les ressources d'une catégorie (ex : "sujets-blancs"). */
export async function getResourcesByCategory(
  category: Category
): Promise<Resource[]> {
  const all = await getAllResources();
  return all.filter((r) => r.category === category);
}

/** Récupère une ressource précise par son identifiant. */
export async function getResourceById(id: string): Promise<Resource | null> {
  const all = await getAllResources();
  return all.find((r) => r.id === id) ?? null;
}
