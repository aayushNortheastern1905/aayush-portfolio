import { writing } from '../data/site';
import { SectionHeading } from './SectionHeading';

export function Writing() {
  return (
    <section id="writing" className="mb-16 animate-fade-in-up scroll-mt-8">
      <SectionHeading title="writing" />
      <div className="flex flex-col gap-0.5">
        {writing.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-baseline justify-between gap-4 -mx-3 px-3 py-2 rounded-md hover:bg-white/[0.03] transition-colors duration-200"
          >
            <div className="text-gray-300 text-[15px] capitalize">{item.title}</div>
            <div className="text-gray-500 text-[14px] font-mono text-right">{item.description}</div>
          </a>
        ))}
      </div>
    </section>
  );
}
