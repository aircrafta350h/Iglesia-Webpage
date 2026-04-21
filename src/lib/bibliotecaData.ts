export interface MediaCard {
  id: string;
  title: string;
  subtitle: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface FeaturedResource {
  title: string;
  description: string;
  duration: string;
  badge: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface SideResource {
  title: string;
  description: string;
  cta: string;
}

export const FEATURED_RESOURCE: FeaturedResource = {
  title: 'El Camino de la Oración Silenciosa',
  description:
    'Una serie magistral sobre la historia y la práctica de la contemplación en la tradición cristiana primitiva.',
  duration: '45 min',
  badge: 'Destacado',
  image: {
    src: '/img/biblioteca-oracion-destacada.avif',
    alt: 'El camino de la oración silenciosa — imagen destacada',
  },
};

export const SIDE_RESOURCE: SideResource = {
  title: 'Guía de Lectura Anual',
  description:
    'Descarga nuestro plan de lectura curado para el año 2024, enfocado en el crecimiento espiritual profundo.',
  cta: 'DESCARGAR PDF',
};

export const MEDIA_CARDS: MediaCard[] = [
  {
    id: 'sermones',
    title: 'Colección de Sermones',
    subtitle: '248 Episodios • Audio y Video',
    image: {
      src: '/img/biblioteca-sermones.avif',
      alt: 'Colección de sermones — biblioteca Sanctuary',
    },
  },
  {
    id: 'teologia',
    title: 'Ensayos Teológicos',
    subtitle: 'Lecturas de 15 minutos',
    image: {
      src: '/img/biblioteca-ensayos.avif',
      alt: 'Ensayos teológicos — biblioteca Sanctuary',
    },
  },
  {
    id: 'talleres',
    title: 'Talleres Prácticos',
    subtitle: 'Material de estudio para grupos',
    image: {
      src: '/img/biblioteca-talleres.avif',
      alt: 'Talleres prácticos — biblioteca Sanctuary',
    },
  },
];
