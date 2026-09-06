/**
 * Info élèves — suivi individuel (profil + observations datées)
 * ------------------------------------------------------------
 * Pour chaque élève : une synthèse libre (réutilisable pour le LSU) et des
 * observations datées ajoutées à chaque correction (points +, points à
 * travailler, pistes de remédiation). Dictée vocale possible (micro du clavier).
 *
 * DONNÉE SENSIBLE (mineurs) : 100 % locale, jamais synchronisée ni publiée.
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Student, StudentNote, StudentNoteEntry } from "../lib/types";
import { todayISO, uid, formatShort } from "../lib/dates";
import { AutoTextarea, Field, Trash, Copy } from "./ui";

export function InfoElevesView() {
  const { settings, studentNotes, saveStudentNote } = useStore();
  const roster = useMemo(
    () => (settings.classe.roster ?? []).slice().sort((a, b) => a.prenom.localeCompare(b.prenom)),
    [settings.classe.roster],
  );
  const teaching = useMemo(
    () => settings.disciplines.filter((d) => !["recreation", "cantine", "autre"].includes(d.id)),
    [settings.disciplines],
  );
  const disciplineLabel = (id?: string) => teaching.find((d) => d.id === id)?.label ?? "";

  const [selectedId, setSelectedId] = useState<string>(roster[0]?.id ?? "");
  const [query, setQuery] = useState("");

  const noteFor = (studentId: string): StudentNote =>
    studentNotes.find((n) => n.studentId === studentId) ?? {
      studentId,
      synthese: "",
      entries: [],
      updatedAt: 0,
    };

  const filtered = roster.filter((s) =>
    `${s.prenom} ${s.nom}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const selected = roster.find((s) => s.id === selectedId) ?? null;

  if (roster.length === 0) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40">
        <div className="mb-2 text-3xl">🧑‍🎓</div>
        <p className="font-semibold text-slate-700 dark:text-slate-200">Aucun élève dans la liste</p>
        <p className="mt-1">
          Ajoute d'abord tes élèves dans <b>Paramètres → Élèves</b> : ils apparaîtront
          ici avec une zone de suivi chacun.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-3">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Info élèves</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Le profil de chaque élève, enrichi à chaque correction — prêt à copier dans le LSU.
          <span className="ml-1 rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
            🔒 100 % local
          </span>
        </p>
      </div>

      <div className="lg:flex lg:gap-5">
        {/* Liste des élèves */}
        <aside className="mb-4 lg:mb-0 lg:w-60 lg:shrink-0">
          <input
            className="input mb-2"
            placeholder="Rechercher un élève…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <div className="max-h-[70vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white/60 p-1.5 dark:border-slate-800 dark:bg-slate-900/40">
            {filtered.map((s) => {
              const n = noteFor(s.id);
              const count = n.entries.length;
              const on = s.id === selectedId;
              return (
                <button
                  key={s.id}
                  onClick={() => setSelectedId(s.id)}
                  className={`flex w-full items-center gap-2 rounded-xl px-2.5 py-2 text-left text-sm ${
                    on
                      ? "bg-ink-50 text-ink-700 dark:bg-ink-500/15 dark:text-ink-200"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
                  }`}
                >
                  <span
                    className={`h-2 w-2 shrink-0 rounded-full ${s.niveau === "CE2" ? "bg-violet-500" : "bg-sky-500"}`}
                    title={s.niveau}
                  />
                  <span className="min-w-0 flex-1 truncate">
                    {s.prenom} <span className="text-slate-400">{s.nom}</span>
                  </span>
                  {count > 0 && (
                    <span className="shrink-0 rounded-full bg-slate-200 px-1.5 text-[10px] font-semibold text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </aside>

        {/* Détail de l'élève */}
        <div className="min-w-0 flex-1">
          {selected && (
            <StudentPanel
              key={selected.id}
              student={selected}
              note={noteFor(selected.id)}
              disciplines={teaching}
              disciplineLabel={disciplineLabel}
              onSave={saveStudentNote}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function StudentPanel({
  student,
  note,
  disciplines,
  disciplineLabel,
  onSave,
}: {
  student: Student;
  note: StudentNote;
  disciplines: { id: string; label: string }[];
  disciplineLabel: (id?: string) => string;
  onSave: (n: StudentNote) => Promise<void>;
}) {
  const [date, setDate] = useState(todayISO());
  const [disc, setDisc] = useState("");
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const insert = (marker: string) => {
    setText((t) => (t ? `${t}\n${marker} ` : `${marker} `));
  };

  const addEntry = () => {
    if (!text.trim()) return;
    const entry: StudentNoteEntry = {
      id: uid(),
      date,
      discipline: disc || undefined,
      text: text.trim(),
      createdAt: Date.now(),
    };
    void onSave({ ...note, entries: [...note.entries, entry], updatedAt: Date.now() });
    setText("");
    setDisc("");
  };

  const removeEntry = (id: string) =>
    void onSave({ ...note, entries: note.entries.filter((e) => e.id !== id), updatedAt: Date.now() });

  const setSynthese = (v: string) =>
    void onSave({ ...note, synthese: v, updatedAt: Date.now() });

  const entriesSorted = note.entries
    .slice()
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : b.createdAt - a.createdAt));

  const copyForLSU = async () => {
    const lines: string[] = [`${student.prenom} ${student.nom} — ${student.niveau}`];
    if (note.synthese.trim()) lines.push("", "SYNTHÈSE :", note.synthese.trim());
    if (entriesSorted.length) {
      lines.push("", "OBSERVATIONS :");
      for (const e of entriesSorted) {
        const d = disciplineLabel(e.discipline);
        lines.push(`• ${formatShort(e.date)}${d ? ` — ${d}` : ""} : ${e.text}`);
      }
    }
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard indisponible : on ignore */
    }
  };

  return (
    <div className="space-y-4">
      {/* En-tête élève */}
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-slate-200 bg-white/70 p-3 dark:border-slate-800 dark:bg-slate-900/40">
        <span className={`h-3 w-3 rounded-full ${student.niveau === "CE2" ? "bg-violet-500" : "bg-sky-500"}`} />
        <span className="text-lg font-bold text-slate-800 dark:text-slate-100">
          {student.prenom} {student.nom}
        </span>
        <span className="rounded-full bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          {student.niveau}
        </span>
        {student.besoins && (
          <span className="rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 dark:bg-amber-500/10 dark:text-amber-300" title="Besoins particuliers (local)">
            ⚠ {student.besoins}
          </span>
        )}
        <button onClick={copyForLSU} className="btn-outline ml-auto py-1 text-xs">
          <Copy className="mr-1 inline h-3.5 w-3.5" />
          {copied ? "Copié !" : "Copier pour le LSU"}
        </button>
      </div>

      {/* Synthèse / profil */}
      <Field label="Synthèse / profil (pour le LSU)" hint="Bilan global de l'élève, réécrit au fil de l'année.">
        <AutoTextarea
          className="min-h-[90px]"
          value={note.synthese}
          onChange={(e) => setSynthese(e.target.value)}
          placeholder="Ex : Élève sérieux, à l'aise en lecture ; à consolider en numération. Progrès nets en autonomie…"
        />
      </Field>

      {/* Ajouter une observation */}
      <div className="rounded-2xl border border-dashed border-ink-300 bg-ink-50/40 p-3 dark:border-ink-500/40 dark:bg-ink-500/10">
        <div className="mb-2 text-sm font-semibold text-ink-700 dark:text-ink-200">➕ Nouvelle observation</div>
        <div className="mb-2 flex flex-wrap gap-2">
          <input
            type="date"
            className="input max-w-[10rem]"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <select className="input max-w-[12rem]" value={disc} onChange={(e) => setDisc(e.target.value)}>
            <option value="">— Matière (facultatif) —</option>
            {disciplines.map((d) => (
              <option key={d.id} value={d.id}>{d.label}</option>
            ))}
          </select>
        </div>
        <div className="mb-1.5 flex flex-wrap gap-1.5">
          <button onClick={() => insert("➕ Réussite :")} className="btn-outline py-1 text-xs">➕ Réussite</button>
          <button onClick={() => insert("➖ À travailler :")} className="btn-outline py-1 text-xs">➖ À travailler</button>
          <button onClick={() => insert("→ Piste :")} className="btn-outline py-1 text-xs">→ Piste / remédiation</button>
        </div>
        <AutoTextarea
          className="min-h-[70px]"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Dicte ou écris ton observation… (ex : ➕ Réussite : fleur du nombre bien réussie. ➖ À travailler : soustraction posée. → Piste : matériel base 10.)"
        />
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[11px] text-slate-400">💡 Astuce : utilise le micro du clavier pour dicter.</span>
          <button onClick={addEntry} disabled={!text.trim()} className="btn-primary py-1.5 text-sm disabled:opacity-40">
            Ajouter l'observation
          </button>
        </div>
      </div>

      {/* Journal des observations */}
      <div>
        <div className="mb-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Observations ({entriesSorted.length})
        </div>
        {entriesSorted.length === 0 ? (
          <p className="text-sm text-slate-400">Aucune observation pour l'instant.</p>
        ) : (
          <div className="space-y-2">
            {entriesSorted.map((e) => (
              <div key={e.id} className="rounded-xl border border-slate-200 bg-white/70 p-2.5 dark:border-slate-800 dark:bg-slate-900/40">
                <div className="mb-1 flex items-center gap-2 text-xs">
                  <span className="font-semibold text-slate-600 dark:text-slate-300">{formatShort(e.date)}</span>
                  {e.discipline && (
                    <span className="rounded-full bg-ink-50 px-2 py-0.5 font-medium text-ink-700 dark:bg-ink-500/15 dark:text-ink-200">
                      {disciplineLabel(e.discipline)}
                    </span>
                  )}
                  <button
                    onClick={() => removeEntry(e.id)}
                    className="ml-auto text-slate-300 hover:text-rose-500"
                    title="Supprimer"
                  >
                    <Trash className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="whitespace-pre-wrap text-sm text-slate-700 dark:text-slate-200">{e.text}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
