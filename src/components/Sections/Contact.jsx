import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
      }, 3000);
    }
  };

  const contactLinks = [
    { 
      icon: <Mail size={24} className="text-brand-primary" />, 
      label: "Email", 
      value: "contactreyji@gmail.com", 
      href: "mailto:contactreyji@gmail.com" 
    },
    { 
      icon: <FaWhatsapp size={24} className="text-brand-primary" />, 
      label: "WhatsApp", 
      value: "+62 812-3456-7890", 
      href: "https://wa.me/6281234567890" 
    },
    { 
      icon: <FaInstagram size={24} className="text-brand-primary" />, 
      label: "Instagram", 
      value: "@reywrnyktm", 
      href: "https://www.instagram.com/reywrnyktm?igsh=MW54a3Q4amRkOXMzYg==" 
    },
    { 
      icon: <FaLinkedin size={24} className="text-brand-primary" />, 
      label: "LinkedIn", 
      value: "Reyji Wiranayakatama", 
      href: "https://linkedin.com/in/reyji" 
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-brand-bg relative overflow-hidden">
      {/* Decorative Blob */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-brand-coral/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-brand-primary text-xs uppercase tracking-widest font-extrabold bg-brand-peach/50 px-4 py-1.5 rounded-full"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black font-outfit text-brand-text tracking-tight"
          >
            Let's Start a Project
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-brand-text/60 font-light"
          >
            Reach out via direct contact links, or leave a message below to start working together.
          </motion.p>
        </div>

        {/* Form & Info Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-brand-card rounded-3xl-custom p-8 border border-brand-peach/20 shadow-premium space-y-6 hover:border-brand-primary/20 transition-all duration-300">
              <h3 className="text-2xl font-bold font-outfit text-brand-text mb-4">Contact Information</h3>
              <div className="space-y-6">
                {contactLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl-custom bg-brand-bg hover:bg-brand-peach/40 border border-brand-peach/25 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-brand-card rounded-xl shadow-soft group-hover:scale-105 transition-transform">
                      {link.icon}
                    </div>
                    <div>
                      <span className="block text-xs text-brand-text/50 uppercase tracking-widest font-bold">
                        {link.label}
                      </span>
                      <span className="block text-sm font-semibold text-brand-text font-outfit group-hover:text-brand-primary transition-colors">
                        {link.value}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-brand-card rounded-3xl-custom p-8 md:p-10 border border-brand-peach/20 shadow-premium hover:border-brand-primary/20 transition-all duration-300">
              <h3 className="text-2xl font-bold font-outfit text-brand-text mb-6">Send Me a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-xs uppercase tracking-wider font-extrabold text-brand-text/60">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-brand-bg border border-brand-peach/30 rounded-xl-custom px-5 py-4 text-brand-text placeholder-brand-text/40 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-xs uppercase tracking-wider font-extrabold text-brand-text/60">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-brand-bg border border-brand-peach/30 rounded-xl-custom px-5 py-4 text-brand-text placeholder-brand-text/40 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-xs uppercase tracking-wider font-extrabold text-brand-text/60">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-brand-bg border border-brand-peach/30 rounded-xl-custom px-5 py-4 text-brand-text placeholder-brand-text/40 focus:outline-none focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 transition-all resize-none"
                    placeholder="Describe your project or message details..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full flex items-center justify-center gap-2 bg-brand-primary hover:bg-brand-primary/95 disabled:bg-[#FFB4A2] text-white font-bold py-4 rounded-xl-custom shadow-soft hover:shadow-hover-card transition-all duration-300"
                >
                  {isSubmitted ? (
                    <span>Message Sent Successfully!</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
