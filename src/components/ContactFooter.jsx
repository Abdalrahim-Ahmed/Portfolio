import React from 'react';
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { portfolioData } from '../data/portfolioData';
import ScrollReveal from './ScrollReveal';

const socialIcons = {
  GitHub: GithubIcon,
  LinkedIn: LinkedinIcon
};

export default function ContactFooter({ onOpenContact }) {
  return (
    <footer 
      id="contact" 
      aria-label="Contact and Social Profiles"
      className="pt-16 sm:pt-24 pb-12 border-t border-slate-200 dark:border-[#334155] relative bg-slate-50 dark:bg-[#0F172A]/90"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pb-16 border-b border-slate-200 dark:border-[#334155]">
          
          {/* ================= LEFT COLUMN: Text & Info (Span 6) ================= */}
          <ScrollReveal className="lg:col-span-6 h-full" delay={0} direction="up" distance={36}>
            <div className="space-y-6 sm:space-y-8 text-left">
            
            {/* Title with Wood Warm Sparkle */}
            <div className="flex items-center gap-2">
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight uppercase text-slate-900 dark:text-white leading-none">
                {portfolioData.contact.title}
              </h2>
              <span className="text-[#C88A4A] text-2xl sm:text-3xl animate-pulse" aria-hidden="true">✦</span>
            </div>

            {/* Description */}
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md font-normal">
              {portfolioData.contact.subtitle}
            </p>

            {/* CTA Button: Shirt Blue (#D0E4F5) Main CTA Button */}
            <div className="pt-2">
              <button
                onClick={onOpenContact}
                aria-label="Open contact form to start a collaboration"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-[#D0E4F5] hover:bg-[#BDDDF5] text-[#1E293B] text-xs sm:text-sm font-bold tracking-[0.18em] uppercase transition-all duration-300 shadow-[0_0_25px_rgba(208,228,245,0.45)] hover:shadow-[0_0_35px_rgba(208,228,245,0.7)] active:scale-95 focus-visible:ring-2 focus-visible:ring-[#C88A4A]"
              >
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 text-[#1E293B]" aria-hidden="true" />
                <span className="font-extrabold">{portfolioData.contact.cta}</span>
              </button>
            </div>

            {/* Contact Details List */}
            <div className="pt-6 space-y-3.5 border-t border-slate-200 dark:border-[#334155]">
              
              {/* Email */}
              <a 
                href={`mailto:${portfolioData.contact.email}`}
                aria-label={`Send email to ${portfolioData.contact.email}`}
                className="flex items-center gap-3 group text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C88A4A] rounded-md px-1 py-0.5"
              >
                <div className="w-7 h-7 rounded-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-[#C88A4A] group-hover:border-[#C88A4A]/50 transition-colors shadow-sm">
                  <Mail className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>{portfolioData.contact.email}</span>
              </a>

              {/* Phone */}
              <a 
                href={`tel:${portfolioData.contact.phone.replace(/\s+/g, '')}`}
                aria-label={`Call phone number: ${portfolioData.contact.phone}`}
                className="flex items-center gap-3 group text-xs sm:text-[13px] text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C88A4A] rounded-md px-1 py-0.5"
              >
                <div className="w-7 h-7 rounded-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:text-[#C88A4A] group-hover:border-[#C88A4A]/50 transition-colors shadow-sm">
                  <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>{portfolioData.contact.phone}</span>
              </a>

              {/* Location (Leaf Green Accent) */}
              <div className="flex items-center gap-3 text-xs sm:text-[13px] text-slate-600 dark:text-slate-400 px-1">
                <div className="w-7 h-7 rounded-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] flex items-center justify-center text-[#6B8E4E] shadow-sm">
                  <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>{portfolioData.contact.location}</span>
              </div>

            </div>

          </div>
          </ScrollReveal>

          {/* ================= RIGHT COLUMN: Laptop Desk Setup Mockup (Span 6) ================= */}
          <ScrollReveal className="lg:col-span-6 relative flex justify-center lg:justify-end items-center" delay={160} direction="up" distance={36}>
            <div className="relative w-full flex justify-center lg:justify-end">
            
            {/* Ambient Soft Glow behind desk mockup */}
            <div className="absolute w-[300px] h-[300px] bg-[#D0E4F5]/15 dark:bg-[#D0E4F5]/10 rounded-full blur-[90px] pointer-events-none" />

            <div className="relative rounded-2xl overflow-hidden border border-[#334155] shadow-2xl max-w-[480px] w-full group bg-[#0F172A]">
              <img
                src="/assets/footer_workspace.jpg"
                alt="Modern frontend developer workspace with laptop running code editor, ambient lighting, and keyboard"
                className="w-full h-auto aspect-[16/10] object-cover filter contrast-[1.04] brightness-[1.02] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/90 via-[#0F172A]/20 to-transparent pointer-events-none" />
              
              {/* Badge on Desk Mockup */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-slate-300 bg-[#0F172A]/85 backdrop-blur-md px-3.5 py-2 rounded-lg border border-[#334155]">
                <span className="font-semibold uppercase tracking-wider text-white">Frontend Craftsmanship</span>
                <span className="text-[#C88A4A] font-bold">EDITION 2026</span>
              </div>
            </div>

            </div>
          </ScrollReveal>

        </div>

        {/* ================= BOTTOM BAR: Copyright & Socials ================= */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} {portfolioData.fullName}. All rights reserved.</p>

          <div className="flex items-center gap-4" role="list" aria-label="Social media profiles">
            {portfolioData.contact.socials.map((social) => {
              const Icon = socialIcons[social.name] || Mail;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white dark:bg-[#1E293B] border border-slate-200 dark:border-[#334155] text-slate-600 dark:text-slate-400 hover:text-[#C88A4A] dark:hover:text-[#C88A4A] hover:border-[#C88A4A] transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-[#C88A4A]"
                  aria-label={`Visit ${portfolioData.name} on ${social.name} (opens in a new tab)`}
                >
                  <Icon className="w-3.5 h-3.5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

      </div>
    </footer>
  );
}
