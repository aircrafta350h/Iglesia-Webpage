'use client';

import { useState, FormEvent } from 'react';

interface FormState {
  nombre: string;
  email: string;
  area: string;
  mensaje: string;
}

const INITIAL_FORM: FormState = {
  nombre: '',
  email: '',
  area: '',
  mensaje: '',
};

const HELP_AREAS = [
  'Consejería',
  'Matrimonios',
  'Petición de Oración',
  'Discipulado',
  'Grupos de Vida',
  'Otro',
];

export default function ContactSection() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  const inputBase =
    'w-full bg-surface-container border-none rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant text-on-surface transition-shadow duration-200';
  const labelBase =
    'block text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-4 mb-2';

  return (
    <section
      id="necesitas-hablar"
      className="px-6 md:px-12 max-w-screen-2xl mx-auto py-32"
      aria-labelledby="contact-heading"
    >
      <div className="bg-surface-container-lowest rounded-xl p-8 md:p-12 lg:p-20 ambient-shadow grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left — info */}
        <div>
          <h2
            id="contact-heading"
            className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            ¿Necesitas hablar?
          </h2>
          <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
            Si estás pasando por un momento difícil o simplemente necesitas que
            alguien ore contigo, déjanos tus datos. Un miembro de nuestro equipo
            se pondrá en contacto contigo a la brevedad.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-on-primary-container">
                  mail
                </span>
              </div>
              <a
                href="mailto:ayuda@1ra Iglesia Apostolica de Tonalá.church"
                className="font-medium hover:text-primary transition-colors"
              >
                ayuda@1ra Iglesia Apostolica de Tonalá.church
              </a>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center flex-shrink-0"
                aria-hidden="true"
              >
                <span className="material-symbols-outlined text-on-secondary-container">
                  phone
                </span>
              </div>
              <a
                href="tel:+15550123"
                className="font-medium hover:text-primary transition-colors"
              >
                +1 (555) 0123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Right — form */}
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center py-16 gap-6">
            <span className="material-symbols-outlined text-primary text-6xl">
              check_circle
            </span>
            <h3 className="font-headline text-2xl font-bold">
              ¡Mensaje enviado!
            </h3>
            <p className="text-on-surface-variant">
              Gracias por contactarnos. Un miembro de nuestro equipo se
              comunicará contigo pronto.
            </p>
            <button
              onClick={() => {
                setForm(INITIAL_FORM);
                setSubmitted(false);
              }}
              className="text-primary font-semibold underline underline-offset-4 hover:opacity-70 transition-opacity"
            >
              Enviar otro mensaje
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
            noValidate
            aria-label="Formulario de contacto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className={labelBase}>
                  Nombre
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  value={form.nombre}
                  onChange={handleChange}
                  className={inputBase}
                  autoComplete="name"
                />
              </div>
              <div>
                <label htmlFor="email" className={labelBase}>
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={handleChange}
                  className={inputBase}
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="area" className={labelBase}>
                ¿Cómo podemos ayudarte?
              </label>
              <select
                id="area"
                name="area"
                value={form.area}
                onChange={handleChange}
                className={`${inputBase} appearance-none cursor-pointer`}
              >
                <option value="">Selecciona un área</option>
                {HELP_AREAS.map((area) => (
                  <option key={area} value={area}>
                    {area}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className={labelBase}>
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                required
                placeholder="Escribe aquí..."
                value={form.mensaje}
                onChange={handleChange}
                rows={5}
                className="w-full bg-surface-container border-none rounded-[2rem] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline-variant text-on-surface min-h-[150px] resize-y transition-shadow duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full hero-gradient text-on-primary py-5 rounded-full font-bold text-lg ambient-shadow hover:opacity-95 transition-opacity duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <span
                    className="material-symbols-outlined text-xl animate-spin"
                    aria-hidden="true"
                  >
                    progress_activity
                  </span>
                  Enviando...
                </>
              ) : (
                'Enviar Mensaje'
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
