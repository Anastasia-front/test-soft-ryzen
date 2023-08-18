interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className }: SectionProps) {
  return (
    <div
      className={`px-[20px] py-[54px] md:px-[32px] md:py-[64px] xl:p-[24px] bg-center bg-no-repeat bg-cover ${className}`}
    >
      {children}
    </div>
  );
}
