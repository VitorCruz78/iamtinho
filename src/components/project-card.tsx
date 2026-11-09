import { ArrowIcon, WhatsappIcon } from "@/components/icons";
import { ProjectMedia } from "@/components/project-media";
import type { Project } from "@/content/site";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const id = project.name.toLowerCase().replace(/\s+/g, "-");
  const titleId = `${id}-title`;
  const summaryId = `${id}-summary`;

  return (
    <article aria-labelledby={titleId}>
      <div className="mb-6 flex items-center gap-4">
        <span className="text-xs font-medium tabular-nums tracking-[0.18em] text-muted">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span aria-hidden="true" className="h-px flex-1 bg-line" />
      </div>

      <ProjectMedia
        media={project.media}
        labelledBy={titleId}
        describedBy={summaryId}
      />

      <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-16">
        <div>
          <h3
            id={titleId}
            className="text-2xl font-semibold tracking-tight md:text-3xl"
          >
            {project.name}
          </h3>
          <span className="mt-3 inline-block rounded-full border border-line px-2.5 py-1 text-xs font-medium text-muted">
            {project.status}
          </span>

          {project.links.length > 0 ? (
            <ul className="mt-6 space-y-3">
              {project.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={`${link.label} — ${project.name}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity duration-200 hover:opacity-75"
                  >
                    {link.kind === "whatsapp" ? (
                      <WhatsappIcon className="h-4 w-4" />
                    ) : (
                      <ArrowIcon className="h-4 w-4" />
                    )}
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div>
          <p id={summaryId} className="text-lg font-medium text-balance">
            {project.summary}
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Proposta
              </h4>
              <p className="mt-2 text-sm leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                O que construí
              </h4>
              <p className="mt-2 text-sm leading-relaxed">{project.build}</p>
            </div>
          </div>

          {project.modules ? (
            <div className="mt-8 rounded-xl border border-line bg-surface p-5">
              <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
                Módulos
              </h4>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {project.modules.map((module) => (
                  <li key={module} className="flex items-center gap-2 text-sm">
                    <span
                      aria-hidden="true"
                      className="h-1.5 w-1.5 rounded-full bg-accent"
                    />
                    {module}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
            {project.tech.map((item) => (
              <li key={item} className="text-xs text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
