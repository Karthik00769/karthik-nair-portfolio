import Image from "next/image";
import { Heart } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";

export function Volunteering() {
  return (
    <section id="volunteering" className="border-b border-ink-100 py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="06 — Volunteering" title="Community impact." />

        <div className="max-w-4xl">
          <Reveal delay={0.05}>
            <article className="grid gap-8 overflow-hidden rounded-xl border border-ink-200 bg-white md:grid-cols-2 md:items-center">
              <div className="p-8 md:p-10 lg:p-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-500 mb-6">
                  <Heart size={24} strokeWidth={1.75} />
                </div>
                <h3 className="text-2xl font-semibold text-ink-950">Namma Tiruttani</h3>
                <p className="mt-2 font-mono text-sm tracking-wide text-accent-600">
                  Volunteer / Contributor
                </p>
                <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
                  Contributed to the Namma Tiruttani community development initiative through volunteer activities supporting local civic engagement and social impact programs.
                </p>
              </div>
              <div className="relative h-full min-h-[300px] border-t border-ink-100 md:border-l md:border-t-0 bg-ink-50">
                <Image
                  src="/namma-tiruttani.jpg"
                  alt="Namma Tiruttani Volunteer Certificate"
                  fill
                  className="object-cover object-center p-4"
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
