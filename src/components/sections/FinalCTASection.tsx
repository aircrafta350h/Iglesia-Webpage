'use client';

export default function FinalCTASection() {
  return (
    <section
      className="px-6 md:px-12 py-60 text-center"
      aria-labelledby="cta-nosotros-title"
    >
      <div className="max-w-2xl mx-auto">
        <h2
          id="cta-nosotros-title"
          className="font-headline text-4xl font-bold mb-8"
        >
          Hay un lugar para ti.
        </h2>
        <p className="font-body text-on-surface-variant mb-12 text-lg">
          No importa dónde te encuentres en tu viaje espiritual, nuestras
          puertas están abiertas. Ven a experimentar la quietud.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button
            className="bg-primary text-on-primary px-10 py-4 rounded-full font-semibold hover:opacity-90 transition-all"
            onClick={() => console.log('Visítanos este domingo')}
          >
            Visítanos este domingo
          </button>
          <button
            className="bg-surface-container-low text-primary px-10 py-4 rounded-full font-semibold hover:bg-surface-container-high transition-all"
            onClick={() => console.log('Saber más sobre nosotros')}
          >
            Saber más sobre nosotros
          </button>
        </div>
      </div>
    </section>
  );
}
