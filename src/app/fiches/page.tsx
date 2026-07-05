/**
 * PAGE — FICHES (Français + Maths)
 * Un seul endroit, deux onglets : Français (42) et Maths (32).
 * On peut arriver directement sur l'onglet Maths via /fiches?matiere=maths
 * (l'onglet initial est lu côté client dans FichesHub).
 */
import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { FichesHub } from "@/components/FichesHub";

export const metadata: Metadata = {
  title: "Fiches de révision",
  description:
    "Toutes les fiches de révision CRPE : 42 fiches de Français (grammaire, conjugaison, lexique, analyse) et les fiches de Maths (nombres, algèbre, géométrie, grandeurs).",
};

export default function FichesPage() {
  return (
    <div>
      <PageHeader
        eyebrow="Fiches de révision"
        title="Toutes tes fiches, au même endroit"
        subtitle="Français et Maths réunis : des fiches claires et colorées pour comprendre vite et mémoriser facilement. Choisis ta matière ci-dessous."
      />
      <section className="container-page py-12">
        {/* Suspense requis car FichesHub lit la matière dans l'URL. */}
        <Suspense fallback={null}>
          <FichesHub />
        </Suspense>
      </section>
    </div>
  );
}
