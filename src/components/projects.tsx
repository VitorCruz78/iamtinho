import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { projects } from "@/content/site";

export function Projects() {
  return (
    <Section
      id="projetos"
      kicker="Projetos"
      title="Produtos que construí"
      intro="A maior parte do que construí é interna: sistemas das empresas em que trabalhei e trabalho, que não são públicos. Por fora, desenvolvo produtos próprios como os abaixo — aplicações completas, com backend, banco de dados e operação real."
      wide
    >
      <div className="space-y-24 md:space-y-32">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </Section>
  );
}
