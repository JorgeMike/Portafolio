'use client';
import React, { useRef, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './navbar';
import { inter } from '@/app/fonts';
import AboutMe from './about-me';
import Experience from './experience';
import Projects from './projects';
import PersonalProjects from './personal-projects';

export default function Page() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const { top } = sectionRef.current.getBoundingClientRect();
      // Cuando la sección llegue al top (o lo sobrepase), mostramos la Navbar
      setShowNavbar(top <= 0);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // primera comprobación al montar
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>{showNavbar && <Navbar />}</AnimatePresence>
      <motion.section
        initial={{ opacity: 0, y: 100, display: 'none', position: 'absolute' }}
        animate={{ opacity: 1, y: 0, display: 'block', position: 'relative' }}
        transition={{ duration: 1, delay: 1.5 }}
        ref={sectionRef}
        className={`container-fluid bg-white d-flex flex-column mt-4 z-1 min-vh-100 ${inter.className}`}
        style={{
          paddingTop: '50px',
        }}
      >
        <div className="container">
          <AboutMe />
          <Experience />
        </div>
        <div className="bg-primary bg-opacity-10 py-5 rounded-4">
          <div className="container">
            <Projects />
          </div>
        </div>
        <div className="container">
          <PersonalProjects />
        </div>
        <footer className="bg-primary bg-opacity-10 py-4 mt-5">
          <div className="container text-center">
            <p className="mb-0 text-muted">2025</p>
          </div>
        </footer>
      </motion.section>
    </>
  );
}
