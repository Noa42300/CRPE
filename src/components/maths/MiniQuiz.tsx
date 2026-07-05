"use client";

/**
 * Mini-entraînement interactif
 * ----------------------------
 * Affiche les questions, puis révèle les corrections au clic
 * (la réponse n'est pas donnée immédiatement, comme demandé).
 */
import { useState } from "react";
import { RichText } from "@/components/RichText";
import type { Question } from "@/lib/maths-fiches/types";

export function MiniQuiz({ questions }: { questions: Question[] }) {
  const [show, setShow] = useState(false);

  return (
    <div>
      {/* Questions */}
      <ol className="flex flex-col gap-2.5">
        {questions.map((q, i) => (
          <li key={i} className="flex gap-3">
            <span className="flex h-7 w-7 flex-none items-center justify-center rounded-full bg-navy-900 text-sm font-bold text-white">
              {i + 1}
            </span>
            <span className="pt-0.5 text-[15px] leading-relaxed text-navy-800">
              <RichText text={q.question} />
            </span>
          </li>
        ))}
      </ol>

      {/* Bouton de correction */}
      <button
        onClick={() => setShow((v) => !v)}
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-navy-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-800"
        aria-expanded={show}
      >
        {show ? "Masquer la correction" : "✅ Afficher la correction"}
      </button>

      {/* Corrections */}
      {show && (
        <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4">
          <p className="mb-2 text-sm font-bold uppercase tracking-wide text-emerald-700">
            ✅ Correction
          </p>
          <ol className="flex flex-col gap-2">
            {questions.map((q, i) => (
              <li key={i} className="text-[15px] leading-relaxed text-navy-800">
                <span className="font-bold text-emerald-700">{i + 1}. </span>
                <RichText text={q.correction} />
              </li>
            ))}
          </ol>
        </div>
      )}
    </div>
  );
}
