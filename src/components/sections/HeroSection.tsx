import { motion } from 'motion/react'
import { ArrowDown, ArrowRight, Download, Mail } from 'lucide-react'
import { RESUME_DATA } from '../../data/resume'
import { AnimatedNumber } from '../motion/AnimatedNumber'
import { InView } from '../motion/InView'
import { MagneticButton } from '../motion/MagneticButton'
import { SpotlightCard } from '../motion/SpotlightCard'
import { TextEffect } from '../motion/TextEffect'
import { TiltCard } from '../motion/TiltCard'
import { Container } from '../ui/Container'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

export function HeroSection() {
  const { personalInfo, stats } = RESUME_DATA

  const statColors = [
    { border: 'border-t-violet-500', text: 'text-violet-400 dark:text-violet-300' },
    { border: 'border-t-cyan-500', text: 'text-cyan-400 dark:text-cyan-300' },
    { border: 'border-t-emerald-500', text: 'text-emerald-400 dark:text-emerald-300' },
    { border: 'border-t-amber-500', text: 'text-amber-400 dark:text-amber-300' },
  ]

  return (
    <section id="home" className="relative min-h-[92vh] flex flex-col justify-center overflow-hidden pt-24 pb-16">
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Text (Left 7 cols on desktop) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Status Pill Badge */}
            <InView transition={{ delay: 0.1 }}>
              <div className="inline-flex items-center gap-2.5 rounded-full bg-violet-500/10 border border-violet-500/20 px-3.5 py-1.5 text-xs font-medium text-violet-300 backdrop-blur-md shadow-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
                </span>
                <span className="tracking-wide">Available for AI & Software Engineering Roles</span>
              </div>
            </InView>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent underline decoration-violet-500/40 underline-offset-8">
                  {personalInfo.name}
                </span>
              </h1>

              <TextEffect
                text="Solving complex technical challenges across software engineering, data analytics, cloud systems, and IT solutions."
                as="p"
                delay={0.3}
                className="text-lg sm:text-xl font-normal text-muted-foreground leading-relaxed"
              />
            </div>

            {/* Bio paragraph */}
            <InView transition={{ delay: 0.4 }}>
              <p className="text-sm sm:text-base text-muted-foreground/90 leading-relaxed font-normal">
                {personalInfo.summary}
              </p>
            </InView>

            {/* Action CTAs */}
            <InView transition={{ delay: 0.5 }}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <MagneticButton>
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white px-6 py-3.5 text-sm font-semibold shadow-lg shadow-violet-500/25 transition-all transform hover:scale-[1.02]"
                  >
                    <span>Explore Technical Projects</span>
                    <ArrowRight className="size-4" />
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 hover:bg-cyan-500/20 px-6 py-3.5 text-sm font-semibold text-cyan-300 backdrop-blur-sm transition-all shadow-xs"
                  >
                    <Mail className="size-4 text-cyan-400" />
                    <span>Get In Touch</span>
                  </a>
                </MagneticButton>

                <MagneticButton>
                  <a
                    href={`mailto:${personalInfo.email}?subject=IT%20/%20Technology%20Opportunity`}
                    className="inline-flex items-center gap-2 rounded-2xl border border-violet-500/30 bg-violet-500/10 hover:bg-violet-500/20 px-5 py-3.5 text-sm font-medium text-violet-300 transition-colors shadow-xs"
                  >
                    <Download className="size-4 text-violet-400" />
                    <span>Download Resume</span>
                  </a>
                </MagneticButton>
              </div>
            </InView>

            {/* Quick Social & Contact Links */}
            <InView transition={{ delay: 0.6 }}>
              <div className="flex items-center justify-center lg:justify-start gap-6 pt-2 text-muted-foreground">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub Profile"
                  className="hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20"
                >
                  <GithubIcon className="size-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn Profile"
                  className="hover:text-violet-400 transition-colors p-2 rounded-lg hover:bg-violet-500/10 border border-transparent hover:border-violet-500/20"
                >
                  <LinkedinIcon className="size-5" />
                </a>
                <span className="h-4 w-px bg-border/80" />
                <span className="text-xs font-mono text-cyan-300/80 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                  {personalInfo.location}
                </span>
              </div>
            </InView>
          </div>

          {/* User Round Profile Photo Motion Avatar with Gradient Halo */}
          <div className="lg:col-span-5 flex justify-center">
            <InView transition={{ delay: 0.3 }}>
              <TiltCard tiltMaxAngle={12} className="relative">
                <SpotlightCard
                  spotlightColor="rgba(139, 92, 246, 0.3)"
                  className="relative overflow-hidden rounded-full p-2 bg-gradient-to-tr from-violet-500/40 via-cyan-500/40 to-emerald-500/40 border border-violet-500/30 shadow-2xl shadow-violet-500/20 backdrop-blur-xl"
                >
                  {/* Clean Round Circular Photo */}
                  <div className="relative rounded-full overflow-hidden size-64 sm:size-72 md:size-80 border-2 border-background">
                    <img
                      src={personalInfo.profileImage.startsWith('/') ? `${import.meta.env.BASE_URL}${personalInfo.profileImage.slice(1)}` : personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="size-full object-cover object-center rounded-full transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                </SpotlightCard>
              </TiltCard>
            </InView>
          </div>
        </div>

        {/* Stats Bar */}
        <InView transition={{ delay: 0.7 }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-border/40">
            {stats.map((stat, idx) => {
              const theme = statColors[idx % statColors.length]
              return (
                <div
                  key={idx}
                  className={`p-4 rounded-2xl bg-background/60 border border-border/60 border-t-4 ${theme.border} backdrop-blur-md text-center shadow-md transition-all duration-300 hover:border-violet-500/40 hover:shadow-violet-500/10`}
                >
                  <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight font-mono ${theme.text}`}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>
        </InView>

        {/* Scroll Down Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="pt-8 flex justify-center text-violet-400/80"
        >
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="size-5" />
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
