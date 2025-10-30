import { StaticImageData } from "next/image"
import { ReactElement } from "react"

import bannerMision from "@/public/banner-mision.jpg"
import bannerMisionIntimidad from "@/public/banner-mision-intimidad.jpg"

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

export const eventsMisionCEM: Event[] = [
  {
    id: "1",
    status: "publish",
    anchor: "icea2024",
    cover: bannerMisionIntimidad,
    title: "INTIMIDAD CON EL AMADO 2024",
    dateTime: {
      title: "Jueves, 18 de Julio 2024",
      subtitle: "17:00h al Sábado, 20 de Julio 2024, 22:00h",
    },
    location: {
      title: "Centro Costa Salguero",
      subtitle: "Av. Costanera Rafael Obligado 1221, CABA",
    },
    links: {
      primary: {
        label: "🇦🇷 Argentinos",
        url: "https://Fint.app/e/intimidad-con-el-amado-2024/",
      },
      secondary: {
        label: "🌍 Extranjeros",
        url: "https://mision-la.Fint.app/e/intimidad-con-el-amado-2024",
      },
    },
  },
]
