import Link from "next/link";
import FilterProyek from "@/components/FilterProyek";
import { proyek } from "@/data/proyek";

export const metadata = {
  title: "Proyek",
  description: "Hubungi Salma melalui Instagram",
};

export default function DaftarProyek() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 ">
      <h1 className="text-3xl font-bold text-utama md:text-4xl dark:text-blue-200"> 
        Proyek Saya
      </h1>
      <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
        Kumpulan hasil belajar saya di kelas industri UBIG. Klik kartu untuk melihat detailnya.
      </p>
      <FilterProyek proyek={proyek} />
    </main>
  );
}
