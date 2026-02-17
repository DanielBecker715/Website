"use client"

import { Skull, ArrowLeft, Shield, Server, Cookie, Users, Key, FileText, Mail, Globe, Code } from "lucide-react"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { GlitchText } from "@/components/glitch-text"
import { MatrixRain } from "@/components/matrix-rain"

interface SectionProps {
  id: string
  icon: React.ReactNode
  title: string
  children: React.ReactNode
  delay?: number
}

function PolicySection({ id, icon, title, children, delay = 0 }: SectionProps) {
  return (
    <ScrollReveal delay={delay}>
      <section id={id} className="group relative rounded-lg border border-border bg-card/50 p-6 sm:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(162,78%,48%,0.05)]">
        {/* Accent corner */}
        <div className="absolute top-0 left-0 h-8 w-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg transition-colors duration-300 group-hover:border-primary/60" />
        <div className="absolute bottom-0 right-0 h-8 w-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg transition-colors duration-300 group-hover:border-primary/60" />

        <div className="flex items-center gap-3 mb-6">
          <span className="flex items-center justify-center h-9 w-9 rounded-md bg-primary/10 text-primary">
            {icon}
          </span>
          <h2 className="font-mono text-lg sm:text-xl font-bold text-foreground tracking-wide">
            {title}
          </h2>
        </div>
        <div className="space-y-4 font-mono text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </section>
    </ScrollReveal>
  )
}

const tocItems = [
  { id: "controller", label: "Controller" },
  { id: "overview", label: "Overview of Processing" },
  { id: "legal-bases", label: "Legal Bases" },
  { id: "security", label: "Security Measures" },
  { id: "hosting", label: "Hosting & Server Logs" },
  { id: "cookies", label: "Cookies" },
  { id: "accounts", label: "User Accounts" },
  { id: "sso", label: "Single Sign-On" },
  { id: "blog", label: "Blog & Publications" },
  { id: "contact", label: "Contact & Inquiries" },
  { id: "social", label: "Social Media" },
  { id: "third-party", label: "Third-Party Content" },
]

export function PrivacyContent() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-border bg-card/30 backdrop-blur-xl">
          <div className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
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

        {/* Title Area */}
        <div className="mx-auto max-w-4xl px-6 pt-16 pb-8">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full border border-primary/30 bg-primary/5">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <GlitchText
                text="Privacy Policy"
                as="h1"
                className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
              />
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                Last updated: June 15, 2025
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </ScrollReveal>
        </div>

        {/* Table of Contents */}
        <div className="mx-auto max-w-4xl px-6 pb-12">
          <ScrollReveal delay={100}>
            <div className="rounded-lg border border-border bg-card/50 p-6">
              <p className="font-mono text-xs text-primary/60 mb-4 tracking-wider uppercase">
                {"// Table of Contents"}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {tocItems.map((item, i) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="font-mono text-xs text-muted-foreground hover:text-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="text-primary/40">{String(i + 1).padStart(2, "0")}.</span>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Sections */}
        <div className="mx-auto max-w-4xl px-6 pb-20 flex flex-col gap-6">
          <PolicySection id="controller" icon={<Users className="h-5 w-5" />} title="Controller" delay={0}>
            <p>
              Daniel Becker<br />
              c/o IP-Management #5887<br />
              Ludwig-Erhard-Str. 18<br />
              20459 Hamburg, Germany
            </p>
            <p>
              <span className="text-primary/60">Email:</span>{" "}
              <a href="mailto:administration@darkvoidstudios.com" className="text-primary hover:underline underline-offset-4">
                administration@darkvoidstudios.com
              </a>
            </p>
          </PolicySection>

          <PolicySection id="overview" icon={<FileText className="h-5 w-5" />} title="Overview of Processing" delay={50}>
            <div>
              <p className="text-foreground/80 font-semibold mb-2">Types of Data Processed:</p>
              <ul className="list-none space-y-1 pl-4">
                {["User and account data", "Location data", "Contact information", "Content data", "Usage data", "Communication and metadata", "Log data"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">{">"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-foreground/80 font-semibold mb-2">Categories of Data Subjects:</p>
              <ul className="list-none space-y-1 pl-4">
                {["Communication partners", "Users"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">{">"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-foreground/80 font-semibold mb-2">Purposes of Processing:</p>
              <ul className="list-none space-y-1 pl-4">
                {["Fulfillment of contractual obligations", "Communication", "Security", "Analytics and audience measurement", "Marketing and feedback", "Technical infrastructure"].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">{">"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </PolicySection>

          <PolicySection id="legal-bases" icon={<Shield className="h-5 w-5" />} title="Legal Bases" delay={50}>
            <p>Processing is based on:</p>
            <ul className="list-none space-y-1 pl-4">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">{">"}</span>
                <span><span className="text-foreground/80">Consent</span> (Art. 6(1)(a) GDPR)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">{">"}</span>
                <span><span className="text-foreground/80">Contract performance</span> (Art. 6(1)(b) GDPR)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1 shrink-0">{">"}</span>
                <span><span className="text-foreground/80">Legitimate interests</span> (Art. 6(1)(f) GDPR)</span>
              </li>
            </ul>
            <p>
              National Laws (Germany): Federal Data Protection Act (BDSG) also applies.
              Swiss Users: Terms align with Swiss Federal Act on Data Protection (FADP).
            </p>
          </PolicySection>

          <PolicySection id="security" icon={<Key className="h-5 w-5" />} title="Security Measures" delay={50}>
            <p>
              We implement technical and organizational measures aligned with the risk involved,
              including SSL/TLS encryption to secure transmitted data (HTTPS). Servers, infrastructure,
              and data flows are continuously monitored and protected.
            </p>
          </PolicySection>

          <PolicySection id="hosting" icon={<Server className="h-5 w-5" />} title="Hosting and Server Log Files" delay={50}>
            <p>
              We collect access data (e.g., IP address, timestamps, browser types) via server log files
              for operational and security purposes. These logs are stored for 30 days.
            </p>
            <p>
              <span className="text-primary/60">Hosting Provider:</span>{" "}
              <span className="text-foreground/80">Hetzner Online GmbH</span>
            </p>
          </PolicySection>

          <PolicySection id="cookies" icon={<Cookie className="h-5 w-5" />} title="Cookies" delay={50}>
            <p>
              Cookies are used for functionality, security, and analytics. Users are informed and can
              consent, reject, or revoke consent at any time.
            </p>
            <div>
              <p className="text-foreground/80 font-semibold mb-2">Cookie Types:</p>
              <ul className="list-none space-y-1 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">{">"}</span>
                  <span><span className="text-foreground/80">Session cookies:</span> Deleted when browser is closed</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">{">"}</span>
                  <span><span className="text-foreground/80">Persistent cookies:</span> Stored up to 2 years</span>
                </li>
              </ul>
            </div>
            <p>
              <span className="text-primary/60">Legal Basis:</span>{" "}
              Consent (Art. 6(1)(a) GDPR) or legitimate interest (Art. 6(1)(f) GDPR)
            </p>
          </PolicySection>

          <PolicySection id="accounts" icon={<Users className="h-5 w-5" />} title="User Registration and Accounts" delay={50}>
            <p>
              User data (email, password, IP address) is collected during registration.
              Data is retained until account deletion.
            </p>
            <div>
              <p className="text-foreground/80 font-semibold mb-2">Features:</p>
              <ul className="list-none space-y-1 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">{">"}</span>
                  Pseudonymous accounts allowed
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">{">"}</span>
                  Two-factor authentication supported
                </li>
              </ul>
            </div>
          </PolicySection>

          <PolicySection id="sso" icon={<Key className="h-5 w-5" />} title="Single Sign-On (SSO)" delay={50}>
            <p>
              SSO services allow login using third-party providers (e.g., Google). Data such as
              usernames and email addresses may be shared, but not passwords.
            </p>
            <p>
              Users can revoke access via the SSO provider.
            </p>
            <p>
              <span className="text-primary/60">Legal basis:</span>{" "}
              Consent (Art. 6(1)(a) GDPR)
            </p>
          </PolicySection>

          <PolicySection id="blog" icon={<FileText className="h-5 w-5" />} title="Blog and Publications" delay={50}>
            <p>
              If users comment or contribute content, personal data such as name and contact info
              may be collected and stored as part of the publishing workflow.
            </p>
            <p>
              <span className="text-primary/60">Legal basis:</span>{" "}
              Consent (Art. 6(1)(a) GDPR) or legitimate interests (Art. 6(1)(f) GDPR)
            </p>
          </PolicySection>

          <PolicySection id="contact" icon={<Mail className="h-5 w-5" />} title="Contact and Inquiries" delay={50}>
            <p>
              If you contact us, your message and details (name, email, etc.) will be stored
              and processed to handle your inquiry.
            </p>
            <p>
              <span className="text-primary/60">Legal basis:</span>{" "}
              Contract performance (Art. 6(1)(b) GDPR) or legitimate interests (Art. 6(1)(f) GDPR)
            </p>
          </PolicySection>

          <PolicySection id="social" icon={<Globe className="h-5 w-5" />} title="Social Media Presence" delay={50}>
            <p>
              We maintain profiles on platforms like YouTube. Data may be processed outside the EU.
              Users are encouraged to contact platforms directly to exercise data rights.
            </p>
            <p>
              <span className="text-primary/60">Example Platform:</span>{" "}
              <span className="text-foreground/80">YouTube (Google Ireland Ltd.)</span>
            </p>
            <p>
              <span className="text-primary/60">Legal basis:</span>{" "}
              Legitimate interests (Art. 6(1)(f) GDPR)
            </p>
          </PolicySection>

          <PolicySection id="third-party" icon={<Code className="h-5 w-5" />} title="Third-Party Content" delay={50}>
            <p>
              Content like videos, fonts, or maps may be embedded from third-party services
              (e.g., Google Fonts, YouTube). These providers may collect usage data and IP addresses.
            </p>
            <div>
              <p className="text-foreground/80 font-semibold mb-2">Examples:</p>
              <ul className="list-none space-y-1 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">{">"}</span>
                  <span><span className="text-foreground/80">Google Fonts</span> - for fast and uniform rendering of typefaces</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">{">"}</span>
                  <span><span className="text-foreground/80">Google Maps</span> - to display location-based content</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1 shrink-0">{">"}</span>
                  <span><span className="text-foreground/80">YouTube</span> - to show video content</span>
                </li>
              </ul>
            </div>
            <p>
              <span className="text-primary/60">Legal basis:</span>{" "}
              Consent or legitimate interests.
            </p>
          </PolicySection>

          {/* Terminal-style EOF block */}
          <ScrollReveal delay={100}>
            <div className="flex items-center justify-center gap-4 pt-8">
              <div className="flex-1 h-px bg-border" />
              <span className="font-mono text-xs text-primary/40 tracking-wider">
                {"// END OF POLICY"}
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            <div className="flex justify-center pt-6">
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
