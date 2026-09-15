import { Section } from "@/components/section";
import { about } from "@/content/site";

export function About() {
  return (
    <Section id="sobre" kicker="Sobre" title="Resumo profissional">
      <div className="max-w-2xl space-y-5 text-base leading-relaxed text-muted md:text-lg">
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
