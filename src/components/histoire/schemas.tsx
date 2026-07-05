/**
 * Schémas d'histoire (frise chronologique, flux causes→conséquences)
 * ------------------------------------------------------------------
 * 100 % en HTML/CSS/SVG (aucune image externe).
 */
import { RichText } from "@/components/RichText";
import type { Flux, Repere } from "@/lib/histoire-fiches/types";

/** Frise chronologique verticale (repères datés). */
export function Frise({ reperes }: { reperes: Repere[] }) {
  return (
    <div className="relative pl-6">
      {/* Ligne verticale */}
      <span className="absolute left-[9px] top-1 bottom-1 w-0.5 bg-sky-200" aria-hidden />
      <ol className="flex flex-col gap-4">
        {reperes.map((r, i) => (
          <li key={i} className="relative">
            <span className="absolute -left-6 top-1 h-4 w-4 rounded-full border-2 border-white bg-sky-500 shadow" aria-hidden />
            <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:gap-3">
              <span className="inline-flex w-fit rounded-md bg-navy-900 px-2 py-0.5 text-xs font-bold tabular-nums text-white">
                {r.date}
              </span>
              <span className="text-[15px] text-navy-700">
                <RichText text={r.label} />
              </span>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

/** Schéma Causes → Événements → Conséquences (3 colonnes colorées). */
export function FluxCauseEffet({ flux }: { flux: Flux }) {
  const cols = [
    { titre: "Causes", color: "emerald", items: flux.causes },
    { titre: "Événements", color: "rose", items: flux.evenements },
    { titre: "Conséquences", color: "amber", items: flux.consequences },
  ] as const;

  const theme: Record<string, string> = {
    emerald: "border-emerald-200 bg-emerald-50 text-emerald-700",
    rose: "border-rose-200 bg-rose-50 text-rose-700",
    amber: "border-amber-200 bg-amber-50 text-amber-700",
  };

  return (
    <div className="flex flex-col items-stretch gap-2 md:flex-row md:items-center">
      {cols.map((c, i) => (
        <div key={c.titre} className="flex flex-1 items-center gap-2">
          <div className={`flex-1 rounded-xl border p-3 ${theme[c.color]}`}>
            <p className="mb-1.5 text-xs font-bold uppercase tracking-wide">{c.titre}</p>
            <ul className="flex flex-col gap-1">
              {c.items.map((it, j) => (
                <li key={j} className="text-[13px] leading-snug text-navy-700">
                  <RichText text={it} />
                </li>
              ))}
            </ul>
          </div>
          {i < cols.length - 1 && (
            <span className="hidden text-2xl font-bold text-navy-300 md:inline" aria-hidden>→</span>
          )}
          {i < cols.length - 1 && (
            <span className="mx-auto text-xl font-bold text-navy-300 md:hidden" aria-hidden>↓</span>
          )}
        </div>
      ))}
    </div>
  );
}
