interface Feature {
  icon: string;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: 'auto_awesome',
    title: 'Escucha Activa',
    description:
      'Presencia plena para validar tus sentimientos y experiencias sin juicios.',
  },
  {
    icon: 'spa',
    title: 'Paz Espiritual',
    description:
      'Herramientas contemplativas para reencontrar el equilibrio interior.',
  },
  {
    icon: 'favorite',
    title: 'Sanidad Emocional',
    description:
      'Acompañamiento en procesos de duelo, perdón y reconstrucción personal.',
  },
  {
    icon: 'psychology',
    title: 'Visión Integradora',
    description:
      'Puente entre la teología y la salud mental para una vida con sentido.',
  },
];

export default function FeaturesGrid() {
  return (
    <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
      {FEATURES.map((feature) => (
        <article
          key={feature.title}
          className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-shadow"
        >
          <span
            className="material-symbols-outlined text-primary mb-4 text-3xl block"
            aria-hidden="true"
          >
            {feature.icon}
          </span>
          <h3 className="font-headline font-semibold text-lg mb-2">
            {feature.title}
          </h3>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            {feature.description}
          </p>
        </article>
      ))}
    </div>
  );
}
