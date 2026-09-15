import { ProjectCard } from "@/components/project-card";
import { Section } from "@/components/section";
import { projects } from "@/content/site";

export function Projects() {
  return (
    <Section
      id="projetos"
      kicker="Projetos"
      title="Produtos que construí"
      intro="Aplicações completas, com backend, banco de dados e operação real — não exercícios de portfólio."
    >
      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
