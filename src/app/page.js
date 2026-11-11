import Link from "next/link"
import Hero from "@/components/Hero";
import SkillCard from "@/components/SkillsCard";
import { buttonVariants } from "@/components/ui/button";
import { proyek } from "@/data/proyek"
import Kartu from "@/components/Kartu";
import ProyekCard from "@/components/ProyekCard";
import { supabase } from "@/lib/supabase";
const skills = [
  { nama: "HTML", level: "Menengah" },
  { nama: "CSS", level: "Menengah" },
  { nama: "Git dan Github", level: "Menengah" },
  { nama: "Javascript", level: "Dasar" },
];

const proyekTerbaru = proyek.slice(-3);

export default async function Home() {
const { data: skills } = await supabase
.from("skills")
.select("*")
.order("id");
const { data: proyekTerbaru } = await supabase
.from("projects")
.select("*")
.order("created_at", { ascending: false })
.limit(3);
    return (
      <main className="mx-auto max-w-5xl px-4 py-10 grid">
        <Hero
          nama={"Salma Rayya"}
          tagline={"Siswa Kelas XI SMK Jurusan RPL di Kelas Industri UBIG"}
        />

        {/* Skill */}

        <section className="mt-4 ">
          <Kartu judul="Keahlian">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-primary">
              {skills.map((skill) => (
                <SkillCard
                  key={skill.nama}
                  nama={skill.nama}
                  level={skill.level}
                />
              ))}
            </div>
          </Kartu>
        </section>

        {/* pROYEK */}
        <section className="mx-auto mt-6 max-w-5xl px-4 rounded-xl  p-6 shadow-lg md: grid-cols-3">
          <h2 className="mb-4 text-2xl font-bold text-primary" >Proyek Terbaru</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {proyekTerbaru.map((item) => (
              <ProyekCard key={item.slug} proyek={item} />
            ))}
          </div>
          <Link href="/proyek" className={buttonVariants({ size: "lg", className: "mt-6" })} >
            Lihat semua proyek
          </Link>
        </section>
      </main>
    );
}
