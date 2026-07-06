/**
 * PAGE D'ACCUEIL
 * --------------
 * Première page du site. Contient :
 *  - le grand "hero" (titre + boutons)
 *  - la vidéo de présentation de Noa
 *  - les points forts de la plateforme
 *  - un aperçu de quelques ressources
 *  - un appel à l'action final
 *
 * Le site est 100% gratuit : aucun contenu n'est verrouillé.
 */
import Link from "next/link";
import { VideoEmbed } from "@/components/VideoEmbed";
import { ResourceCard } from "@/components/ResourceCard";
import { getAllResources } from "@/lib/resources";
import { CATEGORY_LABELS } from "@/lib/types";

export default async function HomePage() {
  const resources = await getAllResources();

  // Quelques ressources à mettre en avant.
  const highlights = resources.slice(0, 3);

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
            <p className="animate-fade-up mt-3 text-sm font-medium text-sky-600">
              100% gratuit — aucune inscription payante.
            </p>
            <div className="animate-fade-up mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link href="/fiches" className="btn-primary px-8 py-4 text-base">
                👉 Commencer à réviser
              </Link>
              <Link href="/recherche" className="btn-secondary px-8 py-4 text-base">
                Explorer les ressources
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
          {FEATURES.map((f) => {
            const inner = (
              <>
                <div className="text-3xl">{f.emoji}</div>
                <h3 className="mt-4 flex items-center gap-1.5 text-lg font-semibold text-navy-900">
                  {f.title}
                  {f.href && (
                    <span className="text-navy-300 transition group-hover:translate-x-0.5 group-hover:text-sky-500">
                      →
                    </span>
                  )}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-500">
                  {f.text}
                </p>
              </>
            );
            // Si la carte a un lien, elle devient cliquable.
            return f.href ? (
              <Link key={f.title} href={f.href} className="card card-hover group">
                {inner}
              </Link>
            ) : (
              <div key={f.title} className="card card-hover group">
                {inner}
              </div>
            );
          })}
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

      {/* ==================== 100% GRATUIT ==================== */}
      <section className="container-page py-12 sm:py-16">
        <div className="mx-auto max-w-2xl rounded-3xl border border-navy-100 bg-navy-50/50 p-8 text-center sm:p-12">
          <span className="text-3xl">💛</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Tout est 100% gratuit
          </h2>
          <p className="mt-3 text-navy-500">
            Toutes les fiches, vidéos, méthodes et sujets blancs sont accessibles
            librement, sans abonnement ni paiement. Si le projet t'aide, tu peux
            le soutenir — c'est totalement facultatif.
          </p>
          <Link href="/soutenir" className="btn-secondary mt-6">
            💛 Soutenir le projet
          </Link>
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
              <ResourceCard key={r.id} resource={r} />
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
            Toutes les ressources sont gratuites. Commence à réviser dès
            maintenant, sans inscription payante.
          </p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href="/fiches" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-base font-semibold text-navy-900 transition hover:bg-sky-50">
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
  { emoji: "📄", title: "Fiches claires", text: "42 fiches synthétiques prêtes à réviser. Clique pour les explorer.", href: "/fiches" },
  { emoji: "🎥", title: "Vidéos explicatives", text: "Des explications simples pour tout comprendre." },
  { emoji: "📝", title: "Sujets blancs", text: "Entraîne-toi dans les conditions du concours." },
  { emoji: "🧠", title: "Méthodologie", text: "Organisation, planning et gestion du stress." },
] as { emoji: string; title: string; text: string; href?: string }[];

const SECTIONS = [
  { href: "/fiches", category: "Fiches", title: "Fiches Français", text: "Grammaire, conjugaison, lexique et analyse." },
  { href: "/fiches?matiere=maths", category: "Fiches", title: "Fiches Maths", text: "Nombres, algèbre, géométrie, grandeurs." },
  { href: "/fiches?matiere=histoire", category: "Fiches", title: "Fiches Histoire", text: "Guerre froide, France, Europe, guerres mondiales." },
  { href: "/fiches?matiere=anglais", category: "Fiches", title: "Fiches Anglais", text: "Verbes, temps, vocabulaire, objectif B2." },
  { href: "/fiches?matiere=espagnol", category: "Fiches", title: "Fiches Espagnol", text: "Ser/estar, temps, vocabulaire, objectif B1." },
  { href: "/fiches?matiere=svt", category: "Fiches", title: "Fiches SVT", text: "Le vivant, le corps humain, génétique." },
  { href: "/fiches?matiere=physique-chimie", category: "Fiches", title: "Fiches Physique-Chimie", text: "Matière, énergie, électricité, forces." },
  { href: "/conseils", category: CATEGORY_LABELS.conseils, title: "Conseils de Noa", text: "Vidéos, textes et PDF de préparation." },
  { href: "/epreuves-ecrites", category: CATEGORY_LABELS.ecrites, title: "Épreuves écrites", text: "Français, maths, HG-EMC, arts, musique, langues." },
  { href: "/epreuves-orales", category: CATEGORY_LABELS.orales, title: "Épreuves orales", text: "Oral de leçon Français, EPS & Valeurs." },
  { href: "/methodologie", category: CATEGORY_LABELS.methodo, title: "Méthodologie", text: "Planning, méthodes de travail, stratégies." },
  { href: "/sujets-blancs", category: CATEGORY_LABELS["sujets-blancs"], title: "Sujets blancs", text: "Sujets + corrections + vidéos d'explication." },
  { href: "/recherche", category: "Recherche", title: "Tout explorer", text: "Cherche et filtre parmi toutes les ressources." },
];
