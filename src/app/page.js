import Link from "next/link"
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillsCard";
import {proyek} from "@/data/proyek"
import Kartu from "@/components/Kartu";
import ProyekCard from "@/components/ProyekCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan Github", level: "Menengah" },
  { nama: "Javascript", level: "Dasar" },
];

const proyekTerbaru = proyek.slice(+3);

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 grid">
      <Hero
        nama={"Salma Rayya"}
        tagline={"Siswa Kelas XI SMK Jurusan RPL di Kelas Industri UBIG"}
      />
  
      {/* Skill */}

      <section className="mt-4 ">
        <Kartu
          judul={"Keahlian"}
          children=<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 dark:text-blue-300">
            {skills.map((skill) => (
              <SkillCard
                key={skill.nama}
                nama={skill.nama}
                level={skill.level}
              />
            ))}
          </div>
        />
      </section>

      {/* pROYEK */}
      <section className="mx-auto mt-6 max-w-5xl px-4 rounded-xl border border-gray-200 bg-white  dark:bg-gray-800 dark:border-gray-600 p-6 shadow-lg md: grid-cols-3">
        <h2 className="mb-4 text-2xl font-bold text-utama dark:text-blue-300" >Proyek Terbaru</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {proyekTerbaru.map((item) => (
            <ProyekCard key={item.slug} proyek={item}/>
          ))}
        </div>
        <Link href="/proyek" className="mt-6 inline-block rounded-lg bg-utama px-5 py-2 font-semibold text-white" >
        Lihat semua proyek
        </Link>
      </section>
    </main>
  );
}
