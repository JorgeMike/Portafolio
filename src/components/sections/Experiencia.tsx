import { useState } from 'react'
import { experiencia, type ExperienciaEntry } from '../../data/experiencia'
import { useTypewriter } from '../../lib/useTypewriter'
import { useInView } from '../../lib/useInView'
import Reveal from '../terminal/Reveal'
import Cursor from '../terminal/Cursor'

const MONTHS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']

function formatDate(date: string) {
  if (date === 'presente') return 'Presente'

  const [year, month] = date.split('-')
  const monthLabel = MONTHS[Number(month) - 1]
  return `${monthLabel} ${year}`
}

function formatRange(start: string, end: string) {
  return `${formatDate(start)} → ${formatDate(end)}`
}

function EntryCard({ entry, featured }: { entry: ExperienciaEntry; featured?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-2 rounded-md border p-5 ${
        featured ? 'border-term-green-dim' : 'border-border'
      }`}
    >
      <p className="text-xs text-term-green-dim md:text-sm">
        {formatRange(entry.startDate, entry.endDate)}
      </p>
      <h3 className="text-lg font-semibold text-text md:text-xl">{entry.position}</h3>
      <p className="text-sm text-text-dim md:text-base">{entry.companyShort}</p>

      <ul className="mt-1 flex flex-col gap-1.5">
        {entry.highlights.map((highlight) => (
          <li key={highlight} className="text-sm text-text md:text-base">
            <span className="text-term-green">›</span> {highlight}
          </li>
        ))}
      </ul>
    </div>
  )
}

function Experiencia() {
  const { ref, inView } = useInView<HTMLElement>()
  const [showContent, setShowContent] = useState(false)

  const command = useTypewriter(experiencia.command, {
    start: inView,
    speed: 70,
    onDone: () => setTimeout(() => setShowContent(true), 200),
  })

  const [latest, ...rest] = experiencia.entries
  const columnLeft = rest.filter((_, index) => index % 2 === 0)
  const columnRight = rest.filter((_, index) => index % 2 === 1)

  return (
    <section id="experiencia" ref={ref} className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-sm text-term-green-dim">
        $ {command.output}
        {!command.done && <Cursor />}
      </h2>
      <p className="mt-1 text-2xl font-semibold text-text md:text-3xl">Experiencia</p>

      {showContent && (
        <Reveal className="mt-10">
          <EntryCard entry={latest} featured />

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="flex flex-col gap-16">
              {columnLeft.map((entry) => (
                <EntryCard key={`${entry.company}-${entry.position}-${entry.startDate}`} entry={entry} />
              ))}
            </div>
            <div className="flex flex-col gap-16 md:mt-14">
              {columnRight.map((entry) => (
                <EntryCard key={`${entry.company}-${entry.position}-${entry.startDate}`} entry={entry} />
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </section>
  )
}

export default Experiencia
