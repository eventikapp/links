import { StaticImageData } from "next/image"
import { ReactElement } from "react"

import bannerMision from "@/public/banner-mision.jpg"
import bannerMisionIntimidad from "@/public/banner-mision-intimidad.jpg"

export interface Event {
  id: string,
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
    primary?: {
      url: string
      label: string | ReactElement
    }
    secondary?: {
      url: string
      label: string | ReactElement
    }
  }
}

export const eventsMisionCEM: Event[] = [
  {
    id: "1",
    status: "draft",
    anchor: "icea2024",
    cover: bannerMisionIntimidad,
    title: "INTIMIDAD CON EL AMADO 2024",
    dateTime: {
      title: "Jueves, 18 de Julio 2024",
      subtitle: "17:00h al Sábado, 20 de Enero 2024, 22:00h",
    },
    location: {
      title: "Centro Costa Salguero",
      subtitle: "Av. Costanera Rafael Obligado 1221, CABA",
    },
    links: {
      primary: {
        label: "🇦🇷 Argentinos",
        url: "https://eventik.app/e/intimidad-con-el-amado-2024/",
      },
      secondary: {
        label: "🌍 Internacionales",
        url: "https://mision-la.eventik.app/e/intimidad-con-el-amado-2024",
      },
    },
  },
  {
    id: "2",
    status: "publish",
    anchor: "gi-jeps2024",
    cover: bannerMision,
    title: "GI / JEPS 2024 – EN LAS CÁMARAS DEL REY",
    dateTime: {
      title: "Lunes, 19 de Febrero 2024",
      subtitle: "10:00h al Sábado, 24 de Febrero 2024, 23:00h",
    },
    location: {
      title: "Iglesia El Encuentro",
      subtitle: "Arana 1372, Luis Guillón, Buenos Aires.",
    },
    links: {
      primary: {
        label: "🇦🇷 Argentinos",
        url: "https://eventik.app/e/gi-jeps-2024-en-las-camaras-del-rey/",
      },
      secondary: {
        label: "🌍 Internacionales",
        url: "https://mision-la.eventik.app/e/gi-jeps-2024-en-las-camaras-del-rey",
      },
    },
  },
]
