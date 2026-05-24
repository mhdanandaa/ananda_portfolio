# 🌸 Dreamy Pastel Developer Portfolio

**Tech Stack:** React.js · Tailwind CSS · Framer Motion  
**Theme:** Cinematic · Dreamy · Pastel · Premium · Modern

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Jalankan development server
npm start

# 3. Build untuk production
npm run build
```

> **Requires:** Node.js 16+ dan npm 8+

---

## 📁 Folder Structure

```
dreamy-portfolio/
├── public/
│   ├── index.html
│   └── images/              ← Taruh gambar project di sini
│       ├── project1.png
│       ├── project2.png
│       ├── project3.png
│       └── photo.jpg        ← Foto profil kamu
│
├── src/
│   ├── App.jsx              ← Root component
│   ├── index.js             ← Entry point
│   ├── index.css            ← Global styles + Tailwind
│   │
│   ├── data/
│   │   └── portfolio.js     ← 🎯 EDIT KONTEN DI SINI
│   │
│   ├── hooks/
│   │   ├── useTypingEffect.js    ← Typing animation
│   │   ├── useScrollReveal.js    ← Scroll reveal
│   │   └── useActiveSection.js   ← Nav active state
│   │
│   └── components/
│       ├── ui/
│       │   ├── Navbar.jsx        ← Navigasi sticky
│       │   ├── Footer.jsx        ← Footer minimal
│       │   ├── RevealWrapper.jsx ← Scroll animation wrapper
│       │   └── SectionHeader.jsx ← Reusable section header
│       │
│       └── sections/
│           ├── Hero.jsx          ← Hero fullscreen
│           ├── About.jsx         ← About me
│           ├── Skills.jsx        ← Skills grid
│           ├── Projects.jsx      ← Projects showcase
│           ├── Experience.jsx    ← Timeline experience
│           └── Contact.jsx       ← Contact section
│
├── tailwind.config.js       ← Konfigurasi Tailwind + warna pastel
└── package.json
```

---

## ✏️ Cara Customize

### 1. Edit Konten (WAJIB)
Buka `src/data/portfolio.js` dan edit semua data:

```js
export const personal = {
  name: "Nama Kamu",        // ← Nama lengkap
  email: "kamu@email.com",  // ← Email
  github: "https://...",    // ← GitHub URL
  linkedin: "https://...",  // ← LinkedIn URL
  bio: "Deskripsi singkat tentang kamu...",
  photo: "/images/photo.jpg", // ← Uncomment setelah tambah foto
};
```

### 2. Tambah Foto Profil
Taruh foto di `public/images/photo.jpg`, lalu di `portfolio.js`:
```js
photo: "/images/photo.jpg",
```

### 3. Tambah Gambar Project
Taruh di `public/images/`:
- `project1.png` → Keraton Kasepuhan
- `project2.png` → Wisata Gunung Puntang  
- `project3.png` → Sistem Login

### 4. Tambah CV
Taruh CV kamu di `public/cv-arka-pratama.pdf` (ganti nama sesuai `portfolio.js`)

### 5. Tambah Project Baru
Di `portfolio.js`, tambah object baru ke array `projects`:
```js
{
  id: 4,
  number: "04",
  title: "Nama Project Baru",
  description: "Deskripsi project...",
  image: "/images/project4.png",
  emoji: "🚀",
  tech: ["React.js", "Node.js"],
  liveUrl: "https://demo.com",
  githubUrl: "https://github.com/...",
}
```

---

## 🎨 Color Palette

| Warna       | Variable Tailwind | Hex         |
|-------------|-------------------|-------------|
| Lavender    | `lav-500`         | `#7c6bbf`   |
| Lavender Lt | `lav-200`         | `#d4caf4`   |
| Mint        | `mint-300`        | `#8ed4b8`   |
| Sky Blue    | `sky-200`         | `#b8d8f4`   |
| Rose        | `rose-100`        | `#f4dce8`   |
| Cream       | `cream`           | `#faf8f4`   |
| Ink Dark    | `ink`             | `#2c2840`   |

---

## 🧩 Menambah Section Baru

1. Buat file baru: `src/components/sections/NamaSection.jsx`
2. Import di `src/App.jsx`
3. Tambahkan `<NamaSection />` di dalam `<main>`

---

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^11.0.0",
  "gsap": "^3.12.0",
  "react-scripts": "5.0.1"
}
```

---

Made with 🌸 · Dreamy Pastel Portfolio 2026
