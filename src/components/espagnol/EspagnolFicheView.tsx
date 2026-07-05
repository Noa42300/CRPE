/**
 * Affichage complet d'une FICHE D'ESPAGNOL
 * ----------------------------------------
 * Même identité visuelle que l'anglais :
 * 🧠 À retenir · 📚 Explications (sections) · ⚠️ Attention
 */
import { RichText } from "@/components/RichText";
import { Bullets, DataTable, RetenirList, SectionCard } from "@/components/maths/boxes";
import { ESPAGNOL_META, type EspagnolFiche } from "@/lib/espagnol-fiches/types";

export function EspagnolFicheView({ fiche }: { fiche: EspagnolFiche }) {
  return (
    <article className="mx-auto max-w-3xl">
      {/* En-tête */}
      <span className={`badge border ${ESPAGNOL_META.pill}`}>
        {ESPAGNOL_META.emoji} {ESPAGNOL_META.label}
      </span>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {fiche.titre}
      </h1>
      <p className="mt-3 text-lg leading-relaxed text-navy-500">{fiche.intro}</p>

      <div className="mt-6 flex flex-col gap-5">
        {/* 🧠 À retenir */}
        <SectionCard theme="violet" icon="🧠" title="À retenir">
          <RetenirList items={fiche.retenir} />
        </SectionCard>

        {/* 📚 Explications, section par section */}
        {fiche.sections.map((s, i) => (
          <SectionCard key={i} theme="blue" icon="📚" title={s.titre}>
            <div className="flex flex-col gap-4">
              {s.points && s.points.length > 0 && <Bullets items={s.points} />}
              {s.tableau && <DataTable tableau={s.tableau} />}
              {s.exemples && s.exemples.length > 0 && (
                <div>
                  <p className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-amber-600">
                    ✍️ Exemples
                  </p>
                  <div className="flex flex-col gap-1 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
                    {s.exemples.map((ex, j) => (
                      <span key={j} className="text-sm text-navy-700">
                        <RichText text={ex} />
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </SectionCard>
        ))}

        {/* ⚠️ Attention (pièges) */}
        <SectionCard theme="red" icon="⚠️" title="Attention">
          <Bullets items={fiche.attention} />
        </SectionCard>
      </div>
    </article>
  );
}
