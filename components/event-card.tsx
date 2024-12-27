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
import { cn } from "@/lib/utils"
import { buttonVariants } from "./ui/button"

const EventLink = ({ label, url }: EventLink) => {
  return (
    <Link
      href={url}
      className={cn(buttonVariants({ variant: "outline" }), "flex-1 shadow-sm")}
      target="_blank"
    >
      {label}
    </Link>
  )
}

export default function EventCard({ event }: { event: Event }) {
  const { cover, title, dateTime, location, links } = event

  return (
    <Card className="w-full overflow-hidden rounded-none border-0 shadow-none  md:rounded-xl md:border">
      <div className="relative h-[220px] w-full overflow-hidden sm:h-[236px]">
        <Image
          src={cover}
          alt="cover event"
          className="absolute size-full"
          style={{ objectFit: "cover" }}
          fill={true}
          sizes="1080px"
          quality={100}
          priority
        />
      </div>

      <CardHeader className="p-4 md:px-6">
        <CardTitle className="text-xl font-bold leading-8">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 p-4 pt-0 md:px-6">
        <div className="flex items-center gap-x-3">
          <div className="flex size-9 items-center justify-center rounded-md bg-neutral-200 p-2">
            <CalendarIcon className="size-5" />
          </div>

          <div>
            <p className="text-sm font-semibold leading-6">{dateTime.title}</p>

            <p className="text-sm leading-5 text-muted-foreground">
              {dateTime.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-x-3">
          <div className="flex size-9 items-center justify-center rounded-md bg-neutral-200 p-2">
            <MapPin className="size-5" />
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
