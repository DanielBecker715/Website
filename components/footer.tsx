"use client"

import { Skull } from "lucide-react"
import Link from "next/link"

const socialLinks = [
  {
    label: "Steam",
    href: "https://steamcommunity.com/id/darkvoidstudios",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M11.979 0C5.678 0 .511 4.86.022 10.942l6.432 2.658a3.387 3.387 0 0 1 1.912-.587c.063 0 .126.003.188.006l2.862-4.146v-.058c0-2.495 2.03-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.082 2.911c0 .052.003.105.003.158 0 1.875-1.527 3.4-3.4 3.4-1.651 0-3.028-1.18-3.34-2.746L.453 15.143A12.015 12.015 0 0 0 11.979 24c6.627 0 12-5.373 12-12S18.606 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.999 1.314 1.25a2.553 2.553 0 0 0 3.36-3.065 2.553 2.553 0 0 0-3.201 2.425zm8.4-9.398a3.018 3.018 0 0 1-3.015-3.015 3.018 3.018 0 0 1 3.015-3.015 3.017 3.017 0 0 1 3.015 3.015 3.018 3.018 0 0 1-3.015 3.015z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "https://github.com/DanielBecker715",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@darkvoidstudios",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative border-t border-border bg-background">
      {/* Decorative top glow line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6 py-6">
        {/* Top row: brand + socials */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/" className="flex items-center gap-2 text-primary font-mono text-sm font-bold tracking-wider group">
            <Skull className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
            <span>darkvoidstudios</span>
          </a>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-8 w-8 rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:shadow-[0_0_12px_hsl(162,78%,48%,0.25)]"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-4">
          <div className="flex-1 h-px bg-border" />
          <span className="font-mono text-[10px] text-primary/40 tracking-wider">{"// EOF"}</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Bottom row: copyright + privacy */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-mono text-[11px] text-muted-foreground/60">
            <span className="text-primary/60">$</span>{" "}
            {`\u00A9 ${currentYear} darkvoidstudios. All rights reserved.`}
          </p>
          <Link
            href="/privacy"
            className="font-mono text-[11px] text-muted-foreground/60 hover:text-primary transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-primary"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  )
}
