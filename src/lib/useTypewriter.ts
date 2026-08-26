import { useEffect, useState } from 'react'

export function useTypewriter(text: string, options?: { start?: boolean; speed?: number; onDone?: () => void }) {
  const { start = true, speed = 60, onDone } = options ?? {}
  const [output, setOutput] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    if (!start) return

    setOutput('')
    setDone(false)

    let index = 0
    const interval = setInterval(() => {
      index += 1
      setOutput(text.slice(0, index))

      if (index >= text.length) {
        clearInterval(interval)
        setDone(true)
        onDone?.()
      }
    }, speed)

    return () => clearInterval(interval)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, start, speed])

  return { output, done }
}
