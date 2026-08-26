import { useState } from 'react'
import { Mail, Phone, MapPin, ExternalLink } from 'lucide-react'
import { siGithub } from 'simple-icons'
import { contacto, type ContactChannel } from '../../data/contacto'
import { useTypewriter } from '../../lib/useTypewriter'
import { useInView } from '../../lib/useInView'
import Reveal from '../terminal/Reveal'
import Cursor from '../terminal/Cursor'

const ICONS = {
  mail: Mail,
  phone: Phone,
  'map-pin': MapPin,
  'external-link': ExternalLink,
}

function ChannelIcon({ icon }: { icon: ContactChannel['icon'] }) {
  if (icon === 'github') {
    return (
      <svg role="img" aria-label="GitHub" viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
        <path d={siGithub.path} />
      </svg>
    )
  }

  const Icon = ICONS[icon]
  return <Icon className="h-5 w-5 shrink-0" strokeWidth={1.75} />
}

function ChannelRow({ channel }: { channel: ContactChannel }) {
  const content = (
    <>
      <span className="text-term-green">
        <ChannelIcon icon={channel.icon} />
      </span>
      <span className="w-24 shrink-0 text-xs text-term-green-dim md:text-sm">{channel.label}</span>
      <span className="text-sm text-text md:text-base">{channel.value}</span>
    </>
  )

  if (!channel.href) {
    return <div className="flex items-center gap-3 py-2.5">{content}</div>
  }

  return (
    <a
      href={channel.href}
      target={channel.href.startsWith('http') ? '_blank' : undefined}
      rel={channel.href.startsWith('http') ? 'noreferrer' : undefined}
      className="flex items-center gap-3 py-2.5 text-text transition-colors hover:text-term-green"
    >
      {content}
    </a>
  )
}

function Contacto() {
  const { ref, inView } = useInView<HTMLElement>()
  const [showContent, setShowContent] = useState(false)

  const command = useTypewriter(contacto.command, {
    start: inView,
    speed: 70,
    onDone: () => setTimeout(() => setShowContent(true), 200),
  })

  return (
    <section id="contacto" ref={ref} className="mx-auto max-w-2xl px-6 py-24">
      <h2 className="text-sm text-term-green-dim">
        $ {command.output}
        {!command.done && <Cursor />}
      </h2>

      {showContent && (
        <Reveal>
          <p className="mt-1 text-2xl font-semibold text-text md:text-3xl">Contacto</p>

          <div className="mt-8 flex flex-col divide-y divide-border border-t border-b border-border">
            {contacto.channels.map((channel) => (
              <ChannelRow key={channel.label} channel={channel} />
            ))}
          </div>
        </Reveal>
      )}
    </section>
  )
}

export default Contacto
