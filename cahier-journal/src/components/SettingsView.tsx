/**
 * Vue « Paramètres »
 * ------------------
 * Profil, classe, niveaux/groupes, disciplines & couleurs, périodes,
 * apparence (thème), jours travaillés. Tout est enregistré automatiquement.
 */
import { useStore } from "../lib/store";
import type { Discipline, NiveauDef, Period, Settings, Student } from "../lib/types";
import { COLOR_KEYS, DISCIPLINE_COLORS } from "../lib/defaults";
import { uid } from "../lib/dates";
import { Field, Plus, Trash } from "./ui";
import { useState } from "react";
import { clearPin, hasPin, setPin } from "../lib/lock";

const DAY_LABELS = [
  { d: 1, l: "Lun" },
  { d: 2, l: "Mar" },
  { d: 3, l: "Mer" },
  { d: 4, l: "Jeu" },
  { d: 5, l: "Ven" },
  { d: 6, l: "Sam" },
  { d: 0, l: "Dim" },
];

export function SettingsView() {
  const { settings, saveSettings } = useStore();
  const patch = (p: Partial<Settings>) => saveSettings({ ...settings, ...p });
  const patchProfile = (p: Partial<Settings["profile"]>) =>
    patch({ profile: { ...settings.profile, ...p } });

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">Paramètres</h1>

      {/* Profil */}
      <Card title="Mon profil">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Prénom">
            <input className="input" value={settings.profile.prenom} onChange={(e) => patchProfile({ prenom: e.target.value })} />
          </Field>
          <Field label="Nom">
            <input className="input" value={settings.profile.nom} onChange={(e) => patchProfile({ nom: e.target.value })} />
          </Field>
          <Field label="École">
            <input className="input" value={settings.profile.ecole} onChange={(e) => patchProfile({ ecole: e.target.value })} />
          </Field>
          <Field label="Classe">
            <input className="input" value={settings.profile.classe} onChange={(e) => patchProfile({ classe: e.target.value })} placeholder="CE1-CE2" />
          </Field>
          <Field label="Année scolaire">
            <input className="input" value={settings.profile.annee} onChange={(e) => patchProfile({ annee: e.target.value })} placeholder="2026-2027" />
          </Field>
        </div>
      </Card>

      {/* Classe */}
      <Card title="Ma classe" subtitle="Les noms d'élèves sont facultatifs et restent 100 % locaux.">
        <div className="grid gap-3 sm:grid-cols-2">
          <Field label="Effectif">
            <input
              type="number"
              min={0}
              className="input"
              value={settings.classe.effectif ?? ""}
              onChange={(e) =>
                patch({
                  classe: {
                    ...settings.classe,
                    effectif: e.target.value === "" ? null : Number(e.target.value),
                  },
                })
              }
            />
          </Field>
        </div>
        <RosterEditor
          roster={settings.classe.roster ?? []}
          onChange={(roster) =>
            patch({
              classe: {
                ...settings.classe,
                roster,
                // On garde la liste simple (prénom nom) synchronisée.
                eleves: roster.map((s) => `${s.prenom} ${s.nom}`.trim()).filter(Boolean),
                effectif: roster.length > 0 ? roster.length : settings.classe.effectif,
              },
            })
          }
        />
      </Card>

      {/* Niveaux */}
      <Card title="Niveaux & groupes" subtitle="Utilisés comme badges dans les séances.">
        <NiveauxEditor
          niveaux={settings.niveaux}
          onChange={(niveaux) => patch({ niveaux })}
        />
      </Card>

      {/* Disciplines */}
      <Card title="Disciplines & couleurs">
        <DisciplinesEditor
          disciplines={settings.disciplines}
          onChange={(disciplines) => patch({ disciplines })}
        />
      </Card>

      {/* Périodes */}
      <Card title="Périodes de l'année">
        <PeriodsEditor
          periods={settings.periods}
          onChange={(periods) => patch({ periods })}
        />
      </Card>

      {/* Apparence */}
      <Card title="Apparence">
        <div className="flex flex-wrap gap-2">
          {(["light", "dark", "auto"] as const).map((t) => (
            <button
              key={t}
              onClick={() => patch({ theme: t })}
              className={`toggle-chip ${settings.theme === t ? "toggle-chip-on" : "toggle-chip-off"}`}
            >
              {t === "light" ? "☀️ Clair" : t === "dark" ? "🌙 Sombre" : "🖥️ Automatique"}
            </button>
          ))}
        </div>
      </Card>

      {/* Sécurité — code d'accès */}
      <Card title="Sécurité — code d'accès" subtitle="Protège l'ouverture de l'application sur cet appareil. Seule une empreinte du code est stockée localement.">
        <SecurityCard />
      </Card>

      {/* Jours travaillés */}
      <Card title="Jours travaillés" subtitle="Affichés dans la semaine et le calendrier.">
        <div className="flex flex-wrap gap-2">
          {DAY_LABELS.map(({ d, l }) => {
            const on = settings.joursTravailles.includes(d);
            return (
              <button
                key={d}
                onClick={() =>
                  patch({
                    joursTravailles: on
                      ? settings.joursTravailles.filter((x) => x !== d)
                      : [...settings.joursTravailles, d],
                  })
                }
                className={`toggle-chip ${on ? "toggle-chip-on" : "toggle-chip-off"}`}
              >
                {l}
              </button>
            );
          })}
        </div>
      </Card>
    </div>
  );
}

// -------------------------------------------------------------- sous-blocs
function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="card p-4">
      <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">{title}</h2>
      {subtitle && <p className="mb-3 mt-0.5 text-xs text-slate-400">{subtitle}</p>}
      <div className={subtitle ? "" : "mt-3"}>{children}</div>
    </section>
  );
}

function SecurityCard() {
  const [pinSet, setPinSet] = useState(hasPin());
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState<string | null>(null);

  const activate = async () => {
    if (value.length < 4) {
      setMsg("Choisis un code d'au moins 4 caractères.");
      return;
    }
    if (value !== confirm) {
      setMsg("Les deux codes ne correspondent pas.");
      return;
    }
    await setPin(value);
    setPinSet(true);
    setEditing(false);
    setValue("");
    setConfirm("");
    setMsg("Code enregistré. Il sera demandé à la prochaine ouverture.");
  };

  const remove = () => {
    if (window.confirm("Retirer le code d'accès ?")) {
      clearPin();
      setPinSet(false);
      setMsg("Code retiré.");
    }
  };

  return (
    <div className="space-y-3">
      {msg && <p className="text-xs text-emerald-600 dark:text-emerald-400">{msg}</p>}

      {pinSet && !editing ? (
        <div className="flex flex-wrap items-center gap-2">
          <span className="niveau-badge bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300">
            🔒 Code actif
          </span>
          <button onClick={() => setEditing(true)} className="btn-outline py-1 text-xs">
            Changer le code
          </button>
          <button onClick={remove} className="btn-ghost py-1 text-xs text-rose-500">
            Retirer le code
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="grid gap-2 sm:grid-cols-2">
            <input
              type="password"
              inputMode="numeric"
              className="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Nouveau code (min. 4)"
            />
            <input
              type="password"
              inputMode="numeric"
              className="input"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              placeholder="Confirmer le code"
            />
          </div>
          <div className="flex gap-2">
            <button onClick={activate} className="btn-primary py-1.5 text-sm">
              {pinSet ? "Enregistrer le nouveau code" : "Activer le code"}
            </button>
            {editing && (
              <button onClick={() => setEditing(false)} className="btn-ghost py-1.5 text-sm">
                Annuler
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function NiveauxEditor({
  niveaux,
  onChange,
}: {
  niveaux: NiveauDef[];
  onChange: (n: NiveauDef[]) => void;
}) {
  return (
    <div className="space-y-2">
      {niveaux.map((n, i) => (
        <div key={n.id} className="flex items-center gap-2">
          <input
            className="input flex-1 py-1.5"
            value={n.label}
            onChange={(e) =>
              onChange(niveaux.map((x, j) => (j === i ? { ...x, label: e.target.value } : x)))
            }
          />
          <label className="flex items-center gap-1 text-xs text-slate-500">
            <input
              type="checkbox"
              checked={!!n.isGroupeClasse}
              onChange={(e) =>
                onChange(niveaux.map((x, j) => (j === i ? { ...x, isGroupeClasse: e.target.checked } : x)))
              }
            />
            classe entière
          </label>
          <button
            onClick={() => onChange(niveaux.filter((_, j) => j !== i))}
            className="text-slate-400 hover:text-rose-500"
            disabled={niveaux.length <= 1}
          >
            <Trash />
          </button>
        </div>
      ))}
      <button
        onClick={() => onChange([...niveaux, { id: uid(), label: "Nouveau groupe" }])}
        className="btn-outline py-1 text-xs"
      >
        <Plus className="h-3.5 w-3.5" /> Ajouter un niveau / groupe
      </button>
    </div>
  );
}

function DisciplinesEditor({
  disciplines,
  onChange,
}: {
  disciplines: Discipline[];
  onChange: (d: Discipline[]) => void;
}) {
  const sorted = disciplines.slice().sort((a, b) => a.order - b.order);
  return (
    <div className="space-y-2">
      {sorted.map((d) => (
        <div key={d.id} className="flex items-center gap-2">
          <span className={`h-4 w-4 shrink-0 rounded-full ${DISCIPLINE_COLORS[d.color].swatch}`} />
          <input
            className="input flex-1 py-1.5"
            value={d.label}
            onChange={(e) =>
              onChange(disciplines.map((x) => (x.id === d.id ? { ...x, label: e.target.value } : x)))
            }
          />
          <select
            className="input w-32 py-1.5"
            value={d.color}
            onChange={(e) =>
              onChange(
                disciplines.map((x) =>
                  x.id === d.id ? { ...x, color: e.target.value as Discipline["color"] } : x,
                ),
              )
            }
          >
            {COLOR_KEYS.map((c) => (
              <option key={c} value={c}>
                {DISCIPLINE_COLORS[c].label}
              </option>
            ))}
          </select>
          <button
            onClick={() => onChange(disciplines.filter((x) => x.id !== d.id))}
            className="text-slate-400 hover:text-rose-500"
          >
            <Trash />
          </button>
        </div>
      ))}
      <button
        onClick={() =>
          onChange([
            ...disciplines,
            {
              id: uid(),
              label: "Nouvelle discipline",
              color: "gray",
              order: disciplines.length,
            },
          ])
        }
        className="btn-outline py-1 text-xs"
      >
        <Plus className="h-3.5 w-3.5" /> Ajouter une discipline
      </button>
    </div>
  );
}

function PeriodsEditor({
  periods,
  onChange,
}: {
  periods: Period[];
  onChange: (p: Period[]) => void;
}) {
  const sorted = periods.slice().sort((a, b) => a.number - b.number);
  const set = (id: string, patch: Partial<Period>) =>
    onChange(periods.map((p) => (p.id === id ? { ...p, ...patch } : p)));
  return (
    <div className="space-y-2">
      {sorted.map((p) => (
        <div key={p.id} className="flex flex-wrap items-center gap-2">
          <input
            className="input w-36 py-1.5"
            value={p.name}
            onChange={(e) => set(p.id, { name: e.target.value })}
          />
          <input
            type="date"
            className="input w-auto py-1.5"
            value={p.start}
            onChange={(e) => set(p.id, { start: e.target.value })}
          />
          <span className="text-slate-400">→</span>
          <input
            type="date"
            className="input w-auto py-1.5"
            value={p.end}
            onChange={(e) => set(p.id, { end: e.target.value })}
          />
          <button
            onClick={() => onChange(periods.filter((x) => x.id !== p.id))}
            className="text-slate-400 hover:text-rose-500"
          >
            <Trash />
          </button>
        </div>
      ))}
      <button
        onClick={() =>
          onChange([
            ...periods,
            {
              id: uid(),
              number: periods.length + 1,
              name: `Période ${periods.length + 1}`,
              start: "",
              end: "",
            },
          ])
        }
        className="btn-outline py-1 text-xs"
      >
        <Plus className="h-3.5 w-3.5" /> Ajouter une période
      </button>
    </div>
  );
}

/** Éditeur de la liste nominative des élèves (prénom, nom, niveau). */
function RosterEditor({
  roster,
  onChange,
}: {
  roster: Student[];
  onChange: (roster: Student[]) => void;
}) {
  const [bulk, setBulk] = useState("");
  const [showBulk, setShowBulk] = useState(false);

  const update = (id: string, patch: Partial<Student>) =>
    onChange(roster.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  const remove = (id: string) => onChange(roster.filter((s) => s.id !== id));
  const add = () =>
    onChange([...roster, { id: uid(), prenom: "", nom: "", niveau: "CE1" }]);

  const importBulk = () => {
    const parsed: Student[] = bulk
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean)
      .map((line): Student => {
        const f = line.split(/[\t,;]/).map((x) => x.trim());
        const niveau: Student["niveau"] = /ce2/i.test(f[2] ?? "") ? "CE2" : "CE1";
        return { id: uid(), prenom: f[0] ?? "", nom: f[1] ?? "", niveau };
      })
      .filter((s) => s.prenom || s.nom);
    if (parsed.length === 0) return;
    onChange(parsed);
    setBulk("");
    setShowBulk(false);
  };

  const ce1 = roster.filter((s) => s.niveau === "CE1").length;
  const ce2 = roster.filter((s) => s.niveau === "CE2").length;

  return (
    <div className="mt-3 space-y-2">
      <div className="flex items-center justify-between">
        <span className="label mb-0">
          Élèves ({roster.length}
          {roster.length > 0 ? ` · ${ce1} CE1 / ${ce2} CE2` : ""})
        </span>
        <button type="button" onClick={() => setShowBulk((v) => !v)} className="btn-ghost py-1 text-xs">
          Coller une liste
        </button>
      </div>

      {showBulk && (
        <div className="rounded-lg border border-dashed border-stone-300 p-2 dark:border-stone-700">
          <textarea
            className="input h-28 resize-y text-[13px]"
            value={bulk}
            onChange={(e) => setBulk(e.target.value)}
            placeholder={"Une ligne par élève : Prénom, NOM, Niveau\nAlyssa, AKTAS, CE1\nHugo, BRIAS, CE2"}
          />
          <div className="mt-2 flex items-center gap-2">
            <button type="button" onClick={importBulk} className="btn-primary py-1 text-xs">
              Importer (remplace la liste)
            </button>
            <span className="text-[11px] text-stone-400">Séparateurs acceptés : virgule, point-virgule ou tabulation.</span>
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        {roster.map((s) => (
          <div key={s.id} className="flex items-center gap-2">
            <input
              className="input py-1.5"
              value={s.prenom}
              onChange={(e) => update(s.id, { prenom: e.target.value })}
              placeholder="Prénom"
            />
            <input
              className="input py-1.5"
              value={s.nom}
              onChange={(e) => update(s.id, { nom: e.target.value })}
              placeholder="NOM"
            />
            <div className="flex shrink-0 overflow-hidden rounded-lg border border-stone-300 dark:border-stone-600">
              {(["CE1", "CE2"] as const).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => update(s.id, { niveau: n })}
                  className={`px-2.5 py-1.5 text-xs font-semibold ${
                    s.niveau === n
                      ? "bg-ink-600 text-white"
                      : "bg-white text-stone-500 dark:bg-stone-900 dark:text-stone-400"
                  }`}
                >
                  {n}
                </button>
              ))}
            </div>
            <button type="button" onClick={() => remove(s.id)} className="shrink-0 text-stone-400 hover:text-rose-500" title="Retirer">
              <Trash />
            </button>
          </div>
        ))}
      </div>

      <button type="button" onClick={add} className="btn-outline py-1 text-xs">
        <Plus className="h-3.5 w-3.5" /> Ajouter un élève
      </button>
      <p className="text-[11px] text-stone-400">
        Ces noms restent sur cet appareil (jamais envoyés ni publiés). Ils servent
        à l'appel dans « Aujourd'hui ».
      </p>
    </div>
  );
}
