import { motion } from 'framer-motion';
import { Code2, Palette, Smartphone, Lightbulb } from 'lucide-react';

// React Bits Glow Card wrapper
const GlowCard = ({ children }) => {
  return (
    <div className="relative p-[2px] rounded-[32px] group overflow-hidden">
      {/* Rotating conic gradient - the glow border */}
      <div
        className="absolute w-[200%] h-[200%] top-[-50%] left-[-50%] animate-border-spin"
        style={{
          background:
            'conic-gradient(transparent 240deg, #FF7A59 280deg, #FFB86B 310deg, #FFE8D6 330deg, #FFB4A2 350deg, transparent 360deg)',
        }}
      />
      {/* Blur glow that intensifies on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-700 blur-xl animate-border-spin"
        style={{
          background:
            'conic-gradient(transparent 240deg, #FF7A59 280deg, #FFB86B 320deg, transparent 360deg)',
          transform: 'scale(1.15)',
        }}
      />
      {/* Card Inner Content */}
      <div className="relative bg-brand-card rounded-[30px] p-8 h-full flex flex-col items-start gap-6 hover:shadow-hover-card transition-shadow duration-300">
        {children}
      </div>
    </div>
  );
};

const Skills = () => {
  const skillsData = [
    {
      icon: <Code2 className="text-brand-primary" size={28} />,
      title: "Frontend Development",
      description:
        "Building responsive, fast, and accessible web interfaces using React.js, Tailwind CSS, and modern frontend tools.",
      color: "bg-brand-peach/40",
    },
    {
      icon: <Palette className="text-brand-primary" size={28} />,
      title: "UI/UX Design",
      description:
        "Designing modern, high-fidelity wireframes and functional user interfaces using Figma with an eye for pixel-perfection.",
      color: "bg-brand-secondary/35",
    },
    {
      icon: <Smartphone className="text-brand-primary" size={28} />,
      title: "Responsive Design",
      description:
        "Developing clean templates that adapt seamlessly to mobile, tablet, and ultra-wide monitor resolutions.",
      color: "bg-brand-coral/30",
    },
    {
      icon: <Lightbulb className="text-brand-primary" size={28} />,
      title: "Problem Solving",
      description:
        "Approaching logical problems and algorithms with analytical thinking to construct performant clean solutions.",
      color: "bg-brand-peach/40",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 bg-brand-bg relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary text-xs uppercase tracking-widest font-extrabold bg-brand-peach/50 px-4 py-1.5 rounded-full"
          >
            My Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-outfit text-brand-text tracking-tight"
          >
            Featured Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-text/60 font-light"
          >
            A compilation of professional services and capabilities I deliver on
            every creative engagement.
          </motion.p>
        </div>

        {/* Glow Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <GlowCard>
                {/* Icon Container */}
                <div
                  className={`p-4 rounded-2xl-custom ${skill.color} flex items-center justify-center`}
                >
                  {skill.icon}
                </div>

                {/* Text */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold font-outfit text-brand-text">
                    {skill.title}
                  </h3>
                  <p className="text-brand-text/75 text-sm leading-relaxed font-light">
                    {skill.description}
                  </p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
