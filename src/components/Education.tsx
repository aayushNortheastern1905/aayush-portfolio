import { Calendar, MapPin } from 'lucide-react';
import { education } from '../data/education';
import { CompanyLogo } from './CompanyLogo';
import { SectionHeading } from './SectionHeading';

function formatYears(period: string): string {
  const years = period.match(/\d{4}/g);
  return years ? years.join(' – ') : period;
}

export function Education() {
  return (
    <section id="education" className="mb-16 animate-fade-in-up scroll-mt-16">
      <SectionHeading title="education" />
      {education.map((edu) => (
        <div key={edu.institution} className="flex gap-4 mb-8 group">
          <div className="shrink-0 mt-1">
            <div className="w-12 h-12 rounded-lg bg-[#111] border border-white/5 flex items-center justify-center p-1.5 overflow-hidden">
              <CompanyLogo domain={edu.domain} name={edu.institution} size={40} className="object-contain" />
            </div>
          </div>
          <div className="flex flex-col">
            <a
              href={`https://${edu.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[16px] font-bold hover:text-accent transition-colors duration-200"
            >
              {edu.degree.toLowerCase()}
            </a>
            <p className="text-gray-300 text-[14.5px] mt-1">{edu.coursework.join(', ').toLowerCase()}</p>
            <p className="text-gray-400 text-[14px] mt-2 capitalize">{edu.institution.toLowerCase()}</p>
            <div className="flex items-center gap-3 text-gray-500 text-[13px] mt-1.5 font-mono">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>{edu.location}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{formatYears(edu.period)}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
