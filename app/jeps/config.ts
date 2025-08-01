import { OrganizerConfig } from "@/types/event"
import logo from "@/public/logo-mision.svg"
import bannerEvent from "@/public/jeps-2025.jpg"

export const ORGANIZER_CONFIG: OrganizerConfig = {
  name: "MiSion CEM",
  description: "Centro de Entrenamiento Ministerial",
  logo: logo,
  whatsAppLink: "https://wa.me/5491130903522",
  socialLinks: [
    { type: "globe", url: "https://misioninstituto.com" },
    {
      type: "instagram",
      url: "https://www.instagram.com/mision_instituto/",
    },
    { type: "video", url: "https://www.youtube.com/@MisionCEM" },
  ],
  events: [
    {
      title: "Conferencia Profética: Jesús el Placer Superior 2025",
      banner: bannerEvent,
      dateTime: {
        startDate: "2025-03-01",
        startTime: "09:00",
        endDate: "2025-03-01",
        endTime: "18:00",
      },
      location: {
        title: "Iglesia El Encuentro",
        subtitle: "Arana 1372, Luis Guillón, Buenos Aires.",
      },
      primaryLink: {
        label: "Residentes 🇦🇷 (ARS)",
        url: "https://eventik.app/e/jeps-2025",
      },
      secondaryLink: {
        label: "Resto del 🌍 (USD)",
        url: "https://mision-la.eventik.app/e/jeps-2025",
      },
      publishStatus: "published",
    },
  ],
}
