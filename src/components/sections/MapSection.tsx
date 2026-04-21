export default function MapSection() {
  return (
    <div className="relative group mt-auto">
      {/* Decorative layered shadow */}
      <div
        className="absolute inset-0 bg-primary/10 rounded-xl transform translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"
        aria-hidden="true"
      />

      {/* Map image */}
      <div className="w-full h-80 rounded-xl overflow-hidden shadow-sm relative">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKtxzYSzPbjOirH8m--gYS-XzN7qhbHB_wHZSzUWb7zLvF49RnXmMpsi4qKU6u_KSMi5k86_RTRpePomFCvAVZTMelLTkBGJj-BpRdJpWRjetPrek3Vifi1spN1gOlLT2MPr7clVd3MfmQihHes93Qm10-GdV7jJel4C3xGVS0888xrUDinXDclOXg1MadCkvMKO5toPA4AhfU4lS_-di1hPh9Os_IHFw3XCHaekj_PL1rS_lOyy5kGZrF0vK-agy0xgUbkyKQjiA"
          alt="Vista aérea del mapa de Ciudad de México con colores minimalistas"
          className="w-full h-full object-cover"
        />

        {/* Gradient overlay + CTA */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-lowest text-on-surface px-6 py-3 rounded-full text-sm font-headline font-bold flex items-center gap-2 hover:bg-white transition-colors duration-300"
          >
            <span className="material-symbols-outlined text-sm" aria-hidden="true">
              directions
            </span>
            Abrir en Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
