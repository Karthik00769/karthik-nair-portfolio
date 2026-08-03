import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12 max-w-2xl md:mb-16", className)}>
      <div className="mb-4 flex items-center gap-3">
        <span className="font-mono text-xs tracking-wider text-accent-500">{eyebrow}</span>
        <span className="h-px flex-1 max-w-8 bg-ink-200" />
      </div>
      <h2 className="text-display-md font-semibold text-ink-950">{title}</h2>
      {description ? (
        <p className="mt-4 text-[15px] leading-relaxed text-ink-500">{description}</p>
      ) : null}
    </div>
  );
}
