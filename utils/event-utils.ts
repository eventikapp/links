import { Event } from "@/types/event"

export interface DateRange {
  firstLine: string
  secondLine: string
}

export function formatDateRange(
  startDate: string,
  startTime: string,
  endDate: string,
  endTime: string
): DateRange {
  const start = new Date(`${startDate}T${startTime}`)
  const end = new Date(`${endDate}T${endTime}`)

  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: "2-digit",
    minute: "2-digit",
  }

  if (startDate === endDate) {
    const formattedDate = start.toLocaleDateString("es-ES", {
      ...options,
      year: undefined,
    })
    const year = start.getFullYear()
    return {
      firstLine: `${formattedDate} ${year}`,
      secondLine: `${start.toLocaleTimeString("es-ES", timeOptions)} - ${end.toLocaleTimeString("es-ES", timeOptions)}`,
    }
  }
  const formattedStartDate = start.toLocaleDateString("es-ES", {
    ...options,
    year: undefined,
  })
  const formattedEndDate = end.toLocaleDateString("es-ES", {
    ...options,
    year: undefined,
  })
  const startYear = start.getFullYear()
  const endYear = end.getFullYear()
  return {
    firstLine: `${formattedStartDate} ${startYear} ${start.toLocaleTimeString("es-ES", timeOptions)}`,
    secondLine: `al ${formattedEndDate} ${endYear} ${end.toLocaleTimeString("es-ES", timeOptions)}`,
  }
}

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
