import { useState } from "react";
import { experiencia, type ExperienciaEntry } from "../../data/cv";
import { useInView } from "../../lib/useInView";
import { useTypewriter } from "../../lib/useTypewriter";
import Reveal from "../terminal/Reveal";
import Cursor from "../terminal/Cursor";
import FloatingPixels from "../terminal/FloatingPixels";
import FloatingPixel from "../terminal/FloatingPixel";

const MONTHS = [
  "Ene",
  "Feb",
  "Mar",
  "Abr",
  "May",
  "Jun",
  "Jul",
  "Ago",
  "Sep",
  "Oct",
  "Nov",
  "Dic",
];

function formatDate(date: string) {
  if (date === "presente") return "Presente";

  const [year, month] = date.split("-");
  const monthLabel = MONTHS[Number(month) - 1];
  return `${monthLabel} ${year}`;
}

function formatRange(start: string, end: string) {
  return `${formatDate(start)} → ${formatDate(end)}`;
}

function EvidencePlaceholder({ entry }: { entry: ExperienciaEntry }) {
  const initials = entry.companyShort
    .replace(/[^A-Za-zÀ-ÿ0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div className="grid h-full grid-cols-2 gap-3">
      {[0, 1, 2, 3].map((slot) => (
        <div
          key={slot}
          className="flex aspect-video items-center justify-center rounded-md border border-border bg-surface"
          style={{ opacity: 0.55 + slot * 0.1 }}
        >
          <span className="font-mono text-xs text-term-green-dim md:text-sm">
            {initials}
          </span>
        </div>
      ))}
    </div>
  );
}

function EntryCard({ entry }: { entry: ExperienciaEntry }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 md:items-stretch">
      <div className="flex flex-col gap-2 rounded-md border border-term-green-dim p-6">
        <p className="text-xs text-term-green-dim md:text-sm">
          {formatRange(entry.startDate, entry.endDate)}
        </p>
        <h3 className="text-xl font-semibold text-text md:text-2xl">
          {entry.position}
        </h3>
        <p className="text-sm text-text-dim md:text-base">
          {entry.companyShort}
        </p>

        <ul className="mt-2 flex flex-col gap-2">
          {entry.highlights.map((highlight) => (
            <li key={highlight} className="text-sm text-text md:text-base">
              <span className="text-term-green">›</span> {highlight}
            </li>
          ))}
        </ul>
      </div>

      <EvidencePlaceholder entry={entry} />
    </div>
  );
}

function Experiencia() {
  const { ref, inView } = useInView<HTMLElement>();
  const [showContent, setShowContent] = useState(false);

  const command = useTypewriter(experiencia.command, {
    start: inView,
    speed: 70,
    onDone: () => setTimeout(() => setShowContent(true), 200),
  });

  return (
    <section
      id="experiencia"
      ref={ref}
      className="relative"
      style={{ height: "200vh" }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-6 py-24">
        <FloatingPixels seed={7} count={30} />

        <div className="relative mx-auto w-full max-w-5xl">
          <h2 className="text-sm text-term-green-dim">
            $ {command.output}
            {!command.done && <Cursor />}
          </h2>

          {showContent && (
            <Reveal>
              <p className="mt-1 text-2xl font-semibold text-text md:text-3xl">
                Experiencia
              </p>

              <div className="mt-8">
                <EntryCard entry={experiencia.entries[0]} />
              </div>
            </Reveal>
          )}
        </div>

        {showContent && (
          <div className="absolute inset-x-0 bottom-10 mx-auto flex w-full max-w-md justify-between px-8">
            {experiencia.entries.slice(1).map((entry, index) => (
              <FloatingPixel
                key={`${entry.company}-${entry.position}-${entry.startDate}`}
                size={12 + index * 2}
                variant={(index % 3) as 0 | 1 | 2}
                duration={6 + index * 1.5}
                delay={index * 0.4}
                drift={8 + index * 2}
                opacity={0.5 + index * 0.05}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Experiencia;
