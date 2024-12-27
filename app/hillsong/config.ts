import { OrganizerConfig } from "@/types/event"
import logo from "@/public/logo-hillsong.jpg"
import bannerSisterhood from "@/public/hillsong-casa-abierta-2025.png"

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
      title: "Casa Abierta 2025",
      banner: bannerSisterhood,
      dateTime: {
        startDate: "2025-02-27",
        startTime: "19:00",
        endDate: "2025-03-01",
        endTime: "22:00",
      },
      location: {
        title: "Teatro Avenida",
        subtitle: "Av. de Mayo 1222, CABA, Argentina",
      },
      primaryLink: {
        label: "🇦🇷 Argentinos",
        url: "https://hillsong.eventik.app/e/casa-abierta-2025/",
      },
      secondaryLink: {
        label: "🌍 Extranjeros",
        url: "https://hillsong-la.eventik.app/e/casa-abierta-2025/",
      },
      publishStatus: "published",
    },
  ],
}
