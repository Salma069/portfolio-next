"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { sudahMasuk } from "@/lib/pin";
import { supabaseAdmin } from "@/lib/supabase-admin";

export async function masukKelola(stateSebelum, formData) {
    const pin = formData.get("pin");

    if (pin !== process.env.ADMIN_PIN) {
        return { error: "PIN salah, coba lagi." };
    }

    const kue = await cookies();

    kue.set("pin_admin", pin, {
        httpOnly: true,
        sameSite: "strict",
        maxAge: 60 * 60,
        path: "/",
        secure: process.env.NODE_ENV === "production",
    });

    return {};
}

export async function keluarKelola() {
    const kue = await cookies();
    kue.delete("pin_admin");
}

// buku tamu
export async function sematkanPesan(formData) {
    if (!(await sudahMasuk())) {
        return;
    }

    const id = formData.get("id");
    const sematkan = formData.get("sematkan") === "ya";

    const { error } = await supabaseAdmin
        .from("buku_tamu")
        .update({ disematkan: sematkan })
        .eq("id", id);

    if (error) {
        console.error("Gagal menyematkan pesan:", error.message);
        return;
    }

    revalidatePath("/kelola");
    revalidatePath("/buku-tamu");
}

export async function hapusPesan(formData) {
    if (!(await sudahMasuk())) {
        return;
    }

    const id = formData.get("id");

    const { error } = await supabaseAdmin
        .from("buku_tamu")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("Gagal menghapus pesan:", error.message);
        return;
    }

    revalidatePath("/kelola");
    revalidatePath("/buku-tamu");
}

// crud proyek
const daftarKategori = [
    "HTML",
    "CSS",
    "JavaScript",
    "C++",
];

function bacaProyek(formData) {
    const bacaTeks = (nama) =>
        String(formData.get(nama) ?? "").trim();

    return {
        judul: bacaTeks("judul"),
        slug: bacaTeks("slug"),
        kategori: bacaTeks("kategori"),
        minggu: bacaTeks("minggu"),
        deskripsi: bacaTeks("deskripsi"),

        fitur: bacaTeks("fitur")
            .split("\n")
            .map((f) => f.trim())
            .filter((f) => f !== ""),

        gambar_url: bacaTeks("gambar_url"),
    };
}

function cekProyek(proyek) {
    if (
        proyek.judul === "" ||
        proyek.slug === "" ||
        proyek.deskripsi === ""
    ) {
        return "Judul, slug, dan deskripsi wajib diisi.";
    }

    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(proyek.slug)) {
        return "Slug hanya boleh menggunakan huruf kecil, angka, dan tanda hubung.";
    }

    if (!daftarKategori.includes(proyek.kategori)) {
        return "Kategori harus HTML, CSS, JavaScript, atau Next.js.";
    }

    if (!proyek.gambar_url.startsWith("/proyek/")) {
        return "Alamat gambar harus diawali /proyek/, contoh: /proyek/proyek-buku-tamu.png.";
    }

    return "";
}

// MEMperbarui otomatis
function perbaruiHalaman(slug) {
    revalidatePath("/");
    revalidatePath("/proyek");
    revalidatePath(`/proyek/${slug}`);
    revalidatePath("/kelola");
}

// create
export async function tambahProyek(stateSebelum, formData) {
    const proyek = bacaProyek(formData);

    if (!(await sudahMasuk())) {
        return {
            error: "Masukkan PIN dulu di halaman kelola.",
            proyek,
        };
    }

    const error = cekProyek(proyek);

    if (error !== "") {
        return { error, proyek };
    }

    const { error: errorSupabase } = await supabaseAdmin
        .from("projects")
        .insert(proyek);

    if (errorSupabase) {
        if (errorSupabase.code === "23505") {
            return {
                error: "Slug sudah dipakai di proyek lain.",
                proyek,
            };
        }

        return {
            error: `Proyek gagal disimpan: ${errorSupabase.message}`,
            proyek,
        };
    }

    // Berhasil menyimpan proyek
    perbaruiHalaman(proyek.slug);

    redirect("/kelola");
}

// upadate proyek
export async function ubahProyek(stateSebelum, formData) {
    const proyek = bacaProyek(formData);
    const id = formData.get("id");

    if (!(await sudahMasuk())) {
        return {
            error: "Masukkan PIN dulu di halaman kelola.",
            proyek,
        };
    }

    if (!id) {
        return {
            error: "ID proyek tidak ditemukan.",
            proyek,
        };
    }

    const error = cekProyek(proyek);

    if (error !== "") {
        return { error, proyek };
    }

    const { error: errorSupabase } = await supabaseAdmin
        .from("projects")
        .update(proyek)
        .eq("id", id);

    if (errorSupabase) {
        if (errorSupabase.code === "23505") {
            return {
                error: "Slug sudah dipakai di proyek lain.",
                proyek,
            };
        }

        return {
            error: `Proyek gagal diubah: ${errorSupabase.message}`,
            proyek,
        };
    }

    perbaruiHalaman(proyek.slug);

    redirect("/kelola");
}

// delete proyek
export async function hapusProyek(formData) {
    const id = formData.get("id");

    if (!(await sudahMasuk())) {
        return;
    }

    if (!id) {
        return;
    }

    const { error } = await supabaseAdmin
        .from("projects")
        .delete()
        .eq("id", id);

    if (error) {
        console.error("Gagal menghapus proyek:", error.message);
        return;
    }

    revalidatePath("/");
    revalidatePath("/proyek");
    revalidatePath("/kelola");

    redirect("/kelola");
}