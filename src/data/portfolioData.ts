import airohrImage from '@/src/assets/images/airohr_saas_preview_1790770581222.jpg';
import worldwideSecurityImage from '@/src/assets/images/worldwide_security_preview_1790770595391.jpg';
import workspaceImage from '@/src/assets/images/sharath_developer_workspace_1790770608449.jpg';

export interface ProjectData {
  id: string;
  number: string;
  title: string;
  type: string;
  role: string;
  domain: string;
  website: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  tags: string[];
  capabilities: string[];
  architecturePoints: {
    title: string;
    description: string;
  }[];
  developmentContribution: string[];
  workflowTabs: {
    name: string;
    subtitle: string;
    items: string[];
  }[];
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'SHARATH CHANDRA',
    title: 'SOFTWARE DEVELOPER',
    positioning: 'Building software from requirements to real products.',
    tagline: 'Building web applications, SaaS products, and client-focused software solutions.',
    location: 'Bengaluru, India',
    email: 'tmsharathchandra9@gmail.com',
    phone: '+91 91483 17206',
    linkedin: 'linkedin.com/in/sharathchandra21',
    linkedinUrl: 'https://linkedin.com/in/sharathchandra21',
    status: 'Available for software engineering & client projects',
    workspaceImage,
  },

  snapshotDomains: [
    {
      title: 'Frontend Engineering',
      description: 'Responsive, accessible web interfaces engineered in React.js with modular component architecture.',
      skills: ['React.js', 'Responsive Web Design', 'HTML5 & CSS3', 'JavaScript'],
    },
    {
      title: 'Backend & APIs',
      description: 'Server-side application logic, secure authentication flows, and resilient RESTful API endpoints.',
      skills: ['Node.js', 'REST APIs', 'API Development', 'Authentication', 'Server-Side Development'],
    },
    {
      title: 'Databases & Integration',
      description: 'Structured relational data design and real-time document stores wired to application workflows.',
      skills: ['PostgreSQL', 'Firebase', 'Database Integration'],
    },
    {
      title: 'SaaS Development',
      description: 'Multi-tenant product capabilities, role permissions, payroll cycles, and automated business workflows.',
      skills: ['SaaS Product Development', 'Payroll Workflows', 'Employee Management'],
    },
    {
      title: 'Product & Architecture',
      description: 'Translating business requirements into structured engineering roadmaps and reliable software.',
      skills: ['Business Requirement Analysis', 'Product Planning', 'UI/UX Understanding'],
    },
    {
      title: 'Delivery & Lifecycle',
      description: 'End-to-end client project execution from initial discovery to deployment and post-launch refinement.',
      skills: ['Client Project Delivery', 'Problem Solving', 'Git & GitHub', 'Team Collaboration'],
    },
  ],

  projects: [
    {
      id: 'airohr',
      number: '01',
      title: 'AiroHR — Automated Payroll & HR',
      type: 'SaaS Project',
      role: 'Software Developer',
      domain: 'Software Development',
      website: 'airohr.com',
      shortDescription:
        'A comprehensive SaaS platform engineered for automated payroll processing, employee management, and biometric AI-enabled attendance.',
      fullDescription:
        'AiroHR is a SaaS engineering case study tackling core human resource management. Designed to replace fragmented spreadsheets, it unifies employee information management, automated payroll calculation workflows, and intelligent leave management with state-of-the-art AI attendance verification.',
      image: airohrImage,
      tags: ['SaaS Development', 'React.js', 'Node.js', 'REST APIs', 'PostgreSQL', 'AI Attendance'],
      capabilities: [
        'Employee Information Management',
        'Attendance Management & Tracking',
        'Leave Management & Approvals',
        'Automated Payroll Workflows',
        'HR-Related Lifecycle Operations',
        'Biometric AI-Enabled Attendance Verification',
      ],
      architecturePoints: [
        {
          title: 'Core HR & Payroll Engine',
          description:
            'Structured database schema modeling employees, departments, salary components, attendance logs, and tax deductions with transactional integrity.',
        },
        {
          title: 'AI Biometric Verification Pipeline',
          description:
            'Integrated Computer Vision pipeline utilizing facial recognition, high-dimensional face embeddings, real-time liveness detection, and anti-spoofing to verify physical employee presence.',
        },
        {
          title: 'Role-Based Access Control',
          description:
            'Multi-level permissions separating organizational administrators, department managers, and general employees across secure REST endpoints.',
        },
      ],
      developmentContribution: [
        'Architected front-end dashboard modules for employee profiles, leave requests, and payroll execution.',
        'Implemented server-side REST APIs handling CRUD operations, attendance recording, and payroll math.',
        'Integrated AI-enabled attendance workflows incorporating facial recognition, computer vision, face embeddings, liveness detection, and anti-spoofing techniques.',
        'Structured database schemas and secure authentication routines ensuring confidential employee data remains isolated.',
      ],
      workflowTabs: [
        {
          name: 'HR & Payroll Core',
          subtitle: 'Operational workflows for daily human resource operations',
          items: [
            'Employee Directory & Departmental Hierarchies',
            'Configurable Salary Structures & Deductions',
            'Leave Request, Approval, and Balance Tracking',
            'Automated Payslip Generation & Monthly Cycle Processing',
          ],
        },
        {
          name: 'AI Attendance & Vision',
          subtitle: 'Biometric verification powered by computer vision models',
          items: [
            'Facial Recognition Verification at clock-in points',
            'High-Dimensional Face Embeddings Matching',
            'Liveness Detection preventing static photograph fraud',
            'Anti-Spoofing checks guarding attendance data integrity',
          ],
        },
      ],
    },
    {
      id: 'worldwide-security',
      number: '02',
      title: 'Worldwide Security Services',
      type: 'Independent Client Project',
      role: 'End-to-End Development',
      domain: 'Software Development',
      website: 'worldwidesecurity.co.in',
      shortDescription:
        'Complete web solution built from business requirements to production deployment, featuring dynamic quotation engines, career submissions, and authenticated administrative workflows.',
      fullDescription:
        'An independent client software delivery project where Sharath managed the full engineering lifecycle: analyzing client requirements, planning software architecture, implementing responsive interfaces, establishing database schemas, and delivering a reliable commercial web platform.',
      image: worldwideSecurityImage,
      tags: ['Independent Client Project', 'Full-Stack Delivery', 'Node.js', 'REST APIs', 'Database Integration', 'Authentication'],
      capabilities: [
        'Client Requirements Understanding & Product Planning',
        'Responsive High-Performance Web Platform',
        'Service Enquiries & Dynamic Quotation Requests',
        'Interactive Contact Interactions & Customer Reviews',
        'Career Application Ingestion & Storage',
        'Administrative Authentication & Backend Data Management',
        'Deployment-Oriented Commercial Delivery',
      ],
      architecturePoints: [
        {
          title: 'Commercial Workflow Engine',
          description:
            'Structured intake channels for service inquiries, customized security quotation requests, and job applicant submissions with data validation.',
        },
        {
          title: 'Data Storage & Administrative Access',
          description:
            'Persistent backend database storing inquiries, review submissions, and applicant records with authenticated administrative access controls.',
        },
        {
          title: 'Lifecycle Delivery Architecture',
          description:
            'Designed for commercial deployment, featuring cross-device responsiveness, clean SEO accessibility, and robust server-side processing.',
        },
      ],
      developmentContribution: [
        'Analyzed client operational requirements and devised the technical product roadmap.',
        'Constructed the responsive web user experience optimized for desktop, tablet, and mobile visitors.',
        'Engineered backend processing pipelines for inquiry forms, quotation generators, and career applications.',
        'Implemented database-related logic and secure authentication to manage stored client and candidate information.',
        'Executed complete deployment and handover to production readiness.',
      ],
      workflowTabs: [
        {
          name: 'Inquiry & Quotation System',
          subtitle: 'Commercial intake pipelines capturing customer specifications',
          items: [
            'Service Category Selector & Detailed Quotation Request forms',
            'Interactive Contact & Customer Consultation submission',
            'Public Customer Review submissions with administrative review',
            'Automated server-side notifications for new commercial inquiries',
          ],
        },
        {
          name: 'Careers & Admin Portal',
          subtitle: 'Backend data persistence, applicant tracking, and administration',
          items: [
            'Career Application Portal with credential & resume uploads',
            'Authenticated administrative login to inspect incoming inquiries',
            'Persistent database models storing applicant and lead history',
            'Clean deployment pipeline configured for production availability',
          ],
        },
      ],
    },
  ],

  experience: [
    {
      role: 'Co-Founder & Freelance Software Developer',
      company: 'Weaiance',
      period: 'Jul 2025 – Present',
      location: 'Bengaluru, India',
      type: 'Current Professional Experience',
      summary:
        'Directing end-to-end software development initiatives, translating client business requirements into scalable web applications, architecting full-stack systems, and managing project lifecycles.',
      responsibilities: [
        'Developing performant web applications utilizing React.js, modern JavaScript, and responsive design systems.',
        'Engineering server-side solutions, RESTful API endpoints, and authentication workflows with Node.js.',
        'Designing relational and document database structures with PostgreSQL and Firebase integration.',
        'Conducting business requirement analysis and technical product planning for SaaS and client platforms.',
        'Managing the full software lifecycle from initial scoping and architecture to production deployment and client handover.',
      ],
      technologies: ['React.js', 'JavaScript', 'Node.js', 'REST APIs', 'PostgreSQL', 'Firebase', 'Authentication', 'Git'],
    },
  ],

  skillsGrouped: [
    {
      category: 'Frontend',
      summary: 'Crafting responsive, modular, and component-driven user interfaces.',
      skills: ['React.js', 'Responsive Web Design'],
    },
    {
      category: 'Backend',
      summary: 'Building server-side application logic, data pipelines, and REST APIs.',
      skills: ['Node.js', 'REST APIs', 'API Development', 'Authentication', 'Server-Side Development'],
    },
    {
      category: 'Databases',
      summary: 'Modeling structured schemas, persistent storage, and real-time sync.',
      skills: ['PostgreSQL', 'Firebase', 'Database Integration'],
    },
    {
      category: 'Languages',
      summary: 'Core foundational web programming and scripting languages.',
      skills: ['JavaScript', 'HTML5', 'CSS3'],
    },
    {
      category: 'Development Tools',
      summary: 'Version control and collaboration infrastructure.',
      skills: ['Git', 'GitHub'],
    },
    {
      category: 'Software & Product',
      summary: 'Bridging engineering implementation with strategic product goals.',
      skills: ['SaaS Product Development', 'Business Requirement Analysis', 'Product Planning', 'UI/UX Understanding'],
    },
    {
      category: 'Core Strengths',
      summary: 'Professional problem solving and delivery methodologies.',
      skills: [
        'Problem Solving',
        'Web Application Development',
        'Software Product Development',
        'Product-Oriented Thinking',
        'Client Project Delivery',
        'Team Collaboration',
      ],
    },
  ],

  lifecycleSteps: [
    {
      number: '01',
      title: 'Understand',
      focus: 'Requirements & Business Context',
      description:
        'Engage directly with stakeholders and domain realities to unpack what the software truly needs to accomplish before writing any code.',
      activities: [
        'Business requirement analysis',
        'User persona and workflow mapping',
        'Technical constraints identification',
        'Scope definition & milestones',
      ],
    },
    {
      number: '02',
      title: 'Plan',
      focus: 'Product & Technical Planning',
      description:
        'Formulate architectural blueprints, database relationship models, and interface wireframes ensuring coherent system boundaries.',
      activities: [
        'Data schema modeling (PostgreSQL / Firebase)',
        'REST API route contracts & payload specifications',
        'Component hierarchy & state management strategy',
        'Sprint planning and delivery schedule',
      ],
    },
    {
      number: '03',
      title: 'Build',
      focus: 'Frontend & Backend Development',
      description:
        'Write clean, modular, and maintainable code across both client interfaces and server-side runtimes.',
      activities: [
        'React.js component development with responsive layouts',
        'Node.js REST API implementation',
        'Authentication and session management',
        'Business logic rules & workflow engines',
      ],
    },
    {
      number: '04',
      title: 'Integrate',
      focus: 'APIs, Auth, Databases & Workflows',
      description:
        'Stitch client interfaces to backend endpoints, database persistence layers, and specialized subsystems.',
      activities: [
        'Database connections and query optimization',
        'Computer vision / biometric APIs integration',
        'Form intake and file ingestion pipelines',
        'Error boundary handling and edge cases',
      ],
    },
    {
      number: '05',
      title: 'Refine',
      focus: 'Testing, Refinement & UX Improvements',
      description:
        'Hone responsiveness across mobile, tablet, and desktop breakpoints while verifying usability and security.',
      activities: [
        'Cross-browser and viewport stress testing',
        'Input sanitization and authentication verification',
        'Latency reduction and UI feedback states',
        'Design polish and accessibility checks',
      ],
    },
    {
      number: '06',
      title: 'Deliver',
      focus: 'Deployment-Oriented Project Delivery',
      description:
        'Deploy production-ready builds, configure production hosting environments, and ensure verified client handoff.',
      activities: [
        'Production build optimization & environment setup',
        'Domain and DNS configuration',
        'Stakeholder walkthrough and acceptance verification',
        'Post-launch stability monitoring',
      ],
    },
  ],

  about: {
    lead: 'Software developer based in Bengaluru with a commitment to engineering software from requirements to real, operational products.',
    paragraphs: [
      'My work centers on building software that solves concrete operational requirements — whether that is engineering a multi-module SaaS platform like AiroHR with automated payroll and biometric attendance, or delivering complete client web platforms from scratch like Worldwide Security Services.',
      'With a computer science engineering background from G M Institute of Technology and hands-on experience as Co-Founder and developer at Weaiance, I approach every project with full-lifecycle discipline: clarifying business objectives, architecting databases and APIs, crafting responsive user interfaces, and ensuring reliable production delivery.',
      'I value clean code, modular architecture, and software that genuinely works for the people and businesses using it every day.',
    ],
  },

  education: {
    degree: 'B.E. — Computer Science and Engineering',
    institution: 'G M Institute of Technology, Davanagere',
    score: '7.5 CGPA',
    period: '2021 – 2025',
  },

  languages: [
    { name: 'English', proficiency: 'Professional Working Proficiency' },
    { name: 'Hindi', proficiency: 'Working Proficiency' },
    { name: 'Kannada', proficiency: 'Native / Bilingual' },
  ],
};
