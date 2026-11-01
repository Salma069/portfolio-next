import Image from "next/image";
import Link from "next/link";

export default function ProyekCard({ proyek }) {
  return (
  <main className="mx-auto w-full max-w-7xl px-4 py-8">            <Link
      href={`/proyek/${proyek.slug}`}
      className="block overflow-hidden rounded-xl border border-gray-200 dark:border-gray-900 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md"
    >
      <Image
        src={proyek.gambar}
        alt={`Tangkapan layar ${proyek.judul}`}
        width={640}
        height={420}
        loading="eager"
        className="h-auto w-full"
      />
      <div className="p-5">
        <span className="rounded-full dark:bg-blue-100 px-4 py-1 text-xs font-semibold text-utama dark:text-blue-900">
          {proyek.kategori}
        </span>
        <h3 className="mt-3 text-lg font-semibold text-utama dark:text-gray-300">{proyek.judul}</h3>
        <p className="mt-1 text-sm text-gray-700 dark:text-gray-200">{proyek.deskripsi}</p>
      </div>
    </Link>

    </main>
  );
}
