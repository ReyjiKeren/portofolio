import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTiktok } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center py-24 px-6 relative z-10 bg-gradient-to-b from-transparent to-zinc-950">
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-10"
            >
                <h2 className="text-5xl md:text-8xl font-bold tracking-tighter mix-blend-difference">Mari berkarya bersama.</h2>
                <p className="text-zinc-400 text-xl font-light max-w-xl mx-auto">Terbuka untuk kolaborasi, proyek freelance, dan peluang penuh waktu.</p>

                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:contactreyji@gmail.com"
                    className="inline-block mt-8 bg-white text-black px-12 py-5 rounded-full text-xl font-medium hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
                >
                    Hubungi Saya
                </motion.a>

                <div className="flex justify-center gap-10 pt-16">
                    {[
                        { icon: FaGithub, href: "https://github.com/ReyjiKeren", label: "GitHub" },
                        { icon: FaInstagram, href: "https://www.instagram.com/reywrnyktm?igsh=MW54a3Q4amRkOXMzYg==", label: "Instagram" },
                        { icon: FaTiktok, href: "https://www.tiktok.com/@omgaringg?_r=1&_t=ZS-92LmWWXHudu", label: "TikTok" },
                    ].map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -5, color: '#fff' }}
                            className="text-3xl text-zinc-500 transition-colors"
                            aria-label={item.label}
                        >
                            <item.icon />
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            <footer className="absolute bottom-8 text-zinc-700 text-xs md:text-sm tracking-wide">
                &copy; {new Date().getFullYear()} Dibuat oleh Reyji Wiranayakatama Jizenji Menggunakan Google Antigravity
            </footer>
        </section>
    );
};

export default Contact;
