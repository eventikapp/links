import { Event } from "@/types/event"

export function getEventStatus(event: Event): "upcoming" | "ongoing" | "ended" {
  const now = new Date()
  const startDateTime = new Date(
    `${event.dateTime.startDate}T${event.dateTime.startTime}`
  )
  const endDateTime = new Date(
    `${event.dateTime.endDate}T${event.dateTime.endTime}`
  )

  if (now < startDateTime) return "upcoming"
  if (now >= startDateTime && now <= endDateTime) return "ongoing"
  return "ended"
}

export function getEventLabel(
  status: "upcoming" | "ongoing" | "ended"
): string | null {
  switch (status) {
    case "upcoming":
      return null
    case "ongoing":
      return "En curso"
    case "ended":
      return "Finalizado"
  }
}
