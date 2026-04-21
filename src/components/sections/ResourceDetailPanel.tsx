import Link from 'next/link';
import type { CollectionResource } from '@/lib/coleccionData';

interface Props {
  item: CollectionResource;
}

export default function ResourceDetailPanel({ item }: Props) {
  return (
    // collection-enter fires on remount (parent sets key={item.id + '-panel'})
    <div className="shrink-0 w-52 h-[272px] md:w-64 md:h-[340px] bg-white flex flex-col justify-center px-6 md:px-8 collection-enter">

      {/* Category label */}
      <p className="text-[10px] md:text-xs font-manrope font-semibold tracking-[0.18em] text-[#9a9fa8] uppercase mb-2">
        {item.subtitle}
      </p>

      {/* Title */}
      <h2 className="text-lg md:text-xl font-headline font-bold text-[#1c1c1c] tracking-tight leading-snug mb-1">
        {item.title}
      </h2>

      {/* Author + duration */}
      {(item.author || item.duration) && (
        <p className="text-[11px] text-[#9a9fa8] font-manrope mb-3">
          {[item.author, item.duration].filter(Boolean).join(' · ')}
        </p>
      )}

      {/* Description */}
      <p className="text-[#6b6b6b] font-body text-xs md:text-sm leading-relaxed mb-4 line-clamp-3 md:line-clamp-4">
        {item.description}
      </p>

      {/* CTAs */}
      <div className="flex flex-col gap-2">
        <Link
          href={`/biblioteca/${item.category}/${item.id}`}
          className="bg-[#004154] text-white px-5 py-2 md:py-2.5 rounded-full font-manrope font-medium text-xs md:text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm shadow-[#004154]/20"
        >
          <span
            className="material-symbols-outlined text-[16px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            play_circle
          </span>
          Ver recurso
        </Link>

        <button className="border border-[#dee1e5] text-[#4a4a4a] px-5 py-2 md:py-2.5 rounded-full font-manrope font-medium text-xs md:text-sm hover:bg-[#dee1e5] transition-colors flex items-center justify-center gap-2">
          <span className="material-symbols-outlined text-[16px]">bookmark_add</span>
          Guardar
        </button>
      </div>
    </div>
  );
}
