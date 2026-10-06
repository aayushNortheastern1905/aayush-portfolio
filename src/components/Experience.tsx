import { experience } from '../data/experience';
import { CompanyLogo } from './CompanyLogo';
import { SectionHeading } from './SectionHeading';

function formatPeriod(period: string): string {
  return period
    .toLowerCase()
    .replace(/\b([a-z]{3})[a-z]+(?= \d{4})/g, '$1')
    .replace(' - ', ' – ');
}

const ROW_CLASS =
  'flex items-baseline justify-between gap-4 -mx-3 px-3 py-2 rounded-md hover:bg-white/[0.03] transition-colors duration-200';

export function Experience() {
  return (
    <section id="work" className="animate-fade-in-up mb-16 scroll-mt-16">
      <SectionHeading title="work" />
      <div className="mb-10">
        {experience.map((job) => {
          const row = (
            <>
              <div className="text-gray-300 text-[15px] capitalize">{job.role.toLowerCase()}</div>
              <div className="text-gray-500 text-[14px] font-mono shrink-0">{formatPeriod(job.period)}</div>
            </>
          );
          return (
          <div key={job.company} className="mb-10 group block">
            <div className="flex items-center gap-3 mb-2 text-gray-100 font-semibold text-[15px]">
              <CompanyLogo domain={job.domain} name={job.company} size={20} className="rounded-sm object-contain" />
              <span className="capitalize">{job.company.toLowerCase()}</span>
            </div>
            <div className="flex flex-col gap-0.5 mt-2">
              {job.liveLink ? (
                <a
                  href={job.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={ROW_CLASS}
                >
                  {row}
                </a>
              ) : (
                <div className={ROW_CLASS}>{row}</div>
              )}
            </div>
            <ul className="mt-2 space-y-1.5 text-[13px] text-gray-400 [&_strong]:font-semibold [&_strong]:text-gray-300">
              {job.highlights.map((highlight, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-gray-600">-</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          );
        })}
      </div>
    </section>
  );
}
