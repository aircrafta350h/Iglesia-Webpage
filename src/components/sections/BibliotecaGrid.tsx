import Image from 'next/image';
import {
  FEATURED_RESOURCE,
  SIDE_RESOURCE,
  MEDIA_CARDS,
} from '@/lib/bibliotecaData';

export default function BibliotecaGrid() {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8"
      aria-label="Recursos de la biblioteca"
    >

      {/* ── Featured card (col-span-8) ── */}
      <article className="md:col-span-8 group cursor-pointer">
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-surface-container transition-all duration-[400ms] ease-in-out group-hover:-translate-y-1">
          <Image
            src={FEATURED_RESOURCE.image.src}
            alt={FEATURED_RESOURCE.image.alt}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 66vw"
            className="object-cover opacity-90 transition-all duration-[400ms] ease-in-out group-hover:scale-105"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-on-background/60 via-transparent to-transparent" />

          {/* Text overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-primary-container text-on-primary-container text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                {FEATURED_RESOURCE.badge}
              </span>
              <span className="text-white/80 text-sm font-label flex items-center gap-1">
                <span
                  className="material-symbols-outlined text-sm"
                  aria-hidden="true"
                >
                  schedule
                </span>
                {FEATURED_RESOURCE.duration}
              </span>
            </div>
            <h3 className="text-3xl font-headline font-bold text-white mb-2 leading-tight">
              {FEATURED_RESOURCE.title}
            </h3>
            <p className="text-white/80 line-clamp-2 max-w-xl">
              {FEATURED_RESOURCE.description}
            </p>
          </div>
        </div>
      </article>

      {/* ── Side card (col-span-4) ── */}
      <article className="md:col-span-4 group cursor-pointer">
        <div className="h-full bg-surface-container-lowest rounded-xl p-8 flex flex-col justify-between transition-all duration-[400ms] ease-in-out group-hover:-translate-y-1 ambient-shadow">
          <div>
            <span
              className="material-symbols-outlined text-primary text-4xl mb-6 block"
              aria-hidden="true"
            >
              menu_book
            </span>
            <h3 className="text-2xl font-headline font-bold text-on-surface mb-4">
              {SIDE_RESOURCE.title}
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              {SIDE_RESOURCE.description}
            </p>
          </div>
          <button className="flex items-center gap-2 text-primary font-bold text-sm mt-8 transition-all duration-[400ms] ease-in-out group-hover:gap-4">
            {SIDE_RESOURCE.cta}
            <span
              className="material-symbols-outlined"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </button>
        </div>
      </article>

      {/* ── Media cards row (3 × col-span-4) ── */}
      {MEDIA_CARDS.map((card) => (
        <article
          key={card.id}
          className="md:col-span-4 group cursor-pointer"
        >
          <div className="relative aspect-square rounded-xl overflow-hidden bg-surface-container mb-4 transition-all duration-[400ms] ease-in-out group-hover:-translate-y-1">
            <Image
              src={card.image.src}
              alt={card.image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover opacity-80 transition-all duration-[400ms] ease-in-out group-hover:scale-105"
            />
          </div>
          <h4 className="text-lg font-headline font-bold text-on-surface">
            {card.title}
          </h4>
          <p className="text-sm text-on-surface-variant">{card.subtitle}</p>
        </article>
      ))}

    </section>
  );
}
