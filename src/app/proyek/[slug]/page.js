import Image from "next/image";
import Link from "next/link";
import {proyek} from "@/data/proyek";
import {notFound} from "next/navigation"

export async function generateMetadata({params}) {
    const {slug} = await params;
    const item = proyek.find((p) => p.slug === slug)

    if (!item) {
        return {title: "Proyek tidak ditemukan"}
    }
    return { title: item.judul, description: item.deskripsi }
}

export default async function DetailProyek({params}) {
    const {slug} = await params;
    const item = proyek.find((p) => p.slug === slug);
    if (!item) {
    notFound();
}

    return (
        <main>
            <Link href="/proyek " className="text-sm font-semibold text-aksen hover:underline">
            &larr; Kembali ke daftar proyek
            </Link>
            <h1> {item.judul} </h1>
            <p>
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
            <p className="mt-6 text-lg"> {item.deskripsi} </p>
            <h2 className="mt-8 text-2xl font-bold text-utama"> 
                Yang saya pelajari
            </h2>
            <ul className="mt-3 list-disc pl-5">
                    {item.fitur.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
            </ul>
        </main>
    )
}