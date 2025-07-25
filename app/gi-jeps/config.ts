import { OrganizerConfig } from "@/types/event"
import organizerLogo from "@/public/logo-mision.svg"
import eventCover from "@/public/gi2026eventik-04.jpg"

export const ORGANIZER_CONFIG: OrganizerConfig = {
  name: "MiSion CEM",
  description: "Centro de Entrenamiento Ministerial",
  logo: organizerLogo,
  whatsAppLink: "",
  socialLinks: [
    { type: "globe", url: "https://misioninstituto.com/" },
    {
      type: "instagram",
      url: "https://www.instagram.com/mision_instituto/",
    },
    { type: "video", url: "https://www.youtube.com/@MiSionCEM" },
  ],
  events: [
    {
      title: "GI-JEPS 2026",
      banner: eventCover,
      dateTime: {
        startDate: "2026-02-23",
        startTime: "17:00",
        endDate: "2026-02-28",
        endTime: "22:00",
      },
      location: {
        title: "A definir",
        subtitle: "Próximamente más información",
      },
      primaryLink: {
        label: "Residentes 🇦🇷 (ARS)",
        url: "https://misioneventos.fint.app/eventos/gi-jeps-2026-ar",
      },
      secondaryLink: {
        label: "Resto del 🌎 (USD)",
        url: "https://misioneventos.fint.app/eventos/gi-jeps-2026-ex",
      },
      publishStatus: "published",
    },
  ],
}
