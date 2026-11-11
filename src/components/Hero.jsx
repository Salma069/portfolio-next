import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function Hero({ nama, tagline }) {
  return (
    <section className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
      <Image
        src="/images/fotodiri.jpeg"
        alt={`Foto profil ${nama}`}
        width={180}
        height={180}
        loading="eager"
        className="h-45 w-45 rounded-full border-4 border-blue-200 object-cover"
      />
      <div>
        <h1 className="font-bold text-4xl md:text-5xl text-primary">Halo saya {nama}! </h1>
        <p className="mt-3 text-lg text-muted-foreground sm:text-2xl ">{tagline}</p>
        <div className="mt-5 flex gap-3 md:justify-
">
          <Link href="/proyek" className={buttonVariants({
            size:
              "lg"
          })}>
            Lihat Proyek
          </Link>
          <Link href="/kontak" className={buttonVariants({
            variant:
              "outline", size: "lg"
          })}>
            Hubungi Saya
          </Link>
        </div>
      </div>

    </section>
  );
}
