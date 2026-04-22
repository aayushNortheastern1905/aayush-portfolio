import { ExternalLink } from 'lucide-react';
import { experience } from '../data/experience';
import { education } from '../data/education';
import { CompanyLogo } from './CompanyLogo';
import { SectionHeader } from './SectionHeader';

export function Experience() {
  return (
    <>
      <section id="experience" className="py-20 sm:py-28 lg:py-36 bg-surface scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Experience" />
          <div className="space-y-10 sm:space-y-12">
            {experience.map((job) => (
              <div key={job.company} className="bg-card border border-border rounded-xl p-8 sm:p-10 hover:border-border-hover transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start space-y-4 lg:space-y-0 mb-6">
                  <div className="flex items-center space-x-4">
                    <CompanyLogo domain={job.domain} name={job.company} size={48} />
                    <div>
                      <h3 className="text-xl sm:text-2xl font-medium text-primary flex items-center gap-2">
                        {job.company}
                        <a
                          href={job.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted hover:text-primary transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </h3>
                      <div className="text-base sm:text-lg text-secondary">{job.role}</div>
                    </div>
                  </div>
                  <div className="text-left lg:text-right text-sm text-muted lg:ml-4 flex-shrink-0">
                    <div className="font-medium mb-1">{job.period}</div>
                    <div>{job.location}</div>
                  </div>
                </div>
                <div className="space-y-3 lg:ml-16">
                  {job.highlights.map((highlight, i) => (
                    <div key={i} className="text-secondary text-base leading-relaxed flex">
                      <span className="text-muted mr-3 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="py-20 sm:py-28 lg:py-36 bg-base scroll-mt-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Education" />
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {education.map((edu) => (
              <div key={edu.institution} className="bg-card border border-border rounded-xl p-8 hover:border-border-hover transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <CompanyLogo domain={edu.domain} name={edu.institution} size={48} />
                  <div>
                    <h3 className="text-lg sm:text-xl font-medium text-primary">{edu.institution}</h3>
                    <div className="text-xs text-muted font-medium">{edu.location}</div>
                  </div>
                </div>
                <div className="text-base sm:text-lg text-secondary mb-4">{edu.degree}</div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 text-sm text-muted space-y-2 sm:space-y-0">
                  <span className="font-medium">{edu.period}</span>
                  <span className="font-medium">GPA: {edu.gpa}</span>
                </div>
                <div className="space-y-2">
                  {edu.coursework.map((course) => (
                    <div key={course} className="text-sm text-secondary flex">
                      <span className="text-muted mr-3">•</span>
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
