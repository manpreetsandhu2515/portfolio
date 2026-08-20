import { Navbar } from './components/layout/Navbar'
import { CloudBackground } from './components/motion/CloudBackground'
import { CursorGlow } from './components/motion/CursorGlow'
import { AboutSection } from './components/sections/AboutSection'
import { ContactSection } from './components/sections/ContactSection'
import { Footer } from './components/sections/Footer'
import { FootprintSection } from './components/sections/FootprintSection'
import { HeroSection } from './components/sections/HeroSection'
import { ProjectsSection } from './components/sections/ProjectsSection'
import { SkillsSection } from './components/sections/SkillsSection'

function App() {
  return (
    <div className="relative min-h-svh bg-background text-foreground selection:bg-primary/20 selection:text-primary overflow-x-clip">
      <CloudBackground />
      <CursorGlow />
      <Navbar />
      <div className="relative z-10">
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <FootprintSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App
