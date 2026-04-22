import { Code, PenTool, Globe } from 'lucide-react';
import { skills } from '../data/skills';

export function About() {
  return (
    <section id="about" className="py-20 sm:py-28 lg:py-36 bg-surface scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-12 text-primary">About</h2>
            <div className="space-y-6 text-secondary leading-relaxed text-base sm:text-lg">
              <p>
                Software Engineer with 3+ years of experience building scalable systems across enterprise,
                healthcare, and AI domains. MS in Computer Software Engineering from Northeastern University,
                with a unique blend of technical depth and creative storytelling.
              </p>
              <p>
                My journey began with IEEE research on voice-operated wheelchairs at COEP India,
                leading to full-time development at eQ Technologic where I built Spring Boot APIs and React modules
                for Fortune 500 clients including Lockheed Martin.
              </p>
              <p>
                Currently a Founding Software Engineer at <strong>VoiceERP in Cleveland, OH</strong>, where I'm
                engineering the data backbone of DSP operations, building Cortex Sync for hourly cross-system
                reconciliation, a fuzzy driver alias matching engine that slashed onboarding from 4 hours to 30 minutes,
                a full Daily Ops suite with React Native mobile apps, and a Voice Agent powered by VAPI that autonomously
                handles driver scheduling calls end-to-end.
              </p>
              <p>
                Professional writer for The Huntington News and maintainer of a personal blog
                exploring connections between Indian cinema and American storytelling, bringing
                a global perspective to technical teams.
              </p>
            </div>

            <div className="pt-12 sm:pt-16">
              <h3 className="text-xl sm:text-2xl font-medium mb-8 text-primary">Technical Stack</h3>
              <div className="space-y-8">
                {skills.map((skillGroup) => (
                  <div key={skillGroup.category}>
                    <div className="text-sm font-semibold text-primary mb-4">{skillGroup.category}</div>
                    <div className="flex flex-wrap gap-3">
                      {skillGroup.items.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 bg-card text-sm text-secondary border border-border rounded-lg hover:border-border-hover hover:bg-card transition-all duration-200"
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
            {[
              {
                icon: Code,
                title: 'Current Focus',
                items: [
                  'Full-time SWE at VoiceERP, Cleveland OH',
                  'Building voice AI agents with VAPI and AWS Lambda',
                  'Engineering DSP automation and real-time data sync',
                  'Exploring Agentic AI systems',
                ],
              },
              {
                icon: PenTool,
                title: 'Writing Portfolio',
                items: [
                  'The Huntington News staff writer',
                  'Personal blog on culture and tech',
                  'Cross-cultural storytelling',
                  'Technical documentation',
                ],
              },
              {
                icon: Globe,
                title: 'Research and Impact',
                items: [
                  'IEEE published research (2021)',
                  'Voice-controlled wheelchair systems',
                  'Healthcare compliance (HIPAA)',
                  'Accessibility technology innovation',
                ],
              },
            ].map(({ icon: Icon, title, items }) => (
              <div key={title} className="bg-card border border-border rounded-xl p-8 hover:border-border-hover transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-10 h-10 bg-surface rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-muted" />
                  </div>
                  <span className="text-base font-semibold text-primary">{title}</span>
                </div>
                <div className="text-sm text-secondary space-y-3 leading-relaxed">
                  {items.map((item) => (
                    <div key={item}>{item}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
