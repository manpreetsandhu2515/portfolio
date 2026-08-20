import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type ContainerProps = HTMLAttributes<HTMLDivElement>

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div
      className={cn('max-w-7xl mx-auto px-6 md:px-8 lg:px-10', className)}
      {...props}
    >
      {children}
    </div>
  )
}
