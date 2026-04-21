import type { CollectionResource } from '@/lib/coleccionData';

interface Props {
  item: CollectionResource;
}

const TYPE_ICON: Record<string, string> = {
  video:    'play_circle',
  audio:    'headphones',
  text:     'article',
  workshop: 'groups',
};

export default function MainResourceCard({ item }: Props) {
  return (
    // key on the outer div is set by the parent via React's key prop on the element —
    // collection-enter animation fires on every item change (remount via parent key).
    <div className="shrink-0 w-40 h-[272px] md:w-52 md:h-[340px] relative overflow-hidden collection-enter">
      <img
        src={item.coverImage.src}
        alt={item.coverImage.alt}
        className="w-full h-full object-cover"
        draggable={false}
      />

      {/* Type badge — bottom-left */}
      <div className="absolute bottom-3 left-3">
        <span className="inline-flex items-center gap-1 bg-white/90 backdrop-blur-sm text-[#004154] text-[10px] font-manrope font-semibold uppercase tracking-[0.12em] px-2 py-1 rounded-full">
          <span
            className="material-symbols-outlined text-[12px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {TYPE_ICON[item.type] ?? 'article'}
          </span>
          {item.type}
        </span>
      </div>
    </div>
  );
}
