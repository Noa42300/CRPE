/**
 * Bouton « Télécharger en PDF » d'une fiche
 * -----------------------------------------
 * Lien de téléchargement vers un PDF statique servi depuis /public.
 * Convention de chemin (unique, centralisée ici) :
 *
 *     /fiches-pdf/<matiere>/<slug>.pdf
 *
 * Pour remplacer un PDF par la vraie fiche : il suffit de déposer le
 * fichier au bon emplacement dans public/fiches-pdf/<matiere>/ en
 * conservant le nom <slug>.pdf. Voir public/fiches-pdf/README.md.
 *
 * 100% HTML natif (attribut `download`) : aucune dépendance, compatible
 * avec l'export statique de Next.js / Vercel.
 */
export function FichePdfButton({
  matiere,
  slug,
  full = false,
}: {
  matiere: string;
  slug: string;
  full?: boolean;
}) {
  const href = `/fiches-pdf/${matiere}/${slug}.pdf`;
  return (
    <a
      href={href}
      download
      className={`inline-flex items-center justify-center gap-2 rounded-full border border-navy-200 bg-white px-4 py-2 text-sm font-semibold text-navy-700 shadow-sm transition-all hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 active:scale-[0.98] ${
        full ? "w-full" : ""
      }`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M12 3v12" />
        <path d="m7 10 5 5 5-5" />
        <path d="M5 21h14" />
      </svg>
      Télécharger en PDF
    </a>
  );
}
