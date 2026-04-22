import { useState } from 'react';

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

  if (failed) {
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
    <img
      src={`https://img.logo.dev/${domain}?token=pk_public`}
      alt={name}
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="rounded-lg object-contain bg-white p-1 flex-shrink-0"
      onError={() => setFailed(true)}
    />
  );
}
