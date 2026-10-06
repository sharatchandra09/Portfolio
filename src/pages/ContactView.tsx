import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Mail, Phone, Linkedin, Copy, Check, Send, Sparkles, ArrowLeft, Clock, MapPin, CheckCircle2, X, Loader2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ContactViewProps {
  onBack: () => void;
  previousPageTitle?: string;
}

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xkjgezdd';

export const ContactView: React.FC<ContactViewProps> = ({ onBack, previousPageTitle = 'Previous' }) => {
  const [copiedType, setCopiedType] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('SaaS Product Development');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedData, setSubmittedData] = useState<{ name: string; email: string; projectType: string } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Lock body scroll when success popup modal is open
  useEffect(() => {
    if (showSuccessModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showSuccessModal]);

  // Close popup modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setShowSuccessModal(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim() || !message.trim()) {
      setErrorMessage('Please provide your name, valid email, and project scope details.');
      return;
    }

    setErrorMessage(null);
    setIsSubmitting(true);

    const snapshot = {
      name: name.trim(),
      email: email.trim(),
      projectType,
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: snapshot.name,
          email: snapshot.email,
          projectType: snapshot.projectType,
          message: message.trim(),
          _subject: `New Inquiry from ${snapshot.name} (${snapshot.projectType})`,
        }),
      });

      if (response.ok) {
        // Save snapshot for popup display receipt
        setSubmittedData(snapshot);

        // Clear all form inputs completely
        setName('');
        setEmail('');
        setProjectType('SaaS Product Development');
        setMessage('');

        // Launch confirmation modal
        setShowSuccessModal(true);
      } else {
        const data = await response.json().catch(() => null);
        if (data && data.errors && data.errors.length > 0) {
          setErrorMessage(data.errors.map((err: any) => err.message).join(', '));
        } else {
          setErrorMessage('Unable to send inquiry to Formspree right now. Please reach out directly via email or telephone.');
        }
      }
    } catch (err: any) {
      setErrorMessage('Network connection error while submitting. Please check your internet connection or email directly.');
    } finally {
      setIsSubmitting(false);
    }
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
          <span className="w-2 h-2 rounded-sm bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-[0_0_8px_#6366F1]"></span>
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-300 uppercase">
            Direct Communication
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight font-heading">
          Let's Build It
        </h1>
        <p className="text-xs sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
          Have a software project, SaaS product concept, or technical requirement? Connect directly with Sharath Chandra via verified Formspree transmission.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
        
        {/* Contact Information & Verified Channels */}
        <div className="lg:col-span-5 space-y-4">
          
          {/* Email Card */}
          <div className="bg-card-gradient border border-[#252C48] rounded-2xl p-5 sm:p-6 hover:border-indigo-500/40 transition-colors space-y-2.5 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider flex items-center gap-2">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>Email Address</span>
              </span>
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.profile.email, 'email')}
                className="text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#141829] border border-[#252C48] transition-colors"
                title="Copy email"
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`mailto:${PORTFOLIO_DATA.profile.email}`}
              className="text-base sm:text-lg font-bold text-[#F8FAFC] hover:text-indigo-300 transition-colors break-all block"
            >
              {PORTFOLIO_DATA.profile.email}
            </a>
          </div>

          {/* Phone Card */}
          <div className="bg-card-gradient border border-[#252C48] rounded-2xl p-5 sm:p-6 hover:border-indigo-500/40 transition-colors space-y-2.5 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider flex items-center gap-2">
                <Phone className="w-4 h-4 text-indigo-400" />
                <span>Telephone / Mobile</span>
              </span>
              <button
                onClick={() => handleCopy(PORTFOLIO_DATA.profile.phone, 'phone')}
                className="text-xs font-mono text-[#94A3B8] hover:text-[#F8FAFC] flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#141829] border border-[#252C48] transition-colors"
                title="Copy phone"
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <a
              href={`tel:${PORTFOLIO_DATA.profile.phone.replace(/\s+/g, '')}`}
              className="text-base sm:text-lg font-bold text-[#F8FAFC] hover:text-indigo-300 transition-colors block"
            >
              {PORTFOLIO_DATA.profile.phone}
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-card-gradient border border-[#252C48] rounded-2xl p-5 sm:p-6 hover:border-indigo-500/40 transition-colors space-y-2.5 shadow-lg">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-[#64748B] uppercase tracking-wider flex items-center gap-2">
                <Linkedin className="w-4 h-4 text-indigo-400" />
                <span>LinkedIn Profile</span>
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                <span>Verified</span>
              </span>
            </div>
            <a
              href={PORTFOLIO_DATA.profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base sm:text-lg font-bold text-[#F8FAFC] hover:text-indigo-300 transition-colors block"
            >
              {PORTFOLIO_DATA.profile.linkedin}
            </a>
          </div>

          {/* Working Details Card */}
          <div className="p-5 rounded-2xl bg-[#090C16] border border-[#21273D] space-y-3 text-xs font-mono text-[#94A3B8] shadow-inner">
            <div className="flex items-center gap-2 text-indigo-300 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Available for Client Projects & High-Impact Roles</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>Location: Bengaluru, India (IST)</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-indigo-400" />
              <span>Response SLA: &lt; 24 business hours</span>
            </div>
          </div>

        </div>

        {/* Project Conversation Composer with Formspree Endpoint */}
        <div className="lg:col-span-7 bg-card-gradient border border-[#252C48] rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="flex items-center gap-2 pb-1">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <h2 className="text-xl sm:text-2xl font-bold text-[#F8FAFC] font-heading">
              Start a Project Conversation
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#94A3B8] mb-6">
            Share details about your software requirement, scope, or timeline to transmit directly to Sharath's verified Formspree inbox.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-mono text-[#94A3B8] uppercase mb-1.5">
                  Your Name *
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  disabled={isSubmitting}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="e.g. Maya Sharma"
                  className="w-full bg-[#0A0D18] border border-[#252C48] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-50"
                />
              </div>

              <div>
                <label htmlFor="contact-email" className="block text-xs font-mono text-[#94A3B8] uppercase mb-1.5">
                  Your Email *
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  disabled={isSubmitting}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (errorMessage) setErrorMessage(null);
                  }}
                  placeholder="name@organization.com"
                  className="w-full bg-[#0A0D18] border border-[#252C48] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-50"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-category" className="block text-xs font-mono text-[#94A3B8] uppercase mb-1.5">
                Requirement Category
              </label>
              <select
                id="contact-category"
                name="category"
                value={projectType}
                disabled={isSubmitting}
                onChange={(e) => setProjectType(e.target.value)}
                className="w-full bg-[#0A0D18] border border-[#252C48] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] focus:outline-none focus:border-indigo-500 transition-colors disabled:opacity-50"
              >
                <option value="SaaS Product Development">SaaS Product Development</option>
                <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                <option value="Client Project Delivery">Client Project Delivery</option>
                <option value="API & Database Architecture">API & Database Architecture</option>
                <option value="Software Developer Role">Software Developer Role / Hiring</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-mono text-[#94A3B8] uppercase mb-1.5">
                Project Scope / Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                disabled={isSubmitting}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                placeholder="Describe what you are looking to build, expected deliverables, or current technical requirements..."
                className="w-full bg-[#0A0D18] border border-[#252C48] rounded-xl px-4 py-3 text-sm text-[#F8FAFC] placeholder-[#475569] focus:outline-none focus:border-indigo-500 transition-colors resize-none disabled:opacity-50"
              ></textarea>
            </div>

            {errorMessage && (
              <div className="p-3.5 bg-red-500/10 border border-red-500/30 rounded-xl text-xs font-mono text-red-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3.5 text-sm font-bold text-[#FFFFFF] bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 disabled:opacity-60 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30 active:scale-[0.99] cursor-pointer disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Transmitting to Formspree...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Message</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>

      {/* Pop-up Modal Message on Successful Formspree Transmission */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setShowSuccessModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Pop Message Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', stiffness: 380, damping: 28 }}
              className="relative w-full max-w-lg bg-[#0A0D18] border border-indigo-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-indigo-950/80 z-10 space-y-6 text-center"
              role="dialog"
              aria-modal="true"
            >
              {/* Close Icon Top Right */}
              <button
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 p-2 text-[#94A3B8] hover:text-white rounded-xl bg-[#141829] border border-[#252C48] transition-colors"
                aria-label="Close message"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Glowing Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center shadow-[0_0_24px_rgba(16,185,129,0.25)]">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] font-heading">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">
                  Your project inquiry has been delivered directly to Sharath Chandra via Formspree. Expect a response within 24 business hours.
                </p>
              </div>

              {/* Summary of Dispatched Details */}
              {submittedData && (
                <div className="p-4 rounded-2xl bg-[#111526] border border-[#212842] text-left text-xs font-mono space-y-1.5 text-[#CBD5E1]">
                  <div className="flex justify-between items-center text-[#64748B]">
                    <span>Sender:</span>
                    <span className="text-[#F8FAFC] font-semibold">{submittedData.name}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#64748B]">
                    <span>Email:</span>
                    <span className="text-[#F8FAFC] font-semibold">{submittedData.email}</span>
                  </div>
                  <div className="flex justify-between items-center text-[#64748B]">
                    <span>Category:</span>
                    <span className="text-indigo-400 font-semibold">{submittedData.projectType}</span>
                  </div>
                </div>
              )}

              {/* Action Button */}
              <div>
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/30 transition-all active:scale-[0.98]"
                >
                  Done / Close Message
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
