import { motion, useReducedMotion } from 'motion/react'
import type { NavItem } from '../../config/navigation'
import { animationDurations } from '../../lib/theme'
import { cn } from '../../lib/cn'

type NavLinkProps = {
  item: NavItem
  isActive: boolean
  variant: 'desktop' | 'mobile'
  onNavigate?: () => void
}

export function NavLink({ item, isActive, variant, onNavigate }: NavLinkProps) {
  const reduceMotion = useReducedMotion()

  const base =
    variant === 'desktop'
      ? 'relative rounded-lg px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-semibold text-foreground/80 transition-colors duration-150 hover:text-foreground hover:bg-muted/40'
      : cn(
          'block rounded-md border-l-2 border-transparent px-3 py-3 text-base',
          'text-foreground/80 transition-colors duration-150',
          'hover:bg-muted hover:text-foreground',
          isActive && 'border-foreground bg-muted/50 text-foreground font-bold',
        )

  return (
    <a
      href={item.href}
      aria-current={isActive ? 'page' : undefined}
      onClick={onNavigate}
      className={cn(base, isActive && variant === 'desktop' && 'text-foreground font-bold bg-muted/60')}
    >
      {item.label}
      {variant === 'desktop' && isActive && (
        <motion.span
          layoutId="navbar-active-indicator"
          className="pointer-events-none absolute inset-x-2 -bottom-0.5 h-0.5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 shadow-sm shadow-violet-500/50"
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: animationDurations.normal / 1000,
                  ease: [0.25, 0.1, 0.25, 1],
                }
          }
        />
      )}
      {variant === 'mobile' && isActive && (
        <span className="sr-only"> (current section)</span>
      )}
    </a>
  )
}
