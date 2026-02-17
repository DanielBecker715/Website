"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Github, ExternalLink, Gamepad2, Code2, Puzzle, Ghost, Blocks } from "lucide-react"

const repos = [
  {
    title: "Horrorgame-HDRP",
    description:
      "A horror game built with Unity HDRP. Dark atmospheres, lighting experiments, and shader work. Because building creepy things is just as fun as breaking them.",
    tags: ["C#", "Unity", "HDRP", "ShaderLab"],
    icon: Ghost,
    github: "https://github.com/DanielBecker715/Horrorgame-HDRP",
    language: "ShaderLab",
  },
  {
    title: "MobileGame-Basics",
    description:
      "Mobile game prototype exploring core mechanics and touch input patterns. A playground for learning game dev fundamentals in C# and Unity.",
    tags: ["C#", "Unity", "Mobile", "Game Dev"],
    icon: Gamepad2,
    github: "https://github.com/DanielBecker715/MobileGame-Basics",
    language: "C#",
  },
  {
    title: "MinecraftChallenges",
    description:
      "A Minecraft plugin that adds custom challenges to shake up vanilla gameplay. Built in Java because sometimes you just want to mod things for fun.",
    tags: ["Java", "Bukkit API", "Minecraft", "Plugin Dev"],
    icon: Blocks,
    github: "https://github.com/DanielBecker715/MinecraftChallenges",
    language: "Java",
  },
  {
    title: "AdventOfCode",
    description:
      "Solutions for Advent of Code challenges. Algorithmic puzzles solved in Python -- clean code, efficient solutions, and the occasional brute force.",
    tags: ["Python", "Algorithms", "Problem Solving"],
    icon: Puzzle,
    github: "https://github.com/DanielBecker715/AdventOfCode",
    language: "Python",
  },
  {
    title: "Final-Proposal",
    description:
      "A Python project from the vault. One of those builds that taught more than any tutorial ever could.",
    tags: ["Python"],
    icon: Code2,
    github: "https://github.com/DanielBecker715/Final-Proposal",
    language: "Python",
  },
]

const languageColors: Record<string, string> = {
  "C#": "bg-purple-400",
  "ShaderLab": "bg-orange-400",
  "Java": "bg-red-400",
  "Python": "bg-yellow-400",
}

export function ProjectsSection() {
  return (
    <section id="repos" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              {"// Repos"}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">
            Things I{"'"}ve Built
          </h2>
          <p className="text-center text-muted-foreground text-sm max-w-lg mx-auto mb-16 leading-relaxed">
            Side projects, experiments, and random stuff from my GitHub.
            Not all security-related -- sometimes you just build things because
            it{"'"}s fun.
          </p>
        </ScrollReveal>

        {/* Repo grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => {
            const Icon = repo.icon
            return (
              <ScrollReveal key={repo.title} delay={i * 80}>
                <a
                  href={repo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <div className="h-full rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-[0_0_30px_hsl(162_78%_48%/0.06)] flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <Icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
                      <div className="flex items-center gap-2">
                        <Github className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                        <ExternalLink className="h-3.5 w-3.5 text-muted-foreground/50 group-hover:text-primary/50 transition-colors" />
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2 font-mono group-hover:text-primary transition-colors">
                      {repo.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                      {repo.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex flex-wrap gap-2">
                        {repo.tags.map((tag) => (
                          <span
                            key={tag}
                            className="font-mono text-[10px] text-muted-foreground tracking-wide"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`h-2.5 w-2.5 rounded-full ${languageColors[repo.language] || "bg-muted-foreground"}`} />
                        <span className="font-mono text-[10px] text-muted-foreground">{repo.language}</span>
                      </div>
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            )
          })}
        </div>

        {/* GitHub CTA */}
        <ScrollReveal delay={300}>
          <div className="mt-12 text-center">
            <a
              href="https://github.com/DanielBecker715"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 rounded-lg border border-border bg-card px-6 py-3 font-mono text-sm text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_20px_hsl(162_78%_48%/0.1)]"
            >
              <Github className="h-4 w-4" />
              View all repos on GitHub
              <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
