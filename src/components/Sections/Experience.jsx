import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Experience = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [100, -100]);

    const education = [
        {
            year: "2024 - Sekarang",
            institution: "SMK Taruna Bangsa",
            degree: "Jurusan : Rekayasa Perangkat Lunak",
            desc: "Rekayasa Perangkat Lunak (RPL) dengan fokus pada pengembangan website dan aplikasi sederhana. Terbiasa membuat proyek menggunakan HTML, CSS, JavaScript, serta memahami dasar logika pemrograman."
        }
    ];

    const activeExperience = [
        {
            year: "3 Bulan",
            institution: "Universitas Pelita Bangsa Bekasi",
            degree: "Praktik Kerja Lapangan (PKL)",
            desc: "Saat ini sedang menjalani Praktik Kerja Lapangan (PKL) di Universitas Pelita Bangsa Bekasi."
        }
    ];

    const organization = [
        {
            role: "Anggota",
            org: "English Corner",
            period: "2025 - Sekarang",
            desc: "Aktif mengikuti kegiatan English Corner untuk melatih kemampuan komunikasi Bahasa Inggris melalui diskusi, praktik berbicara, dan kerja tim dalam berbagai aktivitas."
        }
    ];

    return (
        <section id="experience" ref={containerRef} className="min-h-screen py-24 px-6 md:px-12 relative z-10 bg-zinc-950/50 backdrop-blur-sm">
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-full flex justify-end pointer-events-none opacity-[0.03]">
                <motion.div style={{ y: yText }} className="text-[12vw] font-bold leading-none text-white whitespace-nowrap blur-sm">
                    JOURNEY
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold mb-20 text-white tracking-tighter"
                >
                    Pengalaman & Pendidikan
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Education Column */}
                    <div className="space-y-16">
                        {/* Education Section */}
                        <div>
                            <h3 className="text-2xl text-zinc-300 font-medium mb-8 flex items-center gap-3">
                                <span className="w-2 h-2 bg-white rounded-full" /> Pendidikan
                            </h3>
                            <div className="space-y-12 border-l border-zinc-800 pl-8 ml-1">
                                {education.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        className="relative"
                                    >
                                        <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-600" />
                                        <span className="text-zinc-500 text-sm font-mono mb-2 block">{item.year}</span>
                                        <h4 className="text-xl text-white font-semibold">{item.institution}</h4>
                                        <p className="text-zinc-400 font-medium mb-2">{item.degree}</p>
                                        <p className="text-zinc-500 font-light text-sm leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* On Going Section */}
                        <div>
                            <h3 className="text-2xl text-zinc-300 font-medium mb-8 flex items-center gap-3">
                                <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.5)]" /> On Going
                            </h3>
                            <div className="space-y-12 border-l border-zinc-800 pl-8 ml-1">
                                {activeExperience.map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.2 }}
                                        className="relative"
                                    >
                                        <div className={`absolute -left-[37px] top-1 w-4 h-4 rounded-full border ${item.year === '3 Bulan' ? 'bg-green-500 border-green-400 shadow-[0_0_10px_rgba(74,222,128,0.5)]' : 'bg-zinc-900 border-zinc-600'}`} />
                                        <span className={`${item.year === '3 Bulan' ? 'text-green-400' : 'text-zinc-500'} text-sm font-mono mb-2 block`}>{item.year}</span>
                                        <h4 className="text-xl text-white font-semibold">{item.institution}</h4>
                                        <p className="text-zinc-400 font-medium mb-2">{item.degree}</p>
                                        <p className="text-zinc-500 font-light text-sm leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Organization Column */}
                    <div>
                        <h3 className="text-2xl text-zinc-300 font-medium mb-8 flex items-center gap-3">
                            <span className="w-2 h-2 bg-white rounded-full" /> Organisasi
                        </h3>
                        <div className="space-y-12 border-l border-zinc-800 pl-8 ml-1">
                            {organization.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.2 }}
                                    className="relative"
                                >
                                    <div className="absolute -left-[37px] top-1 w-4 h-4 rounded-full bg-zinc-900 border border-zinc-600" />
                                    <span className="text-zinc-500 text-sm font-mono mb-2 block">{item.period}</span>
                                    <h4 className="text-xl text-white font-semibold">{item.org}</h4>
                                    <p className="text-zinc-400 font-medium mb-2">{item.role}</p>
                                    <p className="text-zinc-500 font-light text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
