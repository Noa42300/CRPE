/**
 * Petites étiquettes colorées (badges)
 * ------------------------------------
 * Servent à indiquer le type de contenu d'une ressource.
 */
import { TYPE_LABELS, type ResourceType } from "@/lib/types";

/** Badge du type de ressource (Vidéo / PDF / Texte) */
export function TypeBadge({ type }: { type: ResourceType }) {
  const colors: Record<ResourceType, string> = {
    video: "bg-rose-100 text-rose-700",
    pdf: "bg-amber-100 text-amber-700",
    texte: "bg-emerald-100 text-emerald-700",
  };
  return <span className={`badge ${colors[type]}`}>{TYPE_LABELS[type]}</span>;
}
