import EventCard from "@/components/event-card"
import { eventsHQELV } from "@/data/hqelv"
import { cn } from "@/lib/utils"

export default function Page() {
  // get quantity published events
  const quantityPublishEvents = eventsHQELV.filter(
    (event) => event.status === "publish"
  ).length

  return (
    <main className="flex items-center justify-center md:px-8">
      <section className="w-full max-w-[520px]">
        <div
          className={cn("grid grid-cols-1 gap-6", {
            "grid-cols-1 md:grid-cols-2": quantityPublishEvents > 1,
          })}
        >
          {eventsHQELV
            .filter((event) => event.status === "publish")
            .map((event) => {
              return (
                <div key={event.id} id={`${event.anchor}`}>
                  <EventCard event={event} />
                </div>
              )
            })}
        </div>
      </section>
    </main>
  )
}
