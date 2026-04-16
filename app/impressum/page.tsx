import type { Metadata } from "next"
import { ImpressumContent } from "@/components/impressum-content"

export const metadata: Metadata = {
  title: "Impressum - darkvoidstudios",
  description: "Impressum für darkvoidstudios - Angaben gemäß § 5 TMG",
}

export default function ImpressumPage() {
  return <ImpressumContent />
}
