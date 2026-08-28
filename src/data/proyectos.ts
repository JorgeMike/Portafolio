export type ProyectoEntry = {
  name: string
  date: string
  url?: string
  highlights: string[]
}

export type ProyectosData = {
  command: string
  entries: ProyectoEntry[]
}

export const proyectos: ProyectosData = {
  command: 'ls ./proyectos',
  entries: [
    {
      name: 'Sistema de Registro de Eventos',
      date: '2022-2025',
      highlights: [
        'Generación de eventos y formularios con cupos, correos automáticos y pases de lista por QR',
        'Roles de administrador y staff, banners dinámicos y metaetiquetas SEO por evento',
        'Reportes en Excel de las respuestas recopiladas',
      ],
    },
    {
      name: 'Sistema de Encuestas de Evaluación Docente',
      date: '2022-2025',
      highlights: [
        'Cuestionarios dinámicos aplicados por un encuestador, con roles por carrera',
        'Revisión de respuestas en tiempo real por grupo, materia y carrera',
        'Reportes agregados e individuales a nivel profesor, grupo, materia y carrera',
      ],
    },
    {
      name: 'Sistema de Censo de Activos',
      date: '2022-2025',
      highlights: [
        'Censo de materiales de trabajo mediante escaneo de códigos de barras',
        'Búsqueda, creación y edición de registros para auditorías y ubicación de activos',
      ],
    },
    {
      name: 'Sistema de Votaciones',
      date: '2022-2025',
      highlights: [
        'Registro de planillas de candidatos y lógica de votación por puesto',
        'Paneles en tiempo real con WebSockets para un monitor electoral',
        'Generación automática de actas de resultados',
      ],
    },
    {
      name: 'Sistema de Directorio de Trabajadores',
      date: '2022-2025',
      highlights: [
        'Búsqueda y registro interno de trabajadores de la facultad',
      ],
    },
    {
      name: 'Página web CEDETEC',
      date: '2022-2025',
      highlights: [
        'Sitio informativo semi-estático con servicios, horarios y proyectos del centro',
        'Módulo de eventos internos con asistencia, banners dinámicos y comentarios',
      ],
    },
    {
      name: 'Página web PAIDI',
      date: '2022-2025',
      highlights: [
        'Sitio informativo estático del Programa de Apoyo a la Investigación',
      ],
    },
    {
      name: 'Chatbot de IA con NLP — misProfesores.com',
      date: '2025',
      highlights: [
        'Web scraping, pipeline ETL y almacenamiento en GCP, expuesto vía API REST con FastAPI',
        'Frontend en React con interacciones en tiempo real y respuestas de Google Gemini',
        'Despliegue completo (datos, backend y frontend) en Google Cloud Platform',
      ],
    },
    {
      name: 'Calculadora de Interés Moratorio',
      date: 'Escolar',
      url: 'https://jorgemike.github.io/calculadora_interes_moratorio/',
      highlights: ['Calculadora de interés moratorio'],
    },
    {
      name: 'Farmacia — UI E-commerce',
      date: 'Escolar',
      url: 'https://jorgemike.github.io/Farmacia/',
      highlights: ['UI de e-commerce de farmacia'],
    },
  ],
}
