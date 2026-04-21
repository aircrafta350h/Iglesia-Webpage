import Image from 'next/image';

export default function MissionVisionSection() {
  return (
    <section
      className="px-6 md:px-12 py-32 bg-surface-container-low"
      aria-labelledby="mision-title"
    >
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Mission card — spans 2 cols */}
          <div className="md:col-span-2 bg-surface-container-lowest p-16 rounded-xl flex flex-col justify-between min-h-[500px]">
            <div>
              <div
                className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-8"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-primary">
                  explore
                </span>
              </div>
              <h2
                id="mision-title"
                className="font-headline text-4xl font-bold mb-6 text-on-surface"
              >
                Nuestra Misión
              </h2>
              <p className="font-body text-xl text-on-surface-variant leading-relaxed max-w-xl">
                Facilitar un encuentro auténtico con Dios a través de la
                adoración, la enseñanza bíblica y el servicio al prójimo,
                transformando vidas en un entorno de gracia y aceptación.
              </p>
            </div>

            {/* Image */}
            <div className="mt-12 relative h-64 overflow-hidden rounded-lg">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwX9e7xSyRLV1E_0zA-feU2tN4JDXCLFN3wgXOtY5tXAYRdWK4dfeVPeVU3mYgQEHMZAYd4v9KOWwPLbUbYFuO6edCfro5mKvD6zZtjzE2yP7ImGBNznJxIxAzkU_1Le19QNjwFYNn9jYBIz2NvDrSuQVK2T6l23o16Kalzr89L4z2uzMWKbXXWMYuUXsQg3WgAO3Ul_ncf_0QqoNcYw_g_U27rGv-wec-XeFya5D1Rk_23b3AeG8rA7dKM9unk4KK21zyIhM536g"
                alt="Santuario iluminado por rayos de luz natural filtrados a través de arquitectura minimalista"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 66vw"
              />
            </div>
          </div>

          {/* Vision card */}
          <div className="bg-primary text-on-primary p-12 rounded-xl flex flex-col justify-between">
            <div>
              <h2 className="font-headline text-4xl font-bold mb-6">
                Nuestra Visión
              </h2>
              <p className="font-body text-lg opacity-90 leading-relaxed">
                Ser una comunidad vibrante y extendida que redefine la
                experiencia de la fe en el siglo XXI, sanando el tejido social a
                través del amor de Cristo.
              </p>
            </div>
            <div className="pt-12">
              <div
                className="text-8xl font-headline font-extrabold opacity-10 select-none"
                aria-hidden="true"
              >
                2030
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
