# Hugo Theme — Ringan

Tema Hugo yang **sederhana, ringan, dan responsive**, dirancang agar situs
Anda cepat diakses (skor Core Web Vitals bagus) dan memenuhi kelengkapan
halaman yang biasanya diperiksa saat pengajuan **Google AdSense**.

## Fitur

- 100% CSS murni, tanpa framework (Bootstrap/Tailwind) → ukuran file kecil
- Mobile-first & fully responsive, termasuk menu hamburger di layar kecil
- **Pencarian instan di sisi klien** (tanpa server/database, lihat bagian di bawah)
- Mendukung dark mode otomatis (`prefers-color-scheme`)
- SEO dasar: meta description, canonical, Open Graph, Twitter card, sitemap & RSS otomatis dari Hugo
- Slot iklan AdSense (atas, bawah, dan in-article) yang **nonaktif secara default** — aman dipakai sebelum maupun sesudah akun disetujui
- Contoh halaman: Tentang, Kontak, Kebijakan Privasi, Disclaimer
- `robots.txt` bawaan

## Cara Pakai

1. Salin folder tema ini ke `themes/hugo-theme-ringan` di proyek Hugo Anda,
   atau jadikan proyek baru dari folder `exampleSite`.
2. Salin isi `exampleSite/hugo.toml` ke root proyek Anda dan sesuaikan:
   - `baseURL`, `title`, `params.description`, `params.author`
3. Salin/isi ulang folder `exampleSite/content/` sebagai titik awal, lalu
   ganti semua teks placeholder dengan konten asli Anda.
4. Jalankan:

   ```bash
   hugo server -D
   ```

5. Build untuk produksi:

   ```bash
   hugo --minify
   ```

## Cara Kerja Fitur Pencarian

Pencarian bekerja **sepenuhnya di browser**, tanpa server, database, atau
layanan pihak ketiga berbayar — jadi tetap cocok untuk hosting statis (Netlify,
Vercel, Cloudflare Pages, GitHub Pages, dsb.) dan tidak menambah beban server.

Cara kerjanya:

1. Saat `hugo` build, semua artikel di section `posts` otomatis diringkas
   menjadi satu file `index.json` di root situs (lihat `layouts/index.json`).
2. Klik ikon kaca pembesar di header (atau tekan tombol `/`) untuk membuka
   panel pencarian minimalis yang muncul tepat di bawah header. Klik ikon
   lagi, klik di luar panel, atau tekan `Esc` untuk menutupnya.
3. `static/js/search.js` mengambil `index.json` sekali (di-cache di memori),
   lalu mencocokkan kata kunci terhadap judul & isi artikel saat Anda mengetik
   — hasil muncul instan tanpa reload halaman.

**Catatan:**
- Fitur ini hanya mengindeks konten bertipe `posts`. Untuk mengindeks tipe
  konten lain, edit `where .Site.RegularPages "Type" "posts"` di
  `layouts/index.json`.
- Jika situs sangat besar (ribuan artikel), pertimbangkan memotong panjang
  field `content` di `layouts/index.json` (sudah dibatasi 2000 karakter per
  artikel secara default) agar ukuran `index.json` tetap kecil dan cepat
  diunduh.
- Tidak diperlukan dependency tambahan (Fuse.js, Algolia, dll.) — semuanya
  vanilla JavaScript agar tetap ringan.

## Mengaktifkan AdSense

Setelah akun AdSense Anda **disetujui**, isi parameter berikut di `hugo.toml`:

```toml
[params]
  adsenseClientID = "ca-pub-xxxxxxxxxxxxxxxx"
  adSlotTop = "1234567890"
  adSlotBottom = "0987654321"
  adSlotArticle = "1122334455"
```

Skrip AdSense hanya akan dimuat jika `adsenseClientID` diisi — jadi sebelum
disetujui, biarkan kosong agar situs tetap bersih saat direview.

Untuk menyisipkan iklan di tengah artikel, gunakan shortcode:

```
{{</* ads */>}}
```

## Checklist Sebelum Mengajukan Review AdSense

Tema ini membantu dari sisi teknis, tapi keputusan approval sebagian besar
ditentukan oleh **konten dan kelengkapan situs**:

- [ ] Domain sendiri (bukan subdomain gratis seperti `.blogspot`/`.wordpress.com` versi gratis — tergantung kebijakan AdSense terbaru di negara Anda)
- [ ] Minimal 15–30 artikel orisinal, masing-masing 600+ kata, bebas plagiat
- [ ] Halaman **Tentang**, **Kontak**, dan **Kebijakan Privasi** terisi lengkap dan asli (sudah disediakan contohnya)
- [ ] Situs sudah online minimal beberapa minggu dengan trafik yang wajar
- [ ] Navigasi jelas, tidak ada broken link
- [ ] Tidak ada konten yang melanggar [kebijakan program AdSense](https://support.google.com/adsense/answer/48182) (konten dewasa, kekerasan, hak cipta, dll.)
- [ ] Situs sudah responsive dan nyaman diakses dari HP (tema ini sudah menangani ini)
- [ ] Sebaiknya **belum** memasang iklan/skrip AdSense sebelum disetujui — pasang setelah akun aktif

## Struktur Folder

```
hugo-theme-ringan/
├── archetypes/
├── layouts/
│   ├── _default/        (baseof, single, list)
│   ├── partials/         (head, header, footer, slot iklan, modal pencarian)
│   ├── shortcodes/ads.html
│   └── index.json        (template index untuk pencarian)
├── static/
│   ├── css/style.css
│   ├── js/main.js         (toggle menu mobile)
│   ├── js/search.js       (logika pencarian client-side)
│   └── robots.txt
├── exampleSite/
│   ├── hugo.toml
│   └── content/          (contoh halaman & artikel)
├── theme.toml
└── LICENSE
```

Selamat menulis dan semoga situs Anda cepat disetujui! 🎉
