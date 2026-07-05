/**
 * PAGE — Une fiche de Physique-Chimie (dynamique)
 * Route : /fiches/physique-chimie/[slug]
 * Breadcrumb : Accueil > Fiches > Physique-Chimie > [fiche]
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PhysFicheView } from "@/components/physique/PhysFicheView";
import { PHYS_FICHES, getPhysFiche, getPhysFichesByBloc } from "@/lib/physique-fiches";

export function generateStaticParams() {
  return PHYS_FICHES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fiche = getPhysFiche(slug);
  if (!fiche) return { title: "Fiche introuvable" };
  return { title: `${fiche.titre} — Physique-Chimie`, description: fiche.intro };
}

export default async function FichePhysPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fiche = getPhysFiche(slug);
  if (!fiche) notFound();

  const blocFiches = getPhysFichesByBloc(fiche.bloc);
  const idx = blocFiches.findIndex((f) => f.slug === fiche.slug);
  const prev = idx > 0 ? blocFiches[idx - 1] : null;
  const next = idx < blocFiches.length - 1 ? blocFiches[idx + 1] : null;

  return (
    <div className="container-page py-10 sm:py-14">
      {/* Fil d'Ariane : Accueil > Fiches > Physique-Chimie > [fiche] */}
      <nav className="mb-6 text-sm text-navy-400">
        <Link href="/" className="hover:text-navy-700">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches" className="hover:text-navy-700">Fiches</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches?matiere=physique-chimie" className="hover:text-navy-700">Physique-Chimie</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-600">{fiche.titre}</span>
      </nav>

      <PhysFicheView fiche={fiche} />

      {/* Navigation entre fiches */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-col gap-3 border-t border-navy-100 pt-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link href={`/fiches/physique-chimie/${prev.slug}`} className="btn-secondary">
              ← {prev.titre}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/fiches/physique-chimie/${next.slug}`} className="btn-secondary">
              {next.titre} →
            </Link>
          ) : (
            <Link href="/fiches?matiere=physique-chimie" className="btn-secondary">
              Toutes les fiches de Physique-Chimie
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
