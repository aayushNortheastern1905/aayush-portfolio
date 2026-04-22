export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['TypeScript', 'Java', 'Python', 'JavaScript', 'Kotlin', 'Ruby', 'C/C++', 'PHP'] },
  { category: 'Frontend', items: ['React.js', 'React Native', 'Next.js', 'Redux Toolkit', 'Material UI', 'Tailwind CSS'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'GraphQL'] },
  { category: 'Cloud & DevOps', items: ['AWS Lambda', 'AWS S3', 'AWS EKS', 'EventBridge', 'DynamoDB', 'Docker', 'Kubernetes', 'Jenkins'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Elasticsearch'] },
  { category: 'Testing & Tools', items: ['Jest', 'Cypress', 'Playwright', 'Selenium', 'Git', 'VAPI', 'Twilio', 'Posthog'] },
];
