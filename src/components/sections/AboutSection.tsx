import { BookOpen, GraduationCap, Heart, ShieldCheck, Sparkles, TrendingUp, Users, Utensils } from 'lucide-react'
import { RESUME_DATA } from '../../data/resume'
import { AnimatedGroup } from '../motion/AnimatedGroup'
import { InView } from '../motion/InView'
import { SpotlightCard } from '../motion/SpotlightCard'
import { Container } from '../ui/Container'

const hobbyIconMap: Record<string, typeof BookOpen> = {
  BookOpen,
  Utensils,
  TrendingUp,
}

const hobbyThemes = [
  { iconBg: 'bg-violet-500/10 text-violet-400 border-violet-500/30', border: 'hover:border-violet-500/40' },
  { iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30', border: 'hover:border-emerald-500/40' },
  { iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30', border: 'hover:border-amber-500/40' },
]

export function AboutSection() {
  const { education, experience, hobbies } = RESUME_DATA

  return (
    <section id="about" className="py-24 relative border-t border-border/40">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <InView>
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                <Sparkles className="size-3.5" />
                <span>Background & Experience</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                About & Engineering Journey
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Solving complex technical challenges with critical analysis, algorithmic structure, and end-to-end AI engineering.
              </p>
            </div>
          </InView>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education Card */}
            <InView variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.25)" className="h-full space-y-6 hover:border-violet-500/40 shadow-lg">
                <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400 border border-violet-500/30">
                    <GraduationCap className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Education</h3>
                    <p className="text-xs text-violet-400/80 font-mono">Academic Foundations</p>
                  </div>
                </div>

                <div className="space-y-6">
                  {education.map((edu, idx) => (
                    <div key={idx} className="relative pl-4 border-l-2 border-violet-500/40 space-y-1.5">
                      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
                        <span>{edu.period}</span>
                        {edu.score && (
                          <span className="rounded-full bg-violet-500/10 px-2.5 py-0.5 font-bold text-violet-300 border border-violet-500/30">
                            Score: {edu.score}
                          </span>
                        )}
                      </div>
                      <h4 className="text-base font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm font-medium text-muted-foreground">{edu.institution}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {edu.highlights.map((item, hIdx) => (
                          <span
                            key={hIdx}
                            className="rounded-md bg-violet-500/5 px-2 py-0.5 text-xs text-violet-300/90 border border-violet-500/15 font-sans"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </SpotlightCard>
            </InView>

            {/* Leadership & NGO Experience Card */}
            <InView variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
              <SpotlightCard spotlightColor="rgba(6, 182, 212, 0.25)" className="h-full space-y-6 hover:border-cyan-500/40 shadow-lg">
                <div className="flex items-center gap-3 border-b border-border/50 pb-4">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <Users className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Leadership & Impact</h3>
                    <p className="text-xs text-cyan-400/80 font-mono">NGO "Jago" Initiatives</p>
                  </div>
                </div>

                {experience.map((exp, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                        <p className="text-sm font-medium text-cyan-300/90">{exp.organization} • {exp.location}</p>
                      </div>
                      <span className="text-xs font-mono rounded-full bg-cyan-500/10 px-2.5 py-1 text-cyan-300 border border-cyan-500/30">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground/90 leading-relaxed">
                      {exp.description}
                    </p>

                    <ul className="space-y-2 pt-2">
                      {exp.bulletPoints.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed">
                          <ShieldCheck className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </SpotlightCard>
            </InView>
          </div>

          {/* Personal Interests & Passions */}
          <InView>
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-violet-400">
                <Heart className="size-4 text-pink-400" />
                <span>Personal Interests & Creative Formulations</span>
              </div>

              <AnimatedGroup className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {hobbies.map((hobby, idx) => {
                  const Icon = hobbyIconMap[hobby.icon] || Sparkles
                  const theme = hobbyThemes[idx % hobbyThemes.length]

                  return (
                    <SpotlightCard key={idx} className={`space-y-3 bg-background/60 ${theme.border}`}>
                      <div className={`flex size-9 items-center justify-center rounded-lg border ${theme.iconBg}`}>
                        <Icon className="size-4" />
                      </div>
                      <h4 className="text-base font-semibold text-foreground">{hobby.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {hobby.description}
                      </p>
                    </SpotlightCard>
                  )
                })}
              </AnimatedGroup>
            </div>
          </InView>
        </div>
      </Container>
    </section>
  )
}
