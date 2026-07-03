/**
 * PAGE — SUJETS BLANCS
 * Sujets d'entraînement pour toutes les épreuves, avec correction, vidéo
 * d'explication et niveau de difficulté.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResourceExplorer } from "@/components/ResourceExplorer";
import { getResourcesByCategory } from "@/lib/resources";
import { isCurrentUserPremium } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Sujets blancs",
  description:
    "Entraîne-toi avec des sujets blancs du CRPE : Français, Maths, HG-EMC, Arts, Musique, Langues, Oral de leçon et EPS. Sujet, correction et vidéo.",
};

export default async function SujetsBlancsPage() {
  const resources = await getResourcesByCategory("sujets-blancs");
  const hasAccess = await isCurrentUserPremium();

  return (
    <div>
      <PageHeader
        eyebrow="Sujets blancs"
        title="Entraîne-toi comme au concours"
        subtitle="Un sujet, sa correction, une vidéo d'explication et un niveau de difficulté — pour chaque épreuve écrite et orale."
      />
      <section className="container-page py-12">
        <ResourceExplorer resources={resources} hasAccess={hasAccess} />
      </section>
    </div>
  );
}
