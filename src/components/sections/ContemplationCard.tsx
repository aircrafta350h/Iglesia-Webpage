interface ContemplationCardProps {
  icon: string;
  title: string;
  description: string;
  cta: string;
}

export default function ContemplationCard({
  icon,
  title,
  description,
  cta,
}: ContemplationCardProps) {
  return (
    <div className="my-16 p-10 bg-surface-container rounded-xl relative overflow-hidden">
      {/* Content */}
      <div className="relative z-10">
        <span
          className="material-symbols-outlined text-primary text-4xl mb-4 block"
          aria-hidden="true"
        >
          {icon}
        </span>
        <h3 className="text-xl font-bold mb-4 font-headline">{title}</h3>
        <p className="text-on-surface-variant mb-6 italic">{description}</p>
        <button className="text-primary font-bold flex items-center gap-2 hover:gap-4 transition-all duration-300">
          {cta}
          <span className="material-symbols-outlined" aria-hidden="true">
            arrow_forward
          </span>
        </button>
      </div>

      {/* Decorative blur blob */}
      <div
        className="absolute -right-20 -bottom-20 w-64 h-64 bg-primary-container/30 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
