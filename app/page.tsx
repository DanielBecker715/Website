import { Nav } from "@/components/nav"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ThreatSection } from "@/components/threat-section"
import { ProjectsSection } from "@/components/projects-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { MatrixRain } from "@/components/matrix-rain"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <MatrixRain />
      <div className="relative z-10">
        <Nav />
        <HeroSection />
        <AboutSection />
        <ThreatSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  )
}
