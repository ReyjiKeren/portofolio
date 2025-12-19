import { useState } from 'react';
import { motion } from 'framer-motion';

const items = [
    {
        id: 'about',
        title: 'Tentang Saya',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=60&w=1200&auto=format&fit=crop', // Monochrome portrait capable
    },
    {
        id: 'experience',
        title: 'Experience',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=60&w=1200&auto=format&fit=crop', // Workspace
    },
    {
        id: 'projects',
        title: 'Proyek',
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=60&w=1200&auto=format&fit=crop', // Tech/Code
    },
    {
        id: 'contact',
        title: 'Kontak',
        image: 'https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=60&w=1200&auto=format&fit=crop', // Contact
    },
];

const FlowingMenu = ({ onSelect }) => {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <section className="h-screen w-full flex flex-col justify-center items-center bg-black overflow-hidden relative z-20">
            <h2 className="absolute top-12 left-1/2 -translate-x-1/2 text-zinc-700 text-xs tracking-[0.3em] uppercase">Menu</h2>

            <div className="flex flex-col gap-2 w-full max-w-4xl px-4">
                {items.map((item, i) => (
                    <motion.div
                        key={item.id}
                        custom={i}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: (i) => ({
                                opacity: 1,
                                y: 0,
                                transition: {
                                    delay: i * 0.1,
                                    duration: 0.6,
                                    ease: [0.22, 1, 0.36, 1]
                                }
                            })
                        }}
                        initial="hidden"
                        animate="visible"
                        layout
                        onClick={() => onSelect(item.id)}
                        onHoverStart={() => setHoveredId(item.id)}
                        onHoverEnd={() => setHoveredId(null)}
                        className={`relative h-20 md:h-24 flex items-center justify-center cursor-pointer rounded-full overflow-hidden border border-zinc-800 transition-all duration-500 ease-out`}
                        style={{
                            flexGrow: hoveredId === item.id ? 2 : 1,
                            opacity: hoveredId && hoveredId !== item.id ? 0.3 : 1
                        }}
                    >
                        {/* Background Image (Revealed on Hover) */}
                        <motion.div
                            className="absolute inset-0 z-0 bg-cover bg-center grayscale"
                            style={{ backgroundImage: `url(${item.image})` }}
                            initial={{ opacity: 0, scale: 1.2 }}
                            animate={{
                                opacity: hoveredId === item.id ? 0.6 : 0,
                                scale: hoveredId === item.id ? 1 : 1.2
                            }}
                            transition={{ duration: 0.5 }}
                        />

                        {/* Overlay for readability */}
                        <div className="absolute inset-0 bg-black/20 z-0" />

                        <motion.h3
                            layout="position"
                            className={`z-10 text-2xl md:text-5xl font-bold tracking-tight uppercase mix-blend-screen transition-colors duration-300 ${hoveredId === item.id ? 'text-white' : 'text-zinc-600'}`}
                        >
                            {item.title}
                        </motion.h3>
                    </motion.div>
                ))}
            </div>

            <div className="absolute bottom-12 text-zinc-700 text-xs">
                Pilih menu untuk melanjutkan
            </div>
        </section>
    );
};

export default FlowingMenu;
