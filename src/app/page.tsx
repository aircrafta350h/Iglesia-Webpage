import type { Metadata } from 'next';
import type { SectionConfig } from '@/lib/sectionTypes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBuilder from '@/components/layout/PageBuilder';

export const metadata: Metadata = {
  title: '1ra Iglesia Apostolica de Tonalá',
  description:
    'Un refugio para el alma. Un espacio de contemplación y comunidad donde la fe se vive con sencillez y profundidad.',
};

const SECTIONS: SectionConfig[] = [{ type: 'home-hero' }];

export default function HomePage() {
  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main>
        <PageBuilder sections={SECTIONS} />
      </main>
      <Footer />
    </div>
  );
}
