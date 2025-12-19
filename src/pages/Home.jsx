import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { IoArrowBack } from 'react-icons/io5';
import LightRays from '../components/LightRays/LightRays';
import Stepper from '../components/Stepper/Stepper';
import FlowingMenu from '../components/FlowingMenu/FlowingMenu';
// Sections
import Projects from '../components/Sections/Projects';
import About from '../components/Sections/About';
import Experience from '../components/Sections/Experience';
import Contact from '../components/Sections/Contact';

const Home = () => {
    const [showContent, setShowContent] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeSection, setActiveSection] = useState(null); // 'about', 'experience', 'projects', 'contact' or null

    useEffect(() => {
        setLoading(false);
    }, []);

    const handleOnboardingComplete = () => {
        setShowContent(true);
    };

    const handleSectionSelect = (id) => {
        setActiveSection(id);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleBack = () => {
        setActiveSection(null);
    };

    if (loading) return null;

    return (
        <>
            <AnimatePresence mode="wait">
                {!showContent && (
                    <Stepper key="stepper" onComplete={handleOnboardingComplete} />
                )}
            </AnimatePresence>

            {showContent && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="relative min-h-screen bg-black"
                >
                    <LightRays />

                    <main className="relative z-10">
                        <AnimatePresence mode="wait">
                            {/* MENU VIEW */}
                            {!activeSection && (
                                <motion.div
                                    key="menu"
                                    initial={{ opacity: 0, filter: 'blur(10px)' }}
                                    animate={{ opacity: 1, filter: 'blur(0px)' }}
                                    exit={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <FlowingMenu onSelect={handleSectionSelect} />
                                </motion.div>
                            )}

                            {/* SECTION VIEW */}
                            {activeSection && (
                                <motion.div
                                    key="section"
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.5 }}
                                    className="relative"
                                >
                                    {/* Global Back Button */}
                                    <motion.button
                                        onClick={handleBack}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0, transition: { delay: 0.5 } }}
                                        className="fixed top-8 left-8 z-50 flex items-center gap-2 text-zinc-400 hover:text-white transition-colors group bg-black/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/5"
                                    >
                                        <IoArrowBack className="group-hover:-translate-x-1 transition-transform" />
                                        <span className="text-sm font-medium uppercase tracking-wide">Back</span>
                                    </motion.button>

                                    {activeSection === 'about' && <About />}
                                    {activeSection === 'experience' && <Experience />}
                                    {activeSection === 'projects' && <Projects />}
                                    {activeSection === 'contact' && <Contact />}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </main>
                </motion.div>
            )}
        </>
    );
};

export default Home;
