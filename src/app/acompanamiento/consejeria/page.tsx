import type { Metadata } from 'next';
import type { SectionConfig } from '@/lib/sectionTypes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBuilder from '@/components/layout/PageBuilder';

export const metadata: Metadata = {
  title: 'Consejería Pastoral | Sanctuary',
  description:
    'Un espacio sagrado para el acompañamiento emocional, el crecimiento espiritual y la sanidad interior.',
};

const SECTIONS: SectionConfig[] = [
  { type: 'consejeria-hero' },
  { type: 'consejeria-overview' },
  { type: 'consejeria-expectativas' },
  { type: 'consejeria-cta' },
];

export default function ConsejeriaPastoralPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="pt-20">
        <PageBuilder sections={SECTIONS} />
      </main>
      <Footer />
    </div>
  );
}
