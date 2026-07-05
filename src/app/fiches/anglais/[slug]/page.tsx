/**
 * PAGE — Une fiche d'Anglais (dynamique)
 * Route : /fiches/anglais/[slug]
 * Breadcrumb : Accueil > Fiches > Anglais > [fiche]
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AnglaisFicheView } from "@/components/anglais/AnglaisFicheView";
import { ANGLAIS_FICHES, getAnglaisFiche } from "@/lib/anglais-fiches";

export function generateStaticParams() {
  return ANGLAIS_FICHES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fiche = getAnglaisFiche(slug);
  if (!fiche) return { title: "Fiche introuvable" };
  return { title: `${fiche.titre} — Anglais`, description: fiche.intro };
}

export default async function FicheAnglaisPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fiche = getAnglaisFiche(slug);
  if (!fiche) notFound();

  const sorted = [...ANGLAIS_FICHES].sort((a, b) => a.numero - b.numero);
  const idx = sorted.findIndex((f) => f.slug === fiche.slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  return (
    <div className="container-page py-10 sm:py-14">
      {/* Fil d'Ariane : Accueil > Fiches > Anglais > [fiche] */}
      <nav className="mb-6 text-sm text-navy-400">
        <Link href="/" className="hover:text-navy-700">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches" className="hover:text-navy-700">Fiches</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches?matiere=anglais" className="hover:text-navy-700">Anglais</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-600">{fiche.titre}</span>
      </nav>

      <AnglaisFicheView fiche={fiche} />

      {/* Navigation entre fiches */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-col gap-3 border-t border-navy-100 pt-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link href={`/fiches/anglais/${prev.slug}`} className="btn-secondary">
              ← {prev.titre}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/fiches/anglais/${next.slug}`} className="btn-secondary">
              {next.titre} →
            </Link>
          ) : (
            <Link href="/fiches?matiere=anglais" className="btn-secondary">
              Toutes les fiches d'Anglais
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
