/**
 * Static data for the Actividades page.
 * Shape mirrors the ActivityCard props so the grid can be driven from this array.
 */

export interface FeaturedActivity {
  variant: 'featured';
  icon: string;
  title: string;
  description: string;
  day: string;
  time: string;
  location: string;
  imageSrc: string;
  imageAlt: string;
}

export interface ColoredActivity {
  variant: 'colored';
  icon: string;
  title: string;
  description: string;
  day: string;
  time: string;
  buttonLabel: string;
}

export interface MediaActivity {
  variant: 'media';
  icon: string;
  title: string;
  description: string;
  day: string;
  time: string;
  imageSrc: string;
  imageAlt: string;
}

export interface MinimalActivity {
  variant: 'minimal';
  icon: string;
  title: string;
  description: string;
  day: string;
  time: string;
  iconBgColor: string;
  iconColor: string;
}

export type Activity =
  | FeaturedActivity
  | ColoredActivity
  | MediaActivity
  | MinimalActivity;

export const ACTIVIDADES: Activity[] = [
  {
    variant: 'featured',
    icon: 'church',
    title: 'Culto Dominical',
    description:
      'Nuestra reunión principal. Un tiempo de alabanza, palabra y comunión profunda con el Padre en un ambiente de paz.',
    day: 'Todos los Domingos',
    time: '10:00 AM',
    location: 'Santuario Principal',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBvoCkYn6HJ6B3Oq4tcl2o6TXJHzuQ_2YpLLklyrgnaVGRRjEvWfysLWyBHi5DGglfSwQDnxP0XxgTK_Rjj0QCoANoMZXIwFw3vGZsLntabAJ84BONBpWPGryO4qw-LSpPpDDh0Z__CjBrz94ZukJOKozbDnzs1Qe-dQ-13XUJpaylRv1OdXfUpVj99gVig_iD6Rx0N2CjWaUWEy4VsP0pBeDZgypl0h1fehWRYoMC3Ea96B18SilIYSSPm-DbKk28sCPns4AR4m9A',
    imageAlt:
      'Interior de una iglesia moderna minimalista con luz natural cálida entrando por las ventanas altas',
  },
  {
    variant: 'colored',
    icon: 'groups',
    title: 'Red de Jóvenes',
    description:
      'Una comunidad vibrante donde exploramos la fe a través de la música, el diálogo y el servicio.',
    day: 'Sábados',
    time: '6:30 PM',
    buttonLabel: 'Ver dinámicas',
  },
  {
    variant: 'media',
    icon: 'auto_awesome',
    title: 'Cultos de Avivamiento',
    description:
      'Reuniones enfocadas en la presencia del Espíritu Santo, oración ferviente y sanidad emocional.',
    day: 'Miércoles',
    time: '7:00 PM',
    imageSrc:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCNf3-CBaPthtuSHWBjQFbE7CdGyRt6IMU5Ql6Bi6dQI_LqiBD1GglT_UlG8A6-hXhp8RKmEuJVR8KULQXB9wwJ0jz7AZYIYY0khH5RBKMAU3VWS9CL24grE3hdALQEHd8mVSnuDTqr9wdYq_jsqCE43fiwc1RqVVoKFiMbbUp8SdRdk05_L-TAvpiEUpYpIEgrfm7v-6GQFyyimNLP3zin6cF3apUOHH1bqLTAO6glCseRDxmyOyS7e4L0GjDEKDn4lqRBu7GOZ3g',
    imageAlt:
      'Manos levantadas en oración contra una luz cálida atmosférica en una sala serena',
  },
  {
    variant: 'minimal',
    icon: 'menu_book',
    title: 'Escuela de Fe',
    description:
      'Profundiza en el estudio bíblico y la teología práctica en grupos reducidos.',
    day: 'Martes',
    time: '7:30 PM',
    iconBgColor: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
  },
  {
    variant: 'minimal',
    icon: 'coffee',
    title: 'Desayuno de Oración',
    description:
      'Empezamos el mes uniendo nuestras voces en oración y compartiendo el pan.',
    day: '1er Sábado',
    time: '8:00 AM',
    iconBgColor: 'bg-tertiary-container',
    iconColor: 'text-on-tertiary-container',
  },
];
