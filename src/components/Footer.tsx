/**
 * Pied de page
 * ------------
 * Affiché en bas de toutes les pages.
 */
import Link from "next/link";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/nav";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-navy-100 bg-navy-50/50">
      <div className="container-page py-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-navy-500">
              La plateforme de révision du CRPE créée par Noa, admis au concours
              avec 16/20. Fiches, vidéos, méthodes et sujets blancs.
            </p>
          </div>

          {/* Liens de navigation */}
          <div>
            <h3 className="text-sm font-semibold text-navy-900">Navigation</h3>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-navy-500 hover:text-navy-900">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compte */}
          <div>
            <h3 className="text-sm font-semibold text-navy-900">Mon compte</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/connexion" className="text-sm text-navy-500 hover:text-navy-900">
                  Connexion
                </Link>
              </li>
              <li>
                <Link href="/inscription" className="text-sm text-navy-500 hover:text-navy-900">
                  Créer un compte
                </Link>
              </li>
              <li>
                <Link href="/soutenir" className="text-sm text-navy-500 hover:text-navy-900">
                  💛 Soutenir le projet
                </Link>
              </li>
              <li>
                <Link href="/recherche" className="text-sm text-navy-500 hover:text-navy-900">
                  Rechercher
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-navy-100 pt-6 text-center text-xs text-navy-400">
          © {year} CRPE avec Noa. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
