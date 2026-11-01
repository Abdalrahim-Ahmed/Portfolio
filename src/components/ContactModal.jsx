import React, { useState, useEffect, useRef } from 'react';
import { X, Send, CheckCircle2, MapPin, Loader2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Frontend Web Development (React.js / Tailwind CSS)',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const modalRef = useRef(null);
  const firstInputRef = useRef(null);

  // Focus trap & Escape key handler (WCAG 2.4.3 & 2.1.2)
  useEffect(() => {
    if (!isOpen) return;

    // Focus first input on open
    const timer = setTimeout(() => {
      if (firstInputRef.current) {
        firstInputRef.current.focus();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate async submission with authentic feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          service: 'Frontend Web Development (React.js / Tailwind CSS)',
          message: ''
        });
        onClose();
      }, 2500);
    }, 600);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 dark:bg-black/85 backdrop-blur-md"
      role="presentation"
    >
      {/* Backdrop click dismiss */}
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div 
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="relative w-full max-w-lg bg-white dark:bg-[#0F172A] border border-slate-200 dark:border-[#334155] rounded-2xl overflow-hidden shadow-2xl z-10 transition-colors"
      >
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-[#334155] bg-slate-50 dark:bg-[#162032]">
          <div className="flex items-center gap-2">
            <span className="text-[#C88A4A] text-lg font-bold" aria-hidden="true">✦</span>
            <h3 
              id="contact-modal-title" 
              className="font-bold text-sm sm:text-base text-slate-900 dark:text-white tracking-wider uppercase"
            >
              GET IN TOUCH
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close contact dialog"
            className="p-1.5 rounded-full bg-slate-200 dark:bg-[#1E293B] hover:bg-slate-300 dark:hover:bg-[#334155] text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#C88A4A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4" role="status" aria-live="polite">
              {/* Success Checkmark in Leaf Green (#6B8E4E) */}
              <div className="w-16 h-16 rounded-full bg-[#6B8E4E]/20 border border-[#6B8E4E] flex items-center justify-center text-[#6B8E4E]">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-display text-2xl uppercase tracking-wide text-slate-900 dark:text-white">Message Sent!</h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs">
                Thank you for reaching out, {formData.name || 'there'}. I will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <p className="text-xs text-slate-600 dark:text-slate-400">
                Have a project, freelance opportunity, or frontend role in mind? Send a message below.
              </p>

              <div>
                <label 
                  htmlFor="contact-name"
                  className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                >
                  Your Name <span className="text-[#C88A4A]" aria-hidden="true">*</span>
                </label>
                <input
                  ref={firstInputRef}
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#162032] border border-slate-300 dark:border-[#334155] focus:border-[#C88A4A] focus:outline-none focus:ring-1 focus:ring-[#C88A4A] text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
                />
              </div>

              <div>
                <label 
                  htmlFor="contact-email"
                  className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                >
                  Email Address <span className="text-[#C88A4A]" aria-hidden="true">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#162032] border border-slate-300 dark:border-[#334155] focus:border-[#C88A4A] focus:outline-none focus:ring-1 focus:ring-[#C88A4A] text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors"
                />
              </div>

              <div>
                <label 
                  htmlFor="contact-service"
                  className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                >
                  Inquiry / Opportunity Type
                </label>
                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#162032] border border-slate-300 dark:border-[#334155] focus:border-[#C88A4A] focus:outline-none focus:ring-1 focus:ring-[#C88A4A] text-xs text-slate-900 dark:text-white transition-colors"
                >
                  <option value="Frontend Web Development (React.js / Tailwind CSS)">Frontend Web Development (React.js / Tailwind CSS)</option>
                  <option value="Responsive Web Interface Implementation">Responsive Web Interface Implementation</option>
                  <option value="Full Website Development from Scratch">Full Website Development from Scratch</option>
                  <option value="Team Collaboration & Frontend Support">Team Collaboration & Frontend Support</option>
                  <option value="Other Inquiries">Other Inquiries</option>
                </select>
              </div>

              <div>
                <label 
                  htmlFor="contact-message"
                  className="block text-[11px] font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-1"
                >
                  Message / Project Details <span className="text-[#C88A4A]" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  required
                  placeholder="Describe your project, timeline, or opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-[#162032] border border-slate-300 dark:border-[#334155] focus:border-[#C88A4A] focus:outline-none focus:ring-1 focus:ring-[#C88A4A] text-xs text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <div className="text-[11px] text-slate-500 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#6B8E4E]" aria-hidden="true" />
                  <span>Qena, Egypt • Worldwide</span>
                </div>

                {/* Primary CTA Button in Shirt Blue (#D0E4F5) */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#D0E4F5] hover:bg-[#BDDDF5] text-[#1E293B] text-xs font-bold uppercase tracking-wider shadow-lg shadow-[#D0E4F5]/30 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-[#C88A4A]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="font-extrabold">Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
