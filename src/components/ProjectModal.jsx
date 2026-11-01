import React, { useEffect, useRef } from 'react';
import { X, ExternalLink, Calendar, Clock, Tag, CheckCircle2, Award } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Focus trap & Escape key handler (WCAG 2.4.3 & 2.1.2)
  useEffect(() => {
    if (!project) return;

    // Focus close button on open
    const timer = setTimeout(() => {
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    }, 50);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 dark:bg-black/80 backdrop-blur-md animate-fadeIn"
      role="presentation"
    >
      {/* Backdrop click dismiss */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Dialog */}
      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative w-full max-w-3xl bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#334155] rounded-2xl overflow-hidden shadow-2xl z-10 max-h-[92vh] flex flex-col transition-colors"
      >
        
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-[#334155] bg-slate-50 dark:bg-[#162032]">
          <div className="flex items-center gap-3">
            <span className="font-display text-xl text-[#C88A4A] font-bold" aria-hidden="true">
              {project.id}
            </span>
            <div className="flex flex-col text-left">
              <h3 
                id="project-modal-title" 
                className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-wider uppercase leading-none"
              >
                {project.title}
              </h3>
              <span className="text-[11px] text-slate-500 dark:text-slate-400 pt-0.5">
                {project.subtitle} • {project.category}
              </span>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close project modal"
            className="p-1.5 rounded-full bg-slate-200 dark:bg-[#1E293B] hover:bg-slate-300 dark:hover:bg-[#334155] text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C88A4A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 space-y-6">
          
          {/* Main Image */}
          <div className="relative rounded-xl overflow-hidden border border-slate-200 dark:border-[#334155] bg-slate-100 dark:bg-[#162032] aspect-[16/9] shadow-inner">
            <img
              src={project.image}
              alt={`Full presentation screenshot for ${project.title}`}
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-[#162032] border border-slate-200 dark:border-[#334155] text-xs">
            <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
              <Clock className="w-4 h-4 text-[#C88A4A] shrink-0" aria-hidden="true" />
              <div>
                <span className="block text-[10px] uppercase text-slate-500">Timeline / Scope</span>
                <span className="font-semibold text-slate-900 dark:text-white">{project.stats?.timeline || 'Rapid Delivery'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
              <Calendar className="w-4 h-4 text-[#C88A4A] shrink-0" aria-hidden="true" />
              <div>
                <span className="block text-[10px] uppercase text-slate-500">Year / Context</span>
                <span className="font-semibold text-slate-900 dark:text-white">{project.stats?.client || 'Frontend Project'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
              <Tag className="w-4 h-4 text-[#C88A4A] shrink-0" aria-hidden="true" />
              <div>
                <span className="block text-[10px] uppercase text-slate-500">Domain</span>
                <span className="font-semibold text-slate-900 dark:text-white">{project.category}</span>
              </div>
            </div>
          </div>

          {/* Project Overview */}
          <div className="space-y-1.5 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#C88A4A]">Project Overview</h4>
            <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Key Contributions & Achievements */}
          {project.contributions && (
            <div className="space-y-2 text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#6B8E4E]" aria-hidden="true" />
                <span>My Actual Contributions</span>
              </h4>
              <div className="space-y-2 pt-1">
                {project.contributions.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300 bg-slate-50 dark:bg-[#162032] p-2.5 rounded-lg border border-slate-200 dark:border-[#334155]/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C88A4A] mt-1.5 shrink-0" aria-hidden="true" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Tags */}
          <div className="space-y-2 text-left">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded bg-[#6B8E4E]/10 dark:bg-[#6B8E4E]/15 border border-[#6B8E4E]/30 text-xs font-medium text-[#486430] dark:text-[#A9CC86]">
                  {tag}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Actions */}
        <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-slate-200 dark:border-[#334155] bg-slate-50 dark:bg-[#162032]">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title} source code on GitHub (opens in a new tab)`}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-[#1E293B] hover:bg-slate-100 dark:hover:bg-[#334155] text-xs font-semibold text-slate-800 dark:text-white border border-slate-300 dark:border-[#334155] transition-colors focus-visible:ring-2 focus-visible:ring-[#C88A4A]"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub Repo</span>
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open live deployment for ${project.title} (opens in a new tab)`}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-[#D0E4F5] hover:bg-[#BDDDF5] text-xs font-bold uppercase tracking-wider text-[#1E293B] shadow-lg shadow-[#D0E4F5]/30 transition-colors focus-visible:ring-2 focus-visible:ring-[#C88A4A]"
          >
            <span>Live Website</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
}
