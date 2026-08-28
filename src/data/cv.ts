import {
  siNodedotjs,
  siNestjs,
  siExpress,
  siPython,
  siFastapi,
  siJsonwebtokens,
  siReact,
  siNextdotjs,
  siRedux,
  siTypescript,
  siJavascript,
  siVuedotjs,
  siHtml5,
  siCss,
  siSass,
  siTailwindcss,
  siMysql,
  siMariadb,
  siMongodb,
  siGooglecloud,
  siDocker,
  siJenkins,
  siNginx,
  siGit,
  siGithubactions,
  siJest,
  siPostman,
  siLooker,
  siGooglegemini,
  siHuggingface,
  siClaude,
  siJira,
  siFigma,
  siLinux,
} from "simple-icons";

export type HeroData = {
  name: string;
  role: string;
  welcome: string;
  prompt: string;
  whoamiCommand: string;
};

export type Stat = {
  value: string;
  label: string;
};

export type ResumenData = {
  command: string;
  summary: string;
  stats: Stat[];
  imageCommand: string;
  imageAlt: string;
};

export type ExperienciaEntry = {
  company: string;
  companyShort: string;
  position: string;
  startDate: string;
  endDate: string;
  location: string;
  highlights: string[];
};

export type ExperienciaData = {
  command: string;
  entries: ExperienciaEntry[];
};

export type ProyectoEntry = {
  name: string;
  date: string;
  url?: string;
  highlights: string[];
};

export type ProyectosData = {
  command: string;
  entries: ProyectoEntry[];
};

export type Tech = {
  name: string;
  icon: { path: string; hex: string } | null;
};

export type SkillGroup = {
  label: string;
  items: Tech[];
};

export type HabilidadesData = {
  command: string;
  groups: SkillGroup[];
};

export type ContactChannel = {
  label: string;
  value: string;
  href: string;
  icon: "mail" | "phone" | "map-pin" | "github" | "external-link";
};

export type ContactoData = {
  command: string;
  channels: ContactChannel[];
};

function icon(si: { path: string; hex: string }, hexOverride?: string) {
  return { path: si.path, hex: hexOverride ?? si.hex };
}

export const hero: HeroData = {
  name: "JorgeMike",
  role: "Desarrollador Fullstack",
  welcome: "Bienvenido a mi portafolio",
  prompt: "mike@portfolio:~$",
  whoamiCommand: "whoami",
};

export const resumen: ResumenData = {
  command: "cat ./resumen.txt",
  summary:
    "Desarrollador Fullstack apasionado por la automatización y el desarrollo de herramientas que agilizan el trabajo. Me gusta resolver problemas de raíz, aprender y construir software.",
  stats: [
    { value: "4+", label: "años de experiencia" },
    { value: "20+", label: "desarrolladores mentoreados" },
    { value: "40%", label: "menos tiempo en creación de contenido" },
    { value: "60%", label: "menos errores con auditorías de IA" },
  ],
  imageCommand: "imgcat ./foto.png",
  imageAlt: "Jorge Miguel Alvarado Reyes",
};

export const experiencia: ExperienciaData = {
  command: "experiencia --historial",
  entries: [
    {
      company: "Content-Oh!",
      companyShort: "Content-Oh!",
      position: "Desarrollador Fullstack",
      startDate: "2025-07",
      endDate: "presente",
      location: "Remoto",
      highlights: [
        "Módulos de extremo a extremo sobre AWS (Lambda, S3, RDS) y React",
        "Reduje 40% los tiempos de contenido y 60% los errores con IA generativa",
      ],
    },
    {
      company: "Centro de Desarrollo Tecnológico (CEDETEC), FES Acatlán - UNAM",
      companyShort: "CEDETEC — UNAM",
      position: "Tech Lead",
      startDate: "2025-01",
      endDate: "2025-06",
      location: "Naucalpan, México (presencial)",
      highlights: [
        "Coordiné equipos de desarrollo y supervisé Pull Requests antes de cada despliegue",
      ],
    },
    {
      company: "Independiente (Freelance) - Concesionaria de autos",
      companyShort: "Freelance — Concesionaria",
      position: "Desarrollador Fullstack",
      startDate: "2024-01",
      endDate: "2024-12",
      location: "Remoto",
      highlights: [
        "Sistema de citas e inspecciones, de requisitos a despliegue (Next.js, MongoDB)",
      ],
    },
    {
      company: "Centro de Desarrollo Tecnológico (CEDETEC), FES Acatlán - UNAM",
      companyShort: "CEDETEC — UNAM",
      position: "Desarrollador Fullstack",
      startDate: "2023-09",
      endDate: "2024-12",
      location: "Naucalpan, México (presencial)",
      highlights: [
        "Sistema de Evaluación Docente: reportes de 2-3 semanas manuales a 5 minutos",
      ],
    },
    {
      company: "Centro de Desarrollo Tecnológico (CEDETEC), FES Acatlán - UNAM",
      companyShort: "CEDETEC — UNAM",
      position: "Desarrollador Frontend",
      startDate: "2022-08",
      endDate: "2023-08",
      location: "Naucalpan, México (presencial)",
      highlights: [
        "Maquetas en Figma traducidas a código con Next.js y TypeScript",
      ],
    },
  ],
};

export const proyectos: ProyectosData = {
  command: "ls ./proyectos",
  entries: [
    {
      name: "Sistema de Registro de Eventos",
      date: "2022-2025",
      highlights: [
        "Generación de eventos y formularios con cupos, correos automáticos y pases de lista por QR",
        "Roles de administrador y staff, banners dinámicos y metaetiquetas SEO por evento",
        "Reportes en Excel de las respuestas recopiladas",
      ],
    },
    {
      name: "Sistema de Encuestas de Evaluación Docente",
      date: "2022-2025",
      highlights: [
        "Cuestionarios dinámicos aplicados por un encuestador, con roles por carrera",
        "Revisión de respuestas en tiempo real por grupo, materia y carrera",
        "Reportes agregados e individuales a nivel profesor, grupo, materia y carrera",
      ],
    },
    {
      name: "Sistema de Censo de Activos",
      date: "2022-2025",
      highlights: [
        "Censo de materiales de trabajo mediante escaneo de códigos de barras",
        "Búsqueda, creación y edición de registros para auditorías y ubicación de activos",
      ],
    },
    {
      name: "Sistema de Votaciones",
      date: "2022-2025",
      highlights: [
        "Registro de planillas de candidatos y lógica de votación por puesto",
        "Paneles en tiempo real con WebSockets para un monitor electoral",
        "Generación automática de actas de resultados",
      ],
    },
    {
      name: "Sistema de Directorio de Trabajadores",
      date: "2022-2025",
      highlights: [
        "Búsqueda y registro interno de trabajadores de la facultad",
      ],
    },
    {
      name: "Página web CEDETEC",
      date: "2022-2025",
      highlights: [
        "Sitio informativo semi-estático con servicios, horarios y proyectos del centro",
        "Módulo de eventos internos con asistencia, banners dinámicos y comentarios",
      ],
    },
    {
      name: "Página web PAIDI",
      date: "2022-2025",
      highlights: [
        "Sitio informativo estático del Programa de Apoyo a la Investigación",
      ],
    },
    {
      name: "Chatbot de IA con NLP — misProfesores.com",
      date: "2025",
      highlights: [
        "Web scraping, pipeline ETL y almacenamiento en GCP, expuesto vía API REST con FastAPI",
        "Frontend en React con interacciones en tiempo real y respuestas de Google Gemini",
        "Despliegue completo (datos, backend y frontend) en Google Cloud Platform",
      ],
    },
    {
      name: "Calculadora de Interés Moratorio",
      date: "Escolar",
      url: "https://jorgemike.github.io/calculadora_interes_moratorio/",
      highlights: ["Calculadora de interés moratorio"],
    },
    {
      name: "Farmacia — UI E-commerce",
      date: "Escolar",
      url: "https://jorgemike.github.io/Farmacia/",
      highlights: ["UI de e-commerce de farmacia"],
    },
  ],
};

export const habilidades: HabilidadesData = {
  command: "habilidades --stack",
  groups: [
    {
      label: "Backend",
      items: [
        { name: "Node.js", icon: icon(siNodedotjs) },
        { name: "NestJS", icon: icon(siNestjs) },
        { name: "Express.js", icon: icon(siExpress) },
        { name: "Python", icon: icon(siPython) },
        { name: "FastAPI", icon: icon(siFastapi) },
        { name: "JWT / OAuth 2.0", icon: icon(siJsonwebtokens) },
      ],
    },
    {
      label: "Frontend",
      items: [
        { name: "React", icon: icon(siReact) },
        { name: "Next.js", icon: icon(siNextdotjs, "ffffff") },
        { name: "Redux", icon: icon(siRedux) },
        { name: "TypeScript", icon: icon(siTypescript) },
        { name: "JavaScript", icon: icon(siJavascript) },
        { name: "Vue.js", icon: icon(siVuedotjs) },
        { name: "HTML", icon: icon(siHtml5) },
        { name: "CSS", icon: icon(siCss) },
        { name: "SASS", icon: icon(siSass) },
        { name: "Tailwind CSS", icon: icon(siTailwindcss) },
      ],
    },
    {
      label: "Bases de datos",
      items: [
        { name: "MySQL", icon: icon(siMysql) },
        { name: "MariaDB", icon: icon(siMariadb) },
        { name: "MongoDB", icon: icon(siMongodb) },
      ],
    },
    {
      label: "Nube y DevOps",
      items: [
        { name: "AWS", icon: null },
        { name: "Google Cloud", icon: icon(siGooglecloud) },
        { name: "Docker", icon: icon(siDocker) },
        { name: "Jenkins", icon: icon(siJenkins) },
        { name: "NGINX", icon: icon(siNginx) },
        { name: "Git", icon: icon(siGit) },
        { name: "GitHub Actions", icon: icon(siGithubactions) },
      ],
    },
    {
      label: "Herramientas y calidad",
      items: [
        { name: "Jest", icon: icon(siJest) },
        { name: "Postman", icon: icon(siPostman) },
        { name: "Looker Studio", icon: icon(siLooker) },
        { name: "Linux", icon: icon(siLinux) },
      ],
    },
    {
      label: "IA y automatización",
      items: [
        { name: "Gemini", icon: icon(siGooglegemini) },
        { name: "ChatGPT", icon: null },
        { name: "Claude", icon: icon(siClaude) },
        { name: "Hugging Face", icon: icon(siHuggingface) },
      ],
    },
    {
      label: "Metodologías y diseño",
      items: [
        { name: "Scrum", icon: null },
        { name: "Jira", icon: icon(siJira) },
        { name: "Figma", icon: icon(siFigma) },
      ],
    },
  ],
};

export const heroTechIcons: Tech[] = [
  { name: "React", icon: icon(siReact) },
  { name: "Next.js", icon: icon(siNextdotjs, "ffffff") },
  { name: "TypeScript", icon: icon(siTypescript) },
  { name: "Node.js", icon: icon(siNodedotjs) },
  { name: "NestJS", icon: icon(siNestjs) },
  { name: "Python", icon: icon(siPython) },
  { name: "FastAPI", icon: icon(siFastapi) },
  { name: "Tailwind CSS", icon: icon(siTailwindcss) },
  { name: "MongoDB", icon: icon(siMongodb) },
  { name: "Google Cloud", icon: icon(siGooglecloud) },
  { name: "Docker", icon: icon(siDocker) },
  { name: "Git", icon: icon(siGit) },
];

export const contacto: ContactoData = {
  command: "contacto --canales",
  channels: [
    {
      label: "Email",
      value: "miguel.alvarado.dev@gmail.com",
      href: "mailto:miguel.alvarado.dev@gmail.com",
      icon: "mail",
    },
    {
      label: "Teléfono",
      value: "+52 55 4695 1819",
      href: "tel:+525546951819",
      icon: "phone",
    },
    {
      label: "Ubicación",
      value: "CDMX, México",
      href: "",
      icon: "map-pin",
    },
    {
      label: "LinkedIn",
      value: "jorge-alvarado-0bb17b218",
      href: "https://linkedin.com/in/jorge-alvarado-0bb17b218",
      icon: "external-link",
    },
    {
      label: "GitHub",
      value: "JorgeMike",
      href: "https://github.com/JorgeMike",
      icon: "github",
    },
  ],
};

export const cv = {
  hero,
  resumen,
  experiencia,
  proyectos,
  habilidades,
  contacto,
};
