import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillsCard";

const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan Gthub", level: "Menengah" },
  { nama: "Javascript", level: "Dasar" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <Hero
        nama={"Salma Rayya"}
        tagline={"Siswa SMK Jurusan RPL di Kelas Industri UBIG"}
      />
      <section className="mt-10">
         <h2 className="mb-4 text-2xl font-bold text-utama">Keahlian</h2>
         <div className="grid gap-4 md: grid-cols-1">
 {skills.map((skill) => (
          <SkillCard key={skill.nama} nama={skill.nama} level={skill.level} />
        ))}
         </div>
       
      </section>
    </main>
  );
}
