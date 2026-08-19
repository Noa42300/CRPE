"use client";

/**
 * Barre de navigation
 * -------------------
 * Affichée en haut de toutes les pages. Gère le menu principal
 * (bureau + mobile) et l'accès à la recherche.
 */
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/lib/nav";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // menu mobile ouvert ?

  return (
    <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/80 backdrop-blur-md">
      <nav className="container-page flex h-16 items-center justify-between">
        <Logo />

        {/* ---------- Menu bureau ---------- */}
        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-navy-50 text-navy-900"
                    : "text-navy-600 hover:bg-navy-50 hover:text-navy-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* ---------- Actions à droite (bureau) ---------- */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/recherche" aria-label="Rechercher" className="rounded-full p-2 text-navy-600 hover:bg-navy-50">
            <SearchIcon />
          </Link>
          <Link href="/soutenir" className="btn-primary px-5 py-2">
            💛 Soutenir
          </Link>
        </div>

        {/* ---------- Bouton menu mobile ---------- */}
        <button
          className="rounded-lg p-2 text-navy-900 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Ouvrir le menu"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* ---------- Menu mobile déroulant ---------- */}
      {open && (
        <div className="border-t border-navy-100 bg-white lg:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-navy-700 hover:bg-navy-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/recherche"
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-medium text-navy-700 hover:bg-navy-50"
            >
              Rechercher
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// ------------------- Petites icônes (SVG, aucune dépendance) -------------------
function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="4" y1="7" x2="20" y2="7" />
      <line x1="4" y1="12" x2="20" y2="12" />
      <line x1="4" y1="17" x2="20" y2="17" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}
