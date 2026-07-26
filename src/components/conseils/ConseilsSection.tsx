"use client";

/**
 * Section « Tous les conseils que je peux te donner »
 * ---------------------------------------------------
 * Grande section textuelle affichée sous forme d'accordéons (cartes).
 * Chaque conseil s'ouvre / se ferme au clic. Design cohérent avec le
 * reste du site (navy / sky, cartes arrondies, ombres douces).
 */
import { useState } from "react";
import { RichText } from "@/components/RichText";
import { CONSEILS, type Conseil, type ConseilBlock } from "@/lib/conseils-data";

export function ConseilsSection() {
  // Le premier conseil est ouvert par défaut pour donner le ton.
  const [openId, setOpenId] = useState<string | null>(CONSEILS[0]?.id ?? null);

  return (
    <section className="container-page py-12">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <span className="badge border border-sky-200 bg-sky-100 text-sky-700">
            Retour d'expérience
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            Tous les conseils que je peux te donner
          </h2>
          <p className="mt-3 text-navy-500">
            Clique sur un conseil pour le déplier. Tout vient de mon expérience
            personnelle du concours.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4">
          {CONSEILS.map((conseil) => (
            <ConseilCard
              key={conseil.id}
              conseil={conseil}
              open={openId === conseil.id}
              onToggle={() =>
                setOpenId((prev) => (prev === conseil.id ? null : conseil.id))
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function ConseilCard({
  conseil,
  open,
  onToggle,
}: {
  conseil: Conseil;
  open: boolean;
  onToggle: () => void;
}) {
  const panelId = `conseil-panel-${conseil.id}`;
  const buttonId = `conseil-button-${conseil.id}`;

  return (
    <article
      className={`overflow-hidden rounded-3xl border bg-white shadow-card transition-all duration-200 ${
        open
          ? "border-sky-200 shadow-card-hover"
          : "border-navy-100 hover:border-sky-200"
      }`}
    >
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={open}
          aria-controls={panelId}
          className="flex w-full items-center gap-4 px-5 py-4 text-left sm:px-6"
        >
          <span
            className={`flex h-12 w-12 flex-none items-center justify-center rounded-2xl text-2xl transition-colors ${
              open ? "bg-sky-100" : "bg-navy-50"
            }`}
            aria-hidden
          >
            {conseil.emoji}
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-lg font-semibold tracking-tight text-navy-900">
              {conseil.titre}
            </span>
            <span className="mt-0.5 block text-sm leading-snug text-navy-500">
              {conseil.accroche}
            </span>
          </span>
          <svg
            className={`h-5 w-5 flex-none text-navy-400 transition-transform duration-200 ${
              open ? "rotate-180 text-sky-600" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </button>
      </h3>

      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t border-navy-100 px-5 pb-6 pt-4 sm:px-6"
        >
          <div className="flex flex-col gap-3 pl-0 sm:pl-16">
            {conseil.blocks.map((block, i) => (
              <ConseilBlockView key={i} block={block} />
            ))}
          </div>
        </div>
      )}
    </article>
  );
}

function ConseilBlockView({ block }: { block: ConseilBlock }) {
  if (block.type === "subheading") {
    return (
      <p className="mt-2 text-xs font-bold uppercase tracking-wider text-sky-600">
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    if (block.ordered) {
      return (
        <ol className="flex flex-col gap-1.5">
          {block.items.map((item, i) => (
            <li
              key={i}
              className="relative pl-7 text-[15px] leading-relaxed text-navy-700"
            >
              <span className="absolute left-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-[11px] font-bold text-sky-700">
                {i + 1}
              </span>
              <RichText text={item} />
            </li>
          ))}
        </ol>
      );
    }
    return (
      <ul className="flex flex-col gap-1.5">
        {block.items.map((item, i) => (
          <li
            key={i}
            className="relative pl-4 text-[15px] leading-relaxed text-navy-700"
          >
            <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-sky-500" />
            <RichText text={item} />
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p className="text-[15px] leading-relaxed text-navy-600">
      <RichText text={block.text} />
    </p>
  );
}
