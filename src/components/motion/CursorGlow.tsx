import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'motion/react'

export function CursorGlow() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const mouseX = useMotionValue(-1000)
  const mouseY = useMotionValue(-1000)

  // Spring smooth physics for fluid light movement following the cursor
  const springConfig = { damping: 28, stiffness: 200, mass: 0.5 }
  const smoothX = useSpring(mouseX, springConfig)
  const smoothY = useSpring(mouseY, springConfig)

  useEffect(() => {
    // Check if device supports touch to avoid showing cursor glow on mobile/touch screens
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
    }
  }, [mouseX, mouseY, isVisible])

  if (isTouchDevice) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Outer Large Ambient Violet & Cyan Light Following Mouse */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.3 } }}
        className="absolute size-[600px] rounded-full bg-gradient-to-r from-violet-600/18 via-indigo-500/12 to-cyan-500/18 blur-[100px] dark:from-violet-500/22 dark:via-purple-600/15 dark:to-cyan-400/20"
      />

      {/* Inner Crisp Spotlight Beam Centered on Cursor */}
      <motion.div
        style={{
          x: smoothX,
          y: smoothY,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.2 } }}
        className="absolute size-[220px] rounded-full bg-gradient-to-br from-violet-400/25 via-cyan-400/20 to-transparent blur-[45px] dark:from-violet-400/30 dark:via-cyan-300/25"
      />
    </div>
  )
}
