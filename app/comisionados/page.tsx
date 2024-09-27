import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import EventPage from "@/components/EventPage"
import { DialogFAQ } from "@/components/dialog-faq"
import logo from "@/public/logo-comisionados.png"
import bannerComisionados from "@/public/banner-comisionados.jpg"

// Asegúrate de reemplazar 'https://tu-dominio.com' con tu dominio real en producción
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: `Eventik | Comisionados`,
  openGraph: {
    title: "Comisionados",
    description: "Entrenamientos y eventos evangelisticos",
    type: "website",
    images: [
      {
        url: bannerComisionados.src,
        width: 1200,
        height: 630,
        alt: "Entrenamientos y eventos evangelisticos",
      },
    ],
  },
}

// Información del organizador
const organizer = {
  name: "Comisionados",
  description: "Entrenamientos y eventos evangelisticos",
  logo: logo,
  whatsAppLink: "https://wa.me/5491136979045",
  socialLinks: [
    { icon: GlobeIcon, url: "https://comisionados.org/" },
    {
      icon: InstagramLogoIcon,
      url: "https://www.instagram.com/comisionadosevangelismo/",
    },
    { icon: VideoIcon, url: "https://www.youtube.com/@comisionados_" },
  ],
}

// Información de los eventos
const events = [
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
  },
  // Puedes agregar más eventos aquí si es necesario
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
