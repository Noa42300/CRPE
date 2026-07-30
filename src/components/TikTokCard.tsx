/**
 * Carte de lien TikTok
 * --------------------
 * Petite carte cliquable, cohérente avec le design du site, qui redirige
 * vers une vidéo TikTok (ouverture dans un nouvel onglet). Remplace les
 * lecteurs vidéo intégrés (qualité trop dégradée).
 */
export function TikTokCard({
  href,
  title,
  subtitle,
}: {
  href: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="card card-hover group flex items-center gap-4 p-4"
    >
      {/* Pastille logo TikTok */}
      <span className="flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-navy-900 text-white shadow-sm">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 1 1-2.59-2.59c.27 0 .53.04.77.12V9.7a5.7 5.7 0 0 0-.77-.05 5.68 5.68 0 1 0 5.68 5.68V8.15a7.29 7.29 0 0 0 4.28 1.37V6.43a4.28 4.28 0 0 1-2.62-.61Z" />
        </svg>
      </span>

      <div className="min-w-0">
        <p className="font-semibold text-navy-900">{title}</p>
        {subtitle && <p className="mt-0.5 text-sm text-navy-500">{subtitle}</p>}
        <p className="mt-1 flex items-center gap-1 text-sm font-medium text-sky-600">
          Voir sur TikTok
          <span className="transition group-hover:translate-x-0.5">↗</span>
        </p>
      </div>
    </a>
  );
}
