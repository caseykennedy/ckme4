import { cn } from "~/utils";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export default function Section({ children, className, ...props }: Props) {
  return (
    <section
      className={cn(
        "relative w-full overflow-hidden border-t-[2px] border-dotted border-zinc-700 pb-24 pt-4",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
