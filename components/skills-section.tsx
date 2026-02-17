"use client"

import { ScrollReveal } from "./scroll-reveal"
import { useEffect, useRef, useState } from "react"

const toolkitCategories = [
  {
    title: "Languages I Use",
    items: [
      { name: "Python", level: 90 },
      { name: "Java", level: 85 },
      { name: "C#", level: 70 },
      { name: "Dart / Flutter", level: 75 },
      { name: "SQL", level: 80 },
      { name: "Bash", level: 72 },
    ],
  },
  {
    title: "Security Stuff I Dig Into",
    items: [
      { name: "Ransomware Analysis", level: 80 },
      { name: "OWASP Top 10", level: 88 },
      { name: "Trojan / RAT Research", level: 75 },
      { name: "Web App Pentesting", level: 82 },
      { name: "Reverse Engineering", level: 65 },
      { name: "Network Recon", level: 78 },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Wireshark / tcpdump", level: 78 },
      { name: "Burp Suite / ZAP", level: 80 },
      { name: "Nmap", level: 85 },
      { name: "Ghidra", level: 60 },
      { name: "Docker", level: 75 },
      { name: "Git / GitHub", level: 88 },
    ],
  },
]

const interests = [
  "TryHackMe",
  "HackTheBox",
  "CTFs",
  "PortSwigger Labs",
  "FPV Drones",
  "Game Dev",
  "Advent of Code",
]

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between mb-1.5">
        <span className="text-sm text-foreground font-mono">{name}</span>
        <span className="text-xs text-muted-foreground font-mono">{level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
        <div
          className="h-full rounded-full bg-primary transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : "0%",
            boxShadow: visible ? "0 0 8px hsl(162 78% 48% / 0.4)" : "none",
          }}
        />
      </div>
    </div>
  )
}

export function SkillsSection() {
  return (
    <section id="toolkit" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              {"// Toolkit"}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">
            What I Work With
          </h2>
          <p className="text-center text-muted-foreground text-sm max-w-lg mx-auto mb-16 leading-relaxed">
            Languages, tools, and the security rabbit holes
            I spend too much time in.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {toolkitCategories.map((category, ci) => (
            <ScrollReveal key={category.title} delay={ci * 100}>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-mono text-sm text-primary tracking-widest uppercase mb-6 flex items-center gap-2">
                  <span className="h-px w-4 bg-primary" />
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((skill, si) => (
                    <SkillBar
                      key={skill.name}
                      name={skill.name}
                      level={skill.level}
                      delay={ci * 100 + si * 60}
                    />
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Other interests */}
        <ScrollReveal delay={300}>
          <div className="mt-16 text-center">
            <h3 className="font-mono text-sm text-primary tracking-widest uppercase mb-6">
              {">"} Also Into
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {interests.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 font-mono text-xs text-primary tracking-wide transition-all duration-300 hover:bg-primary/10 hover:border-primary/50 hover:shadow-[0_0_15px_hsl(162_78%_48%/0.1)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
