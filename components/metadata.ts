import { Metadata } from "next"
import { OrganizerConfig } from "@/types/event"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export function generateMetadata(config: OrganizerConfig): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: `Fint | ${config.name}`,
    description: config.description,
    openGraph: {
      title: config.name,
      description: config.description,
      type: "website",
      images: [
        {
          url: config.events[0]?.banner?.src || config.logo.src,
          width: 1200,
          height: 630,
          alt: config.events[0]?.title || config.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  }
}
