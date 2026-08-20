import { motion, type Variants } from 'motion/react'

interface TextEffectProps {
  text: string
  className?: string
  delay?: number
  per?: 'word' | 'char'
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span' | 'div'
}

export function TextEffect({
  text,
  className = '',
  delay = 0,
  per = 'word',
  as: Component = 'div',
}: TextEffectProps) {
  const items = per === 'word' ? text.split(' ') : text.split('')

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: per === 'word' ? 0.08 : 0.03,
        delayChildren: delay,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 16,
      filter: 'blur(8px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.4,
        ease: [0.2, 0.65, 0.3, 0.9] as const,
      },
    },
  }

  return (
    <Component className={`inline-flex flex-wrap ${className}`}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="inline-flex flex-wrap"
      >
        {items.map((item, idx) => (
          <motion.span
            key={`${item}-${idx}`}
            variants={itemVariants}
            className="inline-block whitespace-pre"
          >
            {item}
            {per === 'word' && idx < items.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </motion.span>
    </Component>
  )
}
