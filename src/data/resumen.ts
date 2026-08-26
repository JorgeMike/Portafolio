export type Stat = {
  value: string
  label: string
}

export type ResumenData = {
  command: string
  summary: string
  stats: Stat[]
}

export const resumen: ResumenData = {
  command: 'cat ./resumen.txt',
  summary:
    'Desarrollador Fullstack con trayectoria desde frontend hasta liderazgo técnico. Construyo aplicaciones de extremo a extremo con React, Next.js y Node.js, desplegadas sobre AWS y Google Cloud.',
  stats: [
    { value: '4+', label: 'años de experiencia' },
    { value: '20+', label: 'desarrolladores mentoreados' },
    { value: '40%', label: 'menos tiempo en creación de contenido' },
    { value: '60%', label: 'menos errores con auditorías de IA' },
  ],
}
