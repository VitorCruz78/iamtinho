import { Section } from "@/components/section";
import { stackGroups } from "@/content/site";

export function StackSection() {
  return (
    <Section
      id="stack"
      kicker="Stack"
      title="Tecnologias que uso no dia a dia"
      intro="Ferramentas com que trabalho de forma prática, organizadas pelo papel que cumprem em uma aplicação."
    >
      <dl className="divide-y divide-line border-y border-line">
        {stackGroups.map((group) => (
          <div
            key={group.title}
            className="grid gap-2 py-5 sm:grid-cols-[10rem_minmax(0,1fr)]"
          >
            <dt className="text-sm font-medium">{group.title}</dt>
            <dd className="text-sm leading-relaxed text-muted">
              {group.items.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
