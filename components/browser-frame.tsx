import Image from "next/image";
import { cn } from "@/lib/utils";
import type { ProjectVisual } from "@/lib/data";

export function BrowserFrame({ visual }: { visual: ProjectVisual }) {
  const isDark = visual.chrome === "dark";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border shadow-[0_1px_2px_rgba(10,10,11,0.04),0_16px_40px_-16px_rgba(10,10,11,0.25)]",
        isDark ? "border-ink-800 bg-ink-950" : "border-ink-200 bg-white"
      )}
    >
      <div
        className={cn(
          "flex items-center gap-1.5 border-b px-3.5 py-2.5",
          isDark ? "border-ink-800 bg-ink-900" : "border-ink-100 bg-ink-50"
        )}
      >
        <span className={cn("h-2.5 w-2.5 rounded-full", isDark ? "bg-ink-700" : "bg-ink-200")} />
        <span className={cn("h-2.5 w-2.5 rounded-full", isDark ? "bg-ink-700" : "bg-ink-200")} />
        <span className={cn("h-2.5 w-2.5 rounded-full", isDark ? "bg-ink-700" : "bg-ink-200")} />
      </div>

      <div className="relative">
        <Image
          src={visual.src}
          alt={visual.alt}
          width={visual.width}
          height={visual.height}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="w-full"
        />
      </div>
    </div>
  );
}
