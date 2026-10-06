import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { GraduationCap, Languages as LanguagesIcon, MapPin, Award, ArrowLeft, ArrowRight } from 'lucide-react';

interface AboutViewProps {
  onNavigate: (page: string) => void;
  onOpenResume: () => void;
  onBack?: () => void;
  previousPageTitle?: string;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigate,
  onOpenResume,
  onBack,
  previousPageTitle = 'Previous',
}) => {
  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Page Header with Dynamic Back Navigation */}
      <div className="space-y-3 pb-6 border-b border-[#21273D]">
        <button
          onClick={() => (onBack ? onBack() : onNavigate('home'))}
          className="text-xs font-mono text-[#94A3B8] hover:text-indigo-300 flex items-center gap-1.5 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to {previousPageTitle}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm bg-[#6366F1]"></span>
          <span className="text-xs font-mono font-semibold tracking-wider text-[#818CF8] uppercase">
            Profile & Credentials
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
          About Sharath Chandra
        </h1>
        <p className="text-xs sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
          Software developer based in Bengaluru, India. Building software from requirements to real products with engineering discipline and product-oriented thinking.
        </p>
      </div>

      {/* Main Narrative & Visual Setup Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
        
        {/* Narrative & Credentials */}
        <div className="lg:col-span-7 space-y-6 sm:space-y-8">
          
          <div className="bg-[#10131E] border border-[#21273D] rounded-2xl p-5 sm:p-8 space-y-4 sm:space-y-5 shadow-xl">
            <h2 className="text-lg sm:text-2xl font-bold text-[#F8FAFC] leading-snug">
              {PORTFOLIO_DATA.about.lead}
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-xs sm:text-base text-[#CBD5E1] leading-relaxed">
              {PORTFOLIO_DATA.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#21273D] flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center gap-1.5 text-[#F8FAFC]">
                <MapPin className="w-3.5 h-3.5 text-[#818CF8]" />
                <span>Bengaluru, India</span>
              </span>
              <span aria-hidden="true" className="text-[#384266]">·</span>
              <span>Weaiance Co-Founder</span>
              <span aria-hidden="true" className="text-[#384266]">·</span>
              <span className="text-[#818CF8]">Full-Stack Development</span>
            </div>
          </div>

          {/* Education Module */}
          <div className="bg-[#10131E] border border-[#21273D] rounded-2xl p-5 sm:p-8 shadow-md space-y-3 sm:space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#21273D]">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-[#818CF8]" />
                <h3 className="text-xs font-mono font-bold text-[#F8FAFC] uppercase tracking-wider">
                  Education & Academic Foundation
                </h3>
              </div>
              <span className="text-xs font-mono text-[#64748B]">
                {PORTFOLIO_DATA.education.period}
              </span>
            </div>

            <div className="space-y-1">
              <h4 className="text-base sm:text-lg font-bold text-[#F8FAFC]">
                {PORTFOLIO_DATA.education.degree}
              </h4>
              <div className="text-xs sm:text-sm text-[#94A3B8]">
                {PORTFOLIO_DATA.education.institution}
              </div>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-[#818CF8]">
                <Award className="w-4 h-4" />
                <span>Cumulative Grade Point: {PORTFOLIO_DATA.education.score}</span>
              </div>
            </div>
          </div>

          {/* Languages Module */}
          <div className="bg-[#10131E] border border-[#21273D] rounded-2xl p-5 sm:p-8 shadow-md space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 pb-3 border-b border-[#21273D]">
              <LanguagesIcon className="w-5 h-5 text-[#818CF8]" />
              <h3 className="text-xs font-mono font-bold text-[#F8FAFC] uppercase tracking-wider">
                Languages
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              {PORTFOLIO_DATA.languages.map((lang) => (
                <div
                  key={lang.name}
                  className="p-3.5 bg-[#090A0F] rounded-xl border border-[#21273D]"
                >
                  <div className="text-sm font-semibold text-[#F8FAFC]">{lang.name}</div>
                  <div className="text-[11px] text-[#64748B] mt-0.5">{lang.proficiency}</div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Workspace Photo & Spec Overview */}
        <div className="lg:col-span-5 space-y-6 w-full">
          <div className="bg-[#10131E] border border-[#21273D] rounded-2xl overflow-hidden shadow-xl">
            <div className="relative aspect-[4/3] w-full">
              <img
                src={PORTFOLIO_DATA.profile.workspaceImage}
                alt="Software Developer Workspace Setup"
                className="w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#10131E] via-transparent to-transparent"></div>
            </div>

            <div className="p-5 sm:p-6 space-y-2.5">
              <div className="text-xs font-mono text-[#818CF8]">
                Engineering Environment · Bengaluru
              </div>
              <h3 className="text-base font-bold text-[#F8FAFC]">
                Engineering Rigor & Quality Standards
              </h3>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                Code is written to last: clean separation of concerns, strict type-safety, indexed relational tables, and responsive interfaces that load effortlessly.
              </p>
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="p-5 bg-[#090A0F] border border-[#21273D] rounded-xl space-y-2.5 text-xs font-mono text-[#94A3B8]">
            <div className="text-[#818CF8] uppercase tracking-wider font-semibold">
              Profile Summary
            </div>
            <div className="flex justify-between py-1 border-b border-[#21273D]">
              <span>Name</span>
              <span className="text-[#F8FAFC] font-semibold">{PORTFOLIO_DATA.profile.name}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#21273D]">
              <span>Title</span>
              <span className="text-[#F8FAFC] font-semibold">{PORTFOLIO_DATA.profile.title}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#21273D]">
              <span>Current Role</span>
              <span className="text-[#F8FAFC]">Co-Founder, Weaiance</span>
            </div>
            <div className="flex justify-between py-1 border-b border-[#21273D]">
              <span>Degree</span>
              <span className="text-[#F8FAFC]">B.E. Computer Science</span>
            </div>
            <div className="flex justify-between py-1">
              <span>Location</span>
              <span className="text-[#F8FAFC]">{PORTFOLIO_DATA.profile.location}</span>
            </div>
          </div>

          <div className="pt-1">
            <button
              onClick={onOpenResume}
              className="w-full py-3 text-xs font-mono font-semibold rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-[#FFFFFF] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#6366F1]/25"
            >
              <span>View Full Printable Resume Document</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
