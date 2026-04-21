import Image from 'next/image';

export default function HeroSection() {
  return (
    <header className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-24">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">

        {/* Left column — text content */}
        <div className="md:col-span-7">
          <span className="inline-block px-4 py-1.5 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-semibold tracking-widest uppercase mb-6">
            Ministerios de Apoyo
          </span>

          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-on-surface leading-tight mb-8">
            Un espacio para{' '}
            <br className="hidden sm:block" />
            <span className="text-primary italic font-light">
              caminar juntos.
            </span>
          </h1>

          <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-10">
            Creemos que nadie debe caminar solo. Nuestros ministerios de
            acompañamiento están diseñados para brindarte apoyo espiritual,
            emocional y relacional en cada etapa de tu vida.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#necesitas-hablar"
              className="hero-gradient text-on-primary px-10 py-4 rounded-full font-semibold ambient-shadow hover:opacity-90 transition-opacity duration-300"
            >
              Solicitar Apoyo
            </a>
            <button className="bg-surface-container-low text-primary px-10 py-4 rounded-full font-semibold hover:bg-surface-container transition-colors duration-300">
              Ver Recursos
            </button>
          </div>
        </div>

        {/* Right column — image + floating quote */}
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] rounded-xl overflow-hidden ambient-shadow">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBz6lhaWMf6n4zK9ncvlHF0AIZXUiJ2gieFQqyGlAZl68wUf-Z7zMDf_oVEYY6G5GmQu4-o3FG3C4YHvN5DTlWucCM5wKNTJlFkMe93eviRrfg896E_3yrIc0y4chvcuYK9a4ks-9IL1_6cvBwgXZD5p4wG1DKbZp-NEJo47a0EYQb9IRyrlET5gK698aMUhghO5Io_mtWKrxJksjkxJba3p2Mp480b62M_OPAqhBTOWKJ8waJAo0VOXeDKeir72-EASkiKt-cg03M"
              alt="Dos personas tomadas de la mano en un gesto de apoyo, con luz solar cálida de fondo"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
          </div>

          {/* Floating scripture card */}
          <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-8 rounded-3xl ambient-shadow max-w-[240px]">
            <p className="font-headline font-bold text-primary text-xl mb-1">
              &ldquo;No temas...&rdquo;
            </p>
            <p className="text-on-surface-variant text-sm italic">
              &ldquo;Porque yo estoy contigo; no desmayes, porque yo soy tu
              Dios...&rdquo;
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}
