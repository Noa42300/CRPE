/**
 * PAGE D'ACCUEIL
 * --------------
 * Première page du site. Contient :
 *  - le grand "hero" (titre + boutons)
 *  - la vidéo de présentation de Noa
 *  - les points forts de la plateforme
 *  - la comparaison Gratuit / Premium
 *  - un aperçu de quelques ressources
 *  - un appel à l'action final
 */
import Link from "next/link";
import { VideoEmbed } from "@/components/VideoEmbed";
import { ResourceCard } from "@/components/ResourceCard";
import { getAllResources } from "@/lib/resources";
import { isCurrentUserPremium } from "@/lib/auth";
import { PREMIUM_PRICE_EUR } from "@/lib/stripe";
import { CATEGORY_LABELS } from "@/lib/types";

export default async function HomePage() {
  const resources = await getAllResources();
  const hasAccess = await isCurrentUserPremium();

  // On sélectionne quelques ressources gratuites à mettre en avant.
  const highlights = resources.filter((r) => !r.is_premium).slice(0, 3);

  return (
    <div>
      {/* ============================= HERO ============================= */}
      <section className="relative overflow-hidden">
        {/* Dégradé décoratif en fond */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-sky-50 via-white to-white" />
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-sky-100 blur-3xl" />

        <div className="container-page relative py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <span className="badge animate-fade-in bg-navy-50 text-navy-700">
              🎓 Admis au CRPE avec 16/20
            </span>
            <h1 className="animate-fade-up mt-6 text-5xl font-bold tracking-tight text-navy-900 sm:text-6xl lg:text-7xl">
              CRPE <span className="text-sky-500">avec Noa</span>
            </h1>
            <p className="animate-fade-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-navy-500 sm:text-xl">
              Révise efficacement le CRPE grâce à des fiches, vidéos et méthodes
              issues de mon expérience personnelle (admis avec 16/20).
            </p>
            <div className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/inscription" className="btn-primary px-8 py-4 text-base">
                👉 Commencer
              </Link>
              <Link href="/premium" className="btn-secondary px-8 py-4 text-base">
                Découvrir le Premium — {PREMIUM_PRICE_EUR}€ à vie
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VIDÉO DE PRÉSENTATION ==================== */}
      <section className="container-page py-12 sm:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
              Bienvenue
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              Quelques mots de présentation
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-navy-600">
              <p>Bonjour, je m'appelle Noa, j'ai 21 ans.</p>
              <p>J'ai obtenu le CRPE avec la note de 16.</p>
              <p>
                Dans cette plateforme, je partage toutes mes méthodes, fiches et
                conseils pour t'aider à réussir le concours plus rapidement.
              </p>
            </div>
          </div>
          <VideoEmbed
            url="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Vidéo de présentation de Noa"
          />
        </div>
      </section>

      {/* ==================== POINTS FORTS ==================== */}
      <section className="container-page py-12 sm:py-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div key={f.title} className="card card-hover">
              <div className="text-3xl">{f.emoji}</div>
              <h3 className="mt-4 text-lg font-semibold text-navy-900">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-500">
                {f.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== EXPLORER LES SECTIONS ==================== */}
      <section className="container-page py-12 sm:py-16">
        <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          Tout ce dont tu as besoin pour réussir
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <Link key={s.href} href={s.href} className="card card-hover group flex items-center justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-wide text-sky-600">
                  {s.category}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-navy-900">
                  {s.title}
                </h3>
                <p className="mt-1 text-sm text-navy-500">{s.text}</p>
              </div>
              <span className="text-navy-300 transition group-hover:translate-x-1 group-hover:text-sky-500">
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ==================== GRATUIT / PREMIUM ==================== */}
      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Commence gratuitement, débloque tout quand tu veux
          </h2>
          <p className="mt-3 text-navy-500">
            Un seul paiement de {PREMIUM_PRICE_EUR}€, un accès à vie. Sans
            abonnement.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Carte Gratuit */}
          <div className="card flex flex-col">
            <h3 className="text-xl font-semibold text-navy-900">🔓 Gratuit</h3>
            <p className="mt-1 text-sm text-navy-500">Pour découvrir la plateforme.</p>
            <ul className="mt-6 space-y-3 text-sm text-navy-600">
              <Feature ok>Accès à des vidéos gratuites</Feature>
              <Feature ok>Certains conseils personnels</Feature>
              <Feature ok>Aperçu des fiches</Feature>
              <Feature ok>Création de compte</Feature>
              <Feature>Toutes les fiches et vidéos</Feature>
              <Feature>Sujets blancs complets</Feature>
              <Feature>Téléchargement PDF</Feature>
            </ul>
            <Link href="/inscription" className="btn-secondary mt-8 w-full">
              Créer un compte gratuit
            </Link>
          </div>

          {/* Carte Premium (mise en avant) */}
          <div className="card relative flex flex-col border-2 border-navy-900 bg-navy-900 text-white">
            <span className="absolute -top-3 right-6 badge bg-sky-400 text-navy-900">
              Recommandé
            </span>
            <h3 className="text-xl font-semibold">🔒 Premium</h3>
            <p className="mt-1 text-sm text-navy-200">
              {PREMIUM_PRICE_EUR}€ à vie — paiement unique.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-navy-100">
              <Feature ok light>Accès complet à toutes les fiches</Feature>
              <Feature ok light>Accès à toutes les vidéos</Feature>
              <Feature ok light>Tous les sujets blancs et corrections</Feature>
              <Feature ok light>Toutes les méthodes complètes</Feature>
              <Feature ok light>Téléchargement des PDF</Feature>
              <Feature ok light>Accès illimité, à vie</Feature>
            </ul>
            <Link
              href="/premium"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition hover:bg-sky-50"
            >
              Passer Premium
            </Link>
          </div>
        </div>
      </section>

      {/* ==================== APERÇU DES RESSOURCES ==================== */}
      {highlights.length > 0 && (
        <section className="container-page py-12 sm:py-16">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
              À découvrir gratuitement
            </h2>
            <Link href="/recherche" className="hidden text-sm font-semibold text-sky-600 hover:text-sky-700 sm:block">
              Tout voir →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((r) => (
              <ResourceCard key={r.id} resource={r} hasAccess={hasAccess} />
            ))}
          </div>
        </section>
      )}

      {/* ==================== APPEL À L'ACTION FINAL ==================== */}
      <section className="container-page py-16 sm:py-24">
        <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-8 py-16 text-center text-white sm:px-16">
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-sky-500/20 blur-3xl" />
          <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">
            Prêt à réussir le CRPE ?
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-navy-200">
            Rejoins la plateforme, commence gratuitement et passe Premium quand
            tu te sens prêt.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/inscription" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-navy-900 transition hover:bg-sky-50">
              👉 Commencer maintenant
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ------------------- Contenus de la page (faciles à modifier) -------------------
const FEATURES = [
  { emoji: "📄", title: "Fiches claires", text: "Des fiches synthétiques prêtes à réviser, en PDF." },
  { emoji: "🎥", title: "Vidéos explicatives", text: "Des explications simples pour tout comprendre." },
  { emoji: "📝", title: "Sujets blancs", text: "Entraîne-toi dans les conditions du concours." },
  { emoji: "🧠", title: "Méthodologie", text: "Organisation, planning et gestion du stress." },
];

const SECTIONS = [
  { href: "/conseils", category: CATEGORY_LABELS.conseils, title: "Conseils de Noa", text: "Vidéos, textes et PDF de préparation." },
  { href: "/epreuves-ecrites", category: CATEGORY_LABELS.ecrites, title: "Épreuves écrites", text: "Français, maths, HG-EMC, arts, musique, langues." },
  { href: "/epreuves-orales", category: CATEGORY_LABELS.orales, title: "Épreuves orales", text: "Oral de leçon Français, EPS & Valeurs." },
  { href: "/methodologie", category: CATEGORY_LABELS.methodo, title: "Méthodologie", text: "Planning, méthodes de travail, stratégies." },
  { href: "/sujets-blancs", category: CATEGORY_LABELS["sujets-blancs"], title: "Sujets blancs", text: "Sujets + corrections + vidéos d'explication." },
  { href: "/recherche", category: "Recherche", title: "Tout explorer", text: "Cherche et filtre parmi toutes les ressources." },
];

// Ligne de la liste de fonctionnalités (avec ✓ ou ✕).
function Feature({
  children,
  ok = false,
  light = false,
}: {
  children: React.ReactNode;
  ok?: boolean;
  light?: boolean;
}) {
  return (
    <li className="flex items-start gap-2.5">
      <span className={ok ? (light ? "text-sky-300" : "text-sky-500") : "text-navy-300"}>
        {ok ? "✓" : "✕"}
      </span>
      <span className={ok ? "" : "text-navy-400 line-through decoration-navy-200"}>
        {children}
      </span>
    </li>
  );
}
