import Link from 'next/link';

export default function HeroDetalle() {
  return (
    <header
      className="relative h-[614px] flex items-end px-8 md:px-16 pb-20 overflow-hidden"
      aria-labelledby="hero-title"
    >
      {/* Background image with blur + gradient */}
      <div className="absolute inset-0 z-0 scale-105">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGP5k-FTY_dTj6KxnT_jW8T2uFf4rd5RsPDsP-NCSKnkNUW-yX5lnBfZ4SLOLG_esIjBwegXeUACSTNoVcCZUdOa1_NGoOAZ3ypKEbo4VN0ly5_dP0TNSUg9cWrAeFrJSwnXh81ALLly76iu89qcqVEgLiLG29z9N3ccGPCip2Pi3nTpOtF_EPp0juYuS2gevndmCx-SUfMiTj1TpVPsvMQOjqnrVF-MX-aQqZxll6PPghYnvZHka0ElY50_MET1iZfWeHzJDZ9sg"
          alt="Luz etérea entrando por ventanas arqueadas en una capilla tranquila"
          className="w-full h-full object-cover opacity-40 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      </div>

      {/* Text content */}
      <div className="relative z-10 max-w-4xl">
        {/* Breadcrumb */}
        <nav aria-label="Ruta de navegación" className="mb-6">
          <Link
            href="/acompanamiento"
            className="inline-flex items-center gap-2 text-on-surface-variant/70 hover:text-on-surface text-sm font-label transition-colors duration-200"
          >
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              arrow_back
            </span>
            Acompañamiento
          </Link>
        </nav>

        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary-container text-on-primary-container text-xs font-semibold uppercase tracking-widest font-label">
          Servicios de Apoyo
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-headline font-bold tracking-tighter text-on-surface leading-[1.1] mb-4"
        >
          Consejería Pastoral
        </h1>
        <p className="text-xl md:text-2xl font-light text-on-surface-variant max-w-2xl leading-relaxed">
          Un espacio sagrado para el acompañamiento emocional, el crecimiento
          espiritual y la sanidad interior.
        </p>
      </div>
    </header>
  );
}
