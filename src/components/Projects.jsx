import React from 'react';
import { ArrowUpRight, ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Projects({ onSelectProject }) {
  const handleScrollToGrid = () => {
    const grid = document.getElementById('project-grid');
    if (grid) {
      grid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#334155] relative">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={24} duration={600}>
          <div className="flex items-center justify-between pb-8 sm:pb-12 border-b border-slate-200 dark:border-[#334155]">
            <div>
              <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-slate-900 dark:text-white font-sans">
                FEATURED PROJECTS
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
                Real-world web projects highlighting actual frontend implementation and problem solving.
              </p>
            </div>
            
            <button 
              onClick={handleScrollToGrid}
              aria-label="Scroll down to all featured projects"
              className="group hidden sm:flex items-center gap-2 text-xs sm:text-[13px] tracking-[0.16em] uppercase text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C88A4A] rounded-md px-2 py-1"
            >
              <span>VIEW ALL WORKS</span>
              <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#C88A4A] group-hover:translate-x-1 transition-all duration-300" />
            </button>
          </div>
        </ScrollReveal>

        {/* 3 Project Cards Grid */}
        <div id="project-grid" className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 pt-8">
          {portfolioData.projects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 160} direction="up" distance={36} duration={750}>
              <div
                role="button"
                tabIndex={0}
                aria-label={`View detailed case study for project ${project.id}: ${project.title}`}
                onClick={() => onSelectProject(project)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onSelectProject(project);
                  }
                }}
                className="group cursor-pointer flex flex-col bg-white dark:bg-[#0F172A] rounded-xl overflow-hidden border border-slate-200 dark:border-[#334155] hover:border-[#C88A4A]/60 dark:hover:border-[#D0E4F5]/60 transition-all duration-500 shadow-sm hover:shadow-[0_12px_30px_rgba(200,138,74,0.15)] dark:hover:shadow-[0_12px_30px_rgba(208,228,245,0.1)] hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#C88A4A] focus-visible:outline-none h-full"
              >
                {/* Project Card Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-[#162032]">
                <img
                  src={project.image}
                  alt={`Preview interface for ${project.title}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 dark:from-[#0F172A] via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity pointer-events-none" />

                {/* Turnaround Badge on top left */}
                <div className="absolute top-3 left-3 pointer-events-none">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/80 dark:bg-[#0F172A]/85 backdrop-blur-md text-[10px] font-semibold text-[#D0E4F5] border border-slate-700/80 dark:border-[#334155] shadow-md">
                    <Clock className="w-3 h-3 text-[#C88A4A]" />
                    <span>{project.turnaround}</span>
                  </span>
                </div>

                {/* Quick view floating tag in Shirt Blue */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <span className="p-2 rounded-full bg-[#D0E4F5] text-[#1E293B] shadow-lg flex items-center justify-center font-bold">
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>

              {/* Project Info Footer */}
              <div className="p-5 flex flex-col justify-between flex-1 border-t border-slate-100 dark:border-[#1E293B] bg-white dark:bg-[#0F172A] space-y-3">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    {/* Number in Bold Wood Warm Accent */}
                    <span className="font-display text-xl sm:text-2xl font-bold text-[#C88A4A] tracking-tight shrink-0">
                      {project.id}
                    </span>

                    {/* Title & Subtitle */}
                    <div className="flex flex-col text-left">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xs sm:text-sm tracking-wider uppercase text-slate-900 dark:text-white group-hover:text-[#C88A4A] dark:group-hover:text-[#D0E4F5] transition-colors">
                          {project.title}
                        </h3>
                        <span className="text-[10px] text-slate-400">• {project.subtitle}</span>
                      </div>
                      <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase text-[#C88A4A] pt-0.5">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Arrow Icon */}
                  <div className="text-slate-400 group-hover:text-[#C88A4A] group-hover:translate-x-1 transition-all duration-300 shrink-0">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Primary Contribution Preview */}
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed text-left">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span 
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-[#162032] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#334155]"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-1.5 py-0.5 rounded text-[10px] text-slate-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
