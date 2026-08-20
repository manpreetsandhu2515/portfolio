export type NavItem = {
  readonly label: string
  readonly href: `#${string}`
  readonly id: string
}

export const NAV_ITEMS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Contact', href: '#contact', id: 'contact' },
] as const satisfies readonly NavItem[]

export const NAV_SECTION_IDS = NAV_ITEMS.map((item) => item.id)
