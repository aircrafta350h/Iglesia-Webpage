import Image from 'next/image';
import type { RelatedItem } from '@/lib/types/resource';

interface RelatedContentGridProps {
  items: RelatedItem[];
}

export default function RelatedContentGrid({ items }: RelatedContentGridProps) {
  return (
    <section
      className="max-w-6xl mx-auto px-6 mt-32"
      aria-labelledby="related-title"
    >
      <h4
        id="related-title"
        className="text-sm font-bold tracking-widest uppercase text-on-surface-variant mb-8 text-center font-label"
      >
        Profundizar en la Fe
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => {
          switch (item.type) {
            case 'article':
              return (
                <article
                  key={item.id}
                  className={`bg-surface-container-low p-8 rounded-xl flex flex-col justify-between aspect-video md:aspect-auto ${item.colSpan === 2 ? 'md:col-span-2' : ''}`}
                >
                  <div>
                    <span className="text-xs font-bold tracking-widest text-primary uppercase font-label">
                      {item.tag}
                    </span>
                    <h3 className="text-2xl font-bold mt-4 mb-4 font-headline">
                      {item.title}
                    </h3>
                    <p className="text-on-surface-variant max-w-md">
                      {item.description}
                    </p>
                  </div>
                  <a
                    href={item.href}
                    className="mt-8 flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300"
                  >
                    Leer artículo
                    <span className="material-symbols-outlined" aria-hidden="true">
                      north_east
                    </span>
                  </a>
                </article>
              );

            case 'audio':
              return (
                <div
                  key={item.id}
                  className="bg-secondary-container p-8 rounded-xl flex flex-col justify-between"
                >
                  <span
                    className="material-symbols-outlined text-secondary text-3xl block"
                    aria-hidden="true"
                  >
                    {item.icon}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mt-4 font-headline">
                      {item.title}
                    </h3>
                    <p className="text-on-secondary-container text-sm mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );

            case 'community':
              return (
                <div
                  key={item.id}
                  className="bg-surface-container-highest p-8 rounded-xl flex items-center justify-center text-center"
                >
                  <div>
                    <span
                      className="material-symbols-outlined text-4xl mb-4 block"
                      aria-hidden="true"
                    >
                      {item.icon}
                    </span>
                    <h3 className="text-lg font-bold font-headline">
                      {item.title}
                    </h3>
                    <p className="text-sm text-on-surface-variant mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );

            case 'image-card':
              return (
                <div
                  key={item.id}
                  className={`relative rounded-xl overflow-hidden min-h-[300px] ${item.colSpan === 2 ? 'md:col-span-2' : ''}`}
                >
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-end p-8">
                    <div className="text-white">
                      <h3 className="text-2xl font-bold font-headline">
                        {item.title}
                      </h3>
                      <p className="opacity-80">{item.description}</p>
                    </div>
                  </div>
                </div>
              );

            default:
              return null;
          }
        })}
      </div>
    </section>
  );
}
