import { navItems } from '../data/site';

export function Nav() {
  return (
    <nav className="flex items-center justify-between mb-12 text-sm">
      <div className="flex space-x-4">
        {navItems.map((item) => (
          <a
            key={item.key}
            href={item.href ?? `#${item.target}`}
            target={item.href ? '_blank' : undefined}
            rel={item.href ? 'noopener noreferrer' : undefined}
            className="hover:text-accent transition-colors duration-200"
          >
            [{item.key}] {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
