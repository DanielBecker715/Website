"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Github, ArrowUpRight, MessageSquare } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-2xl text-center">
        <ScrollReveal>
          <div className="mb-4 flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-border" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              {"// Contact"}
            </span>
            <div className="h-px w-16 bg-border" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-6 mb-6 text-balance">
            Say Hello
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto">
            Want to talk about ransomware internals, share a cool exploit writeup,
            collaborate on something, or just nerd out about security?
            Hit me up.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <a
            href="https://github.com/DanielBecker715"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-lg border border-primary bg-primary/10 px-8 py-4 font-mono text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-[0_0_30px_hsl(162_78%_48%/0.25)]"
          >
            <Github className="h-4 w-4" />
            DanielBecker715
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </ScrollReveal>

        {/* Terminal card */}
        <ScrollReveal delay={300}>
          <div className="mt-16 rounded-lg border border-border bg-card p-4 font-mono text-xs text-left max-w-md mx-auto">
            <div className="flex items-center gap-2 mb-3 text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-destructive/70" />
              <span className="h-2 w-2 rounded-full bg-yellow-500/70" />
              <span className="h-2 w-2 rounded-full bg-green-500/70" />
              <span className="ml-2 tracking-wider">ping.sh</span>
            </div>
            <div className="space-y-1 text-muted-foreground">
              <p><span className="text-primary">$</span> ping darkvoidstudios</p>
              <p className="text-foreground pl-4">PING darkvoidstudios.com</p>
              <p className="text-foreground pl-4">64 bytes: seq=1 ttl=64 time=0.42ms</p>
              <p className="text-foreground pl-4">64 bytes: seq=2 ttl=64 time=0.38ms</p>
              <p><span className="text-primary">$</span> echo $GITHUB</p>
              <p className="text-foreground pl-4">github.com/DanielBecker715</p>
              <p><span className="text-primary">$</span> echo $STATUS</p>
              <p className="text-foreground pl-4">
                online <span className="text-primary animate-terminal-blink">_</span>
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
