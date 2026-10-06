import React from 'react';
import { PORTFOLIO_DATA, ProjectData } from '@/src/data/portfolioData';
import { ArrowRight, ExternalLink, ChevronRight, GraduationCap, Layout, Server, Database, Cloud, Briefcase, Rocket, Sparkles, Layers, Cpu } from 'lucide-react';
import { Hero } from '@/src/components/Hero';

interface HomeViewProps {
  onNavigate: (page: string) => void;
  onSelectProject: (project: ProjectData) => void;
  onOpenResume: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onSelectProject, onOpenResume }) => {
  const domainIcons = [
    <Layout className="w-5 h-5 text-indigo-400" key="layout" />,
    <Server className="w-5 h-5 text-purple-400" key="server" />,
    <Database className="w-5 h-5 text-cyan-400" key="db" />,
    <Cloud className="w-5 h-5 text-blue-400" key="cloud" />,
    <Briefcase className="w-5 h-5 text-violet-400" key="briefcase" />,
    <Rocket className="w-5 h-5 text-emerald-400" key="rocket" />,
  ];

  return (
    <div className="space-y-24 md:space-y-32 pb-24">
      {/* Hero Section */}
      <Hero onOpenResume={onOpenResume} onNavigate={onNavigate} />

      {/* Redesigned Core Profile Bento Showcase */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          
          {/* Section Header with Gradient Kicker */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#252C48]">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-xs font-mono text-indigo-300">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CORE ENGINEERING DOMAINS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Full-Stack Capabilities & Expertise
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-2xl">
                Practical engineering across user interfaces, server-side business logic, relational database systems, and end-to-end client software delivery.
              </p>
            </div>

            <button
              onClick={() => onNavigate('stack')}
              className="px-4 py-2.5 text-xs font-mono font-semibold rounded-xl bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-cyan-500/20 text-indigo-300 border border-indigo-500/30 hover:border-indigo-500/60 transition-all flex items-center gap-2 self-start sm:self-auto shrink-0 shadow-sm"
            >
              <span>Explore Complete Tech Matrix</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* 6 Rich Bento Cards with Gradient Accents */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PORTFOLIO_DATA.snapshotDomains.map((domain, idx) => (
              <div
                key={domain.title}
                onClick={() => onNavigate('stack')}
                className="bg-card-gradient border border-[#252C48] hover:border-indigo-500/50 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/30 cursor-pointer group flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-[#141829] border border-[#2B3354] group-hover:scale-110 transition-transform">
                      {domainIcons[idx % domainIcons.length]}
                    </div>
                    <span className="text-xs font-mono text-[#64748B] group-hover:text-indigo-400 transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F8FAFC] group-hover:text-indigo-300 transition-colors">
                    {domain.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                {/* Skills tags with refined pill styling */}
                <div className="pt-3 border-t border-[#1F263F] flex flex-wrap gap-1.5">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#0F1220] border border-[#242A44] text-[11px] font-mono text-[#CBD5E1] group-hover:border-indigo-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Featured Projects Highlights */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#252C48]">
            <div className="space-y-1.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/25 text-xs font-mono text-purple-300">
                <Layers className="w-3.5 h-3.5" />
                <span>CASE STUDIES & PRODUCTION DELIVERIES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F8FAFC] tracking-tight">
                Featured Production Projects
              </h2>
              <p className="text-sm text-[#94A3B8] max-w-2xl">
                Substantial engineering projects solving real operational problems with modern full-stack architectures.
              </p>
            </div>

            <button
              onClick={() => onNavigate('projects')}
              className="w-full sm:w-auto px-5 py-2.5 text-xs font-mono font-bold rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 text-[#FFFFFF] shadow-md shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 self-start sm:self-auto shrink-0"
            >
              <span>View Full Case Studies & Architecture (2)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PORTFOLIO_DATA.projects.map((proj) => (
              <article
                key={proj.id}
                className="bg-card-gradient border border-[#252C48] rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between group shadow-xl shadow-black/30"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden bg-[#0A0D18] border-b border-[#252C48]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E1B] via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute top-3 left-3 bg-[#0E1222]/90 backdrop-blur px-3 py-1 rounded-full text-[11px] font-mono text-indigo-300 border border-[#2A3356]">
                      {proj.type}
                    </div>
                    <div className="absolute bottom-3 left-3 bg-[#0E1222]/90 backdrop-blur px-2.5 py-1 rounded text-xs font-mono text-cyan-300 border border-[#2A3356]">
                      {proj.website}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-[#64748B]">
                      <span>Role: {proj.role}</span>
                      <span className="text-indigo-400 font-semibold">{proj.domain}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#F8FAFC] group-hover:text-indigo-300 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed line-clamp-3">
                      {proj.shortDescription}
                    </p>

                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {proj.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded bg-[#111526] border border-[#252D4B] text-[11px] font-mono text-[#CBD5E1]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-7 pt-0 flex items-center justify-between border-t border-[#1E2540] mt-4 flex-wrap gap-2">
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="text-xs font-mono font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors px-2.5 py-1 rounded bg-[#131728] border border-[#252C48]"
                      title="Quick Architecture Modal"
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>Quick Spec</span>
                    </button>
                    <button
                      onClick={() => onNavigate('projects')}
                      className="text-xs font-bold text-indigo-300 hover:text-white flex items-center gap-1 transition-colors"
                    >
                      <span>Full Breakdown</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <a
                    href={`https://${proj.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-[#64748B] hover:text-[#F8FAFC] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Redesigned Methodology (How I Build) Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card-gradient border border-[#252C48] rounded-3xl p-6 sm:p-10 space-y-8 relative overflow-hidden shadow-2xl">
          {/* Subtle top glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-indigo-600/10 blur-3xl pointer-events-none rounded-full"></div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#252C48] relative z-10">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-xs font-mono text-cyan-300">
                <Cpu className="w-3.5 h-3.5" />
                <span>ENGINEERING LIFECYCLE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
                How I Build Software: 6-Stage Process
              </h2>
            </div>
            <button
              onClick={() => onNavigate('process')}
              className="text-xs font-mono text-indigo-300 hover:text-indigo-200 flex items-center gap-1.5 transition-colors group self-start sm:self-auto shrink-0"
            >
              <span>Inspect Full 6-Stage Process</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Connected Step Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 relative z-10">
            {PORTFOLIO_DATA.lifecycleSteps.map((step, idx) => (
              <div
                key={step.number}
                onClick={() => onNavigate('process')}
                className="p-4 rounded-2xl bg-[#0F1322] border border-[#242C4C] hover:border-indigo-500/60 cursor-pointer transition-all hover:-translate-y-1 duration-200 flex flex-col justify-between group space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="w-7 h-7 rounded-lg bg-gradient-to-tr from-indigo-600 to-purple-600 text-white text-xs font-mono font-bold flex items-center justify-center shadow-md shadow-indigo-600/30">
                    {step.number}
                  </span>
                  <span className="text-[10px] font-mono text-[#64748B] group-hover:text-indigo-400 transition-colors">
                    Phase {idx + 1}
                  </span>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-[#F8FAFC] group-hover:text-indigo-300 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">
                    {step.focus}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1C223A] text-[10px] font-mono text-[#64748B] group-hover:text-indigo-400 flex items-center justify-between">
                  <span>Learn more</span>
                  <span>→</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Experience Highlight Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card-gradient border border-[#252C48] rounded-3xl p-6 sm:p-10 space-y-6 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#252C48]">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono text-emerald-300">
                <Briefcase className="w-3.5 h-3.5" />
                <span>LEADERSHIP & EXPERIENCE</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
                Current Role & Professional Scope
              </h2>
            </div>
            <button
              onClick={() => onNavigate('experience')}
              className="text-xs font-mono text-indigo-300 hover:text-indigo-200 flex items-center gap-1.5 transition-colors group self-start sm:self-auto shrink-0"
            >
              <span>View Full Career History</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="text-xs font-mono text-indigo-400 font-semibold">
                JUL 2025 – PRESENT · BENGALURU, INDIA
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC]">
                Co-Founder & Freelance Software Developer
              </h3>
              <div className="text-base font-semibold text-purple-300">
                Weaiance
              </div>
              <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed pt-1">
                Directing software development initiatives from client requirements to production deployment, engineering full-stack web applications with React.js, Node.js, REST APIs, and PostgreSQL.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#0F1322] p-5 rounded-2xl border border-[#242C4C] space-y-2 text-xs font-mono">
              <div className="text-indigo-400 font-bold uppercase tracking-wider">Responsibilities:</div>
              <div className="text-[#94A3B8]">• Full Software Lifecycle</div>
              <div className="text-[#94A3B8]">• REST APIs & Server-Side Logic</div>
              <div className="text-[#94A3B8]">• Database Integration & Auth</div>
              <div className="text-[#94A3B8]">• Client Delivery & Handover</div>
            </div>
          </div>
        </div>
      </section>

      {/* About & Education Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-card-gradient border border-[#252C48] rounded-3xl p-6 sm:p-10 shadow-xl">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-mono text-blue-300">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>DEVELOPER BACKGROUND</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
              About Sharath Chandra
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
              Software Developer based in Bengaluru, India. Educated with a B.E. in Computer Science & Engineering from G M Institute of Technology, Davanagere (CGPA: 7.5, 2021–2025). Committed to building software that solves concrete business requirements from planning to delivery.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-5 py-2.5 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 text-[#FFFFFF] shadow-md shadow-indigo-600/30 transition-all text-center"
              >
                Read Full Bio & Education
              </button>
              <button
                onClick={onOpenResume}
                className="px-5 py-2.5 text-xs font-mono rounded-xl bg-[#141829] hover:bg-[#1E243D] text-[#CBD5E1] border border-[#2B3354] transition-colors text-center"
              >
                View Verified CV
              </button>
            </div>
          </div>

          <div className="lg:col-span-4 bg-[#0F1322] p-5 rounded-2xl border border-[#242C4C] space-y-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-indigo-400 font-bold pb-2 border-b border-[#242C4C]">
              <GraduationCap className="w-4 h-4" />
              <span>B.E. Computer Science</span>
            </div>
            <div className="text-[#F8FAFC]">GMIT Davanagere</div>
            <div className="text-[#64748B]">Score: 7.5 CGPA · 2021–2025</div>
            <div className="text-[#64748B]">Languages: English, Hindi, Kannada</div>
          </div>
        </div>
      </section>

      {/* Redesigned Let's Collaborate Section with Concise "Let's Talk" CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#13172B] via-[#1B203D] to-[#0E1122] border border-indigo-500/30 rounded-3xl p-8 sm:p-14 text-center space-y-5 relative overflow-hidden shadow-2xl shadow-indigo-950/50">
          <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-600/15 blur-3xl pointer-events-none rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/15 blur-3xl pointer-events-none rounded-full"></div>

          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/35 text-xs font-mono font-semibold tracking-wider text-indigo-300 uppercase">
            Start a Conversation
          </span>

          <h2 className="text-2xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Have a project, product idea, or software requirement?
          </h2>

          <p className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-400 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
            Let's build it.
          </p>

          <p className="text-xs sm:text-sm text-[#94A3B8] max-w-lg mx-auto">
            Available for full-stack web applications, SaaS platform engineering, freelance contracts, or technical consultations.
          </p>

          {/* Clean concise 2-word button as explicitly requested! */}
          <div className="pt-3 flex justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 text-base font-bold rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 text-[#FFFFFF] shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2.5 active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
