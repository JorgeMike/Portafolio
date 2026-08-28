import { useState } from "react";
import { proyectos, type ProyectoEntry } from "../../data/cv";
import { useTypewriter } from "../../lib/useTypewriter";
import { useInView } from "../../lib/useInView";
import Reveal from "../terminal/Reveal";
import Cursor from "../terminal/Cursor";

function ProyectoCard({ entry }: { entry: ProyectoEntry }) {
  return (
    <div className="flex flex-col gap-2 rounded-md border border-border p-5">
      <p className="text-xs text-term-green-dim md:text-sm">{entry.date}</p>
      <h3 className="text-lg font-semibold text-text md:text-xl">
        {entry.url ? (
          <a
            href={entry.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-term-green hover:underline"
          >
            {entry.name}
          </a>
        ) : (
          entry.name
        )}
      </h3>

      <ul className="mt-1 flex flex-col gap-1.5">
        {entry.highlights.map((highlight) => (
          <li key={highlight} className="text-sm text-text md:text-base">
            <span className="text-term-green">›</span> {highlight}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Proyectos() {
  const { ref, inView } = useInView<HTMLElement>();
  const [showContent, setShowContent] = useState(false);

  const command = useTypewriter(proyectos.command, {
    start: inView,
    speed: 70,
    onDone: () => setTimeout(() => setShowContent(true), 200),
  });

  return (
    <section
      id="proyectos"
      ref={ref}
      className="mx-auto flex flex-col min-h-screen max-w-4xl px-6 py-34"
    >
      <h2 className="text-sm text-term-green-dim">
        $ {command.output}
        {!command.done && <Cursor />}
      </h2>

      {showContent && (
        <Reveal>
          <p className="mt-1 text-2xl font-semibold text-text md:text-3xl">
            Proyectos
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {proyectos.entries.map((entry) => (
              <ProyectoCard key={entry.name} entry={entry} />
            ))}
          </div>
        </Reveal>
      )}
    </section>
  );
}

export default Proyectos;
