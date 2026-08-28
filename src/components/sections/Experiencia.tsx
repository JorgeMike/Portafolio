import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { experiencia, type ExperienciaEntry } from "../../data/cv";
import { useInView } from "../../lib/useInView";
import { useTypewriter } from "../../lib/useTypewriter";
import Cursor from "../terminal/Cursor";
import FloatingPixels from "../terminal/FloatingPixels";

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

function entryId(entry: ExperienciaEntry) {
  return `${entry.company}-${entry.position}-${entry.startDate}`;
}

function initialsOf(entry: ExperienciaEntry) {
  return entry.companyShort
    .replace(/[^A-Za-zÀ-ÿ0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();
}

function EvidencePlaceholder({ entry }: { entry: ExperienciaEntry }) {
  const initials = initialsOf(entry);

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
    <motion.div
      key={entryId(entry)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="grid gap-6 rounded-md border border-term-green-dim md:grid-cols-2 md:items-stretch"
    >
      <div className="flex flex-col gap-2 p-6">
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

      <div className="p-6 pl-0 md:pl-0">
        <EvidencePlaceholder entry={entry} />
      </div>
    </motion.div>
  );
}

function ThumbPixel({
  entry,
  index,
}: {
  entry: ExperienciaEntry;
  index: number;
}) {
  return (
    <motion.div
      key={entryId(entry)}
      layout
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 0.6, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="h-3.5 w-3.5 rounded-md bg-term-green"
      title={`${entry.position} · ${entry.companyShort}`}
      style={{ order: index }}
    />
  );
}

function Experiencia() {
  const { ref: sectionInViewRef, inView } = useInView<HTMLElement>({
    threshold: 0,
    rootMargin: "-1px",
  });
  const [showContent, setShowContent] = useState(false);

  const command = useTypewriter(experiencia.command, {
    start: inView,
    speed: 70,
    onDone: () => setTimeout(() => setShowContent(true), 200),
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionInViewRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    const total = experiencia.entries.length;
    const index = Math.min(total - 1, Math.floor(progress * total));
    setActiveIndex(index);
  });

  const entries = experiencia.entries;
  const passed = entries.slice(0, activeIndex);
  const upcoming = entries.slice(activeIndex + 1);

  return (
    <section
      id="experiencia"
      ref={sectionInViewRef}
      className="relative"
      style={{ height: `${entries.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden px-6 py-24">
        <FloatingPixels seed={7} count={30} />

        <div className="relative mx-auto w-full max-w-5xl">
          <h2 className="text-sm text-term-green-dim">
            $ {command.output}
            {!command.done && <Cursor />}
          </h2>

          {showContent && (
            <>
              <p className="mt-1 text-2xl font-semibold text-text md:text-3xl">
                Experiencia
              </p>

              <div className="mt-8">
                <AnimatePresence mode="wait">
                  <EntryCard entry={entries[activeIndex]} />
                </AnimatePresence>
              </div>
            </>
          )}
        </div>

        {showContent && (
          <div className="absolute inset-x-0 top-10 mx-auto flex w-full max-w-md flex-wrap justify-center gap-3 px-8">
            <AnimatePresence>
              {passed.map((entry, index) => (
                <ThumbPixel key={entryId(entry)} entry={entry} index={index} />
              ))}
            </AnimatePresence>
          </div>
        )}

        {showContent && (
          <div className="absolute inset-x-0 bottom-10 mx-auto flex w-full max-w-md flex-wrap justify-center gap-3 px-8">
            <AnimatePresence>
              {upcoming.map((entry, index) => (
                <ThumbPixel key={entryId(entry)} entry={entry} index={index} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
}

export default Experiencia;
