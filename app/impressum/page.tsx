import type { Metadata } from "next"
import { ImpressumContent } from "@/components/impressum-content"

export const metadata: Metadata = {
  title: "Impressum - darkvoidstudios",
  description: "Impressum (Legal Notice) for darkvoidstudios - Into the Void",
}

export default function ImpressumPage() {
  return <ImpressumContent />
}
