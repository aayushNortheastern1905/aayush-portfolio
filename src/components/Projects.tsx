import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import { SectionHeader } from './SectionHeader';

export function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28 lg:py-36 bg-base scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Selected Work" />
        <div className="space-y-20 sm:space-y-28 lg:space-y-32">
          {projects.map((project) => (
            <div key={project.title} className="grid lg:grid-cols-5 gap-12 sm:gap-16 items-start lg:items-center group">
              <div className="lg:col-span-2 space-y-6 sm:space-y-8 order-2 lg:order-1">
                <div className="text-sm text-muted font-medium">{project.category}</div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-light text-primary">{project.title}</h3>
                <p className="text-secondary leading-relaxed text-base sm:text-lg">{project.description}</p>
                <div className="text-base font-medium text-primary">{project.impact}</div>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-card text-secondary border border-border rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="pt-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-secondary transition-colors duration-200"
                  >
                    <span>View {project.live.includes('github') ? 'GitHub' : 'Live Site'}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
              <div className="lg:col-span-3 order-1 lg:order-2">
                <div className="aspect-video bg-card border border-border rounded-xl group-hover:border-border-hover transition-all duration-500 relative overflow-hidden">
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
  );
}
