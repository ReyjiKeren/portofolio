import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { projects } from '../../data/projects';
import { IoCloseOutline } from 'react-icons/io5';

const Projects = () => {
    const [selectedId, setSelectedId] = useState(null);
    const [activeCategory, setActiveCategory] = useState("Website Project");

    const categories = ["Website Project", "Photography Content", "Konten Kreator"];

    const filteredProjects = projects.filter(project => project.category === activeCategory);
    const selectedProject = projects.find(p => p.id === selectedId);

    const categoryDescriptions = {
        "Website Project": "Ini adalah koleksi website yang saya buat untuk belajar dan mengasah keterampilan pemrograman. Saya terus mengeksplorasi teknologi baru demi menciptakan antarmuka yang tidak hanya fungsional, tetapi juga memberikan pengalaman pengguna yang baik.",
        "Photography Content": "Fotografi adalah cara saya merekam jejak waktu dan perasaan. Berikut adalah hasil eksplorasi visual saya, menangkap keindahan dalam momen-momen sederhana.",
        "Konten Kreator": "Selain fokus pada pengembangan website dan fotografi, saya juga gemar membuat konten gaming. Saya merekam dan membagikan momen-momen seru serta lucu saat bermain game di saluran YouTube saya."
    };

    return (
        <section id="projects" className="min-h-screen py-24 px-4 md:px-12 relative z-10 bg-zinc-950">
            <motion.h2
                className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                Karya Pilihan
            </motion.h2>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full text-sm uppercase tracking-wider border transition-all duration-300 
                        ${activeCategory === category
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600 hover:text-white'}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Dynamic Category Description */}
            <div className="max-w-3xl mx-auto text-center mb-16 h-auto min-h-[4rem]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <p className="text-zinc-300 text-lg mb-6 leading-relaxed">
                            {categoryDescriptions[activeCategory]}
                        </p>

                        {/* Special Hook for Photography */}
                        {activeCategory === "Photography Content" && (
                            <div className="flex justify-center">
                                <a
                                    href="https://www.instagram.com/reywrnyktm?igsh=MW54a3Q4amRkOXMzYg=="
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 font-medium transition-colors border border-pink-500/30 px-6 py-2 rounded-full hover:bg-pink-500/10"
                                >
                                    <span>Lihat selengkapnya di Instagram</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                </a>
                            </div>
                        )}

                        {/* Special Hook for Konten Kreator */}
                        {activeCategory === "Konten Kreator" && (
                            <div className="flex justify-center">
                                <a
                                    href="https://www.youtube.com/@OmGaring"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium transition-colors border border-red-500/30 px-6 py-2 rounded-full hover:bg-red-500/10"
                                >
                                    <span>Kunjungi Channel YouTube</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                                </a>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <motion.div
                layout
                className="flex flex-wrap justify-center gap-8 max-w-7xl mx-auto"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project) => {
                        // Special Expanded View for Konten Kreator
                        if (activeCategory === "Konten Kreator") {
                            return (
                                <motion.div
                                    key={project.id}
                                    layoutId={`card-${project.id}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 20 }}
                                    className="w-full max-w-2xl bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 shadow-2xl mx-auto"
                                >
                                    <div className="w-full h-auto">
                                        <img src={project.image} alt={project.title} className="w-full h-auto object-cover" />
                                    </div>
                                    <div className="p-8 md:p-10 text-center">
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h3>
                                        <p className="text-zinc-500 font-mono text-sm mb-6">{project.tech.join(" + ")}</p>
                                        <p className="text-zinc-300 text-lg leading-relaxed mb-8">{project.description}</p>


                                    </div>
                                </motion.div>
                            );
                        }

                        // Standard Card for other categories
                        return (
                            <motion.div
                                key={project.id}
                                layoutId={`card-${project.id}`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => setSelectedId(project.id)}
                                className="group relative w-full max-w-[500px] h-[300px] md:h-[400px] bg-zinc-900 rounded-3xl overflow-visible cursor-pointer border border-white/5 hover:border-white/20 transition-all"
                                whileHover={{ y: -5 }}
                            >
                                {/* Premium Stack Design for Gallery */}
                                {project.gallery ? (
                                    <div className="absolute inset-0 z-0">
                                        {/* Calculated rotations for a natural "tossed" look */}
                                        {[
                                            { rotate: -6, z: 0, scale: 0.95 },
                                            { rotate: 6, z: 10, scale: 0.97 },
                                            { rotate: -3, z: 20, scale: 0.98 }
                                        ].map((style, i) => (
                                            <motion.div
                                                key={i}
                                                className="absolute inset-4 bg-zinc-800 rounded-2xl border border-white/10 shadow-2xl overflow-hidden grayscale"
                                                initial={{ rotate: style.rotate, scale: style.scale }}
                                                whileHover={{
                                                    rotate: style.rotate * 1.5,
                                                    scale: style.scale + 0.02,
                                                    translateY: -10
                                                }}
                                                transition={{ duration: 0.4, ease: "easeOut" }}
                                                style={{ zIndex: style.z }}
                                            >
                                                {/* Preview images from gallery if available, else main image */}
                                                <img
                                                    src={project.gallery[i % project.gallery.length]}
                                                    alt="Stack Preview"
                                                    className="w-full h-full object-cover opacity-50"
                                                />
                                            </motion.div>
                                        ))}

                                        {/* Main Top Card */}
                                        <div className="absolute inset-0 z-30 transition-transform duration-300 group-hover:-translate-y-4">
                                            <div className="w-full h-full bg-zinc-900 rounded-3xl overflow-hidden border border-white/20 shadow-2xl relative">
                                                <img
                                                    src={project.image}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                                />

                                                {/* Overlay Content */}
                                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500 flex flex-col items-center justify-center p-6 text-center backdrop-blur-[2px] group-hover:backdrop-blur-none">
                                                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">Lihat Galeri</h3>
                                                    <p className="text-zinc-300 text-sm font-light">14 Foto</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    /* Standard Image Card (Web Projects) */
                                    <>
                                        <div className="absolute inset-0 bg-zinc-800 group-hover:bg-zinc-700 transition-colors duration-500 overflow-hidden rounded-3xl">
                                            <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0" />
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 rounded-3xl" />

                                        <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                            <motion.h3 className="text-3xl font-semibold mb-2 text-white">{project.title}</motion.h3>
                                            <p className="text-zinc-400 text-sm uppercase tracking-wider">{project.tech.join(" • ")}</p>
                                        </div>
                                    </>
                                )}
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </motion.div>

            <AnimatePresence>
                {selectedId && (
                    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            layoutId={`card-${selectedId}`}
                            className={`w-full max-w-6xl bg-zinc-900 rounded-3xl overflow-hidden relative z-10 border border-white/10 flex flex-col shadow-2xl ${selectedProject.gallery ? 'h-[90vh]' : 'max-h-[90vh] md:flex-row'}`}
                        >
                            <button
                                onClick={(e) => { e.stopPropagation(); setSelectedId(null); }}
                                className="absolute top-4 right-4 z-50 bg-black/50 p-2 rounded-full hover:bg-white hover:text-black transition-colors"
                            >
                                <IoCloseOutline size={24} color='white' />
                            </button>

                            {/* Gallery Mode */}
                            {selectedProject.gallery ? (
                                <div className="flex flex-col h-full">
                                    {/* Header & Description */}
                                    <div className="p-8 md:p-10 border-b border-zinc-800 bg-zinc-950/50 backdrop-blur-sm shrink-0">
                                        <div className="max-w-3xl">
                                            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">{selectedProject.title}</h2>
                                            <p className="text-zinc-400 text-lg">{selectedProject.description}</p>
                                        </div>
                                    </div>

                                    {/* Scrollable Gallery Grid */}
                                    <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-black/20 custom-scrollbar">
                                        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                                            {selectedProject.gallery.map((img, idx) => (
                                                <div key={idx} className="break-inside-avoid rounded-xl overflow-hidden mb-4 border border-zinc-800 group">
                                                    <img
                                                        src={img}
                                                        alt={`Gallery ${idx}`}
                                                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                // Standard Detail View
                                <>
                                    <div className="w-full md:w-1/2 h-[300px] md:h-auto bg-zinc-800 relative">
                                        <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="w-full md:w-1/2 p-8 md:p-12 space-y-8 flex flex-col justify-center bg-zinc-950">
                                        <div>
                                            <motion.h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">{selectedProject.title}</motion.h2>
                                            <p className="text-zinc-500 font-mono text-sm">{selectedProject.tech.join(" + ")}</p>
                                        </div>
                                        <p className="text-zinc-300 text-lg leading-relaxed font-light">{selectedProject.description}</p>
                                        <div className="pt-4">
                                            <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors w-full text-center md:w-auto">
                                                Lihat Proyek
                                            </a>
                                        </div>
                                    </div>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
