export interface SkillGroup {
  category: string;
  items: string[];
}

export const skills: SkillGroup[] = [
  { category: 'Languages', items: ['TypeScript', 'Java', 'Python', 'JavaScript', 'Kotlin', 'Swift', 'Ruby', 'C/C++'] },
  { category: 'Frontend', items: ['React.js', 'React Native', 'Next.js', 'Redux Toolkit', 'Material UI', 'Tailwind CSS'] },
  { category: 'Data Visualization', items: ['Mapbox GL', 'Leaflet.js', 'Three.js', 'D3.js'] },
  { category: 'Backend', items: ['Node.js', 'Express.js', 'Spring Boot', 'FastAPI', 'GraphQL'] },
  { category: 'Cloud/DevOps', items: ['AWS (Lambda, S3, EKS, Cognito, EventBridge, DynamoDB)', 'Docker', 'Kubernetes', 'Jenkins'] },
  { category: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Elasticsearch', 'Redis'] },
  { category: 'LLMs', items: ['Claude Haiku', 'o4-mini', 'Gemini AI', 'LangChain'] },
  { category: 'Voice AI', items: ['VAPI', 'ElevenLabs', 'Deepgram', 'Twilio'] },
  { category: 'Testing/Tools', items: ['Jest', 'Cypress', 'Playwright', 'Browserbase', 'Selenium', 'Git', 'Posthog'] },
];
