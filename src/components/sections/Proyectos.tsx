import { useState } from "react";
import { proyectos, type ProyectoEntry } from "../../data/cv";
import { useTypewriter } from "../../lib/useTypewriter";
import { useInView } from "../../lib/useInView";
import Reveal from "../terminal/Reveal";
import Cursor from "../terminal/Cursor";

function hashSeed(n: number) {
  let x = n;
  x = ((x >>> 16) ^ x) * 0x45d9f3b;
  x = ((x >>> 16) ^ x) * 0x45d9f3b;
  x = (x >>> 16) ^ x;
  return ((x >>> 0) % 2147483646) + 1;
}

function seededRandom(seed: number) {
  let value = hashSeed(seed);
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function jitterFor(entrySeed: number, slot: number) {
  const random = seededRandom(entrySeed * 97 + slot * 31 + 1);
  return {
    rotate: random() * 2 - 1,
    offsetY: random() * 2 - 1,
  };
}

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

function FeaturedProyectoCard({
  entry,
  seed,
}: {
  entry: ProyectoEntry;
  seed: number;
}) {
  const images = entry.images ?? [];

  return (
    <div className="flex flex-col gap-6 rounded-lg border border-term-green-dim/40 bg-surface/40 p-6 md:flex-row md:p-8">
      <div className="flex flex-col gap-2 md:w-2/5">
        <p className="text-xs text-term-green-dim md:text-sm">{entry.date}</p>
        <h3 className="text-xl font-semibold text-text md:text-2xl">
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

        <ul className="mt-2 flex flex-col gap-2">
          {entry.highlights.map((highlight) => (
            <li key={highlight} className="text-sm text-text md:text-base">
              <span className="text-term-green">›</span> {highlight}
            </li>
          ))}
        </ul>
      </div>

      {images.length > 0 && (
        <div className="grid flex-1 grid-cols-2 content-start gap-4 py-2 md:gap-5">
          {images.map((src, index) => {
            const jitter = jitterFor(seed, index);
            const isWide = index === 0 && images.length % 2 === 1;

            return (
              <img
                key={src}
                src={src}
                alt={`${entry.name} · imagen ${index + 1}`}
                className={`rounded border border-border object-cover shadow-lg shadow-black/40 ${
                  isWide ? "col-span-2 h-32 md:h-40" : "h-24 md:h-32"
                } w-full`}
                style={{
                  transform: `rotate(${jitter.rotate * 2.5}deg) translateY(${jitter.offsetY * 6}px)`,
                }}
              />
            );
          })}
        </div>
      )}
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

  const featured = proyectos.entries.filter((entry) => entry.featured);
  const rest = proyectos.entries.filter((entry) => !entry.featured);

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

          {featured.length > 0 && (
            <div className="mt-10 flex flex-col gap-6">
              {featured.map((entry, index) => (
                <FeaturedProyectoCard key={entry.name} entry={entry} seed={index + 1} />
              ))}
            </div>
          )}

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {rest.map((entry) => (
              <ProyectoCard key={entry.name} entry={entry} />
            ))}
          </div>
        </Reveal>
      )}
    </section>
  );
}

export default Proyectos;
