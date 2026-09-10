/**
 * Idées séances — générateur de fiches de séance
 * ----------------------------------------------
 * Choisir discipline + niveau + période + notion → l'appli assemble une fiche
 * de séance COMPLÈTE et conforme (objectifs, compétences, déroulement rédigé,
 * différenciation CE1/CE2, erreurs & remédiation, correction, matériel), à
 * relire, personnaliser, puis ajouter à un jour, ranger en Bibliothèque ou
 * imprimer. Construction locale déterministe (voir lib/generateSeance).
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Activity, Day, Sequence } from "../lib/types";
import { genererSeance } from "../lib/generateSeance";
import { emptyDay } from "../lib/factory";
import { uid, todayISO, formatLong } from "../lib/dates";
import { printArea } from "../lib/print";
import { downloadElementPdf, safeFileName } from "../lib/pdf";
import { ActivityEditor } from "./ActivityEditor";
import { FichePrepA4, FichePrepVierge } from "./FichePrepA4";
import { PERIODES } from "../lib/programmations";
import { PROG_ANGLAIS, PROG_QLM, PROG_GRAPHEMO } from "../lib/progDisciplines";
import { Printer } from "./ui";

export function IdeesSeancesView() {
  const { settings, daysMap, saveDay, saveSequence } = useStore();
  const teaching = useMemo(
    () => settings.disciplines.filter((d) => !["recreation", "cantine", "autre"].includes(d.id)),
    [settings.disciplines],
  );

  const [disciplineId, setDisciplineId] = useState(teaching[0]?.id ?? "francais");
  const [niveau, setNiveau] = useState<"classe" | "CE1" | "CE2">("classe");
  const [periode, setPeriode] = useState("P1");
  const [notion, setNotion] = useState("");
  const [domaine, setDomaine] = useState("");
  const [seance, setSeance] = useState("1");

  const [draft, setDraft] = useState<Activity | null>(null);
  const [flash, setFlash] = useState("");
  const [addDate, setAddDate] = useState(todayISO());

  const discLabel = teaching.find((d) => d.id === disciplineId)?.label ?? disciplineId;

  // Suggestions de notions selon la discipline (issues des programmations intégrées).
  const suggestions = useMemo(() => {
    if (disciplineId === "anglais")
      return PROG_ANGLAIS.filter((s) => s.periode === periode).flatMap((s) => [s.titre, ...s.seances]);
    if (disciplineId === "qlm")
      return PROG_QLM.flatMap((sub) => sub.sequences.flatMap((s) => [s.titre, ...s.seances]));
    if (disciplineId === "francais")
      return PROG_GRAPHEMO.find((p) => p.periode === periode)?.notions ?? [];
    return [];
  }, [disciplineId, periode]);

  const flashMsg = (m: string) => {
    setFlash(m);
    setTimeout(() => setFlash(""), 2500);
  };

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

  const generer = () => {
    setDraft(
      genererSeance({
        disciplineId,
        disciplineLabel: discLabel,
        niveau,
        periode,
        notion,
        domaine: domaine || undefined,
        seance,
      }),
    );
    setFlash("");
  };

  const ajouterAuJour = () => {
    if (!draft) return;
    const existing: Day | undefined = daysMap[addDate];
    const day: Day = existing ?? emptyDay(addDate, settings.classe.effectif ?? null);
    const last = day.slots[day.slots.length - 1];
    const start = last ? last.end : "08:30";
    const slot = {
      id: uid(),
      start,
      end: start,
      disciplineId,
      activities: [{ ...draft, id: uid() }],
    };
    saveDay({ ...day, slots: [...day.slots, slot] });
    flashMsg(`Séance ajoutée au ${formatLong(addDate)} (pense à régler l'horaire de fin).`);
  };

  const enregistrerBibliotheque = () => {
    if (!draft) return;
    const seq: Sequence = {
      id: uid(),
      title: draft.title || `${discLabel} — séance`,
      disciplineId,
      niveaux: draft.niveaux,
      objectif: draft.objectif,
      seances: [{ ...draft, id: uid() }],
      updatedAt: Date.now(),
    };
    saveSequence(seq);
    flashMsg("Séance enregistrée dans la Bibliothèque.");
  };

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Idées séances</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Génère une fiche de séance conforme (objectifs, compétences, déroulement,
          différenciation, <b>erreurs &amp; remédiation</b>, correction) — à relire et personnaliser.
        </p>
      </div>

      {/* Fiche de prép vierge à imprimer / télécharger */}
      <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-dashed border-slate-300 bg-white/60 p-3 dark:border-slate-700 dark:bg-slate-900/40">
        <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">📄 Fiche de prép vierge</span>
        <span className="text-[12px] text-slate-500 dark:text-slate-400">(mon modèle, à remplir à la main)</span>
        <button
          onClick={() => void downloadPrepVierge()}
          className="btn-primary ml-auto py-1.5 text-sm"
        >
          ⬇️ Télécharger en PDF
        </button>
        <button onClick={() => printArea("print-prep-vierge")} className="btn-outline py-1.5 text-sm">
          <Printer className="mr-1 inline h-4 w-4" /> Imprimer
        </button>
      </div>
      {/* Zone d'impression / capture (hors écran) */}
      <div id="print-prep-vierge" className="print-area">
        <FichePrepVierge settings={settings} />
      </div>

      {/* Formulaire */}
      <div className="mb-4 rounded-2xl border border-slate-200 bg-white/70 p-3 dark:border-slate-800 dark:bg-slate-900/40">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
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
            Période
            <select className="input mt-1" value={periode} onChange={(e) => setPeriode(e.target.value)}>
              {PERIODES.map((p) => <option key={p} value={p}>{p}</option>)}
            </select>
          </label>
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            N° de séance
            <input className="input mt-1" value={seance} onChange={(e) => setSeance(e.target.value)} />
          </label>
        </div>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Notion / objet d'étude
            <input
              className="input mt-1"
              list="notion-suggestions"
              value={notion}
              onChange={(e) => setNotion(e.target.value)}
              placeholder="ex : Comparer les nombres jusqu'à 1 000"
            />
            <datalist id="notion-suggestions">
              {suggestions.map((s, i) => <option key={i} value={s} />)}
            </datalist>
          </label>
          <label className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            Domaine (facultatif)
            <input className="input mt-1" value={domaine} onChange={(e) => setDomaine(e.target.value)} placeholder="ex : Nombres et calcul" />
          </label>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button onClick={generer} disabled={!notion.trim()} className="btn-primary disabled:opacity-40">
            ✨ Générer la séance
          </button>
          <span className="text-[11px] text-slate-400">
            Squelette conforme aux programmes — à relire avant la classe. Pour une séance sur mesure très riche, demande-moi.
          </span>
        </div>
      </div>

      {flash && (
        <div className="mb-3 rounded-xl border border-emerald-300 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-500/40 dark:bg-emerald-500/10 dark:text-emerald-300">
          ✓ {flash}
        </div>
      )}

      {/* Résultat éditable */}
      {draft && (
        <div>
          <div className="mb-3 flex flex-wrap items-center gap-2 rounded-2xl border border-ink-200 bg-ink-50/40 p-3 dark:border-ink-500/40 dark:bg-ink-500/10">
            <span className="text-sm font-semibold text-ink-700 dark:text-ink-200">Que faire de cette séance ?</span>
            <input type="date" className="input max-w-[10rem]" value={addDate} onChange={(e) => setAddDate(e.target.value)} />
            <button onClick={ajouterAuJour} className="btn-primary py-1.5 text-sm">📅 Ajouter à ce jour</button>
            <button onClick={enregistrerBibliotheque} className="btn-outline py-1.5 text-sm">📔 Enregistrer en Bibliothèque</button>
            <button onClick={() => printArea("print-idee")} className="btn-outline py-1.5 text-sm">
              <Printer className="mr-1 inline h-4 w-4" /> Imprimer la fiche
            </button>
          </div>

          <ActivityEditor
            settings={settings}
            activity={draft}
            onChange={setDraft}
            disciplineId={disciplineId}
          />

          {/* Zone d'impression */}
          <div id="print-idee" className="print-area">
            <FichePrepA4 activity={draft} settings={settings} disciplineId={disciplineId} />
          </div>
        </div>
      )}
    </div>
  );
}
