# Project Pemrograman Website - MoodSpace

**MoodSpace** adalah aplikasi web interaktif yang dirancang untuk menyesuaikan suasana hati pengguna (mood) dengan konten multimedia yang relevan. Terinspirasi dari karakter film *Inside Out 2*, website ini menyajikan Musik, Video, dan Quotes yang dikurasi khusus untuk 9 emosi berbeda.

## 📖 Deskripsi Proyek

Proyek ini dibangun dengan pendekatan **Hybrid HTML/CSS Logic**. Alih-alih menggunakan rendering JavaScript yang berat, website ini memaksimalkan kemampuan **CSS Modern** (`:target`, `:has`) untuk mengatur logika tampilan konten, sementara JavaScript digunakan seminimal mungkin hanya untuk manajemen memori navigasi.

**Tujuan:** Menciptakan "Ruang Aman" digital di mana pengguna dapat memvalidasi perasaan mereka melalui media visual dan audio.

## ✨ Fitur Utama

* **🎭 9 Karakter Emosi:** Mendukung mood Joy, Sadness, Anger, Disgust, Fear, Anxiety, Ennui, Embarrassment, dan Envy.
* **🎨 Dynamic Theming:** Warna latar belakang dan elemen UI berubah secara otomatis mengikuti mood yang dipilih.
* **🎵 Music Room:** Pemutar musik ganda (Spotify Embed + HTML5 Audio Player untuk file lokal).
* **🎬 Cinema Room:** Tata letak galeri video dengan pemutar utama dan playlist samping (HTML5 Video).
* **💬 Quotes Gallery:** Kumpulan kata-kata bijak yang dikategorikan berdasarkan emosi.
* **📨 Contact Form:** Formulir pelaporan masalah menggunakan metode *HTML Native Mailto*.
* **📱 Responsif:** Tata letak yang menyesuaikan diri dari Desktop hingga Mobile menggunakan CSS Grid & Flexbox.

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Struktur semantik (`<nav>`, `<header>`, `<section>`, `<audio>`, `<video>`).
* **CSS3:**
    * **Glassmorphism UI:** Desain transparan dan estetik.
    * **CSS Grid & Flexbox:** Untuk tata letak yang presisi.
    * **CSS Logic:** Menggunakan selector `:target` dan `:has()` untuk mengganti konten tanpa JavaScript berat.
* **JavaScript:** Menggunakan `localStorage` untuk menyimpan pilihan mood saat berpindah halaman dan sinkronisasi URL Hash.

## 📂 Struktur File

```text
MoodSpace/
├── assets/
│   ├── anger/       # Aset media untuk Anger
│   ├── anxiety/     # Aset media untuk Anxiety
│   ├── disgust/     # ...
│   ├── ...          # Folder mood lainnya
│   ├── logo.png
│   └── profil/      # Foto anggota kelompok
├── index.html       # Halaman Utama (Pengendali Mood)
├── music.html       # Halaman Musik
├── video.html       # Halaman Video
├── quotes.html      # Halaman Quotes
├── about.html       # Halaman Deskripsi Website
├── form.html        # Halaman Laporan
├── style.css        # Styling utama & Logika Tampilan
├── script.js        # Logika Memori & Navigasi Hash
└── README.md        # Dokumentasi Proyek
```

## 🚀 Cara Menjalankan

1. Pastikan seluruh folder assets sudah terisi dengan gambar, audio (.mp3), dan video (.mp4) yang sesuai.

2. Buka file index.html menggunakan web browser modern (Chrome/Edge/Firefox).

3. Pilih salah satu kartu Emosi di halaman Console.

4. Jelajahi menu Musik, Video, atau Quotes di navigasi atas.

## 👥 Anggota Kelompok 6

1. Angel 

2. Rahma 

3. Gabriel 

4. Adeptri 

5. Kezia

Dibuat untuk memenuhi tugas Praktikum Pemrograman Web I.


