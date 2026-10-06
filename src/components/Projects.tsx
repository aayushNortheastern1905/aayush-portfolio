import { DEFAULT_TECH_COLOR, projects, techColors } from '../data/projects';
import { SectionHeading } from './SectionHeading';

export function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16">
      <SectionHeading title="projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div
            key={project.title}
            className="flex flex-col border border-gray-700/60 rounded-md p-4 bg-transparent hover:border-gray-500 transition-colors h-full"
          >
            <div className="mb-2">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2f81f7] font-semibold hover:underline text-[14px]"
                >
                  {project.title.toLowerCase()}
                </a>
              ) : (
                <span className="text-[#2f81f7] font-semibold text-[14px]">{project.title.toLowerCase()}</span>
              )}
            </div>
            <p className="text-[12px] text-gray-400 line-clamp-3 mb-4 flex-grow lowercase [&_strong]:font-normal">
              {project.description}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-gray-400 mt-auto">
              {project.tech.slice(0, 3).map((tech) => (
                <div key={tech} className="flex items-center gap-1.5">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: techColors[tech] ?? DEFAULT_TECH_COLOR }}
                  />
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
