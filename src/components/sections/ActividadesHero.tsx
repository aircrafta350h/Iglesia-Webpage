export default function ActividadesHero() {
  return (
    <header
      className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-24"
      aria-labelledby="actividades-hero-title"
    >
      <div className="max-w-3xl">
        <span className="inline-block px-4 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label text-xs font-semibold tracking-widest mb-6 uppercase">
          Agenda Comunitaria
        </span>

        <h1
          id="actividades-hero-title"
          className="text-6xl md:text-7xl font-headline font-extrabold tracking-tighter text-on-surface mb-8 leading-[1.1]"
        >
          Espacios para el{' '}
          <span className="text-primary italic">encuentro</span> y la fe.
        </h1>

        <p className="text-xl text-on-surface-variant font-body leading-relaxed max-w-2xl">
          Nuestra agenda está diseñada para ofrecer refugio, crecimiento
          espiritual y comunidad. Encuentra tu lugar en nuestras reuniones
          semanales.
        </p>
      </div>
    </header>
  );
}
