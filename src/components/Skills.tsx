import { skills } from '../data/skills';
import { SectionHeading } from './SectionHeading';

export function Skills() {
  return (
    <section id="skills" className="mb-16 animate-fade-in-up scroll-mt-16">
      <SectionHeading title="skills" />
      <div className="space-y-3">
        {skills.map((group) => (
          <div key={group.category} className="flex flex-col sm:flex-row sm:gap-4 text-[14px]">
            <div className="text-gray-500 font-mono sm:w-40 shrink-0">{group.category.toLowerCase()}</div>
            <div className="text-gray-300">{group.items.join(', ').toLowerCase()}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
