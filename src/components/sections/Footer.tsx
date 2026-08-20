import { ArrowUp, Mail } from 'lucide-react'
import { RESUME_DATA } from '../../data/resume'
import { MagneticButton } from '../motion/MagneticButton'
import { Container } from '../ui/Container'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

export function Footer() {
  const { personalInfo } = RESUME_DATA

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-border/40 bg-background/80 py-12">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-base font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </p>
            <p className="text-xs text-muted-foreground font-mono">
              Software Engineer • Chandigarh University
            </p>
          </div>

          <div className="flex items-center gap-4 text-muted-foreground">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-cyan-500/10 border border-transparent hover:border-cyan-500/20"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="hover:text-violet-400 transition-colors p-2 rounded-lg hover:bg-violet-500/10 border border-transparent hover:border-violet-500/20"
            >
              <LinkedinIcon className="size-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Email Me"
              className="hover:text-emerald-400 transition-colors p-2 rounded-lg hover:bg-emerald-500/10 border border-transparent hover:border-emerald-500/20"
            >
              <Mail className="size-4" />
            </a>

            <span className="h-4 w-px bg-border/60 mx-1" />

            <MagneticButton onClick={scrollToTop}>
              <button
                aria-label="Scroll to top"
                className="flex size-9 items-center justify-center rounded-xl border border-violet-500/30 bg-violet-500/10 text-violet-300 transition-colors hover:bg-violet-500/20 shadow-xs"
              >
                <ArrowUp className="size-4 text-violet-400" />
              </button>
            </MagneticButton>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border/20 text-center text-xs text-muted-foreground font-mono">
          &copy; {new Date().getFullYear()} Manpreet Kaur Sandhu. All Rights Reserved.
        </div>
      </Container>
    </footer>
  )
}
