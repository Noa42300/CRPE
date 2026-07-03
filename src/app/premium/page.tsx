/**
 * PAGE — PREMIUM (paiement)
 * Présente l'offre Premium et le bouton de paiement Stripe.
 * Gère aussi les retours de paiement (?success / ?canceled).
 */
import type { Metadata } from "next";
import Link from "next/link";
import { CheckoutButton } from "@/components/CheckoutButton";
import { getCurrentProfile } from "@/lib/auth";
import { PREMIUM_PRICE_EUR } from "@/lib/stripe";

export const metadata: Metadata = {
  title: "Premium",
  description:
    "Débloque tout le contenu de la plateforme CRPE avec Noa : un paiement unique, un accès à vie.",
};

const PERKS = [
  "Accès complet à toutes les fiches",
  "Accès à toutes les vidéos",
  "Tous les sujets blancs et leurs corrections",
  "Toutes les méthodes complètes",
  "Téléchargement des PDF",
  "Accès illimité, à vie (aucun abonnement)",
];

export default async function PremiumPage({
  searchParams,
}: {
  searchParams: Promise<{ success?: string; canceled?: string }>;
}) {
  const { success, canceled } = await searchParams;
  const profile = await getCurrentProfile();

  return (
    <div className="container-page py-16 sm:py-24">
      {/* Bandeaux de retour de paiement */}
      {success && (
        <Banner tone="success">
          🎉 Paiement réussi ! Ton accès Premium est en cours d'activation.
          Recharge la page dans quelques secondes si besoin.
        </Banner>
      )}
      {canceled && (
        <Banner tone="warning">
          Paiement annulé. Tu peux réessayer quand tu veux.
        </Banner>
      )}

      <div className="mx-auto max-w-2xl text-center">
        <span className="badge bg-navy-50 text-navy-700">Accès à vie</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Débloque toute la plateforme
        </h1>
        <p className="mt-4 text-lg text-navy-500">
          Un seul paiement de {PREMIUM_PRICE_EUR}€. Pas d'abonnement, pas de
          frais cachés. Tu gardes l'accès pour toujours.
        </p>
      </div>

      {/* Carte de l'offre */}
      <div className="mx-auto mt-12 max-w-lg">
        <div className="card border-2 border-navy-900">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-navy-900">
              {PREMIUM_PRICE_EUR}€
            </span>
            <span className="text-navy-400">/ à vie</span>
          </div>

          <ul className="mt-8 space-y-3">
            {PERKS.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-navy-700">
                <span className="mt-0.5 text-sky-500">✓</span>
                <span>{perk}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            {profile?.is_premium ? (
              // Déjà Premium
              <div className="rounded-2xl bg-sky-50 p-4 text-center text-sky-800">
                ✅ Tu es déjà membre Premium. Merci et bonne révision !
              </div>
            ) : profile ? (
              // Connecté mais pas encore Premium → bouton de paiement
              <CheckoutButton
                label={`Payer ${PREMIUM_PRICE_EUR}€ et débloquer`}
              />
            ) : (
              // Non connecté → invitation à créer un compte
              <div className="space-y-3 text-center">
                <p className="text-sm text-navy-500">
                  Crée un compte (gratuit) pour pouvoir passer Premium.
                </p>
                <Link href="/inscription" className="btn-primary w-full">
                  Créer un compte
                </Link>
                <Link
                  href="/connexion"
                  className="block text-sm font-medium text-navy-500 hover:text-navy-900"
                >
                  J'ai déjà un compte
                </Link>
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-xs text-navy-400">
            Paiement 100 % sécurisé par Stripe.
          </p>
        </div>
      </div>
    </div>
  );
}

function Banner({
  tone,
  children,
}: {
  tone: "success" | "warning";
  children: React.ReactNode;
}) {
  const styles =
    tone === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-800"
      : "border-amber-200 bg-amber-50 text-amber-800";
  return (
    <div className={`mx-auto mb-8 max-w-2xl rounded-2xl border p-4 text-center text-sm ${styles}`}>
      {children}
    </div>
  );
}
