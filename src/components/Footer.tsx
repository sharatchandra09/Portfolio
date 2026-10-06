import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { ArrowUp, MapPin, Mail, Linkedin, Phone, ExternalLink, Check, Copy } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = [
    { id: 'home', label: 'Home Overview' },
    { id: 'projects', label: 'Case Studies & Architecture' },
    { id: 'experience', label: 'Work History & Roles' },
    { id: 'stack', label: 'Tech Stack & Competencies' },
    { id: 'process', label: 'How I Build (Methodology)' },
    { id: 'about', label: 'About & Academic Foundation' },
    { id: 'contact', label: 'Contact & Let\'s Talk' },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <footer className="bg-[#07080D] border-t border-[#1F253C] relative overflow-hidden text-xs font-mono text-[#94A3B8]">
      {/* Top subtle gradient border line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 space-y-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Column 1: Brand & Profile (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-md bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-[0_0_12px_rgba(99,102,241,0.5)]"></span>
              <span className="text-base font-bold text-[#F8FAFC] font-heading tracking-tight">
                {PORTFOLIO_DATA.profile.name}
              </span>
            </div>

            <div className="text-xs text-indigo-300 font-semibold">
              {PORTFOLIO_DATA.profile.title} · {PORTFOLIO_DATA.profile.positioning}
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed max-w-sm">
              Engineering web applications, SaaS products, and client-focused software solutions from requirements to production deployment.
            </p>

            <div className="flex items-center gap-2 text-[11px] text-[#64748B] pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Client Engagements</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 text-indigo-400" />
                {PORTFOLIO_DATA.profile.location}
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
              Navigation
            </div>
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-indigo-300 transition-colors flex items-center gap-1.5 group text-left"
                  >
                    <span className="text-[#475569] group-hover:text-indigo-400 group-hover:translate-x-0.5 transition-all">›</span>
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Featured Projects & Links (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">
              Featured Work
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-[#0D101C] border border-[#20273F] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#F8FAFC]">AiroHR</span>
                  <a
                    href="https://airohr.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>airohr.com</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-[11px] text-[#94A3B8]">
                  Automated Payroll & AI Biometric Attendance SaaS
                </div>
              </div>

              <div className="p-3 rounded-xl bg-[#0D101C] border border-[#20273F] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-[#F8FAFC]">Worldwide Security</span>
                  <a
                    href="https://worldwidesecurity.co.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-indigo-400 hover:text-indigo-300 flex items-center gap-1"
                  >
                    <span>worldwidesecurity.co.in</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-[11px] text-[#94A3B8]">
                  Full-Lifecycle Commercial Portal & Quotation Engine
                </div>
              </div>
            </div>

            {/* Direct Connect Chips */}
            <div className="pt-2 flex flex-wrap gap-2">
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.profile.email, 'email')}
                className="px-2.5 py-1.5 rounded-lg bg-[#111526] hover:bg-[#1A2038] border border-[#242C48] text-[11px] text-[#CBD5E1] flex items-center gap-1.5 transition-colors"
                title="Copy Email"
              >
                {copiedText === 'email' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Email Copied</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-3 h-3 text-indigo-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.profile.phone, 'phone')}
                className="px-2.5 py-1.5 rounded-lg bg-[#111526] hover:bg-[#1A2038] border border-[#242C48] text-[11px] text-[#CBD5E1] flex items-center gap-1.5 transition-colors"
                title="Copy Phone"
              >
                {copiedText === 'phone' ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Phone Copied</span>
                  </>
                ) : (
                  <>
                    <Phone className="w-3 h-3 text-indigo-400" />
                    <span>Copy Phone</span>
                  </>
                )}
              </button>

              <a
                href={PORTFOLIO_DATA.profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1.5 rounded-lg bg-[#111526] hover:bg-[#1A2038] border border-[#242C48] text-[11px] text-[#CBD5E1] flex items-center gap-1.5 transition-colors"
              >
                <Linkedin className="w-3 h-3 text-indigo-400" />
                <span>LinkedIn</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-[#1A2034] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <div>
            © {new Date().getFullYear()} {PORTFOLIO_DATA.profile.name}. All verified engineering credentials preserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#475569]">Bengaluru (IST)</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#111526] hover:bg-[#1A2038] border border-[#242C48] text-[#CBD5E1] hover:text-[#F8FAFC] transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5 text-indigo-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
