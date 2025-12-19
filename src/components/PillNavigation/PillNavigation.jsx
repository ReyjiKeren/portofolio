import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const sections = [
    { id: 'home', label: 'Beranda' },
    { id: 'projects', label: 'Proyek' },
    { id: 'about', label: 'Tentang' },
    { id: 'contact', label: 'Kontak' },
];

const PillNavigation = () => {
    const [activeTab, setActiveTab] = useState('home');

    // Simple scroll spy logic remains same
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveTab(section.id);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setActiveTab(id);
    }

    // Animation variants for the staggered entrance
    const navContainerVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.5,
                staggerChildren: 0.1,
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const navItemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 20 } }
    };

    return (
        <>
            {/* Desktop Floating Pill - Enhanced Flowing Animation */}
            <motion.div
                className="fixed top-8 left-1/2 -translate-x-1/2 z-50 hidden md:block"
                initial="hidden"
                animate="visible"
                variants={navContainerVariants}
            >
                <nav className="flex items-center bg-zinc-900/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-2xl relative overflow-hidden">
                    {/* Subtle flowing background effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12"
                        animate={{ x: ['-200%', '200%'] }}
                        transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                    />

                    {sections.map((section) => (
                        <motion.button
                            key={section.id}
                            variants={navItemVariants}
                            onClick={() => scrollTo(section.id)}
                            className="relative px-5 py-2 text-sm font-medium transition-colors z-10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {activeTab === section.id && (
                                <motion.div
                                    layoutId="activePill"
                                    className="absolute inset-0 bg-white rounded-full mix-blend-difference"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className={`relative z-10 transition-colors duration-200 ${activeTab === section.id ? 'text-black' : 'text-zinc-400 hover:text-white'}`}>
                                {section.label}
                            </span>
                        </motion.button>
                    ))}
                </nav>
            </motion.div>

            {/* Mobile Bottom Bar - Similar logic */}
            <motion.div
                className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 block md:hidden w-[90%] max-w-sm"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
            >
                <nav className="flex justify-between items-center bg-zinc-900/90 backdrop-blur-md border border-white/10 rounded-full p-2 shadow-2xl">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            onClick={() => scrollTo(section.id)}
                            className={`flex-1 text-xs font-medium py-3 rounded-full transition-all relative ${activeTab === section.id ? 'text-black' : 'text-zinc-400'}`}
                        >
                            {activeTab === section.id && (
                                <motion.div
                                    layoutId="activePillMobile"
                                    className="absolute inset-0 bg-white rounded-full"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                />
                            )}
                            <span className="relative z-10">{section.label}</span>
                        </button>
                    ))}
                </nav>
            </motion.div>
        </>
    );
};

export default PillNavigation;
