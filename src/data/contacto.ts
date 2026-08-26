export type ContactChannel = {
  label: string
  value: string
  href: string
  icon: 'mail' | 'phone' | 'map-pin' | 'github' | 'external-link'
}

export type ContactoData = {
  command: string
  channels: ContactChannel[]
}

export const contacto: ContactoData = {
  command: 'contacto --canales',
  channels: [
    {
      label: 'Email',
      value: 'miguel.alvarado.dev@gmail.com',
      href: 'mailto:miguel.alvarado.dev@gmail.com',
      icon: 'mail',
    },
    {
      label: 'Teléfono',
      value: '+52 55 4695 1819',
      href: 'tel:+525546951819',
      icon: 'phone',
    },
    {
      label: 'Ubicación',
      value: 'CDMX, México',
      href: '',
      icon: 'map-pin',
    },
    {
      label: 'LinkedIn',
      value: 'jorge-alvarado-0bb17b218',
      href: 'https://linkedin.com/in/jorge-alvarado-0bb17b218',
      icon: 'external-link',
    },
    {
      label: 'GitHub',
      value: 'JorgeMike',
      href: 'https://github.com/JorgeMike',
      icon: 'github',
    },
  ],
}
