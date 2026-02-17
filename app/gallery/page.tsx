import type { Metadata } from "next"
import { GalleryContent } from "@/components/gallery-content"

export const metadata: Metadata = {
  title: "Gallery - darkvoidstudios",
  description: "Drone footage, photos and creative media from darkvoidstudios.",
}

export default function GalleryPage() {
  return <GalleryContent />
}
