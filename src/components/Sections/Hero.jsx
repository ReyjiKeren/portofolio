import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center items-center relative z-10 px-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
                className="text-center space-y-8"
            >
                <h1 className="text-6xl md:text-9xl font-bold tracking-tighter mix-blend-exclusion text-white">
                    FRONTEND<br />DEVELOPER
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto">
                    Menciptakan pengalaman digital dengan presisi, pergerakan, dan tujuan.
                </p>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <span className="text-xs text-zinc-600 uppercase tracking-widest">Gulir</span>
            </motion.div>
        </section>
    );
};

export default Hero;
