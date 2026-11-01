import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import SkillsProcessQuote from './components/SkillsProcessQuote';
import Education from './components/Education';
import ContactFooter from './components/ContactFooter';
import ProjectModal from './components/ProjectModal';
import ContactModal from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.classList.remove('light');
    document.body.classList.remove('light-theme');
    localStorage.setItem('portfolio-theme', 'dark');
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#D0E4F5] selection:text-[#1E293B] relative bg-[#1E293B] text-[#F8FAFC]">
      
      {/* Top Header Navigation */}
      <Header 
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Portfolio Sections */}
      <main>
        {/* 1. Hero Section (Introduction, Headline, Cutout Portrait, Stats) */}
        <Hero 
          onOpenContact={() => setIsContactOpen(true)} 
        />

        {/* 2. Featured Projects Section (Sallahly, TRUFORM, Rabiit) */}
        <Projects 
          onSelectProject={(project) => setSelectedProject(project)} 
        />

        {/* 3. Technical Skills & Development Workflow */}
        <SkillsProcessQuote 
          onOpenContact={() => setIsContactOpen(true)} 
        />

        {/* 4. Training & Education */}
        <Education />

        {/* 5. Let's Work Together / Footer Section */}
        <ContactFooter 
          onOpenContact={() => setIsContactOpen(true)} 
        />
      </main>

      {/* Interactive Project Details Modal */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Interactive Contact / Hire Modal */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />

    </div>
  );
}
