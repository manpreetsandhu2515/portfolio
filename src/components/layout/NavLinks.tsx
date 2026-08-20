import type { NavItem } from '../../config/navigation'
import { NavLink } from './NavLink'

type NavLinksProps = {
  items: readonly NavItem[]
  activeId: string
}

export function NavLinks({ items, activeId }: NavLinksProps) {
  return (
    <nav aria-label="Primary" className="overflow-x-auto max-w-full py-1 scrollbar-none">
      <ul className="flex items-center gap-1 sm:gap-2 whitespace-nowrap px-1">
        {items.map((item) => (
          <li key={item.id}>
            <NavLink
              item={item}
              isActive={activeId === item.id}
              variant="desktop"
            />
          </li>
        ))}
      </ul>
    </nav>
  )
}
