import { motion } from 'motion/react'
import type { ReactNode } from 'react'

interface InfiniteMarqueeProps {
  children: ReactNode
  direction?: 'left' | 'right'
  speed?: number
  className?: string
}

export function InfiniteMarquee({
  children,
  direction = 'left',
  speed = 25,
  className = '',
}: InfiniteMarqueeProps) {
  return (
    <div className={`relative overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-6 py-2"
        initial={{ x: direction === 'left' ? '0%' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0%' }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        className="flex min-w-full shrink-0 items-center justify-around gap-6 py-2"
        initial={{ x: direction === 'left' ? '0%' : '-100%' }}
        animate={{ x: direction === 'left' ? '-100%' : '0%' }}
        transition={{
          duration: speed,
          ease: 'linear',
          repeat: Infinity,
        }}
        aria-hidden
      >
        {children}
      </motion.div>
    </div>
  )
}
