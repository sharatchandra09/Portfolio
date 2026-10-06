import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA, ProjectData } from '@/src/data/portfolioData';
import { Navbar } from '@/src/components/Navbar';
import { Footer } from '@/src/components/Footer';
import { ProjectModal } from '@/src/components/ProjectModal';
import { ResumeModal } from '@/src/components/ResumeModal';
import { HomeView } from '@/src/pages/HomeView';
import { ProjectsView } from '@/src/pages/ProjectsView';
import { ExperienceView } from '@/src/pages/ExperienceView';
import { StackView } from '@/src/pages/StackView';
import { ProcessView } from '@/src/pages/ProcessView';
import { AboutView } from '@/src/pages/AboutView';
import { ContactView } from '@/src/pages/ContactView';
import { motion, AnimatePresence } from 'motion/react';

const PAGE_TITLES: Record<string, string> = {
  home: 'Home',
  projects: 'Projects',
  experience: 'Experience',
  stack: 'Tech Stack',
  process: 'Process',
  about: 'About',
  contact: 'Contact',
};

export default function App() {
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  // Stack of visited pages to ensure accurate previous-page back navigation
  const [historyStack, setHistoryStack] = useState<string[]>(() => {
    const hash = window.location.hash.replace(/^#\/?/, '').trim();
    const validPages = ['home', 'projects', 'experience', 'stack', 'process', 'about', 'contact'];
    return validPages.includes(hash) && hash !== 'home' ? ['home', hash] : ['home'];
  });

  // Sync state with URL hash and browser back/forward buttons
  useEffect(() => {
    const parseHash = () => {
      const hash = window.location.hash.replace(/^#\/?/, '').trim();
      const validPages = ['home', 'projects', 'experience', 'stack', 'process', 'about', 'contact'];
      const target = validPages.includes(hash) ? hash : 'home';
      setActivePage(target);

      setHistoryStack((prev) => {
        if (prev[prev.length - 1] === target) return prev;
        // If going back to previous item in stack, pop back
        if (prev.length > 1 && prev[prev.length - 2] === target) {
          return prev.slice(0, -1);
        }
        return [...prev, target];
      });
    };

    parseHash();
    window.addEventListener('hashchange', parseHash);
    return () => window.removeEventListener('hashchange', parseHash);
  }, []);

  const handleNavigate = (page: string) => {
    if (page === activePage) return;
    setHistoryStack((prev) => {
      if (prev[prev.length - 1] === page) return prev;
      return [...prev, page];
    });
    setActivePage(page);
    window.location.hash = page === 'home' ? '' : `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Back navigation: redirects to the page opened latest, not hardcoded home!
  const handleBack = () => {
    setHistoryStack((prev) => {
      if (prev.length <= 1) {
        setActivePage('home');
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return ['home'];
      }
      const newStack = [...prev];
      newStack.pop(); // remove current page
      const previousPage = newStack[newStack.length - 1] || 'home';
      setActivePage(previousPage);
      window.location.hash = previousPage === 'home' ? '' : `#/${previousPage}`;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return newStack;
    });
  };

  // Dynamic previous page title for back button label (e.g. "Back to Tech Stack")
  const previousPageId = historyStack.length > 1 ? historyStack[historyStack.length - 2] : 'home';
  const previousPageTitle = PAGE_TITLES[previousPageId] || 'Previous';

  return (
    <div className="min-h-screen bg-[#08090E] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#6366F1]/30 selection:text-[#818CF8]">
      {/* Fixed Sticky Navigation */}
      <Navbar
        activePage={activePage}
        onNavigate={handleNavigate}
        onOpenResume={() => setResumeModalOpen(true)}
      />

      {/* Main Content with Smooth Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            {activePage === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onSelectProject={(project) => setSelectedProject(project)}
                onOpenResume={() => setResumeModalOpen(true)}
              />
            )}

            {activePage === 'projects' && (
              <ProjectsView
                onSelectProject={(project) => setSelectedProject(project)}
                onBack={handleBack}
                previousPageTitle={previousPageTitle}
              />
            )}

            {activePage === 'experience' && (
              <ExperienceView
                onNavigate={handleNavigate}
                onBack={handleBack}
                previousPageTitle={previousPageTitle}
                onOpenResume={() => setResumeModalOpen(true)}
              />
            )}

            {activePage === 'stack' && (
              <StackView
                onNavigate={handleNavigate}
                onBack={handleBack}
                previousPageTitle={previousPageTitle}
              />
            )}

            {activePage === 'process' && (
              <ProcessView
                onNavigate={handleNavigate}
                onBack={handleBack}
                previousPageTitle={previousPageTitle}
              />
            )}

            {activePage === 'about' && (
              <AboutView
                onNavigate={handleNavigate}
                onBack={handleBack}
                previousPageTitle={previousPageTitle}
                onOpenResume={() => setResumeModalOpen(true)}
              />
            )}

            {activePage === 'contact' && (
              <ContactView
                onBack={handleBack}
                previousPageTitle={previousPageTitle}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Full-Screen Case Study Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Printable / Structured Developer Resume Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
