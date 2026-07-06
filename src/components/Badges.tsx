/**
 * Petites étiquettes colorées (badges)
 * ------------------------------------
 * Servent à indiquer le type de contenu et la difficulté d'une ressource.
 */
import { DIFFICULTY_LABELS, TYPE_LABELS, type Difficulty, type ResourceType } from "@/lib/types";

/** Badge du type de ressource (Vidéo / PDF / Texte) */
export function TypeBadge({ type }: { type: ResourceType }) {
  const colors: Record<ResourceType, string> = {
    video: "bg-rose-100 text-rose-700",
    pdf: "bg-amber-100 text-amber-700",
    texte: "bg-emerald-100 text-emerald-700",
  };
  return <span className={`badge ${colors[type]}`}>{TYPE_LABELS[type]}</span>;
}

/** Badge de difficulté (pour les sujets blancs) */
export function DifficultyBadge({ difficulty }: { difficulty: Difficulty }) {
  const colors: Record<Difficulty, string> = {
    facile: "bg-emerald-100 text-emerald-700",
    moyen: "bg-amber-100 text-amber-700",
    difficile: "bg-rose-100 text-rose-700",
  };
  return (
    <span className={`badge ${colors[difficulty]}`}>
      {DIFFICULTY_LABELS[difficulty]}
    </span>
  );
}
