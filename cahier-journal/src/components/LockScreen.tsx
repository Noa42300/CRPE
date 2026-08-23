/**
 * Écran de verrouillage
 * ---------------------
 * Demandé au démarrage si un code PIN est défini. Rien n'est déverrouillé
 * tant que le bon code n'est pas saisi.
 */
import { useState } from "react";
import { verifyPin } from "../lib/lock";

export function LockScreen({ onUnlock }: { onUnlock: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setChecking(true);
    const ok = await verifyPin(pin);
    setChecking(false);
    if (ok) onUnlock();
    else {
      setError(true);
      setPin("");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper-light px-4 dark:bg-paper-dark">
      <form onSubmit={submit} className="card w-full max-w-xs p-6 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-600 text-white">
          <LockIcon />
        </div>
        <h1 className="text-lg font-bold text-slate-800 dark:text-slate-100">
          Cahier Journal
        </h1>
        <p className="mb-4 mt-1 text-sm text-slate-500 dark:text-slate-400">
          Saisis ton code pour ouvrir.
        </p>
        <input
          autoFocus
          type="password"
          inputMode="numeric"
          value={pin}
          onChange={(e) => {
            setPin(e.target.value);
            setError(false);
          }}
          placeholder="Code"
          className={`input text-center text-lg tracking-widest ${
            error ? "border-rose-400 focus:ring-rose-500/20" : ""
          }`}
        />
        {error && (
          <p className="mt-2 text-xs text-rose-500">Code incorrect.</p>
        )}
        <button
          type="submit"
          disabled={checking || pin.length === 0}
          className="btn-primary mt-4 w-full"
        >
          {checking ? "Vérification…" : "Déverrouiller"}
        </button>
        <p className="mt-4 text-[11px] leading-relaxed text-slate-400">
          Code oublié ? Il protège l'accès sur cet appareil. Pour le
          réinitialiser, efface les données de site du navigateur (tu perdras
          les données locales non exportées).
        </p>
      </form>
    </div>
  );
}

function LockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
