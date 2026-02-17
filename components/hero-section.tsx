"use client"

import { GlitchText } from "./glitch-text"
import { TypingEffect } from "./typing-effect"
import { Terminal, ArrowDown } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-[120px] pointer-events-none"
        style={{ background: "hsl(162, 78%, 48%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-3xl animate-fade-in">
        <div className="mb-6 flex items-center justify-center gap-2 text-primary font-mono text-sm tracking-widest opacity-80">
          <Terminal className="h-4 w-4" />
          <span>{"~/darkvoidstudios"}</span>
        </div>

        <GlitchText
          text="DARKVOIDSTUDIOS"
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight"
          as="h1"
        />

        <p className="mt-4 text-lg md:text-xl text-muted-foreground font-mono">
          Into the Void.
        </p>

        <div className="mt-6 text-base md:text-lg text-primary/80">
          <TypingEffect
            strings={[
              "How does ransomware encrypt your files?",
              "What makes a trojan undetectable?",
              "Why does the OWASP Top 10 still matter?",
              "What happens after a zero-day drops?",
              "How do supply chain attacks spread?",
              "Can you trust your own dependencies?",
            ]}
          />
        </div>

        <p className="mt-8 text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
          A corner of the internet dedicated to the dark side of computing.
          Ransomware internals, trojan architectures, OWASP attack vectors,
          and the code behind the chaos. Not selling anything -- just fascinated by how it all works.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#threats"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            {">"} Explore Threats
          </a>
          <a
            href="https://github.com/DanielBecker715"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-mono text-sm font-semibold rounded-lg hover:border-primary hover:text-primary transition-colors"
          >
            {">"} View GitHub
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-float"
        aria-label="Scroll to about section"
      >
        <ArrowDown className="h-6 w-6" />
      </a>
    </section>
  )
}
