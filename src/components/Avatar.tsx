import { useState } from 'react';

interface AvatarProps {
  src: string;
  name: string;
  size: number;
}

export function Avatar({ src, name, size }: AvatarProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    const initials = name
      .split(' ')
      .slice(0, 2)
      .map((word) => word[0])
      .join('')
      .toLowerCase();

    return (
      <span
        style={{ width: size, height: size }}
        className="shrink-0 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 text-xs"
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
      style={{ width: size, height: size }}
      className="shrink-0 rounded-full object-cover border border-white/10"
      onError={() => setFailed(true)}
    />
  );
}
