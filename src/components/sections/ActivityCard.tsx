import type {
  FeaturedActivity,
  ColoredActivity,
  MediaActivity,
  MinimalActivity,
  Activity,
} from '@/lib/actividadesData';

/* ─── Individual card variants ─────────────────────────────────────────── */

function FeaturedCard({
  icon,
  title,
  description,
  day,
  time,
  location,
  imageSrc,
  imageAlt,
}: FeaturedActivity) {
  return (
    <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low min-h-[500px] flex flex-col justify-end p-10 md:p-12 transition-all duration-500 hover:bg-surface-container">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10 grayscale group-hover:opacity-20 transition-opacity duration-700 pointer-events-none">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="material-symbols-outlined text-primary text-3xl">
            {icon}
          </span>
          <span className="text-on-surface-variant font-label text-sm font-medium tracking-wide">
            {day}
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-headline font-bold tracking-tighter mb-4">
          {title}
        </h2>

        <p className="text-lg text-on-surface-variant font-body max-w-md mb-8">
          {description}
        </p>

        <div className="flex items-center gap-6">
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
              Horari
            </span>
            <span className="text-xl font-semibold tracking-tight text-on-surface">
              {time}
            </span>
          </div>

          <div className="w-px h-10 bg-outline-variant/30" />

          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-widest text-on-surface-variant mb-1">
              Lugar
            </span>
            <span className="text-xl font-semibold tracking-tight text-on-surface">
              {location}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ColoredCard({
  icon,
  title,
  description,
  day,
  time,
  buttonLabel,
}: ColoredActivity) {
  return (
    <div className="md:col-span-4 rounded-xl bg-primary-container p-10 flex flex-col justify-between transition-all duration-[400ms] hover:scale-[1.01] ambient-shadow">
      <div>
        <span className="material-symbols-outlined text-primary-dim text-4xl mb-6 block">
          {icon}
        </span>
        <h3 className="text-3xl font-headline font-bold tracking-tighter text-on-primary-container mb-4">
          {title}
        </h3>
        <p className="text-on-primary-container/80 font-body leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-12">
        <div className="bg-surface-container-lowest/50 backdrop-blur-md rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center">
            <span className="font-medium">{day}</span>
            <span className="font-bold">{time}</span>
          </div>
        </div>
        <button className="w-full py-4 text-center font-bold tracking-tight border-2 border-primary/20 rounded-full text-primary hover:bg-primary/5 transition-colors duration-[400ms]">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}

function MediaCard({
  icon,
  title,
  description,
  day,
  time,
  imageSrc,
  imageAlt,
}: MediaActivity) {
  return (
    <div className="md:col-span-4 rounded-xl bg-surface-container-high p-10 flex flex-col transition-all duration-[400ms] hover:bg-surface-container-highest">
      <div className="mb-8 overflow-hidden rounded-lg h-48">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover grayscale opacity-70"
        />
      </div>

      <span className="material-symbols-outlined text-secondary text-3xl mb-4 block">
        {icon}
      </span>

      <h3 className="text-2xl font-headline font-bold tracking-tighter mb-4">
        {title}
      </h3>

      <p className="text-on-surface-variant font-body mb-8">{description}</p>

      <div className="mt-auto flex items-center justify-between text-on-surface font-semibold">
        <span>{day}</span>
        <span>{time}</span>
      </div>
    </div>
  );
}

function MinimalCard({
  icon,
  title,
  description,
  day,
  time,
  iconBgColor,
  iconColor,
}: MinimalActivity) {
  return (
    <div className="rounded-xl border border-outline-variant/20 p-8 flex flex-col justify-between hover:bg-surface-container-low transition-colors duration-[400ms]">
      <div>
        <h4 className="text-xl font-headline font-bold tracking-tight mb-2">
          {title}
        </h4>
        <p className="text-sm text-on-surface-variant font-body leading-relaxed">
          {description}
        </p>
      </div>

      <div className="flex items-center gap-4 mt-8">
        <div
          className={`w-10 h-10 rounded-full ${iconBgColor} flex items-center justify-center`}
        >
          <span className={`material-symbols-outlined ${iconColor} text-xl`}>
            {icon}
          </span>
        </div>
        <span className="text-sm font-medium">
          {day} · {time}
        </span>
      </div>
    </div>
  );
}

/* ─── Public component ──────────────────────────────────────────────────── */

export type ActivityCardProps = Activity;

/**
 * Polymorphic card — renders the correct layout based on `variant`.
 * Used by ActividadesGrid to build the asymmetric bento layout.
 */
export default function ActivityCard(props: ActivityCardProps) {
  switch (props.variant) {
    case 'featured':
      return <FeaturedCard {...props} />;
    case 'colored':
      return <ColoredCard {...props} />;
    case 'media':
      return <MediaCard {...props} />;
    case 'minimal':
      return <MinimalCard {...props} />;
  }
}
