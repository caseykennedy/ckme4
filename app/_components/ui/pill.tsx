import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "~/utils";

export const pillVariants = cva(
  "inline-flex items-center justify-center gap-3 rounded font-sans font-semibold text-xs uppercase tracking-wide transition-colors whitespace-nowrap group border border-transparent",
  {
    variants: {
      variant: {
        default:
          "text-zinc-400 hover:text-zinc-200 border-zinc-700 border-dotted",
        primary: "",
        secondary: "",
      },
      size: {
        default: "h-7 px-2",
        lg: "h-7 px-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface PillProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof pillVariants> {}

const Pill = React.forwardRef<HTMLDivElement, PillProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <div
        className={cn(pillVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Pill.displayName = "Pill";

export default Pill;
