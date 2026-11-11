
"use client";

import ProyekCard from "@/components/ProyekCard";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const daftarKategori = ["Semua", "HTML", "CSS", "JavaScript", "C++"];

export default function FilterProyek({ proyek = [] }) {
  const [kategori, setKategori] = useState("Semua");
  const [kata, setKata] = useState("");

  const daftarProyek = Array.isArray(proyek) ? proyek : [];
  const kataKecil = kata.toLowerCase();

  const hasil = daftarProyek.filter((p) => {
    const cocokKategori =
      kategori === "Semua" || p.kategori === kategori;

    const cocokJudul =
      (p.judul ?? "").toLowerCase().includes(kataKecil);

    const cocokDeskripsi =
      (p.deskripsi ?? "").toLowerCase().includes(kataKecil);

    return cocokKategori && (cocokJudul || cocokDeskripsi);
  });

  return (
    <div className="mt-8 w-full">
      <div className="flex flex-wrap gap-2">
        {daftarKategori.map((k) => (
          <Button
            key={k}
            variant={kategori === k ? "default" : "outline"}
            onClick={() => setKategori(k)}
          >
            {k}
          </Button>
        ))}
      </div>

      <div className="mt-2">
        <label htmlFor="cari" className="m-2 text-muted-foreground">
          Cari Proyek:
          <input
          type="text"
          id="cari"
          value={kata}
          onChange={(e) => setKata(e.target.value)}
          placeholder="Contoh: kalkulator"
          className="mt-3 ml-1 w-full rounded-lg border border-primary bg-card p-2 text-primary-300 md:w-80"
        />
        </label>

        

        {kata !== "" && (
          <Button
            variant="link"
            onClick={() => setKata("")}
            className="mt-2 px-0 text-aksen"
          >
            Hapus pencarian
          </Button>
        )}
      </div>

      <p className="mt-4 text-sm text-muted-foreground">
        Menampilkan {hasil.length} dari {daftarProyek.length} proyek
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
