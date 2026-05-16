import type { Metadata } from 'next';
import type { SectionConfig } from '@/lib/sectionTypes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBuilder from '@/components/layout/PageBuilder';

export const metadata: Metadata = {
  title: 'Actividades | 1ra Iglesia Apostolica de Tonalá',
  description:
    'Nuestra agenda está diseñada para ofrecer refugio, crecimiento espiritual y comunidad. Encuentra tu lugar en nuestras reuniones semanales.',
};

const SECTIONS: SectionConfig[] = [
  { type: 'actividades-hero' },
  { type: 'actividades-grid' },
  { type: 'actividades-newsletter' },
];

export default function ActividadesPage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="pt-32 pb-20">
        <PageBuilder sections={SECTIONS} />
      </main>
      <Footer />
    </div>
  );
}
