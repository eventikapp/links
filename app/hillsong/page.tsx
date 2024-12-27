"use client" // Add this line at the top of the file

import { useEffect, useState } from "react"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import OrganizerPage from "@/components/OrganizerPage"
import logo from "@/public/logo-hillsong.jpg"
import bannerSisterhood from "@/public/hillsong-casa-abierta-2025.png"
import { StaticImageData } from "next/image"

const organizer = {
  name: "Hillsong",
  description: "Bienvenido a casa",
  logo: logo,
  whatsAppLink: "",
  socialLinks: [
    { icon: GlobeIcon, url: "https://hillsong.com/argentina/" },
    {
      icon: InstagramLogoIcon,
      url: "https://www.instagram.com/hillsongbuenosaires/",
    },
    { icon: VideoIcon, url: "https://www.youtube.com/@HillsongBuenosAires" },
  ],
}

// Update the Event interface
interface Event {
  title: string
  banner: StaticImageData
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
    title: "Casa Abierta 2025",
    banner: bannerSisterhood,
    dateTime: {
      startDate: "2025-02-27",
      startTime: "19:00",
      endDate: "2025-03-01",
      endTime: "22:00",
    },
    location: {
      title: "Teatro Avenida",
      subtitle: "Av. de Mayo 1222, CABA, Argentina",
    },
    primaryLink: {
      label: "🇦🇷 Argentinos",
      url: "https://hillsong.eventik.app/e/casa-abierta-2025/",
    },
    secondaryLink: {
      label: "🌍 Extranjeros",
      url: "https://hillsong-la.eventik.app/e/casa-abierta-2025/",
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
