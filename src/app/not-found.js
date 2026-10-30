import Link from "next/link"

export default function notFound() {
    return (
        <main className="min-h-screen flex flex-col justify-center items-center text-center px-4 gap-3">
            <h1 className="text-6xl text-red-500 font-bold">404 </h1>
            <h1 className="text-3xl text-blue-800 font-bold">Halaman tidak ditemukan</h1>
            <h2 className="text-utama">Alamat yang kamu buka tidak ada atau sudah dipindahkan</h2>
           <Link href="/">
        <button className="px-4 py-2 bg-blue-800 text-white rounded hover:bg-blue-600">
          Ke Halaman Beranda
        </button>
      </Link>
        </main>
    )
}