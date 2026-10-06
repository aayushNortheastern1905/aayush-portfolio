export interface NavItem {
  key: string;
  label: string;
  target?: string;
  href?: string;
}

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface WritingItem {
  title: string;
  description: string;
  href: string;
}

export const profile = {
  name: 'aayush sawant',
  location: 'jacksonville, usa',
  company: 'ask abhi',
  school: 'northeastern university',
  intro:
    'i build ai products end to end... voice agents, lead scoring, serverless backends and the full-stack apps around them. founding engineer at voiceerp, now at ask abhi.',
};

export const BLOG_URL = 'https://aayushnortheastern1905.github.io/aayushWrites/';

export const navItems: NavItem[] = [
  { key: 'h', label: 'home', target: 'home' },
  { key: 'w', label: 'work', target: 'work' },
  { key: 'p', label: 'projects', target: 'projects' },
  { key: 'r', label: 'writing', target: 'writing' },
  { key: 'b', label: 'blog', href: BLOG_URL },
];

export const contactLinks: ContactLink[] = [
  { label: 'email', value: 'swnt.aayush@gmail.com', href: 'mailto:swnt.aayush@gmail.com' },
  { label: 'github', value: '/aayushNortheastern1905', href: 'https://github.com/aayushNortheastern1905' },
  { label: 'linkedin', value: '/aayush-sawant', href: 'https://www.linkedin.com/in/aayush-sawant/' },
];

export const writing: WritingItem[] = [
  {
    title: 'the huntington news',
    description: 'staff writer, since sept 2024',
    href: 'https://huntnewsnu.com/86139/editorial/op-ed-bostons-lifeline-always-on-life-support/',
  },
  {
    title: 'ieee publication',
    description: 'design of voice-controlled wheelchair model, aug 2021',
    href: 'https://ieeexplore.ieee.org/document/9587859',
  },
];
