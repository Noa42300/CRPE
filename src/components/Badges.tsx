/**
 * Petites étiquettes colorées (badges)
 * ------------------------------------
 * Servent à indiquer le type de contenu, l'accès (gratuit/premium) et la
 * difficulté d'une ressource.
 */
import { DIFFICULTY_LABELS, TYPE_LABELS, type Difficulty, type ResourceType } from "@/lib/types";

/** Badge Gratuit / Premium */
export function AccessBadge({ isPremium }: { isPremium: boolean }) {
  if (isPremium) {
    return (
      <span className="badge bg-navy-900 text-white">
        <LockIcon /> Premium
      </span>
    );
  }
  return <span className="badge bg-sky-100 text-sky-800">Gratuit</span>;
}

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

function LockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
