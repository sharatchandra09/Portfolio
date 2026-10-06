import React, { useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { X, Printer, MapPin } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="resume-modal-dialog"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#090A0F]/90 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-6"
    >
      <div
        id="resume-modal-backdrop"
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div
        id="resume-modal-card"
        className="relative bg-[#10131E] border border-[#21273D] rounded-2xl w-full max-w-3xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200"
      >
        
        {/* Header Actions */}
        <div
          id="resume-modal-header"
          className="px-5 py-3.5 sm:px-6 sm:py-4 bg-[#131726] border-b border-[#21273D] flex items-center justify-between shrink-0"
        >
          <div className="flex items-center gap-2 text-xs font-mono text-[#818CF8]">
            <span className="w-2 h-2 rounded-full bg-[#6366F1]"></span>
            <span>VERIFIED DEVELOPER RESUME</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-mono text-[#CBD5E1] hover:text-[#F8FAFC] bg-[#171B2B] hover:bg-[#21273D] border border-[#21273D] rounded-lg transition-colors flex items-center gap-1.5"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#171B2B] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable/Readable Resume Document Container */}
        <div
          id="resume-document"
          className="p-4 sm:p-8 lg:p-10 overflow-y-auto space-y-6 sm:space-y-8 bg-[#090A0F] text-[#CBD5E1] font-sans"
        >
          
          {/* Candidate Header */}
          <div className="border-b border-[#21273D] pb-5">
            <h1 id="resume-title" className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              {PORTFOLIO_DATA.profile.name}
            </h1>
            <div className="text-xs sm:text-sm font-mono text-[#818CF8] font-semibold mt-1">
              {PORTFOLIO_DATA.profile.title}
            </div>
            <p className="text-xs text-[#94A3B8] mt-1.5">
              {PORTFOLIO_DATA.profile.positioning}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mt-3 text-xs font-mono text-[#94A3B8]">
              <span className="flex items-center gap-1 text-[#F8FAFC]">
                <MapPin className="w-3.5 h-3.5 text-[#6366F1]" />
                {PORTFOLIO_DATA.profile.location}
              </span>
              <span>·</span>
              <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className="hover:text-[#818CF8] break-all">
                {PORTFOLIO_DATA.profile.email}
              </a>
              <span>·</span>
              <a href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`} className="hover:text-[#818CF8]">
                {PORTFOLIO_DATA.profile.phone}
              </a>
              <span>·</span>
              <a href={PORTFOLIO_DATA.profile.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#818CF8]">
                {PORTFOLIO_DATA.profile.linkedin}
              </a>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="space-y-3 sm:space-y-4">
            <h2 className="text-xs font-mono uppercase font-bold text-[#818CF8] tracking-wider">
              Professional Experience
            </h2>

            {PORTFOLIO_DATA.experience.map((exp) => (
              <div key={exp.company} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-sm sm:text-base font-bold text-[#F8FAFC]">
                    {exp.role} <span className="text-[#818CF8]">· {exp.company}</span>
                  </div>
                  <div className="text-xs font-mono text-[#64748B]">
                    {exp.period} | {exp.location}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  {exp.summary}
                </p>

                <ul className="space-y-1 text-xs text-[#CBD5E1] pt-1">
                  {exp.responsibilities.map((r, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#6366F1] mt-0.5">•</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase font-bold text-[#818CF8] tracking-wider">
              Key Projects
            </h2>

            {PORTFOLIO_DATA.projects.map((proj) => (
              <div key={proj.id} className="space-y-1.5 border-l-2 border-[#21273D] pl-3.5">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1">
                  <div className="text-sm font-bold text-[#F8FAFC]">
                    {proj.title}
                  </div>
                  <div className="text-xs font-mono text-[#64748B]">
                    {proj.type} | {proj.website}
                  </div>
                </div>

                <p className="text-xs text-[#94A3B8]">
                  {proj.shortDescription}
                </p>

                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] font-mono text-[#CBD5E1]">
                  <span className="text-[#64748B]">Stack:</span>
                  {proj.tags.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span>{t}</span>
                      {idx < proj.tags.length - 1 && <span className="text-[#384266]">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase font-bold text-[#818CF8] tracking-wider">
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              {PORTFOLIO_DATA.skillsGrouped.map((grp) => (
                <div key={grp.category} className="p-2.5 bg-[#10131E] rounded-lg border border-[#21273D]">
                  <span className="font-mono text-[#F8FAFC] font-semibold block mb-0.5">
                    {grp.category}:
                  </span>
                  <span className="text-[#94A3B8]">
                    {grp.skills.join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2 border-t border-[#21273D]">
            <div>
              <h2 className="text-xs font-mono uppercase font-bold text-[#818CF8] tracking-wider mb-1.5">
                Education
              </h2>
              <div className="text-xs">
                <div className="font-bold text-[#F8FAFC]">{PORTFOLIO_DATA.education.degree}</div>
                <div className="text-[#94A3B8]">{PORTFOLIO_DATA.education.institution}</div>
                <div className="text-[#64748B] font-mono mt-1">
                  CGPA: {PORTFOLIO_DATA.education.score} | {PORTFOLIO_DATA.education.period}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-xs font-mono uppercase font-bold text-[#818CF8] tracking-wider mb-1.5">
                Languages
              </h2>
              <div className="text-xs space-y-1 text-[#94A3B8]">
                {PORTFOLIO_DATA.languages.map((l) => (
                  <div key={l.name}>
                    <span className="font-semibold text-[#F8FAFC]">{l.name}</span>: {l.proficiency}
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div
          id="resume-modal-footer"
          className="px-5 py-3 sm:px-6 sm:py-3.5 bg-[#131726] border-t border-[#21273D] flex items-center justify-between text-xs font-mono text-[#64748B] shrink-0"
        >
          <span>Source: Resume of Sharath Chandra</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] bg-[#171B2B] rounded-lg border border-[#21273D]"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
