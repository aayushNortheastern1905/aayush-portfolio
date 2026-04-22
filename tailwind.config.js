/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base:    'var(--color-bg)',
        surface: 'var(--color-surface)',
        card:    'var(--color-surface-card)',
        border: {
          DEFAULT: 'var(--color-border)',
          hover:   'var(--color-border-hover)',
        },
        primary:     'var(--color-text-primary)',
        secondary:   'var(--color-text-secondary)',
        muted:       'var(--color-text-muted)',
        accent:      'var(--color-accent)',
        'accent-fg': 'var(--color-accent-fg)',
      },
    },
  },
  plugins: [],
}