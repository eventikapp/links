import Image from "next/image"
import Link from "next/link"
import { StaticImageData } from "next/image"
import EventPage from "@/components/EventPage"
import { DialogFAQ } from "@/components/dialog-faq"

interface SocialLink {
  icon: React.ComponentType<{ className?: string }>
  url: string
}

interface Event {
  title: string
  banner: StaticImageData
  dateTime: {
    startDate: string
    startTime: string
    endDate: string
    endTime: string
  }
  location: {
    title: string
    subtitle: string
  }
  primaryLink: {
    label: string
    url: string
  }
  secondaryLink?: {
    label: string
    url: string
  }
}

interface OrganizerPageProps {
  organizer: {
    name: string
    description: string
    logo: StaticImageData
    whatsAppLink: string
    socialLinks: SocialLink[]
  }
  events: Event[]
}

export default function OrganizerPage({
  organizer,
  events,
}: OrganizerPageProps) {
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
              <EventPage {...event} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
