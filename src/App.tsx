import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, PenTool, Globe } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = ['SOFTWARE ENGINEER','AI_ENTHUSIAST', 'INNOVATOR', 'WRITER'];

  useEffect(() => {
    const currentText = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < currentText.length) {
          setCurrentRole(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          // Finished typing, wait then start deleting
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setCurrentRole(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          // Finished deleting, move to next role
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, roleIndex, roles]);

  const metrics = [
    { value: '500+', label: 'Users Served', description: 'Active users on VeryDesi platform' },
    { value: '40%', label: 'Performance Boost', description: 'Page load time reduction via Next.js migration' },
    { value: '90%', label: 'Automation', description: 'Workflow efficiency improvement' },
    { value: '25%', label: 'API Enhancement', description: 'Backend response time optimization' }
  ];

  const projects = [
    {
      title: "VeryDesi.com",
      description: "Full-stack housing platform connecting South Asian students and immigrants across the U.S. Built with monorepo architecture featuring Google SSO authentication and interactive maps.",
      tech: ["Next.js", "React", "TypeScript", "AWS Lambda", "DynamoDB", "GraphQL", "Leaflet.js"],
      impact: "500+ verified spaces, 50+ cities covered, 10K+ happy customers",
      live: "https://verydesi.com/",
      category: "Housing Community Platform",
      image: "/images/verydesi.jpg"
    },
    {
      title: "Self-App",
      description: "Stealth startup project involving React to Next.js migration of 20+ components and GraphQL API optimization with Django backend.",
      tech: ["Next.js", "React", "TypeScript", "GraphQL", "Django", "Google Analytics"],
      impact: "40% page load reduction, 25% feature adoption increase, 25% API response improvement",
      live: "https://www.self-app.com/",
      category: "Mental Health Platform",
      image: "/images/selfapp.jpg"
    },
    {
      title: "SonomaticAI",
      description: "AI-powered music creation platform with revolutionary interface. Built personalization engine using PyTorch, TensorFlow, NLP, and GAN models.",
      tech: ["React", "TypeScript", "PyTorch", "TensorFlow", "AWS S3", "NLP", "GANs"],
      impact: "40% user engagement increase, 30% development speed boost, optimized music storage",
      live: "https://www.sonomatic.ai/",
      category: "GenAI Platform for creating Music!",
      image: "/images/sonomaticAI.jpg"
    }
  ];

  const experience = [
    {
      company: "EmTech Care Labs",
      role: "Software Engineer Intern",
      period: "Jan 2025 - June 2025",
      location: "Portland, ME",
      highlights: [
        "Developed end-to-end Zoom integration with React/TypeScript reducing admin overhead by 30%",
        "Built Care Priorities feature automating task approvals and cutting workflow time significantly",
        "Automated Medicaid data ingestion using AWS pipeline eliminating 90% of manual updates",
        "Created financial budgeting calculator streamlining caregiver planning workflows",
        "Built Medicaid eligibility calculator determining copays and PACE qualification"
      ]
    },
    {
      company: "Stealth Startup",
      role: "Software Contributor",
      period: "Jul 2024 - Oct 2024",
      location: "NYC Metro Area • Remote",
      highlights: [
        "Spearheaded migration of 20+ React components to Next.js achieving 40% page load reduction",
        "Integrated Google Analytics with custom event tracking resulting in 25% feature adoption increase",
        "Developed optimized GraphQL APIs using Django enhancing backend response times by 25%"
      ]
    },
    {
      company: "eQ Technologic",
      role: "Software Engineer",
      period: "Aug 2021 - Aug 2023", 
      location: "Pune, India",
      highlights: [
        "Led development of 15+ React.js modules reducing UI-related bugs by 30%",
        "Implemented secure OAuth 2.0/JWT authentication reducing session vulnerabilities by 30%",
        "Architected containerized microservices with Docker/Kubernetes boosting deployment velocity by 40%",
        "Achieved 90% test coverage with Cypress.io/Jest reducing production bugs by 25%"
      ]
    }
  ];

  const skills = [
    { category: "Frontend", items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Leaflet.js", "Recharts"] },
    { category: "Backend", items: ["Node.js", "GraphQL", "Django", "Express.js", "AWS Lambda"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "Jenkins", "AWS S3", "DynamoDB"] },
    { category: "Databases", items: ["PostgreSQL", "MongoDB", "Firebase", "Elasticsearch", "MySQL"] },
    { category: "AI/ML", items: ["PyTorch", "TensorFlow", "NLP", "GANs", "NumPy", "Pandas"] },
    { category: "Testing", items: ["Jest", "Playwright", "Cypress.io", "Selenium", "JUnit"] }
  ];

  const education = [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Information Systems",
      period: "Sep 2023 - Dec 2025",
      location: "Boston, MA",
      gpa: "3.7",
      coursework: ["Full Stack Web Development", "Object Oriented Design", "Cloud Computing", "Data Analysis"]
    },
    {
      institution: "COEP Technological University",
      degree: "Bachelor of Technology in Electronics and Telecommunications",
      period: "Aug 2017 - May 2021",
      location: "Pune, India", 
      gpa: "3.2",
      coursework: ["Data Structures and Algorithms", "Operating Systems", "Computer Architecture"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-black relative" style={{ fontFamily: 'Monaco, "Courier New", monospace' }}>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight text-black">AAYUSH_SAWANT</div>
          <div className="flex space-x-12">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-black transition-all duration-300 text-sm tracking-widest uppercase font-medium"
                onMouseEnter={() => setActiveSection(item)}
                onMouseLeave={() => setActiveSection('')}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-b from-gray-50 to-white pt-32 pb-16">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-tight">
                <span className="block text-gray-600 min-h-[1.2em]">
                  {currentRole}
                  <span className="animate-pulse ml-1 text-black">|</span>
                </span>
              </h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed tracking-wide">
                Northeastern MS student graduating December 2025. Building scalable systems, 
                AI platforms, and community-driven applications.
              </p>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Healthcare Tech • Community Platforms • Generative AI • Professional Writer
              </p>
            </div>
            
            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-gray-300">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="text-4xl font-bold tracking-tight text-black">{metric.value}</div>
                  <div className="text-sm text-gray-700 uppercase tracking-widest font-medium">{metric.label}</div>
                  <div className="text-xs text-gray-600">{metric.description}</div>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-6 pt-12">
              <a 
                href="#projects" 
                className="px-12 py-4 border-2 border-black hover:bg-black hover:text-white transition-all duration-300 text-sm tracking-widest uppercase font-medium"
              >
                View_Projects
              </a>
              <a 
                href="#contact" 
                className="px-12 py-4 bg-black text-white hover:bg-gray-800 transition-all duration-300 text-sm tracking-widest uppercase font-medium"
              >
                Contact_Me
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-gray-600" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-5xl font-light mb-12 tracking-tighter text-black">ABOUT_ME</h2>
              <div className="space-y-6 text-gray-800 leading-relaxed">
                <p>
                  Northeastern Master's student graduating December 2025, with a unique blend 
                  of technical expertise and creative storytelling that drives meaningful innovation.
                </p>
                <p>
                  My journey began at COEP India with IEEE research on voice-operated wheelchairs, 
                  leading to full-time development at eQ Technologic building deployment systems 
                  for Lockheed Martin and Rolls Royce.
                </p>
                <p>
                  Recently completed software co-op at EmTech Care Labs, building HIPAA-compliant healthcare 
                  automation systems and secure data pipelines while developing community platforms that serve 500+ users.
                </p>
                <p>
                  Professional writer for The Huntington News and maintainer of a personal blog 
                  exploring connections between Indian cinema and American storytelling, bringing 
                  global perspective to technical teams.
                </p>
              </div>
              
              <div className="pt-12">
                <h3 className="text-xl font-bold tracking-widest uppercase mb-8 text-black">Technical_Stack</h3>
                <div className="space-y-6">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <div className="text-sm text-gray-700 uppercase tracking-widest mb-3 font-semibold">
                        {skillGroup.category}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill) => (
                          <span 
                            key={skill}
                            className="px-4 py-2 border border-gray-400 text-xs tracking-wide text-gray-800 hover:border-black hover:bg-black hover:text-white transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white p-8 border border-gray-300 hover:border-black transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <Code className="w-6 h-6 text-black" />
                  <span className="text-sm uppercase tracking-widest text-black font-semibold">Current_Focus</span>
                </div>
                <div className="text-sm text-gray-800 space-y-2">
                  <div>• Community platform scaling VeryDesi.com</div>
                  <div>• Exploring Agentic AI</div>
                  <div>• AI/ML music personalization</div>
                  <div>• AWS serverless architecture</div>
                </div>
              </div>

              <div className="bg-white p-8 border border-gray-300 hover:border-black transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <PenTool className="w-6 h-6 text-black" />
                  <span className="text-sm uppercase tracking-widest text-black font-semibold">Writing_Portfolio</span>
                </div>
                <div className="text-sm text-gray-800 space-y-2">
                  <div>• The Huntington News contributor</div>
                  <div>• Personal blog on culture & tech</div>
                  <div>• Cross-cultural storytelling</div>
                  <div>• Technical documentation</div>
                </div>
              </div>

              <div className="bg-white p-8 border border-gray-300 hover:border-black transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <Globe className="w-6 h-6 text-black" />
                  <span className="text-sm uppercase tracking-widest text-black font-semibold">Research_Impact</span>
                </div>
                <div className="text-sm text-gray-800 space-y-2">
                  <div>• IEEE published research</div>
                  <div>• Voice-operated wheelchair systems</div>
                  <div>• Accessibility technology innovation</div>
                  <div>• Healthcare compliance systems</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-5xl font-light mb-20 tracking-tighter text-center text-black">SELECTED_WORK</h2>
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="grid md:grid-cols-5 gap-12 items-center group"
              >
                <div className="md:col-span-2 space-y-6">
                  <div className="text-xs text-gray-700 uppercase tracking-widest font-medium">{project.category}</div>
                  <h3 className="text-3xl font-light tracking-tight text-black">{project.title}</h3>
                  <p className="text-gray-800 leading-relaxed">{project.description}</p>
                  <div className="text-sm font-bold text-black">{project.impact}</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs border border-gray-400 text-gray-800 tracking-wide"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-6 pt-4">
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-gray-700 hover:text-black transition-colors duration-200 flex items-center space-x-2 uppercase tracking-wide font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live_Site</span>
                    </a>
                    <span className="text-sm text-gray-600 flex items-center space-x-2 uppercase tracking-wide">
                      <Code className="w-4 h-4" />
                      <span>Proprietary</span>
                    </span>
                  </div>
                </div>
                <div className="md:col-span-3">
                  <div className="aspect-video bg-white border border-gray-300 group-hover:border-black transition-all duration-500 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/5 to-transparent group-hover:from-black/15 transition-all duration-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-light mb-20 tracking-tighter text-center text-black">EXPERIENCE</h2>
          <div className="space-y-16">
            {experience.map((job, index) => (
              <div key={index} className="border-l-2 border-gray-400 pl-8 relative">
                <div className="absolute -left-2 top-0 w-3 h-3 bg-black rounded-full"></div>
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-light tracking-tight text-black">{job.company}</h3>
                      <div className="text-lg text-gray-700">{job.role}</div>
                    </div>
                    <div className="text-right text-sm text-gray-700">
                      <div className="uppercase tracking-widest font-medium">{job.period}</div>
                      <div>{job.location}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    {job.highlights.map((highlight, i) => (
                      <div key={i} className="text-gray-800 text-sm leading-relaxed">
                        • {highlight}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-32 bg-white scroll-mt-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-light mb-20 tracking-tighter text-center text-black">EDUCATION</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-8 border border-gray-300 hover:border-black transition-all duration-300">
                <h3 className="text-xl font-light tracking-tight mb-2 text-black">{edu.institution}</h3>
                <div className="text-lg text-gray-700 mb-4">{edu.degree}</div>
                <div className="flex justify-between items-center mb-4 text-sm text-gray-700">
                  <span className="uppercase tracking-widest font-medium">{edu.period}</span>
                  <span className="font-semibold">GPA: {edu.gpa}</span>
                </div>
                <div className="text-xs text-gray-600 mb-4 font-medium">{edu.location}</div>
                <div className="space-y-1">
                  {edu.coursework.map((course) => (
                    <div key={course} className="text-sm text-gray-800">• {course}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-32 bg-gray-50 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-8">
          <h2 className="text-5xl font-light mb-20 tracking-tighter text-center text-black">WRITING_PORTFOLIO</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="bg-white border border-gray-300 p-8 hover:border-black transition-all duration-300">
                <h3 className="text-xl font-light tracking-tight mb-4 text-black">The Huntington News</h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-6">
                  Professional journalism covering campus life, culture, and technology at Northeastern University. 
                  Contributing articles and insights to the university's primary news publication.
                </p>
                <a 
                  href="https://huntnewsnu.com/staff_name/aayush-sawant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-black transition-colors flex items-center space-x-2 uppercase tracking-wide font-medium"
                >
                  <span>Read_Articles</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white border border-gray-300 p-8 hover:border-black transition-all duration-300">
                <h3 className="text-xl font-light tracking-tight mb-4 text-black">Personal Blog</h3>
                <p className="text-gray-800 text-sm leading-relaxed mb-6">
                  Technical insights and cultural commentary exploring connections between Indian cinema 
                  and American storytelling. Built with Jekyll, featuring both English and Marathi posts.
                </p>
                <a 
                  href="https://aayushnortheastern1905.github.io/aayushWrites/blog.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 hover:text-black transition-colors flex items-center space-x-2 uppercase tracking-wide font-medium"
                >
                  <span>Visit_Blog</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-black text-white scroll-mt-24">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <h2 className="text-5xl font-light mb-12 tracking-tighter">LET'S_CONNECT</h2>
          <p className="text-gray-300 text-lg mb-16 max-w-2xl mx-auto leading-relaxed">
            Available for full-time opportunities starting December 2025. 
            Let's build something exceptional together.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                icon: Mail, 
                label: 'Email', 
                value: 'sawant.aay@northeastern.edu',
                href: 'mailto:sawant.aay@northeastern.edu' 
              },
              { 
                icon: Linkedin, 
                label: 'LinkedIn', 
                value: '/aayush-sawant',
                href: 'https://www.linkedin.com/in/aayush-sawant/' 
              },
              { 
                icon: Github, 
                label: 'GitHub', 
                value: '/aayushNortheastern1905',
                href: 'https://github.com/aayushNortheastern1905' 
              }
            ].map(({ icon: Icon, label, value, href }) => (
              <a 
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="border border-gray-600 p-8 hover:border-white transition-all duration-300 group-hover:bg-white group-hover:text-black">
                  <Icon className="w-8 h-8 mx-auto mb-4" />
                  <div className="text-sm uppercase tracking-widest mb-2 font-medium">{label}</div>
                  <div className="text-xs text-gray-300 group-hover:text-gray-700">{value}</div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="pt-16 text-sm text-gray-400 space-y-2">
            <div className="uppercase tracking-widest font-medium">Phone</div>
            <div className="text-gray-300">+1 (551) 229-8798</div>
            <div className="pt-4 text-xs text-gray-400">
              Available for full-time roles • Graduating December 2025
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-700 py-12">
        <div className="max-w-6xl mx-auto px-8">
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <div className="uppercase tracking-widest">© 2025 Aayush Rajendra Sawant</div>
            <div className="uppercase tracking-widest">Northeastern University • MS Information Systems</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;