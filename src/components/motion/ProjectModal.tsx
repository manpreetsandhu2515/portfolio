import { AnimatePresence, motion } from 'motion/react'
import { CheckCircle2, ExternalLink, Layers, Sparkles, X } from 'lucide-react'
import type { Project } from '../../data/resume'
import { GithubIcon } from '../ui/Icons'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative z-10 w-full max-w-2xl overflow-hidden rounded-3xl border border-border bg-background p-6 md:p-8 shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 flex size-9 items-center justify-center rounded-full bg-muted/80 text-foreground transition-colors hover:bg-muted"
            >
              <X className="size-5" />
            </button>

            {/* Header */}
            <div className="flex items-center gap-2 text-xs font-mono font-medium text-muted-foreground uppercase tracking-widest mb-2">
              <span className="inline-block size-2 rounded-full bg-primary animate-pulse" />
              {project.category} • {project.period}
            </div>

            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              {project.title}
            </h3>
            <p className="text-sm font-medium text-muted-foreground mt-1">
              {project.subtitle}
            </p>

            {project.metrics && (
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary border border-primary/20">
                <Sparkles className="size-3.5" />
                <span>{project.metrics}</span>
              </div>
            )}

            <div className="my-6 border-t border-border/60" />

            {/* Project Overview */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                <Layers className="size-4 text-primary" /> Key Contributions & Engineering
              </h4>

              <ul className="space-y-2.5">
                {project.bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                    <CheckCircle2 className="size-4 text-primary shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && (
              <div className="mt-6 space-y-2.5 rounded-2xl bg-muted/40 p-4 border border-border/40">
                <h5 className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold">
                  Technical Architecture Highlights
                </h5>
                <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground font-sans">
                  {project.architectureHighlights.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Tags */}
            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg bg-muted px-2.5 py-1 text-xs font-medium text-foreground/80 border border-border/50"
                >
                  #{tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-muted px-4 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-muted/80 hover:scale-[1.02]"
                >
                  <GithubIcon className="size-4" />
                  <span>View Repository</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-foreground px-4 py-2.5 text-sm font-medium text-background transition-all hover:opacity-90 hover:scale-[1.02]"
                >
                  <ExternalLink className="size-4" />
                  <span>Live Project Demo</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
