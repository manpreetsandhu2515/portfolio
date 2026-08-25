import { animate, useInView } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

interface AnimatedNumberProps {
  value: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

export function AnimatedNumber({
  value,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
}: AnimatedNumberProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration,
        ease: 'easeOut',
        onUpdate(current) {
          if (Number.isInteger(value)) {
            setDisplayValue(Math.floor(current))
          } else {
            setDisplayValue(Number(current.toFixed(2)))
          }
        },
      })
      return () => controls.stop()
    }
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {displayValue}
      {suffix}
    </span>
  )
}
