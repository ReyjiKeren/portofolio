import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  
  // Subtle parallax effect
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 80]);
  const yImage = useTransform(scrollY, [0, 500], [0, -40]);
  const opacityFade = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollToProjects = (e) => {
    e.preventDefault();
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Tech Badge Component for the Floating Badges
  const TechBadge = ({ logo, label, positionClass, delay, duration = 4 }) => {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          y: [0, -12, 0],
        }}
        transition={{
          opacity: { duration: 0.6, delay },
          scale: { duration: 0.6, delay },
          y: {
            duration,
            repeat: Infinity,
            ease: "easeInOut",
          }
        }}
        className={`absolute z-20 flex items-center gap-2 bg-brand-card px-4 py-2.5 rounded-full shadow-premium border border-brand-peach/40 select-none ${positionClass}`}
      >
        <span className="flex h-2 w-2 rounded-full bg-brand-primary animate-pulse" />
        <span className="font-outfit text-sm font-semibold text-brand-text">{label}</span>
      </motion.div>
    );
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-6 md:px-12 overflow-hidden bg-brand-bg"
    >
      {/* Decorative Blur Blobs */}
      <div className="absolute top-[20%] left-[-10%] w-[35vw] h-[35vw] bg-brand-peach/40 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] right-[-10%] w-[40vw] h-[40vw] bg-brand-coral/30 rounded-full blur-[150px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column: Headline & Bio */}
        <motion.div 
          style={{ y: yText, opacity: opacityFade }}
          className="lg:col-span-7 flex flex-col justify-center space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-brand-peach/50 px-4 py-1.5 rounded-full text-brand-primary text-xs uppercase tracking-widest font-bold"
            >
              🚀 Available for Freelance & Full-time
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black font-outfit text-brand-text leading-[1.05] tracking-tight">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="block text-brand-primary"
              >
                Reyji
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="block"
              >
                Web Developer
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="block font-medium italic text-brand-text/75"
              >
                & UI/UX Designer
              </motion.span>
            </h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-brand-text/70 leading-relaxed max-w-xl font-light"
          >
            I create modern, clean digital experiences that combine stunning design aesthetics with robust developer architecture. Let's turn your vision into high-end products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="#projects"
              onClick={scrollToProjects}
              className="group bg-brand-primary hover:bg-brand-primary/95 text-white font-bold px-8 py-4 rounded-2xl-custom shadow-soft hover:shadow-hover-card flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-[2px]"
            >
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a
              href="#"
              className="group bg-brand-card hover:bg-brand-peach/40 text-brand-text border border-brand-peach font-bold px-8 py-4 rounded-2xl-custom flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-[2px] shadow-premium"
            >
              Download CV
              <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Column: Profile Image & Floating Badges */}
        <motion.div 
          style={{ y: yImage }}
          className="lg:col-span-5 relative flex justify-center items-center h-[450px] md:h-[500px]"
        >
          {/* Large Gradient Shape */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute w-[350px] h-[350px] md:w-[420px] md:h-[420px] rounded-3xl-custom z-0 shadow-soft"
            style={{
              background: 'linear-gradient(135deg, #FFE8D6 0%, #FFD6A5 50%, #FFB4A2 100%)'
            }}
          />

          {/* Profile Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02, rotate: 0 }}
            className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-3xl-custom overflow-hidden border-[12px] border-white shadow-premium z-10 transition-all duration-300"
          >
            <img 
              src="/Profil.jpeg" 
              alt="Reyji Wiranayakatama" 
              className="w-full h-full object-cover select-none"
            />
          </motion.div>

          {/* Floating Tech Badges */}
          <TechBadge 
            label="React" 
            positionClass="top-[10%] left-[-5%]" 
            delay={0.6} 
            duration={4.5} 
          />
          <TechBadge 
            label="JavaScript" 
            positionClass="bottom-[15%] left-[-8%]" 
            delay={0.8} 
            duration={5} 
          />
          <TechBadge 
            label="Figma" 
            positionClass="top-[8%] right-[-5%]" 
            delay={1.0} 
            duration={4} 
          />
          <TechBadge 
            label="WordPress" 
            positionClass="bottom-[20%] right-[-8%]" 
            delay={1.2} 
            duration={5.5} 
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
