/**
 * Vue « Sauvegarde »
 * ------------------
 * Export / import du fichier de sauvegarde, réinitialisation, et explication
 * détaillée de la confidentialité (où sont les données, ce qui les efface…).
 */
import { useRef, useState } from "react";
import { useStore } from "../lib/store";
import {
  exportBackup,
  parseBackup,
  readFileText,
  restoreBackup,
} from "../lib/backup";

export function BackupView() {
  const { settings, daysMap, reloadAll, resetEverything } = useStore();
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const importMode = useRef<"merge" | "replace">("merge");
  const dayCount = Object.keys(daysMap).length;

  const onExport = async () => {
    try {
      await exportBackup(settings);
      setMsg({ ok: true, text: "Sauvegarde téléchargée." });
    } catch {
      setMsg({ ok: false, text: "Échec de l'export." });
    }
  };

  const onImportFile = async (file: File, mode: "replace" | "merge") => {
    try {
      const text = await readFileText(file);
      const parsed = parseBackup(text);
      if (
        mode === "replace" &&
        dayCount > 0 &&
        !window.confirm(
          "Remplacer TOUTES les données actuelles par celles de la sauvegarde ? Cette action est irréversible.",
        )
      ) {
        return;
      }
      await restoreBackup(parsed, mode);
      await reloadAll();
      setMsg({
        ok: true,
        text: `Restauration réussie : ${parsed.days.length} journée(s) importée(s).`,
      });
    } catch (e) {
      setMsg({ ok: false, text: (e as Error).message });
    }
  };

  const onReset = async () => {
    if (
      window.confirm(
        "Supprimer TOUTES les données (journées, modèles, réglages) et repartir de zéro ? Cette action est irréversible. Pensez à exporter une sauvegarde d'abord.",
      )
    ) {
      await resetEverything();
      setMsg({ ok: true, text: "Toutes les données ont été supprimées." });
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-xl font-bold text-slate-900 dark:text-white">
        Sauvegarde & confidentialité
      </h1>

      {msg && (
        <div
          className={`rounded-xl px-4 py-2.5 text-sm ${
            msg.ok
              ? "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300"
              : "bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300"
          }`}
        >
          {msg.text}
        </div>
      )}

      {/* Export */}
      <section className="card p-4">
        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">
          Exporter mes données
        </h2>
        <p className="mb-3 mt-0.5 text-xs text-slate-400">
          Télécharge un fichier <code>cahier-journal-sauvegarde-AAAA-MM-JJ.json</code>{" "}
          contenant {dayCount} journée(s) et vos réglages. À conserver en lieu sûr
          (clé USB, disque personnel).
        </p>
        <button onClick={onExport} className="btn-primary">
          💾 Exporter la sauvegarde
        </button>
      </section>

      {/* Import */}
      <section className="card p-4">
        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">
          Restaurer une sauvegarde
        </h2>
        <p className="mb-3 mt-0.5 text-xs text-slate-400">
          Importez un fichier de sauvegarde. « Fusionner » ajoute/écrase les
          journées importées ; « Remplacer » efface d'abord tout le reste.
        </p>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) void onImportFile(f, importMode.current);
            e.target.value = "";
          }}
        />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              importMode.current = "merge";
              fileRef.current?.click();
            }}
            className="btn-outline"
          >
            Fusionner…
          </button>
          <button
            onClick={() => {
              importMode.current = "replace";
              fileRef.current?.click();
            }}
            className="btn-outline"
          >
            Remplacer tout…
          </button>
        </div>
      </section>

      {/* Confidentialité */}
      <section className="card p-4">
        <h2 className="text-sm font-bold text-slate-800 dark:text-slate-100">
          🔒 Où sont mes données ?
        </h2>
        <ul className="mt-2 space-y-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <li>
            <b>Stockage local uniquement.</b> Tout est enregistré dans la base{" "}
            <code>IndexedDB</code> de votre navigateur, sur cet appareil. Rien
            n'est envoyé sur Internet, aucun serveur, aucune API externe, aucun
            compte, aucun traceur.
          </li>
          <li>
            <b>Hors ligne.</b> Une fois l'application ouverte une première fois,
            elle fonctionne sans connexion (installable comme une appli).
          </li>
          <li>
            <b>Si vous videz les données du navigateur</b> (historique, « données
            de site »), ou désinstallez le navigateur, les journées sont
            <b> effacées</b>. D'où l'importance d'exporter régulièrement une
            sauvegarde.
          </li>
          <li>
            <b>Changer d'ordinateur / de navigateur :</b> exportez la sauvegarde
            ici, puis importez-la sur l'autre appareil. C'est le seul moyen de
            transférer vos données — volontairement, par un fichier que vous
            contrôlez.
          </li>
          <li>
            <b>Navigation privée :</b> les données peuvent être effacées à la
            fermeture. Utilisez une fenêtre normale pour un usage quotidien.
          </li>
        </ul>
      </section>

      {/* Zone dangereuse */}
      <section className="card border-rose-200 p-4 dark:border-rose-900/50">
        <h2 className="text-sm font-bold text-rose-600 dark:text-rose-400">
          Zone sensible
        </h2>
        <p className="mb-3 mt-0.5 text-xs text-slate-400">
          Supprime définitivement toutes les journées, modèles et réglages de cet
          appareil.
        </p>
        <button onClick={onReset} className="btn-danger">
          Supprimer toutes les données
        </button>
      </section>
    </div>
  );
}
