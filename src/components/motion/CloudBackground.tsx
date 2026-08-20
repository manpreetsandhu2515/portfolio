import { motion } from 'motion/react'

export function CloudBackground() {
  const cloudStreams = [
    { top: '3%', size: 'w-[340px] sm:w-[520px]', duration: 30, delay: 0, opacity: 'opacity-25 dark:opacity-20', scale: 1.1, flip: false },
    { top: '22%', size: 'w-[420px] sm:w-[640px]', duration: 40, delay: -15, opacity: 'opacity-30 dark:opacity-20', scale: 1.35, flip: true },
    { top: '40%', size: 'w-[360px] sm:w-[540px]', duration: 34, delay: -26, opacity: 'opacity-20 dark:opacity-15', scale: 1.05, flip: false },
    { top: '58%', size: 'w-[460px] sm:w-[720px]', duration: 48, delay: -9, opacity: 'opacity-30 dark:opacity-25', scale: 1.45, flip: true },
    { top: '76%', size: 'w-[380px] sm:w-[560px]', duration: 36, delay: -21, opacity: 'opacity-25 dark:opacity-20', scale: 1.2, flip: false },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* Ambient Vibrant Glowing Light Orbs */}
      <div className="absolute top-[-10%] left-[-10%] size-[500px] sm:size-[700px] rounded-full bg-gradient-to-br from-violet-600/25 via-purple-600/15 to-transparent blur-[120px] dark:from-violet-600/30 dark:via-indigo-600/20 animate-pulse-glow" />
      <div className="absolute top-[35%] right-[-12%] size-[450px] sm:size-[650px] rounded-full bg-gradient-to-bl from-cyan-500/25 via-teal-500/15 to-transparent blur-[120px] dark:from-cyan-500/25 dark:via-blue-600/15 animate-pulse-glow" style={{ animationDelay: '-4s' }} />
      <div className="absolute bottom-[-10%] left-[20%] size-[500px] sm:size-[700px] rounded-full bg-gradient-to-t from-indigo-600/20 via-purple-500/15 to-transparent blur-[130px] dark:from-indigo-600/25 animate-pulse-glow" style={{ animationDelay: '-2s' }} />

      {/* 3D Volumetric Fluffy Clouds Drifting Continuously */}
      {cloudStreams.map((cloud, idx) => (
        <motion.div
          key={idx}
          style={{ top: cloud.top }}
          initial={{ x: '-40vw' }}
          animate={{ x: '120vw' }}
          transition={{
            duration: cloud.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: cloud.delay,
          }}
          className={`absolute ${cloud.size} ${cloud.opacity} transition-opacity duration-300 pointer-events-none`}
        >
          <motion.img
            src={`${import.meta.env.BASE_URL}real_cloud.png`}
            alt="3D Volumetric Floating Cloud"
            animate={{
              y: [-16, 16, -16],
              rotate: cloud.flip ? [-2, 2, -2] : [2, -2, 2],
            }}
            transition={{
              duration: 7 + idx * 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              transform: `scale(${cloud.scale}) ${cloud.flip ? 'scaleX(-1)' : ''}`,
            }}
            className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(0,0,0,0.25)]"
          />
        </motion.div>
      ))}
    </div>
  )
}
