import { ReactNode } from 'react';

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  domain: string;
  liveLink: string;
  highlights: ReactNode[];
}

export const experience: Experience[] = [
  {
    company: 'VoiceERP',
    role: 'Founding Software Engineer',
    period: 'January 2026 - Present',
    location: 'Cleveland, OH',
    domain: 'voiceerp.com',
    liveLink: 'https://voiceerp.com/',
    highlights: [
      <>Built shift confirmation and general enquiry voice features for <strong>Viki</strong>, an AI dispatcher using <strong>VAPI and AWS Lambda</strong>, autonomously calling drivers and handling inbound queries, cutting manual dispatch effort by <strong>60%</strong></>,
      <>Built <strong>Cortex Sync</strong> using <strong>AWS Lambda and EventBridge</strong> to sync driver and vehicle data hourly, eliminating manual data entry</>,
      <>Designed a driver name resolution engine in <strong>React, TypeScript, MUI and DynamoDB</strong> with fuzzy, partial and exact matching, cutting onboarding from <strong>4 hours to 30 minutes</strong></>,
      <>Architected <strong>Daily Ops</strong>, a rostering module in <strong>React, TypeScript, MUI, AWS Lambda and DynamoDB</strong>, enabling DSP managers to manage rosters, driver logs and fleet inspections</>,
      <>Shipped a cross-platform <strong>React Native</strong> mobile app for Daily Ops on <strong>iOS and Android</strong> with driver swaps, event logging and real-time roster status</>,
    ],
  },
  {
    company: 'EmTech Care Labs',
    role: 'Software Engineer Intern',
    period: 'January 2025 - June 2025',
    location: 'Portland, ME',
    domain: 'emtechcarelabs.com',
    liveLink: 'https://emtechcarelabs.com/',
    highlights: [
      <>Built <strong>Zoom integration</strong> in <strong>React, TypeScript and serverless AWS</strong> for automated meeting scheduling, recordings and transcripts, boosting counseling efficiency by <strong>25%</strong></>,
      <>Developed <strong>Care Priorities</strong> feature in <strong>React, TypeScript and serverless AWS</strong>, automating task approvals and cutting admin overhead by <strong>30%</strong></>,
      <>Automated <strong>Medicaid data pipeline</strong> using <strong>AWS Lambda, Step Functions, S3 and Python</strong>, eliminating <strong>90%</strong> of manual updates across healthcare workflows</>,
      <>Built <strong>CareWallet</strong> mobile app in <strong>React Native</strong> for <strong>100+</strong> beta users</>,
    ],
  },
  {
    company: 'VeryDesi.com',
    role: 'Early Software Engineer',
    period: 'October 2024 - December 2024',
    location: 'Boston, MA',
    domain: 'verydesi.com',
    liveLink: 'https://verydesi.com/',
    highlights: [
      <>Built a full stack housing platform for <strong>300+ South Asian students</strong> across <strong>20+ US cities</strong> using <strong>Next.js, TypeScript and Tailwind CSS</strong>, implementing Google and Facebook SSO with JWT auth and role based access for tenants and landlords</>,
      <>Designed <strong>GraphQL APIs</strong> to power listing queries, filters and personalized recommendations, integrated <strong>Leaflet.js</strong> for map based property search, increasing engagement by <strong>25%</strong></>,
    ],
  },
  {
    company: 'eQ Technologic',
    role: 'Software Engineer',
    period: 'August 2021 - August 2023',
    location: 'Pune, India',
    domain: '1eq.com',
    liveLink: 'https://www.1eq.com/',
    highlights: [
      <>Built <strong>15+ responsive React.js, TypeScript and Material UI</strong> components for the <strong>eQube Deployment Manager</strong>, used by Lockheed Martin, Northrop Grumman and Rolls Royce, cutting UI bugs by <strong>30%</strong></>,
      <>Implemented <strong>OAuth 2.0 and JWT</strong> authentication with role based access control on <strong>Java Spring Boot</strong> REST APIs, building infrastructure provisioning endpoints enabling enterprise clients to spin up containerized and database environments on demand</>,
      <>Architected containerized microservices using <strong>Docker, Kubernetes and AWS EKS</strong>, improving deployment efficiency by <strong>40%</strong></>,
    ],
  },
];
