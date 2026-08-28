import { Fragment, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useMotionValueEvent, useScroll } from "motion/react";
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

const PIXEL_SIZE = 14;
const CARD_MAX_WIDTH = 900;
const MINI_PIXEL_SIZE = 6;
const MINI_PIXEL_GAP = 3;
const CARD_PADDING = 24;
const CARD_CONTENT_GAP = 24;
const IMAGE_ASPECT_RATIO = 16 / 9;

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
    x: (random() * 2 - 1),
    y: (random() * 2 - 1),
    scale: 0.55 + random() * 1.1,
    rotate: random() * 2 - 1,
  };
}

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

function useViewportSize() {
  const [size, setSize] = useState(() => ({
    width: typeof window === "undefined" ? 1024 : window.innerWidth,
    height: typeof window === "undefined" ? 768 : window.innerHeight,
  }));

  useEffect(() => {
    const onResize = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return size;
}

type Role = "active" | "passed" | "upcoming";

type LayoutTarget = {
  x: number;
  y: number;
  width: number;
  height: number;
};

function zoneTarget(
  viewport: { width: number; height: number },
  zoneTop: number,
  zoneBottom: number,
  entrySeed: number,
  slotIndex: number,
  rowCount: number,
): LayoutTarget {
  const jitter = jitterFor(entrySeed, 0);
  const zoneWidth = Math.min(viewport.width * 0.7, CARD_MAX_WIDTH);
  const zoneX = viewport.width / 2 - zoneWidth / 2;
  const size = PIXEL_SIZE * jitter.scale;

  const slotWidth = zoneWidth / rowCount;
  const slotCenter = zoneX + slotWidth * (slotIndex + 0.5);
  const jitterRangeX = slotWidth * 0.3;

  const x = slotCenter + jitter.x * jitterRangeX;
  const y = (zoneTop + zoneBottom) / 2;

  return { x, y, width: size, height: size };
}

function galleryCellSize(cardWidth: number) {
  const contentWidth = cardWidth - CARD_PADDING * 2;
  const galleryWidth = contentWidth / 2 - CARD_CONTENT_GAP / 2;
  const cellWidth = (galleryWidth - CARD_CONTENT_GAP) / 2;
  const cellHeight = cellWidth / IMAGE_ASPECT_RATIO;

  return { cellWidth, cellHeight };
}

function activeTarget(viewport: { width: number; height: number }): LayoutTarget {
  const width = Math.min(viewport.width * 0.9, CARD_MAX_WIDTH);
  const { cellHeight } = galleryCellSize(width);
  const height = Math.min(
    viewport.height * 0.82,
    CARD_PADDING * 2 + cellHeight * 2 + CARD_CONTENT_GAP,
  );
  const x = viewport.width / 2 - width / 2;
  const y = viewport.height / 2 - height / 2;

  return { x, y, width, height };
}

function imageRestTarget(
  entryPixel: LayoutTarget,
  slot: number,
  entrySeed: number,
): LayoutTarget {
  const centerX = entryPixel.x + entryPixel.width / 2;
  const centerY = entryPixel.y + entryPixel.height / 2;

  const jitter = jitterFor(entrySeed, slot + 1);
  const angle = (slot / 4) * Math.PI * 2 + jitter.rotate * 1.5;
  const radiusX = MINI_PIXEL_GAP * (7 + Math.abs(jitter.x) * 10);
  const radiusY = MINI_PIXEL_GAP * (4 + Math.abs(jitter.y) * 5);
  const size = MINI_PIXEL_SIZE * jitter.scale;

  return {
    x: centerX + Math.cos(angle) * radiusX - size / 2,
    y: centerY + Math.sin(angle) * radiusY - size / 2,
    width: size,
    height: size,
  };
}

function imageActiveTarget(cardTarget: LayoutTarget, slot: number): LayoutTarget {
  const col = slot % 2;
  const row = Math.floor(slot / 2);

  const contentX = cardTarget.x + CARD_PADDING;
  const contentY = cardTarget.y + CARD_PADDING;
  const contentWidth = cardTarget.width - CARD_PADDING * 2;

  const galleryX = contentX + contentWidth / 2 + CARD_CONTENT_GAP / 2;
  const { cellWidth, cellHeight } = galleryCellSize(cardTarget.width);

  return {
    x: galleryX + col * (cellWidth + CARD_CONTENT_GAP),
    y: contentY + row * (cellHeight + CARD_CONTENT_GAP),
    width: cellWidth,
    height: cellHeight,
  };
}

function ImageNode({
  entry,
  slot,
  isActive,
  hidden,
  target,
}: {
  entry: ExperienciaEntry;
  slot: number;
  isActive: boolean;
  hidden: boolean;
  target: LayoutTarget;
}) {
  const initials = initialsOf(entry);

  const [dipping, setDipping] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setDipping(true);
    const timeout = setTimeout(() => setDipping(false), 700);
    return () => clearTimeout(timeout);
  }, [isActive]);

  const targetOpacity = hidden ? 0 : isActive ? 0.55 + slot * 0.1 : 0.6;
  const targetColor = isActive ? "var(--color-surface)" : "var(--color-term-green)";
  const springTransition = { type: "spring", stiffness: 90, damping: 18, mass: 1 } as const;

  return (
    <motion.div
      initial={false}
      animate={{
        x: target.x,
        y: target.y,
        width: target.width,
        height: target.height,
        opacity: dipping ? [targetOpacity, 0.15, targetOpacity] : targetOpacity,
        backgroundColor: targetColor,
        borderRadius: isActive ? 6 : 0,
      }}
      transition={{
        x: springTransition,
        y: springTransition,
        width: springTransition,
        height: springTransition,
        opacity: dipping
          ? { duration: 0.7, times: [0, 0.55, 1], ease: "easeInOut" }
          : { duration: 0.2 },
        backgroundColor: { duration: 0.3 },
        borderRadius: { duration: 0.3 },
      }}
      style={{ zIndex: isActive ? 11 : 1 }}
      className="absolute left-0 top-0 flex items-center justify-center overflow-hidden border border-border"
    >
      {isActive && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="font-mono text-xs text-term-green-dim md:text-sm"
        >
          {initials}
        </motion.span>
      )}
    </motion.div>
  );
}

function ExperienceNode({
  entry,
  role,
  target,
}: {
  entry: ExperienciaEntry;
  role: Role;
  target: LayoutTarget;
}) {
  const isActive = role === "active";
  const targetOpacity = isActive ? 1 : 0.6;

  const [dipping, setDipping] = useState(false);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setDipping(true);
    const timeout = setTimeout(() => setDipping(false), 700);
    return () => clearTimeout(timeout);
  }, [role]);

  const springTransition = { type: "spring", stiffness: 90, damping: 18, mass: 1 } as const;

  return (
    <motion.div
      initial={false}
      animate={{
        x: target.x,
        y: target.y,
        width: target.width,
        height: target.height,
        opacity: dipping ? [targetOpacity, 0.15, targetOpacity] : targetOpacity,
        borderRadius: isActive ? 8 : 0,
      }}
      transition={{
        x: springTransition,
        y: springTransition,
        width: springTransition,
        height: springTransition,
        opacity: dipping
          ? { duration: 0.7, times: [0, 0.55, 1], ease: "easeInOut" }
          : { duration: 0.2 },
        borderRadius: { duration: 0.3 },
      }}
      style={{ zIndex: isActive ? 10 : 1 }}
      className="absolute left-0 top-0 overflow-hidden border border-term-green-dim bg-bg"
    >
      <AnimatePresence initial={false}>
        {isActive ? (
          <motion.div
            key="full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, delay: isActive ? 0.15 : 0 }}
            className="h-full p-6"
          >
            <div className="flex h-full flex-col gap-2 overflow-y-auto md:w-1/2 md:pr-3">
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
          </motion.div>
        ) : (
          <motion.div
            key="pixel"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full w-full bg-term-green"
            title={`${entry.position} · ${entry.companyShort}`}
          />
        )}
      </AnimatePresence>
    </motion.div>
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
  const viewport = useViewportSize();
  const isMobile = viewport.width < 768;

  const cardTarget = activeTarget(viewport);
  const zoneMargin = 40;
  const zones = {
    passed: { top: zoneMargin + 56, bottom: cardTarget.y - zoneMargin },
    upcoming: {
      top: cardTarget.y + cardTarget.height + zoneMargin,
      bottom: viewport.height - zoneMargin,
    },
  };

  return (
    <section
      id="experiencia"
      ref={sectionInViewRef}
      className="relative"
      style={{ height: `${entries.length * 100}vh` }}
    >
      <div className="sticky top-0 h-screen overflow-hidden px-6 py-24">
        <FloatingPixels seed={7} count={30} />

        <div className="pointer-events-none absolute left-1/2 top-6 z-20 -translate-x-1/2 text-center">
          <h2 className="text-sm text-term-green-dim">
            $ {command.output}
            {!command.done && <Cursor />}
          </h2>

          {showContent && (
            <p className="mt-1 text-2xl font-semibold text-text md:text-3xl">
              Experiencia
            </p>
          )}
        </div>

        {showContent &&
          entries.map((entry, index) => {
            let role: Role = "upcoming";
            if (index === activeIndex) role = "active";
            else if (index < activeIndex) role = "passed";

            let target: LayoutTarget;
            if (role === "active") {
              target = cardTarget;
            } else if (role === "passed") {
              target = zoneTarget(
                viewport,
                zones.passed.top,
                zones.passed.bottom,
                index,
                index,
                activeIndex,
              );
            } else {
              target = zoneTarget(
                viewport,
                zones.upcoming.top,
                zones.upcoming.bottom,
                index,
                index - activeIndex - 1,
                entries.length - activeIndex - 1,
              );
            }

            const isActive = role === "active";

            return (
              <Fragment key={entryId(entry)}>
                <ExperienceNode entry={entry} role={role} target={target} />
                {[0, 1, 2, 3].map((slot) => (
                  <ImageNode
                    key={slot}
                    entry={entry}
                    slot={slot}
                    isActive={isActive}
                    hidden={isActive && isMobile}
                    target={
                      isActive
                        ? imageActiveTarget(target, slot)
                        : imageRestTarget(target, slot, index)
                    }
                  />
                ))}
              </Fragment>
            );
          })}
      </div>
    </section>
  );
}

export default Experiencia;
