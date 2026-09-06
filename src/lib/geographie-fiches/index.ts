/**
 * Regroupe les fiches de géographie et fournit les fonctions d'accès.
 */
import { GEO_FICHES } from "./data";
import type { GeoFiche, GeoTheme } from "./types";

export { GEO_FICHES };

export function getGeoFiche(slug: string): GeoFiche | undefined {
  return GEO_FICHES.find((f) => f.slug === slug);
}

export function getGeoFichesByTheme(theme: GeoTheme): GeoFiche[] {
  return GEO_FICHES.filter((f) => f.theme === theme).sort(
    (a, b) => a.numero - b.numero
  );
}
