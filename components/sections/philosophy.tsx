import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { engineeringPrinciples } from "@/lib/data";

export function Philosophy() {
  return (
    <section id="philosophy" className="border-b border-ink-100 bg-ink-50/60 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="02 — Engineering Philosophy"
          title="The principles that guide how I build software."
          description="I enjoy solving practical engineering problems, continuously improving my work, and building systems that remain useful long after the first release."
        />

        <div className="grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-200 md:grid-cols-2">
          {engineeringPrinciples.map((principle, i) => (
            <Reveal key={principle.label} delay={i * 0.04}>
              <div className="h-full bg-white p-7 md:p-8">
                <span className="font-mono text-xs tracking-wide text-accent-500">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 text-base font-medium text-ink-950">
                  {principle.label}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-500">
                  {principle.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
