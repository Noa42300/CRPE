/**
 * Volumes horaires — petit rappel pour ne pas oublier d'heures.
 * Les cibles s'entendent sur les DEUX jours (lundi + mardi), service à mi-temps.
 */
import { VOLUMES_HEBDO } from "../lib/horaires";

function hLabel(min: number): string {
  const h = Math.floor(min / 60), m = min % 60;
  if (h && m) return `${h} h ${String(m).padStart(2, "0")}`;
  if (h) return `${h} h`;
  return `${m} min`;
}

export function HorairesView() {
  const lignes = [
    ...VOLUMES_HEBDO.map((v) => ({ label: v.label, cible: hLabel(v.cibleMin), imperatif: v.imperatif, note: v.note })),
    { label: "Poésie / récitation", cible: "30 min", imperatif: false, note: "≈ 1 poésie toutes les 3 semaines (≈ 2 par période)." },
  ];
  return (
    <div>
      <div className="mb-3">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">Volumes horaires à respecter</h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Service à mi-temps : les cibles s'entendent <b>sur les deux jours réunis (lundi + mardi)</b>. Français et maths sont impératifs.
        </p>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="bg-slate-50 text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:bg-slate-900 dark:text-slate-400">
              <th className="px-3 py-2">Discipline</th>
              <th className="px-3 py-2">Sur les 2 jours</th>
              <th className="px-3 py-2">Repère / note</th>
            </tr>
          </thead>
          <tbody>
            {lignes.map((l) => (
              <tr key={l.label} className="border-t border-slate-100 dark:border-slate-800">
                <td className="px-3 py-2 font-semibold text-slate-800 dark:text-slate-100">
                  {l.label}
                  {l.imperatif && <span className="ml-2 rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-rose-600 dark:bg-rose-500/15 dark:text-rose-300">impératif</span>}
                </td>
                <td className="px-3 py-2 font-bold text-ink-700 dark:text-ink-300">{l.cible}</td>
                <td className="px-3 py-2 text-[12.5px] text-slate-500 dark:text-slate-400">{l.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-3 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[13px] text-amber-800 dark:border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-200">
        🎵 <b>Musique</b> : ne pas programmer (conservatoire en cours d'année). Le créneau libéré va aux arts / à la poésie.
      </div>
    </div>
  );
}
