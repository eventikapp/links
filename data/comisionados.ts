import { StaticImageData } from "next/image"
import { ReactElement } from "react"

import bannerComisionados from "@/public/banner-comisionados.jpg"

export interface EventLink {
  url: string
  label: string | ReactElement
}

export interface Event {
  id: string
  status: string
  anchor: string
  cover: StaticImageData
  title: string
  dateTime: {
    title: string
    subtitle: string
  }
  location: {
    title: string
    subtitle: string
  }
  links?: {
    primary?: EventLink
    secondary?: EventLink
  }
}

export const eventsComisionados: Event[] = [
  {
    id: "1",
    status: "publish",
    anchor: "conf2024",
    cover: bannerComisionados,
    title: "CONFERENCIA COMISIONADOS – Fuego para una nueva generación",
    dateTime: {
      title: "13 de Junio, 2024",
      subtitle: "15:00 al 15 de Junio, 2024, 23:00",
    },
    location: {
      title: "Auditorio Rios de Vida",
      subtitle: "Dorrego 485, Quilmes, Buenos Aires.",
    },
    links: {
      primary: {
        label: "🇦🇷 Argentinos",
        url: "https://comisionados.eventik.app/e/conferencia-comisionados/",
      },
      secondary: {
        label: "🌍 Extranjeros",
        url: "https://comisionados-la.eventik.app/e/conferencia-comisionados/",
      },
    },
  },
]
