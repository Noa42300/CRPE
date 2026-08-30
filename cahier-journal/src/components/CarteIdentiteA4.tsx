/**
 * Carte d'identité du pays — fiche A4 portrait (élève + correction)
 * ----------------------------------------------------------------
 * • Composant `FicheA4` calibré strictement au format A4 (voir `.fiche-a4` +
 *   `@media print` dans index.css) : impression / export PDF parfaitement
 *   propres, sans les menus de l'application.
 * • `CarteIdentiteOverlay` : aperçu plein écran projetable, bouton
 *   « Mode Correction » pour afficher la version complétée en grand au TBI,
 *   et bouton d'export PDF.
 */
import { useState } from "react";
import type { Pays } from "../lib/projets";
import { AUTOUR_DU_MONDE, THEMES } from "../lib/projets";
import { printArea } from "../lib/print";

function continentDe(pays: Pays): string {
  return AUTOUR_DU_MONDE.find((c) => c.pays.some((p) => p.id === pays.id))?.continent ?? "";
}

/** La fiche, au format A4 portrait. `correction` remplit les réponses. */
export function FicheA4({ pays, correction, accent }: { pays: Pays; correction: boolean; accent: string }) {
  const rep = (v: string) =>
    correction ? (
      <span style={{ color: accent, fontWeight: 800 }}>{v}</span>
    ) : (
      <span style={{ color: "#bbb" }}>………………………………………………</span>
    );

  const Ligne = ({ label, value }: { label: string; value: string }) => (
    <div style={{ display: "flex", alignItems: "baseline", gap: "4mm", marginBottom: "9mm", fontSize: "20px" }}>
      <span style={{ fontWeight: 700, color: "#333", whiteSpace: "nowrap" }}>{label} :</span>
      <span style={{ flex: 1, borderBottom: "2px dotted #999", paddingBottom: "1mm", minHeight: "8mm" }}>{rep(value)}</span>
    </div>
  );

  return (
    <div className="fiche-a4 font-ludique" style={{ background: "#fff", color: "#111", boxSizing: "border-box" }}>
      {/* bandeau titre */}
      <div style={{ borderTop: `8px solid ${accent}`, borderRadius: "4px", paddingTop: "6mm", marginBottom: "8mm", textAlign: "center" }}>
        <div style={{ fontSize: "13px", letterSpacing: "0.18em", textTransform: "uppercase", color: "#888" }}>Autour du monde · CE1-CE2</div>
        <h1 style={{ fontSize: "34px", margin: "2mm 0 0", fontWeight: 800 }}>Carte d'identité du pays</h1>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "15px", color: "#666", marginBottom: "9mm" }}>
        <span>Prénom : ……………………………………</span>
        <span>Date : ……… / ……… / ………</span>
      </div>

      <Ligne label="Nom du pays" value={pays.nom} />
      <Ligne label="Capitale" value={pays.capitale} />
      <Ligne label="Continent" value={continentDe(pays)} />
      <Ligne label="Spécialité" value={pays.specialite} />
      <Ligne label="Monument" value={pays.monument} />

      {/* Drapeau à dessiner */}
      <div style={{ marginTop: "6mm" }}>
        <div style={{ fontWeight: 700, color: "#333", fontSize: "20px", marginBottom: "3mm" }}>Drapeau à dessiner et colorier :</div>
        <div
          style={{
            border: "3px dashed #bbb",
            borderRadius: "8px",
            height: "72mm",
            display: "grid",
            placeItems: "center",
            background: correction ? "#fafafa" : "#fff",
          }}
        >
          {correction ? <span style={{ fontSize: "120px", lineHeight: 1 }}>{pays.drapeau}</span> : null}
        </div>
      </div>

      <p style={{ marginTop: "8mm", fontSize: "13px", color: "#aaa", textAlign: "center" }}>
        Projet « Autour du monde » — à compléter en classe. {pays.drapeau} {pays.nom}
      </p>
    </div>
  );
}

export function CarteIdentiteOverlay({
  pays,
  periodNumber,
  onClose,
}: {
  pays: Pays;
  periodNumber: number;
  onClose: () => void;
}) {
  const [correction, setCorrection] = useState(false);
  const accent = (THEMES[periodNumber] ?? THEMES[1]).accent;

  return (
    <div className="board-overlay font-ludique flex flex-col bg-stone-100 dark:bg-stone-900">
      {/* Barre d'outils (masquée à l'impression) */}
      <div className="flex shrink-0 flex-wrap items-center gap-3 border-b border-stone-200 bg-white px-4 py-2 dark:border-stone-700 dark:bg-stone-800">
        <span className="text-sm font-extrabold uppercase tracking-wide" style={{ color: accent }}>
          🪪 Carte d'identité — {pays.nom}
        </span>
        <button
          onClick={() => setCorrection((c) => !c)}
          className={`rounded-full border-2 px-4 py-1 text-xs font-bold ${correction ? "text-white" : ""}`}
          style={correction ? { background: "#16a34a", borderColor: "#16a34a" } : { borderColor: "#16a34a", color: "#16a34a" }}
        >
          {correction ? "✓ Mode Correction (TBI)" : "Mode Correction"}
        </button>
        <button onClick={() => printArea("print-carte")} className="rounded-full px-4 py-1 text-xs font-bold text-white" style={{ background: accent }}>
          ⬇️ Télécharger / Imprimer (PDF)
        </button>
        <button onClick={onClose} className="ml-auto rounded-full bg-stone-700 px-4 py-1 text-xs font-bold text-white">✕ Fermer</button>
      </div>

      {/* Aperçu A4 (centré, projetable) */}
      <div className="flex-1 overflow-auto p-6">
        <div className="mx-auto w-fit rounded-xl bg-white shadow-2xl">
          <FicheA4 pays={pays} correction={correction} accent={accent} />
        </div>
      </div>

      {/* Version imprimée : même fiche, dans la zone d'impression dédiée */}
      <div className="print-area" id="print-carte">
        <FicheA4 pays={pays} correction={correction} accent={accent} />
      </div>
    </div>
  );
}
