"use client"

import { Skull, ArrowLeft, Activity, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlitchText } from "@/components/glitch-text"
import { MatrixRain } from "@/components/matrix-rain"

const services = [
  { name: "Website", status: "operational" },
  { name: "API", status: "operational" },
  { name: "Game Servers", status: "operational" },
  { name: "CDN", status: "operational" },
]

export function StatusContent() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="opacity-20">
        <MatrixRain />
      </div>
      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-border bg-background">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-4 sm:py-6 flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 font-mono text-sm group"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              <span>Back to Void</span>
            </Link>
            <div className="flex items-center gap-2 text-primary font-mono text-sm font-bold tracking-wider">
              <Skull className="h-4 w-4" />
              <span>darkvoidstudios</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 sm:pt-16 pb-8 sm:pb-12">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full border border-primary/30 bg-primary/5">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <GlitchText
                text="System Status"
                as="h1"
                className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
              />
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                All systems monitored
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </ScrollReveal>
        </div>

        {/* Status List */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pb-16 sm:pb-20 flex flex-col gap-3">
          {services.map((service, i) => (
            <ScrollReveal key={service.name} delay={i * 80}>
              <div className="flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all duration-300 hover:border-primary/30">
                <span className="font-mono text-sm text-foreground">{service.name}</span>
                <span className="flex items-center gap-2 font-mono text-xs text-primary">
                  <CheckCircle2 className="h-4 w-4" />
                  Operational
                </span>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal delay={400}>
            <div className="flex justify-center pt-8">
              <Link
                href="/"
                className="group flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                Return to Void
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </main>
  )
}
