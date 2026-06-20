import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-card/85 backdrop-blur-md py-4 shadow-soft border-b border-brand-peach/30'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="text-2xl md:text-3xl font-extrabold font-outfit text-brand-primary tracking-tight"
          >
            Reyji<span className="text-brand-secondary">.</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-brand-text/80 hover:text-brand-primary transition-colors text-sm uppercase tracking-wider relative group"
              >
                {link.name}
                <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-brand-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#contact');
              }}
              className="bg-brand-primary hover:bg-brand-primary/95 text-white font-semibold px-6 py-3 rounded-full shadow-soft hover:shadow-hover-card transition-all hover:-translate-y-[2px] duration-300 inline-block text-sm"
            >
              Let's Work Together
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-text hover:text-brand-primary transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] bg-brand-bg/95 backdrop-blur-lg z-30 flex flex-col p-8 md:hidden border-b border-brand-peach/40"
          >
            <div className="flex flex-col gap-6 items-center justify-center my-auto">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-2xl font-bold font-outfit text-brand-text hover:text-brand-primary transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="mt-6 bg-brand-primary hover:bg-brand-primary/90 text-white font-bold px-8 py-4 rounded-full shadow-soft text-center w-full max-w-xs transition-all"
              >
                Let's Work Together
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
