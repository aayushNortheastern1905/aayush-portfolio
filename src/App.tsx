import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, PenTool, Globe, Menu, X } from 'lucide-react';

const Portfolio = () => {
  // Removed unused activeSection
  const [currentRole, setCurrentRole] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [countersAnimated, setCountersAnimated] = useState(false);
  const countersRef = useRef<HTMLDivElement | null>(null);

  // Wrapped roles in useMemo to prevent re-creation
  const roles = useMemo(() => ['SOFTWARE ENGINEER', 'AI ENTHUSIAST', 'INNOVATOR', 'WRITER'], []);

  const metrics = [
    { value: '300+', label: 'Users Served', description: 'Active users on VeryDesi platform', animatedValue: 300, suffix: '+' },
    { value: '95%', label: 'Security Enhancement', description: 'Vulnerability reduction at eQ', animatedValue: 95, suffix: '%' },
    { value: '90%', label: 'Automation', description: 'Manual process elimination at EmTech', animatedValue: 90, suffix: '%' },
    { value: '5K+', label: 'Daily API Requests', description: 'Handled at production scale', animatedValue: 5000, suffix: '+' }
  ];

  useEffect(() => {
    const currentText = roles[roleIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentText.length) {
          setCurrentRole(currentText.slice(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentIndex > 0) {
          setCurrentRole(currentText.slice(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, roleIndex, roles]);

  // Wrapped in useCallback to fix dependency issue
  const animateCounters = useCallback(() => {
    if (countersAnimated) return;
    
    setCountersAnimated(true);
    const counters = countersRef.current?.querySelectorAll('.counter');
    
    counters?.forEach((counter: Element, index: number) => {
      const target = metrics[index].animatedValue;
      const suffix = metrics[index].suffix;
      let current = 0;
      const increment = target / 100;
      const duration = 2000;
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
  }, [countersAnimated]); // eslint-disable-line react-hooks/exhaustive-deps

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
  }, [countersAnimated, animateCounters]);

  // UPDATED PROJECTS - Removed VeryDesi and Self-App
  const projects = [
    {
      title: "DocuPal",
      description: (
        <>
          AI immigration assistant with <strong>document processing agent</strong> using <strong>React/TypeScript</strong> and <strong>AWS Lambda</strong>, automating complex F-1/OPT/H-1B visa workflows and documentation processes.
        </>
      ),
      tech: ["React.js", "TypeScript", "AWS SAM", "Auth0", "Gemini AI", "DynamoDB"],
      impact: "Automated visa documentation with AI-powered form parsing and secure authentication",
      live: "https://docupal-one.vercel.app/",
      category: "AI Immigration Platform",
      image: "/images/docupal.jpeg"
    },
    {
      title: "SonomaticAI",
      description: (
        <>
          AI-powered music creation platform with revolutionary interface. Built personalization engine using <strong>PyTorch</strong>, <strong>TensorFlow</strong>, <strong>NLP</strong>, and <strong>GAN</strong> models.
        </>
      ),
      tech: ["React", "TypeScript", "PyTorch", "TensorFlow", "AWS S3", "NLP", "GANs"],
      impact: "40% user engagement increase, 30% development speed boost, optimized music storage",
      live: "https://www.sonomatic.ai/",
      category: "GenAI Platform for Music Creation",
      image: "/images/sonomaticAI.jpg"
    },
    {
      title: "House of Kicks",
      description: (
        <>
          Full-stack e-commerce platform for sneaker enthusiasts featuring <strong>investment tracking</strong>, historical price analytics, and <strong>secure payment processing</strong>. Built with role-based authentication for admin dashboard and user portfolio management.
        </>
      ),
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Stripe API", "Chart.js"],
      impact: "Complete sneaker marketplace with investment ROI tracking, admin analytics dashboard, and secure checkout flow",
      live: "https://github.com/aayushNortheastern1905/House-of-Kicks",
      category: "E-Commerce Platform",
      image: "/images/houseofkicks.jpg"
    },
    {
      title: "Campus Connect",
      description: (
        <>
          <strong>Java Spring Boot</strong> backend with <strong>RESTful APIs</strong> and <strong>MySQL</strong> database for multi-tenant student housing platform serving 5 stakeholder types. Implemented <strong>JDBC</strong> connection pooling and prepared statements to handle concurrent database operations.
        </>
      ),
      tech: ["Java", "Spring Boot", "MySQL", "JUnit", "REST APIs", "Git", "JDBC"],
      impact: "35% query time reduction, 75% test coverage with JUnit/Mockito, MVC architecture with DAO pattern",
      live: "https://github.com/aayushNortheastern1905/Application-engg-projects/tree/main/final-project-campus-connect-main/final-project-campus-connect-main",
      category: "Student Housing Platform",
      image: "/images/campusconnect.jpg"
    }
  ];

  // UPDATED EXPERIENCE - Added VeryDesi and Self-App
  const experience = [
    {
      company: "EmTech Care Labs",
      role: "Software Engineer Intern",
      period: "January 2025 - June 2025",
      location: "Portland, ME",
      liveLink:"https://emtechcarelabs.com/",
      highlights: [
        <>Developed Zoom integration with <strong>React/TypeScript/AWS Lambda</strong> for automated meeting scheduling, recordings, and transcripts, significantly boosting counseling efficiency by <strong>25%</strong></>,
        <>Built Care Priorities feature with <strong>React/TypeScript/AWS Lambda</strong>, automating task approvals and cutting admin operational overhead by <strong>30%</strong> through intelligent workflow automation</>,
        <>Automated <strong>HIPAA-compliant</strong> Medicaid data pipeline using <strong>AWS (Lambda/Step Functions/S3/DynamoDB)</strong> and <strong>Python</strong>, successfully eliminating <strong>90%</strong> of manual updates and reducing processing time</>,
        <>Developed CareWallet v1 mobile app using <strong>React Native</strong>, implementing core healthcare tracking features serving <strong>100+</strong> beta users with secure health monitoring capabilities</>
      ]
    },
    // {
    //   company: "VeryDesi.com",
    //   role: "Early Engineer",
    //   period: "October 2024 - January 2025",
    //   location: "Portland, OR (Remote)",
    //   liveLink: "https://verydesi.com/",
    //   highlights: [
    //     <>Built full-stack housing platform with <strong>Google/Apple SSO</strong> and <strong>AWS Lambda</strong> in monorepo architecture, serving <strong>300+ active users</strong> across United States</>,
    //     <>Implemented <strong>location-based search</strong> with <strong>Leaflet.js maps</strong> and <strong>GraphQL APIs</strong>, increasing user engagement by <strong>25%</strong> through enhanced discovery features</>,
    //     <>Developed featured events system with automated notifications using <strong>Next.js</strong>, <strong>TypeScript</strong>, and <strong>DynamoDB</strong>, driving community engagement</>,
    //     <>Created scalable infrastructure handling <strong>5K+ daily API requests</strong> with serverless architecture and optimized database queries</>
    //   ]
    // },
    // {
    //   company: "Self-App (Stealth Startup)",
    //   role: "Software Engineering Contractor",
    //   period: "August 2024 - October 2024",
    //   location: "New York City, NY (Remote)",
    //   liveLink: "https://www.self-app.com/",
    //   highlights: [
    //     <>Migrated <strong>20+ React components</strong> to <strong>Next.js</strong> framework, achieving <strong>40% page load reduction</strong> and improved SEO performance</>,
    //     <>Optimized <strong>GraphQL API</strong> integration with <strong>Django</strong> backend, resulting in <strong>25% API response improvement</strong> and reduced server load</>,
    //     <>Implemented analytics tracking with <strong>Google Analytics</strong> and user behavior monitoring, increasing feature adoption by <strong>25%</strong></>,
    //     <>Enhanced mental health platform serving thousands of users with improved performance and user experience</>
    //   ]
    // },
    {
      company: "eQ Technologic",
      role: "Software Engineer",
      period: "August 2021 - August 2023", 
      location: "Pune, India",
      liveLink:"https://www.1eq.com/",
      highlights: [
        <>Developed <strong>Spring Boot RESTful APIs</strong> for infrastructure management supporting <strong>Docker/K8s</strong>, <strong>Tomcat/JBoss</strong>, and <strong>MySQL/Oracle</strong> databases, successfully handling <strong>5K+ daily requests</strong></>,
        <>Implemented <strong>OAuth 2.0/JWT authentication</strong> with <strong>Spring Security</strong>, reducing critical security vulnerabilities by <strong>95%</strong> for multiple <strong>Fortune 500 clients</strong> including Lockheed Martin</>,
        <>Built <strong>15+ React.js modules</strong> with <strong>Redux state management</strong>, decreasing UI bugs by <strong>30%</strong> through comprehensive component testing and modular architecture design patterns</>,
        <>Architected <strong>Redux-based help system</strong> mapping users to relevant documentation dynamically, reducing customer support queries by <strong>35%</strong> and improving user self-service capabilities</>,
        <>Achieved <strong>90% test coverage</strong> using <strong>JUnit</strong> for backend services and <strong>Jest/Cypress</strong> for frontend components, reducing production bugs by <strong>40%</strong> and deployment rollback frequency</>
      ]
    }
  ];

  // UPDATED SKILLS - Matching Resume Exactly (Java, Python, JavaScript order)
  const skills = [
    { category: "Languages", items: ["JavaScript", "TypeScript", "Python", "Java", "Ruby", "C/C++", "MATLAB"] },
    { category: "Frontend", items: ["React.js", "React Native", "Next.js", "Redux", "TypeScript", "Leaflet.js"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Spring Boot", "Django", "FastAPI", "GraphQL", "AWS Lambda"] },
    { category: "Cloud & DevOps", items: ["AWS (Lambda, S3, EKS, Cognito)", "Docker", "Kubernetes", "Jenkins"] },
    { category: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "DynamoDB"] },
    { category: "Testing/Tools", items: ["Jest", "Cypress", "Selenium", "Git", "Google Analytics", "Posthog"] }
  ];

  // UPDATED EDUCATION - Matching Resume Exactly
  const education = [
    {
      institution: "Northeastern University",
      degree: "Master of Science in Information Systems",
      period: "September 2023 - December 2025",
      location: "Boston, MA",
      gpa: "3.7",
      coursework: ["Full Stack Engineering", "Object Oriented Design", "Cloud Computing", "Agentic AI"]
    },
    {
      institution: "COEP Technological University, Pune",
      degree: "Bachelor of Technology in Electronics and Telecommunications Engineering",
      period: "August 2017 - May 2021",
      location: "Pune, India", 
      gpa: "3.2",
      coursework: ["Data Structures and Algorithms", "Operating Systems", "Computer Architecture", "Computer Networks"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white relative" style={{ 
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "SF Pro Display", Inter, system-ui, sans-serif',
      backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
      backgroundSize: '20px 20px'
    }}>
      
      {/* Navigation - UPDATED WITH WRITING */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex justify-between items-center">
          <button 
            onClick={() => window.location.reload()}
            className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-white hover:text-gray-300 transition-colors cursor-pointer"
          >
            Aayush Sawant
          </button>
          
          {/* Desktop Navigation - UPDATED */}
          <div className="hidden lg:flex space-x-8 xl:space-x-12">
            {['About', 'Projects', 'Experience', 'Writing', 'Blog', 'Contact'].map((item) => (
              <a 
                key={item}
                href={item === 'Blog' ? 'https://aayushnortheastern1905.github.io/aayushWrites/blog.html' : `#${item.toLowerCase()}`}
                target={item === 'Blog' ? '_blank' : undefined}
                rel={item === 'Blog' ? 'noopener noreferrer' : undefined}
                className="text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu - UPDATED */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-6 space-y-4">
              {['About', 'Projects', 'Experience', 'Writing', 'Blog', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={item === 'Blog' ? 'https://aayushnortheastern1905.github.io/aayushWrites/blog.html' : `#${item.toLowerCase()}`}
                  target={item === 'Blog' ? '_blank' : undefined}
                  rel={item === 'Blog' ? 'noopener noreferrer' : undefined}
                  className="block text-gray-300 hover:text-white transition-all duration-300 text-sm font-medium py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
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
                  I'm a Northeastern Master's student graduating December 2025, with 3+ years of experience
                  building scalable systems and a unique blend of technical expertise and creative storytelling.
                </p>
                <p>
                  My journey began with IEEE research on voice-operated wheelchairs at COEP India,
                  leading to full-time development at eQ Technologic where I built Spring Boot APIs and React modules
                  for Fortune 500 clients including Lockheed Martin.
                </p>
                <p>
                  Currently completing my software engineering internship at EmTech Care Labs, building HIPAA-compliant healthcare
                  automation systems and secure data pipelines while developing community platforms serving hundreds of users.
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
                  <div>• Building AI immigration assistant DocuPal</div>
                  <div>• Scaling VeryDesi.com community platform</div>
                  <div>• Exploring Agentic AI systems</div>
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
                  <div>• The Huntington News staff writer</div>
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
                  <span className="text-base font-semibold text-white">Research & Impact</span>
                </div>
                <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
                  <div>• IEEE published research (2021)</div>
                  <div>• Voice-controlled wheelchair systems</div>
                  <div>• Healthcare compliance (HIPAA)</div>
                  <div>• Accessibility technology innovation</div>
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
                      <span>View {project.live.includes('github') ? 'GitHub' : 'Live Site'}</span>
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
                      <h3 className="text-xl sm:text-2xl font-medium text-white mb-2">
                        {job.company}
                        {job.liveLink && (
                          <a 
                            href={job.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center ml-3 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </h3>
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
                  Staff writer covering campus life, culture, and technology at Northeastern University.
                  Contributing articles and insights to the university's primary news publication since September 2024.
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
                <h3 className="text-lg sm:text-xl font-medium mb-4 text-white">IEEE Publication</h3>
                <p className="text-gray-300 text-base leading-relaxed mb-6">
                  Published research on Voice-Controlled Wheelchair systems in August 2021.
                  Focused on accessibility technology and improving mobility for individuals with disabilities.
                </p>
                <a 
                  href="https://ieeexplore.ieee.org/document/9587859"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-sm font-medium text-white hover:text-gray-300 transition-colors"
                >
                  <span>View Publication</span>
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