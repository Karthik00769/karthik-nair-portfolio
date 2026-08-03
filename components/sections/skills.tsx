import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skillCategories } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="border-b border-ink-100 py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="06 — Technical Expertise"
          title="Tools I reach for."
          description="Grouped by where they fit in the stack, not by how many logos I can fit on a page."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <Reveal key={category.label} delay={i * 0.04}>
              <Card className="h-full p-6 hover:border-ink-300">
                <h3 className="text-sm font-medium text-ink-950">{category.label}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
