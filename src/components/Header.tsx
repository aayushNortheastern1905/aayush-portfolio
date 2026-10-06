import { Building2, Book, MapPin } from 'lucide-react';
import { profile } from '../data/site';

export function Header() {
  const meta = [
    { icon: MapPin, label: profile.location },
    { icon: Building2, label: profile.company },
    { icon: Book, label: profile.school },
  ];

  return (
    <header id="home" className="mb-16 space-y-4 scroll-mt-16">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">{profile.name}</h1>
      <div className="flex flex-row flex-wrap gap-x-8 gap-y-2 text-gray-400">
        {meta.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2">
            <Icon className="w-4 h-4 shrink-0" />
            {label}
          </div>
        ))}
      </div>
      <p className="leading-relaxed animate-fade-in-up">{profile.intro}</p>
    </header>
  );
}
