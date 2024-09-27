import type { Metadata } from "next"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import OrganizerPage from "@/components/OrganizerPage"
import logoTomatulugar from "@/public/logo-ttl.jpg"
import bannerEvent from "@/public/banner-tomatulugar.jpg"

// Asegúrate de reemplazar 'https://tu-dominio.com' con tu dominio real en producción
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `Eventik | Tomatulugar`,
  openGraph: {
    title: "Conferencia Tomatulugar 2024: Preparen el Camino",
    description:
      "Sólo Jesús merece brillar. Únete a nosotros en la Conferencia Tomatulugar 2024.",
    type: "website",
    images: [
      {
        url: bannerEvent.src,
        width: 1200,
        height: 630,
        alt: "Conferencia Tomatulugar 2024: Preparen el Camino",
      },
    ],
  },
}

// Información del organizador
const organizer = {
  name: "Tomatulugar",
  description: "Sólo Jesús merece brillar.",
  logo: logoTomatulugar,
  whatsAppLink: "https://wa.me/543516344971",
  socialLinks: [
    { icon: GlobeIcon, url: "https://tomatulugar.com" },
    { icon: InstagramLogoIcon, url: "https://www.instagram.com/tomatulugar" },
    { icon: VideoIcon, url: "https://www.youtube.com/@Tomatulugar" },
  ],
}

// Información de los eventos
const events = [
  {
    title: "Conferencia Tomatulugar 2024: Preparen el Camino",
    banner: bannerEvent,
    dateTime: {
      startDate: "2024-10-03",
      startTime: "13:00",
      endDate: "2024-10-05",
      endTime: "21:00",
    },
    location: {
      title: "Complejo Ferial",
      subtitle: "Ramón Cárcano, Córdoba, Argentina.",
    },
    primaryLink: {
      label: "🇦🇷 Argentinos",
      url: "https://ar.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino",
    },
    secondaryLink: {
      label: "🌍 Internacionales",
      url: "https://la.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino",
    },
  },
]

export default function detailPage() {
  return <OrganizerPage organizer={organizer} events={events} />
}
