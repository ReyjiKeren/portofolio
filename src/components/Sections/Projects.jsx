import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { projects } from '../../data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary text-xs uppercase tracking-widest font-extrabold bg-brand-peach/50 px-4 py-1.5 rounded-full"
          >
            My Portfolio
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-outfit text-brand-text tracking-tight"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-text/60 font-light"
          >
            Explore a curated showcase of web applications, design systems, and digital creations.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[340px] md:auto-rows-[360px]"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8, 
                boxShadow: "0 30px 60px -15px rgba(255, 122, 89, 0.15)"
              }}
              className={`bg-brand-card rounded-3xl-custom overflow-hidden border border-brand-peach/20 shadow-premium flex flex-col justify-between p-6 transition-all duration-300 hover:border-brand-primary/20 ${project.size}`}
            >
              {/* Thumbnail Container */}
              <div className="relative w-full h-[180px] md:h-[200px] rounded-2xl-custom overflow-hidden border border-brand-peach/10 shadow-inner shrink-0 group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                {/* Category Badge */}
                <span className="absolute top-4 left-4 bg-brand-card/90 backdrop-blur-md text-brand-primary border border-brand-peach/30 px-3 py-1 rounded-full text-xs font-semibold font-outfit shadow-sm">
                  {project.category}
                </span>
              </div>

              {/* Bottom Meta Content */}
              <div className="flex-1 flex flex-col justify-between pt-5 gap-3">
                {/* Info Text */}
                <div className="space-y-1">
                  <h3 className="text-lg md:text-xl font-bold font-outfit text-brand-text truncate">
                    {project.title}
                  </h3>
                  
                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span 
                        key={idx} 
                        className="bg-brand-peach/30 text-brand-text/80 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Demo & Github Buttons */}
                <div className="flex items-center gap-3 pt-2 border-t border-brand-peach/20">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 bg-brand-primary hover:bg-brand-primary/95 text-white font-bold text-xs py-2.5 px-4 rounded-xl-custom shadow-soft transition-all duration-300"
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={14} />
                  </a>
                  
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center p-2.5 bg-brand-peach/30 hover:bg-brand-peach/60 text-brand-text rounded-xl-custom border border-brand-peach/20 transition-all duration-300"
                    aria-label="GitHub Codebase"
                  >
                    <FaGithub size={16} />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
