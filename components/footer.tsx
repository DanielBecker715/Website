"use client"

import { Skull } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border py-8 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Skull className="h-4 w-4 text-primary" />
          <span className="font-mono text-xs tracking-wider">
            darkvoidstudios
          </span>
        </div>
        <div className="font-mono text-xs text-muted-foreground/60">
          <span className="text-primary/60">$</span> echo &quot;into the void&quot;
        </div>
      </div>
    </footer>
  )
}
