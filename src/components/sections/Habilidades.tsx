import { useState } from 'react'
import { habilidades } from '../../data/habilidades'
import { useTypewriter } from '../../lib/useTypewriter'
import { useInView } from '../../lib/useInView'
import Reveal from '../terminal/Reveal'
import Cursor from '../terminal/Cursor'
import TechIcon from '../terminal/TechIcon'

function Habilidades() {
  const { ref, inView } = useInView<HTMLElement>()
  const [showContent, setShowContent] = useState(false)

  const command = useTypewriter(habilidades.command, {
    start: inView,
    speed: 70,
    onDone: () => setTimeout(() => setShowContent(true), 200),
  })

  return (
    <section id="habilidades" ref={ref} className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-sm text-term-green-dim">
        $ {command.output}
        {!command.done && <Cursor />}
      </h2>
      <p className="mt-1 text-2xl font-semibold text-text md:text-3xl">Habilidades</p>

      {showContent && (
        <Reveal className="mt-10">
          <div className="flex flex-col gap-8">
            {habilidades.groups.map((group) => (
              <div key={group.label}>
                <p className="text-xs text-term-green-dim md:text-sm">{group.label}</p>
                <div className="mt-3 flex flex-wrap gap-2.5">
                  {group.items.map((tech) => (
                    <span
                      key={tech.name}
                      className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm text-text"
                    >
                      {tech.icon ? (
                        <TechIcon path={tech.icon.path} hex={tech.icon.hex} label={tech.name} />
                      ) : (
                        <span className="h-5 w-5 shrink-0" />
                      )}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      )}
    </section>
  )
}

export default Habilidades
