/**
 * Vue « Recherche »
 * -----------------
 * Recherche plein texte dans toutes les journées : intitulés, objectifs,
 * compétences, déroulé, matériel, différenciation, bilans, notes, élèves…
 * Insensible à la casse et aux accents. Tout se fait en local.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import { cap, formatLong } from "../lib/dates";
import { disciplineColor, disciplineLabel } from "../lib/lookup";
import { Search } from "./ui";
import type { Day, Settings } from "../lib/types";

function normalize(s: string): string {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

interface Hit {
  date: string;
  slotLabel: string;
  colorDot: string;
  snippet: string;
}

export function SearchView({ onOpenDate }: { onOpenDate: (iso: string) => void }) {
  const { settings, daysMap } = useStore();
  const [q, setQ] = useState("");
  const nq = normalize(q.trim());

  const hits = useMemo<Hit[]>(() => {
    if (nq.length < 2) return [];
    const out: Hit[] = [];
    const days = Object.values(daysMap).sort((a, b) =>
      a.date < b.date ? 1 : -1,
    );
    for (const day of days) {
      collectDayHits(day, nq, settings, out);
    }
    return out;
  }, [nq, daysMap, settings]);

  const byDate = useMemo(() => {
    const m = new Map<string, Hit[]>();
    for (const h of hits) {
      const arr = m.get(h.date) ?? [];
      arr.push(h);
      m.set(h.date, arr);
    }
    return Array.from(m.entries());
  }, [hits]);

  return (
    <div>
      <h1 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
        Recherche
      </h1>

      <div className="relative mb-5">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher une notion, un élève, une matière… (ex : fractions)"
          className="input py-2.5 pl-10"
        />
      </div>

      {nq.length >= 2 && (
        <p className="mb-3 text-sm text-slate-500">
          {hits.length === 0
            ? "Aucun résultat."
            : `${hits.length} résultat${hits.length > 1 ? "s" : ""} dans ${byDate.length} journée${byDate.length > 1 ? "s" : ""}.`}
        </p>
      )}

      <div className="space-y-4">
        {byDate.map(([date, dayHits]) => (
          <div key={date} className="card p-4">
            <button
              onClick={() => onOpenDate(date)}
              className="mb-2 text-sm font-semibold text-ink-600 hover:underline dark:text-ink-300"
            >
              {cap(formatLong(date))}
            </button>
            <div className="space-y-2">
              {dayHits.map((h, i) => (
                <button
                  key={i}
                  onClick={() => onOpenDate(h.date)}
                  className="flex w-full items-start gap-2 rounded-lg px-1 py-1 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50"
                >
                  <span className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${h.colorDot}`} />
                  <span className="min-w-0">
                    <span className="text-xs font-medium text-slate-500">
                      {h.slotLabel}
                    </span>
                    <span className="block text-sm text-slate-700 dark:text-slate-200">
                      {highlight(h.snippet, nq)}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Parcourt une journée et ajoute les correspondances à `out`. */
function collectDayHits(day: Day, nq: string, settings: Settings, out: Hit[]) {
  // Élèves absents / événements
  const infoText = [day.info.absentsNames, ...day.info.events.map((e) => e.note)]
    .filter(Boolean)
    .join(" · ");
  if (infoText && normalize(infoText).includes(nq)) {
    out.push({
      date: day.date,
      slotLabel: "Informations du jour",
      colorDot: "bg-slate-400",
      snippet: infoText,
    });
  }

  for (const slot of day.slots) {
    const color = disciplineColor(settings, slot.disciplineId);
    const label = `${slot.start}–${slot.end} · ${disciplineLabel(settings, slot.disciplineId)}`;
    for (const a of slot.activities) {
      const fields: string[] = [
        a.title,
        a.objectif,
        a.competence,
        a.competenceRef,
        a.progDomaine,
        a.progSequence,
        a.materiel,
        a.differenciation,
        a.depassement,
        a.bilan,
        a.aReprendre,
        a.devoirs,
        a.notesProchaine,
        ...a.deroulement.map((s) => `${s.label} ${s.note ?? ""}`),
      ];
      for (const f of fields) {
        if (f && normalize(f).includes(nq)) {
          out.push({
            date: day.date,
            slotLabel: label,
            colorDot: color.dot,
            snippet: f,
          });
          break; // une correspondance par activité suffit
        }
      }
    }
  }
}

/** Met en évidence la partie correspondante du texte. */
function highlight(text: string, nq: string) {
  const idx = normalize(text).indexOf(nq);
  if (idx < 0) return text;
  const before = text.slice(Math.max(0, idx - 40), idx);
  const match = text.slice(idx, idx + nq.length);
  const after = text.slice(idx + nq.length, idx + nq.length + 60);
  return (
    <>
      {idx > 40 ? "…" : ""}
      {before}
      <mark className="rounded bg-amber-200 px-0.5 dark:bg-amber-500/40 dark:text-white">
        {match}
      </mark>
      {after}
      {text.length > idx + nq.length + 60 ? "…" : ""}
    </>
  );
}
