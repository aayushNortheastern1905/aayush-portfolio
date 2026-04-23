import { ReactNode } from 'react';

export interface Project {
  title: string;
  description: ReactNode;
  tech: string[];
  impact: string;
  live: string;
  category: string;
  image: string;
}

export const projects: Project[] = [
  {
    title: 'DocuPal',
    description: (
      <>
        AI immigration assistant with <strong>document processing agent</strong> using <strong>React/TypeScript</strong> and <strong>AWS Lambda</strong>, automating complex F-1/OPT/H-1B visa workflows and documentation processes.
      </>
    ),
    tech: ['React.js', 'TypeScript', 'AWS SAM', 'Auth0', 'Gemini AI', 'DynamoDB'],
    impact: 'Automated visa documentation with AI-powered form parsing and secure authentication',
    live: 'https://docupal-one.vercel.app/',
    category: 'AI Immigration Platform',
    image: '/images/docupal.jpeg',
  },
  {
    title: 'SonomaticAI',
    description: (
      <>
        AI-powered music creation platform with revolutionary interface. Built personalization engine using <strong>PyTorch</strong>, <strong>TensorFlow</strong>, <strong>NLP</strong>, and <strong>GAN</strong> models.
      </>
    ),
    tech: ['React', 'TypeScript', 'PyTorch', 'TensorFlow', 'AWS S3', 'NLP', 'GANs'],
    impact: '40% user engagement increase, 30% development speed boost, optimized music storage',
    live: 'https://www.sonomatic.ai/',
    category: 'GenAI Platform for Music Creation',
    image: '/images/sonomaticAI.jpg',
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
  {
    title: 'Campus Connect',
    description: (
      <>
        A multi-tenant student housing platform built with <strong>Java Spring Boot</strong> and <strong>MySQL</strong>, serving 5 distinct stakeholder types including students, landlords, and admins. Engineered a robust <strong>RESTful API</strong> layer with <strong>JDBC</strong> connection pooling and prepared statements to safely handle concurrent database operations at scale.
      </>
    ),
    tech: ['Java', 'Spring Boot', 'MySQL', 'JUnit', 'REST APIs', 'Git', 'JDBC'],
    impact: 'Cut query time by 35%, achieved 75% test coverage with JUnit and Mockito, clean MVC architecture with DAO pattern',
    live: 'https://github.com/aayushNortheastern1905/Application-engg-projects/tree/main/final-project-campus-connect-main/final-project-campus-connect-main',
    category: 'Student Housing Platform',
    image: '/images/campusconnect.jpg',
  },
];
