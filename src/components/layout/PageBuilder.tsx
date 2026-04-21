import { Fragment, type ReactElement } from 'react';
import type { SectionConfig, SectionType } from '@/lib/sectionTypes';

// ── Home ────────────────────────────────────────────────────────────────────
import HeroHome from '@/components/sections/HeroHome';

// ── Nosotros ────────────────────────────────────────────────────────────────
import HeroNosotros from '@/components/sections/HeroNosotros';
import MissionVisionSection from '@/components/sections/MissionVisionSection';
import DoctrinalSection from '@/components/sections/DoctrinalSection';
import HistoriaSection from '@/components/sections/HistoriaSection';
import FinalCTASection from '@/components/sections/FinalCTASection';

// ── Acompañamiento ──────────────────────────────────────────────────────────
import HeroSection from '@/components/sections/HeroSection';
import BentoGrid from '@/components/sections/BentoGrid';
import QuoteSection from '@/components/sections/QuoteSection';
import ContactSection from '@/components/sections/ContactSection';

// ── Acompañamiento / Consejería ─────────────────────────────────────────────
import HeroDetalle from '@/components/consejeria/HeroDetalle';
import OverviewSection from '@/components/consejeria/OverviewSection';
import ExpectativasSection from '@/components/consejeria/ExpectativasSection';
import CTASection from '@/components/consejeria/CTASection';

// ── Biblioteca ──────────────────────────────────────────────────────────────
import BibliotecaHero from '@/components/sections/BibliotecaHero';
import SearchFilterBar from '@/components/sections/SearchFilterBar';
import BibliotecaGrid from '@/components/sections/BibliotecaGrid';
import NewsletterSection from '@/components/sections/NewsletterSection';

// ── Actividades ─────────────────────────────────────────────────────────────
import ActividadesHero from '@/components/sections/ActividadesHero';
import ActividadesGrid from '@/components/sections/ActividadesGrid';
import ActividadesNewsletter from '@/components/sections/ActividadesNewsletter';

// ── Contacto ────────────────────────────────────────────────────────────────
import ContactHero from '@/components/sections/ContactHero';
import ContactMainSection from '@/components/sections/ContactMainSection';
import SocialSection from '@/components/sections/SocialSection';

/**
 * Registry: maps every section type string to a zero-argument render function.
 *
 * Rules:
 * - One entry per SectionType variant (TypeScript enforces exhaustiveness via Record)
 * - Sections that need 'use client' declare it internally — PageBuilder stays server-only
 * - Data-driven sections (biblioteca/[slug]) fetch their own data and bypass PageBuilder
 *
 * To add a section:
 * 1. Create the component
 * 2. Add the type to sectionTypes.ts
 * 3. Import and register it here
 */
const SECTION_REGISTRY: Record<SectionType, () => ReactElement> = {
  // Home
  'home-hero': () => <HeroHome />,

  // Nosotros
  'nosotros-hero': () => <HeroNosotros />,
  'mission-vision': () => <MissionVisionSection />,
  doctrinal: () => <DoctrinalSection />,
  historia: () => <HistoriaSection />,
  'final-cta': () => <FinalCTASection />,

  // Acompañamiento
  'acompanamiento-hero': () => <HeroSection />,
  'bento-grid': () => <BentoGrid />,
  quote: () => <QuoteSection />,
  'contact-cta': () => <ContactSection />,

  // Consejería
  'consejeria-hero': () => <HeroDetalle />,
  'consejeria-overview': () => <OverviewSection />,
  'consejeria-expectativas': () => <ExpectativasSection />,
  'consejeria-cta': () => <CTASection />,

  // Biblioteca
  'biblioteca-hero': () => <BibliotecaHero />,
  'biblioteca-search': () => <SearchFilterBar />,
  'biblioteca-grid': () => <BibliotecaGrid />,
  'biblioteca-newsletter': () => <NewsletterSection />,

  // Actividades
  'actividades-hero': () => <ActividadesHero />,
  'actividades-grid': () => <ActividadesGrid />,
  'actividades-newsletter': () => <ActividadesNewsletter />,

  // Contacto
  'contacto-hero': () => <ContactHero />,
  'contacto-main': () => <ContactMainSection />,
  'contacto-social': () => <SocialSection />,
};

interface PageBuilderProps {
  sections: SectionConfig[];
}

/**
 * Renders an ordered list of page sections from a config array.
 *
 * Server Component — 'use client' boundaries live inside individual sections,
 * never in PageBuilder itself. This keeps the page shell server-rendered.
 */
export default function PageBuilder({ sections }: PageBuilderProps) {
  return (
    <>
      {sections.map((section) => {
        const render = SECTION_REGISTRY[section.type];
        if (!render) return null;
        return <Fragment key={section.type}>{render()}</Fragment>;
      })}
    </>
  );
}
