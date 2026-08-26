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
