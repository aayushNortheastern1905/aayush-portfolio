import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: ReactNode;
  tech: string[];
  impact: string;
  live?: string;
  category: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: 'Sage',
    description: (
      <>
        Inbound qualification <strong>voice agent</strong> for lending leads. Live and bilingual, with a <strong>deterministic engine</strong>, not the model, deciding every approval. Blocks tool-call ordering races and redacts SSNs from transcripts.
      </>
    ),
    tech: ['TypeScript', 'Node.js', 'Express', 'VAPI', 'Twilio', 'GPT-4o'],
    impact: 'Deterministic approvals, no decision before the credit check returns, SSN-safe logs',
    live: 'https://github.com/aayushNortheastern1905/symple-agent',
    category: 'Voice AI Agent',
  },
  {
    title: 'Sarvam',
    description: (
      <>
        Autonomous <strong>coding agent</strong> on a Tree-sitter code index, verifying patches through 3 checks in a Docker sandbox. Prompt injection defense (0 of 5 planted secrets leaked), crash-resumable orchestrator and hard per-task budgets.
      </>
    ),
    tech: ['Python', 'FastAPI', 'Docker', 'Tree-sitter', 'SQLite'],
    impact: 'Crash-resumable runs, bounded repair loop, no double charged runs',
    live: 'https://github.com/aayushNortheastern1905/sarvam-code-agent',
    category: 'Autonomous Coding Agent',
  },
  {
    title: 'DocuPal',
    description: (
      <>
        AI immigration assistant with <strong>document processing agent</strong> using <strong>React/TypeScript</strong> and <strong>AWS Lambda</strong>, automating complex F-1/OPT/H-1B visa workflows and documentation processes.
      </>
    ),
    tech: ['React.js', 'TypeScript', 'AWS SAM', 'Auth0', 'Gemini AI', 'DynamoDB'],
    impact: 'Automated visa documentation with AI-powered form parsing and secure authentication',
    live: 'https://github.com/aayushNortheastern1905/immigration-ai-agent',
    category: 'AI Immigration Platform',
    image: '/images/docupal.jpeg',
  },
  {
    title: 'House of Kicks',
    description: (
      <>
        Full-stack e-commerce platform for sneaker enthusiasts featuring <strong>investment tracking</strong>, historical price analytics, and <strong>secure payment processing</strong>. Built with role-based authentication for admin dashboard and user portfolio management.
      </>
    ),
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT Auth', 'Stripe API', 'Chart.js'],
    impact: 'Complete sneaker marketplace with investment ROI tracking, admin analytics dashboard, and secure checkout flow',
    live: 'https://github.com/aayushNortheastern1905/House-of-Kicks',
    category: 'E-Commerce Platform',
    image: '/images/houseofkicks.jpg',
  },
];

export const techColors: Record<string, string> = {
  'React.js': '#61DAFB',
  TypeScript: '#3178C6',
  'Node.js': '#5FA04E',
  Python: '#3572A5',
  Java: '#B07219',
  'Spring Boot': '#6DB33F',
  'AWS SAM': '#FF9900',
};

export const DEFAULT_TECH_COLOR = '#555555';
