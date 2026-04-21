interface DoctrinalPoint {
  number: string;
  title: string;
  description: string;
}

const POINTS: DoctrinalPoint[] = [
  {
    number: '01',
    title: 'Las Escrituras',
    description:
      'Creemos en la autoridad divina y la inspiración plena de la Biblia como guía única para la fe y la práctica.',
  },
  {
    number: '02',
    title: 'La Trinidad',
    description:
      'Un solo Dios, eternamente existente en tres personas: Padre, Hijo y Espíritu Santo, co-iguales en esencia.',
  },
  {
    number: '03',
    title: 'La Salvación',
    description:
      'Recibida únicamente por gracia a través de la fe en Jesucristo, independiente de las obras humanas.',
  },
  {
    number: '04',
    title: 'La Eternidad',
    description:
      'La promesa de una vida redimida y restaurada en la presencia de Dios para todos los que creen.',
  },
];

export default function DoctrinalSection() {
  return (
    <section
      className="px-6 md:px-12 py-40"
      aria-labelledby="doctrinal-title"
    >
      <div className="max-w-screen-2xl mx-auto">

        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-24 border-b border-outline-variant/10 pb-12">
          <h2
            id="doctrinal-title"
            className="font-headline text-5xl font-bold text-on-surface"
          >
            Puntos Doctrinales
          </h2>
          <p className="font-body text-on-surface-variant max-w-md mt-4 md:mt-0 italic">
            &ldquo;En lo esencial, unidad; en lo no esencial, libertad; en
            todo, caridad.&rdquo; — San Agustín
          </p>
        </div>

        {/* 4-column doctrine grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-x-8 gap-y-16">
          {POINTS.map((point) => (
            <div key={point.number} className="space-y-4">
              <span
                className="font-headline text-4xl text-outline-variant font-extralight block"
                aria-hidden="true"
              >
                {point.number}
              </span>
              <h3 className="font-headline text-xl font-bold uppercase tracking-widest text-primary">
                {point.title}
              </h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
