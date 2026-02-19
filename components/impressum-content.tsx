"use client"

import { Skull, ArrowLeft, Shield, Users, Mail, Globe, FileText, EyeOff, Scale, ServerOff } from "lucide-react"
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
  { id: "angaben", label: "Angaben gem. \u00A7 5 TMG" },
  { id: "kontakt", label: "Kontakt" },
  { id: "verantwortlich", label: "Verantwortlich f\u00FCr Inhalte" },
  { id: "no-tracking", label: "Kein Tracking / No-Log-Policy" },
  { id: "haftung-inhalte", label: "Haftung f\u00FCr Inhalte" },
  { id: "haftung-links", label: "Haftung f\u00FCr Links" },
  { id: "urheberrecht", label: "Urheberrecht" },
  { id: "streitbeilegung", label: "Streitbeilegung" },
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
                Legal Notice / Impressum gem. &sect; 5 TMG
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
                {"// Table of Contents"}
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
          <ImpressumSection id="angaben" icon={<Users className="h-5 w-5" />} title="Angaben gem. &sect; 5 TMG" delay={0}>
            <p>
              Daniel Becker<br />
              c/o IP-Management #5887<br />
              Ludwig-Erhard-Str. 18<br />
              20459 Hamburg, Germany
            </p>
          </ImpressumSection>

          <ImpressumSection id="kontakt" icon={<Mail className="h-5 w-5" />} title="Kontakt" delay={50}>
            <p>
              <span className="text-primary/60">E-Mail:</span>{" "}
              <a href="mailto:administration@darkvoidstudios.com" className="text-primary hover:underline underline-offset-4">
                administration@darkvoidstudios.com
              </a>
            </p>
          </ImpressumSection>

          <ImpressumSection id="verantwortlich" icon={<FileText className="h-5 w-5" />} title="Verantwortlich f&uuml;r den Inhalt gem. &sect; 18 Abs. 2 MStV" delay={50}>
            <p>
              Daniel Becker<br />
              c/o IP-Management #5887<br />
              Ludwig-Erhard-Str. 18<br />
              20459 Hamburg, Germany
            </p>
          </ImpressumSection>

          <ImpressumSection id="no-tracking" icon={<EyeOff className="h-5 w-5" />} title="Kein Tracking / No-Log-Policy" delay={50}>
            <div className="rounded-md border border-primary/20 bg-primary/5 p-4 mb-3">
              <p className="text-foreground/90 font-semibold mb-2">
                Diese Website verfolgt eine strikte No-Log- und No-Tracking-Policy.
              </p>
              <p>
                Wir setzen keinerlei Analyse-, Tracking- oder Marketingtools ein. Es werden keine personenbezogenen Daten
                zu Auswertungszwecken erhoben, gespeichert oder an Dritte weitergegeben.
              </p>
            </div>
            <div>
              <p className="text-foreground/80 font-semibold mb-2">Im Einzelnen bedeutet das:</p>
              <ul className="list-none space-y-1 pl-4">
                {[
                  "Kein Google Analytics oder vergleichbare Analysedienste",
                  "Keine Tracking-Cookies oder Fingerprinting",
                  "Keine Weitergabe von Nutzerdaten an Dritte zu Werbezwecken",
                  "Keine Erstellung von Nutzerprofilen",
                  "Keine Auswertung des Nutzerverhaltens",
                  "Keine Social-Media-Tracking-Pixel oder Widgets mit Tracking-Funktion",
                  "Server-Logfiles werden ausschlie\u00DFlich f\u00FCr den technischen Betrieb und die Sicherheit gespeichert und nicht zu Analysezwecken herangezogen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-1 shrink-0">{">"}</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p>
              <span className="text-primary/60">Rechtsgrundlage:</span>{" "}
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am Betrieb einer datenschutzfreundlichen Website)
            </p>
          </ImpressumSection>

          <ImpressumSection id="haftung-inhalte" icon={<Shield className="h-5 w-5" />} title="Haftung f&uuml;r Inhalte" delay={50}>
            <p>
              Als Diensteanbieter sind wir gem&auml;&szlig; &sect; 7 Abs. 1 TMG f&uuml;r eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, &uuml;bermittelte oder gespeicherte fremde Informationen zu &uuml;berwachen
              oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige T&auml;tigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung ist jedoch erst ab dem Zeitpunkt der
              Kenntnis einer konkreten Rechtsverletzung m&ouml;glich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </ImpressumSection>

          <ImpressumSection id="haftung-links" icon={<Globe className="h-5 w-5" />} title="Haftung f&uuml;r Links" delay={50}>
            <p>
              Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte auch keine Gew&auml;hr &uuml;bernehmen. F&uuml;r die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e
              &uuml;berpr&uuml;ft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte
              einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
              derartige Links umgehend entfernen.
            </p>
          </ImpressumSection>

          <ImpressumSection id="urheberrecht" icon={<FileText className="h-5 w-5" />} title="Urheberrecht" delay={50}>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur
              f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p>
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte
              Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden
              Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </ImpressumSection>

          <ImpressumSection id="streitbeilegung" icon={<ServerOff className="h-5 w-5" />} title="Streitbeilegung" delay={50}>
            <p>
              Die Europ&auml;ische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline underline-offset-4"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
            </p>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
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
