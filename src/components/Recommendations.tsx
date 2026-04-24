import { Linkedin } from 'lucide-react';
import { recommendations } from '../data/recommendations';
import { SectionHeader } from './SectionHeader';

export function Recommendations() {
  if (recommendations.length === 0) return null;

  return (
    <section id="testimonials" className="py-20 sm:py-28 lg:py-36 bg-surface scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Testimonials" />
        <div className="grid md:grid-cols-2 gap-8">
          {recommendations.map((rec) => (
            <div key={rec.name} className="bg-card border border-border rounded-xl p-8 hover:border-border-hover transition-all duration-300 flex flex-col justify-between space-y-6">
              <p className="text-secondary text-base leading-relaxed">"{rec.text}"</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <img
                    src={rec.photo}
                    alt={rec.name}
                    className="w-12 h-12 rounded-full object-cover border border-border"
                  />
                  <div>
                    <div className="text-primary font-medium text-sm">{rec.name}</div>
                    <div className="text-muted text-xs">{rec.title}</div>
                    <div className="text-muted text-xs">{rec.company}</div>
                  </div>
                </div>
                <a
                  href={rec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-primary transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
