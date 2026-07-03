/**
 * Configuration Stripe (paiement)
 * -------------------------------
 * Regroupe l'initialisation de Stripe côté serveur et le prix Premium.
 */
import Stripe from "stripe";

/** Prix du Premium en euros (modifiable via NEXT_PUBLIC_PREMIUM_PRICE_EUR). */
export const PREMIUM_PRICE_EUR = Number(
  process.env.NEXT_PUBLIC_PREMIUM_PRICE_EUR ?? "10"
);

/** true si les clés Stripe sont renseignées. */
export function isStripeConfigured(): boolean {
  return Boolean(process.env.STRIPE_SECRET_KEY);
}

/**
 * Renvoie une instance Stripe prête à l'emploi (côté serveur uniquement).
 * Lève une erreur claire si la clé secrète est absente.
 */
export function getStripe(): Stripe {
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    throw new Error(
      "Stripe non configuré : renseigne STRIPE_SECRET_KEY dans .env.local."
    );
  }
  // On ne fixe pas apiVersion : Stripe utilise la version de ton compte.
  return new Stripe(key);
}
