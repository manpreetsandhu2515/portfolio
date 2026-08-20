import { useEffect, useState } from 'react'

export function useScrollSpy(
  sectionIds: readonly string[],
  headerOffset = 80,
) {
  const fallbackId = sectionIds[0] ?? 'home'
  const [activeId, setActiveId] = useState(fallbackId)

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) {
      setActiveId(fallbackId)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        const nextId = intersecting[0]?.target.id
        if (nextId) {
          setActiveId(nextId)
        }
      },
      {
        rootMargin: `-${headerOffset}px 0px -55% 0px`,
        threshold: [0, 0.1, 0.25, 0.5],
      },
    )

    for (const section of sections) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [sectionIds, headerOffset, fallbackId])

  return activeId
}
