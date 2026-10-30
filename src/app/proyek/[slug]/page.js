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
  className="flex flex-wrap items-center gap-2 text-sm mb-6"
>
  <Link href="/" className="text-aksen hover:underline">
    Beranda
  </Link>

  {" / "}

  <Link href="/proyek" className="text-aksen hover:underline">
    Proyek
  </Link>

  {" / "}

  <span className="text-gray-600">
    {item.judul}
  </span>
</nav>
      <h1
        className="mt-4 text-3xl font-bold text-utama md:text-4xl"
      >
        {item.judul}
      </h1>
      <p className="mt-2 text-gray-600">
        {item.kategori} &middot; Dibuat di {item.minggu}
      </p>
      <Image
        src={item.gambar}
        alt={`Tangkapan layar ${item.judul}`}
        width={640}
        height={420}
        loading="eager"
        className="mt-6 h-auto w-full rounded-xl border border-gray-200"
      />
      <p className="mt-6 text-lg">{item.deskripsi}</p>
      <h2 className="mt-8 text-2xl font-bold text-utama">Yang Saya Pelajari</h2>
      <ul className="mt-3 list-disc pl-5">
        {item.fitur.map((f) => (
          <li key={f}>{f}</li>
        ))}
      </ul>
    </main>
  );
}
