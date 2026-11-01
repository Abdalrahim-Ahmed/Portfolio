import React, { useState } from 'react';
import { Globe, Code2, ArrowDown, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ onOpenContact }) {
  const [photoMode, setPhotoMode] = useState('original'); // 'original' (clean framed portrait) or 'cutout'

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      aria-label="Introduction and Overview"
      className="relative min-h-[92vh] sm:min-h-screen pt-24 pb-12 sm:pb-20 overflow-hidden flex flex-col justify-between"
    >
      
      {/* 1. Subtle Ambient Sky-Blue & Wood Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[380px] sm:h-[480px] bg-[#D0E4F5]/10 dark:bg-[#38BDF8]/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* 2. Razor-Sharp "PORTFOLIO" Background Typography (100% Crisp Vector, Zero Shadow / Zero Blur) */}
      <div 
        aria-hidden="true" 
        className="w-full flex justify-center items-center select-none pt-2 sm:pt-4 pointer-events-none overflow-hidden relative"
      >
        <span 
          className="portfolio-hero-text text-[19vw] sm:text-[17vw] lg:text-[185px] xl:text-[220px] font-black tracking-[0.025em] leading-[0.8] text-center whitespace-nowrap select-none"
        >
          PORTFOLIO
        </span>
      </div>

      {/* Center Hero Content Container */}
      <div className="max-w-[1400px] mx-auto w-full px-6 sm:px-10 lg:px-16 flex-1 flex flex-col justify-end relative">
        
        {/* The Foreground Grid (Left Bio, Center Person, Right Stats) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end relative min-h-[520px] sm:min-h-[580px] lg:min-h-[640px]">
          
          {/* ================= LEFT COLUMN (Staggered Entry Animations) ================= */}
          <div className="lg:col-span-5 z-20 flex flex-col justify-end pb-4 lg:pb-8 text-left space-y-4">
            
            {/* Cursive Script "Hello, I'm" in Wood Warm Accent */}
            <div className="relative hero-animate-1">
              <span className="font-signature text-3xl sm:text-4xl text-[#C88A4A] block transform -rotate-3 select-none">
                Hello, I'm
              </span>
            </div>

            {/* Giant Block Name: Unified Semantic H1 for SEO & Accessibility */}
            <div className="hero-animate-2">
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold uppercase tracking-wide text-slate-900 dark:text-white leading-[0.88] drop-shadow-sm select-none">
                <span className="block">{portfolioData.nameSplit[0]}</span>
                <span className="block">{portfolioData.nameSplit[1]}</span>
              </h1>
              <span className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wider block pt-1">
                {portfolioData.fullName}
              </span>
            </div>

            {/* Sub-headline: Frontend Developer */}
            <div className="pt-1 hero-animate-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D0E4F5]/30 dark:bg-[#D0E4F5]/10 border border-[#D0E4F5]/50 backdrop-blur-sm">
                <Code2 className="w-3.5 h-3.5 text-[#C88A4A]" />
                <span className="text-[#1E293B] dark:text-[#D0E4F5] font-extrabold text-xs sm:text-sm tracking-[0.16em] uppercase">
                  {portfolioData.role}
                </span>
              </div>
            </div>

            {/* Concise, Professional Summary */}
            <p className="hero-animate-3 text-slate-600 dark:text-slate-300 text-xs sm:text-[13px] leading-relaxed max-w-md font-normal">
              {portfolioData.bio}
            </p>

            {/* Action Buttons & Location Badge */}
            <div className="pt-3 flex flex-wrap items-center gap-3 hero-animate-4">
              {/* Primary Action Button with Glow & Scale */}
              <button
                onClick={scrollToProjects}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#D0E4F5] hover:bg-[#BDDDF5] text-[#1E293B] text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:shadow-[0_0_28px_rgba(208,228,245,0.65)] hover:scale-105 active:scale-95 border border-transparent hover:border-[#D0E4F5] focus-visible:ring-2 focus-visible:ring-[#C88A4A]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-0.5" />
              </button>

              {/* Secondary Action Button with Glow & Scale */}
              <button
                onClick={onOpenContact}
                className="group inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-slate-300 dark:border-[#334155] bg-white/80 dark:bg-[#0F172A]/80 hover:bg-slate-100 dark:hover:bg-[#1E293B] text-xs font-bold uppercase tracking-wider text-slate-800 dark:text-white transition-all duration-300 shadow-sm hover:shadow-[0_0_22px_rgba(200,138,74,0.35)] hover:border-[#C88A4A] hover:scale-105 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#C88A4A]"
              >
                <span>Get In Touch</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#C88A4A] transition-transform duration-300 group-hover:translate-x-0.5" />
              </button>

              {/* Location Badge (Leaf Green) */}
              <div className="w-full pt-1">
                <div className="inline-flex items-center gap-2 text-[11px] font-medium text-slate-600 dark:text-slate-400 tracking-wider uppercase">
                  <Globe className="w-3.5 h-3.5 text-[#6B8E4E]" aria-hidden="true" />
                  <span>{portfolioData.locationBadge}</span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= CENTER COLUMN: Personal Portrait & Floating Aura ================= */}
          <div className="lg:col-span-4 relative flex flex-col justify-end items-center h-full z-10 mt-2 sm:mt-0 lg:mt-0 hero-animate-center">
            
            {/* Multi-layered soft ambient glow behind the portrait */}
            <div className="absolute bottom-12 w-[340px] sm:w-[440px] h-[380px] sm:h-[460px] bg-gradient-to-t from-[#38BDF8]/20 via-[#D0E4F5]/15 to-transparent rounded-full blur-3xl -z-10 animate-aura-pulse pointer-events-none" />
            <div className="absolute bottom-16 w-[260px] sm:w-[340px] h-[280px] sm:h-[360px] bg-[#C88A4A]/12 rounded-full blur-2xl -z-10 pointer-events-none" />

            {/* Continuous Gentle Float Animation Container */}
            <div className="animate-hero-float relative w-full flex justify-center items-end">
              {photoMode === 'original' ? (
                <div className="relative group pointer-events-auto w-full max-w-[340px] sm:max-w-[390px]">
                  {/* Subtle outer neon halo */}
                  <div className="absolute -inset-1.5 rounded-[36px] bg-gradient-to-b from-[#38BDF8]/35 via-[#D0E4F5]/20 to-[#C88A4A]/25 blur-xl opacity-70 group-hover:opacity-100 transition duration-700 pointer-events-none" />
                  
                  {/* The Framed Portrait Card */}
                  <div className="relative rounded-[32px] overflow-hidden border-2 border-[#D0E4F5]/40 bg-[#0F172A] shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-all duration-500 group-hover:border-[#38BDF8] group-hover:shadow-[0_25px_60px_rgba(56,189,248,0.25)] group-hover:scale-[1.01]">
                    <img
                      src="/assets/user_photo.jpg"
                      alt={`Portrait of ${portfolioData.name}`}
                      className="w-full h-auto aspect-[3/4] object-cover object-top filter brightness-[1.02] contrast-[1.06] saturate-[1.04] transition-transform duration-700 group-hover:scale-105"
                      style={{ imageRendering: '-webkit-optimize-contrast' }}
                    />
                    
                    {/* Subtle bottom vignette for text contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/15 to-transparent pointer-events-none" />

                    {/* Elegant floating name & role pill inside card */}
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between px-3.5 py-2 rounded-xl bg-[#0F172A]/90 backdrop-blur-md border border-[#334155] text-[11px] shadow-lg pointer-events-none">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#6B8E4E] animate-pulse" />
                        <span className="font-bold text-white tracking-wider uppercase">{portfolioData.name}</span>
                      </div>
                      <span className="text-[#C88A4A] font-semibold text-[10px] tracking-wider uppercase">Frontend Dev</span>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative group pointer-events-auto w-full max-w-[350px] sm:max-w-[400px] flex justify-center items-end">
                  <img
                    src="/assets/user_cutout.png"
                    alt={`Studio cutout portrait of ${portfolioData.name}`}
                    className="w-full h-auto object-contain max-h-[560px] sm:max-h-[640px] drop-shadow-[0_25px_50px_rgba(0,0,0,0.9)] drop-shadow-[0_0_30px_rgba(208,228,245,0.25)] filter contrast-[1.06] brightness-[1.02] transition-transform duration-500 group-hover:scale-[1.02]"
                    style={{
                      imageRendering: '-webkit-optimize-contrast'
                    }}
                  />
                  {/* Subtle rim glow */}
                  <div className="absolute inset-0 pointer-events-none rounded-full opacity-20 group-hover:opacity-35 transition-opacity bg-gradient-to-tr from-transparent via-[#38BDF8]/10 to-[#D0E4F5] mix-blend-color-dodge" />
                </div>
              )}
            </div>

            {/* Interactive Portrait Mode Toggle Pill (Placed safely BELOW the image, NEVER covering the subject) */}
            <div className="pointer-events-auto relative mt-3 z-30 flex items-center justify-center">
              <div className="inline-flex p-1 rounded-full bg-[#0F172A]/90 border border-[#334155] backdrop-blur-md shadow-xl gap-1">
                <button
                  onClick={() => setPhotoMode('original')}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    photoMode === 'original'
                      ? 'bg-[#D0E4F5] text-[#1E293B] shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Framed Portrait
                </button>
                <button
                  onClick={() => setPhotoMode('cutout')}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 ${
                    photoMode === 'cutout'
                      ? 'bg-[#D0E4F5] text-[#1E293B] shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Studio Cutout
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: Interactive Stats ================= */}
          <div className="lg:col-span-3 z-20 flex flex-col justify-end items-start lg:items-end h-full pb-4 lg:pb-8 space-y-4 hero-animate-stats">
            {/* Interactive Stats List with Card Elevation & Number Glow */}
            <div className="space-y-3 lg:text-right w-full">
              {portfolioData.stats.map((stat, idx) => (
                <div 
                  key={idx} 
                  className="group/stat flex lg:flex-row-reverse items-baseline gap-3 p-2.5 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-[#334155] hover:bg-white/70 dark:hover:bg-[#0F172A]/70 hover:shadow-lg hover:shadow-[#D0E4F5]/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <span className="font-display text-4xl sm:text-5xl font-bold text-[#C88A4A] tracking-tight group-hover/stat:text-[#DAA36B] group-hover/stat:drop-shadow-[0_0_12px_rgba(200,138,74,0.4)] transition-all duration-300 drop-shadow-sm">
                    {stat.value}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.14em] text-slate-600 dark:text-slate-400 group-hover/stat:text-slate-900 dark:group-hover/stat:text-white uppercase leading-tight whitespace-pre-line transition-colors">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
