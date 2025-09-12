import { OrganizerConfig } from "@/types/event"
import logo from "@/public/logo-ttl.jpg"
import bannerTomatulugar from "@/public/banner-ttl-2025.jpg"

export const ORGANIZER_CONFIG: OrganizerConfig = {
  name: "TOMATULUGAR",
  description: "Sólo Jesús merece brillar.",
  logo: logo,
  whatsAppLink: "https://wa.me/543516344971",
  socialLinks: [
    { type: "globe", url: "https://tomatulugar.com" },
    { type: "instagram", url: "https://www.instagram.com/tomatulugar" },
    { type: "video", url: "https://www.youtube.com/@Tomatulugar" },
  ],
  events: [
    {
      title: "CONFERENCIA TOMATULUGAR 2025",
      banner: bannerTomatulugar,
      dateTime: {
        startDate: "2025-10-09",
        startTime: "18:00",
        endDate: "2025-10-11",
        endTime: "22:00",
      },
      location: {
        title: "Complejo Ferial",
        subtitle: "Ramón Cárcano, Córdoba, Argentina.",
      },
      primaryLink: {
        label: "🇦🇷 Argentinos",
        url: "https://tomatulugar.fint.app/eventos/conferencia-ttl-2025-ar",
      },
      secondaryLink: {
        label: "🌍 Internacionales",
        url: "https://tomatulugar.fint.app/eventos/conferencia-ttl-2025-ex/",
      },
      publishStatus: "published",
    },
  ],
}
