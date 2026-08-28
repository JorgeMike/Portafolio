import { useEffect, useRef, useState } from 'react'

type Point = { x: number; y: number }

export function useMouseParallax<T extends HTMLElement>(strength = 1) {
  const ref = useRef<T | null>(null)
  const [offset, setOffset] = useState<Point>({ x: 0, y: 0 })

  useEffect(() => {
    const node = ref.current
    if (!node) return

    function handleMove(event: MouseEvent) {
      const rect = node!.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      const x = ((event.clientX - centerX) / (rect.width / 2)) * strength
      const y = ((event.clientY - centerY) / (rect.height / 2)) * strength

      setOffset({ x, y })
    }

    function handleLeave() {
      setOffset({ x: 0, y: 0 })
    }

    window.addEventListener('mousemove', handleMove)
    node.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      node?.removeEventListener('mouseleave', handleLeave)
    }
  }, [strength])

  return { ref, offset }
}
