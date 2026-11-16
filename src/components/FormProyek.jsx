"use client"

import { useActionState } from "react";
import TombolKirim from "@/components/TombolKirim";
import {Input} from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function FormProyek({aksi, proyek, teksTombol}) {
    const [state, formAction] = useActionState(aksi, {proyek});

    return (
        <form action={formAction} className="mx-auto w-full max-w-md px-4 py-10 space-y-4" >
            <h1 className="text-3xl font-bold text-primary">Tambah Proyek</h1>
            <input type="hidden" name="id" value={proyek.id} />
            <div className="space-y-2">
                <Label htmlFor="judul" >Judul</Label>
                <Input id="judul" name="judul" defaultValue={state.proyek.judul} />
            </div>
            <div>
                <Label htmlFor="slug">Slug</Label>
                <Input id="slug" name="slug" defaultValue={state.proyek.slug}/>
            </div>
            <div>
                <Label htmlFor="kategori">Kategori</Label>
                <Input id="kategori" name="kategori" defaultValue={state.proyek.kategori}/>
            </div>
            <div>
                <Label htmlFor="minggu">Minggu</Label>
                <Input id="minggu" name="minggu" defaultValue={state.proyek.minggu} />
            </div>
            <div>
                <Label htmlFor="deskripsi" >Deskripsi</Label>
                <Textarea id="deskripsi" name="deskripsi" defaultValue={state.proyek.deskripsi}/>
            </div>
            <div>
                <Label htmlFor="fitur" >Fitur</Label>
                <Textarea id="fitur" name="fitur" rows={3} defaultValue={state.proyek.fitur.join("\n")} />
            </div>
            <div>
                <Label htmlFor="gambar_url">Gambar</Label>
                <Input id="gambar_url" name="gambar_url" defaultValue={state.proyek.gambar_url}/>
            </div>
            <TombolKirim teks={teksTombol}/>
            {state.error && (
  <p className="text-sm text-red-500">
    {state.error}
  </p>
)}
        </form>
    )
}