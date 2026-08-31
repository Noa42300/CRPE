/**
 * Conteneur d'impression monté DIRECTEMENT dans <body> (via un portail), et non
 * dans l'arbre de l'application. Indispensable : à l'impression, `.app-shell`
 * passe en `display:none` ; si la zone d'impression était à l'intérieur, elle
 * serait masquée elle aussi. En la sortant de `.app-shell`, la fiche s'imprime
 * proprement, seule sur la page.
 */
import { createPortal } from "react-dom";
import type { ReactNode } from "react";

export function PrintPortal({ id, children }: { id: string; children: ReactNode }) {
  if (typeof document === "undefined") return null;
  return createPortal(
    <div id={id} className="print-area">{children}</div>,
    document.body,
  );
}
