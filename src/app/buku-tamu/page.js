import { Button } from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardHeader} from "@/components/ui/card"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {Textarea} from "@/components/ui/textarea"
import {kirimPesan} from "@/app/actions"
import {supabase} from "@/lib/supabase"
import { CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"


export const metadata = {
    title: "Buku Tamu",
    description: "Tinggalkan kesan atau sapa Salma"
}


export default async function BukuTamu() {
    const {data: daftarPesan} = await supabase
    .from("buku_tamu")
    .select("*")
    .order("disematkan", {ascending: false})
    .order("created_at", {ascending: false});

    return (
        <main className="mx-auto w-full max-w-3xl px-4 py-10">
            <h1 className="text-3xl font-bold text-primary md:text-4xl" >Buku Tamu</h1>
            <p className="mt-3 text-lg text-muted-foreground">Tinggalkan pesan atau sapa. Pesanmu langsung tampil di bawah</p>

            <Card className="mt-8">
                <CardContent>
                    <form action={kirimPesan} className="space-y-4">
                        <div className="space-y-2">
                            <Label>Nama</Label>
                            <Input id="nama" name="nama" placeholder="Contoh: Salma Rayya"/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="pesan">Pesan</Label>
                            <Textarea id="pesan" name="pesan" rows={4} maxLength={300} placeholder="Tulis kesan atau sapaanmu"/>
                        </div>
                        <Button type="submit" size="lg">Kirim Pesan</Button>
                    </form>
                </CardContent>
            </Card>
            <h2 className="mt-10 text-2xl font-bold text-primary">Terbaru</h2>
            <div className="mt-4 space-y-4" >
                {daftarPesan && daftarPesan.map((item) => (
                    <Card key={item.id}>
                                   {item.disematkan && <Badge>Disematkan</Badge>}
 
                        <CardHeader>
                            <CardTitle>{item.nama}</CardTitle>
                            <CardDescription>{new Date(item.created_at).toLocaleDateString("id-ID")}</CardDescription>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </main>
    )
}