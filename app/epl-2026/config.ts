import { OrganizerConfig } from "@/types/event"
import logo from "@/public/logo-ccvida.png"
import bannerSisterhood from "@/public/banner-epl-2026.jpg"

export const ORGANIZER_CONFIG: OrganizerConfig = {
  name: "Centro Cristiano Vida",
  description: "¡La iglesia sos vos!",
  logo: logo,
  whatsAppLink: "",
  socialLinks: [
    { type: "globe", url: "https://ccvidaargentina.org/site/" },
    {
      type: "instagram",
      url: "https://www.instagram.com/ccvidaargentina",
    },
    { type: "video", url: "https://www.youtube.com/user/buscamosmas" },
  ],
  events: [
    {
      title: "EPL 2026 - Escuela de Pastores y Lideres",
      banner: bannerSisterhood,
      dateTime: {
        startDate: "2026-02-02",
        startTime: "19:00",
        endDate: "2026-02-05",
        endTime: "21:00",
      },
      location: {
        title: "Centro Cristiano Vida",
        subtitle: "Don Bosco 999, San Isidro, Buenos Aires, Argentina.",
      },
      primaryLink: {
        label: "Residentes 🇦🇷 (ARS)",
        url: "https://ccvida.fint.app/eventos/epl-2026-arg",
      },
      secondaryLink: {
        label: "Resto del 🌍 (USD)",
        url: "https://ccvida.fint.app/eventos/epl-2026-ext",
      },
      publishStatus: "published",
    },
  ],
}
