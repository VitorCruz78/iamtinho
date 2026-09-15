import Image from "next/image";

import { ArrowIcon, GithubIcon } from "@/components/icons";
import type { Project } from "@/content/site";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-surface">
      {project.images ? (
        <div className="flex items-end justify-center gap-6 overflow-hidden border-b border-line bg-background px-6 pt-8 sm:px-10">
          {project.images.map((image) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              sizes={
                image.variant === "mobile"
                  ? "(min-width: 640px) 9rem, 13rem"
                  : "34rem"
              }
              className={
                image.variant === "mobile"
                  ? "w-52 rounded-t-lg border border-b-0 border-line sm:w-36"
                  : "hidden w-full max-w-lg rounded-t-lg border border-b-0 border-line sm:block"
              }
            />
          ))}
        </div>
      ) : null}

      <div className="p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold tracking-tight">
            {project.name}
          </h3>
          <span className="rounded-full border border-line px-2.5 py-1 text-xs font-medium text-muted">
            {project.status}
          </span>
        </div>

        <p className="mt-2 text-sm font-medium text-muted">{project.summary}</p>

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
          <div className="mt-8 rounded-xl border border-line bg-background p-5">
            <h4 className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Módulos
            </h4>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {project.modules.map((module) => (
                <li
                  key={module.label}
                  className="flex items-center gap-2 text-sm"
                >
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full ${
                      module.done ? "bg-accent" : "border border-muted"
                    }`}
                  />
                  <span className={module.done ? "" : "text-muted"}>
                    {module.label}
                  </span>
                  <span className="sr-only">
                    {module.done ? "entregue" : "em implementação"}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-muted">
              Preenchido: entregue · Contorno: modelado e em implementação
            </p>
          </div>
        ) : null}

        <ul className="mt-8 flex flex-wrap gap-x-3 gap-y-2">
          {project.tech.map((item) => (
            <li key={item} className="text-xs text-muted">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-7 flex flex-wrap gap-5 border-t border-line pt-6">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${link.label} — ${project.name}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-opacity duration-200 hover:opacity-75"
            >
              {link.kind === "github" ? (
                <GithubIcon className="h-4 w-4" />
              ) : (
                <ArrowIcon className="h-4 w-4" />
              )}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
