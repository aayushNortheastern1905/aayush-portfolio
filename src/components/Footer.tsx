import { Github, Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { contactLinks } from '../data/site';
import { BookCall } from './BookCall';
import { FooterIcon } from './FooterIcon';

const ICONS: Record<string, { icon: LucideIcon; hover: string }> = {
  email: { icon: Mail, hover: 'hover:text-red-500' },
  github: { icon: Github, hover: 'hover:text-white' },
  linkedin: { icon: Linkedin, hover: 'hover:text-[#0a66c2]' },
};

export function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full h-32 z-50 pointer-events-none flex flex-col justify-end">
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/80 to-transparent backdrop-blur-md"
        style={{
          maskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to top, black 50%, transparent 100%)',
        }}
      />
      <div className="relative max-w-4xl mx-auto w-full p-4 flex items-center justify-between pointer-events-auto">
        <div className="flex items-center gap-2">
          {contactLinks.map((link) => {
            const entry = ICONS[link.label];
            if (!entry) return null;
            const Icon = entry.icon;
            return (
              <FooterIcon key={link.label} tooltip={link.label}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className={`text-gray-400 ${entry.hover} p-1.5 rounded-md hover:bg-neutral-800/80 transition-all`}
                >
                  <Icon className="w-5 h-5" />
                </a>
              </FooterIcon>
            );
          })}
        </div>
        <BookCall />
      </div>
    </footer>
  );
}
