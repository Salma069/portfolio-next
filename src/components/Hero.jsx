import Image from "next/image";

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
        <h1 className="font-bold text-utama text-4xl md:text-5xl ">Halo saya {nama}! </h1>
        <p className="mt-3 text-lg text-gray-900 sm:text-2xl">{tagline}</p>
      </div>
    </section>
  );
}
