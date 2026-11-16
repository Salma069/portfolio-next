import FormProyek from "@/components/FormProyek";
import { tambahProyek } from "../actions";

export default function baruPage() {
    const proyekKosong = { id: "", judul: "", slug: "", kategori: "",
minggu: "", deskripsi: "", fitur: [], gambar_url: "" };
return (
    <FormProyek aksi={tambahProyek} proyek={proyekKosong}
teksTombol="Simpan Proyek" />

)
}
