const FOOTER_LINKS = [
  { label: 'Privacidad', href: '/privacidad' },
  { label: 'Términos', href: '/terminos' },
  { label: 'Donar', href: '/donar' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Footer() {
  return (
    <footer className="w-full py-20 bg-[#dee1e5] border-t border-[#dee1e5]">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 max-w-screen-2xl mx-auto font-body text-sm tracking-wide gap-8 md:gap-0">
        <p className="text-[#4a4a4a]">
          &copy; 2024 Sanctuary. A space for contemplation.
        </p>

        <nav aria-label="Pie de página">
          <ul className="flex flex-wrap justify-center gap-8">
            {FOOTER_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[#6b6b6b] hover:text-[#1c1c1c] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
