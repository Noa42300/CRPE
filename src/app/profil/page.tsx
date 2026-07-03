/**
 * PAGE — PROFIL UTILISATEUR
 * Affiche les informations du compte et le statut (Gratuit / Premium).
 * Prévoit un emplacement pour la future "progression".
 */
import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignOutButton } from "@/components/SignOutButton";
import { getCurrentProfile } from "@/lib/auth";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export const metadata: Metadata = {
  title: "Mon profil",
  description: "Gère ton compte CRPE avec Noa.",
};

export default async function ProfilPage() {
  // Sans Supabase, il n'y a pas de vraie connexion : on explique la situation.
  if (!isSupabaseConfigured()) {
    return (
      <div className="container-page py-24 text-center">
        <h1 className="text-2xl font-bold text-navy-900">Compte non disponible</h1>
        <p className="mx-auto mt-3 max-w-md text-navy-500">
          La connexion des utilisateurs n'est pas encore configurée. Ajoute tes
          clés Supabase pour activer les comptes (voir le README).
        </p>
        <Link href="/" className="btn-primary mt-8">Retour à l'accueil</Link>
      </div>
    );
  }

  const profile = await getCurrentProfile();
  if (!profile) redirect("/connexion");

  return (
    <div className="container-page py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-navy-900">
          Mon profil
        </h1>

        {/* Carte infos compte */}
        <div className="card mt-8">
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-xl font-bold text-white">
              {profile.email.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="font-semibold text-navy-900">{profile.email}</p>
              {profile.is_premium ? (
                <span className="badge mt-1 bg-navy-900 text-white">✨ Membre Premium</span>
              ) : (
                <span className="badge mt-1 bg-sky-100 text-sky-800">Compte gratuit</span>
              )}
            </div>
          </div>
        </div>

        {/* Encart Premium si pas encore membre */}
        {!profile.is_premium && (
          <div className="card mt-6 border-2 border-navy-900 bg-navy-900 text-white">
            <h2 className="text-xl font-semibold">Passe au niveau supérieur 🚀</h2>
            <p className="mt-2 text-navy-200">
              Débloque toutes les fiches, vidéos, sujets blancs et méthodes avec
              un paiement unique, à vie.
            </p>
            <Link
              href="/premium"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-sky-50"
            >
              Découvrir le Premium
            </Link>
          </div>
        )}

        {/* Emplacement "progression" (fonctionnalité future) */}
        <div className="card mt-6">
          <h2 className="text-lg font-semibold text-navy-900">Ma progression</h2>
          <p className="mt-2 text-sm text-navy-500">
            Le suivi de progression arrivera bientôt : tu pourras marquer les
            ressources terminées et suivre ton avancement matière par matière.
          </p>
          <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-navy-100">
            <div className="h-full w-0 rounded-full bg-sky-500" />
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/recherche" className="btn-primary">Explorer les ressources</Link>
          <SignOutButton />
        </div>
      </div>
    </div>
  );
}
