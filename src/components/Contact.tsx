import { Mail, Linkedin, Github } from 'lucide-react';
import { BookCall } from './BookCall';

const CONTACT_LINKS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'swnt.aayush@gmail.com',
    href: 'mailto:swnt.aayush@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: '/aayush-sawant',
    href: 'https://www.linkedin.com/in/aayush-sawant/',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: '/aayushNortheastern1905',
    href: 'https://github.com/aayushNortheastern1905',
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 lg:py-36 bg-base scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-8 sm:mb-12 text-primary">Let's Connect</h2>
        <p className="text-muted text-lg sm:text-xl mb-12 sm:mb-16 max-w-2xl mx-auto leading-relaxed">
          Open to interesting conversations, collaborations, and new opportunities.
          Let's build something exceptional together.
        </p>

        <div className="flex justify-center mb-12 sm:mb-16">
          <BookCall />
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-6">
          {CONTACT_LINKS.map(({ icon: Icon, label, value, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="border border-border rounded-xl p-8 hover:border-border-hover hover:bg-card transition-all duration-300">
                <Icon className="w-8 h-8 mx-auto mb-4 text-muted group-hover:text-primary" />
                <div className="text-sm font-medium mb-2 text-secondary group-hover:text-primary">{label}</div>
                <div className="text-xs text-muted break-words">{value}</div>
              </div>
            </a>
          ))}
        </div>
        <div className="pt-16 sm:pt-20 text-base text-muted space-y-3">
          <div className="font-medium text-secondary">Phone</div>
          <div>+1 (551) 229-8798</div>
        </div>
      </div>
    </section>
  );
}
