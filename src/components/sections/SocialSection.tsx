const SOCIAL_ICONS = [
  { icon: 'share', label: 'Compartir en redes sociales' },
  { icon: 'play_circle', label: 'Ver transmisiones en vivo' },
  { icon: 'photo_camera', label: 'Seguirnos en Instagram' },
];

export default function SocialSection() {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 md:px-12 mt-32"
      aria-labelledby="social-section-title"
    >
      <div className="bg-surface-container-low rounded-xl p-12 md:p-20 text-center relative overflow-hidden">
        {/* Decorative blurred blobs */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none"
          aria-hidden="true"
        />

        <h2
          id="social-section-title"
          className="text-4xl font-headline font-extrabold tracking-tighter mb-6 relative z-10"
        >
          Sé parte de nuestra comunidad digital
        </h2>
        <p className="text-on-surface-variant font-body max-w-xl mx-auto mb-10 relative z-10">
          Síguenos para recibir reflexiones diarias y actualizaciones sobre
          nuestras reuniones especiales.
        </p>

        <div className="flex flex-wrap justify-center gap-4 relative z-10">
          {SOCIAL_ICONS.map(({ icon, label }) => (
            <a
              key={icon}
              href="#"
              aria-label={label}
              className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all duration-300"
            >
              <span className="material-symbols-outlined" aria-hidden="true">
                {icon}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
