interface ExpectItem {
  title: string;
  description: string;
}

const EXPECT_ITEMS: ExpectItem[] = [
  {
    title: 'Sesiones de 50 minutos',
    description: 'Tiempo dedicado exclusivamente a tu proceso de reflexión.',
  },
  {
    title: 'Confidencialidad Total',
    description: 'Tu privacidad es la piedra angular de nuestra confianza.',
  },
  {
    title: 'Cuidado Personalizado',
    description: 'Sin fórmulas genéricas; nos enfocamos en tu realidad única.',
  },
];

export default function ExpectativasSection() {
  return (
    <section
      className="bg-surface-container-lowest py-24 px-8 md:px-16 overflow-hidden"
      aria-labelledby="expectativas-title"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row gap-20">
          {/* Left: image with floating card */}
          <div className="relative w-full md:w-5/12 aspect-[4/5]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF4BtckTayhK4xeryRs3lg2knMhLdKKOlZ1cqGbruRGOQWIG_He2z6B4ATde8WN8k1ezVzLq3EXkNrocWM5TPLlTZQxjlk8S73PN0n9DnU4BNmkRTGH3mu68Si5uJDqzfDNEkpzvTGpGMF6Ndds32kB5Y02U3B9CvDafV5AODXyXsP2noQDMvSWE5rZLHQMYVCqrggGwRAcriP7zTGbKogNHaQOXDfcZyKsXDr2o_o87fCPNiGN-X14PFxiweQF2pu9Ex8EbEFcuU"
              alt="Sala de consejería minimalista con dos sillas de lino frente a frente y luz suave de tarde"
              className="w-full h-full object-cover rounded-xl"
            />
            {/* Floating card — desktop only */}
            <div className="absolute -bottom-10 -right-10 bg-surface-container-high p-10 rounded-xl shadow-xl max-w-xs hidden lg:block">
              <h4 className="font-headline font-bold text-xl mb-3 text-on-surface">
                Un refugio físico
              </h4>
              <p className="text-sm text-on-surface-variant font-light italic leading-relaxed">
                &ldquo;El silencio es el lenguaje de lo divino. Aquí, el
                silencio es bienvenido.&rdquo;
              </p>
            </div>
          </div>

          {/* Right: text content */}
          <div className="w-full md:w-7/12 flex flex-col justify-center">
            {/* Qué Esperar */}
            <div className="mb-16">
              <h2
                id="expectativas-title"
                className="text-sm font-label font-bold uppercase tracking-widest text-primary mb-6"
              >
                Qué Esperar
              </h2>
              <ul className="space-y-6" role="list">
                {EXPECT_ITEMS.map((item) => (
                  <li key={item.title} className="flex items-start gap-4">
                    <span
                      className="w-6 h-6 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0 mt-1"
                      aria-hidden="true"
                    >
                      <span className="material-symbols-outlined text-[14px] text-on-primary-container">
                        check
                      </span>
                    </span>
                    <div>
                      <h4 className="font-headline font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-on-surface-variant text-sm font-light">
                        {item.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Para quién es */}
            <div>
              <h2 className="text-sm font-label font-bold uppercase tracking-widest text-primary mb-6">
                Para quién es
              </h2>
              <p className="text-on-surface-variant leading-relaxed font-light mb-8 italic">
                Este servicio está abierto a todos, independientemente de su
                trasfondo religioso o camino espiritual. Es ideal para quienes
                atraviesan crisis existenciales, estrés agobiante o simplemente
                buscan una brújula moral y emocional en un mundo ruidoso.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
