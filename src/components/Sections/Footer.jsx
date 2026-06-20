import { FaGithub, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub size={18} />, href: "https://github.com/ReyjiKeren", label: "GitHub" },
    { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/reywrnyktm?igsh=MW54a3Q4amRkOXMzYg==", label: "Instagram" },
    { icon: <FaLinkedin size={18} />, href: "https://linkedin.com/in/reyji", label: "LinkedIn" },
    { icon: <FaTiktok size={18} />, href: "https://www.tiktok.com/@omgaringg?_r=1&_t=ZS-92LmWWXHudu", label: "TikTok" }
  ];

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-card border-t border-brand-peach/30 py-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Logo */}
        <div>
          <a
            href="#home"
            onClick={scrollToTop}
            className="text-2xl font-extrabold font-outfit text-brand-primary tracking-tight"
          >
            Reyji<span className="text-brand-secondary">.</span>
          </a>
          <p className="text-brand-text/50 text-xs mt-1 font-light">
            Designing & developing modern interfaces.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-brand-text/60 text-xs md:text-sm font-light text-center md:text-left md:order-2">
          &copy; {new Date().getFullYear()} Reyji Wiranayakatama Jizenji. All rights reserved.
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4 md:order-3">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-brand-peach/30 hover:bg-brand-primary hover:text-white text-brand-text rounded-full transition-all duration-300 shadow-soft"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
};

export default Footer;
