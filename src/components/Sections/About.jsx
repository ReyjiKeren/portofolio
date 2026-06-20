import { motion } from 'framer-motion';
import { User, Calendar, MapPin, Mail, Award } from 'lucide-react';

const About = () => {
  const bioData = {
    name: "Reyji Wiranayakatama Jizenji",
    age: "17 Years Old",
    location: "Bekasi, Indonesia",
    email: "reyji.wiranayakatama@gmail.com",
    role: "Frontend Developer & UI/UX Designer"
  };

  const details = [
    { icon: <User size={18} className="text-brand-primary" />, label: "Name", value: bioData.name },
    { icon: <Calendar size={18} className="text-brand-primary" />, label: "Age", value: bioData.age },
    { icon: <MapPin size={18} className="text-brand-primary" />, label: "Location", value: bioData.location },
    { icon: <Mail size={18} className="text-brand-primary" />, label: "Email", value: bioData.email },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[30%] right-[-15%] w-[400px] h-[400px] bg-brand-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary text-xs uppercase tracking-widest font-extrabold bg-brand-peach/50 px-4 py-1.5 rounded-full"
          >
            My Identity
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-outfit text-brand-text tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-text/60 font-light"
          >
            Discover the creative background, professional journey, and driver behind my design projects.
          </motion.p>
        </div>

        {/* About Card Content Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left: Photo Frame Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex"
          >
            <div className="bg-brand-card w-full rounded-3xl-custom p-6 border border-brand-peach/20 shadow-premium flex flex-col justify-between relative group hover:border-brand-primary/20 transition-all duration-300">
              <div className="h-[320px] md:h-[400px] w-full rounded-2xl-custom overflow-hidden shadow-soft mb-6 relative">
                <img 
                  src="/Profil.jpeg" 
                  alt="Reyji Wiranayakatama" 
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-300" />
              </div>
              <div className="flex items-center gap-4 bg-brand-peach/40 p-4 rounded-2xl-custom border border-brand-peach/20">
                <div className="p-3 bg-brand-card rounded-xl shadow-soft">
                  <Award className="text-brand-primary" size={24} />
                </div>
                <div>
                  <h4 className="font-outfit font-extrabold text-brand-text text-sm">Self-Taught Creator</h4>
                  <p className="text-xs text-brand-text/60 font-light mt-0.5">Driven by continuous visual & code learning</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Info & Story Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex"
          >
            <div className="bg-brand-card w-full rounded-3xl-custom p-8 md:p-12 border border-brand-peach/20 shadow-premium flex flex-col justify-between hover:border-brand-primary/20 transition-all duration-300">
              
              {/* Introduction Story */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold font-outfit text-brand-text">
                  Hello, I'm <span className="text-brand-primary">Reyji</span>
                </h3>
                <p className="text-brand-text/85 text-lg leading-relaxed font-light">
                  I am a passionate student from Indonesia focusing on web development and user experience design. I also hold a strong visual interest in creative photography and content production.
                </p>
                <p className="text-brand-text/75 text-base leading-relaxed font-light">
                  I love pairing clean frontend architectures with premium visual aesthetics to build digital interfaces that look simple, elegant, and interactive. By working on self-driven code projects and exploring visual theories, I am constantly tuning my capabilities to professional startup standards.
                </p>
              </div>

              {/* Personal Details List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-brand-peach/30 mt-8">
                {details.map((detail, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 bg-brand-peach/30 rounded-xl">
                      {detail.icon}
                    </div>
                    <div>
                      <span className="block text-xs text-brand-text/50 uppercase tracking-widest font-bold">
                        {detail.label}
                      </span>
                      <span className="block text-sm font-semibold text-brand-text font-outfit">
                        {detail.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
