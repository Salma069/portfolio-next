import Image from "next/image";
import Link from "next/link";
import { proyek } from "@/data/proyek";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const item = proyek.find((p) => p.slug === slug);

  if (!item) {
    return { title: "Proyek tidak ditemukan" };
  }
  return { title: item.judul, description: item.deskripsi };
}

export default async function DetailProyek({ params }) {
  const { slug } = await params;
  const item = proyek.find((p) => p.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-sm mb-6 dark:text-gray-300"
      >
        <Link href="/" className="text-aksen hover:underline dark:text-blue-200">
          Beranda
        </Link>

        {" / "}

        <Link href="/proyek" className="text-aksen hover:underline dark:text-blue-200">
          Proyek
        </Link>

        {" / "}

        <span className="text-gray-600 dark:text-gray-400">{item.judul}</span>
      </nav>
      <h1 className="mt-4 text-3xl font-bold text-utama dark:text-blue-200 md:text-4xl">
        {item.judul}
      </h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        {item.kategori} &middot; Dibuat di {item.minggu}
      </p>
      <Image
        src={item.gambar}
        alt={`Tangkapan layar ${item.judul}`}
        width={640}
        height={420}
        loading="eager"
        className="mt-6 h-auto w-full rounded-xl border border-gray-200 dark:border-gray-600 dark:text-gray-300"
      />
      <p className="mt-6 text-lg dark:text-gray-200">{item.deskripsi}</p>
      <h2 className="mt-8 text-2xl font-bold text-utama dark:text-gray-300">Yang Saya Pelajari</h2>
      <ul className="mt-3 list-disc pl-5 dark:text-gray-300">
        {item.fitur.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </main>
  );
}
