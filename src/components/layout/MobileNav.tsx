import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useId } from 'react'
import type { NavItem } from '../../config/navigation'
import { cn } from '../../lib/cn'
import { animationDurations } from '../../lib/theme'
import { NavLink } from './NavLink'

type MobileNavProps = {
  items: readonly NavItem[]
  activeId: string
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function MobileNav({
  items,
  activeId,
  open,
  onOpenChange,
}: MobileNavProps) {
  const panelId = useId()
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    if (!open) {
      return
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onOpenChange(false)
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open, onOpenChange])

  const close = () => onOpenChange(false)

  const transition = reduceMotion
    ? { duration: 0 }
    : { duration: animationDurations.fast / 1000, ease: 'easeOut' as const }

  return (
    <div className="md:hidden">
      <button
        type="button"
        className={cn(
          'inline-flex size-10 items-center justify-center rounded-md',
          'text-muted-foreground transition-colors hover:text-foreground',
        )}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => onOpenChange(!open)}
      >
        {open ? <X className="size-5" aria-hidden /> : <Menu className="size-5" aria-hidden />}
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close menu"
              className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={transition}
              onClick={close}
            />
            <motion.div
              id={panelId}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-x-0 top-14 z-50 border-b border-border bg-background/95 backdrop-blur-xl"
              initial={reduceMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
              transition={transition}
            >
              <nav aria-label="Primary mobile" className="px-6 py-4">
                <ul className="flex flex-col gap-1">
                  {items.map((item) => (
                    <li key={item.id}>
                      <NavLink
                        item={item}
                        isActive={activeId === item.id}
                        variant="mobile"
                        onNavigate={close}
                      />
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
