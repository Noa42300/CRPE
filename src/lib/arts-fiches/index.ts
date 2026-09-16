/**
 * Regroupe les fiches d'arts et fournit les fonctions d'accès.
 */
import { ARTS_FICHES } from "./data";
import type { ArtsFiche, ArtsTheme } from "./types";

export { ARTS_FICHES };

export function getArtsFiche(slug: string): ArtsFiche | undefined {
  return ARTS_FICHES.find((f) => f.slug === slug);
}

export function getArtsFichesByTheme(theme: ArtsTheme): ArtsFiche[] {
  return ARTS_FICHES.filter((f) => f.theme === theme).sort(
    (a, b) => a.numero - b.numero
  );
}
