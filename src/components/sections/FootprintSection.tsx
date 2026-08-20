import { Award, Code, Sparkles, Trophy, Zap } from 'lucide-react'
import { RESUME_DATA } from '../../data/resume'
import { AnimatedGroup } from '../motion/AnimatedGroup'
import { InView } from '../motion/InView'
import { SpotlightCard } from '../motion/SpotlightCard'
import { Container } from '../ui/Container'

export function FootprintSection() {
  const { achievements } = RESUME_DATA

  return (
    <section id="achievements" className="py-24 relative border-t border-border/40">
      <Container>
        <div className="space-y-16">
          {/* Header */}
          <InView>
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary">
                <Sparkles className="size-3.5" />
                <span>Competitions & Problem Solving</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Achievements & Technical Footprint
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Proven ability to rapid-prototype AI solutions under high-pressure hackathons and solve algorithmic challenges.
              </p>
            </div>
          </InView>

          {/* Timeline Cards */}
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((item, idx) => (
              <SpotlightCard key={idx} className="space-y-4 bg-background/60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-muted text-foreground border border-border">
                      {item.type === 'Hackathon' ? <Trophy className="size-5" /> : <Code className="size-5" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                      <p className="text-xs font-semibold text-muted-foreground">{item.organization}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-mono font-medium text-foreground border border-border">
                    <Zap className="size-3 text-muted-foreground" />
                    {item.badge}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                  {item.description}
                </p>

                <div className="flex items-center gap-2 pt-2 text-xs text-muted-foreground font-mono">
                  <Award className="size-4 text-foreground" />
                  <span>Verified Accomplishment • Manpreet Kaur Sandhu</span>
                </div>
              </SpotlightCard>
            ))}
          </AnimatedGroup>

          {/* LeetCode & Coding Highlights Banner */}
          <InView>
            <div className="rounded-3xl border border-border bg-muted/40 p-8 text-center space-y-4 backdrop-blur-md">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground">
                Algorithmic Optimization & Problem Solving Focus
              </h3>
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Active problem solver on LeetCode with 150+ problems solved across arrays, strings, binary search, sliding window, dynamic programming, tree traversals, and graph algorithms.
              </p>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                {['Arrays & Strings', 'Binary Search', 'Sliding Window', 'Two Pointers', 'Recursion & Backtracking', 'Trees & Graphs'].map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full bg-background/80 px-3 py-1 text-xs font-mono font-medium text-foreground border border-border/50"
                  >
                    #{topic}
                  </span>
                ))}
              </div>
            </div>
          </InView>
        </div>
      </Container>
    </section>
  )
}
