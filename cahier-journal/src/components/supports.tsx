/**
 * Registre des supports élèves « fournis » (à imprimer) associés à une séance.
 * Clé = identifiant de l'activité (stable pour le contenu de rentrée fourni).
 * Chaque support est une fiche A4 imprimable et téléchargeable en PDF.
 */
import type { ReactNode } from "react";
import { FleurDuNombreSupport } from "./FleurDuNombreSupport";

export interface SupportFourni {
  key: string;
  label: string;
  node: ReactNode;
}

export function supportsForActivity(activityId: string): SupportFourni[] {
  switch (activityId) {
    case "ah": // Fiche 2 — Le nombre du jour (fleur du nombre)
      return [
        { key: "fleur-ce1", label: "Fleur du nombre — CE1 (23)", node: <FleurDuNombreSupport niveau="CE1" /> },
        { key: "fleur-ce2", label: "Fleur du nombre — CE2 (23)", node: <FleurDuNombreSupport niveau="CE2" /> },
        { key: "fleur-corr", label: "Fleur du nombre — Correction (23)", node: <FleurDuNombreSupport niveau="CE2" correction /> },
      ];
    default:
      return [];
  }
}
