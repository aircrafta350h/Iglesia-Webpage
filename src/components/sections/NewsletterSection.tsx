export default function NewsletterSection() {
  return (
    <section
      className="max-w-screen-xl mx-auto px-6 md:px-12 mt-32"
      aria-labelledby="newsletter-title"
    >
      <div className="bg-surface-container-low rounded-3xl p-16 text-center">
        <h2
          id="newsletter-title"
          className="text-4xl font-headline font-bold text-on-surface mb-6"
        >
          Recibe sabiduría en tu correo
        </h2>
        <p className="text-on-surface-variant max-w-lg mx-auto mb-10">
          Suscríbete para recibir una selección mensual de recursos,
          pensamientos y meditaciones directamente de nuestra comunidad.
        </p>
        <form
          className="flex flex-col md:flex-row gap-4 max-w-md mx-auto"
          aria-label="Formulario de suscripción"
        >
          <input
            type="email"
            required
            placeholder="Tu correo electrónico"
            aria-label="Correo electrónico"
            className="flex-grow bg-surface-container-lowest border-none rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline"
          />
          <button
            type="submit"
            className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold transition-all duration-[400ms] ease-in-out hover:scale-105"
          >
            Suscribirse
          </button>
        </form>
      </div>
    </section>
  );
}
