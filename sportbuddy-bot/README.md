# SportBuddy AI 

SportBuddy adalah aplikasi asisten *chat* berbasis AI (*Artificial Intelligence*) yang bertindak sebagai pelatih olahraga pribadi dan pakar nutrisi. Aplikasi ini menggunakan model mutakhir **Google Gemini 2.5 Flash** untuk menyajikan saran latihan interaktif dan rekomendasi nutrisi.

## Fitur Utama

- **Pakar Kebugaran Pribadi AI**: Dapatkan rutinitas latihan instan yang disesuaikan dengan tujuan Anda.
- **Saran Nutrisi**: Tanya rekomendasi makanan sehat atau strategi *bulking/cutting*.
- **Quick Prompts**: Akses satu sentuhan (*1-click*) untuk contoh template latihan (*Lari 5K*, *Latihan Dada*, dll).
- **Desain Modern (Sporty/Dark)**: Antarmuka *chat* bergaya atletik *dark mode* dengan aksen *neon green*.
- **Optimistic UI Auto-scroll**: Setiap *chat* tervisualisasikan secara mulus tanpa *lag*.

## Tech Stack (Standar Industri)

- **Frontend**: React 19 (dibangun melalui [Vite](https://vitejs.dev/)).
- **Styling**: Tailwind CSS v4 (menggunakan skema warna *Oswald* & *Inter* fonts).
- **Integrasi AI**: `@google/generative-ai` (Model `gemini-2.5-flash`).
- **Icons**: `lucide-react`.

##  Struktur Folder Proyek

```plaintext
sportbuddy-bot/
├── public/                 # Aset publik
├── src/
│   ├── components/         # Modul UI spesifik yang reusable
│   │   ├── ChatInput.jsx       # Logika form input & handler kirim 
│   │   ├── Header.jsx          # Baris identitas aplikasi atas
│   │   ├── MessageBubble.jsx   # Komponen grafis individual chat
│   │   └── QuickPrompts.jsx    # Kumpulan tombol pemicu cepat
│   ├── hooks/
│   │   └── useChat.js          # Custom React Hook: state & logika scroll
│   ├── services/
│   │   └── geminiService.js    # Konfigurasi SDK & abstraksi panggilan API 
│   ├── App.jsx             # Root view yang menghubungkan semuan komponen
│   ├── index.css           # Global entry config (Tailwind initialization)
│   └── main.jsx            # React root mount
├── .env                    # (Gitignored) Menyimpan API Key
├── .env.example            # Template format variabel Lingkungan
└── package.json            # Daftar dependencies NPM
```

##  Cara Setup & Instalasi Lokal

1. **Pastikan Node.js terinstall.** (direkomendasikan v18+).
2. Tuju folder repositori proyek ini:
   ```bash
   cd sportbuddy-bot
   ```
3. Install *dependencies* menggunakan:
   ```bash
   npm install
   ```
4. **Setup Environment Configuration:**
   - Salin file template `.env.example` lalu *rename* (atau buat file baru bernama) `.env`.
   - Buka file `.env` dan masukkan Google API Key milik Anda. (Dapatkan di [Google AI Studio](https://aistudio.google.com/)).
   ```env
   VITE_API_KEY="AIzaSyXXXXXXXXXXXXXXXXXXXXXX"
   ```
5. Jalankan lokal Development Server:
   ```bash
   npm run dev
   ```
   Aplikasi bisa diakses di `http://localhost:5173`. 

## Saran Skalabilitas & Maintainability (Untuk Production)

Proyek ini telah direfactor dengan pendekatan *Clean Architecture* sederhana:
- Komponen Antarmuka (UI/`components/`) sudah dipisah dari logika koneksi API (`services/`). Hal ini mempermudah penggantian penyedia AI di masa depan tanpa harus memecah kode tampilan UI.
- State (*hooks/useChat.js*) terpisah dari View (`App.jsx`) sehingga mencegah duplikasi kode untuk pelacakan *history message* (*Separation of Concerns*). 
- **Security Check:** Saat ini *service* berjalan pada *Client-Side* (*browser-only*). Secara teknis, `.env` yang digunakan bisa terbaca di tab DevTools (*inspect element*). Untuk implementasi produksi akhir yang disebarkan publik (*deployment* internet), panggil `/services/geminiService.js` melalui lapisan server mandiri *Back-end* (Node/Express, dsb) agar *API Key* tersegel sepenuhnya di lingkup backend.
