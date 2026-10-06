import React, { useState, useMemo, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/src/data/portfolioData';
import { Search, ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, Sparkles, Filter, Layers, Code2, X, Terminal, Copy, Check } from 'lucide-react';
import { TechLogo } from '@/src/components/TechLogos';
import { ArchitectureDiagram } from '@/src/components/ArchitectureDiagram';
import { motion, AnimatePresence } from 'motion/react';

interface StackViewProps {
  onNavigate: (page: string) => void;
  onBack?: () => void;
  previousPageTitle?: string;
}

interface TechDetail {
  name: string;
  category: string;
  productionRole: string;
  usedIn: string;
  status: string;
  description: string;
  highlight: string;
  codeSnippet?: string;
  snippetLang?: string;
}

export const StackView: React.FC<StackViewProps> = ({ onNavigate, onBack, previousPageTitle = 'Previous' }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeTech, setActiveTech] = useState<TechDetail | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'architecture'>('grid');
  const [copiedCode, setCopiedCode] = useState(false);

  // Lock body scroll when inspector modal is open
  useEffect(() => {
    if (activeTech) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [activeTech]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveTech(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const techDatabase: TechDetail[] = useMemo(() => [
    // Frontend & UI
    {
      name: 'React.js',
      category: 'Frontend & UI',
      productionRole: 'Core UI Framework',
      usedIn: 'AiroHR SaaS & Worldwide Security',
      status: 'Production Core',
      description: 'Used for architecting modular dashboard layouts, componentized state management, real-time attendance workflows, and client portals.',
      highlight: 'Custom hooks, Virtual DOM reconciliation, responsive tables, and client-side validation pipelines.',
      snippetLang: 'tsx',
      codeSnippet: `// React Custom Hook: Real-Time Attendance Verification State
export function useAttendanceVerification(employeeId: string) {
  const [status, setStatus] = useState<'idle' | 'verifying' | 'matched' | 'failed'>('idle');
  const [error, setError] = useState<string | null>(null);

  const verifyCheckIn = useCallback(async (videoFrame: HTMLVideoElement) => {
    setStatus('verifying');
    try {
      const response = await api.biometrics.verify(employeeId, videoFrame);
      if (response.success) {
        setStatus('matched');
        return response.record;
      }
      throw new Error(response.message || 'Liveness check failed');
    } catch (err: any) {
      setStatus('failed');
      setError(err.message);
    }
  }, [employeeId]);

  return { status, error, verifyCheckIn };
}`,
    },
    {
      name: 'JavaScript',
      category: 'Frontend & UI',
      productionRole: 'Language Foundation',
      usedIn: 'Entire Codebase',
      status: 'Core Standard',
      description: 'Modern ES6+ syntax driving asynchronous Promise chains, DOM events, client-side data transformations, and state updates.',
      highlight: 'Async/Await, functional array transformations (map/filter/reduce), closure patterns, and ES modules.',
      snippetLang: 'js',
      codeSnippet: `// JavaScript: Asynchronous Retry Pipeline with Exponential Backoff
async function fetchWithRetry(url, options = {}, retries = 3, delay = 800) {
  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    return await response.json();
  } catch (error) {
    if (retries <= 1) throw error;
    await new Promise((res) => setTimeout(res, delay));
    return fetchWithRetry(url, options, retries - 1, delay * 2);
  }
}`,
    },
    {
      name: 'HTML5',
      category: 'Frontend & UI',
      productionRole: 'Semantic Structure',
      usedIn: 'All Web Deliverables',
      status: 'W3C Compliant',
      description: 'Clean semantic document outlines, accessible forms, audio/video elements, and rich OpenGraph/Schema.org metadata.',
      highlight: 'WCAG accessibility compliance, custom data attributes, form constraints, and SEO microdata.',
      snippetLang: 'html',
      codeSnippet: `<!-- Accessible Quotation Intake Form Markup -->
<form aria-labelledby="quotation-heading" method="POST" novalidate>
  <fieldset class="input-group">
    <legend class="sr-only">Client Specification</legend>
    <label for="company-scope">Project Scope Requirements</label>
    <textarea 
      id="company-scope" 
      name="scope" 
      required 
      aria-required="true"
      aria-describedby="scope-hint"
    ></textarea>
    <p id="scope-hint" class="helper-text">Provide service locations and headcount requirements.</p>
  </fieldset>
</form>`,
    },
    {
      name: 'CSS3',
      category: 'Frontend & UI',
      productionRole: 'Modern Styling System',
      usedIn: 'All Platforms',
      status: 'Production Standard',
      description: 'Flexible layouts utilizing CSS Grid, Flexbox, custom properties, animations, and responsive dark mode palettes.',
      highlight: 'Hardware-accelerated transforms, zero-pill typography, fluid clamp scaling, and media queries.',
      snippetLang: 'css',
      codeSnippet: `/* Fluid Responsive Glassmorphic Card System */
.developer-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  background: linear-gradient(180deg, rgba(20, 24, 40, 0.85) 0%, rgba(11, 13, 23, 0.95) 100%);
  border: 1px solid rgba(99, 102, 241, 0.2);
  border-radius: 1rem;
  backdrop-filter: blur(16px);
  transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
}
.developer-card:hover {
  transform: translateY(-2px);
  border-color: rgba(99, 102, 241, 0.6);
}`,
    },
    {
      name: 'Responsive Web Design',
      category: 'Frontend & UI',
      productionRole: 'Cross-Device Layouts',
      usedIn: 'All Client Interfaces',
      status: 'Mobile-First',
      description: 'Tested across 360px mobile viewports up to 4K displays to guarantee zero awkward text wrapping and fluid touch response.',
      highlight: 'Fluid clamp scaling, touch targets >= 44px, adaptive drawers, and breakpoint optimization.',
      snippetLang: 'tsx',
      codeSnippet: `// Responsive Grid Layout with Adaptive Columns
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
  {records.map((item) => (
    <article key={item.id} className="p-4 sm:p-5 rounded-2xl">
      <h4 className="text-sm sm:text-base font-bold">{item.title}</h4>
    </article>
  ))}
</div>`,
    },

    // Backend & APIs
    {
      name: 'Node.js',
      category: 'Backend & APIs',
      productionRole: 'Runtime Engine',
      usedIn: 'Weaiance Backend & SaaS APIs',
      status: 'Enterprise Runtime',
      description: 'Powers asynchronous request pipelines, file uploads, biometric intake, authentication, and REST API routing layers.',
      highlight: 'Non-blocking event loop, stream handling, buffer manipulation, and robust Express middleware chains.',
      snippetLang: 'typescript',
      codeSnippet: `// Node.js / Express: Middleware Pipeline & Rate Limiting
import express from 'express';
import helmet from 'helmet';
import cors from 'cors';

const app = express();
app.use(helmet());
app.use(cors({ origin: process.env.ALLOWED_ORIGINS?.split(','), credentials: true }));
app.use(express.json({ limit: '10mb' }));

app.use('/api/v1/payroll', authenticateSession, payrollRouter);
app.use('/api/v1/inquiries', rateLimiter, inquiryRouter);`,
    },
    {
      name: 'REST APIs',
      category: 'Backend & APIs',
      productionRole: 'Service Architecture',
      usedIn: 'AiroHR & Worldwide Security',
      status: 'HTTP/REST Standard',
      description: 'Designing idempotent endpoints, request payload sanitization, HTTP status codes, and structured JSON envelopes.',
      highlight: 'Pagination, sorting query parameters, rate limiting, and standard error envelopes.',
      snippetLang: 'typescript',
      codeSnippet: `// RESTful Structured API Response Envelope Pattern
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  metadata?: {
    page: number;
    limit: number;
    total: number;
  };
}`,
    },
    {
      name: 'API Development',
      category: 'Backend & APIs',
      productionRole: 'Endpoint Engineering',
      usedIn: 'Commercial Quotation Engine',
      status: 'Production Verified',
      description: 'Building backend endpoints that orchestrate client inquiry intake, email dispatches, and DB transactions.',
      highlight: 'Input validation via schemas, CORS policies, and automated dispatch triggers.',
      snippetLang: 'typescript',
      codeSnippet: `// Express Inquiry Endpoint with Validated Transaction
router.post('/api/v1/quotations', async (req, res) => {
  const schema = z.object({
    clientName: z.string().min(2),
    email: z.string().email(),
    requirements: z.string().min(10)
  });

  const payload = schema.parse(req.body);
  const quotation = await db.quotations.create({ data: payload });
  await triggerDispatchNotification(quotation);
  return res.status(201).json({ success: true, id: quotation.id });
});`,
    },
    {
      name: 'Authentication',
      category: 'Backend & APIs',
      productionRole: 'Access Control & Security',
      usedIn: 'AiroHR Admin & Security Portals',
      status: 'RBAC Security',
      description: 'Implementing role-based access checks (RBAC), protected admin consoles, and secure password encryption.',
      highlight: 'Session validation, HTTP-only cookies, password hashing, and privilege escalation guards.',
      snippetLang: 'typescript',
      codeSnippet: `// RBAC Permission Guard Middleware
export function requireRole(...allowedRoles: Role[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.session?.user) {
      return res.status(401).json({ error: 'UNAUTHENTICATED' });
    }
    if (!allowedRoles.includes(req.session.user.role)) {
      return res.status(403).json({ error: 'INSUFFICIENT_PERMISSIONS' });
    }
    next();
  };
}`,
    },
    {
      name: 'Server-Side Development',
      category: 'Backend & APIs',
      productionRole: 'Business Logic Execution',
      usedIn: 'Automated Payroll Engines',
      status: 'High Integrity',
      description: 'Complex payroll calculation runs, tax withholdings, attendance aggregation, and transactional audit trails.',
      highlight: 'Atomic database transactions, error boundaries, and cron-scheduled jobs.',
      snippetLang: 'typescript',
      codeSnippet: `// Automated Payroll Calculation Algorithm
export async function calculateMonthlyPayroll(companyId: string, month: string) {
  return await db.transaction(async (tx) => {
    const employees = await tx.employees.findActive(companyId);
    for (const emp of employees) {
      const attendance = await tx.attendance.aggregateDays(emp.id, month);
      const gross = (emp.baseSalary / 30) * attendance.presentDays;
      const deductions = calculateStatutoryDeductions(gross);
      const netPay = gross - deductions.total;
      await tx.payrollRuns.insert({ employeeId: emp.id, netPay, month });
    }
  });
}`,
    },

    // Databases & Cloud
    {
      name: 'PostgreSQL',
      category: 'Databases & Cloud',
      productionRole: 'Primary Relational Database',
      usedIn: 'Production Relational Storage',
      status: 'ACID Compliant',
      description: 'Relational data modeling, table normalization, composite foreign keys, indexing, and transactional integrity.',
      highlight: 'Complex JOIN queries, UUID primary keys, check constraints, and migration scripts.',
      snippetLang: 'sql',
      codeSnippet: `-- PostgreSQL: Relational Schema with Constraints & Audit Trail
CREATE TABLE organizations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(120) NOT NULL,
  slug VARCHAR(64) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE employees (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  org_id UUID REFERENCES organizations(id) ON DELETE CASCADE,
  employee_code VARCHAR(32) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT uq_org_employee UNIQUE (org_id, employee_code)
);`,
    },
    {
      name: 'Firebase',
      category: 'Databases & Cloud',
      productionRole: 'Realtime Data & Auth',
      usedIn: 'Dynamic SaaS Workflows',
      status: 'Cloud Backend',
      description: 'Real-time database integration and persistent cloud storage for live data workflows and notifications.',
      highlight: 'Real-time document listeners, security rules, and serverless events.',
      snippetLang: 'typescript',
      codeSnippet: `// Firebase Real-Time Firestore Sync Listener
export function subscribeToLiveInquiries(onUpdate: (items: Inquiry[]) => void) {
  const q = query(
    collection(firestore, 'inquiries'),
    where('status', '==', 'PENDING_REVIEW'),
    orderBy('createdAt', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const inquiries = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    onUpdate(inquiries);
  });
}`,
    },
    {
      name: 'Database Integration',
      category: 'Databases & Cloud',
      productionRole: 'ORM & Query Performance',
      usedIn: 'High-Volume Systems',
      status: 'Optimized',
      description: 'Connecting backend runtimes with ORMs and SQL drivers for high-performance and low-latency querying.',
      highlight: 'Connection pooling, query indexing, N+1 query elimination, and schema migrations.',
      snippetLang: 'typescript',
      codeSnippet: `// Connection Pool Configuration for High Concurrency
import { Pool } from 'pg';

export const dbPool = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 20, // Max concurrent connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});`,
    },

    // Tools & DevOps
    {
      name: 'Git',
      category: 'Tools & DevOps',
      productionRole: 'Version Control',
      usedIn: 'All Engineering Work',
      status: 'Daily Workflow',
      description: 'Atomic commit hygiene, branching strategies, rebase workflows, and clean version history.',
      highlight: 'Feature branches, semantic commits, conflict resolution, and release tagging.',
      snippetLang: 'bash',
      codeSnippet: `# Git Feature Workflow & Semantic Commits
git checkout -b feat/biometric-liveness-pipeline
git add src/services/liveness.ts
git commit -m "feat(ai): integrate anti-spoofing liveness model verification"
git push -u origin feat/biometric-liveness-pipeline`,
    },
    {
      name: 'GitHub',
      category: 'Tools & DevOps',
      productionRole: 'Repository Hosting & CI',
      usedIn: 'Team Collaboration',
      status: 'Collaborative Hub',
      description: 'Managing pull requests, code reviews, milestone tracking, and deployment pipeline hooks.',
      highlight: 'PR reviews, automated checks, release notes, and documentation wikis.',
      snippetLang: 'yaml',
      codeSnippet: `# GitHub CI Pipeline Configuration
name: Full-Stack Test & Lint
on: [push, pull_request]
jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run lint
      - run: npm run build`,
    },

    // Product & Architecture
    {
      name: 'SaaS Product Development',
      category: 'Methodology & Product',
      productionRole: 'Product Architecture',
      usedIn: 'AiroHR Platform',
      status: 'SaaS Platform',
      description: 'Multi-tenant architecture planning, feature scoping, and subscription-grade software workflows.',
      highlight: 'Tenant isolation, role-based modules, and operational scalability.',
      snippetLang: 'typescript',
      codeSnippet: `// Multi-Tenant Isolation Strategy Pattern
export async function withTenantContext<T>(
  tenantId: string,
  operation: (db: TenantDb) => Promise<T>
): Promise<T> {
  const tenantScopedDb = createTenantScopedClient(tenantId);
  return await operation(tenantScopedDb);
}`,
    },
    {
      name: 'Business Requirement Analysis',
      category: 'Methodology & Product',
      productionRole: 'Client Problem Translation',
      usedIn: 'Weaiance Client Engagements',
      status: 'Core Methodology',
      description: 'Translating ambiguous operational problems into concrete software specifications and database models.',
      highlight: 'Requirements gathering, edge case documentation, and functional scope freezes.',
    },
    {
      name: 'Product Planning',
      category: 'Methodology & Product',
      productionRole: 'Roadmap Execution',
      usedIn: 'Client Deliverables',
      status: 'Strategic',
      description: 'Defining milestone roadmaps, feature priority matrix, data flow diagrams, and architectural sequencing.',
      highlight: 'Sprint pacing, milestone criteria, and architectural risk mitigation.',
    },
    {
      name: 'UI/UX Understanding',
      category: 'Methodology & Product',
      productionRole: 'Usability Engineering',
      usedIn: 'All Platforms',
      status: 'Human-Centered',
      description: 'Designing frictionless workflows, intuitive navigation paradigms, and scannable visual information hierarchy.',
      highlight: 'Form ergonomics, error prevention, instant feedback, and visual clarity.',
    },
    {
      name: 'Problem Solving',
      category: 'Methodology & Product',
      productionRole: 'Algorithmic Optimization',
      usedIn: 'Liveness & Attendance Matching',
      status: 'Analytical',
      description: 'Algorithmic troubleshooting, query performance tuning, and architectural refactoring for efficiency.',
      highlight: 'Vector matching, spatial verification, and asynchronous task queues.',
    },
    {
      name: 'Client Project Delivery',
      category: 'Methodology & Product',
      productionRole: 'End-to-End Ownership',
      usedIn: 'Worldwide Security & Weaiance',
      status: 'Turnkey Delivery',
      description: 'Full accountability from initial client kick-off through production deployment and final handover.',
      highlight: 'Milestone demos, acceptance sign-offs, production cutovers, and client walkthroughs.',
    },
    {
      name: 'Team Collaboration',
      category: 'Methodology & Product',
      productionRole: 'Engineering Communication',
      usedIn: 'Weaiance Leadership',
      status: 'Leadership Standard',
      description: 'Clear technical documentation, cross-functional alignment, and constructive stakeholder feedback loops.',
      highlight: 'Technical specifications, API documentation, and asynchronous coordination.',
    },
    {
      name: 'Web Application Development',
      category: 'Methodology & Product',
      productionRole: 'Full-Stack Integration',
      usedIn: 'All Systems',
      status: 'End-to-End',
      description: 'Cohesive integration of client frontends, backend APIs, relational databases, and auth guards.',
      highlight: 'Unified data contracts, client-server sync, and end-to-end security.',
    },
    {
      name: 'Software Product Development',
      category: 'Methodology & Product',
      productionRole: 'Lifecycle Discipline',
      usedIn: 'Weaiance Products',
      status: 'Production-Grade',
      description: 'Scoping feature milestones, user journey testing, and building maintainable codebase architectures.',
      highlight: 'Clean architecture, loose coupling, and maintainability over clever shortcuts.',
    },
    {
      name: 'Product-Oriented Thinking',
      category: 'Methodology & Product',
      productionRole: 'Engineering Mindset',
      usedIn: 'All Projects',
      status: 'Strategic Mindset',
      description: 'Balancing technical trade-offs with business value, customer retention, and real-world operational utility.',
      highlight: 'Focusing on business outcomes rather than code vanity.',
    },
  ], []);

  const categories = ['All', 'Frontend & UI', 'Backend & APIs', 'Databases & Cloud', 'Tools & DevOps', 'Methodology & Product'];

  // Filtered List
  const filteredTechs = useMemo(() => {
    return techDatabase.filter((t) => {
      const matchesCategory = selectedCategory === 'All' || t.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.usedIn.toLowerCase().includes(searchQuery.toLowerCase()) ||
        t.highlight.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [techDatabase, selectedCategory, searchQuery]);

  return (
    <div className="pt-24 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
      
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
          <span className="w-2 h-2 rounded-sm bg-gradient-to-tr from-indigo-500 to-purple-500 shadow-[0_0_8px_#6366F1]"></span>
          <span className="text-xs font-mono font-semibold tracking-wider text-indigo-300 uppercase">
            Verified Technical Matrix
          </span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight font-heading">
          Tech Stack & Capabilities
        </h1>
        <p className="text-xs sm:text-base text-[#94A3B8] max-w-3xl leading-relaxed">
          Comprehensive inventory of languages, frameworks, databases, and software methodologies utilized in production platforms. Click <span className="text-indigo-400 font-mono font-bold">inspect →</span> on any card to view implementation details and code patterns.
        </p>

        {/* View Mode Switcher */}
        <div className="pt-3 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
              viewMode === 'grid'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-md shadow-indigo-600/30'
                : 'bg-[#121526] text-[#94A3B8] hover:text-white border border-[#252C48]'
            }`}
          >
            <Code2 className="w-3.5 h-3.5" />
            <span>Interactive Tech Cards ({techDatabase.length})</span>
          </button>

          <button
            onClick={() => setViewMode('architecture')}
            className={`px-4 py-2 rounded-xl text-xs font-mono flex items-center gap-2 transition-all ${
              viewMode === 'architecture'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-md shadow-indigo-600/30'
                : 'bg-[#121526] text-[#94A3B8] hover:text-white border border-[#252C48]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>System Architecture Flow Diagram</span>
          </button>
        </div>
      </div>

      {/* Render Architecture Diagram if selected */}
      {viewMode === 'architecture' ? (
        <div className="space-y-6 animate-in fade-in duration-200">
          <div className="p-4 rounded-xl bg-[#121526] border border-[#252C48] text-xs font-mono text-indigo-300 flex items-center justify-between">
            <span>Visual Pipeline: Frontend → Node.js APIs → PostgreSQL / Firebase</span>
            <button
              onClick={() => setViewMode('grid')}
              className="text-xs text-white underline underline-offset-4 hover:text-indigo-300"
            >
              Switch back to Tech Cards Grid
            </button>
          </div>
          <ArchitectureDiagram />
        </div>
      ) : (
        /* Tech Cards Grid View with Logos */
        <div className="space-y-8 animate-in fade-in duration-200">
          
          {/* Controls Bar: Search & Category Pills */}
          <div className="space-y-4 bg-card-gradient p-4 sm:p-6 rounded-2xl border border-[#252C48] shadow-xl">
            
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Search Input */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-[#64748B] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search technologies (e.g. React, PostgreSQL, Node)..."
                  className="w-full bg-[#0D101C] border border-[#252C48] focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#F8FAFC] placeholder-[#64748B] focus:outline-none transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-[#64748B] hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Counter Indicator */}
              <div className="text-xs font-mono text-[#64748B] flex items-center gap-1.5 self-end md:self-center">
                <Filter className="w-3.5 h-3.5 text-indigo-400" />
                <span>Showing {filteredTechs.length} of {techDatabase.length} technologies</span>
              </div>

            </div>

            {/* Horizontal Category Scroll Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pt-1">
              {categories.map((cat) => {
                const count =
                  cat === 'All'
                    ? techDatabase.length
                    : techDatabase.filter((t) => t.category === cat).length;
                const isSelected = selectedCategory === cat;

                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap shrink-0 transition-all flex items-center gap-1.5 ${
                      isSelected
                        ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold shadow-md shadow-indigo-600/25'
                        : 'bg-[#101424] text-[#94A3B8] hover:text-[#F8FAFC] border border-[#20273F]'
                    }`}
                  >
                    <span>{cat}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        isSelected ? 'bg-white/20 text-white' : 'bg-[#1A2035] text-[#64748B]'
                      }`}
                    >
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Technology Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTechs.map((tech) => (
              <div
                key={tech.name}
                onClick={() => setActiveTech(tech)}
                className="bg-card-gradient border border-[#252C48] hover:border-indigo-500/50 rounded-2xl p-5 sm:p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-950/30"
              >
                <div className="space-y-4">
                  
                  {/* Top Header with Authentic Company/Tech Logo */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-[#0C0F1A] border border-[#252C48] group-hover:border-indigo-500/40 p-2.5 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                        <TechLogo name={tech.name} className="w-full h-full object-contain" />
                      </div>

                      <div>
                        <h3 className="text-base font-bold text-[#F8FAFC] group-hover:text-indigo-300 transition-colors font-heading">
                          {tech.name}
                        </h3>
                        <div className="text-[11px] font-mono text-[#64748B]">
                          {tech.category}
                        </div>
                      </div>
                    </div>

                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#141829] border border-[#28304E] text-indigo-300 shrink-0">
                      {tech.status}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-[#94A3B8] leading-relaxed line-clamp-2">
                    {tech.description}
                  </p>

                  {/* Applied In Indicator & Interactive inspect prompt */}
                  <div className="pt-2 border-t border-[#1C223A] text-[11px] font-mono flex items-center justify-between text-[#64748B]">
                    <span className="truncate max-w-[190px]">
                      Used: <span className="text-[#CBD5E1]">{tech.usedIn}</span>
                    </span>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveTech(tech);
                      }}
                      className="text-xs font-semibold text-indigo-400 group-hover:text-indigo-300 flex items-center gap-1 group-hover:translate-x-0.5 transition-all px-2 py-1 rounded-md bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20"
                    >
                      <span>inspect</span>
                      <span>→</span>
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Tech Navigation Footer */}
      <div className="p-6 bg-card-gradient border border-[#252C48] rounded-2xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 text-center sm:text-left shadow-xl">
        <div className="space-y-1">
          <div className="text-sm font-bold text-[#F8FAFC]">
            Ready to see these technologies in action?
          </div>
          <div className="text-xs text-[#94A3B8]">
            Explore the complete system architecture and production deliverables.
          </div>
        </div>

        <button
          onClick={() => onNavigate('projects')}
          className="px-6 py-3 text-xs font-bold rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 text-[#FFFFFF] transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/30"
        >
          <span>View Production Projects</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* High-Tech Pop-up Modal Dialog for Tech Inspector */}
      <AnimatePresence>
        {activeTech && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            {/* Backdrop Blur Dimmer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setActiveTech(null)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ type: 'spring', stiffness: 350, damping: 28 }}
              className="relative w-full max-w-3xl bg-[#090C16] border border-indigo-500/40 rounded-3xl shadow-2xl shadow-indigo-950/80 overflow-hidden z-10 my-8"
              role="dialog"
              aria-modal="true"
              aria-labelledby="tech-modal-title"
            >
              {/* Modal Top Header */}
              <div className="p-6 bg-gradient-to-r from-[#12162A] via-[#101424] to-[#0A0D18] border-b border-[#252C48] flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-14 h-14 rounded-2xl bg-[#080A12] border border-indigo-500/40 p-3 flex items-center justify-center shadow-lg shadow-indigo-950/50 shrink-0">
                    <TechLogo name={activeTech.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h2 id="tech-modal-title" className="text-xl sm:text-2xl font-extrabold text-[#F8FAFC] font-heading">
                        {activeTech.name}
                      </h2>
                      <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 text-[11px] font-mono">
                        {activeTech.status}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-[#94A3B8] mt-0.5 flex items-center gap-2">
                      <span className="text-purple-300 font-semibold">{activeTech.category}</span>
                      <span>·</span>
                      <span className="text-[#64748B]">Role: {activeTech.productionRole}</span>
                    </div>
                  </div>
                </div>

                {/* Close Button with Esc indicator */}
                <button
                  onClick={() => setActiveTech(null)}
                  className="p-2.5 rounded-xl bg-[#141829] hover:bg-[#1E243D] text-[#94A3B8] hover:text-white border border-[#2B3354] transition-colors focus:outline-none focus:ring-1 focus:ring-indigo-500 flex items-center gap-1.5"
                  aria-label="Close dialog"
                >
                  <X className="w-4 h-4" />
                  <span className="text-[10px] font-mono hidden sm:inline text-[#64748B]">Esc</span>
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6 max-h-[calc(85vh-160px)] overflow-y-auto no-scrollbar">
                
                {/* Meta Highlights Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#0E1222] border border-[#242C48] space-y-1">
                    <div className="text-[11px] font-mono text-indigo-400 uppercase font-bold">
                      Applied In Production Deliverables:
                    </div>
                    <div className="text-sm font-semibold text-[#F8FAFC]">
                      {activeTech.usedIn}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-[#0E1222] border border-[#242C48] space-y-1">
                    <div className="text-[11px] font-mono text-purple-400 uppercase font-bold">
                      Architectural Level:
                    </div>
                    <div className="text-sm font-semibold text-[#F8FAFC]">
                      {activeTech.productionRole}
                    </div>
                  </div>
                </div>

                {/* Production Application Narrative */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>How Sharath Implemented This in Production</span>
                  </h4>
                  <p className="text-sm text-[#CBD5E1] leading-relaxed bg-[#0E1222]/60 p-4 rounded-xl border border-[#21273D]">
                    {activeTech.description}
                  </p>
                </div>

                {/* Key Technical Highlights */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#64748B] font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                    <span>Technical Competencies & Patterns</span>
                  </h4>
                  <div className="text-sm text-[#94A3B8] leading-relaxed bg-[#0E1222]/60 p-4 rounded-xl border border-[#21273D]">
                    {activeTech.highlight}
                  </div>
                </div>

                {/* Production Code Pattern Preview (if available) */}
                {activeTech.codeSnippet && (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-indigo-300 flex items-center gap-1.5 font-bold">
                        <Terminal className="w-3.5 h-3.5" />
                        <span>Production Implementation Pattern</span>
                      </span>

                      <button
                        onClick={() => handleCopyCode(activeTech.codeSnippet!)}
                        className="flex items-center gap-1 text-[11px] text-[#94A3B8] hover:text-white px-2 py-1 rounded bg-[#161B30] border border-[#2B3354] transition-colors"
                      >
                        {copiedCode ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3 text-indigo-400" />
                            <span>Copy snippet</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-4 rounded-xl bg-[#06080F] border border-[#222940] overflow-x-auto text-xs font-mono leading-relaxed text-[#CBD5E1] shadow-inner">
                      <pre>
                        <code>{activeTech.codeSnippet}</code>
                      </pre>
                    </div>
                  </div>
                )}

              </div>

              {/* Modal Footer Actions */}
              <div className="p-4 sm:p-6 bg-[#0B0E1B] border-t border-[#252C48] flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setActiveTech(null);
                    onNavigate('projects');
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-700 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-bold shadow-md shadow-indigo-600/30 flex items-center justify-center gap-2"
                >
                  <span>Inspect Projects Using This Tech</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => setActiveTech(null)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-[#141829] hover:bg-[#1E243D] text-[#CBD5E1] hover:text-white border border-[#252C48] text-xs font-mono transition-colors text-center"
                >
                  Close Inspector
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
