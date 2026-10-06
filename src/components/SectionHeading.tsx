interface SectionHeadingProps {
  title: string;
}

export function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl font-bold text-white mb-8">
      <span className="text-accent mr-2">*</span>
      {title}
    </h2>
  );
}
