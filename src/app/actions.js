"use server"

import { revalidatePath } from "next/cache";
import {supabase} from "@/lib/supabase"

export async function kirimPesan(formData) {
    const nama = formData.get("nama");
    const pesan = formData.get("pesan");
    const {error} = await supabase.from("buku_tamu").insert({nama, pesan});

    if (error) {
        console.log("Gagal enyimpan:", error.message);
        return;
    }

    revalidatePath("/buku-tamu")
}
