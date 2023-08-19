interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <div
      className={`px-[20px] py-[54px] md:px-[32px] md:py-[64px] xl:px-[24px] xl:py-[90px] xxl:px-[104px] bg-center bg-no-repeat bg-cover ${className}`}
      id={id}
    >
      {children}
    </div>
  );
}
