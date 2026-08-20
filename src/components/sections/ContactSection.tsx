import { Check, Copy, Mail, MapPin, Phone, Send, Sparkles } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { RESUME_DATA } from '../../data/resume'
import { InView } from '../motion/InView'
import { MagneticButton } from '../motion/MagneticButton'
import { SpotlightCard } from '../motion/SpotlightCard'
import { Container } from '../ui/Container'
import { GithubIcon, LinkedinIcon } from '../ui/Icons'

export function ContactSection() {
  const { personalInfo } = RESUME_DATA
  const [copiedEmail, setCopiedEmail] = useState(false)
  const [copiedPhone, setCopiedPhone] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 2000)
  }

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phone)
    setCopiedPhone(true)
    setTimeout(() => setCopiedPhone(false), 2000)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="py-24 relative border-t border-border/40">
      <Container>
        <div className="space-y-16">
          {/* Header */}
          <InView>
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-violet-400 bg-violet-500/10 border border-violet-500/20 px-3 py-1 rounded-full">
                <Sparkles className="size-3.5" />
                <span>Let's Connect</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                Get In Touch With Manpreet
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Open to AI Engineering roles, client-facing technology initiatives, hackathon collaborations, and technical discussions.
              </p>
            </div>
          </InView>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Contact Information & Copy Actions */}
            <InView variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
              <div className="space-y-6">
                <SpotlightCard spotlightColor="rgba(139, 92, 246, 0.25)" className="space-y-6 bg-background/60 hover:border-violet-500/40 shadow-lg">
                  <h3 className="text-xl font-bold text-foreground">Direct Contact Channels</h3>

                  <div className="space-y-4">
                    {/* Email Card */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-violet-500/5 border border-violet-500/20">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-violet-500/10 text-violet-400 border border-violet-500/30">
                          <Mail className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs text-violet-400/80 font-mono">Email Address</div>
                          <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-sm font-semibold text-foreground hover:text-violet-300 hover:underline"
                          >
                            {personalInfo.email}
                          </a>
                        </div>
                      </div>

                      <button
                        onClick={handleCopyEmail}
                        aria-label="Copy Email Address"
                        className="flex size-9 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-300 transition-colors hover:bg-violet-500/20"
                      >
                        {copiedEmail ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                      </button>
                    </div>

                    {/* Phone Card */}
                    <div className="flex items-center justify-between p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20">
                      <div className="flex items-center gap-3">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                          <Phone className="size-4" />
                        </div>
                        <div>
                          <div className="text-xs text-cyan-400/80 font-mono">Phone Number</div>
                          <a
                            href={`tel:${personalInfo.phone}`}
                            className="text-sm font-semibold text-foreground hover:text-cyan-300 hover:underline"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      </div>

                      <button
                        onClick={handleCopyPhone}
                        aria-label="Copy Phone Number"
                        className="flex size-9 items-center justify-center rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 transition-colors hover:bg-cyan-500/20"
                      >
                        {copiedPhone ? <Check className="size-4 text-emerald-400" /> : <Copy className="size-4" />}
                      </button>
                    </div>

                    {/* Location Card */}
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                      <div className="flex size-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                        <MapPin className="size-4" />
                      </div>
                      <div>
                        <div className="text-xs text-emerald-400/80 font-mono">Location</div>
                        <div className="text-sm font-semibold text-foreground">{personalInfo.location}</div>
                      </div>
                    </div>
                  </div>

                  {/* Social Buttons */}
                  <div className="pt-2 flex items-center gap-4">
                    <MagneticButton>
                      <a
                        href={personalInfo.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-4 py-2.5 text-xs font-semibold text-cyan-300 hover:bg-cyan-500/20 transition-colors shadow-xs"
                      >
                        <GithubIcon className="size-4 text-cyan-400" />
                        <span>GitHub Profile</span>
                      </a>
                    </MagneticButton>

                    <MagneticButton>
                      <a
                        href={personalInfo.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2.5 text-xs font-semibold text-violet-300 hover:bg-violet-500/20 transition-colors shadow-xs"
                      >
                        <LinkedinIcon className="size-4 text-violet-400" />
                        <span>LinkedIn Profile</span>
                      </a>
                    </MagneticButton>
                  </div>
                </SpotlightCard>
              </div>
            </InView>

            {/* Direct Message Form */}
            <InView variants={{ hidden: { opacity: 0, x: 20 }, visible: { opacity: 1, x: 0 } }}>
              <SpotlightCard spotlightColor="rgba(6, 182, 212, 0.25)" className="space-y-6 bg-background/60 hover:border-cyan-500/40 shadow-lg">
                <h3 className="text-xl font-bold text-foreground">Send a Direct Message</h3>

                {formSubmitted ? (
                  <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-2">
                    <Check className="size-8 text-emerald-400 mx-auto" />
                    <h4 className="text-base font-bold text-foreground">Message Sent Successfully!</h4>
                    <p className="text-xs text-muted-foreground">
                      Thank you for reaching out. Manpreet will respond to your email as soon as possible.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-medium text-violet-400 uppercase">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Alex Smith"
                          className="w-full rounded-xl border border-border/80 bg-background/80 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-mono font-medium text-violet-400 uppercase">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          className="w-full rounded-xl border border-border/80 bg-background/80 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-cyan-400 uppercase">
                        Subject
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="AI Engineering / Opportunity Inquiry"
                        className="w-full rounded-xl border border-border/80 bg-background/80 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-cyan-400 uppercase">
                        Message
                      </label>
                      <textarea
                        required
                        rows={4}
                        placeholder="Hello Manpreet, I'd like to discuss an opportunity..."
                        className="w-full rounded-xl border border-border/80 bg-background/80 px-3.5 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                      />
                    </div>

                    <MagneticButton className="w-full">
                      <button
                        type="submit"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-cyan-600 hover:from-violet-500 hover:to-cyan-500 text-white px-6 py-3 text-sm font-semibold shadow-lg shadow-violet-500/25 transition-all"
                      >
                        <Send className="size-4" />
                        <span>Send Message</span>
                      </button>
                    </MagneticButton>
                  </form>
                )}
              </SpotlightCard>
            </InView>
          </div>
        </div>
      </Container>
    </section>
  )
}
