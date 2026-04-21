interface BibliotecaDetalleHeroProps {
  title: string;
  titleAccent: string;
  category: string;
  subtitle: string;
}

export default function BibliotecaDetalleHero({
  title,
  titleAccent,
  category,
  subtitle,
}: BibliotecaDetalleHeroProps) {
  return (
    <header
      className="max-w-4xl mx-auto px-6 mb-20"
      aria-labelledby="detalle-title"
    >
      {/* Category line */}
      <div className="flex items-center gap-3 mb-6">
        <span className="w-12 h-[1px] bg-outline-variant" aria-hidden="true" />
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-on-surface-variant font-label">
          {category}
        </span>
      </div>

      {/* Title */}
      <h1
        id="detalle-title"
        className="text-5xl md:text-7xl font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-8 font-headline"
      >
        {title}
        <br />
        <span className="text-primary italic font-normal">{titleAccent}</span>
      </h1>

      {/* Subtitle */}
      <p className="text-xl md:text-2xl text-on-surface-variant font-light max-w-2xl leading-relaxed">
        {subtitle}
      </p>
    </header>
  );
}
