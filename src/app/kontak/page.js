import FormKontak from "@/components/FormKontak"

export const metadata = {
  title: "Kontak",
  description: "Hubungi Salma melalui Instagram",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">

      <div className="flex flex-col md:items-stretch md:flex-row gap-4">
        <div className="w-full min-w-0 flex-2 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl px-6 py-4 ">
          <FormKontak/>
        </div>

        <div className=" bg-white shadow-2xl dark:bg-gray-800 lg:w-fit shrink-0 rounded-2xl shadow-3xl py-4 px-3 flex-1">
          <h1 className="text-2xl font-bold dark:text-blue-200">Temukan Saya di</h1>
          <h2 className="mt-2 dark:text-gray-300">Github</h2>
          <a
            href="https://github.com/Salma069"
            className="text-blue-500 hover:underline "
          >
            https://github.com/Salma069
          </a>
          <h2 className="mt-2 dark:text-gray-300">Email</h2>
          <a
            href="mailto:salmarayya3@gmail.com"
            className="text-blue-500 hover:underline"
          >
            salmarayya3@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
