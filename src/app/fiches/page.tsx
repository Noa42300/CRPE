/**
 * PAGE — FICHES CLAIRES
 * Les 42 fiches de révision Français, claires et prêtes à réviser.
 */
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { FichesExplorer } from "@/components/FichesExplorer";

export const metadata: Metadata = {
  title: "Fiches claires",
  description:
    "42 fiches de révision Français claires et synthétiques pour le CRPE : grammaire, conjugaison, lexique et analyse de texte.",
};

export default function FichesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Fiches claires"
        title="Des fiches claires, prêtes à réviser"
        subtitle="42 fiches synthétiques en Français — grammaire, conjugaison, lexique et analyse de texte. Chaque couleur correspond à une rubrique : repère-les d'un coup d'œil."
      />
      <section className="container-page py-12">
        <FichesExplorer />
      </section>
    </div>
  );
}
