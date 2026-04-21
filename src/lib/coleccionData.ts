// ─── Types ────────────────────────────────────────────────────────────────────

export type ResourceType = 'video' | 'audio' | 'text' | 'workshop';

export interface CollectionResource {
  id: string;
  title: string;
  subtitle: string;
  /** Must match the parent Collection.slug */
  category: string;
  coverImage: { src: string; alt: string };
  description: string;
  duration?: string;
  type: ResourceType;
  author?: string;
}

export interface Collection {
  slug: string;
  name: string;
  description: string;
  /** Local or remote image for the collection hero card */
  coverImage: { src: string; alt: string };
  resources: CollectionResource[];
}

// ─── Mock data — replace with DB/API calls when ready ─────────────────────────

export const COLLECTIONS: Collection[] = [
  // ── Sermones ────────────────────────────────────────────────────────────────
  {
    slug: 'sermones',
    name: 'Sermones',
    description:
      'Predicación expositiva y doctrinal para el crecimiento de la fe y la comunidad.',
    coverImage: {
      src: '/img/biblioteca-sermones.avif',
      alt: 'Colección de sermones — Sanctuary',
    },
    resources: [
      {
        id: 'el-poder-del-evangelio',
        title: 'El Poder del Evangelio',
        subtitle: 'Predicación Expositiva',
        category: 'sermones',
        type: 'video',
        duration: '48 min',
        author: 'Pastor Daniel Reyes',
        coverImage: {
          src: '/img/biblioteca-sermones.avif',
          alt: 'El poder del evangelio',
        },
        description:
          'Una serie de sermones expositivos que exploran el poder transformador del Evangelio en la vida cotidiana del creyente y de la comunidad.',
      },
      {
        id: 'gracia-inmerecida',
        title: 'Gracia Inmerecida',
        subtitle: 'Serie de Adviento',
        category: 'sermones',
        type: 'video',
        duration: '52 min',
        author: 'Pastor Daniel Reyes',
        coverImage: {
          src: '/img/biblioteca-sermones.avif',
          alt: 'Gracia inmerecida',
        },
        description:
          'Una colección de mensajes para el tiempo de Adviento que nos invitan a preparar el corazón para recibir al Cristo que viene.',
      },
      {
        id: 'las-bienaventuranzas',
        title: 'Las Bienaventuranzas',
        subtitle: 'El Sermón del Monte',
        category: 'sermones',
        type: 'audio',
        duration: '41 min',
        author: 'Pastor Daniel Reyes',
        coverImage: {
          src: '/img/biblioteca-sermones.avif',
          alt: 'Las bienaventuranzas',
        },
        description:
          'Un estudio verse-by-verse del Sermón del Monte, explorando cada bienaventuranza como una puerta hacia el reino de los cielos.',
      },
      {
        id: 'el-amor-que-no-falla',
        title: 'El Amor que No Falla',
        subtitle: '1 Corintios 13',
        category: 'sermones',
        type: 'video',
        duration: '45 min',
        author: 'Pastor Daniel Reyes',
        coverImage: {
          src: '/img/biblioteca-sermones.avif',
          alt: 'El amor que no falla',
        },
        description:
          'Una meditación profunda sobre el himno al amor de Pablo, descubriendo cómo el ágape divino moldea cada aspecto de la vida comunitaria.',
      },
    ],
  },

  // ── Ensayos ─────────────────────────────────────────────────────────────────
  {
    slug: 'ensayos',
    name: 'Ensayos Teológicos',
    description:
      'Lecturas profundas sobre doctrina, espiritualidad y fe aplicada a la vida contemporánea.',
    coverImage: {
      src: '/img/biblioteca-ensayos.avif',
      alt: 'Ensayos teológicos — Sanctuary',
    },
    resources: [
      {
        id: 'la-ascension',
        title: 'La Ascensión',
        subtitle: 'Reflexiones sobre la Gracia',
        category: 'ensayos',
        type: 'text',
        duration: '15 min',
        author: 'Ana Sofía Méndez',
        coverImage: {
          src: '/img/biblioteca-ensayos.avif',
          alt: 'La Ascensión',
        },
        description:
          'Una invitación a la quietud y la contemplación. Perspectiva minimalista sobre las verdades eternas, diseñada para elevar el espíritu y encontrar paz en lo esencial.',
      },
      {
        id: 'la-gracia-divina',
        title: 'La Gracia Divina',
        subtitle: 'Teología de la Redención',
        category: 'ensayos',
        type: 'text',
        duration: '18 min',
        author: 'Ana Sofía Méndez',
        coverImage: {
          src: '/img/biblioteca-ensayos.avif',
          alt: 'La gracia divina',
        },
        description:
          'Un estudio profundo sobre la naturaleza de la gracia y su poder transformador en la vida del creyente. Reflexiones que invitan a la contemplación y la fe activa.',
      },
      {
        id: 'el-silencio-interior',
        title: 'El Silencio Interior',
        subtitle: 'Espiritualidad Contemplativa',
        category: 'ensayos',
        type: 'text',
        duration: '12 min',
        author: 'Ana Sofía Méndez',
        coverImage: {
          src: '/img/biblioteca-ensayos.avif',
          alt: 'El silencio interior',
        },
        description:
          'Una guía hacia la oración silenciosa y la contemplación profunda. Aprende a encontrar a Dios en el silencio y la quietud del alma.',
      },
      {
        id: 'fe-y-razon',
        title: 'Fe y Razón',
        subtitle: 'Apologética Cristiana',
        category: 'ensayos',
        type: 'text',
        duration: '20 min',
        author: 'Ana Sofía Méndez',
        coverImage: {
          src: '/img/biblioteca-ensayos.avif',
          alt: 'Fe y razón',
        },
        description:
          'Una exploración del diálogo entre la fe cristiana y la razón filosófica. Un recorrido por los grandes apologistas de la historia.',
      },
    ],
  },

  // ── Talleres ─────────────────────────────────────────────────────────────────
  {
    slug: 'talleres',
    name: 'Talleres Prácticos',
    description:
      'Material de estudio y formación para grupos pequeños, equipos de liderazgo y retiros.',
    coverImage: {
      src: '/img/biblioteca-talleres.avif',
      alt: 'Talleres prácticos — Sanctuary',
    },
    resources: [
      {
        id: 'discipulado-en-comunidad',
        title: 'Discipulado en Comunidad',
        subtitle: 'Material de Estudio Grupal',
        category: 'talleres',
        type: 'workshop',
        duration: '6 sesiones',
        author: 'Equipo Sanctuary',
        coverImage: {
          src: '/img/biblioteca-talleres.avif',
          alt: 'Discipulado en comunidad',
        },
        description:
          'Un programa completo de discipulado diseñado para grupos pequeños. Incluye guías de discusión, actividades prácticas y material de reflexión semanal.',
      },
      {
        id: 'oracion-contemplativa',
        title: 'Oración Contemplativa',
        subtitle: 'Taller Intensivo',
        category: 'talleres',
        type: 'workshop',
        duration: '4 sesiones',
        author: 'Equipo Sanctuary',
        coverImage: {
          src: '/img/biblioteca-talleres.avif',
          alt: 'Oración contemplativa',
        },
        description:
          'Un taller intensivo sobre las disciplinas espirituales de la contemplación, el silencio y la lectio divina. Ideal para grupos de retiro.',
      },
      {
        id: 'hermeneutica-biblica',
        title: 'Hermenéutica Bíblica',
        subtitle: 'Estudio de las Escrituras',
        category: 'talleres',
        type: 'workshop',
        duration: '8 sesiones',
        author: 'Equipo Sanctuary',
        coverImage: {
          src: '/img/biblioteca-talleres.avif',
          alt: 'Hermenéutica bíblica',
        },
        description:
          'Aprende a leer e interpretar las Escrituras con rigor y amor. Este taller cubre contexto histórico, géneros literarios y principios de aplicación.',
      },
      {
        id: 'liturgia-y-adoracion',
        title: 'Liturgia y Adoración',
        subtitle: 'Formación Litúrgica',
        category: 'talleres',
        type: 'workshop',
        duration: '5 sesiones',
        author: 'Equipo Sanctuary',
        coverImage: {
          src: '/img/biblioteca-talleres.avif',
          alt: 'Liturgia y adoración',
        },
        description:
          'Una introducción a la liturgia histórica de la iglesia y su relevancia en la adoración contemporánea. Para líderes de adoración y equipos de servicio.',
      },
    ],
  },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getCollectionBySlug(slug: string): Collection | undefined {
  return COLLECTIONS.find((c) => c.slug === slug);
}
