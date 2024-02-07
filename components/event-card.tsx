import type { Event, EventLink } from "@/data/mision"
import { CalendarIcon } from "@radix-ui/react-icons"
import { MapPin } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const EventLink = ({ label, url }: EventLink) => {
  return (
    <Link
      href={url}
      className="flex flex-1 items-center justify-center gap-x-2 rounded bg-neutral-50 px-4 py-2.5 font-medium leading-5 text-neutral-900 shadow-sm ring-1 ring-inset ring-neutral-300 hover:bg-neutral-100"
      target="_blank"
    >
      {label}
    </Link>
  )
}

export default function EventCard({ event }: { event: Event }) {
  const { cover, title, dateTime, location, links } = event

  return (
    <Card className="w-full overflow-hidden rounded-none border-0 shadow-none md:max-w-[480px] md:rounded-xl md:border">
      <Image src={cover} alt="cover event" />

      <CardHeader className="p-4 md:px-6">
        <CardTitle className="text-xl font-bold leading-8">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 p-4 pt-0 md:px-6">
        <div className="flex items-center gap-x-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-200 p-2">
            <CalendarIcon className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-semibold leading-6">{dateTime.title}</p>

            <p className="text-sm leading-5 text-muted-foreground">
              {dateTime.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-neutral-200 p-2">
            <MapPin className="h-5 w-5" />
          </div>

          <div>
            <p className="text-sm font-semibold leading-6">{location.title}</p>

            <p className="text-sm leading-5 text-muted-foreground">
              {location.subtitle}
            </p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex-col space-y-2 border-t border-t-neutral-300 p-4 md:px-6">
        <p className="text-center text-sm text-neutral-700">
          Elige tu inscripción según corresponda:
        </p>

        {links && (
          <div className="flex w-full items-center gap-x-2 py-2">
            {links.primary && (
              <EventLink label={links.primary.label} url={links.primary.url} />
            )}

            {links.secondary && (
              <EventLink
                label={links.secondary.label}
                url={links.secondary.url}
              />
            )}
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
