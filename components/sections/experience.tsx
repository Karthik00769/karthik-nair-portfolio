import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="border-b border-ink-100 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="03 — Experience"
          title="Where I've worked."
          description="Roles ordered from most recent to earliest."
        />

        <div className="relative max-w-3xl">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px bg-ink-200 md:left-[7px]"
          />

          <ol className="space-y-10">
            {experience.map((role, i) => (
              <Reveal key={role.organization + role.role} delay={i * 0.05}>
                <li className="relative pl-8">
                  <span className="absolute left-0 top-1.5 h-[15px] w-[15px] rounded-full border-2 border-accent-500 bg-white" />

                  <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                    <h3 className="text-[17px] font-medium text-ink-950">
                      {role.role} <span className="text-ink-400">·</span>{" "}
                      <span className="text-ink-700">{role.organization}</span>
                    </h3>
                    <span className="whitespace-nowrap font-mono text-xs text-ink-400">
                      {role.period}
                    </span>
                  </div>

                  {role.context ? (
                    <p className="mt-1 text-sm text-ink-500">{role.context}</p>
                  ) : null}

                  <ul className="mt-4 space-y-2">
                    {role.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 text-sm leading-relaxed text-ink-600"
                      >
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink-300" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
