"use client" // Add this line at the top of the file

import { useEffect, useState } from "react"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import OrganizerPage from "@/components/OrganizerPage"
import logo from "@/public/logo-mision.svg"
import bannerEvent from "@/public/banner-gi-jeps.jpg"
// Remove this import as it's not being used
// import { formatInTimeZone } from 'date-fns-tz'

const organizer = {
  name: "MiSion CEM",
  description: "Centro de Entrenamiento Ministerial",
  logo: logo,
  whatsAppLink: "https://wa.me/5491130903522",
  socialLinks: [
    { icon: GlobeIcon, url: "https://misioninstituto.com" },
    {
      icon: InstagramLogoIcon,
      url: "https://www.instagram.com/mision_instituto/",
    },
    { icon: VideoIcon, url: "https://www.youtube.com/@MisionCEM" },
  ],
}

// Update the Event interface
interface Event {
  title: string
  banner: any // Replace 'any' with the correct type for your banner
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
  secondaryLink: {
    label: string
    url: string
  }
  publishStatus: "published" | "draft" // Rename 'status' to 'publishStatus'
}

// Define a new interface for processed events
interface ProcessedEvent extends Event {
  status: "upcoming" | "ongoing" | "ended"
  label: string | null
}

const events: Event[] = [
  {
    title: "GI / JEPS 2025: Mi ciudad, su morada",
    banner: bannerEvent,
    dateTime: {
      startDate: "2025-02-24",
      startTime: "10:00",
      endDate: "2025-03-01",
      endTime: "23:00",
    },
    location: {
      title: "Iglesia El Encuentro",
      subtitle: "Arana 1372, Luis Guillón, Buenos Aires.",
    },
    primaryLink: {
      label: "🇦🇷 Argentinos",
      url: "https://eventik.app/gi-jeps-2025",
    },
    secondaryLink: {
      label: "🌍 Internacionales",
      url: "https://mision-la.eventik.app/gi-jeps-2025",
    },
    publishStatus: "published", // New field: 'published' or 'draft'
  },
]

// Add this near the top of your file, after imports
// const DEBUG_SHOW_LABELS = false // Set this to true to always show labels, false to use real event status

function getEventStatus(event: Event): "upcoming" | "ongoing" | "ended" {
  const now = new Date()
  const startDateTime = new Date(
    `${event.dateTime.startDate}T${event.dateTime.startTime}`
  )
  const endDateTime = new Date(
    `${event.dateTime.endDate}T${event.dateTime.endTime}`
  )

  // Remove these logs
  // console.log("Now:", now)
  // console.log("Start:", startDateTime)
  // console.log("End:", endDateTime)

  if (now < startDateTime) {
    return "upcoming"
  } else if (now >= startDateTime && now <= endDateTime) {
    return "ongoing"
  } else {
    return "ended"
  }
}

function getEventLabel(
  status: "upcoming" | "ongoing" | "ended"
): string | null {
  // Remove this debug condition
  // if (DEBUG_SHOW_LABELS) {
  //   return status === "upcoming"
  //     ? "Próximamente"
  //     : status === "ongoing"
  //       ? "En curso"
  //       : "Finalizado"
  // }

  switch (status) {
    case "upcoming":
      return null
    case "ongoing":
      return "En curso"
    case "ended":
      return "Finalizado"
  }
}

export default function HillsongPage() {
  // Remove this line
  // const [showDebugInfo, setShowDebugInfo] = useState(false)

  // Remove this useEffect hook
  // useEffect(() => {
  //   console.log("HillsongPage component mounted")
  //   console.log("Processed events:", JSON.stringify(currentEvents, null, 2))
  // }, [])

  const currentEvents: ProcessedEvent[] = events
    .filter((event) => event.publishStatus === "published")
    .map((event) => {
      const status = getEventStatus(event)
      const label = getEventLabel(status)
      // Remove this log
      // console.log(`Event: ${event.title}, Status: ${status}, Label: ${label}`)
      return {
        ...event,
        status,
        label,
      }
    })

  // Remove this log
  // console.log("Processed events:", currentEvents)

  return <OrganizerPage organizer={organizer} events={currentEvents} />
}
