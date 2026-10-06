import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  activePage: string;
  onNavigate: (page: string) => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activePage, onNavigate, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open so the background cannot flow or scroll
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      document.body.style.touchAction = 'auto';
    };
  }, [mobileMenuOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'stack', label: 'Stack' },
    { id: 'process', label: 'Process' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || mobileMenuOpen
            ? 'bg-[#08090E]/98 backdrop-blur-xl border-b border-[#21273D] py-3 shadow-xl shadow-black/50'
            : 'bg-transparent border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Brand wordmark */}
            <button
              onClick={() => handleNavClick('home')}
              className="text-base sm:text-lg font-bold tracking-tight text-[#F8FAFC] hover:text-[#818CF8] transition-colors flex items-center gap-2.5 group text-left truncate min-w-0"
            >
              <span className="w-2.5 h-2.5 rounded-sm bg-gradient-to-tr from-indigo-500 to-purple-500 group-hover:scale-125 transition-transform shadow-[0_0_12px_rgba(99,102,241,0.6)] shrink-0"></span>
              <span className="truncate font-heading">{PORTFOLIO_DATA.profile.name}</span>
            </button>

            {/* Zone 2: Desktop 7 navigation links with spring layout indicator */}
            <nav className="hidden lg:flex items-center gap-1 text-xs font-mono">
              {navLinks.map((link) => {
                const isActive = activePage === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => handleNavClick(link.id)}
                    className={`px-3.5 py-1.5 rounded-lg transition-colors relative ${
                      isActive ? 'text-indigo-300 font-bold' : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-active-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-indigo-500 to-cyan-400 shadow-[0_0_8px_#6366F1]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: Desktop Actions */}
            <div className="hidden sm:flex items-center gap-2.5 shrink-0">
              <button
                onClick={onOpenResume}
                className="text-xs font-mono font-medium text-[#94A3B8] hover:text-[#F8FAFC] px-3.5 py-2 rounded-xl border border-[#252C48] hover:border-indigo-500/40 bg-[#101424] transition-colors"
              >
                Resume / CV
              </button>

              <button
                onClick={() => handleNavClick('contact')}
                className="text-xs font-bold text-[#FFFFFF] bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-indigo-600/30 active:scale-95"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Morphing Animated Hamburger Toggle Button for Mobile */}
            <div className="flex lg:hidden items-center gap-2 shrink-0">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative w-10 h-10 rounded-xl bg-[#111422] border border-[#252D48] flex flex-col items-center justify-center gap-1.5 focus:outline-none focus:ring-1 focus:ring-indigo-500 transition-colors shadow-sm"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {/* Top Bar */}
                <motion.span
                  animate={mobileMenuOpen ? { rotate: 45, y: 8, backgroundColor: '#818CF8' } : { rotate: 0, y: 0, backgroundColor: '#F8FAFC' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="w-5 h-[2px] rounded-full origin-center"
                />

                {/* Middle Bar */}
                <motion.span
                  animate={mobileMenuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1, backgroundColor: '#F8FAFC' }}
                  transition={{ duration: 0.15 }}
                  className="w-5 h-[2px] rounded-full origin-center"
                />

                {/* Bottom Bar */}
                <motion.span
                  animate={mobileMenuOpen ? { rotate: -45, y: -8, backgroundColor: '#818CF8' } : { rotate: 0, y: 0, backgroundColor: '#F8FAFC' }}
                  transition={{ type: 'spring', stiffness: 300, damping: 24 }}
                  className="w-5 h-[2px] rounded-full origin-center"
                />

                {/* Active glow halo */}
                {mobileMenuOpen && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 rounded-xl bg-indigo-500/10 pointer-events-none"
                  />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Animated Dropdown Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              key="mobile-drawer"
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden bg-[#08090E]/98 backdrop-blur-2xl border-b border-[#21273D] shadow-2xl overflow-y-auto max-h-[calc(100vh-64px)]"
            >
              <div className="px-4 pt-3 pb-6 space-y-4 max-w-7xl mx-auto">
                
                {/* Staggered Navigation Items */}
                <div className="flex flex-col space-y-1 pt-1">
                  {navLinks.map((link, idx) => {
                    const isActive = activePage === link.id;
                    return (
                      <motion.button
                        key={link.id}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.04 + idx * 0.035, duration: 0.22 }}
                        onClick={() => handleNavClick(link.id)}
                        className={`px-4 py-3 text-left text-sm font-mono rounded-xl transition-all flex items-center justify-between group active:scale-[0.98] ${
                          isActive
                            ? 'bg-gradient-to-r from-indigo-500/20 via-purple-500/15 to-transparent text-indigo-300 font-bold border-l-4 border-indigo-500 shadow-sm'
                            : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#121526]'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[11px] font-mono text-[#64748B] group-hover:text-indigo-400 transition-colors">
                            0{idx + 1}
                          </span>
                          <span>{link.label}</span>
                        </div>

                        {isActive ? (
                          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse shadow-[0_0_8px_#6366F1]"></span>
                        ) : (
                          <span className="text-xs text-[#475569] group-hover:text-indigo-400 group-hover:translate-x-1 transition-all">
                            →
                          </span>
                        )}
                      </motion.button>
                    );
                  })}
                </div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.22 }}
                  className="pt-3 border-t border-[#20263C] flex flex-col gap-2.5"
                >
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenResume();
                    }}
                    className="w-full text-center text-xs font-mono text-[#CBD5E1] hover:text-[#F8FAFC] py-3 rounded-xl border border-[#252C48] bg-[#111422] transition-colors"
                  >
                    View Developer Resume
                  </button>
                  <button
                    onClick={() => handleNavClick('contact')}
                    className="w-full text-center text-xs font-bold text-[#FFFFFF] bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 py-3 rounded-xl flex items-center justify-center gap-1.5 shadow-lg shadow-indigo-600/30 transition-all active:scale-[0.98]"
                  >
                    <span>Let's Connect</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </motion.div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Full-Screen Backdrop Dimmer to Lock Background and Prevent Scrolling/Interaction */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />
        )}
      </AnimatePresence>
    </>
  );
};
