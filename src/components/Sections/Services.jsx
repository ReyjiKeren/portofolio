import { motion } from 'framer-motion';
import { Laptop, Compass, Layers, Gauge } from 'lucide-react';

const Services = () => {
  const servicesData = [
    {
      icon: <Laptop className="text-brand-primary" size={32} />,
      title: "Web Development",
      description: "Building production-grade web systems from frontend views to robust browser-side code architectures."
    },
    {
      icon: <Compass className="text-brand-primary" size={32} />,
      title: "UI/UX Design",
      description: "Crafting modern layouts, research-based user pathways, and high-fidelity layouts in Figma."
    },
    {
      icon: <Layers className="text-brand-primary" size={32} />,
      title: "Landing Page Design",
      description: "Creating highly converting product landing pages with visual storytelling and pixel-perfect responsiveness."
    },
    {
      icon: <Gauge className="text-brand-primary" size={32} />,
      title: "Website Optimization",
      description: "Speeding up page speeds, tuning layout shifts, and implementing proper SEO strategies."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute bottom-[20%] left-[-15%] w-[450px] h-[450px] bg-brand-peach/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary text-xs uppercase tracking-widest font-extrabold bg-brand-peach/50 px-4 py-1.5 rounded-full"
          >
            What I Offer
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-outfit text-brand-text tracking-tight"
          >
            Services Offered
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-text/60 font-light"
          >
            Specialized design and development services custom tailored for client requirements.
          </motion.p>
        </div>

        {/* Services Cards Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -6, 
                boxShadow: "0 30px 60px -15px rgba(255, 122, 89, 0.15)"
              }}
              className="bg-brand-card rounded-3xl-custom p-8 md:p-10 border border-brand-peach/20 shadow-premium flex flex-col sm:flex-row items-start gap-6 hover:border-brand-primary/20 transition-all duration-300"
            >
              {/* Icon Frame */}
              <div className="p-4 bg-brand-peach/30 rounded-2xl-custom flex items-center justify-center shrink-0">
                {service.icon}
              </div>

              {/* Info Frame */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold font-outfit text-brand-text">
                  {service.title}
                </h3>
                <p className="text-brand-text/75 text-sm md:text-base leading-relaxed font-light">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
