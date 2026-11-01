import React from 'react';
import { Search, Lightbulb, Code, PenTool, Send, Quote, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

const processIcons = {
  Search: Search,
  Lightbulb: Lightbulb,
  Code: Code,
  PenTool: PenTool,
  Send: Send
};

export default function SkillsProcessQuote({ onOpenContact }) {
  const { skillsCategories, workProcess, quoteCard } = portfolioData;

  return (
    <section 
      id="skills"
      aria-label="Technical Skills, Work Process and Philosophy"
      className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#334155] relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* ================= COLUMN 1: TECHNICAL SKILLS (Span 4) ================= */}
          <ScrollReveal className="lg:col-span-4 h-full" delay={0} direction="up" distance={36}>
            <div className="flex flex-col justify-between space-y-6 pr-0 lg:pr-4 h-full">
            
            <div>
              {/* Column Header */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-[#334155]">
                <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-slate-900 dark:text-white font-sans">
                  TECHNICAL SKILLS
                </h2>
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#6B8E4E]/15 text-[#6B8E4E] border border-[#6B8E4E]/30">
                  Level: Good
                </span>
              </div>

              {/* Categorized Skills */}
              <div className="pt-6 space-y-6">
                
                {skillsCategories.map((cat, idx) => (
                  <div key={idx} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[#C88A4A] font-bold text-xs tracking-[0.18em] uppercase block">
                        {cat.category}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        {cat.levelBadge}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-600 dark:text-slate-400">
                      {cat.description}
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-2 pt-1" role="list" aria-label={`${cat.category} skills`}>
                      {cat.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          role="listitem"
                          className="px-3 py-1.5 rounded-lg bg-[#6B8E4E]/10 dark:bg-[#6B8E4E]/15 border border-[#6B8E4E]/30 text-xs font-semibold tracking-wide text-[#486430] dark:text-[#A9CC86] hover:bg-[#6B8E4E] hover:text-white dark:hover:text-white transition-colors cursor-default shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Practical Level Callout */}
                <div className="p-3.5 rounded-xl border border-slate-200 dark:border-[#334155] bg-slate-50 dark:bg-[#0F172A] text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#6B8E4E] shrink-0 mt-0.5" aria-hidden="true" />
                  <p className="leading-relaxed">
                    Practical experience developing projects from scratch, crafting clean UI components, and optimizing responsive layouts across devices.
                  </p>
                </div>

              </div>

            </div>
          </div>
          </ScrollReveal>

          {/* ================= COLUMN 2: WORK PROCESS (Span 4) ================= */}
          <ScrollReveal className="lg:col-span-4 h-full" delay={150} direction="up" distance={36}>
            <div className="flex flex-col space-y-6 h-full">
            
            {/* Column Header */}
            <h2 className="text-sm sm:text-base font-bold tracking-[0.2em] uppercase text-slate-900 dark:text-white font-sans pb-6 border-b border-slate-200 dark:border-[#334155]">
              DEVELOPMENT WORKFLOW
            </h2>

            {/* Stepper Timeline */}
            <div className="relative pt-2 pl-2">
              
              {/* Connecting Vertical Line */}
              <div 
                aria-hidden="true" 
                className="absolute left-[63.5px] top-6 bottom-6 w-[1.5px] bg-slate-300 dark:bg-[#334155] -z-0" 
              />

              <div className="space-y-6 relative z-10">
                {workProcess.map((step, idx) => {
                  const IconComponent = processIcons[step.icon] || Sparkles;
                  return (
                    <div key={idx} className="flex items-start gap-4 group">
                      
                      {/* Step Number in Wood Warm Accent */}
                      <span className="font-display text-lg sm:text-xl font-bold text-[#C88A4A] tracking-tight w-6 shrink-0 pt-0.5 select-none">
                        {step.step}
                      </span>

                      {/* Icon Circle */}
                      <div className="w-8 h-8 rounded-full bg-white dark:bg-[#0F172A] border border-slate-300 dark:border-[#334155] flex items-center justify-center shrink-0 group-hover:border-[#C88A4A] group-hover:bg-[#C88A4A]/10 transition-all duration-300 shadow-sm">
                        <IconComponent className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400 group-hover:text-[#C88A4A] transition-colors" aria-hidden="true" />
                      </div>

                      {/* Step Title & Desc */}
                      <div className="flex flex-col text-left">
                        <h3 className="text-xs sm:text-[13px] font-bold tracking-[0.16em] uppercase text-slate-900 dark:text-slate-200 group-hover:text-[#C88A4A] transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 pt-0.5 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>

                    </div>
                  );
                })}
              </div>

            </div>

          </div>
          </ScrollReveal>

          {/* ================= COLUMN 3: QUOTE / SUMMARY CARD (Span 4) ================= */}
          <ScrollReveal className="lg:col-span-4 h-full" delay={300} direction="up" distance={36}>
            <div className="flex flex-col justify-between h-full">
            
            <div 
              className="w-full h-full min-h-[380px] rounded-2xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden transition-all duration-500 hover:scale-[1.01] border border-slate-200 dark:border-[#334155] bg-white dark:bg-gradient-to-br dark:from-[#162032] dark:to-[#0F172A] shadow-xl hover:shadow-2xl"
              style={{
                boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.6), 0 0 20px -5px rgba(200, 138, 74, 0.15)'
              }}
            >
              {/* Ambient shine */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#D0E4F5]/15 dark:bg-[#D0E4F5]/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-[#C88A4A]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Big Quote Icon in Wood Warm Accent */}
              <div className="relative z-10">
                <Quote className="w-12 h-12 text-[#C88A4A] opacity-80 rotate-180" aria-hidden="true" />
              </div>

              {/* Quote Body */}
              <div className="relative z-10 py-6">
                <blockquote className="text-lg sm:text-xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed tracking-wide">
                  "{quoteCard.quote}"
                </blockquote>
              </div>

              {/* Signature & Bottom CTA */}
              <div className="relative z-10 pt-4 border-t border-slate-200 dark:border-[#334155] space-y-4">
                
                {/* Handwritten Cursive Signature in Wood Warm Accent */}
                <div className="select-none">
                  <span className="font-signature text-4xl sm:text-5xl text-[#C88A4A] font-normal block transform -rotate-3 tracking-wide">
                    {quoteCard.signature}
                  </span>
                </div>

                {/* Bottom Trigger */}
                <button
                  onClick={onOpenContact}
                  aria-label="Open contact form to discuss frontend opportunities"
                  className="group flex items-center justify-between w-full pt-2 text-left focus-visible:ring-2 focus-visible:ring-[#C88A4A] rounded-md px-1 py-1"
                >
                  <span className="text-[11px] font-bold tracking-[0.18em] uppercase text-slate-800 dark:text-slate-300 group-hover:text-[#C88A4A] transition-colors">
                    {quoteCard.bottomText}
                  </span>
                  <span className="text-[#C88A4A] text-lg font-bold transition-transform duration-300 group-hover:rotate-45 group-hover:scale-125" aria-hidden="true">
                    ✦
                  </span>
                </button>

              </div>

            </div>

          </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
