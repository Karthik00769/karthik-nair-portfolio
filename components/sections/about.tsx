import { GraduationCap, Languages as LanguagesIcon } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { aboutFocusAreas, education, languages, personal } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="border-b border-ink-100 py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="01 — About" title="Engineer, first." />

        <div className="grid gap-12 md:grid-cols-12">
          <Reveal className="md:col-span-6">
            <p className="text-[15px] leading-relaxed text-ink-600 md:text-base">
              I&apos;m a software engineering undergraduate who enjoys building products that solve practical problems through thoughtful engineering. My work spans full-stack development, backend systems, cloud infrastructure, and AI-powered applications, with a strong focus on designing software that&apos;s reliable, scalable, and maintainable.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600 md:text-base">
              Over the past few years, I&apos;ve built production-style SaaS platforms covering API design, database architecture, authentication, cloud deployment, AI integration, and multi-tenant systems. Rather than treating projects as one-time demonstrations, I continuously refine and improve them as I learn new technologies and better engineering practices.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-600 md:text-base">
              I care more about how software behaves in real-world environments than how impressive it looks in a demo. Building secure APIs, maintaining data consistency, designing scalable architectures, and improving developer experience are the kinds of problems I genuinely enjoy solving.
            </p>

            <div className="mt-8 space-y-4 rounded-xl border border-ink-200 p-6">
              <div className="flex gap-3">
                <GraduationCap size={18} className="mt-0.5 shrink-0 text-accent-500" />
                <div>
                  <p className="text-sm font-medium text-ink-950">{education.degree}</p>
                  <p className="mt-0.5 text-sm text-ink-500">{education.institution}</p>
                  <p className="mt-0.5 font-mono text-xs text-ink-400">
                    {education.period} · {education.detail}
                  </p>
                </div>
              </div>

              <div className="flex gap-3 border-t border-ink-100 pt-4">
                <LanguagesIcon size={18} className="mt-0.5 shrink-0 text-accent-500" />
                <div className="flex flex-wrap gap-x-4 gap-y-1">
                  {languages.map((lang) => (
                    <p key={lang.name} className="text-sm text-ink-600">
                      <span className="font-medium text-ink-950">{lang.name}</span>{" "}
                      <span className="text-ink-400">— {lang.level}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <div className="md:col-span-6">
            <dl className="grid gap-px overflow-hidden rounded-xl border border-ink-200 bg-ink-100 sm:grid-cols-2">
              {aboutFocusAreas.map((area, i) => (
                <Reveal key={area.label} delay={i * 0.05} className="h-full">
                  <div className="h-full bg-white p-6">
                    <dt className="font-mono text-xs tracking-wide text-accent-500">
                      {String(i + 1).padStart(2, "0")}
                    </dt>
                    <dd className="mt-3">
                      <p className="text-sm font-medium text-ink-950">{area.label}</p>
                      <p className="mt-2 text-sm leading-relaxed text-ink-500">
                        {area.description}
                      </p>
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
