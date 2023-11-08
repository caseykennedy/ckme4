import { cn } from "~/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className, ...props }: Props) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden pb-16 pt-3 sm:pt-4",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
