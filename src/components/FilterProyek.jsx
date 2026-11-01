"use client";

import ProyekCard from "@/components/ProyekCard";
import { proyek } from "@/data/proyek";
import { useState } from "react";

const daftarKategori = ["Semua", "HTML", "CSS", "JavaScript", "C++"];
const tombolBiasa =
  "rounded-full border border-utama px-4 py-1 text-sm font-semibold text-utama dark:text-blue-300 hover:bg-utama hover:text-white dark:hover:bg-blue-800 dark:hover:text-white";
const tombolAktif =
  "rounded-full border border-amber-200 bg-red-800 px-4 py-1 text-sm font-semibold text-white";

export default function FilterProyek({ proyek }) {
  const [kategori, setKategori] = useState("Semua");
  const [kata, setKata] = useState("");
  const kataKecil = kata.toLowerCase();
  const hasil = proyek.filter((p) => {
    const cocokKategori = kategori === "Semua" || p.kategori === kategori;
    const cocokJudul = p.judul.toLowerCase().includes(kataKecil);
    const cocokDeskripsi = p.deskripsi.toLowerCase().includes(kataKecil);
    const cocokKata = cocokJudul || cocokDeskripsi;
    return cocokKategori && cocokKata;
  });

  return (
    <div className="mt-8 w-full">
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((k) => (
          <button
            key={k}
            type="button"
            onClick={() => setKategori(k)}
            className={kategori === k ? tombolAktif : tombolBiasa}
          >
            {k}
          </button>
        ))}
      </div>
      <div>
        <label>Cari Proyek:</label>
        <input
          type="text"
          id="cari"
          value={kata}
          onChange={(e) => setKata(e.target.value)}
          placeholder="Contoh: kalkulator"
          className="mt-3 ml-1 w-full rounded-lg border border-gray-300 bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300 p-2 md:w-80"
        />
        {kata !== "" && (
          <button
            type="button"
            onClick={() => setKata("")}
            className="mt-2 text-sm font-semibold text-aksen dark:text-red-500 hover:underline"
          >
            Hapus Pencarian
          </button>
        )}
      </div>
      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Menampilkan {hasil.length} dari {proyek.length} proyek
      </p>
      <div className="mt-6 grid gap-6 md:grid-cols-3">
        {hasil.map((item) => (
          <ProyekCard key={item.slug} proyek={item} />
        ))}
      </div>
      {hasil.length === 0 && (
        <p className="mt-6 rounded-xl border border-dashed border-gray-300 p-6 text-center text-gray-600">
          Belum ada proyek
        </p>
      )}
    </div>
  );
}
