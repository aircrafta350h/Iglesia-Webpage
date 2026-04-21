import type { Metadata } from 'next';
import type { SectionConfig } from '@/lib/sectionTypes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBuilder from '@/components/layout/PageBuilder';

export const metadata: Metadata = {
  title: 'Acompañamiento',
  description:
    'Ministerios de acompañamiento espiritual, emocional y relacional para cada etapa de tu vida.',
};

const SECTIONS: SectionConfig[] = [
  { type: 'acompanamiento-hero' },
  { type: 'bento-grid' },
  { type: 'quote' },
  { type: 'contact-cta' },
];

export default function AcompanamientoPage() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24">
        <PageBuilder sections={SECTIONS} />
      </main>
      <Footer />
    </>
  );
}
