import { useRef, useState, type MouseEvent, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  spotlightColor?: string
  onClick?: () => void
}

export function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(139, 92, 246, 0.22)',
  onClick,
}: SpotlightCardProps) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(0)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        'relative overflow-hidden rounded-2xl border border-border/70 bg-background/80 backdrop-blur-xl p-6 transition-all duration-300 hover:border-violet-500/40 hover:shadow-xl hover:shadow-violet-500/10',
        onClick && 'cursor-pointer',
        className,
      )}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 45%)`,
        }}
      />
      {children}
    </div>
  )
}
