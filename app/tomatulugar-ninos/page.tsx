import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import EventPage from "@/components/EventPage"
import { DialogFAQ } from "@/components/dialog-faq"
import logoTomatulugar from "@/public/logo-ttl.jpg"
import bannerTomatulugar from "@/public/banner-tomatulugar.jpg"

// Asegúrate de reemplazar 'https://tu-dominio.com' con tu dominio real en producción
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `Eventik | Tomatulugar`,
  openGraph: {
    title: "Conferencia Tomatulugar 2024: Preparen el Camino",
    description:
      "Sólo Jesús merece brillar. Únete a nosotros en la Conferencia Tomatulugar 2024.",
    type: "website",
    images: [
      {
        url: bannerTomatulugar.src,
        width: 1200,
        height: 630,
        alt: "Conferencia Tomatulugar 2024: Preparen el Camino",
      },
    ],
  },
}

// Información del organizador
const organizer = {
  name: "Tomatulugar",
  description: "Sólo Jesús merece brillar.",
  logo: logoTomatulugar,
  whatsAppLink: "https://wa.me/543516344971",
  socialLinks: [
    { icon: GlobeIcon, url: "https://tomatulugar.com" },
    { icon: InstagramLogoIcon, url: "https://www.instagram.com/tomatulugar" },
    { icon: VideoIcon, url: "https://www.youtube.com/@Tomatulugar" },
  ],
}

// Información de los eventos
const events = [
  {
    title: "Cuidado de niños › Conferencia TOMATULUGAR 2024",
    banner: bannerTomatulugar,
    dateTime: {
      startDate: "2024-10-03",
      startTime: "13:00",
      endDate: "2024-10-05",
      endTime: "21:00",
    },
    location: {
      title: "Complejo Ferial",
      subtitle: "Ramón Cárcano, Córdoba, Argentina.",
    },
    primaryLink: {
      label: "🇦🇷 Argentinos",
      url: "https://ar.eventik.app/e/cuidado-de-ninos-conferencia-tomatulugar-2024",
    },
    secondaryLink: {
      label: "🌍 Internacionales",
      url: "https://la.eventik.app/e/cuidado-de-ninos-conferencia-tomatulugar-2024",
    },
  },
]

export default function OrganizerPage() {
  return (
    <>
      <header className="m-6 flex items-center justify-center md:mt-12">
        <div className="relative flex w-full flex-col items-center justify-center gap-y-4">
          <nav>
            <Image
              src={organizer.logo}
              alt={`Logo ${organizer.name}`}
              width={72}
              height={72}
              priority
              className="inset-0 rounded-lg shadow"
            />
            <div className="absolute -top-0 right-0">
              <DialogFAQ linkWhatsApp={organizer.whatsAppLink} />
            </div>
          </nav>

          <section className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold leading-7">{organizer.name}</h2>
            <p className="leading-5 text-muted-foreground">
              {organizer.description}
            </p>
          </section>

          <ol className="flex gap-x-4">
            {organizer.socialLinks.map((link, index) => (
              <li key={index}>
                <Link href={link.url} target="_blank">
                  <link.icon className="h-5 w-5" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </header>
      <div className="m-8 mx-auto overflow-auto">
        <div className="flex w-full snap-x snap-mandatory scroll-pl-6 gap-8 overflow-x-auto pb-8">
          {events.map((event, index) => (
            <div key={index} className="shrink-0 snap-start">
              <EventPage
                banner={event.banner}
                title={event.title}
                dateTime={event.dateTime}
                location={event.location}
                primaryLink={event.primaryLink}
                secondaryLink={event.secondaryLink}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
