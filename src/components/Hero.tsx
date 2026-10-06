import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { ArrowRight, ArrowDown, ExternalLink, Sparkles, Terminal, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenResume: () => void;
  onNavigate?: (page: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onNavigate }) => {
  const [activePreview, setActivePreview] = useState<'airohr' | 'security'>('airohr');

  const handlePageJump = (page: string) => {
    if (onNavigate) {
      onNavigate(page);
    } else {
      window.location.hash = `#/${page}`;
    }
  };

  const projectPreviews = {
    airohr: {
      title: 'AiroHR — Automated Payroll & HR',
      type: 'SaaS Platform',
      domain: 'Payroll · Biometric AI Attendance · Leave Workflows',
      website: 'airohr.com',
      image: PORTFOLIO_DATA.projects[0].image,
      highlight: 'Biometric Computer Vision & Liveness Detection Pipeline',
    },
    security: {
      title: 'Worldwide Security Services',
      type: 'Client Portal',
      domain: 'Quotation Engine · Dynamic Inquiries · Admin Portal',
      website: 'worldwidesecurity.co.in',
      image: PORTFOLIO_DATA.projects[1].image,
      highlight: 'End-to-End Delivery: Requirements to Production',
    },
  };

  const currentPreview = projectPreviews[activePreview];

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden bg-developer-mesh">
      {/* Background architectural grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-30"></div>
      
      {/* Soft atmospheric gradient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-tr from-indigo-600/15 via-purple-600/10 to-cyan-500/10 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Clean, High-Impact Developer Messaging */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121526] border border-[#2B3354] text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]"></span>
              <span className="text-[#E2E8F0]">Software Developer · Bengaluru, India</span>
            </div>

            {/* Main Headline - Bold & Minimal */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-[#F8FAFC] leading-[1.08] font-heading">
                Building software from{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  requirements
                </span>{' '}
                to real products.
              </h1>
              
              <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed max-w-xl">
                I'm <span className="text-[#F8FAFC] font-semibold">{PORTFOLIO_DATA.profile.name}</span>, Co-Founder at Weaiance. I engineer full-stack web applications, SaaS platforms, APIs, and databases with disciplined client delivery.
              </p>
            </div>

            {/* Clean Unboxed Stack Signal */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs font-mono text-[#CBD5E1] pt-1">
              <span className="text-indigo-400 font-semibold uppercase text-[11px]">Stack:</span>
              <span>React.js</span>
              <span className="text-[#475569]">·</span>
              <span>Node.js</span>
              <span className="text-[#475569]">·</span>
              <span>REST APIs</span>
              <span className="text-[#475569]">·</span>
              <span>PostgreSQL</span>
              <span className="text-[#475569]">·</span>
              <span>Firebase</span>
            </div>

            {/* Just Two Primary Actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={() => handlePageJump('projects')}
                className="px-6 py-3.5 text-sm font-bold text-[#FFFFFF] bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 rounded-xl transition-all shadow-lg shadow-indigo-600/30 flex items-center justify-center gap-2 group active:scale-[0.98]"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => handlePageJump('contact')}
                className="px-6 py-3.5 text-sm font-semibold text-[#F8FAFC] bg-[#141829] hover:bg-[#1C223A] border border-[#2B3354] hover:border-indigo-500/50 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Let's Talk</span>
              </button>
            </div>

          </div>

          {/* Right Column: Clean Interactive Spotlight Card */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-card-gradient border border-[#2D3656] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-950/40 relative">
              
              {/* Card Header with Spotlight Switcher */}
              <div className="px-4 py-3 bg-[#141829]/90 backdrop-blur border-b border-[#252D48] flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs font-mono text-indigo-300">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  <span className="font-semibold">FEATURED PROJECT SPOTLIGHT</span>
                </div>

                {/* Segmented Switcher */}
                <div className="flex items-center gap-1 bg-[#0C0F1A] p-1 rounded-lg border border-[#252D48] text-xs font-mono">
                  <button
                    onClick={() => setActivePreview('airohr')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activePreview === 'airohr'
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    AiroHR
                  </button>
                  <button
                    onClick={() => setActivePreview('security')}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activePreview === 'security'
                        ? 'bg-indigo-600 text-white font-bold'
                        : 'text-[#94A3B8] hover:text-white'
                    }`}
                  >
                    Worldwide Security
                  </button>
                </div>
              </div>

              {/* Project Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0A0D18]">
                <img
                  src={currentPreview.image}
                  alt={currentPreview.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C0F1B] via-transparent to-transparent pointer-events-none"></div>
                <div className="absolute top-3 left-3 bg-[#0E1222]/90 backdrop-blur px-2.5 py-1 rounded text-[11px] font-mono text-indigo-300 border border-[#2A3356]">
                  {currentPreview.type}
                </div>
              </div>

              {/* Spotlight Details */}
              <div className="p-5 space-y-3 bg-[#0C0F1B]">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-cyan-300 font-bold">{currentPreview.website}</span>
                  <span className="text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Production Verified</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#F8FAFC]">
                  {currentPreview.title}
                </h3>

                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {currentPreview.domain}
                </p>

                <div className="pt-2 border-t border-[#1E2540] flex items-center justify-between">
                  <button
                    onClick={() => handlePageJump('projects')}
                    className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors"
                  >
                    <span>View Full Case Study & Architecture</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://${currentPreview.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#64748B] hover:text-[#F8FAFC] flex items-center gap-1 transition-colors"
                  >
                    <span>Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
