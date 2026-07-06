/**
 * PAGE — SOUTENIR LE PROJET
 * Le site est 100% gratuit. Cette page propose un don volontaire via Tipeee.
 *
 * 👉 Pour mettre TON lien Tipeee : remplace la valeur de TIPEEE_URL ci-dessous
 *    (ou définis la variable NEXT_PUBLIC_TIPEEE_URL dans Vercel).
 */
import type { Metadata } from "next";
import Link from "next/link";

// Lien Tipeee (modifiable ici ou via la variable d'environnement).
const TIPEEE_URL =
  process.env.NEXT_PUBLIC_TIPEEE_URL ?? "https://fr.tipeee.com/";

export const metadata: Metadata = {
  title: "Soutenir le projet",
  description:
    "CRPE avec Noa est 100% gratuit. Si le projet t'aide, tu peux le soutenir librement via Tipeee.",
};

export default function SoutenirPage() {
  return (
    <div className="container-page py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <span className="badge bg-navy-50 text-navy-700">💛 Merci</span>
        <h1 className="mt-6 text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          Soutenir le projet
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-navy-500">
          CRPE avec Noa est, et restera, <strong className="text-navy-900">100% gratuit</strong>.
          Toutes les fiches, vidéos et méthodes sont accessibles librement, sans
          abonnement ni contenu verrouillé.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-navy-500">
          Créer et maintenir la plateforme demande du temps. Si elle t'aide dans
          ta préparation, tu peux soutenir le projet par un petit don — c'est
          entièrement <strong className="text-navy-900">facultatif</strong> et ça n'ouvre aucun
          avantage particulier : tout le monde a déjà accès à tout.
        </p>

        {/* Carte de don */}
        <div className="mx-auto mt-10 max-w-md rounded-3xl border border-navy-100 bg-white p-8 shadow-card">
          <p className="text-sm text-navy-500">Un coup de pouce, si le cœur t'en dit :</p>
          <a
            href={TIPEEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4 w-full px-8 py-4 text-base"
          >
            💛 Soutenir sur Tipeee
          </a>
          <p className="mt-4 text-xs text-navy-400">
            Tu seras redirigé vers Tipeee. Aucun paiement n'a lieu sur ce site.
          </p>
        </div>

        {/* Remerciement */}
        <p className="mt-10 text-navy-600">
          Un immense merci à toutes les personnes qui font vivre ce projet.
          Bonne révision et bon courage pour le CRPE ! 🎓
        </p>

        <div className="mt-8">
          <Link href="/fiches" className="btn-secondary">
            Retour aux fiches
          </Link>
        </div>
      </div>
    </div>
  );
}
