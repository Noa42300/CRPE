"use client";

/**
 * Bouton de paiement Premium
 * --------------------------
 * Au clic, il demande au serveur de créer une session Stripe Checkout,
 * puis redirige l'utilisateur vers la page de paiement sécurisée de Stripe.
 */
import { useState } from "react";

export function CheckoutButton({
  label = "Passer Premium",
  className = "btn-primary",
}: {
  label?: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleClick() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/stripe/checkout", { method: "POST" });
      const data = await res.json();

      if (!res.ok) {
        // Ex : utilisateur non connecté, ou Stripe non configuré.
        setError(data.error ?? "Une erreur est survenue.");
        setLoading(false);
        return;
      }

      // Redirection vers la page de paiement Stripe.
      window.location.href = data.url;
    } catch {
      setError("Impossible de contacter le serveur. Réessaie.");
      setLoading(false);
    }
  }

  return (
    <div className="w-full">
      <button onClick={handleClick} disabled={loading} className={`${className} w-full`}>
        {loading ? "Redirection..." : label}
      </button>
      {error && (
        <p className="mt-3 text-center text-sm text-rose-600">{error}</p>
      )}
    </div>
  );
}
