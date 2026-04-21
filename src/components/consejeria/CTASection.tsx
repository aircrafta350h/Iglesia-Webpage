'use client';

interface CTASectionProps {
  onAgendarSesion?: () => void;
  onSaberMas?: () => void;
}

export default function CTASection({
  onAgendarSesion,
  onSaberMas,
}: CTASectionProps) {
  const handleAgendarSesion = () => {
    if (onAgendarSesion) {
      onAgendarSesion();
    } else {
      console.log('Agendar Sesión');
    }
  };

  const handleSaberMas = () => {
    if (onSaberMas) {
      onSaberMas();
    } else {
      console.log('Saber más');
    }
  };

  return (
    <section
      className="py-32 px-8 md:px-16 text-center bg-[#dee1e5]"
      aria-labelledby="cta-title"
    >
      <div className="max-w-2xl mx-auto">
        <h2
          id="cta-title"
          className="text-4xl md:text-5xl font-headline font-bold mb-8 tracking-tighter text-[#1c1c1c]"
        >
          Inicia tu Jornada
        </h2>
        <p className="text-lg text-[#4a4a4a] font-light leading-relaxed mb-12">
          Si sientes que es el momento de hablar, estamos aquí para escucharte.
          Programa una sesión inicial de orientación sin compromiso.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={handleAgendarSesion}
            className="w-full sm:w-auto bg-[#004154] text-white px-10 py-4 rounded-full font-headline font-semibold tracking-wide hover:opacity-90 transition-all text-center"
            aria-label="Agendar una sesión de consejería pastoral"
          >
            Agendar Sesión
          </button>
          <button
            onClick={handleSaberMas}
            className="w-full sm:w-auto bg-white border border-[#dee1e5] text-[#004154] px-10 py-4 rounded-full font-headline font-semibold tracking-wide hover:bg-[#eef0f2] transition-all text-center"
            aria-label="Saber más sobre la consejería pastoral"
          >
            Saber más
          </button>
        </div>

        <p className="mt-8 text-xs text-[#9a9fa8] font-label tracking-wide uppercase">
          Toda sesión es confidencial y segura
        </p>
      </div>
    </section>
  );
}
