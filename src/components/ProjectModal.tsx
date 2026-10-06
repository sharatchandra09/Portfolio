import React, { useEffect } from 'react';
import { ProjectData } from '@/src/data/portfolioData';
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Database } from 'lucide-react';

interface ProjectModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#090A0F]/90 backdrop-blur-md flex items-center justify-center p-2.5 sm:p-6"
    >
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      <div className="relative bg-[#10131E] border border-[#21273D] rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden z-10 max-h-[92vh] flex flex-col my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="px-5 py-3.5 sm:px-6 sm:py-4 bg-[#131726] border-b border-[#21273D] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 text-xs font-mono">
            <span className="font-bold text-[#818CF8]">{project.number}</span>
            <span className="text-[#384266]">/</span>
            <span className="text-[#F8FAFC]">{project.type}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#171B2B] transition-colors focus:outline-none focus:ring-1 focus:ring-[#6366F1]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 sm:space-y-8">
          
          {/* Title & Intro */}
          <div className="space-y-2.5 sm:space-y-3">
            <h2 id="modal-title" className="text-xl sm:text-3xl font-extrabold text-[#F8FAFC]">
              {project.title}
            </h2>
            <p className="text-xs sm:text-base text-[#CBD5E1] leading-relaxed">
              {project.fullDescription}
            </p>

            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-[#94A3B8] pt-1">
              <span className="text-[#64748B] uppercase font-semibold">Tech Matrix:</span>
              {project.tags.map((t, idx) => (
                <React.Fragment key={t}>
                  <span className="text-[#818CF8]">{t}</span>
                  {idx < project.tags.length - 1 && (
                    <span aria-hidden="true" className="text-[#384266]">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Image Banner */}
          <div className="rounded-xl overflow-hidden border border-[#21273D] bg-[#090A0F]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover max-h-[360px]"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Architecture Breakdown */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#21273D]">
              <Layers className="w-4 h-4 text-[#818CF8]" />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F8FAFC]">
                Technical Architecture Points
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
              {project.architecturePoints.map((arch, aIdx) => (
                <div
                  key={aIdx}
                  className="bg-[#090A0F] p-4 rounded-xl border border-[#21273D] space-y-1.5"
                >
                  <div className="text-xs font-mono text-[#818CF8] font-semibold">
                    0{aIdx + 1}. {arch.title}
                  </div>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {arch.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Development Contribution */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#21273D]">
              <Cpu className="w-4 h-4 text-[#818CF8]" />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F8FAFC]">
                Detailed Engineering Scope
              </h3>
            </div>

            <div className="space-y-2">
              {project.developmentContribution.map((contrib, cIdx) => (
                <div
                  key={cIdx}
                  className="flex items-start gap-2.5 p-3 rounded-lg bg-[#090A0F] border border-[#21273D]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#CBD5E1]">{contrib}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-2 pb-2 border-b border-[#21273D]">
              <Database className="w-4 h-4 text-[#818CF8]" />
              <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F8FAFC]">
                Delivered Capabilities & Features
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[#94A3B8]">
              {project.capabilities.map((cap) => (
                <div key={cap} className="flex items-center gap-2 py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] shrink-0"></span>
                  <span className="text-[#CBD5E1]">{cap}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-5 py-3.5 sm:px-6 sm:py-4 bg-[#131726] border-t border-[#21273D] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 shrink-0">
          <div className="text-xs font-mono text-[#64748B] text-center sm:text-left">
            Project Domain: {project.domain}
          </div>

          <div className="flex items-center gap-2.5 justify-end">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] bg-[#171B2B] rounded-lg border border-[#21273D]"
            >
              Close
            </button>
            <a
              href={`https://${project.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none px-4 py-2 text-xs font-semibold text-[#FFFFFF] bg-[#6366F1] hover:bg-[#4F46E5] rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-md shadow-[#6366F1]/20 text-center"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
