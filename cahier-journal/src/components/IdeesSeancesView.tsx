/**
 * Séances & fiches vierges (ex-« Idées séances »)
 * -----------------------------------------------
 * Plus de génération automatique : uniquement des supports VIERGES à compléter
 * à la main par l'enseignant.
 *  • Fiche de préparation vierge, téléchargeable en PDF / imprimable.
 *  • Créer une séance vierge (juste le cadre : titre, niveau, discipline) et
 *    l'INSÉRER dans une journée à une heure précise, pour la remplir ensuite.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Day } from "../lib/types";
import { emptyActivity } from "../lib/factory";
import { emptyDay } from "../lib/factory";
import { uid, todayISO, formatLong } from "../lib/dates";
import { printArea } from "../lib/print";
import { downloadElementPdf, safeFileName } from "../lib/pdf";
import { FichePrepVierge } from "./FichePrepA4";
import { Printer } from "./ui";

export function IdeesSeancesView() {
  const { settings, daysMap, saveDay } = useStore();
  const teaching = useMemo(
    () => settings.disciplines.filter((d) => !["recreation", "cantine"].includes(d.id)),
    [settings.disciplines],
  );

  const [titre, setTitre] = useState("");
  const [disciplineId, setDisciplineId] = useState(teaching[0]?.id ?? "francais");
  const [niveau, setNiveau] = useState<"classe" | "CE1" | "CE2">("classe");
  const [date, setDate] = useState(todayISO());
  const [debut, setDebut] = useState("13:45");
  const [fin, setFin] = useState("14:30");
  const [flash, setFlash] = useState("");

  const flashMsg = (m: string) => { setFlash(m); setTimeout(() => setFlash(""), 3500); };

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

  const insererSeance = () => {
    const a = emptyActivity([niveau]);
    a.title = titre.trim() || "Séance à compléter";
    const existing: Day | undefined = daysMap[date];
    const day: Day = existing ?? emptyDay(date, settings.classe.effectif ?? null);
    // On insère le créneau au bon endroit (trié par heure de début).
    const slot = { id: uid(), start: debut, end: fin, disciplineId, activities: [{ ...a, id: uid() }] };
    const slots = [...day.slots, slot].sort((x, y) => x.start.localeCompare(y.start));
    saveDay({ ...day, slots });
    flashMsg(`Séance vierge insérée le ${formatLong(date)} de ${debut} à ${fin}. Va dans « Journée » pour la remplir.`);
    setTitre("");
  };

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Séances & fiches vierges</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Des supports <b>vierges à compléter à la main</b> — pas de génération automatique.
        </p>
      </div>

      {/* Fiche de prép vierge (PDF / impression) */}
      <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-3 dark:border-slate-700 dark:bg-slate-900/40">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">📄 Fiche de prép vierge</span>
        <span className="text-[12px] text-slate-500 dark:text-slate-400">(mon modèle, colonnes préremplies, à remplir à la main)</span>
        <button onClick={() => void downloadPrepVierge()} className="btn-primary ml-auto py-1.5 text-sm">⬇️ Télécharger en PDF</button>
        <button onClick={() => printArea("print-prep-vierge")} className="btn-outline py-1.5 text-sm">
          <Printer className="mr-1 inline h-4 w-4" /> Imprimer
        </button>
      </div>

      {/* Créer une séance vierge dans une journée */}
      <div className="rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-slate-800 dark:bg-slate-900/40">
        <h2 className="mb-1 text-sm font-bold text-slate-800 dark:text-slate-100">➕ Ajouter une séance vierge à une journée</h2>
        <p className="mb-3 text-[12px] text-slate-500 dark:text-slate-400">
          Crée un créneau vide (juste le cadre) à l'heure voulue. Tu le remplis ensuite à la main dans « Journée ».
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Titre (facultatif)
            <input className="input mt-1" value={titre} onChange={(e) => setTitre(e.target.value)} placeholder="ex : Histoire — Mesurer le temps" />
          </label>
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
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Jour
            <input type="date" className="input mt-1" value={date} onChange={(e) => setDate(e.target.value)} />
          </label>
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Début
            <input type="time" className="input mt-1" value={debut} onChange={(e) => setDebut(e.target.value)} />
          </label>
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Fin
            <input type="time" className="input mt-1" value={fin} onChange={(e) => setFin(e.target.value)} />
          </label>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button onClick={insererSeance} className="btn-primary">📅 Insérer dans la journée</button>
          {flash && <span className="text-[12px] font-medium text-emerald-600 dark:text-emerald-400">✓ {flash}</span>}
        </div>
      </div>

      {/* Zone d'impression / capture (hors écran) */}
      <div id="print-prep-vierge" className="print-area">
        <FichePrepVierge settings={settings} />
      </div>
    </div>
  );
}
