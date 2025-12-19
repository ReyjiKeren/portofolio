import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TypewriterText = ({ text, className }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setHasStarted(true);
        }, 500);
        return () => clearTimeout(startTimeout);
    }, []);

    useEffect(() => {
        if (!hasStarted) return;

        let index = 0;
        const interval = setInterval(() => {
            setDisplayedText((prev) => {
                if (index < text.length) {
                    return text.slice(0, index + 1);
                }
                return prev;
            });
            index++;
            if (index >= text.length) {
                clearInterval(interval);
            }
        }, 30);

        return () => clearInterval(interval);
    }, [text, hasStarted]);

    return <p className={className}>{displayedText}</p>;
};

const Stepper = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        // Check if previously visited
        const savedName = localStorage.getItem('visitorName');
        // If you want to force onboarding every time, comment out the check
        // if (savedName) onComplete(savedName); 
    }, []);

    const handleNext = () => {
        if (step === 0 && name.trim().length > 0) {
            setStep(1);
            localStorage.setItem('visitorName', name);
        } else if (step === 1) {
            onComplete(name);
        }
    };

    const skip = () => {
        setStep(1);
        setName('Tamu');
        localStorage.setItem('visitorName', 'Tamu');
    };

    return (
        <div className="fixed inset-0 z-[100] bg-black text-white flex flex-col items-center justify-center p-6 select-none">
            <AnimatePresence mode='wait'>
                {step === 0 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -30, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full max-w-md text-center space-y-12"
                    >
                        <div className="space-y-4">
                            <h2 className="text-4xl md:text-5xl font-light tracking-tight">Halo.</h2>
                            <p className="text-zinc-500 font-light text-lg">Mari berkenalan. Siapa namamu?</p>
                        </div>

                        <div className="relative group">
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Ketik namamu..."
                                className="w-full bg-zinc-900/50 border border-zinc-800 rounded-2xl px-6 py-4 text-center text-2xl md:text-3xl font-light focus:outline-none focus:border-white focus:bg-zinc-900 transition-all placeholder:text-zinc-700"
                                onKeyDown={(e) => e.key === 'Enter' && handleNext()}
                                autoFocus
                            />
                        </div>

                        <div className="flex flex-col items-center gap-6 pt-8">
                            {name.trim() && (
                                <motion.button
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    onClick={handleNext}
                                    className="text-lg bg-white text-black px-8 py-3 rounded-full hover:scale-105 transition-all font-medium"
                                >
                                    Lanjut
                                </motion.button>
                            )}
                            <button onClick={skip} className="text-sm text-zinc-600 hover:text-zinc-400 transition-colors">Lewati intro</button>
                        </div>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="step2"
                        initial={{ opacity: 0, scale: 0.95, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center space-y-8 max-w-2xl px-4"
                    >
                        <motion.h2
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { staggerChildren: 0.05 } }
                            }}
                            className="text-5xl md:text-7xl font-light tracking-tight"
                        >
                            {Array.from("Selamat datang,").map((char, index) => (
                                <motion.span key={index} variants={{
                                    hidden: { y: 20, opacity: 0 },
                                    visible: { y: 0, opacity: 1 }
                                }}>{char}</motion.span>
                            ))}
                            <br />
                            <span className="font-semibold text-white">
                                {Array.from(name + ".").map((char, index) => (
                                    <motion.span key={index} variants={{
                                        hidden: { y: 20, opacity: 0 },
                                        visible: { y: 0, opacity: 1 }
                                    }}>{char}</motion.span>
                                ))}
                            </span>
                        </motion.h2>

                        <TypewriterText
                            text="Di sini, kamu akan mengenal lebih jauh tentang saya melalui karya web, desain, serta eksplorasi photography dan videography yang saya pelajari. Portofolio ini menjadi ruang digital untuk mendokumentasikan proses belajar dan perjalanan kreatif saya."
                            className="text-zinc-400 text-lg md:text-xl font-light leading-relaxed max-w-lg mx-auto min-h-[120px]"
                        />

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => onComplete(name)}
                            className="mt-12 px-10 py-4 border border-zinc-800 rounded-full text-lg hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Masuk Portofolio
                        </motion.button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Stepper;
