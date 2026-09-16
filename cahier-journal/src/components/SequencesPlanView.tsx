/**
 * Séquences — progression par matière, ÉDITABLE
 * ---------------------------------------------
 * Lit les séquences de la Bibliothèque (store), regroupées par matière. On peut
 * renommer une séquence, ajouter/retirer/renommer ses séances et indiquer le
 * jour, directement ici. Le détail d'une séance se prépare dans la Bibliothèque
 * / le cahier journal. Amorcé depuis la programmation (voir store).
 */
import { useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Activity, Sequence } from "../lib/types";
import { emptyActivity, emptySequence } from "../lib/factory";
import { disciplineColor } from "../lib/lookup";
import { AutoTextarea, Plus, Trash } from "./ui";

export function SequencesPlanView() {
  const { settings, sequences, saveSequence, removeSequence } = useStore();
  const teaching = useMemo(
    () => settings.disciplines.filter((d) => !["recreation", "cantine", "autre"].includes(d.id)),
    [settings.disciplines],
  );
  const [sel, setSel] = useState<string>(teaching[0]?.id ?? "francais");

  const bySel = sequences
    .filter((s) => s.disciplineId === sel)
    .sort((a, b) => a.title.localeCompare(b.title));

  const addSequence = () => {
    const seq = emptySequence(sel);
    seq.title = "Nouvelle séquence";
    saveSequence(seq);
  };

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Séquences</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            La progression par matière : renomme, ajoute ou retire des séances, indique le jour.
            Le détail se prépare ensuite dans la Bibliothèque / le cahier journal.
          </p>
        </div>
        <button onClick={addSequence} className="btn-primary py-1.5 text-sm">
          <Plus className="mr-1 inline h-4 w-4" /> Nouvelle séquence
        </button>
      </div>

      {/* Sélecteur matière */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {teaching.map((d) => {
          const c = disciplineColor(settings, d.id);
          const n = sequences.filter((s) => s.disciplineId === d.id).length;
          const on = d.id === sel;
          return (
            <button
              key={d.id}
              onClick={() => setSel(d.id)}
              className={`toggle-chip ${on ? "toggle-chip-on" : "toggle-chip-off"}`}
            >
              <span className={`mr-1 inline-block h-2 w-2 rounded-full ${c.dot}`} />
              {d.label}
              {n > 0 && <span className="ml-1 opacity-60">· {n}</span>}
            </button>
          );
        })}
      </div>

      {bySel.length === 0 ? (
        <p className="text-sm text-slate-400">
          Aucune séquence pour cette matière. Clique sur « Nouvelle séquence » pour en créer une.
        </p>
      ) : (
        <div className="space-y-3">
          {bySel.map((seq) => (
            <SequenceEditor
              key={seq.id}
              seq={seq}
              disciplineId={sel}
              onSave={saveSequence}
              onRemove={() => {
                if (window.confirm("Supprimer cette séquence ?")) void removeSequence(seq.id);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}

type Row = { activity: Activity; titre: string; quand: string };

function SequenceEditor({
  seq,
  disciplineId,
  onSave,
  onRemove,
}: {
  seq: Sequence;
  disciplineId: string;
  onSave: (s: Sequence) => void;
  onRemove: () => void;
}) {
  const { settings } = useStore();
  const c = disciplineColor(settings, disciplineId);
  const [open, setOpen] = useState(true);
  // État local pour ne pas perdre le focus pendant la frappe.
  const [title, setTitle] = useState(seq.title);
  const [objectif, setObjectif] = useState(seq.objectif);
  const [rows, setRows] = useState<Row[]>(
    seq.seances.map((a) => ({ activity: a, titre: a.title, quand: a.progRef ?? "" })),
  );

  const persist = (t: string, o: string, rs: Row[]) => {
    const seances: Activity[] = rs.map((r, i) => ({
      ...r.activity,
      title: r.titre,
      progRef: r.quand,
      progSeance: String(i + 1),
    }));
    onSave({ ...seq, title: t, objectif: o, seances });
  };

  const setT = (v: string) => { setTitle(v); persist(v, objectif, rows); };
  const setO = (v: string) => { setObjectif(v); persist(title, v, rows); };
  const setRows2 = (rs: Row[]) => { setRows(rs); persist(title, objectif, rs); };
  const editRow = (i: number, patch: Partial<Row>) =>
    setRows2(rows.map((r, j) => (j === i ? { ...r, ...patch } : r)));
  const addRow = () =>
    setRows2([...rows, { activity: emptyActivity(["classe"]), titre: "", quand: "" }]);
  const removeRow = (i: number) => setRows2(rows.filter((_, j) => j !== i));
  const move = (i: number, dir: -1 | 1) => {
    const j = i + dir;
    if (j < 0 || j >= rows.length) return;
    const rs = rows.slice();
    [rs[i], rs[j]] = [rs[j], rs[i]];
    setRows2(rs);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white/70 dark:border-slate-800 dark:bg-slate-900/40">
      <div className="flex items-center gap-2 px-3 py-2">
        <button onClick={() => setOpen((v) => !v)} className={`shrink-0 text-slate-400 transition-transform ${open ? "rotate-90" : ""}`} title={open ? "Replier" : "Déplier"}>›</button>
        <span className={`h-2.5 w-2.5 shrink-0 rounded-full ${c.dot}`} />
        <input
          className="input flex-1 border-transparent bg-transparent font-semibold focus:border-slate-300"
          value={title}
          onChange={(e) => setT(e.target.value)}
          placeholder="Titre de la séquence"
        />
        <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-500 dark:bg-slate-800 dark:text-slate-300">
          {rows.length} séance{rows.length > 1 ? "s" : ""}
        </span>
        <button onClick={onRemove} className="shrink-0 text-slate-300 hover:text-rose-500" title="Supprimer la séquence">
          <Trash className="h-4 w-4" />
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-100 px-3 py-2.5 dark:border-slate-800">
          <AutoTextarea
            className="mb-2 min-h-[38px] text-[12.5px]"
            value={objectif}
            onChange={(e) => setO(e.target.value)}
            placeholder="Objectif / note de la séquence (facultatif)"
          />
          <ol className="space-y-1.5">
            {rows.map((r, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <span className="w-5 shrink-0 text-right text-[12px] font-bold text-slate-400">{i + 1}.</span>
                <input
                  className="input flex-1 py-1 text-[13px]"
                  value={r.titre}
                  onChange={(e) => editRow(i, { titre: e.target.value })}
                  placeholder="Titre de la séance"
                />
                <input
                  className="input w-24 shrink-0 py-1 text-[12px]"
                  value={r.quand}
                  onChange={(e) => editRow(i, { quand: e.target.value })}
                  placeholder="jour…"
                  title="Jour / date (facultatif)"
                />
                <button onClick={() => move(i, -1)} className="shrink-0 px-1 text-slate-300 hover:text-slate-600" title="Monter">▲</button>
                <button onClick={() => move(i, 1)} className="shrink-0 px-1 text-slate-300 hover:text-slate-600" title="Descendre">▼</button>
                <button onClick={() => removeRow(i)} className="shrink-0 text-slate-300 hover:text-rose-500" title="Supprimer la séance">
                  <Trash className="h-3.5 w-3.5" />
                </button>
              </li>
            ))}
          </ol>
          <button onClick={addRow} className="btn-outline mt-2 w-full py-1 text-xs">
            <Plus className="mr-1 inline h-3.5 w-3.5" /> Ajouter une séance
          </button>
        </div>
      )}
    </div>
  );
}
