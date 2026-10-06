import { useState } from 'react';

const LOCAL_LOGOS: Record<string, string> = {
  'askabhi':            '/images/askabhi.png',
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
  size: number;
  className?: string;
}

export function CompanyLogo({ domain, name, size, className = '' }: CompanyLogoProps) {
  const [failed, setFailed] = useState(false);
  const src = LOCAL_LOGOS[domain];

  if (!src || failed) {
    const initials = name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toLowerCase();

    return (
      <span
        style={{ width: size, height: size }}
        className={`flex items-center justify-center bg-white/5 text-gray-400 text-[10px] ${className}`}
      >
        {initials}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={name}
      width={size}
      height={size}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
