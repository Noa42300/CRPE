/**
 * PAGE — DÉTAIL D'UNE RESSOURCE
 * Affiche le contenu complet d'une ressource (vidéo, PDF ou texte).
 * Tout le contenu est gratuit et accessible sans restriction.
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { VideoEmbed } from "@/components/VideoEmbed";
import { DifficultyBadge, TypeBadge } from "@/components/Badges";
import { getResourceById } from "@/lib/resources";
import { SUBJECT_LABELS, CATEGORY_LABELS, type Resource } from "@/lib/types";

// Génère un titre de page adapté à la ressource (bon pour le SEO).
export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const resource = await getResourceById(id);
  if (!resource) return { title: "Ressource introuvable" };
  return { title: resource.title, description: resource.description };
}

export default async function ResourcePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const resource = await getResourceById(id);
  if (!resource) notFound();

  return (
    <article className="container-page py-12 sm:py-16">
      {/* Fil d'Ariane */}
      <nav className="text-sm text-navy-400">
        <Link href="/" className="hover:text-navy-700">Accueil</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-600">{CATEGORY_LABELS[resource.category]}</span>
      </nav>

      {/* En-tête */}
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <TypeBadge type={resource.type} />
        {resource.difficulty && <DifficultyBadge difficulty={resource.difficulty} />}
        <span className="badge bg-navy-50 text-navy-600">
          {SUBJECT_LABELS[resource.subject]}
        </span>
      </div>

      <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {resource.title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-navy-500">
        {resource.description}
      </p>

      {/* Contenu (toujours accessible) */}
      <div className="mt-10">
        <ResourceContent resource={resource} />
      </div>
    </article>
  );
}

/** Affiche le contenu selon le type de ressource. */
function ResourceContent({ resource }: { resource: Resource }) {
  return (
    <div className="space-y-8">
      <ContentBlock type={resource.type} url={resource.url} title={resource.title} />

      {/* Correction (surtout pour les sujets blancs) */}
      {resource.correction_url && (
        <div>
          <h2 className="mb-4 text-2xl font-bold text-navy-900">Correction</h2>
          <ContentBlock
            // On détecte si la correction est une vidéo ou un PDF/texte.
            type={resource.correction_url.includes("embed") ? "video" : "pdf"}
            url={resource.correction_url}
            title={`Correction — ${resource.title}`}
          />
        </div>
      )}
    </div>
  );
}

/** Bloc d'affichage d'un contenu unique (vidéo / PDF / texte). */
function ContentBlock({
  type,
  url,
  title,
}: {
  type: Resource["type"];
  url: string;
  title: string;
}) {
  if (type === "video") {
    return <VideoEmbed url={url} title={title} />;
  }

  if (type === "pdf") {
    return (
      <div className="space-y-4">
        <div className="h-[70vh] w-full overflow-hidden rounded-3xl border border-navy-100 shadow-card">
          <iframe src={url} title={title} className="h-full w-full" />
        </div>
        <a href={url} target="_blank" rel="noopener noreferrer" className="btn-primary">
          ⬇ Télécharger le PDF
        </a>
      </div>
    );
  }

  // Texte
  return (
    <div className="card max-w-3xl">
      <p className="whitespace-pre-line text-lg leading-relaxed text-navy-700">
        {url}
      </p>
    </div>
  );
}
