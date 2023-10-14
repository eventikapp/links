import Image from "next/image";
import logoEventik from "@/public/logo-eventik.svg"
import bannerTomatulugar from "@/public/banner-tomatulugar.jpg"
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex items-center flex-col mx-auto w-full justify-center mt-8 px-8">
      <div className="w-full flex items-center flex-col gap-8">
        <Image
          src={logoEventik}
          alt="Logo eventikapp"
          width={120}
          height={120}
          priority
        />

        <div className="w-full flex flex-col items-center gap-4">
          <h2 className="text-center font-semibold text-xl">Eventos</h2>

          <Link
            href="/tomatulugar"
            className={
              cn(buttonVariants({ size: "lg" }),
                "w-full max-w-xl text-lg"
              )}
          >
            TOMATULUGAR
          </Link>
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
  );
}
