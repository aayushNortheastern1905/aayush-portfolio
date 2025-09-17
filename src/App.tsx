import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, PenTool, Globe, Menu, X } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [countersAnimated, setCountersAnimated] = useState(false);
  const countersRef = useRef<HTMLDivElement>(null);

  const roles = ['SOFTWARE ENGINEER','AI AGENT ARCHITECT', 'GENAI ENTHUSIAST', 'INNOVATOR', 'WRITER'];

  const metrics = [
    { value: '500+', label: 'Users Served', description: 'Active users on VeryDesi platform', animatedValue: 500, suffix: '+' },
    { value: '40%', label: 'Performance Boost', description: 'Page load time reduction via Next.js migration', animatedValue: 40, suffix: '%' },
    { value: '90%', label: 'Automation', description: 'Workflow efficiency improvement', animatedValue: 90, suffix: '%' },
    { value: '25%', label: 'API Enhancement', description: 'Backend response time optimization', animatedValue: 25, suffix: '%' }
  ];

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

  // Counter animation effect
  const animateCounters = () => {
    if (countersAnimated) return;
    
    setCountersAnimated(true);
    const counters = countersRef.current?.querySelectorAll('.counter');
    
    counters?.forEach((counter, index) => {
      const target = metrics[index].animatedValue;
      const suffix = metrics[index].suffix;
      let current = 0;
      const increment = target / 100;
      const duration = 2000; // 2 seconds
      const stepTime = duration / 100;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        if (counter instanceof HTMLElement) {
          counter.textContent = Math.floor(current) + suffix;
        }
      }, stepTime);
    });
  };

  // Intersection Observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersAnimated) {
            animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, [countersAnimated]);

  const projects = [
    {
      title: "VeryDesi.com",
      description: "Full-stack housing platform connecting South Asian students and immigrants across the U.S. Built with monorepo architecture featuring Google SSO authentication and interactive maps.",
      tech: ["Next.js", "React", "TypeScript", "AWS Lambda", "DynamoDB", "GraphQL", "Leaflet.js"],
      impact: "500+ verified spaces, 50+ cities covered, 300+ happy customers",
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white relative" style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "SF Pro Display", Inter, system-ui, sans-serif',
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
      backgroundSize: '20px 20px'
    }}>
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex justify-between items-center">
          <div className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-white">Aayush Sawant</div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-8 xl:space-x-12">
            {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
                onMouseEnter={() => setActiveSection(item)}
                onMouseLeave={() => setActiveSection('')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMobileMenu}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {['About', 'Projects', 'Experience', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium py-2"
                  onClick={closeMobileMenu}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative bg-black pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 lg:pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-12 sm:space-y-16 lg:space-y-20">
            <div className="space-y-8 sm:space-y-10">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-tight text-white">
                <span className="block text-gray-300 min-h-[1.2em] break-words" style={{ fontFamily: 'Monaco, "SF Mono", "Cascadia Code", "Roboto Mono", Consolas, "Courier New", monospace' }}>
                  {currentRole}
                  <span className="animate-pulse ml-2 text-white">|</span>
                </span>
              </h1>
              <div className="space-y-6">
                <p className="text-xl sm:text-2xl lg:text-3xl font-light text-white max-w-4xl mx-auto leading-relaxed">
                  Northeastern MS student graduating December 2025
                </p>
                <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  Building scalable systems, AI platforms, and community-driven applications that serve thousands of users worldwide
                </p>
              </div>
            </div>
            
            {/* Metrics */}
            <div ref={countersRef} className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 pt-16 sm:pt-20">
              {metrics.map((metric, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="counter text-3xl sm:text-4xl lg:text-5xl font-light text-white">
                    0{metric.suffix}
                  </div>
                  <div className="text-sm sm:text-base text-white font-medium">{metric.label}</div>
                  <div className="text-xs sm:text-sm text-gray-400 hidden sm:block max-w-32 mx-auto leading-relaxed">{metric.description}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-12 sm:pt-16">
              <a 
                href="#projects" 
                className="px-8 sm:px-10 py-3 sm:py-4 bg-white text-black hover:bg-gray-200 transition-all duration-300 text-sm font-medium rounded-lg text-center"
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="px-8 sm:px-10 py-3 sm:py-4 border border-gray-700 text-white hover:border-gray-500 hover:bg-gray-900 transition-all duration-300 text-sm font-medium rounded-lg text-center"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <ChevronDown className="w-5 h-5 text-gray-500" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-28 lg:py-36 bg-gray-950 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-12 text-white">About</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed text-base sm:text-lg">
                <p>
                  I'm a Northeastern Master's student graduating December 2025, with a unique blend 
                  of technical expertise and creative storytelling that drives meaningful innovation.
                </p>
                <p>
                  My journey began at COEP India with IEEE research on voice-operated wheelchairs, 
                  leading to full-time development at eQ Technologic building deployment systems 
                  for Lockheed Martin and Rolls Royce.
                </p>
                <p>
                  Recently completed software co-op at EmTech Care Labs, building HIPAA-compliant healthcare 
                  automation systems and secure data pipelines while developing community platforms that serve 10k+ users.
                </p>
                <p>
                  Professional writer for The Huntington News and maintainer of a personal blog 
                  exploring connections between Indian cinema and American storytelling, bringing 
                  global perspective to technical teams.
                </p>
              </div>
              
              <div className="pt-12 sm:pt-16">
                <h3 className="text-xl sm:text-2xl font-medium mb-8 text-white">Technical Stack</h3>
                <div className="space-y-8">
                  {skills.map((skillGroup) => (
                    <div key={skillGroup.category}>
                      <div className="text-sm font-semibold text-white mb-4">
                        {skillGroup.category}
                      </div>
                      <div className="flex flex-wrap gap-3">
                        {skillGroup.items.map((skill) => (
                          <span 
                            key={skill}
                            className="px-4 py-2 bg-gray-900 text-sm text-gray-300 border border-gray-800 rounded-lg hover:border-gray-600 hover:bg-gray-800 transition-all duration-200"
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

            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-base font-semibold text-white">Current Focus</span>
                </div>
                <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                  <div>• Community platform scaling VeryDesi.com</div>
                  <div>• Exploring Agentic AI systems</div>
                  <div>• AI/ML music personalization</div>
                  <div>• AWS serverless architecture</div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <PenTool className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-base font-semibold text-white">Writing Portfolio</span>
                </div>
                <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                  <div>• The Huntington News contributor</div>
                  <div>• Personal blog on culture & tech</div>
                  <div>• Cross-cultural storytelling</div>
                  <div>• Technical documentation</div>
                </div>
              </div>

              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-gray-400" />
                  </div>
                  <span className="text-base font-semibold text-white">Research Impact</span>
                </div>
                <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
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
      <section id="projects" className="py-20 sm:py-28 lg:py-36 bg-black scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-16 sm:mb-20 lg:mb-24 text-center text-white">Selected Work</h2>
          <div className="space-y-20 sm:space-y-28 lg:space-y-32">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="grid lg:grid-cols-5 gap-12 sm:gap-16 items-start lg:items-center group"
              >
                <div className="lg:col-span-2 space-y-6 sm:space-y-8 order-2 lg:order-1">
                  <div className="text-sm text-gray-400 font-medium">{project.category}</div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white">{project.title}</h3>
                  <p className="text-gray-300 leading-relaxed text-base sm:text-lg">{project.description}</p>
                  <div className="text-base font-medium text-white">{project.impact}</div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs font-medium bg-gray-900 text-gray-300 border border-gray-800 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 pt-4">
                    <a 
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200"
                    >
                      <span>View Live Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="lg:col-span-3 order-1 lg:order-2">
                  <div className="aspect-video bg-gray-900 border border-gray-800 rounded-xl group-hover:border-gray-600 transition-all duration-500 relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={`${project.title} screenshot`}
                      className="w-full h-full object-cover object-top rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent group-hover:from-black/30 transition-all duration-500 rounded-xl" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 sm:py-28 lg:py-36 bg-gray-950 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-16 sm:mb-20 text-center text-white">Experience</h2>
          <div className="space-y-16 sm:space-y-20">
            {experience.map((job, index) => (
              <div key={index} className="relative">
                <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 sm:p-10 hover:border-gray-600 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0 mb-6">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">{job.company}</h3>
                      <div className="text-base sm:text-lg text-gray-300">{job.role}</div>
                    </div>
                    <div className="text-left lg:text-right text-sm text-gray-400">
                      <div className="font-medium mb-1">{job.period}</div>
                      <div>{job.location}</div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {job.highlights.map((highlight, i) => (
                      <div key={i} className="text-gray-300 text-base leading-relaxed flex">
                        <span className="text-gray-500 mr-3">•</span>
                        <span>{highlight}</span>
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
      <section id="education" className="py-20 sm:py-28 lg:py-36 bg-black scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-16 sm:mb-20 text-center text-white">Education</h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-medium mb-2 text-white">{edu.institution}</h3>
                <div className="text-base sm:text-lg text-gray-300 mb-4">{edu.degree}</div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 text-sm text-gray-400 space-y-2 sm:space-y-0">
                  <span className="font-medium">{edu.period}</span>
                  <span className="font-medium">GPA: {edu.gpa}</span>
                </div>
                <div className="text-xs text-gray-500 mb-6 font-medium">{edu.location}</div>
                <div className="space-y-2">
                  {edu.coursework.map((course) => (
                    <div key={course} className="text-sm text-gray-300 flex">
                      <span className="text-gray-500 mr-3">•</span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writing Section */}
      <section id="writing" className="py-20 sm:py-28 lg:py-36 bg-gray-950 scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-16 sm:mb-20 text-center text-white">Writing Portfolio</h2>
          <div className="grid md:grid-cols-2 gap-12 sm:gap-16">
            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-medium mb-4 text-white">The Huntington News</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Professional journalism covering campus life, culture, and technology at Northeastern University. 
                  Contributing articles and insights to the university's primary news publication.
                </p>
                <a 
                  href="https://huntnewsnu.com/staff_name/aayush-sawant/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
                >
                  <span>Read Articles</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 hover:border-gray-600 transition-all duration-300">
                <h3 className="text-lg sm:text-xl font-medium mb-4 text-white">Personal Blog</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Technical insights and cultural commentary exploring connections between Indian cinema 
                  and American storytelling. Built with Jekyll, featuring both English and Marathi posts.
                </p>
                <a 
                  href="https://aayushnortheastern1905.github.io/aayushWrites/blog.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
                >
                  <span>Visit Blog</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 sm:py-28 lg:py-36 bg-black scroll-mt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-12 text-white">Let's Connect</h2>
          <p className="text-gray-400 text-lg sm:text-xl mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
            Available for full-time opportunities starting December 2025. 
            Let's build something exceptional together.
          </p>
          <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
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
                <div className="border border-gray-800 rounded-xl p-8 hover:border-gray-600 hover:bg-gray-900 transition-all duration-300">
                  <Icon className="w-8 h-8 mx-auto mb-4 text-gray-400 group-hover:text-white" />
                  <div className="text-sm font-medium mb-2 text-gray-300 group-hover:text-white">{label}</div>
                  <div className="text-xs text-gray-500 break-words">{value}</div>
                </div>
              </a>
            ))}
          </div>
          
          <div className="pt-16 sm:pt-20 text-base text-gray-400 space-y-3">
            <div className="font-medium text-gray-300">Phone</div>
            <div>+1 (551) 229-8798</div>
            <div className="pt-4 text-sm text-gray-500">
              Available for full-time roles • Graduating December 2025
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-8 sm:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">© 2025 Aayush Rajendra Sawant</div>
            <div className="text-center sm:text-right">Northeastern University • MS Information Systems</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;