import { Section } from "@/components/section";
import { engineeringTopics } from "@/content/site";

export function Engineering() {
  return (
    <Section
      id="engenharia"
      kicker="Engenharia"
      title="Estudo e prática contínua"
      intro="Não me apresento como especialista em todos estes tópicos. É o terreno que estudo e aplico de forma contínua, na medida em que os projetos exigem."
    >
      <ul className="flex flex-wrap gap-2">
        {engineeringTopics.map((topic) => (
          <li
            key={topic}
            className="rounded-full border border-line px-3.5 py-1.5 text-sm text-muted"
          >
            {topic}
          </li>
        ))}
      </ul>
    </Section>
  );
}
