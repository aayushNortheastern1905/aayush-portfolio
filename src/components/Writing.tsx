import { ExternalLink } from 'lucide-react';
import { SectionHeader } from './SectionHeader';

export function Writing() {
  return (
    <section id="writing" className="py-20 sm:py-28 lg:py-36 bg-surface scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Writing Portfolio" />
        <div className="grid md:grid-cols-2 gap-12 sm:gap-16">
          <div className="bg-card border border-border rounded-xl p-8 hover:border-border-hover transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-medium mb-4 text-primary">The Huntington News</h3>
            <p className="text-secondary text-base leading-relaxed mb-6">
              Staff writer covering campus life, culture, and technology at Northeastern University.
              Contributing articles and insights to the university's primary news publication since September 2024.
            </p>
            <a
              href="https://huntnewsnu.com/staff_name/aayush-sawant/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              <span>Read Articles</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="bg-card border border-border rounded-xl p-8 hover:border-border-hover transition-all duration-300">
            <h3 className="text-lg sm:text-xl font-medium mb-4 text-primary">IEEE Publication</h3>
            <p className="text-secondary text-base leading-relaxed mb-6">
              Published research on Voice-Controlled Wheelchair systems in August 2021.
              Focused on accessibility technology and improving mobility for individuals with disabilities.
            </p>
            <a
              href="https://ieeexplore.ieee.org/document/9587859"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-sm font-medium text-primary hover:text-secondary transition-colors"
            >
              <span>View Publication</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
