import { useState } from 'react'
import { resumen } from '../../data/resumen'
import { useTypewriter } from '../../lib/useTypewriter'
import { useInView } from '../../lib/useInView'
import Reveal from '../terminal/Reveal'
import Cursor from '../terminal/Cursor'

function Resumen() {
  const { ref, inView } = useInView<HTMLElement>()
  const [showSummary, setShowSummary] = useState(false)
  const [showStats, setShowStats] = useState(false)

  const command = useTypewriter(resumen.command, {
    start: inView,
    speed: 70,
    onDone: () => setTimeout(() => setShowSummary(true), 200),
  })

  return (
    <section
      id="resumen"
      ref={ref}
      className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-6 py-24"
    >
      <h2 className="text-sm text-term-green-dim">
        $ {command.output}
        {!command.done && <Cursor />}
      </h2>

      {showSummary && (
        <Reveal onAnimationComplete={() => setShowStats(true)}>
          <p className="mt-4 text-base leading-relaxed text-text-dim md:text-lg">
            {resumen.summary}
          </p>
        </Reveal>
      )}

      {showStats && (
        <Reveal>
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10 md:grid-cols-4">
            {resumen.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-4xl font-semibold text-term-green md:text-5xl">
                  {stat.value}
                </dd>
                <dd className="mt-2 text-sm text-text md:text-base">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </section>
  )
}

export default Resumen
