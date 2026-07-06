"use client";

/**
 * DownloadButtons
 * ---------------
 * Deux boutons de téléchargement PDF (sujet + correction), générés
 * automatiquement à partir du contenu structuré du sujet. Fonctionne pour
 * n'importe quel sujet sans configuration supplémentaire.
 */
import { useState } from "react";
import { downloadSujetPdf } from "@/lib/sujets-blancs/pdf";
import type { SujetBlanc } from "@/lib/sujets-blancs/types";

export function DownloadButtons({ sujet }: { sujet: SujetBlanc }) {
  const [busy, setBusy] = useState<"sujet" | "correction" | null>(null);

  async function handle(kind: "sujet" | "correction") {
    try {
      setBusy(kind);
      await downloadSujetPdf(sujet, kind);
    } catch (e) {
      console.error("Génération PDF impossible :", e);
      alert("Le PDF n'a pas pu être généré. Réessaie dans un instant.");
    } finally {
      setBusy(null);
    }
  }

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={() => handle("sujet")}
        disabled={busy !== null}
        className="btn-primary flex-1"
      >
        {busy === "sujet" ? "Génération…" : "📄 Télécharger le sujet en PDF"}
      </button>
      <button
        onClick={() => handle("correction")}
        disabled={busy !== null}
        className="btn-secondary flex-1"
      >
        {busy === "correction"
          ? "Génération…"
          : "📄 Télécharger la correction en PDF"}
      </button>
    </div>
  );
}
