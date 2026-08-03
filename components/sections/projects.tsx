import { ArrowUpRight, Award, Github } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { BrowserFrame } from "@/components/browser-frame";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Projects() {
  return (
    <section id="projects" className="border-b border-ink-100 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="04 — Featured Projects"
          title="Products I've shipped end-to-end."
          description="Each one covers the full stack — from data architecture to the interface shown below."
        />

        <div className="space-y-24">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.05}>
              <article className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
                <div className={cn(i % 2 === 1 && "lg:order-2")}>
                  <BrowserFrame visual={project.visual} />
                </div>

                <div className={cn(i % 2 === 1 && "lg:order-1")}>
                  <span className="font-mono text-xs tracking-wide text-accent-500">
                    {project.tagline}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold text-ink-950 md:text-[28px]">
                    {project.name}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-500">
                    {project.overview}
                  </p>

                  <div className="mt-6 rounded-lg border-l-2 border-accent-500 bg-ink-50 py-3 pl-4 pr-4">
                    <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
                      Problem
                    </p>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                      {project.problem}
                    </p>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs font-medium uppercase tracking-wide text-ink-400">
                      Engineering decisions
                    </p>
                    <ul className="mt-3 space-y-2.5">
                      {project.decisions.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 text-sm leading-relaxed text-ink-600"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>

                  {project.recognition ? (
                    <div className="mt-5 flex items-start gap-2.5 text-sm text-ink-600">
                      <Award size={16} className="mt-0.5 shrink-0 text-accent-500" />
                      <span>{project.recognition}</span>
                    </div>
                  ) : null}

                  <div className="mt-7 flex flex-wrap gap-3">
                    <a
                      href={project.github ?? "https://github.com/Karthik00769"}
                      target="_blank"
                      rel="noreferrer noopener"
                      className={cn(buttonVariants({ variant: "secondary", size: "sm" }))}
                    >
                      <Github size={15} />
                      Code
                    </a>
                    {project.demo ? (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer noopener"
                        className={cn(buttonVariants({ variant: "primary", size: "sm" }))}
                      >
                        Live Demo
                        <ArrowUpRight size={15} />
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
