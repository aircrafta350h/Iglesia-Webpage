import { ACTIVIDADES } from '@/lib/actividadesData';
import ActivityCard from '@/components/sections/ActivityCard';

/**
 * Asymmetric 12-column bento grid for the Actividades page.
 *
 * Layout (desktop):
 *   Row 1 → [Culto Dominical · 8 cols] [Red de Jóvenes · 4 cols]
 *   Row 2 → [Cultos de Avivamiento · 4 cols] [Escuela de Fe + Desayuno · 8 cols / inner 2-col grid]
 */
export default function ActividadesGrid() {
  const [featured, colored, media, minimal1, minimal2] = ACTIVIDADES;

  return (
    <section
      className="px-6 md:px-12 max-w-screen-2xl mx-auto"
      aria-label="Grilla de actividades"
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Row 1 — Featured (8) + Colored (4) */}
        {featured.variant === 'featured' && (
          <ActivityCard {...featured} />
        )}
        {colored.variant === 'colored' && (
          <ActivityCard {...colored} />
        )}

        {/* Row 2 — Media (4) + two Minimal cards inside an 8-col inner grid */}
        {media.variant === 'media' && (
          <ActivityCard {...media} />
        )}

        {/* Inner grid — 8 columns, subdivided into two equal cards */}
        <div className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {minimal1.variant === 'minimal' && (
            <ActivityCard {...minimal1} />
          )}
          {minimal2.variant === 'minimal' && (
            <ActivityCard {...minimal2} />
          )}
        </div>
      </div>
    </section>
  );
}
