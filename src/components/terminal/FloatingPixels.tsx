import { useMemo } from "react";

type Pixel = {
  side: "left" | "right";
  size: number;
  top: number;
  inset: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

function seededRandom(seed: number) {
  let value = seed;
  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
}

function generatePixels(seed: number, count: number): Pixel[] {
  const random = seededRandom(seed);

  return Array.from({ length: count }, (_, index) => ({
    side: index % 2 === 0 ? "left" : "right",
    size: 8 + Math.floor(random() * 20),
    top: 5 + random() * 90,
    inset: 1 + random() * 7,
    duration: 6 + random() * 6,
    delay: random() * 5,
    drift: 10 + random() * 16,
    opacity: 0.25 + random() * 0.45,
  }));
}

function FloatingPixels({
  seed = 1,
  count = 18,
}: {
  seed?: number;
  count?: number;
}) {
  const pixels = useMemo(() => generatePixels(seed, count), [seed, count]);

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
    >
      {pixels.map((pixel, index) => (
        <span
          key={index}
          className="absolute bg-term-green"
          style={{
            [pixel.side]: `${pixel.inset}%`,
            top: `${pixel.top}%`,
            width: pixel.size,
            height: pixel.size,
            opacity: pixel.opacity,
            animation: `pixel-float-${index % 3} ${pixel.duration}s ease-in-out ${pixel.delay}s infinite`,
            // @ts-expect-error custom property consumed by the keyframes below
            "--drift": `${pixel.drift}px`,
          }}
        />
      ))}

      <style>{`
        @keyframes pixel-float-0 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(calc(var(--drift) * 0.4), var(--drift)); }
        }
        @keyframes pixel-float-1 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(calc(var(--drift) * -0.5), calc(var(--drift) * -1)); }
        }
        @keyframes pixel-float-2 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(var(--drift), calc(var(--drift) * -0.3)); }
        }
      `}</style>
    </div>
  );
}

export default FloatingPixels;
