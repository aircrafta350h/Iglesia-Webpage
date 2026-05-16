export default function QuoteSection() {
  return (
    <section
      className="bg-surface-container-low py-32 px-6 md:px-12 overflow-hidden"
      aria-label="Cita contemplativa"
    >
      <div className="max-w-4xl mx-auto text-center relative">
        {/* Decorative large quote mark */}
        <span
          className="material-symbols-outlined text-8xl text-outline-variant/20 absolute -top-12 -left-12 select-none pointer-events-none"
          aria-hidden="true"
        >
          format_quote
        </span>

        <blockquote>
          <p className="font-headline text-3xl md:text-4xl lg:text-5xl font-light italic text-on-surface leading-tight mb-12">
            &ldquo;El acompañamiento no es solo dar consejos, es ofrecer una
            presencia que refleje el amor incondicional del Creador.&rdquo;
          </p>
        </blockquote>

        <div className="w-20 h-0.5 bg-primary mx-auto mb-8" aria-hidden="true" />

        <p className="font-label text-sm uppercase tracking-[0.2em] text-on-surface-variant font-bold">
          Dirección de Pastoral &bull; 1ra Iglesia Apostolica de Tonalá
        </p>
      </div>
    </section>
  );
}
