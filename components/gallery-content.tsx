"use client"

import { Skull, ArrowLeft, ImageIcon } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlitchText } from "@/components/glitch-text"
import { MatrixRain } from "@/components/matrix-rain"

export function GalleryContent() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="opacity-20">
        <MatrixRain />
      </div>
      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-border bg-background">
          <div className="mx-auto max-w-5xl px-6 py-6 flex items-center justify-between">
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
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-12">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full border border-primary/30 bg-primary/5">
                <ImageIcon className="h-8 w-8 text-primary" />
              </div>
              <GlitchText
                text="Gallery"
                as="h1"
                className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
              />
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                Drone footage, photos & media
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </ScrollReveal>
        </div>

        {/* Coming Soon */}
        <div className="mx-auto max-w-5xl px-6 pb-20">
          <ScrollReveal delay={100}>
            <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-card p-12 text-center">
              <span className="font-mono text-sm text-primary/60 tracking-wider">{"// COMING_SOON"}</span>
              <p className="font-mono text-sm text-muted-foreground max-w-md">
                Gallery content is being prepared. Drone footage, photography, and creative media will appear here.
              </p>
              <Link
                href="/"
                className="group flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-primary transition-colors duration-300 mt-4"
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
