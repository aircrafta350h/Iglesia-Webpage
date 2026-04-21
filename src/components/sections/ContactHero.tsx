export default function ContactHero() {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 md:px-12 mb-24"
      aria-labelledby="contacto-hero-title"
    >
      <div className="flex flex-col md:flex-row items-end justify-between gap-12">
        {/* Text block */}
        <div className="max-w-2xl">
          <span className="inline-block text-on-surface-variant font-label font-medium tracking-[0.2em] uppercase text-[10px] mb-6">
            Encuentra Tu Espacio
          </span>
          <h1
            id="contacto-hero-title"
            className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter leading-tight mb-8"
          >
            Estamos aquí para{' '}
            <span className="text-primary italic font-light">escuchar</span> y
            caminar contigo.
          </h1>
        </div>

        {/* Decorative circular image — desktop only */}
        <div
          className="hidden md:block w-48 h-48 rounded-full overflow-hidden mb-4 shrink-0"
          aria-hidden="true"
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaHwMEaajOaw8loteNzKZDh_QZSFVdu45ZOY3wD95z0ELwbQ7kyjA3Z-WVze3S_0oE2FN_ht8BMCxjBN234iPbcAM-HcnTyN9vjZYjShzKq6dgSAX8tdP1deXI7YF4W4jNicN2ttFItprUrUFkOXpn4mufBRu7kNf9bb3xnEXcV5yySqA4JUIKoVjDKFVxehaC5pOgu-THXK8xg442ULGep2vgkhdrxD3EDm74EVGVf5nPYgSRrhh6rixYvOFe7FtRx17lSu-iZHc"
            alt="Fuente de agua interior con luz suave reflejada en piedras"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
