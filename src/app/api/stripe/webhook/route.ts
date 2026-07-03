/**
 * ROUTE API — Webhook Stripe (SÉCURISÉ)
 * -------------------------------------
 * Stripe appelle cette URL automatiquement APRÈS un paiement réussi.
 * On vérifie la signature (pour être sûr que c'est bien Stripe qui appelle),
 * puis on passe l'utilisateur concerné en Premium dans Supabase.
 *
 * ⚠️ Cette route utilise le client "admin" Supabase (clé service role) car
 * elle doit modifier la base SANS être connectée en tant qu'utilisateur.
 */
import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe } from "@/lib/stripe";
import { createAdminClient } from "@/lib/supabase/admin";

// Stripe a besoin du corps brut (non modifié) pour vérifier la signature.
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { error: "Webhook non configuré (STRIPE_WEBHOOK_SECRET manquant)." },
      { status: 400 }
    );
  }

  const signature = request.headers.get("stripe-signature");
  const body = await request.text(); // corps brut

  let event: Stripe.Event;
  try {
    const stripe = getStripe();
    // Vérification de la signature — étape de sécurité indispensable.
    event = stripe.webhooks.constructEvent(body, signature ?? "", webhookSecret);
  } catch (err) {
    console.error("Signature Stripe invalide:", err);
    return NextResponse.json({ error: "Signature invalide." }, { status: 400 });
  }

  // On ne s'intéresse qu'à l'événement "paiement terminé avec succès".
  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;

    // On récupère l'identifiant de l'utilisateur transmis à la création.
    const userId =
      session.client_reference_id ?? session.metadata?.user_id ?? null;

    if (userId) {
      try {
        const supabase = createAdminClient();
        // On passe le profil de l'utilisateur en Premium.
        const { error } = await supabase
          .from("profiles")
          .update({ is_premium: true })
          .eq("id", userId);

        if (error) {
          console.error("Erreur mise à jour Premium:", error);
          return NextResponse.json({ error: "Échec DB." }, { status: 500 });
        }
      } catch (err) {
        console.error("Erreur webhook Supabase:", err);
        return NextResponse.json({ error: "Erreur serveur." }, { status: 500 });
      }
    }
  }

  // On confirme la bonne réception à Stripe.
  return NextResponse.json({ received: true });
}
