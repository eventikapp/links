import type { Metadata } from "next"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import OrganizerPage from "@/components/OrganizerPage"
import logo from "@/public/logo-mision.svg"
import bannerEvent from "@/public/banner-gi-jeps.jpg"

// Asegúrate de reemplazar 'https://tu-dominio.com' con tu dominio real en producción
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `Eventik | MiSion CEM`,
  openGraph: {
    title: "MiSion CEM",
    description: "Centro de Entrenamiento Ministerial.",
    type: "website",
    images: [
      {
        url: bannerEvent.src,
        width: 1200,
        height: 630,
        alt: "Centro de Entrenamiento Ministerial.",
      },
    ],
  },
}
const organizer = {
  name: "MiSion CEM",
  description: "Centro de Entrenamiento Ministerial",
  logo: logo,
  whatsAppLink: "https://wa.me/543516344971",
  socialLinks: [
    { icon: GlobeIcon, url: "https://misioninstituto.com" },
    {
      icon: InstagramLogoIcon,
      url: "https://www.instagram.com/mision_instituto/",
    },
    { icon: VideoIcon, url: "https://www.youtube.com/@MisionCEM" },
  ],
}

const events = [
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
      url: "https://eventik.app/e/gi-jeps-2025",
    },
    secondaryLink: {
      label: "🌍 Internacionales",
      url: "https://mision-la.eventik.app/e/gi-jeps-2025",
    },
  },
]

export default function detailPage() {
  return <OrganizerPage organizer={organizer} events={events} />
}
