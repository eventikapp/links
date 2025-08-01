import { OrganizerConfig } from "@/types/event"
import logo from "@/public/logo-hillsong.jpg"
import bannerSisterhood from "@/public/hillsong-sisterhood-2025.jpg"

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
      title: "SISTERHOOD CONFERENCE 25",
      banner: bannerSisterhood,
      dateTime: {
        startDate: "2025-09-26",
        startTime: "18:00",
        endDate: "2025-09-27",
        endTime: "22:00",
      },
      location: {
        title: "Teatro Avenida",
        subtitle: "Av. de Mayo 1222, CABA, Argentina",
      },
      primaryLink: {
        label: "Residentes 🇦🇷 (ARS)",
        url: "https://hillsong.fint.app/eventos/sisterhood-conference-25",
      },
      secondaryLink: {
        label: "Resto del 🌍 (USD)",
        url: "https://hillsong.fint.app/eventos/sisterhood-conference-2025",
      },
      publishStatus: "published",
    },
  ],
}
