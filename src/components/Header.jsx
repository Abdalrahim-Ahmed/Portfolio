import React, { useState, useEffect } from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Header({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-10 lg:px-16 ${
        scrolled 
          ? 'bg-[#0F172A]/90 backdrop-blur-md border-b border-[#334155]/80 shadow-2xl py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        
        {/* Left Side: Role Title in Wood Warm Accent with Home Link */}
        <a 
          href="#"
          aria-label="Abdalrahim Ahmed — Return to Top of Portfolio"
          className="flex flex-col text-left select-none group focus-visible:ring-2 focus-visible:ring-[#C88A4A] rounded-sm shrink-0"
        >
          <span className="text-[#C88A4A] font-extrabold text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase leading-tight font-sans transition-colors group-hover:text-[#DAA36B]">
            {portfolioData.subRoles[0]}
          </span>
          <span className="text-[#C88A4A] font-extrabold text-[10px] sm:text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase leading-tight font-sans transition-colors group-hover:text-[#DAA36B]">
            {portfolioData.subRoles[1]}
          </span>
        </a>

        {/* Center: Desktop Quick Navigation Links */}
        <nav aria-label="Main Navigation" className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="text-xs font-semibold tracking-[0.14em] uppercase text-slate-300 hover:text-[#C88A4A] transition-colors focus-visible:ring-2 focus-visible:ring-[#C88A4A] rounded px-1 py-0.5"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Side: Available for Freelance CTA */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button
            onClick={onOpenContact}
            aria-label="Open contact inquiry form. Status: Available for frontend opportunities."
            className="group flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs tracking-[0.14em] sm:tracking-[0.18em] uppercase font-semibold transition-all duration-300 hover:scale-105 active:scale-95 px-3 sm:px-4 py-1.5 rounded-full border border-[#334155] bg-[#0F172A]/70 text-[#F8FAFC] hover:border-[#D0E4F5]/60 hover:bg-[#1E293B] focus-visible:ring-2 focus-visible:ring-[#C88A4A]"
          >
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6B8E4E] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6B8E4E]"></span>
            </span>
            <span className="hidden xs:inline sm:inline">{portfolioData.availability}</span>
            <span className="inline xs:hidden sm:hidden">AVAILABLE</span>
            <span className="text-[#C88A4A] text-xs transition-transform duration-300 group-hover:rotate-45" aria-hidden="true">✦</span>
          </button>
        </div>

      </div>
    </header>
  );
}
