import type { Metadata } from "next"
import { StatusContent } from "@/components/status-content"

export const metadata: Metadata = {
  title: "Status - darkvoidstudios",
  description: "Service status for darkvoidstudios.",
}

export default function StatusPage() {
  return <StatusContent />
}
