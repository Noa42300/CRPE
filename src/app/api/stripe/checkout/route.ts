/**
 * ROUTE API — Création d'une session de paiement Stripe
 * -----------------------------------------------------
 * Appelée quand l'utilisateur clique sur "Passer Premium".
 * Elle :
 *  1. vérifie que l'utilisateur est bien connecté
 *  2. crée une session Stripe Checkout (paiement unique)
 *  3. renvoie l'URL de paiement vers laquelle rediriger l'utilisateur
 */
import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { getStripe, isStripeConfigured, PREMIUM_PRICE_EUR } from "@/lib/stripe";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export async function POST() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  // 0. Vérifications de configuration
  if (!isSupabaseConfigured()) {
    return NextResponse.json(
      { error: "Connexion non configurée. Renseigne Supabase (voir README)." },
      { status: 400 }
    );
  }
  if (!isStripeConfigured()) {
    return NextResponse.json(
      { error: "Paiement non configuré. Renseigne Stripe (voir README)." },
      { status: 400 }
    );
  }

  // 1. Qui est connecté ?
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json(
      { error: "Tu dois être connecté pour passer Premium." },
      { status: 401 }
    );
  }

  // 2. Création de la session Stripe Checkout
  try {
    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "payment", // paiement UNIQUE (pas d'abonnement)
      payment_method_types: ["card"],
      line_items: [
        {
          quantity: 1,
          price_data: {
            currency: "eur",
            unit_amount: PREMIUM_PRICE_EUR * 100, // en centimes
            product_data: {
              name: "CRPE avec Noa — Accès Premium à vie",
              description:
                "Accès complet à toutes les fiches, vidéos, sujets blancs et méthodes.",
            },
          },
        },
      ],
      // On transmet l'identifiant de l'utilisateur pour le retrouver dans
      // le webhook et le passer en Premium après paiement.
      client_reference_id: user.id,
      customer_email: user.email,
      metadata: { user_id: user.id },
      success_url: `${siteUrl}/premium?success=1`,
      cancel_url: `${siteUrl}/premium?canceled=1`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Erreur Stripe Checkout:", err);
    return NextResponse.json(
      { error: "Impossible de créer la session de paiement." },
      { status: 500 }
    );
  }
}
