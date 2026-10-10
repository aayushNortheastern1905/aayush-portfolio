import { ReactNode } from 'react';

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  domain: string;
  liveLink?: string;
  highlights: ReactNode[];
}

export const experience: Experience[] = [
  {
    company: 'Ask Abhi',
    role: 'Software Engineer (Contract)',
    period: 'August 2026 - Present',
    location: 'Jacksonville, FL',
    domain: 'askabhi',
    highlights: [
      <>Built an <strong>AI lead generation</strong> service for Sky Harbour Aviation, ranking fuel and hangar leads with an <strong>LLM layer</strong> explaining each score</>,
      <>Built a <strong>Python, Playwright and Browserbase</strong> pipeline syncing <strong>FAA and JetNet</strong> aviation data on a cron, keeping lead records current</>,
      <>Built <strong>Ask ABHI Train</strong>, a <strong>Chrome extension</strong> turning SAP Fiori recordings into narrated guides via <strong>Gemini and ElevenLabs</strong></>,
      <>Built a <strong>C# .NET 8</strong> SAP GUI recorder on the Scripting API, with <strong>Keycloak PKCE</strong> login and <strong>4 checks</strong> blocking production SAP</>,
    ],
  },
  {
    company: 'VoiceERP',
    role: 'Founding Software Engineer',
    period: 'January 2026 - May 2026',
    location: 'Cleveland, OH',
    domain: 'voiceerp.com',
    liveLink: 'https://voiceerp.com/',
    highlights: [
      <>Built <strong>Viki</strong>'s scheduling agents with <strong>Claude Haiku, ElevenLabs, Deepgram, VAPI and Twilio</strong>, cutting dispatch effort <strong>60%</strong></>,
      <>Led model evaluation benchmarking <strong>Claude Haiku</strong> against <strong>o4-mini</strong> on latency, accuracy and cost for production voice AI</>,
      <>Built <strong>Cortex Sync</strong> on <strong>AWS Lambda, EventBridge and SQS</strong> to hourly sync fleet data with zero manual entry</>,
      <>Designed a driver name resolution engine in <strong>React, TypeScript and AWS Lambda</strong>, cutting onboarding from <strong>4 hours to 30 minutes</strong></>,
      <>Built a live fleet tracking map on the admin dashboard using <strong>Mapbox GL</strong>, visualizing each driver's real time route</>,
      <>Built a <strong>React Native</strong> mobile app for mobile rostering, letting DSP managers manage driver rosters on <strong>iOS and Android</strong></>,
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
      <>Built <strong>Zoom integration</strong> in <strong>React, TypeScript and AWS</strong>, boosting counseling efficiency by <strong>25%</strong></>,
      <>Developed <strong>Care Priorities</strong> in <strong>React, TypeScript and AWS</strong>, automating task approvals and cutting admin overhead by <strong>30%</strong></>,
      <>Built an autonomous <strong>Medicaid pipeline</strong> using <strong>AWS Lambda and Python</strong>, with SNS failure alerts, cutting updates <strong>90%</strong></>,
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
      <>Built a housing platform for <strong>300+ South Asian students</strong> across <strong>20+ US cities</strong> using <strong>Next.js, TypeScript and Tailwind CSS</strong></>,
      <>Designed <strong>GraphQL APIs</strong> for listing search and built a real time <strong>Leaflet.js</strong> map view filtering live listings by selected zip code, increasing engagement by <strong>25%</strong></>,
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
      <>Built <strong>15+ UI modules</strong> in <strong>React, TypeScript and Material UI</strong> for eQube, used by clients like Lockheed Martin, cutting UI bugs <strong>30%</strong></>,
      <>Implemented <strong>OAuth 2.0 and JWT</strong> auth with role based access on <strong>Java Spring Boot</strong> APIs, cutting security vulnerabilities by <strong>95%</strong></>,
      <>Built provisioning APIs supporting containerized deployment on <strong>Docker and Kubernetes</strong> and traditional infra, lifting efficiency by <strong>40%</strong></>,
      <>Implemented <strong>Elasticsearch</strong> indexing to search infra names across thousands of environments, enabling fast duplicate detection</>,
    ],
  },
];
