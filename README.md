# Struktur Database Portofolio

## 1. Informasi Database

Database proyek portofolio ini menggunakan **Supabase** dengan konfigurasi berikut:

| Informasi | Detail |
|---|---|
| Project Name | `portofolio-salma` |
| Platform | Supabase |
| Region | Southeast Asia (Singapore) |

### Konfigurasi Environment

Alamat project dan publishable key disimpan dalam file `.env.local`.

File tersebut tidak diikutsertakan dalam repository GitHub karena sudah tercantum dalam `.gitignore` melalui aturan `.env*`.

---

## 2. Tabel `projects`

Tabel `projects` digunakan untuk menyimpan daftar proyek yang ditampilkan pada halaman portofolio Salma.

| Kolom | Tipe Data | Keterangan |
|---|---|---|
| `id` | `int8` | Primary key dengan nomor otomatis. |
| `created_at` | `timestamptz` | Waktu pembuatan data, terisi otomatis menggunakan `now()`. |
| `slug` | `text` | Penanda unik proyek pada URL, misalnya `halaman-profil`. |
| `judul` | `text` | Judul proyek. |
| `deskripsi` | `text` | Deskripsi singkat proyek. |
| `kategori` | `text` | Kategori proyek: HTML, CSS, atau JavaScript. |
| `minggu` | `text` | Minggu pengerjaan proyek, misalnya `Minggu 01`. |
| `fitur` | `text[]` | Daftar fitur atau hal yang dipelajari dalam proyek. |
| `gambar_url` | `text` | Lokasi gambar proyek di folder `public`, misalnya `/proyek/proyek-profil.png`. |

### Row Level Security (RLS)

RLS telah diaktifkan pada tabel `projects`.

Policy yang diterapkan:

- **Nama:** Pengunjung boleh membaca proyek.
- **Role:** `anon`.
- **Operation:** `SELECT`.
- **Akses:** Pengunjung dapat membaca seluruh baris data proyek.

---

## 3. Tabel `messages`

Tabel `messages` digunakan untuk menyimpan pesan yang dikirimkan pengunjung melalui formulir kontak pada website.

| Kolom | Tipe Data | Keterangan |
|---|---|---|
| `id` | `int8` | Primary key dengan nomor otomatis. |
| `created_at` | `timestamptz` | Waktu pembuatan data, terisi otomatis menggunakan `now()`. |
| `nama` | `text` | Nama pengirim pesan. |
| `email` | `text` | Alamat email pengirim. |
| `pesan` | `text` | Isi pesan yang dikirimkan. |

### Row Level Security (RLS)

RLS telah diaktifkan pada tabel `messages`.

- Belum terdapat policy untuk membaca data (`SELECT`).
- Dengan demikian, pengunjung tidak memiliki izin untuk membaca pesan.
- Policy `INSERT` direncanakan dan dibuat pada Minggu 15.

---

## 4. Tabel `skills`

Tabel `skills` digunakan untuk menyimpan daftar keahlian beserta tingkat penguasaan yang ditampilkan pada portofolio.

| Kolom | Tipe Data | Keterangan |
|---|---|---|
| `id` | `int8` | Primary key dengan nomor otomatis. |
| `created_at` | `timestamptz` | Waktu pembuatan data, terisi otomatis menggunakan `now()`. |
| `nama` | `text` | Nama keahlian. |
| `level` | `text` | Tingkat penguasaan: Dasar, Menengah, atau Mahir. |

### Row Level Security (RLS)

RLS telah diaktifkan pada tabel `skills`.

Policy yang diterapkan:

- **Nama:** Pengunjung boleh membaca keahlian.
- **Role:** `anon`.
- **Operation:** `SELECT`.
- **Akses:** Pengunjung dapat membaca seluruh baris data keahlian.

---

## 5. Ringkasan Database

| Nama Tabel | Fungsi | RLS |
|---|---|---|
| `projects` | Menyimpan data proyek portofolio. | Aktif |
| `messages` | Menyimpan pesan dari formulir kontak. | Aktif |
| `skills` | Menyimpan data keahlian. | Aktif |

**Catatan:** Seluruh tabel menggunakan Supabase sebagai database utama dan menerapkan Row Level Security (RLS) untuk mengatur hak akses data.