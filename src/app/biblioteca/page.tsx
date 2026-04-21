import type { Metadata } from 'next';
import type { SectionConfig } from '@/lib/sectionTypes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBuilder from '@/components/layout/PageBuilder';

export const metadata: Metadata = {
  title: 'Biblioteca',
  description:
    'Un espacio curado de sabiduría, contemplación y enseñanzas diseñadas para nutrir el alma en su camino hacia lo divino.',
};

const SECTIONS: SectionConfig[] = [
  { type: 'biblioteca-hero' },
  { type: 'biblioteca-search' },
  { type: 'biblioteca-grid' },
  { type: 'biblioteca-newsletter' },
];

export default function BibliotecaPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="pt-32 pb-24">
        <PageBuilder sections={SECTIONS} />
      </main>
      <Footer />
    </div>
  );
}
