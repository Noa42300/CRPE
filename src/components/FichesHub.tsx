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
import { ANGLAIS_FICHES } from "@/lib/anglais-fiches";
import { ANGLAIS_META } from "@/lib/anglais-fiches/types";
import { ESPAGNOL_FICHES } from "@/lib/espagnol-fiches";
import { ESPAGNOL_META } from "@/lib/espagnol-fiches/types";
import { SVT_FICHES } from "@/lib/svt-fiches";
import { SVT_THEMES, type SvtTheme } from "@/lib/svt-fiches/types";
import { PHYS_FICHES } from "@/lib/physique-fiches";
import { PHYS_BLOCS, type PhysBloc } from "@/lib/physique-fiches/types";

type Matiere =
  | "francais" | "maths" | "histoire" | "anglais" | "espagnol" | "svt" | "physique-chimie";
const MATH_ORDER: MathBloc[] = ["nombres", "algebre", "geometrie", "grandeurs"];
const HIST_ORDER: HistoireBloc[] = ["monde-1945", "france-1945", "europe", "guerres-mondiales"];
const SVT_ORDER: SvtTheme[] = ["vivant", "corps", "genetique"];
const PHYS_ORDER: PhysBloc[] = ["matiere", "energie", "electricite", "mouvement"];

export function FichesHub() {
  const params = useSearchParams();
  const p = params.get("matiere");
  const urlMatiere: Matiere =
    p === "maths"
      ? "maths"
      : p === "histoire"
        ? "histoire"
        : p === "anglais"
          ? "anglais"
          : p === "espagnol"
            ? "espagnol"
            : p === "svt"
              ? "svt"
              : p === "physique-chimie"
                ? "physique-chimie"
                : "francais";
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
        <TabButton active={tab === "anglais"} onClick={() => setTab("anglais")}>
          🇬🇧 Anglais <Count>{ANGLAIS_FICHES.length}</Count>
        </TabButton>
        <TabButton active={tab === "espagnol"} onClick={() => setTab("espagnol")}>
          🇪🇸 Espagnol <Count>{ESPAGNOL_FICHES.length}</Count>
        </TabButton>
        <TabButton active={tab === "svt"} onClick={() => setTab("svt")}>
          🟢 SVT <Count>{SVT_FICHES.length}</Count>
        </TabButton>
        <TabButton active={tab === "physique-chimie"} onClick={() => setTab("physique-chimie")}>
          🟦 Physique-Chimie <Count>{PHYS_FICHES.length}</Count>
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
      {tab === "anglais" && (
        <LangueList fiches={ANGLAIS_FICHES} meta={ANGLAIS_META} basePath="/fiches/anglais" />
      )}
      {tab === "espagnol" && (
        <LangueList fiches={ESPAGNOL_FICHES} meta={ESPAGNOL_META} basePath="/fiches/espagnol" />
      )}
      {tab === "svt" && (
        <ChapterList
          order={SVT_ORDER}
          meta={svtMeta}
          fiches={SVT_FICHES.map((f) => ({ ...f, bloc: f.theme }))}
          basePath="/fiches/svt"
        />
      )}
      {tab === "physique-chimie" && (
        <ChapterList
          order={PHYS_ORDER}
          meta={PHYS_BLOCS}
          fiches={PHYS_FICHES}
          basePath="/fiches/physique-chimie"
        />
      )}
    </div>
  );
}

// Adapte SVT_THEMES au format attendu par ChapterList (clé "bloc").
const svtMeta = SVT_THEMES;

/** Liste des fiches d'une langue (anglais, espagnol… un seul bloc). */
function LangueList({
  fiches,
  meta,
  basePath,
}: {
  fiches: { slug: string; numero: number; titre: string; intro: string }[];
  meta: { label: string; emoji: string; pill: string };
  basePath: string;
}) {
  const sorted = [...fiches].sort((a, b) => a.numero - b.numero);
  return (
    <div>
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight text-navy-900">
        <span aria-hidden>{meta.emoji}</span> {meta.label}
        <span className="ml-1 rounded-full bg-navy-100 px-2.5 py-0.5 text-sm font-semibold text-navy-500">
          {sorted.length}
        </span>
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sorted.map((f) => (
          <Link
            key={f.slug}
            href={`${basePath}/${f.slug}`}
            className="card card-hover group flex items-start justify-between gap-3"
          >
            <div>
              <span className={`badge border ${meta.pill}`}>Fiche {f.numero}</span>
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
