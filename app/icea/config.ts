import { OrganizerConfig } from "@/types/event"
import organizerLogo from "@/public/logo-mision.svg"
import eventBanner from "@/public/banner-icea-26.jpg"

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
      title: "INTIMIDAD CON EL AMADO 2026",
      banner: eventBanner,
      dateTime: {
        startDate: "2026-08-13",
        startTime: "18:00",
        endDate: "2026-08-15",
        endTime: "23:00",
      },
      location: {
        title: "Centro de Convenciones Buenos Aires",
        subtitle: "Av. Pres. Figueroa Alcorta 2099, Cdad. Autónoma de Buenos Aires",
      },
      primaryLink: {
        label: "Residentes 🇦🇷 (ARS)",
        url: "https://misioneventos.fint.app/eventos/intimidad-con-el-amado-2026-ar",
      },
      secondaryLink: {
        label: "Resto del 🌎 (USD)",
        url: "https://misioneventos.fint.app/eventos/intimidad-con-el-amado-2026-ex",
      },
      publishStatus: "published",
    },
  ],
}
