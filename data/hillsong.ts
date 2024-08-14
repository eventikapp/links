import { StaticImageData } from "next/image"
import { ReactElement } from "react"

import bannerSisterhood from "@/public/hillsong-sisterhood-conference.png"

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

export const eventsHillsong: Event[] = [
  {
    id: "1",
    status: "publish",
    anchor: "sisterhood",
    cover: bannerSisterhood,
    title: "Sisterhood Conference",
    dateTime: {
      title: "Viernes, 27 de Septiembre 2024",
      subtitle: "19:30 al Sábado, 28 de Septiembre 2024, 22:00",
    },
    location: {
      title: "Teatro Avenida",
      subtitle: "Av. de Mayo 1222, CABA, Argentina",
    },
    links: {
      primary: {
        label: "🇦🇷 Argentinos",
        url: "https://hillsong.eventik.app/e/sisterhood-conference/",
      },
      secondary: {
        label: "🌍 Extranjeros",
        url: "https://hillsong-la.eventik.app/e/sisterhood-conference/",
      },
    },
  },
]
