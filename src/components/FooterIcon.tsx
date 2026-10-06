import type { ReactNode } from 'react';

interface FooterIconProps {
  tooltip: string;
  children: ReactNode;
}

export function FooterIcon({ tooltip, children }: FooterIconProps) {
  return (
    <div className="relative group flex justify-center">
      {children}
      <div className="absolute bottom-full mb-2 hidden group-hover:block bg-[#222] text-gray-300 text-xs px-2.5 py-1.5 rounded-md shadow-lg whitespace-nowrap z-50 border border-white/5 animate-fade-in-up">
        {tooltip}
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-[#222]" />
      </div>
    </div>
  );
}
