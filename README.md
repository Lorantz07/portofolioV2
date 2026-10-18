# Portofolio Nanda — "Night Sky"

Portofolio single-page dengan vanilla HTML, CSS & JavaScript.
Tema langit malam: pastel periwinkle di mode terang, navy berbintang di mode gelap.

## Struktur

```
index.html            Semua konten & section
css/style.css         Token warna, komponen, responsif
js/main.js            Tema, bahasa ID/EN, animasi, nav
assets/img/           Foto & screenshot
assets/icons/         Favicon
```

## Cara Mengedit

### 1. Link yang perlu diganti (cari komentar `GANTI` di index.html)

| Yang diganti | Lokasi |
|---|---|
| Nomor WhatsApp | Semua `https://wa.me/6281234567890` → ganti `628xxxxxxxxxx` (format internasional tanpa `+`) |
| Username GitHub | Semua `https://github.com/usernamekamu` |
| Email | Semua `mailto:emailkamu@gmail.com` |
| Link project | Tombol "Lihat Project" di tiap project |

### 2. Gambar (tinggal timpa file, nama tetap)

| File | Isi |
|---|---|
| `assets/img/foto-nanda.png` | Foto kamu (PNG transparan paling bagus) |
| `assets/img/nexprint.png` | Screenshot project NexPrint (masih placeholder) |
| `assets/img/beautycare-landing.png` | Screenshot landing page BeautyCare (gambar utama) |
| `assets/img/beautycare-login.png` | Screenshot login BeautyCare |
| `assets/img/beautycare-dashboard.png` | Screenshot dashboard admin BeautyCare |
| `assets/img/beautycare-*-thumb.png` | Versi kecil untuk tombol galeri |
| `assets/img/og-image.png` | Preview saat link dibagikan (opsional) |

**Galeri BeautyCare:** klik thumbnail di bawah kartu untuk ganti gambar utama.
Mau tambah gambar? Copy satu `<button class="project__thumb">` di `index.html`,
lalu isi `data-src` (gambar besar) dan `data-alt` (teks alternatif)-nya.

### 3. Menambah project baru (mis. "Warung Ibu")

1. Copy satu blok `<article class="project reveal"> ... </article>` di `index.html`
2. Ganti gambar, judul, deskripsi, dan link
3. Tambahkan terjemahan Inggrisnya di `js/main.js` (bagian `translations.en`) jika perlu
4. Layout zigzag otomatis mengikuti urutan

### 4. Mengubah teks

- Teks Indonesia ada di `index.html` (default) **dan** di `js/main.js` → `translations.id`
- Teks Inggris ada di `js/main.js` → `translations.en`
- Ubah di **kedua tempat** agar versi ID dan EN tetap sinkron

### 5. Warna & tema

Semua warna terpusat sebagai variabel di `css/style.css`:
- `:root` → mode terang
- `[data-theme="dark"]` → mode gelap

Toggle bahasa ada di navbar (ID/EN, tersimpan otomatis), begitu juga toggle tema (terang/gelap).

## Menjalankan

Buka `index.html` langsung di browser, atau jalankan server lokal:

```powershell
# Python
python -m http.server 5500

# atau ekstensi Live Server di VS Code
```

## Responsif

Diuji untuk mobile (≥360px), tablet, dan desktop.
Efek hover & tilt hanya aktif di perangkat dengan mouse; animasi dimatikan otomatis
saat pengguna mengaktifkan "reduce motion".
