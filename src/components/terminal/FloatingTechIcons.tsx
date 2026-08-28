import { useMemo } from "react";
import type { Tech } from "../../data/cv";
import TechIcon from "./TechIcon";

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

type Placement = {
  tech: Tech;
  corner: Corner;
  verticalPx: number;
  horizontalPx: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
};

const CORNERS: Corner[] = ["top-left", "top-right", "bottom-left", "bottom-right"];

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function layoutIcons(techs: Tech[], seed: number): Placement[] {
  const random = seededRandom(seed);

  const cornerSlot: Record<Corner, number> = {
    "top-left": 0,
    "top-right": 0,
    "bottom-left": 0,
    "bottom-right": 0,
  };
  const cornerTotal: Record<Corner, number> = {
    "top-left": 0,
    "top-right": 0,
    "bottom-left": 0,
    "bottom-right": 0,
  };
  techs.forEach((_, index) => cornerTotal[CORNERS[index % 4]]++);

  return techs.map((tech, index) => {
    const corner = CORNERS[index % 4];
    const slot = cornerSlot[corner]++;
    const total = cornerTotal[corner];

    // Fan each corner's icons out across a quarter-circle arc pointing away
    // from the terminal, at varying distances, so they scatter instead of
    // lining up on a single diagonal.
    const arcStep = 90 / Math.max(total, 1);
    const angleDeg = slot * arcStep + random() * arcStep * 0.8;
    const angleRad = (angleDeg * Math.PI) / 180;
    const distance = 60 + random() * 80;

    const verticalPx = -10 - Math.sin(angleRad) * distance;
    const horizontalPx = -10 - Math.cos(angleRad) * distance;

    return {
      tech,
      corner,
      verticalPx,
      horizontalPx,
      size: 22 + Math.floor(random() * 30),
      delay: random() * 1.2,
      duration: 7 + random() * 5,
      drift: 6 + random() * 8,
    };
  });
}

function FloatingTechIcon({ placement, index }: { placement: Placement; index: number }) {
  const { tech, corner, verticalPx, horizontalPx, size, delay, duration, drift } = placement;
  if (!tech.icon) return null;

  const [vSide, hSide] = corner.split("-") as ["top" | "bottom", "left" | "right"];

  return (
    <div
      className="absolute"
      style={{
        [vSide]: `${verticalPx}px`,
        [hSide]: `${horizontalPx}px`,
        animation: `tech-icon-float-${index % 3} ${duration}s ease-in-out ${delay + 1.4}s infinite`,
        // @ts-expect-error custom property consumed by the keyframes below
        "--drift": `${drift}px`,
      }}
    >
      <div
        className="tech-icon-pixelate flex items-center justify-center rounded-md border border-border bg-surface/80 backdrop-blur-sm [&_svg]:h-[55%] [&_svg]:w-[55%]"
        style={{
          width: size,
          height: size,
          animationDelay: `${delay}s`,
        }}
      >
        <TechIcon path={tech.icon.path} hex={tech.icon.hex} label={tech.name} />
      </div>
    </div>
  );
}

function FloatingTechIcons({ techs, seed = 1 }: { techs: Tech[]; seed?: number }) {
  const placements = useMemo(() => layoutIcons(techs, seed), [techs, seed]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-visible lg:block"
    >
      {placements.map((placement, index) => (
        <FloatingTechIcon key={placement.tech.name} placement={placement} index={index} />
      ))}

      <style>{`
        @keyframes tech-icon-pixelate {
          0% {
            opacity: 0;
            filter: blur(6px) saturate(0.4) contrast(1.6);
            image-rendering: pixelated;
            transform: scale(0.7);
          }
          60% {
            opacity: 1;
            filter: blur(2px) saturate(0.7) contrast(1.3);
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            filter: blur(0) saturate(1) contrast(1);
            transform: scale(1);
          }
        }

        .tech-icon-pixelate {
          opacity: 0;
          animation: tech-icon-pixelate 1.1s steps(6, end) forwards;
        }

        @keyframes tech-icon-float-0 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(calc(var(--drift) * 0.4), var(--drift)); }
        }
        @keyframes tech-icon-float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(calc(var(--drift) * -0.5), calc(var(--drift) * -1)); }
        }
        @keyframes tech-icon-float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(var(--drift), calc(var(--drift) * -0.3)); }
        }
      `}</style>
    </div>
  );
}

export default FloatingTechIcons;
