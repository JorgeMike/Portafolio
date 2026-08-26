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
} from 'simple-icons'

export type Tech = {
  name: string
  icon: { path: string; hex: string } | null
}

export type SkillGroup = {
  label: string
  items: Tech[]
}

export type HabilidadesData = {
  command: string
  groups: SkillGroup[]
}

function icon(si: { path: string; hex: string }) {
  return { path: si.path, hex: si.hex }
}

export const habilidades: HabilidadesData = {
  command: 'habilidades --stack',
  groups: [
    {
      label: 'Backend',
      items: [
        { name: 'Node.js', icon: icon(siNodedotjs) },
        { name: 'NestJS', icon: icon(siNestjs) },
        { name: 'Express.js', icon: icon(siExpress) },
        { name: 'Python', icon: icon(siPython) },
        { name: 'FastAPI', icon: icon(siFastapi) },
        { name: 'JWT / OAuth 2.0', icon: icon(siJsonwebtokens) },
      ],
    },
    {
      label: 'Frontend',
      items: [
        { name: 'React', icon: icon(siReact) },
        { name: 'Next.js', icon: icon(siNextdotjs) },
        { name: 'Redux', icon: icon(siRedux) },
        { name: 'TypeScript', icon: icon(siTypescript) },
        { name: 'JavaScript', icon: icon(siJavascript) },
        { name: 'Vue.js', icon: icon(siVuedotjs) },
        { name: 'HTML', icon: icon(siHtml5) },
        { name: 'CSS', icon: icon(siCss) },
        { name: 'SASS', icon: icon(siSass) },
        { name: 'Tailwind CSS', icon: icon(siTailwindcss) },
      ],
    },
    {
      label: 'Bases de datos',
      items: [
        { name: 'MySQL', icon: icon(siMysql) },
        { name: 'MariaDB', icon: icon(siMariadb) },
        { name: 'MongoDB', icon: icon(siMongodb) },
      ],
    },
    {
      label: 'Nube y DevOps',
      items: [
        { name: 'AWS', icon: null },
        { name: 'Google Cloud', icon: icon(siGooglecloud) },
        { name: 'Docker', icon: icon(siDocker) },
        { name: 'Jenkins', icon: icon(siJenkins) },
        { name: 'NGINX', icon: icon(siNginx) },
        { name: 'Git', icon: icon(siGit) },
        { name: 'GitHub Actions', icon: icon(siGithubactions) },
      ],
    },
    {
      label: 'Herramientas y calidad',
      items: [
        { name: 'Jest', icon: icon(siJest) },
        { name: 'Postman', icon: icon(siPostman) },
        { name: 'Looker Studio', icon: icon(siLooker) },
        { name: 'Linux', icon: icon(siLinux) },
      ],
    },
    {
      label: 'IA y automatización',
      items: [
        { name: 'Gemini', icon: icon(siGooglegemini) },
        { name: 'ChatGPT', icon: null },
        { name: 'Claude', icon: icon(siClaude) },
        { name: 'Hugging Face', icon: icon(siHuggingface) },
      ],
    },
    {
      label: 'Metodologías y diseño',
      items: [
        { name: 'Scrum', icon: null },
        { name: 'Jira', icon: icon(siJira) },
        { name: 'Figma', icon: icon(siFigma) },
      ],
    },
  ],
}
