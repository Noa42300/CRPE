"use client";

/**
 * SujetView
 * ---------
 * Affiche un sujet blanc complet avec une mise en page moderne homogène
 * au reste du site : en-tête coloré selon la matière, onglets
 * (Sujet / Correction / Barème), boutons PDF, encadrés, tableaux.
 *
 * Tout est piloté par les données (aucun contenu en dur) : n'importe quel
 * nouveau sujet est rendu automatiquement.
 */
import { useState } from "react";
import { BlockRenderer } from "./BlockRenderer";
import { DownloadButtons } from "./DownloadButtons";
import { DifficultyBadge } from "@/components/Badges";
import { SUJET_MATIERES, type SujetBlanc, type SujetSection } from "@/lib/sujets-blancs/types";

type Tab = "sujet" | "correction" | "bareme";

function SectionBlock({ section }: { section: SujetSection }) {
  return (
    <section className="scroll-mt-24">
      <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2 border-b border-navy-100 pb-2">
        <h2 className="text-xl font-bold text-navy-900">{section.titre}</h2>
        {typeof section.points === "number" && (
          <span className="rounded-full bg-navy-900 px-3 py-1 text-xs font-semibold text-white">
            {section.points} points
          </span>
        )}
      </div>
      {section.intro && (
        <p className="mb-4 italic leading-relaxed text-navy-500">
          {section.intro}
        </p>
      )}
      <BlockRenderer blocks={section.blocks} />
    </section>
  );
}

export function SujetView({ sujet }: { sujet: SujetBlanc }) {
  const [tab, setTab] = useState<Tab>("sujet");
  const meta = SUJET_MATIERES[sujet.matiere];

  return (
    <div className="mx-auto max-w-4xl">
      {/* ---------- En-tête coloré ---------- */}
      <header
        className={`relative overflow-hidden rounded-3xl border ${meta.pill} p-7 sm:p-9`}
      >
        <div className="flex flex-wrap items-center gap-2 text-sm font-semibold">
          <span className="text-3xl">{meta.emoji}</span>
          <span className="uppercase tracking-wide">{meta.label}</span>
          <DifficultyBadge difficulty={sujet.difficulty} />
        </div>
        <h1 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          {sujet.titre}
        </h1>
        <p className="mt-2 max-w-2xl leading-relaxed text-navy-700">
          {sujet.description}
        </p>
        <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-sm text-navy-700">
          <div className="flex items-center gap-1.5">
            <span aria-hidden>🗂️</span>
            <dt className="sr-only">Épreuve</dt>
            <dd>{sujet.epreuve}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <span aria-hidden>⏱️</span>
            <dt className="sr-only">Durée</dt>
            <dd>{sujet.duree}</dd>
          </div>
          <div className="flex items-center gap-1.5">
            <span aria-hidden>🎯</span>
            <dt className="sr-only">Barème</dt>
            <dd>Sur {sujet.totalPoints} points</dd>
          </div>
        </dl>
      </header>

      {/* ---------- Boutons PDF ---------- */}
      <div className="mt-6">
        <DownloadButtons sujet={sujet} />
      </div>

      {/* ---------- Onglets ---------- */}
      <div className="sticky top-16 z-10 mt-8 -mx-2 rounded-full bg-white/85 px-2 py-2 backdrop-blur">
        <div className="flex gap-1.5 rounded-full bg-navy-50 p-1.5">
          <TabBtn active={tab === "sujet"} onClick={() => setTab("sujet")}>
            📝 Sujet
          </TabBtn>
          <TabBtn active={tab === "correction"} onClick={() => setTab("correction")}>
            ✅ Correction
          </TabBtn>
          <TabBtn active={tab === "bareme"} onClick={() => setTab("bareme")}>
            📊 Barème
          </TabBtn>
        </div>
      </div>

      {/* ---------- Contenu ---------- */}
      <div className="mt-8">
        {tab === "sujet" && (
          <div className="space-y-10">
            {sujet.consignes.length > 0 && (
              <div className="rounded-2xl border border-sky-200 bg-sky-50 px-5 py-4">
                <p className="mb-2 text-sm font-bold text-sky-800">
                  💡 Consignes
                </p>
                <ul className="space-y-1.5 text-[15px] leading-relaxed text-navy-700">
                  {sujet.consignes.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            )}
            {sujet.sujet.map((s, i) => (
              <SectionBlock key={i} section={s} />
            ))}
          </div>
        )}

        {tab === "correction" && (
          <div className="space-y-10">
            {sujet.correctionIntro && (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4">
                <p className="mb-2 text-sm font-bold text-emerald-800">
                  🧭 Esprit de la correction
                </p>
                <p className="text-[15px] leading-relaxed text-navy-700">
                  {sujet.correctionIntro}
                </p>
              </div>
            )}
            {sujet.correction.map((s, i) => (
              <SectionBlock key={i} section={s} />
            ))}
          </div>
        )}

        {tab === "bareme" && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-navy-900">Barème indicatif</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse overflow-hidden rounded-xl text-sm">
                <thead>
                  <tr className="bg-navy-900 text-white">
                    {sujet.bareme.entetes.map((h, i) => (
                      <th
                        key={i}
                        className="border border-navy-800 px-3 py-2 text-left font-semibold"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sujet.bareme.lignes.map((row, ri) => (
                    <tr key={ri} className={ri % 2 ? "bg-navy-50/50" : "bg-white"}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          className="border border-navy-100 px-3 py-2 align-top text-navy-700"
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-right text-base font-bold text-navy-900">
              Total : {sujet.bareme.total}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function TabBtn({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
        active
          ? "bg-white text-navy-900 shadow-sm"
          : "text-navy-500 hover:text-navy-900"
      }`}
    >
      {children}
    </button>
  );
}
