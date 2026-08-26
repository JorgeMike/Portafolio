export type HeroCta = {
  label: string
  command: string
  target: string
}

export type HeroData = {
  name: string
  role: string
  prompt: string
  whoamiCommand: string
  ctasCommand: string
  imageCommand: string
  imageAlt: string
  ctas: HeroCta[]
}

export const hero: HeroData = {
  name: 'Jorge Miguel Alvarado Reyes',
  role: 'Desarrollador Fullstack',
  prompt: 'visitor@portfolio:~$',
  whoamiCommand: 'whoami',
  ctasCommand: 'ls ./actions',
  imageCommand: 'imgcat ./foto.png',
  imageAlt: 'Jorge Miguel Alvarado Reyes',
  ctas: [
    {
      label: 'Contacto',
      command: 'cd ./contacto',
      target: 'contacto',
    },
    {
      label: 'Experiencia',
      command: 'cat ./experiencia.log',
      target: 'experiencia',
    },
  ],
}
