export const colors = {
  background: 'var(--surface-bg)',
  foreground: 'var(--surface-fg)',
  muted: 'var(--surface-muted)',
  mutedForeground: 'var(--surface-muted-fg)',
  border: 'var(--surface-border)',
  accent: 'var(--surface-accent)',
  accentForeground: 'var(--surface-accent-fg)',
  ring: 'var(--surface-ring)',
} as const

export type ColorToken = keyof typeof colors

export const spacing = {
  none: '0',
  px: '1px',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  sectionY: '6rem',
  sectionYLarge: '8rem',
} as const

export type SpacingToken = keyof typeof spacing

export const containerSizes = {
  prose: '42rem',
  content: '48rem',
  wide: '64rem',
  default: '80rem',
  full: '100%',
} as const

export type ContainerSizeToken = keyof typeof containerSizes

export const borderRadius = {
  sm: '0.375rem',
  md: '0.5rem',
  lg: '0.75rem',
  xl: '1rem',
  full: '9999px',
} as const

export type BorderRadiusToken = keyof typeof borderRadius

/** Durations in milliseconds for Motion and CSS-in-JS transitions. */
export const animationDurations = {
  instant: 0,
  fast: 150,
  normal: 250,
  slow: 400,
  deliberate: 600,
} as const

export type AnimationDurationToken = keyof typeof animationDurations

export type Theme = {
  colors: typeof colors
  spacing: typeof spacing
  containerSizes: typeof containerSizes
  borderRadius: typeof borderRadius
  animationDurations: typeof animationDurations
}

export const theme = {
  colors,
  spacing,
  containerSizes,
  borderRadius,
  animationDurations,
} as const satisfies Theme
