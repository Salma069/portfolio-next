import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillsCard";
import Kartu from "@/components/Kartu";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan Gthub", level: "Menengah" },
  { nama: "Javascript", level: "Dasar" },
];

const hobies = [
  { hobi: "Panjat Tebing" },
  { hobi: "Tenis Meja" },
  { hobi: "Coding" },
];

const plans = [
  { plan: "Expertise Frontend Developer" },
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

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10 m">
      <Hero
        nama={"Salma Rayya"}
        tagline={"Siswa SMK Jurusan RPL di Kelas Industri UBIG"}
      />
      {/* Tentang */}

      <section className="mt-10">
        <Kartu
          judul={"Tentang"}
          children={
            <p>
              Saya adalah siswi Rekayasa Perangkat Lunak (RPL) di SMKN 1
              Pasuruan yang memiliki minat dalam pengembangan web dan desain
              antarmuka. Saya berfokus pada pengembangan kemampuan Frontend
              Developer dengan mempelajari HTML, CSS, JavaScript, React, dan
              Next.js. Saya senang menggabungkan kreativitas visual dengan
              logika pemrograman untuk membangun website yang modern, responsif,
              dan interaktif. Melalui berbagai proyek, saya terus mengasah
              kemampuan dalam merancang antarmuka, mengelola data, serta
              mengembangkan fitur yang fungsional. Saya memiliki semangat
              belajar yang tinggi, senang mengeksplorasi teknologi baru, dan
              berusaha memahami setiap proses pengembangan secara mandiri. Ke
              depannya, saya ingin terus meningkatkan keterampilan, memperluas
              wawasan di bidang teknologi, dan menghasilkan karya digital yang
              bermanfaat serta memiliki kualitas yang baik.
            </p>
          }
        />
      </section>

      {/* Hobi */}

      <section className="mt-4">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
          <Kartu
            judul={"Hobi"}
            children=<div className="pl-4">
              {hobies.map((item) => (
                <li key={item.hobi}>{item.hobi}</li>
              ))}
            </div>
          />
          <Kartu
            judul="Target"
            children={
              <ol className="list-decimal pl-5">
                {plans.map((item) => (
                  <li key={item.plan}>{item.plan}</li>
                ))}
              </ol>
            }
          />
        </div>
      </section>

      {/* Skill */}

      <section className="mt-4">
        <div className="md:grid-cols-2 gap-4">
          <Kartu
            judul={"Keahlian"}
            children=<div className="grid grid-cols-3 gap-3">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.nama}
                  nama={skill.nama}
                  level={skill.level}
                />
              ))}
            </div>
          />
        </div>
      </section>

      {/* Jadwal */}

      <section className="mt-4">
        <Kartu
          judul="Jadwal Belajar"
          children={
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
            <td className="p-3">{item.day}</td>
            <td className="p-3">{item.waktu}</td>
            <td className="p-3">{item.kegiatan}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

              
          }
        />
      </section>
    </main>
  );
}
