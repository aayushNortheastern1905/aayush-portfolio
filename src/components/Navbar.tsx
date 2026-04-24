import { useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const NAV_ITEMS = ['About', 'Experience', 'Projects', 'Testimonials', 'Writing', 'Blog', 'Contact'];
const BLOG_URL = 'https://aayushnortheastern1905.github.io/aayushWrites/blog.html';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-base/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-6 flex justify-between items-center">
        <button
          onClick={() => window.location.reload()}
          className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-primary hover:text-secondary transition-colors cursor-pointer"
        >
          Aayush Sawant
        </button>

        <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
          {NAV_ITEMS.map((item) => (
            <a
              key={item}
              href={item === 'Blog' ? BLOG_URL : `#${item.toLowerCase()}`}
              target={item === 'Blog' ? '_blank' : undefined}
              rel={item === 'Blog' ? 'noopener noreferrer' : undefined}
              className="text-secondary hover:text-primary transition-all duration-300 text-sm font-medium"
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
        </div>

        <div className="lg:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button onClick={toggleMenu} className="p-2 text-secondary hover:text-primary">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-base border-t border-border">
          <div className="px-4 py-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href={item === 'Blog' ? BLOG_URL : `#${item.toLowerCase()}`}
                target={item === 'Blog' ? '_blank' : undefined}
                rel={item === 'Blog' ? 'noopener noreferrer' : undefined}
                className="block text-secondary hover:text-primary transition-all duration-300 text-sm font-medium py-2"
                onClick={closeMenu}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
