import Image from 'next/image';

interface TimelineEntry {
  year: string;
  title: string;
  body: string;
  dotOpacity: string;
  image?: {
    src: string;
    alt: string;
  };
}

const TIMELINE: TimelineEntry[] = [
  {
    year: '2015',
    title: '2015: La Semilla',
    body: '1ra Iglesia Apostolica de Tonalá se fundó como un colectivo de estudio bíblico. Lo que empezó como conversaciones informales pronto se transformó en una comunidad que anhelaba algo más profundo.',
    dotOpacity: 'bg-primary',
  },
  {
    year: '2018',
    title: '2018: Primer Refugio',
    body: 'Abrimos nuestras puertas en el centro de la ciudad, restaurando un antiguo almacén para convertirlo en un espacio de paz. La arquitectura misma comenzó a reflejar nuestra teología de restauración.',
    dotOpacity: 'bg-primary/40',
  },
  {
    year: 'hoy',
    title: 'Hoy: Una Familia Global',
    body: 'Con miles de personas conectadas física y digitalmente, 1ra Iglesia Apostolica de Tonalá continúa explorando cómo la gracia de Dios puede iluminar cada rincón de la vida contemporánea.',
    dotOpacity: 'bg-primary/20',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAUaYQj-gGQW18Jh38-O_cQIcIXQpeZm05wzNqirzGuK3vgXId8fzXM2H7QJ-z6yMqqvz62EnAe2NrInQBibfppIVM0BJmrBLhva_ecRt6MEfQK4Bvx3dXtOrR6pCPTOs2TxMx1141hoa-OjXTRfoZW59FXAWk22q9X9ybtu4MbO8U5m1c9y3-wiIpyC_8pZQnE-0IdwF_6vNgXvJAytRY-L2ynvxxkdZgw_FVemu0opvNV8Yr60LN6ZP4MZa60LK3nj0wQqa_5sU',
      alt: 'Interior de iglesia minimalista moderno con líneas blancas y madera clara',
    },
  },
];

export default function HistoriaSection() {
  return (
    <section
      className="px-6 md:px-12 py-32 bg-surface-container overflow-hidden"
      aria-labelledby="historia-title"
    >
      <div className="max-w-screen-2xl mx-auto grid grid-cols-12 gap-8">

        {/* Left column — sticky image + intro */}
        <div className="col-span-12 md:col-span-5 relative">
          <div className="sticky top-40">
            <h2
              id="historia-title"
              className="font-headline text-5xl font-bold mb-8"
            >
              Nuestra Historia
            </h2>
            <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
              Comenzamos con un pequeño grupo de buscadores en una sala de
              estar, unidos por el deseo de encontrar una expresión de fe que
              fuera profunda, intelectualmente honesta y estéticamente
              inspiradora.
            </p>
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0h8Vf_TfBlxhJsbOZVDVzx9NI6QiFhazTWoWWXnLAUHymDrMUY2_-arohskHKbOiFIx28qJELrhUS0gUgcpZPwfoX5eVioeUNEDe5BmgOrSlPoASNHGyvi7v1bctWZVW_N25ffuCo0rM_ZtaxA8G0qMAoWpEZR0y9Hb7cE1ULYHQasWVoOVoLaOXfvoedJWM1W01KyDz78fQ5kYSSVaB58Caw0yiELvzunaTItItNfF14Hqj05nMrDKy-D-j_CwWTIMzf2mUgiQA"
                alt="Fotografía artística en blanco y negro de un pequeño grupo reunido alrededor de una mesa con una Biblia abierta y velas"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>

        {/* Right column — timeline */}
        <div className="col-span-12 md:col-start-7 md:col-span-6 space-y-32 pt-24 md:pt-48">
          {TIMELINE.map((entry) => (
            <div
              key={entry.year}
              className="relative pl-12 border-l-2 border-primary/20"
            >
              <span
                className={`absolute -left-3 top-0 w-6 h-6 ${entry.dotOpacity} rounded-full`}
                aria-hidden="true"
              />
              <h4 className="font-headline text-2xl font-bold mb-4">
                {entry.title}
              </h4>
              <p className="font-body text-on-surface-variant leading-relaxed">
                {entry.body}
              </p>

              {entry.image && (
                <div className="mt-12 relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src={entry.image.src}
                    alt={entry.image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
