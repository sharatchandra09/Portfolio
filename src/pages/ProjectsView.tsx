import React, { useState } from 'react';
import { PORTFOLIO_DATA, ProjectData } from '@/src/data/portfolioData';
import { ExternalLink, Layers, ShieldCheck, CheckCircle2, ChevronRight, Cpu, ArrowLeft } from 'lucide-react';
import { BiometricSimulator } from '@/src/components/BiometricSimulator';
import { ArchitectureDiagram } from '@/src/components/ArchitectureDiagram';

interface ProjectsViewProps {
  onSelectProject: (project: ProjectData) => void;
  onBack: () => void;
  previousPageTitle?: string;
}

export const ProjectsView: React.FC<ProjectsViewProps> = ({ onSelectProject, onBack, previousPageTitle = 'Previous' }) => {
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<Record<string, number>>({
    airohr: 0,
    'worldwide-security': 0,
  });

  const handleTabChange = (projectId: string, tabIndex: number) => {
    setActiveWorkflowTab((prev) => ({ ...prev, [projectId]: tabIndex }));
  };

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
      
      {/* Page Header with Dynamic Back Navigation */}
      <div className="space-y-3 pb-6 border-b border-[#21273D]">
        <button
          onClick={onBack}
          className="text-xs font-mono text-[#94A3B8] hover:text-indigo-300 flex items-center gap-1.5 transition-colors group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          <span>Back to {previousPageTitle}</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-sm bg-[#6366F1]"></span>
          <span className="text-xs font-mono font-semibold tracking-wider text-[#818CF8] uppercase">
            Engineering Portfolio / Projects
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
          Featured Projects & Architecture
        </h1>
        <p className="text-xs sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
          In-depth technical breakdown of production systems engineered by Sharath Chandra, spanning automated payroll SaaS platforms, computer vision attendance engines, and independent client deliverables.
        </p>
      </div>

      {/* System Architecture Diagram Component */}
      <ArchitectureDiagram />

      {/* Full Projects Editorial List */}
      <div className="space-y-16 sm:space-y-24">
        {PORTFOLIO_DATA.projects.map((project) => {
          const isAiroHR = project.id === 'airohr';
          const currentTabIdx = activeWorkflowTab[project.id] || 0;
          const currentTab = project.workflowTabs[currentTabIdx];

          return (
            <article
              key={project.id}
              className="bg-[#10131E] border border-[#21273D] rounded-2xl overflow-hidden shadow-2xl transition-all hover:border-[#384266]"
            >
              {/* Top Meta Bar */}
              <div className="px-5 py-3.5 sm:px-6 sm:py-4 bg-[#131726] border-b border-[#21273D] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#94A3B8]">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <span className="text-sm font-bold text-[#818CF8]">{project.number}</span>
                  <span className="text-[#384266]">/</span>
                  <span className="text-[#F8FAFC] font-semibold">{project.type}</span>
                  <span className="text-[#384266]">·</span>
                  <span>Role: {project.role}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-[#64748B]">{project.domain}</span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-2.5 py-1 text-xs font-mono font-medium text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 rounded-lg transition-colors flex items-center gap-1.5"
                    title="Open Case Study Modal"
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Quick Spec Modal</span>
                  </button>
                  <a
                    href={`https://${project.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#818CF8] hover:text-[#6366F1] transition-colors flex items-center gap-1.5 font-medium underline-offset-4 hover:underline"
                  >
                    <span>{project.website}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Main Case Study Body */}
              <div className="p-5 sm:p-8 lg:p-10 space-y-8 sm:space-y-10">
                
                {/* Headline & Abstract */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                  <div className="lg:col-span-8 space-y-3 sm:space-y-4">
                    <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                      {project.title}
                    </h2>
                    <p className="text-xs sm:text-base text-[#CBD5E1] leading-relaxed">
                      {project.fullDescription}
                    </p>
                    
                    {/* Technical Stack Tags (Zero-Pill: clean text with typographic dots) */}
                    <div className="pt-1 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-mono text-[#94A3B8]">
                      <span className="text-[#64748B] uppercase font-semibold">Technologies:</span>
                      {project.tags.map((tag, tIdx) => (
                        <React.Fragment key={tag}>
                          <span className="text-[#F8FAFC]">{tag}</span>
                          {tIdx < project.tags.length - 1 && (
                            <span aria-hidden="true" className="text-[#384266]">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>

                  {/* Actions: responsive stacking */}
                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5 pt-1 w-full">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="w-full px-5 py-3 text-sm font-semibold text-[#FFFFFF] bg-[#6366F1] hover:bg-[#4F46E5] rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md shadow-[#6366F1]/20 text-center"
                    >
                      <span>Open Full Spec Modal</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>

                    <a
                      href={`https://${project.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full px-5 py-3 text-sm font-medium text-[#F8FAFC] bg-[#171B2B] hover:bg-[#21273D] border border-[#21273D] rounded-lg transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <span>Visit Live Website</span>
                      <ExternalLink className="w-4 h-4 text-[#94A3B8]" />
                    </a>
                  </div>
                </div>

                {/* Asymmetric Visual Preview & Capabilities */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
                  
                  {/* Visual Preview */}
                  <div className="lg:col-span-7 group relative rounded-xl overflow-hidden border border-[#21273D] bg-[#090A0F]">
                    <img
                      src={project.image}
                      alt={`${project.title} Interface Preview`}
                      className="w-full h-auto object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/85 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs font-mono text-[#F8FAFC]">
                      <span className="bg-[#090A0F]/90 backdrop-blur px-2.5 py-1 rounded border border-[#21273D]">
                        Production Architecture
                      </span>
                      <span className="text-[#818CF8]">{project.website}</span>
                    </div>
                  </div>

                  {/* Key Capabilities List */}
                  <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#21273D]">
                      <Layers className="w-4 h-4 text-[#818CF8]" />
                      <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-[#F8FAFC]">
                        Key Delivered Capabilities
                      </h4>
                    </div>

                    <ul className="space-y-2.5 sm:space-y-3 text-xs sm:text-sm text-[#CBD5E1]">
                      {project.capabilities.map((cap) => (
                        <li key={cap} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-[#818CF8] shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Biometric Simulator Integration for AiroHR */}
                {isAiroHR && (
                  <div className="pt-2">
                    <BiometricSimulator />
                  </div>
                )}

                {/* Interactive Workflow Tabs */}
                <div className="bg-[#090A0F] border border-[#21273D] rounded-xl p-4 sm:p-6 space-y-5">
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3 sm:pb-4 border-b border-[#21273D] gap-3">
                    <div className="flex items-center gap-2">
                      {isAiroHR ? (
                        <Cpu className="w-4 h-4 text-[#818CF8]" />
                      ) : (
                        <ShieldCheck className="w-4 h-4 text-[#818CF8]" />
                      )}
                      <h4 className="text-sm font-semibold text-[#F8FAFC]">
                        {isAiroHR
                          ? 'Module Architecture & AI Vision Engine'
                          : 'Commercial Lifecycle & Subsystems'}
                      </h4>
                    </div>

                    {/* Interactive Tab Controls with clean horizontal swipe on mobile */}
                    <div className="flex items-center gap-1.5 bg-[#10131E] p-1 rounded-lg border border-[#21273D] overflow-x-auto no-scrollbar">
                      {project.workflowTabs.map((tab, tIdx) => (
                        <button
                          key={tab.name}
                          onClick={() => handleTabChange(project.id, tIdx)}
                          className={`px-3 py-1.5 text-xs font-mono rounded transition-colors shrink-0 ${
                            currentTabIdx === tIdx
                              ? 'bg-[#6366F1] text-[#FFFFFF] font-semibold shadow-sm'
                              : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                          }`}
                        >
                          {tab.name}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Active Tab Content */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6 items-center">
                    <div className="md:col-span-5 space-y-1.5">
                      <div className="text-xs font-mono text-[#818CF8] uppercase tracking-wider">
                        Workflow Focus
                      </div>
                      <h5 className="text-base font-bold text-[#F8FAFC]">
                        {currentTab.name}
                      </h5>
                      <p className="text-xs sm:text-sm text-[#94A3B8]">
                        {currentTab.subtitle}
                      </p>
                    </div>

                    <div className="md:col-span-7 bg-[#10131E] p-4 rounded-lg border border-[#21273D]">
                      <ul className="space-y-2 text-xs sm:text-sm text-[#CBD5E1]">
                        {currentTab.items.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1] shrink-0"></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Lifecycle Journey Callout for Worldwide Security */}
                  {!isAiroHR && (
                    <div className="mt-3 pt-3 border-t border-[#21273D] flex flex-wrap items-center justify-between gap-2.5 text-xs font-mono text-[#94A3B8]">
                      <span className="text-[#818CF8] font-medium">Lifecycle Journey:</span>
                      <div className="flex flex-wrap items-center gap-1 text-[#F8FAFC]">
                        <span>REQUIREMENTS</span>
                        <span className="text-[#818CF8]">→</span>
                        <span>PLANNING</span>
                        <span className="text-[#818CF8]">→</span>
                        <span>DEVELOPMENT</span>
                        <span className="text-[#818CF8]">→</span>
                        <span>INTEGRATION</span>
                        <span className="text-[#818CF8]">→</span>
                        <span>DELIVERY</span>
                      </div>
                    </div>
                  )}

                </div>

                {/* Development Contribution Narrative */}
                <div className="pt-2 border-t border-[#21273D]">
                  <h4 className="text-xs font-mono font-semibold uppercase text-[#64748B] tracking-wider mb-3">
                    Development Contribution & Execution
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm">
                    {project.developmentContribution.map((contrib, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-start gap-2.5 p-3.5 rounded-lg bg-[#090A0F] border border-[#21273D]"
                      >
                        <span className="text-xs font-mono text-[#818CF8] shrink-0 mt-0.5">
                          0{cIdx + 1}
                        </span>
                        <span className="text-[#CBD5E1]">{contrib}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </article>
          );
        })}
      </div>

    </div>
  );
};
