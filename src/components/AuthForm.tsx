"use client";

/**
 * Formulaire d'authentification (connexion OU inscription)
 * --------------------------------------------------------
 * Utilisé par les pages /connexion et /inscription.
 * - mode "login"  : connexion d'un utilisateur existant
 * - mode "signup" : création d'un nouveau compte
 */
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const isLogin = mode === "login";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);

    // Si Supabase n'est pas configuré, on prévient clairement.
    if (!isSupabaseConfigured()) {
      setError(
        "La connexion n'est pas encore configurée. Ajoute tes clés Supabase (voir README)."
      );
      return;
    }

    setLoading(true);
    const supabase = createClient();

    if (isLogin) {
      // ----- Connexion -----
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError("Email ou mot de passe incorrect.");
        setLoading(false);
        return;
      }
      router.push("/profil");
      router.refresh();
    } else {
      // ----- Inscription -----
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) {
        setError(error.message);
        setLoading(false);
        return;
      }
      setMessage(
        "Compte créé ! Si la confirmation par email est activée, vérifie ta boîte mail, sinon tu peux te connecter directement."
      );
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <div className="card">
        <h1 className="text-2xl font-bold text-navy-900">
          {isLogin ? "Connexion" : "Créer un compte"}
        </h1>
        <p className="mt-1 text-sm text-navy-500">
          {isLogin
            ? "Content de te revoir ! Connecte-toi pour continuer."
            : "Crée ton compte gratuit pour commencer à réviser."}
        </p>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-700">
              Adresse email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ton@email.com"
              className="w-full rounded-xl border border-navy-200 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-navy-700">
              Mot de passe
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Au moins 6 caractères"
              className="w-full rounded-xl border border-navy-200 px-4 py-3 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-700">
              {error}
            </p>
          )}
          {message && (
            <p className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
              {message}
            </p>
          )}

          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading
              ? "Un instant..."
              : isLogin
                ? "Se connecter"
                : "Créer mon compte"}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-navy-500">
          {isLogin ? (
            <>
              Pas encore de compte ?{" "}
              <Link href="/inscription" className="font-semibold text-sky-600 hover:text-sky-700">
                Inscris-toi
              </Link>
            </>
          ) : (
            <>
              Déjà un compte ?{" "}
              <Link href="/connexion" className="font-semibold text-sky-600 hover:text-sky-700">
                Connecte-toi
              </Link>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
