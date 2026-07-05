/**
 * PAGE — Une fiche de SVT (dynamique)
 * Route : /fiches/svt/[slug]
 * Breadcrumb : Accueil > Fiches > SVT > [fiche]
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SvtFicheView } from "@/components/svt/SvtFicheView";
import { SVT_FICHES, getSvtFiche, getSvtFichesByTheme } from "@/lib/svt-fiches";

export function generateStaticParams() {
  return SVT_FICHES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fiche = getSvtFiche(slug);
  if (!fiche) return { title: "Fiche introuvable" };
  return { title: `${fiche.titre} — SVT`, description: fiche.intro };
}

export default async function FicheSvtPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fiche = getSvtFiche(slug);
  if (!fiche) notFound();

  const themeFiches = getSvtFichesByTheme(fiche.theme);
  const idx = themeFiches.findIndex((f) => f.slug === fiche.slug);
  const prev = idx > 0 ? themeFiches[idx - 1] : null;
  const next = idx < themeFiches.length - 1 ? themeFiches[idx + 1] : null;

  return (
    <div className="container-page py-10 sm:py-14">
      {/* Fil d'Ariane : Accueil > Fiches > SVT > [fiche] */}
      <nav className="mb-6 text-sm text-navy-400">
        <Link href="/" className="hover:text-navy-700">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches" className="hover:text-navy-700">Fiches</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches?matiere=svt" className="hover:text-navy-700">SVT</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-600">{fiche.titre}</span>
      </nav>

      <SvtFicheView fiche={fiche} />

      {/* Navigation entre fiches */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-col gap-3 border-t border-navy-100 pt-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link href={`/fiches/svt/${prev.slug}`} className="btn-secondary">
              ← {prev.titre}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/fiches/svt/${next.slug}`} className="btn-secondary">
              {next.titre} →
            </Link>
          ) : (
            <Link href="/fiches?matiere=svt" className="btn-secondary">
              Toutes les fiches de SVT
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
