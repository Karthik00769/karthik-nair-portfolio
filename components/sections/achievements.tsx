import { Trophy } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="border-b border-ink-100 py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="05 — Achievements" title="Recognized on the international stage." />

        <div className="max-w-2xl">
          <ol className="space-y-px overflow-hidden rounded-xl border border-ink-200">
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <li className="flex gap-5 border-b border-ink-100 bg-white p-6 last:border-b-0 hover:bg-ink-50/60">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-50 text-accent-500">
                    <Trophy size={18} strokeWidth={1.75} />
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-ink-950">{item.title}</h3>
                    <p className="mt-1 font-mono text-xs tracking-wide text-accent-600">
                      {item.distinction}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-500">{item.detail}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
