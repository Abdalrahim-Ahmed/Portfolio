import React from 'react';
import { Award, GraduationCap, ShieldCheck, BookOpen } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

export default function Education() {
  const { training, education } = portfolioData;

  return (
    <section 
      id="education" 
      aria-label="Academic Background and Technical Training"
      className="py-16 sm:py-24 border-t border-slate-200 dark:border-[#334155] relative"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 space-y-12">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={24} duration={600}>
          <div className="pb-6 sm:pb-8 border-b border-slate-200 dark:border-[#334155]">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-[#C88A4A] uppercase mb-1">
              <GraduationCap className="w-4 h-4 text-[#C88A4A]" aria-hidden="true" />
              <span>ACADEMIC BACKGROUND & PROFESSIONAL TRACKS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-display font-bold tracking-wide uppercase text-slate-900 dark:text-white">
              EDUCATION & TRAINING
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left: Academic Degree (Span 5) */}
          <ScrollReveal className="lg:col-span-5 h-full" delay={0} direction="up" distance={36}>
            <div className="space-y-4 h-full">
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-[#C88A4A]" aria-hidden="true" />
              <span>UNIVERSITY DEGREE</span>
            </h3>

            {education.map((edu, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl border border-slate-200 dark:border-[#334155] bg-white dark:bg-[#0F172A] shadow-md space-y-3 relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#6B8E4E]/15 text-[#6B8E4E] border border-[#6B8E4E]/30">
                    Active Degree
                  </span>
                  <span className="text-xs font-semibold text-[#C88A4A]">
                    {edu.period}
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                  {edu.degree}
                </h4>

                <p className="text-xs sm:text-[13px] font-medium text-slate-700 dark:text-slate-300">
                  {edu.institution}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 pt-1 leading-relaxed border-t border-slate-100 dark:border-[#1E293B]">
                  {edu.details}
                </p>
              </div>
            ))}
          </div>
          </ScrollReveal>

          {/* Right: Technical Training & Certifications (Span 7) */}
          <ScrollReveal className="lg:col-span-7 h-full" delay={150} direction="up" distance={36}>
            <div className="space-y-4 h-full">
            <h3 className="text-xs font-bold tracking-[0.18em] uppercase text-slate-700 dark:text-slate-300 flex items-center gap-2">
              <Award className="w-3.5 h-3.5 text-[#C88A4A]" aria-hidden="true" />
              <span>TRAINING & FOUNDATIONS</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {training.map((t, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-xl border border-slate-200 dark:border-[#334155] bg-white dark:bg-[#0F172A] shadow-sm hover:border-[#D0E4F5]/60 transition-all duration-300 flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="w-9 h-9 rounded-lg bg-[#D0E4F5]/20 border border-[#D0E4F5]/40 flex items-center justify-center text-[#1E293B] dark:text-[#D0E4F5] mb-3">
                      {idx === 0 && <Award className="w-4 h-4 text-[#C88A4A]" />}
                      {idx === 1 && <BookOpen className="w-4 h-4 text-[#6B8E4E]" />}
                      {idx === 2 && <ShieldCheck className="w-4 h-4 text-[#D0E4F5]" />}
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-snug">
                      {t.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 pt-1">
                      {t.issuer}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1 pt-2 border-t border-slate-100 dark:border-[#1E293B]">
                    {t.skills.map((s, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 dark:bg-[#1E293B] text-slate-700 dark:text-slate-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
