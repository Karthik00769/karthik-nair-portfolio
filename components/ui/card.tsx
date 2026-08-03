import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-xl border border-ink-200 bg-white transition-colors duration-200 ease-smooth",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

export { Card };
