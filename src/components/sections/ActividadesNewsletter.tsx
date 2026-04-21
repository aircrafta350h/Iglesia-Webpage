export default function ActividadesNewsletter() {
  return (
    <section
      className="mt-32 px-6 md:px-12 max-w-screen-2xl mx-auto"
      aria-labelledby="actividades-newsletter-title"
    >
      <div className="bg-surface-container-highest rounded-3xl p-16 md:p-24 flex flex-col items-center text-center">
        <div className="max-w-2xl">
          <h2
            id="actividades-newsletter-title"
            className="text-4xl md:text-5xl font-headline font-bold tracking-tighter text-on-surface mb-6"
          >
            ¿Deseas recibir notificaciones de nuestras actividades?
          </h2>

          <p className="text-on-surface-variant font-body text-lg mb-12">
            Suscríbete para recibir nuestra agenda mensual y reflexiones directo
            a tu correo.
          </p>

          <form
            className="flex flex-col md:flex-row gap-4 w-full max-w-md mx-auto"
            aria-label="Formulario de suscripción a agenda"
          >
            <input
              type="email"
              required
              placeholder="Tu correo electrónico"
              aria-label="Correo electrónico"
              className="flex-1 bg-surface-container-lowest border-none rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary px-10 py-4 rounded-full font-headline font-bold transition-all duration-[400ms] hover:scale-105 active:scale-95"
            >
              Unirme
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
