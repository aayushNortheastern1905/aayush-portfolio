import { recommendations } from '../data/recommendations';
import { Avatar } from './Avatar';
import { SectionHeading } from './SectionHeading';

export function Recommendations() {
  if (recommendations.length === 0) return null;

  return (
    <section id="testimonials" className="mb-16 animate-fade-in-up scroll-mt-16">
      <SectionHeading title="testimonials" />
      <div className="space-y-8">
        {recommendations.map((rec) => (
          <blockquote key={rec.name} className="border-l border-accent/50 pl-4">
            <p className="text-[13px] text-gray-400 leading-relaxed">"{rec.text}"</p>
            <footer className="flex items-center gap-3 mt-4">
              <Avatar src={rec.photo} name={rec.name} size={40} />
              <div className="text-[13px] font-mono">
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-200 hover:text-accent transition-colors duration-200"
                >
                  {rec.name.toLowerCase()}
                </a>
                <div className="text-gray-500">
                  {rec.title.toLowerCase()} at {rec.company.toLowerCase()}
                </div>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
