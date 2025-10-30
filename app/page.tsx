import Image from "next/image"
import Link from "next/link"
import logoFint from "@/public/logo-Fint.svg"

// Añadir un array de organizadores con sus logos, nombres y URLs
const organizers = [
  { name: "TOMATULUGAR", logo: "/logo-ttl.jpg", url: "/tomatulugar" },
  { name: "MiSion CEM", logo: "/logo-mision.svg", url: "/misioncem" },
  { name: "Hillsong", logo: "/logo-hillsong.jpg", url: "/hillsong" },
  {
    name: "Comisionados",
    logo: "/logo-comisionados.png",
    url: "/comisionados",
  },
]

export default function Page() {
  return (
    <div className="mx-auto mt-8 flex w-full flex-col items-center justify-center px-4 md:px-8">
      <div className="flex w-full flex-col items-center gap-8">
        <Link href="/">
          <Image
            src={logoFint}
            alt="Logo Fintapp"
            width={120}
            height={120}
            priority
          />
        </Link>

        {/* Añadir grilla de logos de organizadores */}
        <div className="grid w-full max-w-2xl grid-cols-2 gap-2 md:grid-cols-4">
          {organizers.map((org) => (
            <Link
              key={org.name}
              href={org.url}
              className="flex flex-col items-center justify-center gap-2"
            >
              <Image
                src={org.logo}
                alt={`Logo de ${org.name}`}
                width={72}
                height={72}
                className="rounded-lg shadow"
              />
              <span className="text-center text-sm font-medium">
                {org.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <p>¿Necesitas ayuda?</p>
          <Link
            href="https://wa.me/5491124058816"
            className="underline"
            target="_blank"
          >
            Escríbenos
          </Link>
        </div>
      </div>
    </div>
  )
}
