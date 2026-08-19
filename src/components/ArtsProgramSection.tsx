/**
 * Section « Œuvres à étudier — CRPE 2027 »
 * ----------------------------------------
 * Présente le programme limitatif du domaine Arts (programme complémentaire)
 * applicable aux sessions 2027, 2028 et 2029 du CRPE, en trois cartes :
 * arts plastiques, éducation musicale et histoire des arts.
 *
 * Contenu vérifié à partir des programmes officiels des concours externes de
 * recrutement de professeurs des écoles (Bulletin officiel / Éducation
 * nationale — devenirenseignant.gouv.fr).
 * Design cohérent avec le reste de la page « Épreuves écrites ».
 */

interface OeuvreMusicale {
  auteur: string;
  titre: string;
  date: string;
  lien: string; // pourquoi l'œuvre illustre « Le paysage en musique »
}

interface ArtCard {
  emoji: string;
  domaine: string;
  questionnement: string;
  refTitre: string; // "Repères bibliographiques" ou "Œuvres de référence"
  references?: string[];
  oeuvres?: OeuvreMusicale[];
  pill: string;
}

const ARTS_CARDS: ArtCard[] = [
  {
    emoji: "🎨",
    domaine: "Arts plastiques",
    questionnement: "Questionner la ressemblance (peinture, sculpture, photographie)",
    refTitre: "Repères bibliographiques",
    pill: "bg-rose-100 text-rose-700 border-rose-200",
    references: [
      "Aumont Jacques, L'image. Peinture, photographie, cinéma : des origines à l'ère numérique, Paris, Armand Colin, 4ᵉ édition, 2020.",
      "Chalumeau Jean-Luc, L'art contemporain, collection Uppr, en ligne.",
      "Fozza Jean-Claude & Garrat Anne-Marie, La petite fabrique de l'image, Paris, Magnard, 2024.",
      "Banques d'images en ligne : Gallica, RMN, Musée du Louvre, Centre Pompidou.",
    ],
  },
  {
    emoji: "🎵",
    domaine: "Éducation musicale",
    questionnement: "Le paysage en musique",
    refTitre: "Œuvres de référence",
    pill: "bg-violet-100 text-violet-700 border-violet-200",
    oeuvres: [
      {
        auteur: "Antonio Vivaldi",
        titre: "L'été, extrait du Concerto en sol mineur op. 8, RV 315, 3ᵉ mouvement",
        date: "1725",
        lien: "Le 3ᵉ mouvement dépeint un violent orage d'été : la musique évoque directement un paysage naturel et ses éléments (vent, pluie, tonnerre).",
      },
      {
        auteur: "Bedřich Smetana",
        titre: "La Moldau, extrait de Ma patrie",
        date: "1874",
        lien: "Ce poème symphonique suit le cours de la rivière Moldau à travers les paysages de Bohême, de sa source jusqu'à Prague.",
      },
      {
        auteur: "Claude Nougaro",
        titre: "Toulouse, extrait de l'album Le Chanteur",
        date: "1967",
        lien: "La chanson dresse le portrait sensible de la ville de Toulouse : un paysage urbain évoqué par le texte et la musique.",
      },
    ],
  },
  {
    emoji: "🖼️",
    domaine: "Histoire des arts",
    questionnement: "La représentation de l'être humain",
    refTitre: "Repères bibliographiques",
    pill: "bg-amber-100 text-amber-700 border-amber-200",
    references: [
      "Ardenne Paul, L'image-corps : figures de l'humain dans l'art du XXᵉ siècle, Paris, éditions du Regard : Seuil, 2001.",
      "Martinez Jean-Luc, Praxitèle, album de l'exposition organisée par le musée du Louvre et la Réunion des musées nationaux, Paris, musée du Louvre, Somogy, 2007.",
      "Laneyrie-Dagen Nadeije, L'invention du corps : la représentation de l'homme du Moyen Âge à la fin du XIXᵉ siècle, Paris, Flammarion, 2006.",
    ],
  },
];

export function ArtsProgramSection() {
  return (
    <section className="container-page py-10">
      <h2 className="text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
        Œuvres à étudier — CRPE 2027
      </h2>
      <p className="mt-2 max-w-3xl text-navy-500">
        Programme complémentaire (limitatif) du domaine Arts à connaître pour
        l'épreuve de polyvalence, applicable aux sessions{" "}
        <strong className="font-semibold text-navy-700">2027, 2028 et 2029</strong>.
        Trois questionnements, un par domaine artistique.
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        {ARTS_CARDS.map((card) => (
          <article key={card.domaine} className="card flex flex-col">
            {/* En-tête de la carte */}
            <div className="flex items-center gap-2">
              <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border text-xl ${card.pill}`}
                aria-hidden
              >
                {card.emoji}
              </span>
              <h3 className="text-lg font-semibold text-navy-900">
                {card.domaine}
              </h3>
            </div>

            {/* Questionnement */}
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-sky-600">
              Questionnement
            </p>
            <p className="mt-1 rounded-xl border border-navy-100 bg-navy-50 px-3 py-2 text-[15px] font-medium leading-relaxed text-navy-800">
              «&nbsp;{card.questionnement}&nbsp;»
            </p>

            {/* Références / œuvres */}
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-sky-600">
              {card.refTitre}
            </p>

            {card.oeuvres && (
              <ul className="mt-2 flex flex-col gap-3">
                {card.oeuvres.map((o, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-navy-100 bg-white px-3 py-2"
                  >
                    <p className="text-[15px] leading-snug text-navy-800">
                      <span className="font-semibold">{o.auteur}</span>,{" "}
                      <em>{o.titre}</em>{" "}
                      <span className="text-navy-400">({o.date})</span>
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-navy-500">
                      {o.lien}
                    </p>
                  </li>
                ))}
              </ul>
            )}

            {card.references && (
              <ul className="mt-2 flex flex-col gap-2">
                {card.references.map((ref, i) => (
                  <li
                    key={i}
                    className="relative pl-4 text-sm leading-relaxed text-navy-600"
                  >
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-sky-500" />
                    {ref}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </div>

      <p className="mt-4 text-xs text-navy-400">
        Source : programme des épreuves des concours externes de recrutement de
        professeurs des écoles (Bulletin officiel — Éducation nationale). Ce
        programme complémentaire s'applique aux sessions 2027, 2028 et 2029.
      </p>
    </section>
  );
}
