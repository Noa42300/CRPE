/**
 * Section de liens externes (sujets officiels, chaînes YouTube…)
 * -------------------------------------------------------------
 * Composant réutilisable qui affiche un titre et une liste de liens
 * externes présentés sous forme de cartes, dans le style du site.
 * Les liens s'ouvrent dans un nouvel onglet.
 */
import type { LinkGroup } from "@/lib/official-links";

export function LinksSection({
  title,
  description,
  groups,
}: {
  title: string;
  description?: string;
  groups: LinkGroup[];
}) {
  return (
    <section className="container-page py-10">
      <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-2xl text-navy-500">{description}</p>
      )}

      <div className="mt-6 space-y-8">
        {groups.map((group, i) => (
          <div key={i}>
            {group.heading && (
              <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-sky-600">
                {group.heading}
              </h3>
            )}
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {group.links.map((link) => (
                <a
                  key={link.url + link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card card-hover group flex items-start justify-between gap-3 p-4"
                >
                  <div>
                    <p className="font-semibold text-navy-900">{link.label}</p>
                    {link.note && (
                      <p className="mt-1 text-xs text-navy-400">{link.note}</p>
                    )}
                  </div>
                  <span className="mt-0.5 flex-none text-navy-300 transition group-hover:translate-x-0.5 group-hover:text-sky-500">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
