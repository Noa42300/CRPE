/**
 * PAGE — Une fiche d'Espagnol (dynamique)
 * Route : /fiches/espagnol/[slug]
 * Breadcrumb : Accueil > Fiches > Espagnol > [fiche]
 */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EspagnolFicheView } from "@/components/espagnol/EspagnolFicheView";
import { ESPAGNOL_FICHES, getEspagnolFiche } from "@/lib/espagnol-fiches";

export function generateStaticParams() {
  return ESPAGNOL_FICHES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const fiche = getEspagnolFiche(slug);
  if (!fiche) return { title: "Fiche introuvable" };
  return { title: `${fiche.titre} — Espagnol`, description: fiche.intro };
}

export default async function FicheEspagnolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const fiche = getEspagnolFiche(slug);
  if (!fiche) notFound();

  const sorted = [...ESPAGNOL_FICHES].sort((a, b) => a.numero - b.numero);
  const idx = sorted.findIndex((f) => f.slug === fiche.slug);
  const prev = idx > 0 ? sorted[idx - 1] : null;
  const next = idx < sorted.length - 1 ? sorted[idx + 1] : null;

  return (
    <div className="container-page py-10 sm:py-14">
      {/* Fil d'Ariane : Accueil > Fiches > Espagnol > [fiche] */}
      <nav className="mb-6 text-sm text-navy-400">
        <Link href="/" className="hover:text-navy-700">Accueil</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches" className="hover:text-navy-700">Fiches</Link>
        <span className="mx-2">/</span>
        <Link href="/fiches?matiere=espagnol" className="hover:text-navy-700">Espagnol</Link>
        <span className="mx-2">/</span>
        <span className="text-navy-600">{fiche.titre}</span>
      </nav>

      <EspagnolFicheView fiche={fiche} />

      {/* Navigation entre fiches */}
      <div className="mx-auto mt-12 max-w-3xl">
        <div className="flex flex-col gap-3 border-t border-navy-100 pt-6 sm:flex-row sm:justify-between">
          {prev ? (
            <Link href={`/fiches/espagnol/${prev.slug}`} className="btn-secondary">
              ← {prev.titre}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link href={`/fiches/espagnol/${next.slug}`} className="btn-secondary">
              {next.titre} →
            </Link>
          ) : (
            <Link href="/fiches?matiere=espagnol" className="btn-secondary">
              Toutes les fiches d'Espagnol
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
