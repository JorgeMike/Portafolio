import { useState, type ReactNode } from 'react'
import { motion } from 'motion/react'
import { hero } from '../../data/hero'
import { useTypewriter } from '../../lib/useTypewriter'
import heroImage from '../../assets/hero.png'

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function Cursor() {
  return <span className="animate-pulse text-term-green">▍</span>
}

function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`overflow-hidden ${className ?? ''}`}
    >
      {children}
    </motion.div>
  )
}

function Hero() {
  const [showIdentity, setShowIdentity] = useState(false)
  const [showCtasLine, setShowCtasLine] = useState(false)
  const [showImageLine, setShowImageLine] = useState(false)

  const whoami = useTypewriter(hero.whoamiCommand, {
    speed: 90,
    onDone: () => setTimeout(() => setShowIdentity(true), 250),
  })

  const ctasCmd = useTypewriter(hero.ctasCommand, {
    start: showIdentity,
    speed: 70,
    onDone: () => setShowCtasLine(true),
  })

  const imageCmd = useTypewriter(hero.imageCommand, {
    start: showCtasLine,
    speed: 70,
    onDone: () => setShowImageLine(true),
  })

  return (
    <section
      id="hero"
      className="flex min-h-screen items-center justify-center px-6 py-24"
    >
      <div className="grid w-full max-w-5xl gap-10 md:grid-cols-[1.3fr_1fr] md:items-start">
        <div className="rounded-md border border-border bg-surface font-mono shadow-2xl">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-text-dim">portfolio — zsh</span>
          </div>

          <div className="px-5 py-6 text-left">
            <p className="text-sm md:text-base">
              <span className="text-term-green">{hero.prompt}</span>{' '}
              <span className="text-text">{whoami.output}</span>
              {!whoami.done && <Cursor />}
            </p>

            {showIdentity && (
              <Reveal className="mt-2">
                <h1 className="text-3xl font-semibold text-text md:text-5xl">{hero.name}</h1>
                <p className="mt-2 text-base text-term-green md:text-lg">
                  <span className="text-text-dim">&gt;</span> {hero.role}
                </p>
              </Reveal>
            )}

            {showIdentity && (
              <div className="mt-6">
                <p className="text-sm md:text-base">
                  <span className="text-term-green">{hero.prompt}</span>{' '}
                  <span className="text-text">{ctasCmd.output}</span>
                  {!ctasCmd.done && <Cursor />}
                </p>

                {showCtasLine && (
                  <Reveal className="mt-4">
                    <nav className="flex flex-col items-start gap-3 pb-1 sm:flex-row sm:gap-4">
                      {hero.ctas.map((cta) => (
                        <button
                          key={cta.target}
                          type="button"
                          onClick={() => scrollToSection(cta.target)}
                          className="border border-term-green-dim px-5 py-2.5 text-sm text-term-green transition-colors hover:border-term-green hover:bg-term-green hover:text-bg md:text-base"
                        >
                          [ {cta.command} ]
                        </button>
                      ))}
                    </nav>
                  </Reveal>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="rounded-md border border-border bg-surface font-mono shadow-2xl">
          <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
            <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
            <span className="ml-3 text-xs text-text-dim">image.sh</span>
          </div>

          <div className="px-5 py-6 text-left">
            <p className="text-sm md:text-base">
              <span className="text-term-green">{hero.prompt}</span>{' '}
              <span className="text-text">{showCtasLine ? imageCmd.output : ''}</span>
              {showCtasLine && !imageCmd.done && <Cursor />}
            </p>

            {showImageLine && (
              <Reveal className="mt-4">
                <div className="border border-term-green-dim">
                  <img
                    src={heroImage}
                    alt={hero.imageAlt}
                    className="w-full grayscale-40 contrast-125"
                  />
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
