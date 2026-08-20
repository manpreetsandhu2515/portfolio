import { motion } from 'motion/react'
import { Brain, Code2, Cpu, Sparkles, Wrench } from 'lucide-react'
import { useState } from 'react'
import { RESUME_DATA } from '../../data/resume'
import { AnimatedGroup } from '../motion/AnimatedGroup'
import { InfiniteMarquee } from '../motion/InfiniteMarquee'
import { InView } from '../motion/InView'
import { SpotlightCard } from '../motion/SpotlightCard'
import { Container } from '../ui/Container'

const categoryIcons: Record<string, typeof Brain> = {
  Brain,
  Cpu,
  Code2,
  Wrench,
}

const categoryThemes = [
  {
    iconBg: 'bg-violet-500/10 text-violet-400 border-violet-500/30',
    cardBorder: 'hover:border-violet-500/40',
    highlightTag: 'border-violet-500/30 bg-violet-500/10 text-violet-300 font-semibold shadow-xs',
    spotlight: 'rgba(139, 92, 246, 0.25)',
  },
  {
    iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
    cardBorder: 'hover:border-cyan-500/40',
    highlightTag: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-semibold shadow-xs',
    spotlight: 'rgba(6, 182, 212, 0.25)',
  },
  {
    iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
    cardBorder: 'hover:border-emerald-500/40',
    highlightTag: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300 font-semibold shadow-xs',
    spotlight: 'rgba(16, 185, 129, 0.25)',
  },
  {
    iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
    cardBorder: 'hover:border-amber-500/40',
    highlightTag: 'border-amber-500/30 bg-amber-500/10 text-amber-300 font-semibold shadow-xs',
    spotlight: 'rgba(245, 158, 11, 0.25)',
  },
]

export function SkillsSection() {
  const { skillCategories } = RESUME_DATA
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filterCategories = [
    { id: 'all', label: 'All Technologies' },
    ...skillCategories.map((c) => ({ id: c.title, label: c.title })),
  ]

  const visibleCategories =
    selectedCategory === 'all'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory)

  // Flattened highlights list for the infinite marquee
  const allHighlightedSkills = skillCategories
    .flatMap((cat) => cat.skills)
    .filter((s) => s.highlight)

  return (
    <section id="skills" className="py-24 relative border-t border-border/40">
      <Container>
        <div className="space-y-12">
          {/* Section Title */}
          <InView>
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                <Sparkles className="size-3.5" />
                <span>Technical Stack & Abilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Technical & Intrapersonal Arsenal
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Specialized tooling in artificial intelligence, model inference, predictive engineering, and robust application development.
              </p>
            </div>
          </InView>

          {/* Interactive Category Filter Tabs */}
          <InView>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {filterCategories.map((tab) => {
                const isActive = selectedCategory === tab.id
                return (
                  <button
                    key={tab.id}
                    onClick={() => setSelectedCategory(tab.id)}
                    className="relative rounded-xl px-4 py-2 text-xs sm:text-sm font-medium transition-colors"
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTab"
                        className="absolute inset-0 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 shadow-md shadow-violet-500/20"
                        transition={{ type: 'spring', duration: 0.5 }}
                      />
                    )}
                    <span
                      className={`relative z-10 ${
                        isActive ? 'text-white font-semibold' : 'text-muted-foreground hover:text-foreground'
                      }`}
                    >
                      {tab.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </InView>

          {/* Skill Cards Grid */}
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {visibleCategories.map((cat, idx) => {
              const Icon = categoryIcons[cat.icon] || Brain
              const theme = categoryThemes[idx % categoryThemes.length]
              return (
                <SpotlightCard key={idx} spotlightColor={theme.spotlight} className={`space-y-5 bg-background/60 ${theme.cardBorder}`}>
                  <div className="flex items-center gap-3">
                    <div className={`flex size-10 items-center justify-center rounded-xl border ${theme.iconBg}`}>
                      <Icon className="size-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{cat.title}</h3>
                      <p className="text-xs text-muted-foreground">{cat.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill, sIdx) => (
                      <motion.span
                        key={sIdx}
                        whileHover={{ scale: 1.04, y: -2 }}
                        className={`rounded-xl px-3 py-1.5 text-xs font-medium border transition-all cursor-default ${
                          skill.highlight
                            ? theme.highlightTag
                            : 'border-border/40 bg-muted/20 text-muted-foreground hover:text-foreground hover:border-border/80'
                        }`}
                      >
                        {skill.name}
                      </motion.span>
                    ))}
                  </div>
                </SpotlightCard>
              )
            })}
          </AnimatedGroup>

          {/* Marquee Ticker */}
          <InView>
            <div className="pt-6 border-t border-border/30">
              <p className="text-xs font-mono uppercase tracking-widest text-center text-violet-400 mb-4">
                Core Engineering Highlights & Frameworks
              </p>
              <InfiniteMarquee speed={30} className="py-2">
                {allHighlightedSkills.map((s, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 px-4 py-2 border border-violet-500/20 text-xs font-mono font-medium text-foreground shadow-xs"
                  >
                    <span className="size-1.5 rounded-full bg-cyan-400 animate-pulse" />
                    {s.name}
                  </div>
                ))}
              </InfiniteMarquee>
            </div>
          </InView>
        </div>
      </Container>
    </section>
  )
}
