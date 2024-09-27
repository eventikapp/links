import type { Metadata } from "next"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import OrganizerPage from "@/components/OrganizerPage"
import logo from "@/public/logo-hillsong.jpg"
import bannerSisterhood from "@/public/hillsong-sisterhood-conference.png"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `Eventik | Hillsong`,
  openGraph: {
    title: "Hillsong",
    description: "Una Iglesia Global",
    type: "website",
    images: [
      {
        url: bannerSisterhood.src,
        width: 1200,
        height: 630,
        alt: "Una Iglesia Global",
      },
    ],
  },
}

const organizer = {
  name: "Hillsong",
  description: "Bienvenido a casa",
  logo: logo,
  whatsAppLink: "https://wa.me/5491136979045",
  socialLinks: [
    { icon: GlobeIcon, url: "https://hillsong.com/argentina/" },
    {
      icon: InstagramLogoIcon,
      url: "https://www.instagram.com/hillsongbuenosaires/",
    },
    { icon: VideoIcon, url: "https://www.youtube.com/@HillsongBuenosAires" },
  ],
}

const events = [
  {
    title: "Sisterhood Conference",
    banner: bannerSisterhood,
    dateTime: {
      startDate: "2024-09-27",
      startTime: "19:30",
      endDate: "2024-09-28",
      endTime: "22:00",
    },
    location: {
      title: "Teatro Avenida",
      subtitle: "Av. de Mayo 1222, CABA, Argentina",
    },
    primaryLink: {
      label: "🇦🇷 Argentinos",
      url: "https://hillsong.eventik.app/e/sisterhood-conference/",
    },
    secondaryLink: {
      label: "🌍 Extranjeros",
      url: "https://hillsong-la.eventik.app/e/sisterhood-conference/",
    },
  },
]

export default function HillsongPage() {
  return <OrganizerPage organizer={organizer} events={events} />
}
