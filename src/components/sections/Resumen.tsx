import { useState } from "react";
import { resumen, hero } from "../../data/cv";
import { useTypewriter } from "../../lib/useTypewriter";
import { useInView } from "../../lib/useInView";
import heroImage from "../../assets/hero.png";
import Reveal from "../terminal/Reveal";
import Cursor from "../terminal/Cursor";

function Resumen() {
  const { ref, inView } = useInView<HTMLElement>();
  const [showSummary, setShowSummary] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [showImageLine, setShowImageLine] = useState(false);

  const command = useTypewriter(resumen.command, {
    start: inView,
    speed: 70,
    onDone: () => setTimeout(() => setShowSummary(true), 200),
  });

  const imageCmd = useTypewriter(resumen.imageCommand, {
    start: showSummary,
    speed: 70,
    onDone: () => setShowImageLine(true),
  });

  return (
    <section
      id="resumen"
      ref={ref}
      className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-24"
    >
      <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h2 className="text-sm text-term-green-dim">
            $ {command.output}
            {!command.done && <Cursor />}
          </h2>

          {showSummary && (
            <Reveal>
              <p className="mt-4 text-base leading-relaxed text-text-dim md:text-lg">
                {resumen.summary}
              </p>
            </Reveal>
          )}
        </div>

        {showSummary && (
          <Reveal className="relative mx-auto w-64 md:mx-0 md:w-80">
            <div
              aria-hidden
              className="absolute inset-0 -z-10 scale-125 rounded-full bg-term-green opacity-20 blur-3xl"
            />

            <div className="rounded-md border border-border bg-surface font-mono shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-[#ff5f56]" />
                <span className="h-2 w-2 rounded-full bg-[#ffbd2e]" />
                <span className="h-2 w-2 rounded-full bg-[#27c93f]" />
              </div>

              <div className="px-3 py-2">
                <p className="text-xs md:text-sm">
                  <span className="text-term-green">{hero.prompt}</span>{" "}
                  <span className="text-text">{imageCmd.output}</span>
                  {!imageCmd.done && <Cursor />}
                </p>
              </div>

              {showImageLine && (
                <Reveal className="border-t border-term-green-dim">
                  <img
                    src={heroImage}
                    alt={resumen.imageAlt}
                    className="w-full grayscale-40 contrast-125"
                  />
                </Reveal>
              )}
            </div>
          </Reveal>
        )}
      </div>

      {showImageLine && (
        <Reveal onAnimationComplete={() => setShowStats(true)}>
          <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-10 border-t border-border pt-10 md:grid-cols-4">
            {resumen.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd className="text-4xl font-semibold text-term-green md:text-5xl">
                  {stat.value}
                </dd>
                <dd className="mt-2 text-sm text-text md:text-base">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      )}
    </section>
  );
}

export default Resumen;
