/**
 * BlockRenderer
 * -------------
 * Affiche un tableau de "blocs" (voir lib/sujets-blancs/types.ts) avec la
 * charte graphique du site. C'est le SEUL endroit qui décrit le rendu web
 * d'un bloc : sujet et correction partagent le même moteur d'affichage,
 * donc aucune duplication.
 */
import { RichText } from "@/components/RichText";
import { ILLUSTRATIONS, svgString } from "@/lib/sujets-blancs/illustrations";
import type { Block, NoteVariant } from "@/lib/sujets-blancs/types";

const NOTE_STYLES: Record<
  NoteVariant,
  { wrap: string; title: string; emoji: string; label: string }
> = {
  info: {
    wrap: "border-sky-200 bg-sky-50",
    title: "text-sky-800",
    emoji: "💡",
    label: "À noter",
  },
  methode: {
    wrap: "border-emerald-200 bg-emerald-50",
    title: "text-emerald-800",
    emoji: "🧭",
    label: "Méthode",
  },
  attendu: {
    wrap: "border-violet-200 bg-violet-50",
    title: "text-violet-800",
    emoji: "🎯",
    label: "Ce que le correcteur attend",
  },
  attention: {
    wrap: "border-rose-200 bg-rose-50",
    title: "text-rose-800",
    emoji: "⚠️",
    label: "Attention",
  },
};

function OneBlock({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="leading-relaxed text-navy-700">
          <RichText text={block.text} />
        </p>
      );

    case "consigne":
      return (
        <p className="rounded-2xl border border-navy-100 bg-navy-50/60 px-4 py-3 text-sm italic leading-relaxed text-navy-600">
          <RichText text={block.text} />
        </p>
      );

    case "document":
      return (
        <figure className="overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-sm">
          {block.titre && (
            <figcaption className="border-b border-navy-100 bg-navy-50 px-5 py-2.5 text-sm font-semibold text-navy-800">
              📄 {block.titre}
            </figcaption>
          )}
          <div className="space-y-3 px-5 py-4 text-[15px] leading-relaxed text-navy-700">
            {block.lines.map((line, i) => (
              <p key={i}>
                <RichText text={line} />
              </p>
            ))}
          </div>
          {block.source && (
            <p className="border-t border-navy-100 px-5 py-2 text-right text-xs italic text-navy-400">
              {block.source}
            </p>
          )}
        </figure>
      );

    case "figure": {
      const svg = svgString(block.illustration);
      const alt = ILLUSTRATIONS[block.illustration]?.alt ?? "Illustration";
      return (
        <figure className="overflow-hidden rounded-2xl border border-navy-200 bg-white shadow-sm">
          {block.titre && (
            <figcaption className="border-b border-navy-100 bg-navy-50 px-5 py-2.5 text-sm font-semibold text-navy-800">
              🖼️ {block.titre}
            </figcaption>
          )}
          <div className="flex justify-center bg-navy-50/40 p-4">
            {svg ? (
              <div
                role="img"
                aria-label={alt}
                className="w-full max-w-md [&>svg]:h-auto [&>svg]:w-full [&>svg]:rounded-lg"
                dangerouslySetInnerHTML={{ __html: svg }}
              />
            ) : (
              <p className="text-sm text-navy-400">{alt}</p>
            )}
          </div>
          {block.legende && (
            <p className="px-5 py-2 text-center text-sm text-navy-600">
              {block.legende}
            </p>
          )}
          {block.source && (
            <p className="border-t border-navy-100 px-5 py-2 text-right text-xs italic text-navy-400">
              {block.source}
            </p>
          )}
        </figure>
      );
    }

    case "questions":
      return (
        <ol className="space-y-3">
          {block.items.map((q, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-0.5 shrink-0 font-semibold text-sky-600">
                {q.num}
              </span>
              <span className="flex-1 leading-relaxed text-navy-700">
                <RichText text={q.text} />
                {typeof q.points === "number" && (
                  <span className="ml-2 whitespace-nowrap rounded-full bg-navy-50 px-2 py-0.5 text-xs font-medium text-navy-400">
                    {q.points} pt{q.points > 1 ? "s" : ""}
                  </span>
                )}
              </span>
            </li>
          ))}
        </ol>
      );

    case "list":
      return block.ordered ? (
        <ol className="ml-5 list-decimal space-y-1.5 text-navy-700 marker:text-navy-400">
          {block.items.map((it, i) => (
            <li key={i} className="leading-relaxed">
              <RichText text={it} />
            </li>
          ))}
        </ol>
      ) : (
        <ul className="ml-5 list-disc space-y-1.5 text-navy-700 marker:text-sky-400">
          {block.items.map((it, i) => (
            <li key={i} className="leading-relaxed">
              <RichText text={it} />
            </li>
          ))}
        </ul>
      );

    case "table":
      return (
        <div className="overflow-x-auto">
          {block.titre && (
            <p className="mb-2 text-sm font-semibold text-navy-800">
              {block.titre}
            </p>
          )}
          <table className="w-full border-collapse overflow-hidden rounded-xl text-sm">
            <thead>
              <tr className="bg-navy-900 text-white">
                {block.entetes.map((h, i) => (
                  <th
                    key={i}
                    className="border border-navy-800 px-3 py-2 text-left font-semibold"
                  >
                    <RichText text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.lignes.map((row, ri) => (
                <tr key={ri} className={ri % 2 ? "bg-navy-50/50" : "bg-white"}>
                  {row.map((cell, ci) => (
                    <td
                      key={ci}
                      className="border border-navy-100 px-3 py-2 align-top text-navy-700"
                    >
                      <RichText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "note": {
      const s = NOTE_STYLES[block.variant];
      return (
        <div className={`rounded-2xl border px-5 py-4 ${s.wrap}`}>
          <p className={`mb-1.5 text-sm font-bold ${s.title}`}>
            {s.emoji} {block.titre ?? s.label}
          </p>
          <div className="space-y-2 text-[15px] leading-relaxed text-navy-700">
            {block.lines.map((line, i) => (
              <p key={i}>
                <RichText text={line} />
              </p>
            ))}
          </div>
        </div>
      );
    }

    case "qa":
      return (
        <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-sm">
          <p className="flex gap-2 font-semibold text-navy-900">
            {block.num && <span className="text-sky-600">{block.num}</span>}
            <span className="flex-1">
              <RichText text={block.question} />
            </span>
            {typeof block.points === "number" && (
              <span className="whitespace-nowrap rounded-full bg-navy-50 px-2 py-0.5 text-xs font-medium text-navy-400">
                {block.points} pt{block.points > 1 ? "s" : ""}
              </span>
            )}
          </p>
          <div className="mt-3 space-y-2.5 border-l-2 border-sky-200 pl-4 text-[15px] leading-relaxed text-navy-700">
            {block.reponse.map((line, i) => (
              <p key={i}>
                <RichText text={line} />
              </p>
            ))}
          </div>
          {block.attendu && (
            <div className="mt-3 rounded-xl border border-violet-200 bg-violet-50 px-4 py-2.5 text-sm text-violet-900">
              <span className="font-semibold">🎯 Attendu du correcteur — </span>
              <RichText text={block.attendu} />
            </div>
          )}
        </div>
      );
  }
}

export function BlockRenderer({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-4">
      {blocks.map((b, i) => (
        <OneBlock key={i} block={b} />
      ))}
    </div>
  );
}
