/**
 * Éditeur d'une séance (activité)
 * -------------------------------
 * Toutes les rubriques pédagogiques d'une séance. Les sections détaillées
 * sont repliables pour garder une saisie rapide : seul l'essentiel est
 * visible par défaut.
 */
import type { Activity, Settings, Step } from "../lib/types";
import {
  ORGANISATION_OPTIONS,
  ROLE_OPTIONS,
  DEROULEMENT_SUGGESTIONS,
} from "../lib/defaults";
import { niveauBadgeClass } from "../lib/lookup";
import { emptyStep } from "../lib/factory";
import { AutoTextarea, ChipGroup, Disclosure, Field, Plus, Trash, Printer } from "./ui";
import { Attachments } from "./Attachments";
import { FichePrepA4 } from "./FichePrepA4";
import { PrintPortal } from "./PrintPortal";
import { printArea } from "../lib/print";

export function ActivityEditor({
  settings,
  activity,
  onChange,
  onRemove,
  showRemove,
}: {
  settings: Settings;
  activity: Activity;
  onChange: (a: Activity) => void;
  onRemove?: () => void;
  showRemove?: boolean;
}) {
  const set = <K extends keyof Activity>(key: K, value: Activity[K]) =>
    onChange({ ...activity, [key]: value });

  const toggleArr = (key: "organisation" | "roleEnseignant", value: string) => {
    const cur = activity[key];
    set(
      key,
      cur.includes(value) ? cur.filter((x) => x !== value) : [...cur, value],
    );
  };

  const toggleNiveau = (id: string) => {
    const cur = activity.niveaux;
    set(
      "niveaux",
      cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id],
    );
  };

  // --- Déroulement (étapes) ---
  const addStep = (label = "") =>
    set("deroulement", [...activity.deroulement, emptyStep(label)]);
  const updateStep = (id: string, patch: Partial<Step>) =>
    set(
      "deroulement",
      activity.deroulement.map((s) => (s.id === id ? { ...s, ...patch } : s)),
    );
  const removeStep = (id: string) =>
    set(
      "deroulement",
      activity.deroulement.filter((s) => s.id !== id),
    );

  return (
    <div className="space-y-3">
      {/* Niveaux + intitulé */}
      <div className="flex flex-wrap items-center gap-1.5">
        {settings.niveaux.map((n) => {
          const on = activity.niveaux.includes(n.id);
          return (
            <button
              key={n.id}
              type="button"
              onClick={() => toggleNiveau(n.id)}
              className={`niveau-badge transition ${
                on
                  ? niveauBadgeClass(n.id)
                  : "bg-slate-100 text-slate-400 dark:bg-slate-800 dark:text-slate-500"
              }`}
            >
              {n.label}
            </button>
          );
        })}
        {showRemove && onRemove && (
          <button
            type="button"
            onClick={onRemove}
            className="ml-auto text-slate-400 hover:text-rose-500"
            title="Supprimer cette activité"
          >
            <Trash />
          </button>
        )}
      </div>

      <input
        className="input font-medium"
        placeholder="Intitulé — ex : Lecture, comprendre un texte documentaire"
        value={activity.title}
        onChange={(e) => set("title", e.target.value)}
      />

      <Disclosure title="Objectif & compétence">
        <div className="space-y-3">
          <Field label="Objectif pédagogique">
            <AutoTextarea
              value={activity.objectif}
              onChange={(e) => set("objectif", e.target.value)}
              placeholder="Ce que les élèves doivent apprendre / savoir-faire"
            />
          </Field>
          <Field label="Compétence visée">
            <AutoTextarea
              value={activity.competence}
              onChange={(e) => set("competence", e.target.value)}
            />
          </Field>
          <Field label="Référence aux programmes" hint="Facultatif">
            <input
              className="input"
              value={activity.competenceRef}
              onChange={(e) => set("competenceRef", e.target.value)}
              placeholder="ex : BO — Français, cycle 2, lecture"
            />
          </Field>
        </div>
      </Disclosure>

      <Disclosure title="Programmation / progression">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <ShortField label="Période" value={activity.progPeriode} onChange={(v) => set("progPeriode", v)} placeholder="P1" />
          <ShortField label="Domaine" value={activity.progDomaine} onChange={(v) => set("progDomaine", v)} placeholder="Grammaire" />
          <ShortField label="Séquence" value={activity.progSequence} onChange={(v) => set("progSequence", v)} placeholder="Le groupe nominal" />
          <ShortField label="Séance n°" value={activity.progSeance} onChange={(v) => set("progSeance", v)} placeholder="2" />
          <ShortField label="Réf. progression" value={activity.progRef} onChange={(v) => set("progRef", v)} placeholder="P1-FR-GN-2" />
        </div>
      </Disclosure>

      <Disclosure title="Organisation & rôle de l'enseignant">
        <div className="space-y-3">
          <Field label="Organisation">
            <ChipGroup
              options={ORGANISATION_OPTIONS}
              selected={activity.organisation}
              onToggle={(v) => toggleArr("organisation", v)}
            />
          </Field>
          <Field label="Rôle de l'enseignant">
            <ChipGroup
              options={ROLE_OPTIONS}
              selected={activity.roleEnseignant}
              onToggle={(v) => toggleArr("roleEnseignant", v)}
            />
          </Field>
        </div>
      </Disclosure>

      {/* Déroulement — visible par défaut car central */}
      <div>
        <div className="mb-1 flex items-center justify-between">
          <span className="label mb-0">Déroulement</span>
        </div>
        <div className="space-y-2">
          {activity.deroulement.map((step, i) => (
            <div key={step.id} className="flex items-start gap-2">
              <span className="mt-2 w-5 shrink-0 text-right text-xs font-semibold text-slate-400">
                {i + 1}.
              </span>
              <div className="flex-1 space-y-1">
                <input
                  className="input py-1.5"
                  value={step.label}
                  onChange={(e) => updateStep(step.id, { label: e.target.value })}
                  placeholder="Étape"
                />
                <AutoTextarea
                  className="text-[13px]"
                  value={step.note ?? ""}
                  onChange={(e) => updateStep(step.id, { note: e.target.value })}
                  placeholder="Précisions (facultatif)"
                />
              </div>
              <button
                type="button"
                onClick={() => removeStep(step.id)}
                className="mt-1.5 text-slate-400 hover:text-rose-500"
                title="Supprimer l'étape"
              >
                <Trash />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-2 flex flex-wrap items-center gap-1.5">
          <button type="button" onClick={() => addStep()} className="btn-outline py-1 text-xs">
            <Plus className="h-3.5 w-3.5" /> Étape
          </button>
          <span className="text-xs text-slate-400">Modèles :</span>
          {DEROULEMENT_SUGGESTIONS.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => addStep(s)}
              className="toggle-chip toggle-chip-off"
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <Field label="Matériel / supports">
        <AutoTextarea
          value={activity.materiel}
          onChange={(e) => set("materiel", e.target.value)}
          placeholder="ex : MHM p.42 + ardoise + fiche différenciée"
        />
      </Field>

      <Disclosure title="Différenciation">
        <div className="space-y-3">
          <Field label="Adaptations prévues" hint="PPRE, PAP, allophones, consigne simplifiée, temps supplémentaire…">
            <AutoTextarea
              value={activity.differenciation}
              onChange={(e) => set("differenciation", e.target.value)}
            />
          </Field>
          <Field label="Activités de dépassement / autonomie" hint="Pour les élèves qui terminent avant les autres">
            <AutoTextarea
              value={activity.depassement}
              onChange={(e) => set("depassement", e.target.value)}
            />
          </Field>
        </div>
      </Disclosure>

      <Disclosure title="Bilan (après la séance)">
        <div className="space-y-3">
          <Field label="Bilan à chaud" hint="Ce qui a fonctionné / n'a pas fonctionné, difficultés, élèves à revoir">
            <AutoTextarea
              value={activity.bilan}
              onChange={(e) => set("bilan", e.target.value)}
            />
          </Field>
          <Field label="À reprendre">
            <AutoTextarea
              value={activity.aReprendre}
              onChange={(e) => set("aReprendre", e.target.value)}
              placeholder="ex : Revoir la soustraction posée avec les CE1"
            />
          </Field>
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label="Devoirs / leçons">
              <AutoTextarea
                value={activity.devoirs}
                onChange={(e) => set("devoirs", e.target.value)}
              />
            </Field>
            <Field label="Notes pour la prochaine fois">
              <AutoTextarea
                value={activity.notesProchaine}
                onChange={(e) => set("notesProchaine", e.target.value)}
              />
            </Field>
          </div>
        </div>
      </Disclosure>

      {/* Documents à imprimer pour la séance */}
      <Attachments refId={`activity:${activity.id}`} title="Documents de la séance à imprimer" />

      {/* Télécharger la fiche de préparation en PDF */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => printArea(`print-prep-${activity.id}`)}
          className="btn-outline py-1.5 text-xs"
          title="Télécharger / imprimer la fiche de préparation (A4, PDF)"
        >
          <Printer className="h-3.5 w-3.5" /> Fiche de prép (PDF)
        </button>
      </div>

      {/* Zone d'impression dédiée (A4), montée dans <body> via un portail */}
      <PrintPortal id={`print-prep-${activity.id}`}>
        <FichePrepA4 activity={activity} settings={settings} />
      </PrintPortal>
    </div>
  );
}

function ShortField({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="label">{label}</label>
      <input
        className="input py-1.5"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  );
}
