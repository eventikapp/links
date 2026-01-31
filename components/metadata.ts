import { Metadata } from "next"
import { OrganizerConfig } from "@/types/event"
import { formatDateRange } from "@/utils/event-utils"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

function buildEventDescription(config: OrganizerConfig): string {
  const event = config.events[0]
  if (!event) return config.description
  const { firstLine, secondLine } = formatDateRange(
    event.dateTime.startDate,
    event.dateTime.startTime,
    event.dateTime.endDate,
    event.dateTime.endTime
  )
  return `${firstLine} ${secondLine} · ${event.location.title}`
}

export function generateMetadata(config: OrganizerConfig): Metadata {
  const event = config.events[0]
  const eventTitle = event?.title ?? config.name
  const description = buildEventDescription(config)

  return {
    metadataBase: new URL(baseUrl),
    title: eventTitle,
    description,
    openGraph: {
      title: eventTitle,
      description,
      type: "website",
      images: [
        {
          url: event?.banner?.src || config.logo.src,
          width: 1200,
          height: 630,
          alt: eventTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  }
}
