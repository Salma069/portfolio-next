import FormKontak from "@/components/FormKontak"
import { Card, CardContent, CardHeader, CardTitle } from
  "@/components/ui/card";

export const metadata = {
  title: "Kontak",
  description: "Hubungi Salma melalui Instagram",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8 justify-center">

      <div className="justify-center flex flex-col md:items-stretch md:flex-row gap-4">
        <Card className="md:col-span-2">
          <CardContent>
            <FormKontak />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>

            <CardTitle className="text-2xl font-bold text-
primary">Temukan Saya di</CardTitle>

          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/BagusHidayat21"
                  target="_blank" className="text-aksen hover:underline">
                  GitHub
                </a>
              </li>
              <li>
                <a href="mailto:salmarayya3@gmail.com"
                  className="text-aksen hover:underline">
                  salmarayya3@gmail.com
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
