export const metadata = {
  title: "Kontak",
  description: "Hubungi Salma melalui Instagram",
};

export default function Kontak() {
  return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-utama md:4xl">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-gray-700 mb-3">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut
      </p>
      <div className="flex flex-col md:items-stretch md:flex-row gap-4">
        <div className="w-full min-w-0 flex-2 bg-white rounded-lg px-6 py-4">
          <form className="w-full">
            <div>
              <label htmlFor="nama" className="block font-semibold">
                Nama lengkap
              </label>
              <input
                type="text"
                id="nama"
                placeholder="Contoh: Budi Santoso"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 mb-3"
              />
              <label htmlFor="email" className="block font-semibold">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@gmail.com"
                required
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 mb-3"
              />
              <label htmlFor="nomor" className="block font-semibold">
                Nomor HP
              </label>
              <input
                type="text"
                id="number"
                name="nomor"
                placeholder="089282918292"
                required
                className="mt-1 w-full p-2 bg-white border border-gray-300 rounded-lg mb-3"
              />
              <label htmlFor="nomor" className="block font-semibold">
                Keperluan
              </label>
              <select
                id="keperluan"
                name="keperluan"
                required
                defaultValue=""
                className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 mb-3"
              >
                <option value="" disabled>
                  Pilih keperluan
                </option>
                <option value="kerja-sama">Kerja sama</option>
                <option value="jasa-website">Jasa pembuatan website</option>
                <option value="ui-ux">Desain UI/UX</option>
              </select>
              <label htmlFor="pesan" className="block font-semibold">
                Pesan
              </label>
              <textarea
                type="text-area"
                id="pesan"
                name="pesan"
                rows={5}
                cols={40}
                placeholder="Tulis pesanmu di sini"
                required
                className="w-full p-2 bg-white border border-gray-300 rounded-lg mb-3"
              />
            </div>
            <button className="bg-red-700 m-2 px-4 py-2 rounded-lg">
              <h2 className="text-white font-semibold">Kirim Pesan</h2>
            </button>
          </form>
        </div>

        <div className=" bg-white lg:w-fit shrink-0 rounded-lg py-4 px-3 flex-1">
          <h1 className="text-2xl font-bold">Temukan Saya di</h1>
          <h2 className="mt-2">Github</h2>
          <a
            href="https://github.com/Salma069"
            className="text-blue-700 hover:underline"
          >
            https://github.com/Salma069
          </a>
          <h2 className="mt-2">Email</h2>
          <a
            href="mailto:salmarayya3@gmail.com"
            className="text-blue-700 hover:underline"
          >
            salmarayya3@gmail.com
          </a>
        </div>
      </div>
    </main>
  );
}
