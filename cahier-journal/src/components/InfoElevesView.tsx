/**
 * Info élèves — grand tableau de suivi
 * ------------------------------------
 * Toute la classe dans un tableau : une ligne par élève, avec à côté une grande
 * zone de texte libre qui s'agrandit. On y note directement, sous forme de
 * tirets, ce qui va / ne va pas — de quoi dresser le profil pour le LSU.
 * Dictée vocale possible (micro du clavier).
 *
 * DONNÉE SENSIBLE (mineurs) : 100 % locale, jamais synchronisée ni publiée.
 */
import { useEffect, useMemo, useState } from "react";
import { useStore } from "../lib/store";
import type { Student, StudentNote } from "../lib/types";
import { AutoTextarea, Copy } from "./ui";

/** Normalise un prénom (minuscule, sans accents) + alias d'orthographe. */
const normName = (s: string) =>
  s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z]/g, "");
const ALIAS: Record<string, string> = {
  camelia: "kamelia", live: "liv", adrien: "hadrien", eytam: "haytham",
  riyad: "ryad", leila: "layla", sofia: "sophia", sofiavictoria: "sophia",
};
const nameKey = (s: string) => { const n = normName(s); return ALIAS[n] ?? n; };

export function InfoElevesView() {
  const { settings, studentNotes, saveStudentNote } = useStore();
  const roster = useMemo(
    () =>
      (settings.classe.roster ?? [])
        .slice()
        .sort((a, b) =>
          a.niveau === b.niveau
            ? a.prenom.localeCompare(b.prenom)
            : a.niveau.localeCompare(b.niveau),
        ),
    [settings.classe.roster],
  );
  const [query, setQuery] = useState("");
  const [bulk, setBulk] = useState("");
  const [showImport, setShowImport] = useState(false);
  const [report, setReport] = useState("");

  const noteFor = (studentId: string): StudentNote =>
    studentNotes.find((n) => n.studentId === studentId) ?? {
      studentId,
      synthese: "",
      entries: [],
      updatedAt: 0,
    };

  // Répartit un bilan collé (une ligne « Prénom : observation » par élève) dans
  // la zone de suivi de chaque élève. Ajoute (n'écrase pas) ; match par prénom.
  const distribute = () => {
    const lines = bulk.split("\n").map((l) => l.trim()).filter(Boolean);
    let ok = 0;
    const notFound: string[] = [];
    for (const line of lines) {
      const ci = line.indexOf(":");
      if (ci < 0) continue;
      let namePart = line.slice(0, ci).trim();
      const text = line.slice(ci + 1).trim();
      if (!text) continue;
      let niveau: "CE1" | "CE2" | null = null;
      const m = namePart.match(/\((ce[12])\)/i);
      if (m) { niveau = m[1].toUpperCase() as "CE1" | "CE2"; namePart = namePart.replace(/\(ce[12]\)/i, "").trim(); }
      const k = nameKey(namePart);
      let cands = roster.filter((s) => nameKey(s.prenom) === k);
      if (cands.length > 1 && niveau) cands = cands.filter((s) => s.niveau === niveau);
      if (cands.length === 0) { notFound.push(namePart); continue; }
      const st = cands[0];
      const note = noteFor(st.id);
      const add = /fleur du nombre/i.test(text) ? text : `Fleur du nombre (rentrée) — ${text}`;
      const synthese = note.synthese.trim() ? `${note.synthese.trim()}\n${add}` : add;
      void saveStudentNote({ ...note, synthese, updatedAt: Date.now() });
      ok++;
    }
    setReport(`${ok} élève(s) rempli(s).${notFound.length ? ` Non trouvés : ${notFound.join(", ")}.` : ""}`);
    setBulk("");
  };

  const filtered = roster.filter((s) =>
    `${s.prenom} ${s.nom}`.toLowerCase().includes(query.trim().toLowerCase()),
  );
  const ce1 = roster.filter((s) => s.niveau === "CE1").length;
  const ce2 = roster.filter((s) => s.niveau === "CE2").length;

  return (
    <div>
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2">
        <div>
          <h1 className="text-xl font-bold text-slate-900 dark:text-white">Info élèves</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Le suivi de toute la classe dans un tableau — j'écris directement à côté de
            chaque élève (des tirets suffisent), pour préparer le LSU.
            <span className="ml-1 rounded-full bg-rose-50 px-2 py-0.5 text-[11px] font-semibold text-rose-600 dark:bg-rose-500/10 dark:text-rose-300">
              🔒 100 % local
            </span>
          </p>
        </div>
        {roster.length > 0 && (
          <input
            className="input max-w-[14rem]"
            placeholder="Filtrer un élève…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        )}
      </div>

      {roster.length > 0 && (
        <div className="mb-3">
          <button onClick={() => setShowImport((v) => !v)} className="btn-outline py-1.5 text-xs">
            📋 Importer un bilan (coller)
          </button>
          {showImport && (
            <div className="mt-2 rounded-2xl border border-dashed border-ink-300 bg-ink-50/40 p-3 dark:border-ink-500/40 dark:bg-ink-500/10">
              <p className="mb-1.5 text-[12px] text-slate-500 dark:text-slate-400">
                Une ligne par élève : <b>Prénom : observation</b>. Ajoute « (CE1) » ou « (CE2) »
                après le prénom en cas d'homonyme (ex. deux Victor). Le texte est <b>ajouté</b> à la zone de suivi de l'élève.
              </p>
              <AutoTextarea
                className="min-h-[110px] text-[13px]"
                value={bulk}
                onChange={(e) => setBulk(e.target.value)}
                placeholder={"Alyssa : En retard — +5/-1/+3/-2/-4, alterne + et −.\nVictor (CE1) : En avance — alterne +, − et × (5×5)."}
              />
              <div className="mt-2 flex items-center gap-2">
                <button onClick={distribute} disabled={!bulk.trim()} className="btn-primary py-1.5 text-sm disabled:opacity-40">
                  Répartir sur les élèves
                </button>
                {report && <span className="text-[12px] font-medium text-emerald-600 dark:text-emerald-400">✓ {report}</span>}
              </div>
            </div>
          )}
        </div>
      )}

      {roster.length === 0 ? (
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/40">
          <div className="mb-2 text-3xl">🧑‍🎓</div>
          <p className="font-semibold text-slate-700 dark:text-slate-200">La liste des élèves est vide</p>
          <p className="mt-1">
            Va dans <b>Paramètres → Élèves → « Coller une liste »</b>, colle ta liste puis
            « Importer ». Les 23 élèves apparaîtront ici, chacun avec sa zone de suivi.
          </p>
          <p className="mt-2 text-[12px] text-slate-400">
            (Les noms restent sur ton appareil : ils ne sont jamais publiés.)
          </p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800">
          {/* En-tête du tableau */}
          <div className="grid grid-cols-[minmax(120px,180px)_1fr] gap-px bg-slate-200 text-xs font-bold uppercase tracking-wide text-slate-500 dark:bg-slate-800 dark:text-slate-400">
            <div className="bg-slate-50 px-3 py-2 dark:bg-slate-900">
              Élève ({roster.length} · {ce1} CE1 / {ce2} CE2)
            </div>
            <div className="bg-slate-50 px-3 py-2 dark:bg-slate-900">Suivi</div>
          </div>

          {/* Lignes */}
          <div className="grid grid-cols-[minmax(120px,180px)_1fr] gap-px bg-slate-200 dark:bg-slate-800">
            {filtered.map((s) => (
              <StudentRow key={s.id} student={s} note={noteFor(s.id)} onSave={saveStudentNote} />
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="bg-white px-3 py-4 text-center text-sm text-slate-400 dark:bg-slate-900">
              Aucun élève ne correspond à « {query} ».
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/** Une ligne du tableau : identité de l'élève + zone de suivi qui s'agrandit. */
function StudentRow({
  student,
  note,
  onSave,
}: {
  student: Student;
  note: StudentNote;
  onSave: (n: StudentNote) => Promise<void>;
}) {
  // État local pour ne pas perdre le focus pendant la frappe.
  const [text, setText] = useState(note.synthese ?? "");
  const [copied, setCopied] = useState(false);

  // Reflète une modification externe de la note (ex. import d'un bilan).
  useEffect(() => { setText(note.synthese ?? ""); }, [note.synthese]);

  const onChange = (v: string) => {
    setText(v);
    void onSave({ ...note, synthese: v, updatedAt: Date.now() });
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${student.prenom} ${student.nom} (${student.niveau})\n${text}`.trim(),
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* presse-papiers indisponible */
    }
  };

  return (
    <>
      {/* Colonne élève */}
      <div className="bg-white px-3 py-2 dark:bg-slate-900">
        <div className="flex items-center gap-1.5">
          <span
            className={`h-2 w-2 shrink-0 rounded-full ${student.niveau === "CE2" ? "bg-violet-500" : "bg-sky-500"}`}
            title={student.niveau}
          />
          <span className="min-w-0 text-sm font-semibold text-slate-800 dark:text-slate-100">
            {student.prenom}
          </span>
        </div>
        <div className="ml-3.5 truncate text-[11px] text-slate-400">{student.nom}</div>
        {student.besoins && (
          <div className="ml-3.5 mt-0.5 text-[11px] font-medium text-amber-600 dark:text-amber-300" title="Besoins particuliers (local)">
            ⚠ {student.besoins}
          </div>
        )}
        <button
          onClick={copy}
          className="ml-3.5 mt-1 inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-ink-600 dark:hover:text-ink-300"
          title="Copier le suivi de cet élève (pour le LSU)"
        >
          <Copy className="h-3 w-3" /> {copied ? "Copié !" : "Copier"}
        </button>
      </div>

      {/* Colonne suivi */}
      <div className="bg-white px-2 py-2 dark:bg-slate-900">
        <AutoTextarea
          className="min-h-[64px] border-transparent bg-transparent text-[13px] leading-relaxed focus:border-ink-300"
          value={text}
          onChange={(e) => onChange(e.target.value)}
          placeholder={"- ce qui va / à travailler…\n- (dictée vocale possible avec le micro du clavier)"}
        />
      </div>
    </>
  );
}
