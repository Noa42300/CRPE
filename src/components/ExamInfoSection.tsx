/**
 * Section explicative d'épreuves (CRPE)
 * -------------------------------------
 * Présente une ou plusieurs épreuves sous forme de cartes, avec des
 * "stats" (durée, coefficient, notation) et des listes explicatives.
 * Réutilise le style existant du site (cartes, badges).
 */

export interface ExamStat {
  label: string; // ex : "Durée", "Coefficient", "Notation"
  value: string; // ex : "4 h", "5", "/20"
}

export interface ExamBlock {
  heading?: string; // ex : "Contenu", "Domaines", "Niveau attendu"
  items: string[];
}

export interface ExamCard {
  titre: string;
  resume?: string;
  stats: ExamStat[];
  blocks: ExamBlock[];
}

export function ExamInfoSection({
  title,
  description,
  cards,
  columns = 2,
}: {
  title: string;
  description?: string;
  cards: ExamCard[];
  columns?: 1 | 2;
}) {
  return (
    <section className="container-page py-10">
      <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-3xl text-navy-500">{description}</p>
      )}

      <div
        className={`mt-6 grid gap-6 ${columns === 2 ? "lg:grid-cols-2" : ""}`}
      >
        {cards.map((card, i) => (
          <article key={i} className="card flex flex-col">
            <h3 className="text-lg font-semibold text-navy-900">{card.titre}</h3>
            {card.resume && (
              <p className="mt-1 text-sm leading-relaxed text-navy-500">
                {card.resume}
              </p>
            )}

            {/* Stats : durée / coefficient / notation */}
            {card.stats.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {card.stats.map((s) => (
                  <span
                    key={s.label}
                    className="inline-flex items-baseline gap-1.5 rounded-full border border-navy-100 bg-navy-50 px-3 py-1 text-sm"
                  >
                    <span className="text-navy-400">{s.label}</span>
                    <span className="font-semibold text-navy-900">{s.value}</span>
                  </span>
                ))}
              </div>
            )}

            {/* Blocs explicatifs */}
            <div className="mt-4 flex flex-col gap-4">
              {card.blocks.map((block, j) => (
                <div key={j}>
                  {block.heading && (
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-sky-600">
                      {block.heading}
                    </p>
                  )}
                  <ul className="flex flex-col gap-1.5">
                    {block.items.map((item, k) => (
                      <li
                        key={k}
                        className="relative pl-4 text-[15px] leading-relaxed text-navy-700"
                      >
                        <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
