import { OrganizerConfig } from "@/types/event"
import logoEventik from "@/public/logo-eventik.svg"
import bannerEmuba from "@/public/banner-aviva.jpg"

export const ORGANIZER_CONFIG: OrganizerConfig = {
  name: "EMUBA",
  description: "Escuela de Música de Buenos Aires",
  logo: logoEventik,
  whatsAppLink: "https://wa.me/5491122602647",
  socialLinks: [],
  events: [
    {
      title: "Aviva el Fuego",
      banner: bannerEmuba,
      dateTime: {
        startDate: "2024-04-01",
        startTime: "19:00",
        endDate: "2024-04-01",
        endTime: "22:00",
      },
      location: {
        title: "EMUBA",
        subtitle: "Buenos Aires, Argentina",
      },
      primaryLink: {
        label: "🇦🇷 Argentinos",
        url: "https://emuba.eventik.app/evento/aviva-el-fuego/",
      },
      publishStatus: "published",
    },
  ],
}
