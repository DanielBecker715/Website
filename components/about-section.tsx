"use client"

import { ScrollReveal } from "./scroll-reveal"
import { Shield, Lock, Code2, Bug, Skull, Fingerprint } from "lucide-react"

const fascinations = [
  { name: "Ransomware Internals", icon: Lock, desc: "How does ransomware actually encrypt your files? AES-256, RSA key exchange, double extortion -- the engineering behind the destruction." },
  { name: "Trojan Architectures", icon: Bug, desc: "Process injection, sandbox evasion, persistence mechanisms -- understanding what makes trojans invisible and dangerous." },
  { name: "OWASP Top 10", icon: Shield, desc: "SQL injection, XSS, SSRF -- not just a checklist but a deep dive into why these attack vectors keep coming back." },
  { name: "Malware Analysis", icon: Skull, desc: "Reversing binaries, reading disassembly, unpacking obfuscated payloads. Figuring out what malicious code really does." },
  { name: "Exploit Development", icon: Code2, desc: "Buffer overflows, ROP chains, heap spraying -- the low-level techniques behind real-world exploits." },
  { name: "Digital Forensics", icon: Fingerprint, desc: "Tracing attack paths through logs, memory dumps, and disk images. Reconstructing what happened after a breach." },
]

const topics = [
  "Ransomware", "Trojans", "OWASP Top 10", "Zero-Days",
  "CTF Challenges", "Social Engineering", "Supply Chain Attacks",
  "Exploit Dev", "Reverse Engineering", "Privilege Escalation",
  "XSS", "SQL Injection", "Phishing", "RATs",
  "C2 Frameworks", "Rootkits",
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              {"// About"}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 mt-16">
          <ScrollReveal delay={100}>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Curious about the dark side of computing
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-sm">
                <p>
                  Darkvoidstudios is my space for everything IT security. I{"'"}m a software developer
                  who{"'"}s genuinely fascinated by how threats work -- not to use them, but to
                  understand them. How does ransomware negotiate its keys? Why are trojans so
                  hard to detect? What makes the OWASP Top 10 so persistent?
                </p>
                <p>
                  This site is a collection of the things I dig into: attack vectors, malware
                  internals, exploit techniques, and the code behind all of it. Think of it as
                  a personal research board -- the kind of stuff I read about at 2am because
                  I can{"'"}t stop pulling at the thread.
                </p>
                <p>
                  I also build things, break things, and occasionally fly FPV drones when I
                  need to touch grass. But mostly it{"'"}s about the void.
                </p>
              </div>

              {/* Terminal card - no personal data */}
              <div className="mt-8 rounded-lg border border-border bg-card p-4 font-mono text-xs">
                <div className="flex items-center gap-2 mb-3 text-muted-foreground">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-500" />
                  <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
                  <span className="ml-2">motd.sh</span>
                </div>
                <div className="space-y-1 text-muted-foreground">
                  <p><span className="text-primary">$</span> cat /etc/motd</p>
                  <p className="text-foreground pl-4">Welcome to darkvoidstudios</p>
                  <p><span className="text-primary">$</span> echo $FOCUS</p>
                  <p className="text-foreground pl-4">Ransomware | Trojans | OWASP | Exploits</p>
                  <p><span className="text-primary">$</span> echo $MOTTO</p>
                  <p className="text-foreground pl-4">{"\"Understand the attack to build the defense\""}</p>
                  <p><span className="text-primary">$</span> uptime</p>
                  <p className="text-foreground pl-4">
                    always online <span className="text-primary animate-terminal-blink">_</span>
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6 font-mono">
                {">"} What Fascinates Me
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {fascinations.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.name}
                      className="group flex items-start gap-4 rounded-lg border border-border bg-card p-4 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                    >
                      <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                      <div>
                        <span className="text-sm font-semibold text-foreground">{item.name}</span>
                        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <h3 className="text-lg font-semibold text-foreground mt-10 mb-6 font-mono">
                {">"} Rabbit Holes
              </h3>
              <div className="flex flex-wrap gap-2">
                {topics.map((topic) => (
                  <span
                    key={topic}
                    className="inline-block rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground hover:border-primary/50 hover:text-primary transition-colors cursor-default"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
