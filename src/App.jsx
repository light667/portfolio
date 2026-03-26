import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen selection:bg-neon-cyan selection:text-dark">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-neon-cyan origin-left z-50 shadow-[0_0_10px_#06b6d4]"
        style={{ scaleX }}
      />
      
      <Header />
      
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Certifications />
        <Services />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
