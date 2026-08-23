/**
 * Fabriques d'objets
 * ------------------
 * Crée des structures vides (journée, créneau, séance, étape) prêtes à être
 * éditées. Centralisé ici pour rester cohérent partout.
 */
import type {
  Activity,
  Day,
  DayEvent,
  Plan,
  PlanItem,
  PlanKind,
  Slot,
  Step,
} from "./types";
import { uid } from "./dates";

/** id déterministe d'un plan (un document par kind × discipline × niveau). */
export function planId(
  kind: PlanKind,
  disciplineId: string,
  niveauId: string,
): string {
  return `${kind}:${disciplineId}:${niveauId}`;
}

export function emptyPlanItem(order: number): PlanItem {
  return {
    id: uid(),
    periodeId: "",
    domaine: "",
    intitule: "",
    objectif: "",
    statut: "prevu",
    order,
  };
}

export function emptyPlan(
  kind: PlanKind,
  disciplineId: string,
  niveauId: string,
): Plan {
  return {
    id: planId(kind, disciplineId, niveauId),
    kind,
    disciplineId,
    niveauId,
    items: [],
    updatedAt: Date.now(),
  };
}

export function emptyStep(label = ""): Step {
  return { id: uid(), label, note: "" };
}

export function emptyActivity(niveaux: string[] = ["classe"]): Activity {
  return {
    id: uid(),
    niveaux,
    title: "",
    objectif: "",
    competence: "",
    competenceRef: "",
    progPeriode: "",
    progDomaine: "",
    progSequence: "",
    progSeance: "",
    progRef: "",
    organisation: [],
    roleEnseignant: [],
    deroulement: [],
    materiel: "",
    differenciation: "",
    depassement: "",
    bilan: "",
    aReprendre: "",
    devoirs: "",
    notesProchaine: "",
  };
}

export function emptySlot(
  disciplineId: string,
  start = "08:30",
  end = "09:15",
): Slot {
  return {
    id: uid(),
    start,
    end,
    disciplineId,
    activities: [emptyActivity()],
  };
}

export function emptyEvent(): DayEvent {
  return { id: uid(), type: "sortie", note: "" };
}

export function emptyDay(date: string, effectifPrevu: number | null): Day {
  const now = Date.now();
  return {
    date,
    info: {
      effectifPrevu,
      presents: null,
      absents: null,
      absentsNames: "",
      events: [],
    },
    slots: [],
    createdAt: now,
    updatedAt: now,
  };
}

/** Copie profonde d'une journée vers une nouvelle date (ids régénérés). */
export function duplicateDay(source: Day, targetDate: string): Day {
  const now = Date.now();
  const slots: Slot[] = source.slots.map((slot) => ({
    ...slot,
    id: uid(),
    activities: slot.activities.map((a) => ({
      ...a,
      id: uid(),
      deroulement: a.deroulement.map((s) => ({ ...s, id: uid() })),
      // On repart d'une préparation vierge côté bilan.
      bilan: "",
      aReprendre: "",
      devoirs: "",
      notesProchaine: "",
    })),
  }));
  return {
    date: targetDate,
    info: {
      ...source.info,
      presents: null,
      absents: null,
      absentsNames: "",
      events: source.info.events.map((e) => ({ ...e, id: uid() })),
    },
    slots,
    createdAt: now,
    updatedAt: now,
  };
}
