import Link from "next/link";

/** Logo texte du site (cliquable, ramène à l'accueil). */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`flex items-center gap-2 font-bold tracking-tight ${className}`}
    >
      {/* Petite pastille bleue avec les initiales */}
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-navy-900 text-sm font-bold text-white">
        N
      </span>
      <span className="text-lg text-navy-900">
        CRPE <span className="text-sky-500">avec Noa</span>
      </span>
    </Link>
  );
}
