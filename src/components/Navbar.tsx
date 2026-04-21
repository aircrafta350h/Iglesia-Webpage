'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Biblioteca', href: '/biblioteca' },
  { label: 'Actividades', href: '/actividades' },
  { label: 'Acompañamiento', href: '/acompanamiento' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <nav
      className="fixed top-0 w-full z-50 bg-white/75 backdrop-blur-xl border-b border-[#dee1e5]/60"
      aria-label="Navegación principal"
    >
      <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-screen-2xl mx-auto font-headline tracking-tight">
        {/* Logo */}
        <a
          href="/"
          className="text-xl font-bold tracking-tighter text-[#1c1c1c]"
          aria-label="Sanctuary — Inicio"
        >
          Sanctuary
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center space-x-8" role="list">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              role="listitem"
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={
                isActive(link.href)
                  ? 'text-[#1c1c1c] border-b border-[#004154] pb-1 transition-colors duration-300'
                  : 'text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors duration-300'
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-4">
          <button className="bg-primary hover:opacity-90 text-on-primary px-8 py-2.5 rounded-full font-medium transition-all duration-300">
            Step Inside
          </button>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label={mobileOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span
              className={`block w-6 h-0.5 bg-[#1c1c1c] transition-transform duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1c1c1c] transition-opacity duration-300 ${mobileOpen ? 'opacity-0' : ''}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[#1c1c1c] transition-transform duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl px-6 pb-6 flex flex-col gap-4 border-t border-[#dee1e5]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={isActive(link.href) ? 'page' : undefined}
              className={
                isActive(link.href)
                  ? 'text-[#1c1c1c] font-semibold py-2 border-b border-[#dee1e5]'
                  : 'text-[#6b6b6b] py-2 border-b border-[#dee1e5]'
              }
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
