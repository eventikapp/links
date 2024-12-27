import { generateMetadata } from "@/components/metadata"
import OrganizerPageWrapper from "@/components/OrganizadorPageWrapper"
import { ORGANIZER_CONFIG } from "./config"

export const metadata = generateMetadata(ORGANIZER_CONFIG)

export default function Tomatulugar2025Page() {
  return <OrganizerPageWrapper config={ORGANIZER_CONFIG} />
}
