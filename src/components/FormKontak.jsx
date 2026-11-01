"use client"

import { useState } from "react"

const kelasInput = "mt-1 w-full rounded-lg border border-gray-300 bg-white p-2 dark:bg-gray-600 dark:border-gray-600 dark:text-gray-300"

export default function FormKontak() {
    const [nama, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [nomor, setNomor] = useState("");
    const [pesan, setPesan] = useState("");
    const [keperluan, setKeperluan] = useState("")
    const [error, setError] = useState({});
    const [berhasil, setBerhasil] = useState(false);

    function kirim(e) {
        e.preventDefault();
        const errorBaru ={};

        if (nama.trim() === "") {
            errorBaru.nama = "Nama wajib diisi"
        }
        if (!email.includes("@")) {
            errorBaru.email = "Email harus memuat tanda @: example@gmail.com"
        }
        if (nomor.length < 10) {
            errorBaru.nomor = "Nomor HP harus lebih dari 10 digit"
        }
        if (keperluan === "") {
            errorBaru.keperluan = "Keperluan wajib diisi"
        }
        if (pesan.trim().length < 10) {
            errorBaru.pesan = "Pesan harus lebih dari 10 karakter"
        }

        setError(errorBaru);
        setBerhasil(Object.keys(errorBaru).length === 0);
    }

   return (
    <main className="mx-auto w-full max-w-7xl px-4 py-8">
      <h1 className="text-3xl font-bold text-utama md:4xl dark:text-blue-200">Hubungi Saya</h1>
      <p className="mt-3 text-lg text-gray-700 dark:text-gray-300 mb-3">
        Punya pertanyaan atau ingin bekerja sama? Isi form berikut
      </p>
      <div className="flex flex-col md:items-stretch md:flex-row gap-4">
        <div className="w-full min-w-0 flex-2 bg-white dark:bg-blue-950 rounded-lg px-6 py-4">
          <form 
          className="w-full"
          onSubmit={kirim} noValidate
          
          >
            
            <div>
                {/* nama */}
              <label htmlFor="nama" className="block font-semibold dark:text-gray-300">
                Nama lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                placeholder="Contoh: Budi Santoso"
                className={kelasInput}
              />
              {error.nama && 
              <p className="mt-1 mb-1 text-sm text-red-800">
                {error.nama}
              </p> 
              }

              {/* emmail */}
              <label htmlFor="email" className="block font-semibold dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="example@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                className={kelasInput}
              />
                            {error.email && 
              <p className="mt-1 text-sm text-red-800">
                {error.email}
              </p> 
              }


              {/* no hp */}
              <label htmlFor="nomor" className="block font-semibold dark:text-gray-300  ">
                Nomor HP
              </label>
              <input
                type="text"
                id="number"
                name="nomor"
                value={nomor}
                placeholder="089282918292"
                onChange={(e) => setNomor(e.target.value)}
                className={kelasInput}
              />
              {error.nomor && 
              <p className="mt-1 text-sm text-red-800">
                {error.nomor}
              </p> 
              }
              {/* keperluan */}

              <label htmlFor="perlu" className="block font-semibold dark:text-gray-300">
                Keperluan
              </label>
              
              <select
                id="keperluan"
                name="keperluan"
                onChange={(e) => setKeperluan(e.target.value)}
                defaultValue=""
                className={kelasInput}
              >
                
                <option value="" disabled>
                  Pilih keperluan
                </option>
                <option value="kerja-sama">Kerja sama</option>
                <option value="jasa-website">Jasa pembuatan website</option>
                <option value="ui-ux">Desain UI/UX</option>
              </select>
                           
 {error.keperluan && 
              <p className="mt-1 text-sm text-red-800">
                {error.keperluan}
              </p> 
              }

              {/* pesan */}
              <label htmlFor="pesan" className="block font-semibold dark:text-gray-300">
                Pesan
              </label>
              <textarea
                type="text-area"
                id="pesan"
                name="pesan"
                value={pesan}
                rows={5}
                cols={40}
                placeholder="Tulis pesanmu di sini"
                onChange={(e) => setPesan(e.target.value)}
                className={kelasInput}
              />
                            {error.pesan && 
              <p className="mt-1 text-sm text-red-800">
                {error.pesan}
              </p> 
              }
{berhasil && (

<p className="rounded-lg bg-green-100 p-3 text-green-800 dark:bg-
green-900 dark:text-green-100">

Terima kasih, {nama}! Pesanmu sudah lolos pemeriksaan.
</p>
)}
            </div>
            <button className="bg-red-700 m-2 px-4 py-2 rounded-lg">
              <h2 className="text-white font-semibold">Kirim Pesan</h2>
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}