import type { ResourceDetail } from '@/lib/types/resource';

/**
 * Mock data store — replace with CMS/API calls when ready.
 * Key = slug used in /biblioteca/[slug]
 */
const RECURSOS: Record<string, ResourceDetail> = {
  'la-gracia': {
    slug: 'la-gracia',
    title: 'Nuestra Fe:',
    titleAccent: 'La Gracia',
    category: 'Doctrinal Library',
    subtitle:
      'Una exploración contemplativa sobre el regalo inmerecido que transforma la existencia humana y restaura el alma.',
    image: {
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvBe5BmXtlJrC03223wQRlFq99yw0aN-421WlkSs5PkpKRUrxsB7R7MwCCAQRojKH9wYMhfRUiOMT-pAhy9Jhzb8OpT58e0OP8q4f0uHdvdNG4kHmyWCsrYWnY2N9SN32pwVl-IwtzatG07_x2C0sN_w_xZbAlh0_kJxgK1cobtt9AJBrNDda1Lc1rqoNfHkaWdIpiTXZEo_mV6bYdweAOX29xTcXk3-sHB72xjWsgSeGkRcISFbTL4YJS-xZpd4u6M5Ct-UMUl6I',
      alt: 'Luz etérea de mañana filtrándose por un arco de piedra hacia un patio tranquilo con olivos',
    },
    introParagraph:
      'La gracia no es simplemente un concepto teológico abstracto; es la respiración misma de la vida espiritual. En el silencio de la contemplación, descubrimos que todo lo que somos y todo lo que tenemos es un don.',
    content: [
      {
        type: 'heading',
        level: 2,
        text: 'El Misterio de la Gratuidad',
      },
      {
        type: 'paragraph',
        text: 'Vivimos en un mundo condicionado por el intercambio. Estamos acostumbrados a ganar lo que recibimos, a trabajar por nuestra posición y a merecer nuestro respeto. Sin embargo, la fe nos invita a entrar en una lógica diferente: la lógica del don. La gracia es ese amor que nos precede, que nos busca antes de que sepamos que estamos perdidos.',
      },
      {
        type: 'pullquote',
        quote:
          'La gracia no es una recompensa por el esfuerzo, sino el combustible para el camino. Es la mano que se extiende cuando las nuestras están vacías.',
        citation: '— Fragmentos del Silencio',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Transformación Interna',
      },
      {
        type: 'paragraph',
        text: 'Cuando permitimos que la gracia permee nuestra conciencia, las barreras del juicio comienzan a disolverse. Ya no necesitamos protegernos tras fachadas de perfección. La gracia nos otorga el permiso de ser vulnerables, reconociendo que nuestra plenitud no reside en nuestra propia fuerza, sino en nuestra apertura a lo divino.',
      },
      {
        type: 'contemplation-card',
        icon: 'auto_awesome',
        title: 'Práctica de Contemplación',
        description:
          'Dedica cinco minutos al final de tu día para identificar tres momentos donde experimentaste un "favor inmerecido" — una palabra amable, un momento de paz inesperado o la belleza de la naturaleza.',
        cta: 'Descargar guía de reflexión',
      },
      {
        type: 'heading',
        level: 2,
        text: 'Vivir en Estado de Gracia',
      },
      {
        type: 'paragraph',
        text: 'Vivir en gracia es vivir en agradecimiento. Es ver el mundo no como un recurso para ser explotado, sino como un santuario para ser habitado. Cada encuentro se convierte en una oportunidad para extender a otros la misma benevolencia que hemos recibido.',
      },
    ],
    related: [
      {
        type: 'article',
        id: 'disciplina-silencio',
        tag: 'Lectura Recomendada',
        title: 'La Disciplina del Silencio',
        description:
          'Cómo preparar el corazón para escuchar la voz de la gracia en medio del ruido cotidiano.',
        href: '/biblioteca/la-disciplina-del-silencio',
        colSpan: 2,
      },
      {
        type: 'audio',
        id: 'meditacion-guiada',
        icon: 'library_music',
        title: 'Meditación Guiada',
        description: '12 minutos de inmersión en la paz divina.',
      },
      {
        type: 'community',
        id: 'circulos-dialogo',
        icon: 'group',
        title: 'Círculos de Diálogo',
        description: 'Únete a nuestra comunidad de estudio el próximo jueves.',
      },
      {
        type: 'image-card',
        id: 'caminar-libertad',
        title: 'Caminar en Libertad',
        description:
          'La aplicación práctica de la gracia en nuestras relaciones.',
        image: {
          src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzBA4BWPaxQwpbcnxfgi8IuKH-9jPP0R5qKa0Ujd_gGnelRSB1dzptfcSg03ZNd9auYVeyQVGXfbMtts4wlBuzdQ-bc2CqmiB2_n3QLRmAqdQuBdFTNcleRpioMUC4Bh0LL9DlOhRYXTQEQMPxREKt6VO5fwfSHItdUlqJPZbgVgfLljC4urewSrDm3KrQIrsAKC_vaRsK30RhAdF75gGcZY-bRzKEpr_SReSOxGSdM4ycdKXIsRH-uC4hovBAa0OMmqzGz2AxVCw',
          alt: 'Paisaje de campo de trigo dorado bajo un cielo azul suave',
        },
        colSpan: 2,
      },
    ],
  },
};

export function getResourceBySlug(slug: string): ResourceDetail | null {
  return RECURSOS[slug] ?? null;
}

export function getAllSlugs(): string[] {
  return Object.keys(RECURSOS);
}
