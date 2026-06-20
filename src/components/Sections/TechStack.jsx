import { motion } from 'framer-motion';

const TechStack = () => {
  const technologies = [
    { name: "HTML", color: "bg-[#FFF0EB]", text: "text-[#FF6D43]", border: "border-[#FF6D43]/20" },
    { name: "CSS", color: "bg-[#EBF3FF]", text: "text-[#2D8CFF]", border: "border-[#2D8CFF]/20" },
    { name: "JavaScript", color: "bg-[#FFFDEB]", text: "text-[#F5C200]", border: "border-[#F5C200]/20" },
    { name: "React", color: "bg-[#EBFCFF]", text: "text-[#00C2E0]", border: "border-[#00C2E0]/20" },
    { name: "Tailwind CSS", color: "bg-[#ECFDF5]", text: "text-[#10B981]", border: "border-[#10B981]/20" },
    { name: "Node.js", color: "bg-[#F3FDF0]", text: "text-[#5EA440]", border: "border-[#5EA440]/20" },
    { name: "Figma", color: "bg-[#FFF0F5]", text: "text-[#E63946]", border: "border-[#E63946]/20" },
    { name: "Git", color: "bg-[#FFF2EB]", text: "text-[#F05032]", border: "border-[#F05032]/20" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 15 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120, damping: 14 }
    }
  };

  return (
    <section id="tech-stack" className="py-20 px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary text-xs uppercase tracking-widest font-extrabold bg-brand-peach/50 px-4 py-1.5 rounded-full"
          >
            My Toolbox
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-outfit text-brand-text tracking-tight"
          >
            Tech Stack
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-text/60 font-light"
          >
            The software, languages, frameworks, and visual tooling I use to bring interfaces to life.
          </motion.p>
        </div>

        {/* Interactive Badges Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center items-center gap-6 max-w-4xl mx-auto"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={badgeVariants}
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -2, 2, 0],
                boxShadow: "0 15px 30px -10px rgba(31, 41, 55, 0.12)"
              }}
              className={`px-8 py-4 rounded-2xl-custom border ${tech.color} ${tech.text} ${tech.border} font-outfit font-black text-lg md:text-xl shadow-premium cursor-default select-none transition-all duration-300`}
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default TechStack;
