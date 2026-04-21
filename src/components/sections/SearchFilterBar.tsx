'use client';

import { useState } from 'react';

const FILTERS = ['Todos', 'Videos', 'Libros', 'Meditaciones'] as const;
type Filter = (typeof FILTERS)[number];

export default function SearchFilterBar() {
  const [query, setQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<Filter>('Todos');

  return (
    <section
      className="max-w-screen-xl mx-auto px-6 md:px-12 mb-16"
      aria-label="Buscar y filtrar recursos"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">

        {/* Search input */}
        <div className="relative w-full md:w-96 group">
          <span
            className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none"
            aria-hidden="true"
          >
            search
          </span>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar enseñanzas o libros..."
            aria-label="Buscar recursos"
            className="w-full bg-surface-container border-none rounded-full py-4 pl-12 pr-6 focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface placeholder:text-outline transition-all duration-[400ms] ease-in-out"
          />
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrar por tipo">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`px-6 py-2 rounded-full font-medium text-sm transition-all duration-[400ms] ease-in-out ${
                activeFilter === filter
                  ? 'bg-primary text-on-primary'
                  : 'bg-surface-container-high text-on-surface hover:bg-surface-container-highest'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}
