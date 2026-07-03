/**
 * PAGE 404 — Page introuvable
 */
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-page flex flex-col items-center py-32 text-center">
      <p className="text-6xl font-bold text-sky-500">404</p>
      <h1 className="mt-4 text-2xl font-bold text-navy-900">
        Cette page n'existe pas
      </h1>
      <p className="mt-2 max-w-md text-navy-500">
        Le lien est peut-être cassé, ou la page a été déplacée.
      </p>
      <Link href="/" className="btn-primary mt-8">
        Retour à l'accueil
      </Link>
    </div>
  );
}
