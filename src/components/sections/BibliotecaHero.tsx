export default function BibliotecaHero() {
  return (
    <header
      className="max-w-screen-xl mx-auto px-6 md:px-12 mb-20"
      aria-labelledby="biblioteca-title"
    >
      <div className="max-w-2xl">
        <span className="text-on-surface-variant font-label text-sm tracking-[0.2em] uppercase mb-4 block">
          Recursos Espirituales
        </span>
        <h1
          id="biblioteca-title"
          className="text-6xl font-headline font-extrabold tracking-tighter text-on-surface leading-none mb-8"
        >
          La Biblioteca del Silencio
        </h1>
        <p className="text-xl text-on-surface-variant leading-relaxed font-body">
          Un espacio curado de sabiduría, contemplación y enseñanzas diseñadas
          para nutrir el alma en su camino hacia lo divino.
        </p>
      </div>
    </header>
  );
}
