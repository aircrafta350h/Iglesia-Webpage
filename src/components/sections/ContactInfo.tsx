interface InfoItem {
  icon: string;
  iconBg: string;
  iconColor: string;
  title: string;
  lines: string[];
}

const INFO_ITEMS: InfoItem[] = [
  {
    icon: 'location_on',
    iconBg: 'bg-primary-container',
    iconColor: 'text-on-primary-container',
    title: 'Visítanos',
    lines: [
      'Calle del Silencio 120, Distrito de Paz',
      'Ciudad de México, CP 01000',
    ],
  },
  {
    icon: 'mail',
    iconBg: 'bg-secondary-container',
    iconColor: 'text-on-secondary-container',
    title: 'Escríbenos',
    lines: ['hola@1ra Iglesia Apostolica de Tonaláchurch.org', 'ayuda@1ra Iglesia Apostolica de Tonaláchurch.org'],
  },
  {
    icon: 'schedule',
    iconBg: 'bg-tertiary-container',
    iconColor: 'text-on-tertiary-container',
    title: 'Horarios',
    lines: [
      'Domingos: 10:00 AM — 1:00 PM',
      'Lunes a Viernes: 9:00 AM — 6:00 PM',
    ],
  },
];

export default function ContactInfo() {
  return (
    <div className="space-y-10" aria-label="Información de contacto">
      {INFO_ITEMS.map((item) => (
        <div key={item.title} className="flex items-start gap-6">
          <div
            className={`w-12 h-12 rounded-2xl ${item.iconBg} flex items-center justify-center shrink-0`}
            aria-hidden="true"
          >
            <span className={`material-symbols-outlined ${item.iconColor}`}>
              {item.icon}
            </span>
          </div>
          <div>
            <h3 className="text-xl font-headline font-bold mb-2">
              {item.title}
            </h3>
            <p className="text-on-surface-variant font-body leading-relaxed">
              {item.lines[0]}
              <br />
              {item.lines[1]}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
