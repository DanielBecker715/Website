import type { Metadata } from "next"
import { PrivacyContent } from "@/components/privacy-content"

export const metadata: Metadata = {
  title: "Privacy Policy - darkvoidstudios",
  description: "Privacy Policy for darkvoidstudios - Into the Void",
}

export default function PrivacyPage() {
  return <PrivacyContent />
}
