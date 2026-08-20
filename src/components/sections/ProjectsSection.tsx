import { useState } from 'react'
import { ArrowUpRight, CheckCircle2, Layers, Sparkles } from 'lucide-react'
import { RESUME_DATA, type Project } from '../../data/resume'
import { AnimatedGroup } from '../motion/AnimatedGroup'
import { InView } from '../motion/InView'
import { ProjectModal } from '../motion/ProjectModal'
import { SpotlightCard } from '../motion/SpotlightCard'
import { TiltCard } from '../motion/TiltCard'
import { Container } from '../ui/Container'

export function ProjectsSection() {
  const { projects } = RESUME_DATA
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projectCategoryStyles: Record<string, { bg: string; spotlight: string }> = {
    'RAG & LLMs': {
      bg: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
      spotlight: 'rgba(139, 92, 246, 0.25)',
    },
    'Computer Vision & ML': {
      bg: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
      spotlight: 'rgba(6, 182, 212, 0.25)',
    },
    'Cybersecurity & Deep Learning': {
      bg: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30',
      spotlight: 'rgba(16, 185, 129, 0.25)',
    },
  }

  return (
    <section id="projects" className="py-24 relative border-t border-border/40">
      <Container>
        <div className="space-y-16">
          {/* Section Header */}
          <InView>
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                <Sparkles className="size-3.5" />
                <span>Featured Engineering Work</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                AI & Machine Learning Projects
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Real-world RAG architectures, machine learning models, and security applications built with TypeScript, Python & SQL.
              </p>
            </div>
          </InView>

          {/* Projects Grid */}
          <AnimatedGroup className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const catStyle = projectCategoryStyles[project.category] || {
                bg: 'bg-violet-500/10 text-violet-300 border-violet-500/30',
                spotlight: 'rgba(139, 92, 246, 0.25)',
              }

              return (
                <TiltCard key={project.id} tiltMaxAngle={8} className="h-full">
                  <SpotlightCard
                    spotlightColor={catStyle.spotlight}
                    onClick={() => setSelectedProject(project)}
                    className="group relative flex flex-col justify-between h-full space-y-6 bg-background/70 hover:border-violet-500/40 transition-all duration-300 shadow-lg"
                  >
                    <div className="space-y-4">
                      {/* Top Row */}
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-mono font-medium border ${catStyle.bg}`}>
                          <Layers className="size-3" />
                          {project.category}
                        </span>
                        {project.metrics && (
                          <span className="text-xs font-mono text-cyan-300 bg-cyan-500/10 px-2.5 py-1 rounded-full border border-cyan-500/20">
                            {project.metrics}
                          </span>
                        )}
                      </div>

                      {/* Title */}
                      <div>
                        <div className="flex items-center justify-between">
                          <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-violet-300 transition-colors">
                            {project.title}
                          </h3>
                          <ArrowUpRight className="size-5 text-muted-foreground group-hover:text-cyan-400 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                        <p className="text-sm font-medium text-muted-foreground mt-0.5">
                          {project.subtitle}
                        </p>
                      </div>

                      {/* Short Description */}
                      <p className="text-sm text-muted-foreground/90 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Bullet Highlights */}
                      <ul className="space-y-2 pt-2">
                        {project.bulletPoints.slice(0, 2).map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-foreground/80 leading-relaxed">
                            <CheckCircle2 className="size-3.5 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="line-clamp-2">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Tags & CTA */}
                    <div className="space-y-4 pt-4 border-t border-border/40">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-lg bg-muted/40 px-2.5 py-1 text-xs font-medium text-muted-foreground border border-border/40 transition-colors group-hover:border-violet-500/20 group-hover:bg-violet-500/5 group-hover:text-violet-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <span className="text-xs font-semibold text-violet-400 group-hover:text-cyan-300 group-hover:underline inline-flex items-center gap-1">
                          View Architecture & Code Breakdown &rarr;
                        </span>
                        <span className="text-xs font-mono text-muted-foreground">{project.period}</span>
                      </div>
                    </div>
                  </SpotlightCard>
                </TiltCard>
              )
            })}
          </AnimatedGroup>
        </div>
      </Container>

      {/* Morphing Project Detail Dialog Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
