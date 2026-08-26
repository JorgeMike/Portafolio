import { experiencia } from '../../data/experiencia'

function formatRange(start: string, end: string) {
  return `${start} → ${end}`
}

function Experiencia() {
  return (
    <section id="experiencia" className="mx-auto max-w-3xl px-6 py-24">
      <h2 className="text-sm text-term-green-dim">$ experiencia --historial</h2>
      <p className="mt-1 text-2xl font-semibold text-text md:text-3xl">Experiencia</p>

      <ol className="mt-10 flex flex-col gap-10 border-l border-border pl-6">
        {experiencia.entries.map((entry) => (
          <li key={`${entry.company}-${entry.position}-${entry.startDate}`} className="relative">
            <span className="absolute top-1.5 -left-[29px] h-2.5 w-2.5 rounded-full bg-term-green" />

            <p className="text-xs text-term-green-dim md:text-sm">
              {formatRange(entry.startDate, entry.endDate)}
            </p>
            <h3 className="mt-1 text-lg font-semibold text-text md:text-xl">{entry.position}</h3>
            <p className="text-sm text-text-dim md:text-base">
              {entry.company} · {entry.location}
            </p>

            <ul className="mt-3 flex flex-col gap-1.5">
              {entry.highlights.map((highlight) => (
                <li key={highlight} className="text-sm text-text md:text-base">
                  <span className="text-term-green">›</span> {highlight}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experiencia
