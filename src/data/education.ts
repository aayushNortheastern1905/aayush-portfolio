export interface Education {
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa: string;
  domain: string;
  coursework: string[];
}

export const education: Education[] = [
  {
    institution: 'Northeastern University',
    degree: 'Master of Science in Computer Software Engineering',
    period: 'September 2023 - December 2025',
    location: 'Boston, MA',
    gpa: '3.7',
    domain: 'northeastern.edu',
    coursework: ['Full Stack Engineering', 'Object Oriented Design', 'Cloud Computing', 'Agentic AI'],
  },
  {
    institution: 'College of Engineering, Pune',
    degree: 'Bachelor of Technology in Electronics and Telecommunications Engineering',
    period: 'August 2017 - May 2021',
    location: 'Pune, India',
    gpa: '3.2',
    domain: 'coeptech.ac.in',
    coursework: ['Data Structures and Algorithms', 'Operating Systems', 'Computer Architecture', 'Computer Networks'],
  },
];
