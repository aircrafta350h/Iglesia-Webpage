import Image from 'next/image';

export default function HeroHome() {
  return (
    <section
      className="relative min-h-[921px] flex items-center justify-center overflow-hidden"
      aria-labelledby="hero-home-title"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAU9EckzanDF9WGaMDASTdcStGjbxotRv0F-Fsu_SMAu6bDTKYqWybXlpw8u1Xnuio2MqulS6_-741imbqfYU_DBgmcAevKA_7MlSM12jjt3aDQnA0bV6POABG7YImEPKh_0o0_zzcczwhDd7T9vP7gKr6MtPaJcRbAElXYeZrJQubB-hj3DKGNr7erYsnTGMWyqPU-RwuYFMtu5Omo7TmqkKTnpP-4B-qid5JAZC6MQ0Yq1yFEKwbwFHbik9WtSibfeVdXCgXS_O8"
          alt="Interior de una capilla moderna con luz suave entrando por ventanas altas sobre bancos de piedra"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.85]"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <span className="inline-block px-4 py-1.5 mb-8 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-label uppercase tracking-[0.2em]">
          Sanctuary
        </span>

        {/* Headline */}
        <h1
          id="hero-home-title"
          className="font-headline text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]"
        >
          Un refugio para el alma.
        </h1>

        {/* Subtitle */}
        <p className="text-white/90 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
          Bienvenido a Sanctuary, un espacio de contemplación y comunidad donde
          la fe se vive con sencillez y profundidad.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="/nosotros"
            className="w-full sm:w-auto bg-white text-[#004154] px-10 py-4 rounded-full font-label text-sm font-bold tracking-widest uppercase transition-all hover:bg-[#dee1e5]"
          >
            Conoce más
          </a>
        </div>
      </div>
    </section>
  );
}
