import React from 'react';

interface TechLogoProps {
  name: string;
  className?: string;
}

export const TechLogo: React.FC<TechLogoProps> = ({ name, className = 'w-6 h-6' }) => {
  switch (name.toLowerCase()) {
    case 'react.js':
    case 'react':
      // React official cyan atom
      return (
        <svg viewBox="0 0 115.3 100" className={className} fill="none">
          <ellipse cx="57.65" cy="50" rx="55.5" ry="21.5" stroke="#00D8FF" strokeWidth="6" transform="rotate(30 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="55.5" ry="21.5" stroke="#00D8FF" strokeWidth="6" transform="rotate(90 57.65 50)" />
          <ellipse cx="57.65" cy="50" rx="55.5" ry="21.5" stroke="#00D8FF" strokeWidth="6" transform="rotate(150 57.65 50)" />
          <circle cx="57.65" cy="50" r="10" fill="#00D8FF" />
        </svg>
      );

    case 'node.js':
    case 'node':
      // Node.js official green hexagon
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path d="M16 2L3 9.5V22.5L16 30L29 22.5V9.5L16 2Z" fill="#5FA04E" />
          <path d="M16 4.5L26.5 10.5V21.5L16 27.5L5.5 21.5V10.5L16 4.5Z" fill="#333333" />
          <path d="M16 9L22 12.5V19.5L16 23L10 19.5V12.5L16 9Z" fill="#5FA04E" />
        </svg>
      );

    case 'javascript':
    case 'js':
      // JavaScript official yellow icon
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <rect width="32" height="32" rx="4" fill="#F7DF1E" />
          <path d="M19.5 24.5c.8.5 1.8.8 2.7.8 1.6 0 2.6-.8 2.6-2.1v-9.5h3.4v9.5c0 3.2-2 4.7-5.5 4.7-1.6 0-3-.4-4-1l.8-2.4zm-9.3-.2c.8.5 1.7.7 2.6.7 1.3 0 2-.6 2-1.5 0-1-.8-1.5-2.2-2.1-2.2-.9-3.6-2-3.6-4.1 0-2.3 1.8-4 4.5-4 1.3 0 2.4.3 3.3.7l-.8 2.3c-.6-.4-1.5-.6-2.4-.6-1.1 0-1.8.6-1.8 1.4 0 .9.8 1.4 2.2 2 2.3 1 3.7 2 3.7 4.2 0 2.5-1.9 4.2-4.8 4.2-1.6 0-2.9-.4-3.8-1l1.1-2.2z" fill="#000000" />
        </svg>
      );

    case 'postgresql':
    case 'postgres':
      // PostgreSQL official blue elephant
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path d="M16 2C8.27 2 2 8.27 2 16c0 7.73 6.27 14 14 14 7.73 0 14-6.27 14-14C30 8.27 23.73 2 16 2z" fill="#336791" />
          <path d="M22.5 12.5c-.3-1.8-1.7-3.2-3.8-3.4-1.8-.2-3.5.7-4.4 2.1-.8-.4-1.8-.5-2.7-.2-1.5.5-2.5 1.9-2.6 3.5 0 .4 0 .8.1 1.2-1.2.6-2 1.8-2 3.1 0 2 1.6 3.6 3.6 3.6h1.2c.4 1.4 1.6 2.4 3.1 2.4 1.2 0 2.3-.7 2.8-1.7.6.2 1.3.3 2 .3 2.5 0 4.5-2 4.5-4.5 0-.5-.1-.9-.2-1.4 1-.9 1.6-2.1 1.4-3.4-.1-.7-.5-1.2-1-1.6z" fill="#FFFFFF" />
          <path d="M16.5 14.5c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill="#336791" />
        </svg>
      );

    case 'firebase':
      // Firebase official yellow/orange flame
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path d="M6.2 24.3l4.5-18.7c.2-.8 1.2-1 1.6-.4l4.2 8.1-10.3 11z" fill="#FFA000" />
          <path d="M18.8 14.7l2.8-5.3c.4-.8 1.5-.7 1.8.1l4.9 14.8-9.5-9.6z" fill="#F57C00" />
          <path d="M4 25.5l2.2-1.2 10.3-11 3.4 6.4-15.9 5.8z" fill="#FFCA28" />
          <path d="M16.5 28.5c-.3.2-.8.2-1.1 0L4 25.5l12-19.3c.3-.5 1-.5 1.3 0l11.4 19.3-12.2 3z" fill="#FFCA28" />
        </svg>
      );

    case 'git':
      // Git official orange branch
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path d="M30.4 14.3L17.7 1.6c-.8-.8-2.1-.8-2.9 0L12 4.4l3.7 3.7c.9-.3 1.9-.1 2.5.6.7.7.8 1.7.5 2.5l3.5 3.5c.9-.3 1.9-.1 2.5.6 1 1 1 2.6 0 3.6s-2.6 1-3.6 0c-.7-.7-.9-1.8-.5-2.6l-3.3-3.3v8.5c.2.2.4.4.5.6 1 1 1 2.6 0 3.6s-2.6 1-3.6 0c-1-1-1-2.6 0-3.6.3-.3.6-.5 1-.6V8.6c-.4-.1-.7-.3-1-.6-.7-.7-.9-1.7-.5-2.6L9.6 2 1.6 10c-.8.8-.8 2.1 0 2.9l12.7 12.7c.8.8 2.1.8 2.9 0l13.2-13.2c.8-.8.8-2.1 0-2.9z" fill="#F05032" />
        </svg>
      );

    case 'github':
      // GitHub Octocat
      return (
        <svg viewBox="0 0 32 32" className={className} fill="currentColor">
          <path fillRule="evenodd" clipRule="evenodd" d="M16 2C8.27 2 2 8.27 2 16c0 6.19 4.01 11.43 9.58 13.28.7.13.96-.3.96-.67v-2.36c-3.9.85-4.72-1.88-4.72-1.88-.64-1.62-1.56-2.05-1.56-2.05-1.27-.87.1-.85.1-.85 1.41.1 2.15 1.45 2.15 1.45 1.25 2.15 3.28 1.53 4.08 1.17.13-.91.49-1.53.89-1.88-3.11-.35-6.38-1.56-6.38-6.93 0-1.53.55-2.78 1.44-3.76-.14-.35-.63-1.78.14-3.71 0 0 1.18-.38 3.85 1.44a13.4 13.4 0 013.51-.47c1.19.01 2.39.16 3.51.47 2.67-1.82 3.85-1.44 3.85-1.44.77 1.93.28 3.36.14 3.71.9.98 1.44 2.23 1.44 3.76 0 5.38-3.28 6.57-6.4 6.92.5.43.95 1.29.95 2.6v3.85c0 .38.25.81.97.67C25.99 27.43 30 22.18 30 16c0-7.73-6.27-14-14-14z" />
        </svg>
      );

    case 'html5':
    case 'html':
      // HTML5 official orange badge
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path d="M5.5 3L8 28.5 16 31l8-2.5 2.5-25.5H5.5z" fill="#E44D26" />
          <path d="M16 28.8l6.3-2 2-21.3H16v23.3z" fill="#F16529" />
          <path d="M16 13.5h4.3l-.3 3.5H16v3.2h5.8l-.6 6.8-5.2 1.5v-3.3l2.8-.8.2-2.7h-3v-8.2zm0-5.8h8.8l-.3 3.2H16V7.7z" fill="#EBEBEB" />
          <path d="M16 13.5v-3.2H7.2l.3 3.2H16zm0 6.7v-3.2h-4.3l.3 3.2H16zm-4.7 1.8l.5 5 4.2 1.2v3.3L10.6 27l-.8-8.2h3.5l.2 3.2z" fill="#FFFFFF" />
        </svg>
      );

    case 'css3':
    case 'css':
      // CSS3 official blue badge
      return (
        <svg viewBox="0 0 32 32" className={className}>
          <path d="M5.5 3L8 28.5 16 31l8-2.5 2.5-25.5H5.5z" fill="#1572B6" />
          <path d="M16 28.8l6.3-2 2-21.3H16v23.3z" fill="#33A9DC" />
          <path d="M16 13.5h4.3l-.3 3.5H16v3.2h5.8l-.6 6.8-5.2 1.5v-3.3l2.8-.8.2-2.7h-3v-8.2zm0-5.8h8.8l-.3 3.2H16V7.7z" fill="#EBEBEB" />
          <path d="M16 13.5v-3.2H7.2l.3 3.2H16zm0 6.7v-3.2h-4.3l.3 3.2H16zm-4.7 1.8l.5 5 4.2 1.2v3.3L10.6 27l-.8-8.2h3.5l.2 3.2z" fill="#FFFFFF" />
        </svg>
      );

    case 'rest apis':
    case 'api development':
    case 'rest':
      // REST API Vector Icon (Connected Endpoints)
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect x="3" y="6" width="26" height="20" rx="4" stroke="#818CF8" strokeWidth="2.5" />
          <path d="M9 13L13 16L9 19" stroke="#38BDF8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="16" y1="19" x2="22" y2="19" stroke="#818CF8" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'authentication':
      // Security shield & key
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path d="M16 3L6 7V15C6 22 10.5 27.5 16 29C21.5 27.5 26 22 26 15V7L16 3Z" fill="#6366F1" fillOpacity="0.2" stroke="#818CF8" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="16" cy="14" r="3" stroke="#F8FAFC" strokeWidth="2" />
          <path d="M16 17V22" stroke="#F8FAFC" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'server-side development':
      // Server racks & terminal
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect x="4" y="5" width="24" height="9" rx="2.5" stroke="#A855F7" strokeWidth="2.2" />
          <rect x="4" y="18" width="24" height="9" rx="2.5" stroke="#A855F7" strokeWidth="2.2" />
          <circle cx="8" cy="9.5" r="1.5" fill="#34D399" />
          <circle cx="8" cy="22.5" r="1.5" fill="#34D399" />
          <line x1="13" y1="9.5" x2="22" y2="9.5" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
          <line x1="13" y1="22.5" x2="22" y2="22.5" stroke="#94A3B8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'database integration':
      // Cylindrical DB stack
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <ellipse cx="16" cy="8" rx="10" ry="4" stroke="#38BDF8" strokeWidth="2.2" />
          <path d="M6 8V16C6 18.2 10.5 20 16 20C21.5 20 26 18.2 26 16V8" stroke="#38BDF8" strokeWidth="2.2" />
          <path d="M6 16V24C6 26.2 10.5 28 16 28C21.5 28 26 26.2 26 24V16" stroke="#38BDF8" strokeWidth="2.2" />
        </svg>
      );

    case 'saas product development':
    case 'software product development':
      // Cloud SaaS platform
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path d="M9 22C6.2 22 4 19.8 4 17C4 14.5 5.8 12.4 8.2 12.1C8.8 8.1 12.2 5 16.5 5C21.4 5 25.4 8.7 25.9 13.5C28.2 14.1 30 16.1 30 18.5C30 21.5 27.5 24 24.5 24H9" stroke="#6366F1" strokeWidth="2.2" strokeLinecap="round" />
          <path d="M12 18L16 14L20 18" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 14V26" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'responsive web design':
      // Desktop & Mobile dual-screen
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect x="3" y="5" width="20" height="15" rx="2" stroke="#818CF8" strokeWidth="2" />
          <path d="M9 24H17M13 20V24" stroke="#818CF8" strokeWidth="2" strokeLinecap="round" />
          <rect x="18" y="12" width="11" height="16" rx="2" fill="#0C0F1B" stroke="#38BDF8" strokeWidth="2" />
          <circle cx="23.5" cy="25" r="1" fill="#38BDF8" />
        </svg>
      );

    case 'business requirement analysis':
    case 'product planning':
    case 'product-oriented thinking':
      // Strategy blueprint & compass
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="16" cy="16" r="12" stroke="#EC4899" strokeWidth="2.2" />
          <path d="M21 11L14 14L11 21L18 18L21 11Z" fill="#EC4899" fillOpacity="0.2" stroke="#F472B6" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="16" cy="16" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'ui/ux understanding':
      // Design layers / Pen tool
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect x="5" y="5" width="14" height="14" rx="3" stroke="#A855F7" strokeWidth="2" />
          <rect x="13" y="13" width="14" height="14" rx="3" stroke="#EC4899" strokeWidth="2" />
        </svg>
      );

    case 'client project delivery':
      // Rocket delivery
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path d="M16 4C16 4 23 7 23 16L16 23L9 16C9 7 16 4 16 4Z" fill="#6366F1" fillOpacity="0.2" stroke="#818CF8" strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx="16" cy="13" r="2.5" fill="#38BDF8" />
          <path d="M9 16L4 18L7 21M23 16L28 18L25 21" stroke="#F472B6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 23L16 28L19 23" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );

    case 'problem solving':
      // Logic node / CPU core
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <rect x="8" y="8" width="16" height="16" rx="3" stroke="#10B981" strokeWidth="2.2" />
          <circle cx="16" cy="16" r="3.5" fill="#10B981" fillOpacity="0.3" stroke="#34D399" strokeWidth="1.8" />
          <path d="M12 4V8M16 4V8M20 4V8M12 24V28M16 24V28M20 24V28M4 12H8M4 16H8M4 20H8M24 12H28M24 16H28M24 20H28" stroke="#10B981" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'team collaboration':
      // Users collaboration
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <circle cx="12" cy="11" r="4" stroke="#38BDF8" strokeWidth="2" />
          <path d="M4 25C4 20.6 7.6 17 12 17C16.4 17 20 20.6 20 25" stroke="#38BDF8" strokeWidth="2" strokeLinecap="round" />
          <circle cx="22" cy="11" r="3" stroke="#818CF8" strokeWidth="1.8" />
          <path d="M22 17C24.8 17 27 19.2 27 22" stroke="#818CF8" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );

    default:
      // Code brackets generic
      return (
        <svg viewBox="0 0 32 32" className={className} fill="none">
          <path d="M10 9L4 16L10 23M22 9L28 16L22 23M18 6L14 26" stroke="#818CF8" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
};
