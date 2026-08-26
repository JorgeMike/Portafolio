export type ExperienciaEntry = {
  company: string
  position: string
  startDate: string
  endDate: string
  location: string
  highlights: string[]
}

export type ExperienciaData = {
  prompt: string
  command: string
  entries: ExperienciaEntry[]
}

export const experiencia: ExperienciaData = {
  prompt: 'visitor@portfolio:~$',
  command: 'git log --oneline experiencia.log',
  entries: [
    {
      company: 'Content-Oh!',
      position: 'Desarrollador Fullstack',
      startDate: '2025-07',
      endDate: 'presente',
      location: 'Remoto',
      highlights: [
        'Implementé nuevos módulos de extremo a extremo, desde el levantamiento de requerimientos hasta el despliegue en producción, sobre AWS (Lambda, S3, RDS) y React',
        'Reduje en un 40% los tiempos de creación y edición de contenido mediante módulos de IA generativa (Gemini, ChatGPT, Claude)',
        'Reduje en un 60% los errores que provocaban rechazos de clientes gracias a auditorías y correcciones automatizadas con IA',
      ],
    },
    {
      company: 'Centro de Desarrollo Tecnológico (CEDETEC), FES Acatlán - UNAM',
      position: 'Tech Lead',
      startDate: '2025-01',
      endDate: '2025-06',
      location: 'Naucalpan, México (presencial)',
      highlights: [
        'Lideré la organización y coordinación de equipos de desarrollo, dando seguimiento a avances mediante weeklies documentadas en Jira',
        'Supervisé Pull Requests antes de cada despliegue a pruebas o producción, garantizando calidad de código',
      ],
    },
    {
      company: 'Centro de Desarrollo Tecnológico (CEDETEC), FES Acatlán - UNAM',
      position: 'Desarrollador Fullstack',
      startDate: '2023-09',
      endDate: '2024-12',
      location: 'Naucalpan, México (presencial)',
      highlights: [
        'Lideré el flujo completo de sistemas institucionales, desde el levantamiento de requisitos con directivos hasta el despliegue, con backend en NestJS/TypeORM y frontend en Next.js',
        'Desarrollé el Sistema de Evaluación Docente (proyecto de titulación), reduciendo el tiempo de generación de reportes de 2-3 semanas manuales a 5 minutos',
        'Mentoreé estudiantes impartiendo cursos de desarrollo web y buenas prácticas, en grupos de hasta 20 personas',
      ],
    },
    {
      company: 'Independiente (Freelance) - Concesionaria de autos',
      position: 'Desarrollador Fullstack',
      startDate: '2024-01',
      endDate: '2024-12',
      location: 'Remoto',
      highlights: [
        'Lideré el flujo completo del proyecto, desde requisitos hasta el despliegue en servidor propio (Next.js, MongoDB, NGINX)',
        'Desarrollé un sistema de gestión de citas, inspecciones de vehículos y estudios de mercado para determinar ofertas de compra',
        'Reduje tiempos y errores humanos u omisiones de información en un 30%',
      ],
    },
    {
      company: 'Centro de Desarrollo Tecnológico (CEDETEC), FES Acatlán - UNAM',
      position: 'Desarrollador Frontend',
      startDate: '2022-08',
      endDate: '2023-08',
      location: 'Naucalpan, México (presencial)',
      highlights: [
        'Diseñé maquetas en Figma, presentando y adaptando propuestas a los requerimientos solicitados con foco en experiencia de usuario',
        'Traduje maquetas a código en proyectos con Next.js y TypeScript, usando Bootstrap modificado con SASS para mantener la identidad visual institucional de la universidad',
      ],
    },
  ],
}
