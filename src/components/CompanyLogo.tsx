import { useState } from 'react';

const LOCAL_LOGOS: Record<string, string> = {
  'voiceerp.com':       '/images/voiceerp.jpeg',
  'emtechcarelabs.com': '/images/emtech.jpeg',
  'verydesi.com':       '/images/verydesi.jpeg',
  '1eq.com':            '/images/eq.jpeg',
  'northeastern.edu':   '/images/northeastern.jpeg',
  'coeptech.ac.in':     '/images/coep.jpeg',
};

interface CompanyLogoProps {
  domain: string;
  name: string;
  size?: number;
}

export function CompanyLogo({ domain, name, size = 48 }: CompanyLogoProps) {
  const [failed, setFailed] = useState(false);

  const initials = name
    .split(' ')
    .slice(0, 2)
    .map((word) => word[0])
    .join('')
    .toUpperCase();

  const src = LOCAL_LOGOS[domain];

  if (!src || failed) {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-lg bg-card border border-border flex items-center justify-center text-primary font-semibold text-sm flex-shrink-0"
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      style={{ width: size, height: size }}
      className="rounded-lg bg-white flex items-center justify-center flex-shrink-0 overflow-hidden"
    >
      <img
        src={src}
        alt={name}
        style={{ width: size - 8, height: size - 8 }}
        className="object-contain"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
