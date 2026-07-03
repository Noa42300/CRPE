/**
 * En-tête de page de section
 * ---------------------------
 * Grand titre + sous-titre affiché en haut des pages de contenu
 * (Conseils, Épreuves écrites, etc.).
 */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="animate-fade-up border-b border-navy-100 bg-gradient-to-b from-navy-50/60 to-white">
      <div className="container-page py-14 sm:py-20">
        {eyebrow && (
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-sky-600">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-navy-900 sm:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-navy-500">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
