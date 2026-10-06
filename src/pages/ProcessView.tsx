import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Compass, FileCode2, Cpu, GitMerge, CheckSquare, Rocket, ArrowLeft } from 'lucide-react';

interface ProcessViewProps {
  onNavigate: (page: string) => void;
  onBack?: () => void;
  previousPageTitle?: string;
}

export const ProcessView: React.FC<ProcessViewProps> = ({ onNavigate, onBack, previousPageTitle = 'Previous' }) => {
  const [activeStepIdx, setActiveStepIdx] = useState(0);
  const activeStep = PORTFOLIO_DATA.lifecycleSteps[activeStepIdx];

  const stepIcons = [
    <Compass className="w-6 h-6 text-[#818CF8]" key="understand" />,
    <FileCode2 className="w-6 h-6 text-[#818CF8]" key="plan" />,
    <Cpu className="w-6 h-6 text-[#818CF8]" key="build" />,
    <GitMerge className="w-6 h-6 text-[#818CF8]" key="integrate" />,
    <CheckSquare className="w-6 h-6 text-[#818CF8]" key="refine" />,
    <Rocket className="w-6 h-6 text-[#818CF8]" key="deliver" />,
  ];

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
            Engineering Methodology
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
          How I Build Software
        </h1>
        <p className="text-xs sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
          A disciplined, production-tested 6-stage lifecycle ensuring every software deliverable solves concrete business requirements with architectural integrity.
        </p>
      </div>

      {/* Interactive Step Navigator */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
        {PORTFOLIO_DATA.lifecycleSteps.map((step, idx) => {
          const isActive = activeStepIdx === idx;
          return (
            <button
              key={step.number}
              onClick={() => setActiveStepIdx(idx)}
              className={`p-3.5 sm:p-4 rounded-xl text-left border transition-all flex flex-col justify-between ${
                isActive
                  ? 'bg-[#171B2B] border-[#6366F1] shadow-lg shadow-[#6366F1]/15 ring-1 ring-[#6366F1]/50'
                  : 'bg-[#10131E] border-[#21273D] hover:border-[#384266] hover:bg-[#131726]'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`text-xs font-mono font-bold ${
                    isActive ? 'text-[#818CF8]' : 'text-[#64748B]'
                  }`}
                >
                  {step.number}
                </span>
                {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#6366F1]"></span>}
              </div>
              <div>
                <div
                  className={`text-xs sm:text-sm font-semibold truncate ${
                    isActive ? 'text-[#F8FAFC]' : 'text-[#94A3B8]'
                  }`}
                >
                  {step.title}
                </div>
                <div className="text-[10px] text-[#64748B] truncate mt-0.5">
                  {step.focus}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Phase Deep Dive Card */}
      <div className="bg-[#10131E] border border-[#21273D] rounded-2xl p-5 sm:p-8 lg:p-10 shadow-2xl space-y-6 sm:space-y-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
          
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="p-3 bg-[#171B2B] border border-[#21273D] rounded-xl shrink-0">
                {stepIcons[activeStepIdx]}
              </div>
              <div>
                <span className="text-xs font-mono text-[#818CF8] uppercase tracking-wider font-semibold">
                  Phase {activeStep.number} of 06
                </span>
                <h2 className="text-xl sm:text-3xl font-extrabold text-[#F8FAFC]">
                  {activeStep.number}. {activeStep.title}
                </h2>
              </div>
            </div>

            <div className="text-sm sm:text-base font-semibold text-[#818CF8]">
              {activeStep.focus}
            </div>

            <p className="text-xs sm:text-base text-[#CBD5E1] leading-relaxed">
              {activeStep.description}
            </p>
          </div>

          <div className="lg:col-span-6 bg-[#090A0F] p-5 sm:p-7 rounded-xl border border-[#21273D] space-y-3 sm:space-y-4">
            <h3 className="text-xs font-mono font-semibold uppercase text-[#94A3B8] tracking-wider pb-2 border-b border-[#21273D]">
              Phase Deliverables & Engineering Practices
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-[#CBD5E1]">
              {activeStep.activities.map((act, aIdx) => (
                <li key={aIdx} className="flex items-start gap-3">
                  <span className="text-xs font-mono text-[#818CF8] shrink-0 mt-0.5">
                    {activeStep.number}.{aIdx + 1}
                  </span>
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Phase Step Navigation Controls */}
        <div className="pt-4 border-t border-[#21273D] flex items-center justify-between gap-2">
          <button
            onClick={() => setActiveStepIdx((prev) => Math.max(0, prev - 1))}
            disabled={activeStepIdx === 0}
            className="px-3.5 py-2 text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] disabled:opacity-30 disabled:pointer-events-none rounded-lg hover:bg-[#171B2B] transition-colors"
          >
            ← Prev
          </button>

          <span className="text-xs font-mono text-[#64748B]">
            Phase {activeStepIdx + 1} of 6
          </span>

          <button
            onClick={() => setActiveStepIdx((prev) => Math.min(PORTFOLIO_DATA.lifecycleSteps.length - 1, prev + 1))}
            disabled={activeStepIdx === PORTFOLIO_DATA.lifecycleSteps.length - 1}
            className="px-3.5 py-2 text-xs font-mono text-[#818CF8] hover:text-[#6366F1] disabled:opacity-30 disabled:pointer-events-none rounded-lg hover:bg-[#171B2B] transition-colors font-medium"
          >
            Next →
          </button>
        </div>
      </div>

      {/* All 6 Steps Overview Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-mono uppercase tracking-wider text-[#94A3B8] font-semibold">
          Complete Lifecycle Sequence at a Glance
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {PORTFOLIO_DATA.lifecycleSteps.map((st, i) => (
            <div
              key={st.number}
              onClick={() => setActiveStepIdx(i)}
              className="p-4 sm:p-5 bg-[#10131E] border border-[#21273D] rounded-xl hover:border-[#6366F1]/50 cursor-pointer transition-all space-y-1.5"
            >
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#818CF8] font-bold">{st.number}</span>
                <span className="text-[#64748B]">{st.focus}</span>
              </div>
              <h4 className="text-sm sm:text-base font-bold text-[#F8FAFC]">{st.title}</h4>
              <p className="text-xs text-[#94A3B8] line-clamp-2">{st.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
