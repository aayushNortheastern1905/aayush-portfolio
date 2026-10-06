import { useEffect } from 'react';
import { navItems } from '../data/site';

export function useKeyboardNav() {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const el = event.target;
      if (el instanceof HTMLElement && (el.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el.tagName))) return;

      const item = navItems.find((nav) => nav.key === event.key.toLowerCase());
      if (!item) return;

      if (item.href) {
        window.open(item.href, '_blank', 'noopener,noreferrer');
      } else if (item.target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (item.target) {
        document.getElementById(item.target)?.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);
}
