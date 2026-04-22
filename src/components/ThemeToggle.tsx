import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isMorning = theme === 'morning';

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="relative flex items-center w-16 h-8 rounded-full border border-border bg-card hover:border-border-hover transition-colors duration-300 focus:outline-none flex-shrink-0"
    >
      {/* sliding pill */}
      <span
        className={`absolute top-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center shadow-sm transition-all duration-300 ease-in-out ${
          isMorning ? 'left-8' : 'left-1'
        }`}
      >
        {isMorning
          ? <Sun className="w-3 h-3 text-accent-fg" />
          : <Moon className="w-3 h-3 text-accent-fg" />
        }
      </span>

      {/* track icons */}
      <Moon className="absolute left-2 w-3 h-3 text-muted transition-opacity duration-300" style={{ opacity: isMorning ? 1 : 0 }} />
      <Sun className="absolute right-2 w-3 h-3 text-muted transition-opacity duration-300" style={{ opacity: isMorning ? 0 : 1 }} />
    </button>
  );
}
