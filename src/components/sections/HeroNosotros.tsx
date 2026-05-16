export default function HeroNosotros() {
  return (
    <section className="px-6 md:px-12 mb-40" aria-labelledby="nosotros-title">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-12 gap-8">

        {/* Headline column */}
        <div className="col-span-12 md:col-span-8">
          <span className="text-xs uppercase tracking-[0.2em] text-on-surface-variant font-medium mb-6 block font-label">
            Nuestra Identidad
          </span>
          <h1
            id="nosotros-title"
            className="font-headline text-6xl md:text-8xl font-extrabold tracking-tighter text-on-surface leading-[0.95] mb-12"
          >
            Un refugio para <br /> el alma.
          </h1>
        </div>

        {/* Body text column — offset to col 7 on md+ */}
        <div className="col-span-12 md:col-start-7 md:col-span-6 mt-8 md:mt-24">
          <p className="font-body text-xl md:text-2xl text-on-surface-variant leading-relaxed font-light">
            Creemos que la fe es un camino de contemplación y comunidad.
            1ra Iglesia Apostolica de Tonalá nace como un espacio donde la modernidad se encuentra con
            lo eterno, invitándote a descubrir la paz que sobrepasa todo
            entendimiento.
          </p>
        </div>

      </div>
    </section>
  );
}
