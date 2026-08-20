import { motion, useInView, type Variants } from 'motion/react'
import { useRef, type ReactNode, Children } from 'react'

interface AnimatedGroupProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
}

export function AnimatedGroup({
  children,
  className = '',
  staggerDelay = 0.08,
}: AnimatedGroupProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -40px 0px', amount: 0.1 })

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  }

  const childVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {Children.map(children, (child) => (
        <motion.div variants={childVariants}>{child}</motion.div>
      ))}
    </motion.div>
  )
}
