# Kayu & Kabut — Slicing Landing Page

Landing page hasil slicing untuk tugas HTML/CSS/JS. Temanya kedai kopi
("Kayu & Kabut") sebagai studi kasus, dibangun dari nol tanpa framework CSS
apa pun (Plain CSS murni) dan memakai JavaScript untuk manipulasi DOM.

## 🔗 Live Demo
> Tempel link deployment (Netlify / Vercel / GitHub Pages) di sini setelah
> proyek di-deploy.

## 📁 Struktur Proyek
```
kayu-kabut/
├── index.html        # markup utama (semantic HTML5)
├── css/
│   └── style.css      # plain CSS, custom properties, 3 breakpoint
├── js/
│   └── script.js       # interaksi DOM
└── README.md
```

## ✅ Ketentuan yang Dipenuhi

| Ketentuan | Implementasi |
|---|---|
| Responsive (mobile/tablet/desktop) | `@media (min-width:600px)` untuk tablet, `@media (min-width:1024px)` untuk desktop, mobile-first sebagai default |
| HTML | Markup semantik: `header`, `main`, `section`, `footer`, `nav`, `dl`, `blockquote` |
| CSS | Plain CSS — CSS Custom Properties (`:root`), Flexbox, CSS Grid, `clamp()` untuk tipografi cair, tanpa Tailwind/Bootstrap |
| JavaScript (DOM) | Lihat bagian *Fitur JavaScript* di bawah |

## ⚙️ Fitur JavaScript (DOM Manipulation)

1. **Sticky header dinamis** — `classList.add/remove('is-scrolled')` saat
   `scrollY` melewati batas tertentu, memberi bayangan pada header.
2. **Menu navigasi mobile** — tombol hamburger men-toggle `class="is-open"`
   pada `<nav>`, disertai atribut `aria-expanded` untuk aksesibilitas.
3. **Filter produk** — tombol kategori (`data-filter`) menyaring kartu
   produk (`data-category`) dengan mengatur `style.display`, sekaligus
   menampilkan pesan "kosong" bila hasil filter tidak ada.
4. **Slider testimoni** — dot indikator dibuat secara dinamis lewat
   `createElement`, navigasi prev/next mengubah `transform: translateX()`
   pada track slider.
5. **Validasi form kontak** — validasi nama, format email (regex), dan
   panjang pesan dilakukan di sisi klien sebelum menampilkan pesan sukses,
   tanpa reload halaman (`e.preventDefault()`).
6. **Tombol kembali ke atas** — `window.scrollTo({ behavior: 'smooth' })`.

## 🎨 Catatan Desain

- **Tipografi**: `Fraunces` (serif, untuk judul) dipasangkan dengan
  `Work Sans` (sans-serif, untuk teks isi) — diambil dari Google Fonts.
- **Palet warna**: krem hangat (`#F2EDE3`) sebagai latar, cokelat tinta
  (`#241C14`) untuk teks dan seksi kontras, aksen tembaga (`#B5652D`) dan
  hijau sage (`#6E7A5A`) sebagai warna sekunder.
- Bagian "Proses Sangrai" memakai penomoran (01–04) karena kontennya memang
  berupa urutan tahapan, bukan sekadar hiasan.

## 🚀 Cara Menjalankan Lokal

Karena proyek ini murni HTML/CSS/JS statis, cukup buka `index.html`
langsung di browser, atau jalankan server statis sederhana:

```bash
# Opsi 1: langsung buka file
open index.html          # macOS
start index.html         # Windows

# Opsi 2: pakai live server (butuh Node.js)
npx serve .
```

## 📦 Cara Deploy

**Netlify (drag & drop)**
1. Buka [app.netlify.com/drop](https://app.netlify.com/drop)
2. Seret folder `kayu-kabut/` ke halaman tersebut.

**GitHub Pages**
1. Push folder ini ke repository GitHub.
2. Masuk ke *Settings → Pages*, pilih branch `main` dan folder `/root`.
3. Simpan, tunggu beberapa menit hingga URL Pages aktif.

**Vercel**
1. Jalankan `npx vercel` di dalam folder proyek, atau import repo GitHub
   lewat [vercel.com/new](https://vercel.com/new).
