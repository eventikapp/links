import { OrganizerConfig } from "@/types/event"
import logo from "@/public/logo-comisionados.png"
import bannerComisionados from "@/public/conferencia-comisionados-fuego-25.jpg"

export const ORGANIZER_CONFIG: OrganizerConfig = {
  name: "Comisionados",
  description: "Entrenamientos y eventos evangelisticos",
  logo: logo,
  whatsAppLink: "https://wa.me/5491136979045",
  socialLinks: [
    { type: "globe", url: "https://comisionados.org/" },
    {
      type: "instagram",
      url: "https://www.instagram.com/comisionadosevangelismo/",
    },
    { type: "video", url: "https://www.youtube.com/@comisionadosevangelismo" },
  ],
  events: [
    {
      title: "Conferencia Comisionados – Fuego 25",
      banner: bannerComisionados,
      dateTime: {
        startDate: "2025-06-19",
        startTime: "18:00",
        endDate: "2025-06-21",
        endTime: "22:00",
      },
      location: {
        title: "Auditorio Rios de Vida",
        subtitle: "Dorrego 485, Quilmes, Buenos Aires.",
      },
      primaryLink: {
        label: "Residentes 🇦🇷 (ARS)",
        url: "https://comisionados.eventik.app/conferencia-comisionados-fuego-25/",
      },
      secondaryLink: {
        label: "Resto del 🌍 (USD)",
        url: "https://comisionados-la.eventik.app/e/conferencia-comisionados-fuego-25/",
      },
      publishStatus: "published",
    },
  ],
}
