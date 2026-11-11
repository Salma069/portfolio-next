
export const metadata = {
  title: "Tentang",
  description: "Cerita, hobi, citacita, dan jadwal belajar Salma",
};

import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillsCard";
import Kartu from "@/components/Kartu";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan Github", level: "Menengah" },
  { nama: "Javascript", level: "Dasar" },
];

const hobies = [
  { hobi: "Panjat Tebing" },
  { hobi: "Tenis Meja" },
  { hobi: "Coding" },
];

const plans = [
  { plan: "Expertise Fullstack Developer" },
  { plan: "Expertise Cyber Security" },
  { plan: "Membangun Portfolio Profesional" },
];

const jadwal = [
  {
    day: "Senin",
    waktu: "15.00-18.00",
    kegiatan: "Panjat",
  },
  {
    day: "Rabu",
    waktu: "18.00-20.00",
    kegiatan: "Tenis meja",
  },
  {
    day: "Kamis",
    waktu: "16.00-17.00",
    kegiatan: "Lari",
  },
  {
    day: "Jumat",
    waktu: "16.00-17.00",
    kegiatan: "Lari",
  },
  {
    day: "Sabtu",
    waktu: "16.00-17.00",
    kegiatan: "Lari",
  },
  {
    day: "Minggu",
    waktu: "16.00-17.00",
    kegiatan: "Lari",
  },
];

export default function Tentang() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 m grid">
      <h1 className="text-4xl font-bold text-primary">
        Tentang Saya
      </h1>

      <section className="mt-10 bg-card rounded-xl">
        <Kartu judul={"Perkenalan"}>
          <p className="text-muted-foreground">
            Saya adalah siswi RPL di SMKN 1 Pasuruan yang tertarik pada
            pengembangan web dan desain antarmuka. Saya sedang mengembangkan
            kemampuan Frontend Developer dengan mempelajari HTML, CSS,
            JavaScript, React, dan Next.js. Saya senang menciptakan website
            yang modern, responsif, dan interaktif, serta terus belajar
            melalui berbagai proyek untuk meningkatkan kemampuan dan
            menghasilkan karya digital yang bermanfaat.
          </p>
        </Kartu>
      </section>

      {/* Hobi */}

      <section className="mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Kartu judul={"Hobi"}>
            <div className="pl-4 text-muted-foreground">
              {hobies.map((item) => (
                <li key={item.hobi}>{item.hobi}</li>
              ))}
            </div>
          </Kartu>

          <Kartu judul="Target">
            <ol className="list-decimal pl-5 text-muted-foreground">
              {plans.map((item) => (
                <li key={item.plan}>{item.plan}</li>
              ))}
            </ol>
          </Kartu>
        </div>
      </section>

      {/* Jadwal */}

      <section className="mt-4">
        <Kartu judul="Jadwal Belajar">
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-utama">
                <tr className="border-b text-white">
                  <th className="p-3">Hari</th>
                  <th className="p-3">Waktu</th>
                  <th className="p-3">Kegiatan</th>
                </tr>
              </thead>

              <tbody>
                {jadwal.map((item) => (
                  <tr key={item.day} className="border-b">
                    <td className="p-3 text-muted-foreground">{item.day}</td>
                    <td className="p-3 text-muted-foreground">{item.waktu}</td>
                    <td className="p-3 text-muted-foreground">{item.kegiatan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Kartu>
      </section>
    </main>
  );
}
