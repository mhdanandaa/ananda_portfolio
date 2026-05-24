// ============================================================
//  data/portfolio.js
//  Edit semua konten portfolio kamu di sini ✨
// ============================================================

export const personal = {
  name: "Mhd. Ananda Ridho Alfadillah", // ← Ganti nama kamu
  nameFirst: "Mhd. Ananda Ridho",
  nameLast: "Alfadillah",
  role: "Front-End Developer",
  email: "fadil.fadil072017@gmail.com@email.com", // ← Ganti email kamu
  location: "Bandung, Indonesia",
  university: "Telkom University — Bandung, Indonesia",
  degree: "S1 Informatika",
  github: "https://github.com/mhdanandaa", // ← Ganti username
  linkedin: "https://www.linkedin.com/in/alfadillahanandaa/", // ← Ganti
  twitter: "https://twitter.com/arkap", // ← Ganti
  cvUrl: "/cv_ananda.pdf", // ← Taruh CV di /public/
  bio: "Alumni D3 Rekayasa Perangkat Lunak Aplikasi di Telkom University yang saat ini menempuh program ekstensi S1 Informatika. Memiliki pengalaman dalam pengembangan perangkat lunak, khususnya front-end web development, serta pengembangan aplikasi desktop dan mobile. Terbiasa menggunakan React.js, Tailwind CSS, dan Kotlin dalam pengembangan antarmuka aplikasi yang responsif dan intuitif.",
  photo: "/images/Foto.jpg", // Ganti dengan "/images/photo.jpg" setelah taruh foto di /public/images/
};

export const typingPhrases = [
  "Front-End Developer",
  "React Developer",
  "UI Designer & Implementor",
];

export const skills = [
  { name: "React.js", emoji: "⚛️", category: "Framework" },
  { name: "JavaScript", emoji: "🟨", category: "Language" },
  { name: "Tailwind CSS", emoji: "🌊", category: "Styling" },
  { name: "HTML5", emoji: "🏗️", category: "Markup" },
  { name: "CSS3", emoji: "🎨", category: "Styling" },
  { name: "Chart.js", emoji: "📊", category: "Visualization" },
  { name: "Mapbox", emoji: "🌍", category: "Viusalization" },
  { name: "REST API", emoji: "🔗", category: "Integration" },
  { name: "MySQL", emoji: "🗄️", category: "Database" },
  { name: "SQLite", emoji: "💾", category: "Database" },
  { name: "GitHub", emoji: "🐙", category: "Version Control" },
];

export const projects = [
  {
    id: 1,
    number: "01",
    title: "Website Visualisasi Data Keraton Kasepuhan Cirebon",
    description:
      "Platform visualisasi data interaktif yang menampilkan informasi tren kunjungan wisatawan Keraton Kasepuhan Cirebon dalam bentuk yang modern dan mudah dipahami oleh pihak keraton",
    image: "/images/Keraton.png", // ← Taruh gambar di /public/images/
    gradient: "from-lav-200 via-sky-200 to-mint-200",
    tech: ["React.js", "Chart.js", "Mapbox GL JS", "Tailwind CSS", "REST API"],
    liveUrl: "#", // ← Ganti link demo
    githubUrl: "#", // ← Ganti link repo
  },
  {
    id: 2,
    number: "02",
    title: "Website Wisata Gunung Puntang",
    description:
      "Website pariwisata digital untuk Gunung Puntang yang menampilkan informasi destinasi, galeri foto, rute perjalanan, dan panduan wisata dengan desain yang fresh dan immersive.",
    image: "/images/Puntang.png",
    gradient: "from-mint-200 via-sky-100 to-lav-200",
    tech: ["React.js", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    number: "03",
    title: "Website Peternak Web",
    description:
      "Platform berbasis web yang menyediakan jalur dan video pembelajaran pemrograman website. Dibuat untuk membantu orang-orang yang ingin belajar pemrograman website  mulai dari level dasar hingga lanjutan, secara gratis.",
    image: "/images/pw.png",
    gradient: "from-rose-100 via-lav-100 to-sky-100",
    tech: ["Laravel", "Tailwind CSS", "REST API", "UI Designer"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    number: "04",
    title: "Aplikasi MyLaundry",
    description:
      "Aplikasi mobile yang dirancang khusus untuk membantu mitra laundry dalam mengelola keuangan dan transaksi mereka. Dengan fitur-fitur yang intuitif dan mudah digunakan, aplikasi ini bertujuan untuk menghilangkan kebingungan dan kesulitan dalam pengelolaan keuangan sehari-hari.",
    image: "/images/Laundry.png",
    gradient: "from-rose-100 via-lav-100 to-sky-100",
    tech: ["Kotlin", "Jetpack Compose", "UI Designer"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    number: "05",
    title: "Aplikasi Rhino Pizza",
    description:
      "Aplikasi desktop yang dirancang khusus untuk memudahkan pemesanan pizza secara online. Dengan aplikasi ini, konsumen dapat menghemat waktu dan menghindari penundaan yang tidak perlu.",
    image: "/images/Rhino.png",
    gradient: "from-rose-100 via-lav-100 to-sky-100",
    tech: ["Java", "Swing", "UI Designer"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const education = [
  {
    id: 1,
    period: "2025 — Present",
    role: "S1 Informatika",
    gpa: "3.90",
    institue: "Telkom University",
    description:
      "Berfokus pada pengembangan software, frontend modern, dan eksplorasi data visualization.",
  },
  {
    id: 2,
    period: "2022 — 2025",
    role: "D3 Rekayasa Perangkat Lunak Aplikasi",
    gpa: "3.93",
    institue: "Telkom University",
    description:
      "Mempelajari pengembangan aplikasi, web development, serta dasar perancangan sistem dan antarmuka pengguna.",
  },
];
export const experience = [
  {
    id: 1,
    period: "Agustus 2024 — Juni 2025",
    role: "Front-End Developer",
    company: "Center of Excellence Smart Tourism & Hospitality",
    description:
      "Melakukan riset teknologi untuk pengembangan aplikasi dan website di bidang smart tourism & hospitality.Mengembangkan frontend website berbasis React.js untuk kebutuhan smart tourism & hospitality. Berfokus pada perancangan UI responsif, implementasi fitur interaktif, serta optimasi performa aplikasi melalui kolaborasi bersama tim pengembang.",
  },
  {
    id: 2,
    period: "November 2022 — September 2023",
    role: "Member of Web Development",
    company: "Chevalier Lab, Telkom University",
    description:
      "Mempelajari dasar pengembangan website menggunakan HTML, CSS, JavaScript, dan React.js. Mengembangkan proyek portfolio berbasis Bootstrap untuk memperkuat kemampuan frontend development.",
  },
];
