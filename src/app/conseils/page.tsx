/**
 * PAGE — CONSEILS
 * Vidéos, textes, PDF et conseils personnels de préparation.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { ResourceExplorer } from "@/components/ResourceExplorer";
import { getResourcesByCategory } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Conseils",
  description:
    "Les conseils personnels de Noa pour préparer le CRPE : organisation, méthode et motivation.",
};

export default async function ConseilsPage() {
  const resources = await getResourcesByCategory("conseils");

  return (
    <div>
      <PageHeader
        eyebrow="Conseils"
        title="Mes conseils pour préparer le CRPE"
        subtitle="Vidéos, textes et fiches PDF issus de mon expérience. Tout ce que j'aurais aimé savoir avant de commencer."
      />
      <section className="container-page py-12">
        <ResourceExplorer resources={resources} />
      </section>
    </div>
  );
}
