import Image from 'next/image';
import BentoCard from '@/components/BentoGrid/BentoCard';

const AVATAR_IMAGES = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD380Xt9yX8NEJJQgp5uq0tu0cJX67wpFNTrPFkmd5V2IAG30YVoywu7PX_9xfWP3tGUa7HTBdKzL5O09pbnMYDybMojDpwOvxZKUrfeDPsUBgR0uqML-9rvCdWg7AoTvj-nSf9q7LQSUtiUb7_Kw9qaDQ287wPSLEW5E1mniGoCnyezfwn41DbRfG9ILlNZt5EzMfVK-pGfOROPIL20wOXdiwZoz8mpZTzYHAEVdePcmLR8kbu_1HSoC77QqtKlYzliDEnUjH87ss',
    alt: 'Retrato de un hombre sonriente',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAiLmihZWqrgoWe7lSyqJ1QLgRmga9q1Fntoezqqn3pYd5gzR4DFyuvZN8ExnajAF7iZahroHlYxBQ63vfo7HQNuS7UxfEQuek9Utq6SrQYxwh0JaV300IZZKg_C0TBUDOHPewhPkDUC9yhtbDLRh_pCOYe92D4qLmYpDYjwsA6_76ZglB1M3ElchTk9xJIp6AM-bd2CSa1c365_fHOHUThIiCX7nKqp77QdmLdMWaSfgrh2M1Y9KFS4nDC2XhltDEgohxRG4-tTc4',
    alt: 'Retrato de una mujer sonriente',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDQKSKkucVJu8iN61Wup-tuMgK4Ceq28l8OYRk8u_Q0tsGH5gKI4d5stAyggMlMi1IJ-cZ8Atk93VOlXgl6VZfm3HC9Y5WBKgbwtgmbdacL5PM3ZlNPLuxVnDWR5NSxkEyRYi8kIeJq9xT32fUEHTDx55UeUPTMHQwGgovISQOBLEFw938V73lhT9z6DN8WAh17QS4XJHx8yGQb362RAEOSgrp5WfC1SvSZX1hfp2hKB18q2Ay6V_PHQmz_MMIjpL9GbFkQyHxF4Y',
    alt: 'Retrato de un hombre con lentes',
  },
];

export default function BentoGrid() {
  return (
    <section
      className="px-6 md:px-12 max-w-screen-2xl mx-auto mb-32"
      aria-label="Nuestros ministerios"
    >
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 md:h-[700px]">

        {/* 1. Consejería Pastoral — col-span-2, row-span-1 */}
        <BentoCard href="/acompanamiento/consejeria" className="md:col-span-2 md:row-span-1 bg-surface-container-lowest p-10 ambient-shadow flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1">
          <div>
            <span
              className="material-symbols-outlined text-primary text-4xl mb-6 block"
              aria-hidden="true"
            >
              settings_accessibility
            </span>
            <h3 className="font-headline text-3xl font-bold mb-4">
              Consejería Pastoral
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Orientación espiritual personalizada para momentos de crisis, duda
              o búsqueda de propósito. Un espacio seguro y confidencial.
            </p>
          </div>
          <div className="mt-8 flex justify-end">
            <span
              className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform duration-300"
              aria-hidden="true"
            >
              arrow_forward
            </span>
          </div>
        </BentoCard>

        {/* 2. Matrimonios — col-span-1, row-span-2 */}
        <BentoCard className="md:col-span-1 md:row-span-2 bg-surface-container text-on-surface p-10 flex flex-col justify-between overflow-hidden relative">
          <div className="relative z-10">
            <span
              className="material-symbols-outlined text-secondary text-4xl mb-6 block"
              aria-hidden="true"
            >
              favorite
            </span>
            <h3 className="font-headline text-3xl font-bold mb-4">
              Matrimonios
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Fortaleciendo la base de la familia a través de talleres, retiros
              y mentoría para parejas en cualquier etapa.
            </p>
          </div>
          {/* Decorative background image */}
          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-10 pointer-events-none">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZVPE3-etU4E5eNnvNL80qNzNVP_wySdteBdWpJ_8Fq8OmyK7-gtrR8sIpfsOQkNZ1ETDaRpo2IYk_WIJw8Xwad3PcTiW7u7MrthSE2LII_EkkaF3EBET50vibERl03vcwU1uRb0T6DEB0jqrnsy1J6VQftkOLnCvBMLdt_zSzJ10Qfe9g_2gMUd3CaCUmTsFB0SJzLEKn5GvnqaT3Jqf01b04X_TcrO87tKvjRwUFBqe5g2Acqeb2L2yepZsZKsh9tjql9DCOIis"
              alt=""
              fill
              className="object-cover"
              sizes="192px"
              aria-hidden="true"
            />
          </div>
        </BentoCard>

        {/* 3. Discipulado — col-span-1, row-span-1 */}
        <BentoCard className="md:col-span-1 md:row-span-1 bg-primary text-on-primary p-10 flex flex-col justify-between">
          <div>
            <span
              className="material-symbols-outlined text-primary-fixed text-4xl mb-6 block"
              aria-hidden="true"
            >
              menu_book
            </span>
            <h3 className="font-headline text-2xl font-bold mb-4">
              Discipulado
            </h3>
            <p className="text-on-primary/80 text-sm leading-relaxed">
              Crecer en fe a través del estudio profundo de la palabra y el
              caminar mentoreado.
            </p>
          </div>
          <a
            href="#"
            className="text-on-primary font-semibold text-sm underline decoration-primary-container underline-offset-4 hover:opacity-80 transition-opacity"
          >
            Empezar hoy
          </a>
        </BentoCard>

        {/* 4. Grupos de Vida — col-span-2, row-span-1 */}
        <BentoCard className="md:col-span-2 md:row-span-1 bg-surface-container-high p-10 flex flex-col md:flex-row gap-8 items-center">
          <div className="flex-1">
            <h3 className="font-headline text-3xl font-bold mb-4">
              Grupos de Vida
            </h3>
            <p className="text-on-surface-variant leading-relaxed">
              Comunidades pequeñas donde compartimos la vida, oramos unos por
              otros y crecemos juntos en hogares de la ciudad.
            </p>
          </div>

          {/* Avatar stack */}
          <div className="flex -space-x-4 flex-shrink-0" aria-label="Miembros del grupo">
            {AVATAR_IMAGES.map((avatar) => (
              <div
                key={avatar.src}
                className="relative w-12 h-12 rounded-full border-4 border-surface-container-high overflow-hidden"
              >
                <Image
                  src={avatar.src}
                  alt={avatar.alt}
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            ))}
            <div className="w-12 h-12 rounded-full border-4 border-surface-container-high bg-primary-container flex items-center justify-center text-on-primary-container text-xs font-bold flex-shrink-0">
              +12
            </div>
          </div>
        </BentoCard>

        {/* 5. Línea de Oración — col-span-1, row-span-1 */}
        <BentoCard className="md:col-span-1 md:row-span-1 bg-secondary-container p-8 flex items-center justify-center text-center">
          <div>
            <span
              className="material-symbols-outlined text-on-secondary-container text-3xl mb-2 block"
              aria-hidden="true"
            >
              support_agent
            </span>
            <p className="font-headline font-bold text-on-secondary-container">
              Línea de Oración
            </p>
            <p className="text-on-secondary-container/70 text-xs mt-1">
              Disponible 24/7
            </p>
          </div>
        </BentoCard>

      </div>
    </section>
  );
}
