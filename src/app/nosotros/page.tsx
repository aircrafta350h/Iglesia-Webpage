import type { Metadata } from 'next';
import type { SectionConfig } from '@/lib/sectionTypes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBuilder from '@/components/layout/PageBuilder';

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'Conoce nuestra identidad, misión, visión y la historia de Sanctuary — un refugio para el alma.',
};

const SECTIONS: SectionConfig[] = [
  { type: 'nosotros-hero' },
  { type: 'mission-vision' },
  { type: 'doctrinal' },
  { type: 'historia' },
  { type: 'final-cta' },
];

export default function NosotrosPage() {
  return (
    <div className="bg-background text-on-surface font-body">
      <Navbar />
      <main className="pt-32">
        <PageBuilder sections={SECTIONS} />
      </main>
      <Footer />
    </div>
  );
}
