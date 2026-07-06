/**
 * Carte d'une ressource
 * ----------------------
 * Grande carte moderne qui présente une fiche / vidéo / sujet.
 * Tout le contenu est gratuit : la carte mène directement à la ressource.
 */
import Link from "next/link";
import { DifficultyBadge, TypeBadge } from "./Badges";
import { SUBJECT_LABELS, type Resource } from "@/lib/types";

export function ResourceCard({ resource }: { resource: Resource }) {
  return (
    <article className="card card-hover flex flex-col">
      {/* En-tête : badges */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <TypeBadge type={resource.type} />
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
        <Link href={`/ressource/${resource.id}`} className="btn-primary w-full">
          Ouvrir
        </Link>
      </div>
    </article>
  );
}
