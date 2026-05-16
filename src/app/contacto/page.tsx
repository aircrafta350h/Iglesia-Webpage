import type { Metadata } from 'next';
import type { SectionConfig } from '@/lib/sectionTypes';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageBuilder from '@/components/layout/PageBuilder';

export const metadata: Metadata = {
  title: 'Contacto | 1ra Iglesia Apostolica de Tonalá',
  description:
    'Estamos aquí para escuchar y caminar contigo. Escríbenos o visítanos — somos una comunidad abierta.',
};

const SECTIONS: SectionConfig[] = [
  { type: 'contacto-hero' },
  { type: 'contacto-main' },
  { type: 'contacto-social' },
];

export default function ContactoPage() {
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
