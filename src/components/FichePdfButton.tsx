"use client";

/**
 * Bouton « Télécharger en PDF » d'une fiche
 * -----------------------------------------
 * Génère le PDF COMPLET de la fiche À LA VOLÉE, côté navigateur, à partir
 * de son contenu structuré (mêmes données que l'affichage web). Le PDF
 * reprend donc toute la fiche : titres, sous-titres, listes, tableaux,
 * couleurs de rubriques et mise en page soignée.
 *
 * jsPDF n'est chargé qu'au moment du clic (import dynamique), ce qui
 * n'alourdit pas le chargement des pages.
 */
import { useState } from "react";
import type { FichePdfData } from "@/lib/fiches-pdf";

export function FichePdfButton({
  data,
  full = false,
}: {
  data: FichePdfData;
  full?: boolean;
}) {
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");

  async function handleClick() {
    if (state === "loading") return;
    setState("loading");
    try {
      const { downloadFichePdf } = await import("@/lib/fiches-pdf");
      await downloadFichePdf(data);
      setState("idle");
    } catch (err) {
      console.error("Génération du PDF impossible :", err);
      setState("error");
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={state === "loading"}
      aria-busy={state === "loading"}
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-semibold text-navy-700 shadow-sm transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 active:scale-[0.98] disabled:cursor-wait disabled:opacity-70 ${
        full ? "w-full" : ""
      }`}
    >
      {state === "loading" ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animate-spin"
          aria-hidden
        >
          <path d="M21 12a9 9 0 1 1-6.219-8.56" />
        </svg>
      ) : (
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
        >
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      )}
      {state === "loading"
        ? "Génération…"
        : state === "error"
        ? "Réessayer"
        : "Télécharger en PDF"}
    </button>
  );
}
