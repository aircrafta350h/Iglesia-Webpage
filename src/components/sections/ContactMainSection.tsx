/**
 * ContactMainSection — Server Component
 *
 * Wrapper that owns the 12-column two-column layout for the Contacto page.
 * Lives here (not in page.tsx) so it can be registered in PageBuilder while
 * keeping ContactForm (client), ContactInfo and MapSection (server) as siblings
 * inside the same responsive grid — which is not expressible as separate sections.
 */
import ContactForm from '@/components/sections/ContactForm';
import ContactInfo from '@/components/sections/ContactInfo';
import MapSection from '@/components/sections/MapSection';

export default function ContactMainSection() {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 md:px-12"
      aria-label="Formulario y datos de contacto"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        {/* Left — Contact Form (7 cols) · Client Component */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>

        {/* Right — Info cards + Map (5 cols) · Server Components */}
        <div className="lg:col-span-5 flex flex-col gap-12">
          <ContactInfo />
          <MapSection />
        </div>
      </div>
    </section>
  );
}
