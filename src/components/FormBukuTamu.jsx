"use client";

import { toast } from "sonner";
import { useActionState } from "react";
import { kirimPesan } from "@/app/buku-tamu/actions";

async function kirimDanBeriTahu(stateSebelum, formData) {
    const hasil = await kirimPesan(stateSebelum, formData);
    if (hasil.berhasil) {
        toast.success(hasil.berhasil);
    }
    return hasil;
}
const [state, formAction] = useActionState(kirimDanBeriTahu, {});
