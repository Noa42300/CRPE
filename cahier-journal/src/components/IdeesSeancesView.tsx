/**
 * Séances & fiches vierges (ex-« Idées séances »)
 * -----------------------------------------------
 * Aucune génération automatique. On construit soi-même sa fiche de prép, comme
 * dans le calendrier :
 *  • Fiche de préparation VIERGE (à imprimer, remplir à la main).
 *  • Nouvelle séance vierge : la MÊME fiche de prép éditable que dans le
 *    calendrier (titre, objectif, déroulement…), à remplir puis à insérer dans
 *    une journée à une heure précise.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Activity, Day } from "../lib/types";
import { emptyActivity, emptyDay } from "../lib/factory";
import { uid, todayISO, formatLong } from "../lib/dates";
import { printArea } from "../lib/print";
import { downloadElementPdf, safeFileName } from "../lib/pdf";
import { ActivityEditor } from "./ActivityEditor";
import { FichePrepVierge } from "./FichePrepA4";
import { Printer } from "./ui";

export function IdeesSeancesView() {
  const { settings, daysMap, saveDay } = useStore();
  const teaching = useMemo(
    () => settings.disciplines.filter((d) => !["recreation", "cantine"].includes(d.id)),
    [settings.disciplines],
  );

  const [disciplineId, setDisciplineId] = useState(teaching[0]?.id ?? "francais");
  const [niveau, setNiveau] = useState<"classe" | "CE1" | "CE2">("classe");
  const [date, setDate] = useState(todayISO());
  const [debut, setDebut] = useState("13:45");
  const [fin, setFin] = useState("14:30");
  const [draft, setDraft] = useState<Activity | null>(null);
  const [flash, setFlash] = useState("");

  const flashMsg = (m: string) => { setFlash(m); setTimeout(() => setFlash(""), 4000); };

  const downloadPrepVierge = async () => {
    const container = document.getElementById("print-prep-vierge");
    const el = (container?.querySelector(".fiche-a4") as HTMLElement | null) ?? container;
    if (!el) { alert("Fiche introuvable, réessaie."); return; }
    try {
      await downloadElementPdf(el, `${safeFileName("Fiche de prep vierge")}.pdf`);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      alert(`Le PDF n'a pas pu être généré (${msg}).\n\nLa fenêtre d'impression va s'ouvrir : choisis « Enregistrer au format PDF ».`);
      printArea("print-prep-vierge");
    }
  };

  const nouvelle = () => { setDraft({ ...emptyActivity([niveau]) }); setFlash(""); };

  const insererSeance = () => {
    if (!draft) return;
    const existing: Day | undefined = daysMap[date];
    const day: Day = existing ?? emptyDay(date, settings.classe.effectif ?? null);
    const slot = { id: uid(), start: debut, end: fin, disciplineId, activities: [{ ...draft, id: uid() }] };
    const slots = [...day.slots, slot].sort((x, y) => x.start.localeCompare(y.start));
    saveDay({ ...day, slots });
    flashMsg(`Séance insérée le ${formatLong(date)} de ${debut} à ${fin}. Tu peux continuer à la remplir dans « Journée ».`);
  };

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Séances & fiches vierges</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          À compléter <b>à la main</b> — pas de génération automatique.
        </p>
      </div>

      {/* Fiche de prép vierge (PDF / impression) */}
      <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-3 dark:border-slate-700 dark:bg-slate-900/40">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">📄 Fiche de prép vierge</span>
        <span className="text-[12px] text-slate-500 dark:text-slate-400">(colonnes préremplies, à remplir à la main)</span>
        <button onClick={() => void downloadPrepVierge()} className="btn-primary ml-auto py-1.5 text-sm">⬇️ Télécharger en PDF</button>
        <button onClick={() => printArea("print-prep-vierge")} className="btn-outline py-1.5 text-sm">
          <Printer className="mr-1 inline h-4 w-4" /> Imprimer
        </button>
      </div>

      {/* Nouvelle séance vierge = fiche de prép éditable comme dans le calendrier */}
      <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="flex flex-wrap items-end gap-3">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Discipline
            <select className="input mt-1" value={disciplineId} onChange={(e) => setDisciplineId(e.target.value)}>
              {teaching.map((d) => <option key={d.id} value={d.id}>{d.label}</option>)}
            </select>
          </label>
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Niveau
            <select className="input mt-1" value={niveau} onChange={(e) => setNiveau(e.target.value as typeof niveau)}>
              <option value="classe">Classe entière</option>
              <option value="CE1">CE1</option>
              <option value="CE2">CE2</option>
            </select>
          </label>
          {!draft && (
            <button onClick={nouvelle} className="btn-primary">➕ Nouvelle séance vierge (fiche de prép)</button>
          )}
        </div>

        {draft && (
          <div className="mt-4">
            <p className="mb-2 text-[12px] text-slate-500 dark:text-slate-400">
              La <b>même fiche de prép que dans le calendrier</b> : remplis titre, objectif, déroulement… puis imprime-la ou insère-la dans une journée.
            </p>
            <ActivityEditor settings={settings} activity={draft} onChange={setDraft} disciplineId={disciplineId} />

            <div className="mt-3 flex flex-wrap items-center gap-2 rounded-xl border border-ink-200 bg-ink-50/40 p-3 dark:border-ink-500/40 dark:bg-ink-500/10">
              <span className="text-sm font-semibold text-ink-700 dark:text-ink-200">Insérer dans une journée :</span>
              <input type="date" className="input max-w-[10rem]" value={date} onChange={(e) => setDate(e.target.value)} />
              <input type="time" className="input max-w-[7rem]" value={debut} onChange={(e) => setDebut(e.target.value)} />
              <span className="text-slate-400">→</span>
              <input type="time" className="input max-w-[7rem]" value={fin} onChange={(e) => setFin(e.target.value)} />
              <button onClick={insererSeance} className="btn-primary py-1.5 text-sm">📅 Insérer</button>
              <button onClick={() => setDraft(null)} className="btn-ghost py-1.5 text-sm">Fermer</button>
              {flash && <span className="text-[12px] font-medium text-emerald-600 dark:text-emerald-400">✓ {flash}</span>}
            </div>
          </div>
        )}
      </div>

      {/* Zone d'impression / capture (hors écran) */}
      <div id="print-prep-vierge" className="print-area">
        <FichePrepVierge settings={settings} />
      </div>
    </div>
  );
}
