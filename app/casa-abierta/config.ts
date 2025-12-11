import { OrganizerConfig } from "@/types/event"
import logo from "@/public/logo-hillsong.jpg"
import bannerCasaAbierta from "@/public/hillsong-casa-abierta-2026.jpg"

export const ORGANIZER_CONFIG: OrganizerConfig = {
  name: "Hillsong",
  description: "Bienvenido a casa",
  logo: logo,
  whatsAppLink: "",
  socialLinks: [
    { type: "globe", url: "https://hillsong.com/argentina/" },
    {
      type: "instagram",
      url: "https://www.instagram.com/hillsongbuenosaires/",
    },
    { type: "video", url: "https://www.youtube.com/@HillsongBuenosAires" },
  ],
  events: [
    {
      title: "CASA ABIERTA 26",
      banner: bannerCasaAbierta,
      dateTime: {
        startDate: "2026-02-26",
        startTime: "18:00",
        endDate: "2026-02-28",
        endTime: "22:00",
      },
      location: {
        title: "Teatro Avenida",
        subtitle: "Av. de Mayo 1222, CABA, Argentina",
      },
      primaryLink: {
        label: "Residentes 🇦🇷 (ARS)",
        url: "https://hillsong.fint.app/eventos/casa-abierta-26",
      },
      secondaryLink: {
        label: "Resto del 🌍 (USD)",
        url: "https://hillsong.fint.app/eventos/casa-abierta-2026",
      },
      publishStatus: "published",
    },
  ],
}
