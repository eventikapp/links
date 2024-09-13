import type { Metadata } from "next"
import EventPage from "@/components/EventPage"
import logoTomatulugar from "@/public/logo-ttl.jpg"
import bannerTomatulugar from "@/public/banner-tomatulugar.jpg"

export const metadata: Metadata = {
  title: `Eventik | Tomatulugar`,
}

export default function TomatulugarPage() {
  return (
    <EventPage
      logo={logoTomatulugar}
      banner={bannerTomatulugar}
      title="Conferencia Tomatulugar 2024: Preparen el Camino"
      dateTime={{
        title: "Jueves, 3 de Octubre 2024",
        subtitle: "13:00 al Sábado, 5 de Octubre 2024, 21:00",
      }}
      location={{
        title: "Complejo Ferial",
        subtitle: "Ramón Cárcano, Córdoba, Argentina.",
      }}
      whatsAppLink="https://wa.me/543516344971"
      primaryLink={{
        label: "🇦🇷 Argentinos",
        url: "https://ar.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino",
      }}
      secondaryLink={{
        label: "🌍 Internacionales",
        url: "https://la.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino",
      }}
    />
  )
}