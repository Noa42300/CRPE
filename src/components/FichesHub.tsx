"use client";

/**
 * Hub des fiches : onglets Français / Mathématiques / Histoire
 * -----------------------------------------------------------
 * Un seul point d'entrée (« Fiches »), toutes les matières regroupées.
 * L'onglet de départ est lu dans l'URL (ex : /fiches?matiere=maths).
 */
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FichesExplorer } from "./FichesExplorer";
import { FICHES } from "@/lib/fiches-data";
import { MATH_FICHES } from "@/lib/maths-fiches";
import { MATH_BLOCS, type MathBloc } from "@/lib/maths-fiches/types";
import { HISTOIRE_FICHES } from "@/lib/histoire-fiches";
import { HISTOIRE_BLOCS, type HistoireBloc } from "@/lib/histoire-fiches/types";

type Matiere = "francais" | "maths" | "histoire";
const MATH_ORDER: MathBloc[] = ["nombres", "algebre", "geometrie", "grandeurs"];
const HIST_ORDER: HistoireBloc[] = ["monde-1945", "france-1945", "europe", "guerres-mondiales"];

export function FichesHub() {
  const params = useSearchParams();
  const p = params.get("matiere");
  const urlMatiere: Matiere = p === "maths" ? "maths" : p === "histoire" ? "histoire" : "francais";
  const [tab, setTab] = useState<Matiere>(urlMatiere);

  useEffect(() => {
    setTab(urlMatiere);
  }, [urlMatiere]);

  return (
    <div>
      {/* ---------- Sélecteur de matière ---------- */}
      <div className="mb-8 inline-flex flex-wrap gap-1.5 rounded-full bg-navy-50 p-1.5">
        <TabButton active={tab === "francais"} onClick={() => setTab("francais")}>
          📘 Français <Count>{FICHES.length}</Count>
        </TabButton>
        <TabButton active={tab === "maths"} onClick={() => setTab("maths")}>
          📐 Mathématiques <Count>{MATH_FICHES.length}</Count>
        </TabButton>
        <TabButton active={tab === "histoire"} onClick={() => setTab("histoire")}>
          🌍 Histoire <Count>{HISTOIRE_FICHES.length}</Count>
        </TabButton>
      </div>

      {/* ---------- Contenu de l'onglet ---------- */}
      {tab === "francais" && <FichesExplorer />}
      {tab === "maths" && (
        <ChapterList
          order={MATH_ORDER}
          meta={MATH_BLOCS}
          fiches={MATH_FICHES}
          basePath="/fiches/maths"
        />
      )}
      {tab === "histoire" && (
        <ChapterList
          order={HIST_ORDER}
          meta={HISTOIRE_BLOCS}
          fiches={HISTOIRE_FICHES}
          basePath="/fiches/histoire"
        />
      )}
    </div>
  );
}

/**
 * Liste de chapitres regroupés par bloc (commune aux Maths et à l'Histoire).
 */
function ChapterList<B extends string>({
  order,
  meta,
  fiches,
  basePath,
}: {
  order: B[];
  meta: Record<B, { label: string; emoji: string; pill: string }>;
  fiches: { slug: string; bloc: B; numero: number; titre: string; intro: string }[];
  basePath: string;
}) {
  return (
    <div className="space-y-10">
      {order.map((bloc) => {
        const list = fiches.filter((f) => f.bloc === bloc).sort((a, b) => a.numero - b.numero);
        if (list.length === 0) return null;
        const m = meta[bloc];
        return (
          <div key={bloc}>
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight text-navy-900">
              <span aria-hidden>{m.emoji}</span> {m.label}
              <span className="ml-1 rounded-full bg-navy-100 px-2.5 py-0.5 text-sm font-semibold text-navy-500">
                {list.length}
              </span>
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {list.map((f) => (
                <Link
                  key={f.slug}
                  href={`${basePath}/${f.slug}`}
                  className="card card-hover group flex items-start justify-between gap-3"
                >
                  <div>
                    <span className={`badge border ${m.pill}`}>Fiche {f.numero}</span>
                    <h3 className="mt-2 text-lg font-semibold text-navy-900">{f.titre}</h3>
                    <p className="mt-1 line-clamp-2 text-sm text-navy-500">{f.intro}</p>
                  </div>
                  <span className="mt-1 flex-none text-navy-300 transition group-hover:translate-x-1 group-hover:text-sky-500">
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ------------------- Sous-composants -------------------
function TabButton({
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
      className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
        active ? "bg-white text-navy-900 shadow-sm" : "text-navy-500 hover:text-navy-900"
      }`}
      aria-pressed={active}
    >
      {children}
    </button>
  );
}

function Count({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full bg-navy-100 px-2 py-0.5 text-xs font-bold text-navy-500">
      {children}
    </span>
  );
}
