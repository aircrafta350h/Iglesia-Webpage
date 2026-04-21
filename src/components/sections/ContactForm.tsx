'use client';

import { useState, type FormEvent, type ChangeEvent } from 'react';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const INITIAL_FORM: FormState = {
  name: '',
  email: '',
  subject: 'Acompañamiento Espiritual',
  message: '',
};

const SUBJECTS = [
  'Acompañamiento Espiritual',
  'Información General',
  'Donaciones',
  'Actividades',
];

const inputBase =
  'w-full bg-surface-container border-none rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline text-on-surface transition-all duration-300';

const labelBase =
  'block text-xs font-label font-semibold uppercase tracking-widest text-on-surface-variant ml-4';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with real API call
    console.log('Form submitted:', form);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
        <span className="material-symbols-outlined text-primary text-6xl">
          check_circle
        </span>
        <h3 className="font-headline text-2xl font-bold tracking-tight">
          ¡Mensaje enviado!
        </h3>
        <p className="text-on-surface-variant max-w-sm leading-relaxed">
          Gracias por escribirnos. Un miembro de nuestro equipo se pondrá en
          contacto contigo pronto.
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
    );
  }

  return (
    <div className="bg-surface-container-lowest p-8 md:p-12 rounded-xl ambient-shadow">
      <h2 className="text-3xl font-headline font-bold tracking-tight mb-4">
        Envíanos un mensaje
      </h2>
      <p className="text-on-surface-variant font-body mb-12 leading-relaxed max-w-md">
        Si tienes preguntas sobre nuestras actividades o necesitas
        acompañamiento espiritual, completa el formulario.
      </p>

      <form
        onSubmit={handleSubmit}
        className="space-y-8"
        noValidate
        aria-label="Formulario de contacto"
      >
        {/* Row 1: Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <label htmlFor="contact-name" className={labelBase}>
              Nombre Completo
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              className={inputBase}
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="contact-email" className={labelBase}>
              Correo Electrónico
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="email@ejemplo.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              className={inputBase}
            />
          </div>
        </div>

        {/* Row 2: Subject */}
        <div className="space-y-2">
          <label htmlFor="contact-subject" className={labelBase}>
            Asunto
          </label>
          <select
            id="contact-subject"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className={`${inputBase} appearance-none cursor-pointer`}
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        {/* Row 3: Message */}
        <div className="space-y-2">
          <label htmlFor="contact-message" className={labelBase}>
            Mensaje
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            placeholder="¿Cómo podemos ayudarte?"
            value={form.message}
            onChange={handleChange}
            rows={5}
            className="w-full bg-surface-container border-none rounded-[2rem] px-6 py-4 focus:outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-outline text-on-surface transition-all duration-300 resize-y"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-full font-headline font-bold hover:bg-primary-dim transition-colors duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <>
              <span
                className="material-symbols-outlined text-sm animate-spin"
                aria-hidden="true"
              >
                progress_activity
              </span>
              Enviando...
            </>
          ) : (
            <>
              Enviar mensaje
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                send
              </span>
            </>
          )}
        </button>
      </form>
    </div>
  );
}
