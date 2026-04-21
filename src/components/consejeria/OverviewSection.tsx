import FeaturesGrid from './FeaturesGrid';

export default function OverviewSection() {
  return (
    <section
      className="px-8 md:px-16 py-24 bg-surface"
      aria-labelledby="overview-title"
    >
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left: text */}
        <div className="lg:col-span-5">
          <h2
            id="overview-title"
            className="text-3xl md:text-4xl font-headline font-bold tracking-tight mb-8"
          >
            El Camino hacia la Calma
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed mb-6 font-light">
            Nuestra consejería pastoral trasciende el asesoramiento tradicional.
            Integramos la sabiduría de la fe con el apoyo psicológico moderno
            para ofrecer un enfoque holístico del bienestar.
          </p>
          <p className="text-lg text-on-surface-variant leading-relaxed font-light">
            Aquí, no eres un caso clínico; eres una persona en búsqueda de
            propósito. Creamos un entorno de silencio y escucha profunda donde
            tus inquietudes encuentran un puerto seguro.
          </p>
        </div>

        {/* Right: feature cards */}
        <FeaturesGrid />
      </div>
    </section>
  );
}
