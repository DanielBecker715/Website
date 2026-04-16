"use client"

import { Skull, ArrowLeft, Scale, User, Mail, Globe, Server, FileText } from "lucide-react"
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

function ImpressumSection({ id, icon, title, children, delay = 0 }: SectionProps) {
  return (
    <ScrollReveal delay={delay}>
      <section id={id} className="group relative rounded-lg border border-border bg-card/50 p-4 sm:p-6 md:p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_hsl(162,78%,48%,0.05)]">
        {/* Accent corner */}
        <div className="absolute top-0 left-0 h-6 w-6 sm:h-8 sm:w-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg transition-colors duration-300 group-hover:border-primary/60" />
        <div className="absolute bottom-0 right-0 h-6 w-6 sm:h-8 sm:w-8 border-b-2 border-r-2 border-primary/30 rounded-br-lg transition-colors duration-300 group-hover:border-primary/60" />

        <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
          <span className="flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-md bg-primary/10 text-primary shrink-0">
            {icon}
          </span>
          <h2 className="font-mono text-base sm:text-lg md:text-xl font-bold text-foreground tracking-wide">
            {title}
          </h2>
        </div>
        <div className="space-y-3 sm:space-y-4 font-mono text-xs sm:text-sm leading-relaxed text-muted-foreground">
          {children}
        </div>
      </section>
    </ScrollReveal>
  )
}

const tocItems = [
  { id: "responsible", label: "Verantwortlich" },
  { id: "contact", label: "Kontakt" },
  { id: "disclaimer", label: "Haftungsausschluss" },
  { id: "links", label: "Externe Links" },
  { id: "copyright", label: "Urheberrecht" },
]

export function ImpressumContent() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="opacity-10">
        <MatrixRain />
      </div>
      <div className="relative z-10">
        {/* Header */}
        <div className="border-b border-border bg-card/30 backdrop-blur-xl">
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

        {/* Title Area */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pt-10 sm:pt-16 pb-6 sm:pb-8">
          <ScrollReveal>
            <div className="flex flex-col items-center text-center gap-4">
              <div className="flex items-center justify-center h-16 w-16 rounded-full border border-primary/30 bg-primary/5">
                <Scale className="h-8 w-8 text-primary" />
              </div>
              <GlitchText
                text="Impressum"
                as="h1"
                className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
              />
              <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase">
                Angaben gemäß § 5 TMG
              </p>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </ScrollReveal>
        </div>

        {/* Table of Contents */}
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pb-8 sm:pb-12">
          <ScrollReveal delay={100}>
            <div className="rounded-lg border border-border bg-card/50 p-4 sm:p-6">
              <p className="font-mono text-xs text-primary/60 mb-3 sm:mb-4 tracking-wider uppercase">
                {"// Inhaltsverzeichnis"}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
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
        <div className="mx-auto max-w-4xl px-4 sm:px-6 pb-16 sm:pb-20 flex flex-col gap-4 sm:gap-6">
          <ImpressumSection id="responsible" icon={<User className="h-5 w-5" />} title="Verantwortlich" delay={0}>
            <p>
              Daniel Becker<br />
              c/o IP-Management #5887<br />
              Ludwig-Erhard-Str. 18<br />
              20459 Hamburg, Germany
            </p>
          </ImpressumSection>

          <ImpressumSection id="contact" icon={<Mail className="h-5 w-5" />} title="Kontakt" delay={50}>
            <p>
              <span className="text-primary/60">E-Mail:</span>{" "}
              <a href="mailto:administration@darkvoidstudios.com" className="text-primary hover:underline underline-offset-4">
                administration@darkvoidstudios.com
              </a>
            </p>
          </ImpressumSection>

          <ImpressumSection id="disclaimer" icon={<FileText className="h-5 w-5" />} title="Haftungsausschluss" delay={50}>
            <div>
              <p className="text-foreground/80 font-semibold mb-2">Haftung für Inhalte</p>
              <p>
                Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit,
                Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
                nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                Tätigkeit hinweisen.
              </p>
            </div>
            <div>
              <p className="text-foreground/80 font-semibold mb-2">Haftung für Links</p>
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                Seiten verantwortlich.
              </p>
            </div>
          </ImpressumSection>

          <ImpressumSection id="links" icon={<Globe className="h-5 w-5" />} title="Externe Links" delay={50}>
            <p>
              Diese Website enthält Verknüpfungen zu Websites Dritter (&quot;externe Links&quot;). Diese
              Websites unterliegen der Haftung der jeweiligen Betreiber. Bei Bekanntwerden von
              Rechtsverletzungen werden derartige externe Links unverzüglich entfernt.
            </p>
          </ImpressumSection>

          <ImpressumSection id="copyright" icon={<Server className="h-5 w-5" />} title="Urheberrecht" delay={50}>
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind
              nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
          </ImpressumSection>

          {/* Terminal-style EOF block */}
          <ScrollReveal delay={100}>
            <div className="flex items-center justify-center gap-4 pt-8">
              <div className="flex-1 h-px bg-border" />
              <span className="font-mono text-xs text-primary/40 tracking-wider">
                {"// END OF IMPRESSUM"}
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
