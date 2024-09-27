import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import EventPage from "@/components/EventPage"
import { DialogFAQ } from "@/components/dialog-faq"
import logo from "@/public/logo-mision.svg"
import bannerGijeps from "@/public/banner-gi-jeps.jpg"

// Asegúrate de reemplazar 'https://tu-dominio.com' con tu dominio real en producción
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `Eventik | MiSion CEM`,
  openGraph: {
    title: "MiSion CEM",
    description: "Centro de Entrenamiento Ministerial.",
    type: "website",
    images: [
      {
        url: bannerGijeps.src,
        width: 1200,
        height: 630,
        alt: "Centro de Entrenamiento Ministerial.",
      },
    ],
  },
}

// Información del organizador
const organizer = {
  name: "MiSion CEM",
  description: "Centro de Entrenamiento Ministerial.",
  logo: logo,
  whatsAppLink: "https://wa.me/543516344971",
  socialLinks: [
    { icon: GlobeIcon, url: "https://misioninstituto.com" },
    {
      icon: InstagramLogoIcon,
      url: "https://www.instagram.com/mision_instituto",
    },
    { icon: VideoIcon, url: "https://www.youtube.com/@misioncem" },
  ],
}

// Información de los eventos
const events = [
  {
    title: "GI / JEPS 2025: Mi ciudad, su morada",
    banner: bannerGijeps,
    dateTime: {
      startDate: "2025-02-24",
      startTime: "10:00",
      endDate: "2025-03-01",
      endTime: "23:00",
    },
    location: {
      title: "Iglesia El Encuentro",
      subtitle: "Arana 1372, Luis Guillón, Buenos Aires.",
    },
    primaryLink: {
      label: "🇦🇷 Argentinos",
      url: "https://eventik.app/e/gi-jeps-2025",
    },
    secondaryLink: {
      label: "🌍 Internacionales",
      url: "https://mision-la.eventik.app/e/gi-jeps-2025",
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
        <div className="flex flex-wrap justify-center gap-8 pb-8">
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
