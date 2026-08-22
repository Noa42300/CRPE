/**
 * Mise en page d'impression d'une journée
 * ---------------------------------------
 * Rendu propre, sans boutons ni navigation, pour l'impression ou l'export PDF
 * via « Enregistrer en PDF » du navigateur. Toujours monté mais hors écran ;
 * rendu visible uniquement pendant l'impression (voir print.ts / index.css).
 */
import type { Day, Settings } from "../lib/types";
import {
  formatLong,
  isoWeek,
  cap,
} from "../lib/dates";
import {
  disciplineLabel,
  niveauLabel,
  periodForDate,
} from "../lib/lookup";
import { EVENT_LABELS } from "../lib/defaults";

export function PrintDay({
  id = "print-area",
  day,
  settings,
}: {
  id?: string;
  day: Day | null;
  settings: Settings;
}) {
  return (
    <div id={id} className="print-area bg-white p-2 text-[12px] text-black">
      {day ? (
        <DayPrint day={day} settings={settings} />
      ) : (
        <p>Journée non préparée.</p>
      )}
    </div>
  );
}

export function DayPrint({ day, settings }: { day: Day; settings: Settings }) {
  const period = periodForDate(settings, day.date);
  const teacher = [settings.profile.prenom, settings.profile.nom]
    .filter(Boolean)
    .join(" ");

  return (
    <div>
      <header className="mb-3 border-b-2 border-black pb-2">
        <div className="flex items-baseline justify-between">
          <h1 className="text-lg font-bold">{cap(formatLong(day.date))}</h1>
          <div className="text-right text-[11px]">
            {teacher && <div>{teacher}</div>}
            {settings.profile.classe && <div>{settings.profile.classe}</div>}
          </div>
        </div>
        <div className="mt-1 text-[11px]">
          Semaine {isoWeek(day.date)}
          {period ? ` · ${period.name}` : ""}
          {day.info.presents != null || day.info.absents != null
            ? ` · ${day.info.presents ?? "?"} présents · ${day.info.absents ?? "?"} absents`
            : ""}
        </div>
        {day.info.events.length > 0 && (
          <div className="mt-1 text-[11px]">
            {day.info.events
              .map((e) => `${EVENT_LABELS[e.type]}${e.note ? " : " + e.note : ""}`)
              .join(" — ")}
          </div>
        )}
      </header>

      <div className="space-y-3">
        {day.slots.map((slot) => (
          <section key={slot.id} className="print-avoid-break">
            <div className="flex items-baseline gap-2 border-b border-slate-400 pb-0.5">
              <span className="font-mono font-bold">
                {slot.start}–{slot.end}
              </span>
              <span className="font-bold uppercase">
                {disciplineLabel(settings, slot.disciplineId)}
              </span>
            </div>

            {slot.activities.map((a) => (
              <div key={a.id} className="mt-1.5 pl-2">
                <div className="font-semibold">
                  [{a.niveaux.map((n) => niveauLabel(settings, n)).join(" / ")}]{" "}
                  {a.title}
                </div>
                {a.objectif && (
                  <div>
                    <b>Objectif :</b> {a.objectif}
                  </div>
                )}
                {a.competence && (
                  <div>
                    <b>Compétence :</b> {a.competence}
                  </div>
                )}
                {(a.organisation.length > 0 || a.roleEnseignant.length > 0) && (
                  <div>
                    {a.organisation.length > 0 && (
                      <span>
                        <b>Organisation :</b> {a.organisation.join(", ")}.{" "}
                      </span>
                    )}
                    {a.roleEnseignant.length > 0 && (
                      <span>
                        <b>Rôle :</b> {a.roleEnseignant.join(", ")}.
                      </span>
                    )}
                  </div>
                )}
                {a.deroulement.length > 0 && (
                  <div>
                    <b>Déroulement :</b>
                    <ol className="ml-5 list-decimal">
                      {a.deroulement.map((s) => (
                        <li key={s.id}>
                          {s.label}
                          {s.note ? ` — ${s.note}` : ""}
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
                {a.materiel && (
                  <div>
                    <b>Matériel :</b> {a.materiel}
                  </div>
                )}
                {a.differenciation && (
                  <div>
                    <b>Différenciation :</b> {a.differenciation}
                  </div>
                )}
                {a.depassement && (
                  <div>
                    <b>Dépassement :</b> {a.depassement}
                  </div>
                )}
                {a.bilan && (
                  <div>
                    <b>Bilan :</b> {a.bilan}
                  </div>
                )}
                {a.aReprendre && (
                  <div>
                    <b>À reprendre :</b> {a.aReprendre}
                  </div>
                )}
                {a.devoirs && (
                  <div>
                    <b>Devoirs :</b> {a.devoirs}
                  </div>
                )}
              </div>
            ))}
          </section>
        ))}
        {day.slots.length === 0 && <p>Aucun créneau pour cette journée.</p>}
      </div>
    </div>
  );
}
