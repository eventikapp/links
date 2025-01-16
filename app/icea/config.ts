import { OrganizerConfig } from "@/types/event"
import logo from "@/public/logo-mision.svg"
import bannerSisterhood from "@/public/intimidad-con-el-amado-2025.jpg"

export const ORGANIZER_CONFIG: OrganizerConfig = {
  name: "MiSion CEM",
  description: "Centro de Entrenamiento Ministerial",
  logo: logo,
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
      title: "INTIMIDAD CON EL AMADO 2025",
      banner: bannerSisterhood,
      dateTime: {
        startDate: "2025-07-17",
        startTime: "17:00",
        endDate: "2025-07-19",
        endTime: "22:00",
      },
      location: {
        title: "Centro Costa Salguero",
        subtitle: "Av. Costanera Rafael Obligado 1221, CABA",
      },
      primaryLink: {
        label: "Residentes 🇦🇷 (ARS)",
        url: "https://eventik.app/e/intimidad-con-el-amado-2025/",
      },
      secondaryLink: {
        label: "Resto del 🌍 (USD)",
        url: "https://mision-la.eventik.app/e/intimidad-con-el-amado-2025/",
      },
      publishStatus: "published",
    },
  ],
}
