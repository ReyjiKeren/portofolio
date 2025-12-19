import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [200, -200]);

    // Personal Data
    const bioData = {
        name: "Reyji Wiranayakatama Jizenji",
        age: "17 Tahun",
        location: "Indonesia",
        email: "hello@example.com",
        role: "Pelajar"
    };

    const skills = [
        "ReactJS", "TypeScript", "Next.js", "Tailwind CSS",
        "Framer Motion", "Node.js", "UI/UX Design", "Figma",
        "Git", "Clean Architecture", "Accessibility", "SEO"
    ];

    return (
        <section id="about" ref={containerRef} className="min-h-screen py-24 px-6 md:px-12 relative z-10 overflow-hidden bg-zinc-950">

            <div className="absolute top-20 right-0 w-full flex justify-end pointer-events-none opacity-[0.05]">
                <motion.div style={{ y: yText }} className="text-[15vw] font-bold leading-none text-white whitespace-nowrap blur-sm">
                    PROFILE
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">

                {/* ID Card Style Section */}
                <div className="bg-zinc-900/40 border border-white/5 rounded-3xl p-8 md:p-12 mb-20 backdrop-blur-md">
                    <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
                        {/* Avatar / Photo Placeholder */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-zinc-800 overflow-hidden border-2 border-white/10 shrink-0"
                        >
                            <img src="/Profil.jpeg" alt="Profile" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                        </motion.div>

                        <div className="space-y-6 flex-1 text-center md:text-left">
                            <div>
                                <h3 className="text-zinc-500 text-sm tracking-widest uppercase mb-2">Hello, I am</h3>
                                <h2 className="text-4xl md:text-6xl font-bold text-white">{bioData.name}</h2>
                                <p className="text-xl text-zinc-400 mt-2 font-light">{bioData.role} • {bioData.age}</p>
                            </div>

                            <p className="text-lg text-zinc-300 leading-relaxed max-w-2xl font-light">
                                "Saya adalah pelajar yang memiliki minat pada pengembangan web dan desain antarmuka, serta tertarik mempelajari photography dan videography. Saya senang menggabungkan visual yang kuat dengan teknologi untuk menciptakan pengalaman digital yang rapi, modern, dan komunikatif. Saat ini saya terus mengembangkan keterampilan melalui proyek kreatif dan pembelajaran mandiri."
                            </p>

                            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                                <span className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-400 text-xs uppercase tracking-wider">Available for work</span>
                                <span className="px-4 py-2 rounded-full border border-zinc-700 text-zinc-400 text-xs uppercase tracking-wider">Remote / On-site</span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default About;
