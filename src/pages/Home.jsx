import Navbar from '../components/Sections/Navbar';
import Hero from '../components/Sections/Hero';
import Skills from '../components/Sections/Skills';
import About from '../components/Sections/About';
import Projects from '../components/Sections/Projects';
import Services from '../components/Sections/Services';
import TechStack from '../components/Sections/TechStack';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';

const Home = () => {
  return (
    <div className="relative min-h-screen bg-brand-bg text-brand-text overflow-x-hidden selection:bg-brand-peach selection:text-brand-primary">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Featured Skills Section */}
        <Skills />

        {/* 3. About Section */}
        <About />

        {/* 4. Featured Projects Section */}
        <Projects />

        {/* 5. Services Section */}
        <Services />

        {/* 6. Tech Stack Section */}
        <TechStack />

        {/* 7. Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
