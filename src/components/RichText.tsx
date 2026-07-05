/**
 * RichText
 * --------
 * Affiche un texte en convertissant les **doubles astérisques** en gras.
 * Simple et sûr : aucun HTML injecté, on découpe juste la chaîne.
 */
import { Fragment } from "react";

export function RichText({ text }: { text: string }) {
  // On découpe sur les **...** en gardant les délimiteurs.
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="font-semibold text-navy-900">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}
