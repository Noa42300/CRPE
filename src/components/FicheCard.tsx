/**
 * Carte d'une FICHE CLAIRE
 * ------------------------
 * Affiche une fiche complète avec ses 5 rubriques, chacune identifiée
 * par une couleur (comme un code couleur de révision) :
 *  - Définition (indigo) · Points clés (émeraude) · Exemple (ambre)
 *  - Pièges CRPE (rose) · À retenir (violet)
 */
import { RichText } from "./RichText";
import { FICHE_BLOCS, type Fiche } from "@/lib/fiches-data";

export function FicheCard({ fiche, numero }: { fiche: Fiche; numero: number }) {
  const bloc = FICHE_BLOCS[fiche.bloc];

  return (
    <article className="mb-6 break-inside-avoid rounded-3xl border border-navy-100 bg-white p-5 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
      {/* En-tête : bloc + numéro */}
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className={`badge border ${bloc.pill}`}>{bloc.label}</span>
        <span className="text-xs font-medium tabular-nums text-navy-400">
          Fiche {String(numero).padStart(2, "0")}
        </span>
      </div>

      <h3 className="mb-4 text-xl font-semibold tracking-tight text-navy-900">
        {fiche.titre}
      </h3>

      {/* Définition */}
      <Rubric label="Définition" color="indigo">
        <p className="text-[15px] leading-relaxed text-navy-600">
          <RichText text={fiche.definition} />
        </p>
      </Rubric>

      {/* Points clés */}
      <Rubric label="Points clés" color="emerald">
        <ul className="space-y-1.5">
          {fiche.points.map((p, i) => (
            <li key={i} className="relative pl-4 text-[15px] leading-relaxed text-navy-700">
              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <RichText text={p} />
            </li>
          ))}
        </ul>
      </Rubric>

      {/* Exemple */}
      <Rubric label="Exemple" color="amber">
        <div className="flex flex-col gap-0.5 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2">
          {fiche.exemple.map((line, i) => (
            <span
              key={i}
              className={`text-sm ${
                i === 0 && fiche.exemple.length > 1
                  ? "italic text-navy-800"
                  : "text-navy-600"
              }`}
            >
              <RichText text={line} />
            </span>
          ))}
        </div>
      </Rubric>

      {/* Pièges CRPE */}
      <Rubric label="Pièges CRPE" color="rose">
        <ul className="space-y-1.5">
          {fiche.pieges.map((p, i) => (
            <li key={i} className="relative pl-4 text-[15px] leading-relaxed text-navy-700">
              <span className="absolute left-0 top-0 font-bold text-rose-500">!</span>
              <RichText text={p} />
            </li>
          ))}
        </ul>
      </Rubric>

      {/* À retenir */}
      <div className="mt-4 rounded-xl border border-violet-200 bg-violet-50 px-3 py-2.5">
        <RubricLabel label="À retenir" color="violet" />
        <p className="mt-1 text-[15px] font-medium leading-relaxed text-navy-800">
          <RichText text={fiche.retenir} />
        </p>
      </div>
    </article>
  );
}

// Couleurs des étiquettes de rubriques (classes Tailwind figées).
const LABEL_COLORS = {
  indigo: "text-indigo-600",
  emerald: "text-emerald-600",
  amber: "text-amber-600",
  rose: "text-rose-600",
  violet: "text-violet-600",
} as const;

type RubricColor = keyof typeof LABEL_COLORS;

function RubricLabel({ label, color }: { label: string; color: RubricColor }) {
  return (
    <span className={`text-[11px] font-bold uppercase tracking-wider ${LABEL_COLORS[color]}`}>
      {label}
    </span>
  );
}

function Rubric({
  label,
  color,
  children,
}: {
  label: string;
  color: RubricColor;
  children: React.ReactNode;
}) {
  return (
    <div className="mt-3">
      <div className="mb-1">
        <RubricLabel label={label} color={color} />
      </div>
      {children}
    </div>
  );
}
