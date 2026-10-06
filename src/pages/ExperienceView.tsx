import React from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Briefcase, MapPin, Calendar, CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';

interface ExperienceViewProps {
  onNavigate: (page: string) => void;
  onOpenResume: () => void;
  onBack?: () => void;
  previousPageTitle?: string;
}

export const ExperienceView: React.FC<ExperienceViewProps> = ({
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
            Work History & Leadership
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
          Professional Experience
        </h1>
        <p className="text-xs sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
          Comprehensive record of commercial engineering leadership, freelance software architecture, and full lifecycle execution at Weaiance.
        </p>
      </div>

      {/* Primary Experience Card */}
      <div className="space-y-8">
        {PORTFOLIO_DATA.experience.map((exp) => (
          <div
            key={exp.company}
            className="bg-[#10131E] border border-[#21273D] rounded-2xl p-5 sm:p-8 lg:p-10 shadow-2xl space-y-6 sm:space-y-8 relative overflow-hidden"
          >
            {/* Indigo vertical line accent */}
            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#6366F1]"></div>

            {/* Role Header */}
            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 pb-6 border-b border-[#21273D]">
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-semibold text-[#818CF8] uppercase tracking-wider">
                  {exp.type}
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-[#F8FAFC]">
                  {exp.role}
                </h2>
                <div className="text-lg sm:text-xl font-bold text-[#818CF8]">
                  {exp.company}
                </div>
              </div>

              <div className="flex flex-wrap lg:flex-col items-start lg:items-end gap-2 text-xs font-mono text-[#94A3B8]">
                <div className="flex items-center gap-1.5 bg-[#171B2B] px-3 py-1.5 rounded-lg border border-[#21273D]">
                  <Calendar className="w-3.5 h-3.5 text-[#818CF8]" />
                  <span className="text-[#F8FAFC] font-semibold">{exp.period}</span>
                </div>
                <div className="flex items-center gap-1.5 bg-[#171B2B] px-3 py-1.5 rounded-lg border border-[#21273D]">
                  <MapPin className="w-3.5 h-3.5 text-[#818CF8]" />
                  <span>{exp.location}</span>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase text-[#64748B] tracking-wider font-semibold">
                Overview & Scope
              </h3>
              <p className="text-xs sm:text-base text-[#CBD5E1] leading-relaxed">
                {exp.summary}
              </p>
            </div>

            {/* Responsibilities Grid */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-[#818CF8]" />
                <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F8FAFC]">
                  Verified Responsibilities & Engineering Scope
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-[#CBD5E1]">
                {exp.responsibilities.map((resp, rIdx) => (
                  <div
                    key={rIdx}
                    className="flex items-start gap-2.5 p-3.5 sm:p-4 rounded-xl bg-[#090A0F] border border-[#21273D] hover:border-[#384266] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0 mt-0.5" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Execution Stack */}
            <div className="pt-4 border-t border-[#21273D] space-y-2">
              <div className="text-xs font-mono text-[#64748B] uppercase font-semibold">
                Production Technologies Used:
              </div>
              <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs font-mono text-[#94A3B8]">
                {exp.technologies.map((t, idx) => (
                  <React.Fragment key={t}>
                    <span className="text-[#818CF8] font-medium">{t}</span>
                    {idx < exp.technologies.length - 1 && (
                      <span aria-hidden="true" className="text-[#384266]">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Engineering Discipline & Client Standards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-5 sm:p-6 bg-[#10131E] border border-[#21273D] rounded-xl space-y-2.5">
          <Terminal className="w-5 h-5 text-[#818CF8]" />
          <h3 className="text-base font-bold text-[#F8FAFC]">Requirement Analysis</h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Translating ambiguous stakeholder requests into unambiguous engineering specifications and database models.
          </p>
        </div>

        <div className="p-5 sm:p-6 bg-[#10131E] border border-[#21273D] rounded-xl space-y-2.5">
          <ShieldCheck className="w-5 h-5 text-[#818CF8]" />
          <h3 className="text-base font-bold text-[#F8FAFC]">Full Lifecycle Delivery</h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Managing the entire pathway from initial data schema design to production deployment, security hardening, and client handover.
          </p>
        </div>

        <div className="p-5 sm:p-6 bg-[#10131E] border border-[#21273D] rounded-xl space-y-2.5 sm:col-span-2 lg:col-span-1">
          <Briefcase className="w-5 h-5 text-[#818CF8]" />
          <h3 className="text-base font-bold text-[#F8FAFC]">Client Transparency</h3>
          <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
            Regular milestone demonstrations, verified deliverables, and disciplined communication throughout project execution.
          </p>
        </div>
      </div>

      {/* Quick Navigation Footer */}
      <div className="p-4 sm:p-6 bg-[#090A0F] border border-[#21273D] rounded-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 text-center sm:text-left">
        <button
          onClick={onOpenResume}
          className="text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] underline underline-offset-4 py-1"
        >
          View Full Printable Resume Document
        </button>

        <button
          onClick={() => onNavigate('projects')}
          className="px-5 py-2.5 text-xs font-semibold rounded-lg bg-[#6366F1] hover:bg-[#4F46E5] text-[#FFFFFF] transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#6366F1]/20"
        >
          <span>Explore Featured Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

    </div>
  );
};
