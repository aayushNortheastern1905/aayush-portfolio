export interface Recommendation {
  name: string;
  title: string;
  company: string;
  relationship: string;
  text: string;
  photo: string;
  linkedin: string;
}

export const recommendations: Recommendation[] = [
  {
    name: 'Zachary Dudzik',
    title: 'Founding Software Engineer',
    company: 'VoiceERP',
    relationship: 'Worked on the same team',
    text: "I had the pleasure of working with Aayush as a fellow full stack software engineer, and I can confidently say he is a great addition to any engineering team. He has strong full-stack experience working with React and AWS, and consistently delivered reliable well-engineered solutions. He takes ownership of his work and does a great job thinking through problems from end to end balancing functionality, maintainability, and project velocity. He's a great teammate who communicates clearly, and approaches challenges with a calm, solutions-oriented mindset. He's someone you can trust to contribute meaningfully and keep projects moving forward. I would highly recommend Aayush to any team looking for a dependable and well-rounded engineer!",
    photo: '/images/zack.jpeg',
    linkedin: 'https://www.linkedin.com/in/aayush-sawant/details/recommendations/?detailScreenTabIndex=0',
  },
  {
    name: 'Richard Garber',
    title: 'Full Stack Engineer',
    company: 'VoiceERP',
    relationship: 'Worked on the same team',
    text: "Aayush is a hard worker, who will put forth the effort necessary to get the job done. During my time working with Aayush, he delivered multiple critical features, in both our React frontend and our Typescript lambda backend and was always incredibly responsive to changing requirements or review. Aayush always went above and beyond, and I'm confident he will continue at whatever future role he chooses.",
    photo: '/images/richard.jpeg',
    linkedin: 'https://www.linkedin.com/in/aayush-sawant/details/recommendations/?detailScreenTabIndex=0',
  },
  {
    name: 'Liz Hanna',
    title: 'Connecting You with Opportunities | Optimizing DSP Operations',
    company: 'VoiceERP',
    relationship: 'Worked on different teams',
    text: "I've truly enjoyed working with Aayush. He's not only a great communicator, but also incredibly kind and supportive. He consistently goes out of his way to explain complex technical concepts in a clear way for me, both in person and with Looms, which has helped me better serve our customers.",
    photo: '/images/liz.png',
    linkedin: 'https://www.linkedin.com/in/aayush-sawant/details/recommendations/?detailScreenTabIndex=0',
  },
];
