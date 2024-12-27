import { OrganizerConfig } from "@/types/event"
import logo from "@/public/logo-comisionados.png"
import bannerComisionados from "@/public/banner-comisionados.jpg"

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
    { type: "video", url: "https://www.youtube.com/@comisionados_" },
  ],
  events: [
    {
      title: "Entrenamiento Evangelístico 2024",
      banner: bannerComisionados,
      dateTime: {
        startDate: "2024-06-15",
        startTime: "09:00",
        endDate: "2024-06-20",
        endTime: "18:00",
      },
      location: {
        title: "Centro de Convenciones",
        subtitle: "Av. Principal 123, Buenos Aires, Argentina",
      },
      primaryLink: {
        label: "🇦🇷 Argentinos",
        url: "https://comisionados.eventik.app/e/conferencia-comisionados/",
      },
      secondaryLink: {
        label: "🌍 Extranjeros",
        url: "https://comisionados-la.eventik.app/e/conferencia-comisionados/",
      },
      publishStatus: "published",
    },
  ],
}
