/**
 * PAGE — CONSEILS
 * Page d'introduction aux conseils de préparation.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Conseils",
  description:
    "Les conseils personnels de Noa pour préparer le CRPE : organisation, méthode et motivation.",
};

export default function ConseilsPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Conseils"
        title="Mes conseils pour préparer le CRPE"
        subtitle="Vidéos, textes et fiches issus de mon expérience. De nouveaux conseils arriveront bientôt."
      />
    </div>
  );
}
