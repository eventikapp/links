"use client"

import { OrganizerConfig } from "@/types/event"
import { getEventLabel, getEventStatus } from "@/utils/event-utils"
import { GlobeIcon, InstagramLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import EventPage from "@/components/EventPage"

const ICON_MAP = {
  globe: GlobeIcon,
  instagram: InstagramLogoIcon,
  video: VideoIcon,
}

interface OrganizerPageWrapperProps {
  config: OrganizerConfig
}

export default function OrganizerPageWrapper({
  config,
}: OrganizerPageWrapperProps) {
  const currentEvents = config.events
    .filter((event) => event.publishStatus === "published")
    .map((event) => {
      const status = getEventStatus(event)
      const label = getEventLabel(status)
      return { ...event, status, label }
    })

  const socialLinksWithIcons = config.socialLinks.map((link) => ({
    ...link,
    icon: ICON_MAP[link.type],
  }))

  return (
    <>
      <header className="m-6 flex items-center justify-center md:mt-12">
        <div className="relative flex w-full flex-col items-center justify-center gap-y-4">
          <nav>
            <Image
              src={config.logo}
              alt={`Logo ${config.name}`}
              width={72}
              height={72}
              priority
              className="inset-0 rounded-lg shadow"
            />
          </nav>

          <section className="flex flex-col items-center justify-center">
            <h2 className="text-lg font-bold leading-7">{config.name}</h2>
            <p className="leading-5 text-muted-foreground">
              {config.description}
            </p>
          </section>

          <ol className="flex gap-x-4">
            {socialLinksWithIcons.map((link, index) => (
              <li key={index}>
                <Link href={link.url} target="_blank" rel="noopener noreferrer">
                  <link.icon className="size-5" />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </header>
      <div className="m-8 mx-auto overflow-auto">
        <div className="flex flex-wrap justify-center gap-8 pb-8">
          {currentEvents.map((event, index) => (
            <div key={index} className="relative shrink-0 snap-start">
              <EventPage {...event} />
              {event.label && (
                <div className="absolute right-2 top-2 rounded bg-black/70 px-2 py-1 text-white">
                  {event.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
