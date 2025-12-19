export const projects = [
    // Website Projects
    {
        id: 1,
        title: "Website Kampus Pelita Bangsa Bekasi",
        description: "Website Universitas Pelita Bangsa Bekasi, menampilkan informasi kampus dan akademik.",
        tech: ["HTML", "CSS", "JavaScript"],
        image: "/images/upb-project.png",
        link: "https://upb-eight.vercel.app",
        category: "Website Project"
    },
    {
        id: 2,
        title: "Explore Nusantara",
        description: "Platform informasi destinasi wisata dengan tampilan modern dan responsif. Ini website yang saya buat pertama kali.",
        tech: ["HTML", "CSS", "TailwindCSS"],
        image: "/images/explore-nusantara.png",
        link: "https://wisata-jet.vercel.app",
        category: "Website Project"
    },


    // Photography Content
    // Photography Content
    {
        id: 10,
        title: "Galeri",
        description: "Kumpulan momen yang saya abadikan. Klik untuk melihat galeri lengkap.",
        tech: ["Sony Alpha", "Lightroom", "14 Photos"],
        image: "/images/photography/DSCF5066 (1).jpg",
        link: "#",
        category: "Photography Content",
        gallery: [
            "DSCF5066 (1).jpg", "DSCF5108 (1).jpg", "DSCF5115 (1).jpg", "DSCF5126.jpg", "DSCF5128 (1).jpg",
            "DSCF5135 (1).jpg", "DSCF5139.jpg", "WhatsApp Image 2025-12-19 at 17.25.27 (1).jpeg",
            "WhatsApp Image 2025-12-19 at 17.25.27 (2).jpeg", "WhatsApp Image 2025-12-19 at 17.25.27.jpeg",
            "WhatsApp Image 2025-12-19 at 17.25.28 (1).jpeg", "WhatsApp Image 2025-12-19 at 17.25.28 (2).jpeg",
            "WhatsApp Image 2025-12-19 at 17.25.28 (3).jpeg", "WhatsApp Image 2025-12-19 at 17.25.28.jpeg"
        ].map(file => `/images/photography/${file}`)
    },

    // Konten Kreator
    // Konten Kreator
    {
        id: 20,
        title: "OmGaring - Gaming Channel",
        description: "Saluran YouTube tempat saya berbagi momen gaming seru dan lucu. Jangan lupa like, comment, dan subscribe!",
        tech: ["Gaming", "Video Editing", "Content Creation"],
        image: "/images/omgaring-channel.png",
        link: "https://www.youtube.com/@OmGaring",
        category: "Konten Kreator"
    }
];
