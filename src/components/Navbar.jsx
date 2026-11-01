"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import TombolTema from "./TombolTema";

const menu = [
  { href: "/", label: "Beranda" },
  { href: "/tentang", label: "Tentang" },
  { href: "/proyek", label: "Proyek" },
  { href: "/kontak", label: "Kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <header className="bg-utama text-white dark:bg-blue-950">
      <nav className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 md:flex-row md:justify-between font-semibold md:items-center">
        <Link href="/">Salma Rayya</Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {menu.map((item) => {
            let kelas = "text-gray-200 hover:text-white";
            if (pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href + "/"))) {
                kelas = "font-bold text-white underline underline-offset-8"
            }

            return (
                <li key={item.href}>
                    <Link href={item.href} className={kelas}> 
                    {item.label}
                    </Link>
                </li>
            );
          })}
        </ul>
        <TombolTema/>
      </nav>
    </header>
  );
}
