import { useEffect, useState } from "react";
import { contacto, hero, heroTechIcons } from "../../data/cv";
import { useTypewriter } from "../../lib/useTypewriter";
import { useMouseParallax } from "../../lib/useMouseParallax";
import Reveal from "../terminal/Reveal";
import Cursor from "../terminal/Cursor";
import FloatingTechIcons from "../terminal/FloatingTechIcons";

function Hero() {
  const [showIdentity, setShowIdentity] = useState(false);
  const [grown, setGrown] = useState(false);

  const { ref: parallaxRef, offset } = useMouseParallax<HTMLDivElement>(4);

  const whoami = useTypewriter(hero.whoamiCommand, {
    speed: 90,
    onDone: () => setTimeout(() => setShowIdentity(true), 250),
  });

  useEffect(() => {
    const id = requestAnimationFrame(() => setGrown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div
        ref={parallaxRef}
        className="relative w-lg max-w-2xl"
        style={{ perspective: "1600px" }}
      >
        <div
          aria-hidden
          className="absolute inset-0 -z-10 scale-110 rounded-full bg-term-green opacity-20 blur-[100px]"
        />

        {showIdentity && <FloatingTechIcons techs={heroTechIcons} seed={3} />}

        <div
          className="relative rounded-md border border-border bg-surface font-mono shadow-2xl will-change-transform"
          style={{
            transform: `scale(${grown ? 1 : 0.35}) rotateY(${offset.x}deg) rotateX(${-offset.y}deg)`,
            transformStyle: "preserve-3d",
            opacity: grown ? 1 : 0,
            transition: grown
              ? "transform 300ms ease-out, opacity 300ms ease-out"
              : "transform 700ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 500ms ease-out",
          }}
        >
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-text-dim">portfolio — zsh</span>
          </div>

          <div className="px-5 py-6 text-left">
            <p className="text-sm md:text-base">
              <span className="text-term-green">{hero.prompt}</span>{" "}
              <span className="text-text">{whoami.output}</span>
              {!whoami.done && <Cursor />}
            </p>

            {showIdentity && (
              <Reveal className="mt-2">
                <p className="text-sm text-term-green-dim md:text-base">
                  {hero.welcome}
                </p>
                <a
                  href={contacto.channels[4].href}
                  className="group"
                  target="_blank"
                  rel="noreferrer"
                >
                  <h1 className="mt-1 text-3xl text-center font-semibold text-text md:text-5xl">
                    {hero.name}
                  </h1>
                </a>
                <p className="mt-2 text-base text-term-green md:text-lg">
                  <span className="text-text-dim">&gt;</span> {hero.role}
                </p>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
