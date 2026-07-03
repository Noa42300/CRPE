/**
 * Carte d'une ressource
 * ----------------------
 * Grande carte moderne qui présente une fiche / vidéo / sujet.
 * - Si l'utilisateur a accès : bouton "Ouvrir"
 * - Si c'est Premium et qu'il n'y a pas accès : cadenas + lien vers Premium
 */
import Link from "next/link";
import { AccessBadge, DifficultyBadge, TypeBadge } from "./Badges";
import { SUBJECT_LABELS, type Resource } from "@/lib/types";

export function ResourceCard({
  resource,
  hasAccess,
}: {
  resource: Resource;
  hasAccess: boolean; // l'utilisateur peut-il ouvrir cette ressource ?
}) {
  const locked = resource.is_premium && !hasAccess;

  return (
    <article className="card card-hover flex flex-col">
      {/* En-tête : badges */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <TypeBadge type={resource.type} />
        <AccessBadge isPremium={resource.is_premium} />
        {resource.difficulty && (
          <DifficultyBadge difficulty={resource.difficulty} />
        )}
      </div>

      {/* Matière */}
      <p className="text-xs font-medium uppercase tracking-wide text-sky-600">
        {SUBJECT_LABELS[resource.subject]}
      </p>

      {/* Titre + description */}
      <h3 className="mt-1 text-lg font-semibold text-navy-900">
        {resource.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-500">
        {resource.description}
      </p>

      {/* Bouton d'action */}
      <div className="mt-5">
        {locked ? (
          <Link href="/premium" className="btn-secondary w-full">
            <LockIcon /> Débloquer avec Premium
          </Link>
        ) : (
          <Link href={`/ressource/${resource.id}`} className="btn-primary w-full">
            Ouvrir
          </Link>
        )}
      </div>
    </article>
  );
}

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
