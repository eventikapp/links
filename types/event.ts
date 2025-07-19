import { StaticImageData } from "next/image"
import { ComponentType } from "react"

export interface Event {
  title: string
  banner?: StaticImageData
  dateTime: {
    startDate: string
    startTime: string
    endDate: string
    endTime: string
  }
  location: {
    title: string
    subtitle: string
  }
  primaryLink: {
    label: string
    url: string
  }
  secondaryLink?: {
    label: string
    url: string
  }
  publishStatus: "published" | "draft"
}

export interface ProcessedEvent extends Event {
  status: "upcoming" | "ongoing" | "ended"
  label: string | null
}

export interface SocialLink {
  type: "globe" | "instagram" | "video"
  url: string
}

export interface OrganizerConfig {
  name: string
  description: string
  logo: StaticImageData
  whatsAppLink: string
  socialLinks: SocialLink[]
  events: Event[]
}
