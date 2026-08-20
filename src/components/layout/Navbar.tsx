import { NAV_ITEMS, NAV_SECTION_IDS } from '../../config/navigation'
import { useScrolled } from '../../hooks/useScrolled'
import { useScrollSpy } from '../../hooks/useScrollSpy'
import { cn } from '../../lib/cn'
import { ScrollProgress } from '../motion/ScrollProgress'
import { ThemeToggle } from '../motion/ThemeToggle'
import { Container } from '../ui/Container'
import { NavLinks } from './NavLinks'

export function Navbar() {
  const scrolled = useScrolled()
  const activeId = useScrollSpy(NAV_SECTION_IDS)

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 w-full border-b transition-all duration-300',
        scrolled
          ? 'border-border/80 bg-background/95 backdrop-blur-2xl shadow-xl'
          : 'border-border/40 bg-background/85 backdrop-blur-xl shadow-sm',
      )}
    >
      <ScrollProgress />

      <Container className="flex h-16 items-center justify-between gap-3 sm:gap-6">
        {/* Brand Logo - 3D Cloud Icon */}
        <a
          href="#home"
          aria-label="Manpreet Kaur Sandhu - Home"
          className="inline-flex items-center gap-2.5 rounded-xl text-foreground font-bold tracking-tight transition-all duration-300 hover:opacity-90 group shrink-0"
        >
          <div className="relative flex size-9 sm:size-10 items-center justify-center rounded-xl overflow-hidden p-1 bg-violet-500/10 border border-violet-500/30 shadow-sm transition-transform duration-300 group-hover:scale-110">
            <img
              src={`${import.meta.env.BASE_URL}real_cloud.png`}
              alt="Manpreet Sandhu 3D Cloud Logo"
              className="size-full object-contain filter drop-shadow-xs"
            />
          </div>
          <span className="hidden md:inline-block font-sans text-sm font-bold bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
            Manpreet Sandhu
          </span>
        </a>

        {/* All Navigation Links - Visible All The Time */}
        <div className="flex-1 flex justify-center overflow-hidden">
          <NavLinks items={NAV_ITEMS} activeId={activeId} />
        </div>

        {/* Right Actions: Theme Toggle */}
        <div className="flex items-center gap-2 shrink-0">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  )
}
