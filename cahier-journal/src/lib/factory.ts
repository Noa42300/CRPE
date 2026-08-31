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
  PlanKind,
  Slot,
  Step,
} from "./types";
import { uid } from "./dates";

/** id déterministe d'un plan (un document par kind × discipline). */
export function planId(kind: PlanKind, disciplineId: string): string {
  return `${kind}:${disciplineId}`;
}

export function emptyPlan(kind: PlanKind, disciplineId: string): Plan {
  return {
    id: planId(kind, disciplineId),
    kind,
    disciplineId,
    zones: {},
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
    correction: "",
    bilan: "",
    aReprendre: "",
    devoirs: "",
    notesProchaine: "",
  };
}

/** Copie profonde d'une séance (Activity) avec de nouveaux identifiants. */
export function cloneActivity(a: Activity): Activity {
  return {
    ...a,
    id: uid(),
    deroulement: a.deroulement.map((s) => ({ ...s, id: uid() })),
  };
}

export function emptySequence(disciplineId: string): import("./types").Sequence {
  return {
    id: uid(),
    title: "",
    disciplineId,
    niveaux: ["classe"],
    objectif: "",
    seances: [],
    updatedAt: Date.now(),
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
