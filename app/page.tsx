import Image from "next/image";
import logoEventik from "@/public/logo-eventik.svg"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-8 px-8">
      <div className="w-full flex items-center flex-col gap-16">
        <Image
          src={logoEventik}
          alt="Logo eventikapp"
          width={140}
          height={140}
        />

        <div className="w-full max-w-xl flex flex-col gap-4">
          <h2 className="text-center font-semibold text-xl">Elige tu inscripción según corresponda:</h2>

          <Link
            href="https://ar.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "text-lg transition-all duration-300 ")}
            target="_blank"
          >
            🇦🇷 Argentinos
          </Link>

          <Link
            href="https://la.eventik.app/e/conferencia-tomatulugar-2024-preparen-el-camino?v=35357b9c8fe4"
            className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "text-lg transition-all duration-300")}
            target="_blank"
          >
            🌍 Internacionales
          </Link>
        </div>

        <div className="flex items-center gap-2">
          <p>¿Necesitas ayuda?</p>
          <Link
            href="https://wa.me/543516344971"
            className="underline"
            target="_blank"
          >
            Escríbenos
          </Link>
        </div>
      </div>
    </div>
  );
}
