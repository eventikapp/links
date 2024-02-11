import { StaticImageData } from "next/image"
import { ReactElement } from "react"

import bannerHQELV from "@/public/banner-HQELV.jpg"

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
    terciary?: EventLink
  }
}

export const eventsHQELV: Event[] = [
  {
    id: "1",
    status: "publish",
    anchor: "hqelv",
    cover: bannerHQELV,
    title: "Congreso Hasta que Él venga",
    dateTime: {
      title: "26 de Abril 2024",
      subtitle: "al 28 de Abril 2024",
    },
    location: {
      title: "Fira Reus",
      subtitle: "Av. de Bellissens, 40, 43204 Reus, Tarragona, Spain",
    },
    links: {
      primary: {
        label: "Entradas",
        url: "https://es.eventik.app/e/hqelv24-congreso/",
      },
      secondary: {
        label: "Entradas + Hospedaje",
        url: "https://es.eventik.app/e/hqelv24-congreso/",
       
      },
      terciary: {
        label: "Pre-congreso + Congreso con Hospedaje",
        url: "https://es.eventik.app/e/hqelv-pre-congreso-congreso/",
      },
    },
  },
]
