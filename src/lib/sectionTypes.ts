/**
 * Discriminated union of all available page section types.
 *
 * HOW TO ADD A NEW SECTION
 * 1. Create the component in /components/sections/ (or /components/<feature>/)
 * 2. Add a new variant below
 * 3. Register it in PageBuilder's SECTION_REGISTRY
 *
 * CMS NOTE: Stateless sections (no external data) live here as bare `{ type }`.
 * Data-driven detail pages (e.g. biblioteca/[slug]) fetch their own data and
 * render components directly — they intentionally bypass PageBuilder.
 */
export type SectionConfig =
  // ── Home ──────────────────────────────────────────────────────────────────
  | { type: 'home-hero' }

  // ── Nosotros ──────────────────────────────────────────────────────────────
  | { type: 'nosotros-hero' }
  | { type: 'mission-vision' }
  | { type: 'doctrinal' }
  | { type: 'historia' }
  | { type: 'final-cta' }

  // ── Acompañamiento ────────────────────────────────────────────────────────
  | { type: 'acompanamiento-hero' }
  | { type: 'bento-grid' }
  | { type: 'quote' }
  | { type: 'contact-cta' }

  // ── Acompañamiento / Consejería ───────────────────────────────────────────
  | { type: 'consejeria-hero' }
  | { type: 'consejeria-overview' }
  | { type: 'consejeria-expectativas' }
  | { type: 'consejeria-cta' }

  // ── Biblioteca ────────────────────────────────────────────────────────────
  | { type: 'biblioteca-hero' }
  | { type: 'biblioteca-search' }
  | { type: 'biblioteca-grid' }
  | { type: 'biblioteca-newsletter' }

  // ── Actividades ───────────────────────────────────────────────────────────
  | { type: 'actividades-hero' }
  | { type: 'actividades-grid' }
  | { type: 'actividades-newsletter' }

  // ── Contacto ──────────────────────────────────────────────────────────────
  | { type: 'contacto-hero' }
  | { type: 'contacto-main' }
  | { type: 'contacto-social' };

/** Convenience alias for the type discriminant. */
export type SectionType = SectionConfig['type'];
