import { motion, useInView, type Variants, type Transition, type UseInViewOptions } from 'motion/react'
import { useRef, type ReactNode } from 'react'

interface InViewProps {
  children: ReactNode
  className?: string
  variants?: Variants
  transition?: Transition
  viewOptions?: UseInViewOptions
}

export function InView({
  children,
  className = '',
  variants,
  transition,
  viewOptions = { once: true, margin: '0px 0px -40px 0px', amount: 0.1 },
}: InViewProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, viewOptions)

  const defaultVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  }

  const defaultTransition: Transition = {
    duration: 0.6,
    ease: [0.21, 0.47, 0.32, 0.98] as const,
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants || defaultVariants}
      transition={transition || defaultTransition}
      className={className}
    >
      {children}
    </motion.div>
  )
}
