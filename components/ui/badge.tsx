import * as React from "react";
import { cn } from "@/lib/utils";

function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-ink-200 bg-ink-50 px-2.5 py-1 font-mono text-[11px] tracking-wide text-ink-600",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
