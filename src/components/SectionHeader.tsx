interface SectionHeaderProps {
  title: string;
}

export function SectionHeader({ title }: SectionHeaderProps) {
  return (
    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-16 sm:mb-20 text-center text-primary">
      {title}
    </h2>
  );
}
