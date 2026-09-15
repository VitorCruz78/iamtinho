import { ButtonLink } from "@/components/button-link";
import { GithubIcon, MailIcon } from "@/components/icons";
import { profile } from "@/content/site";

export function ContactCta() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-8 md:py-28">
        <h2
          id="contato-title"
          className="text-3xl font-semibold tracking-tight md:text-4xl"
        >
          Tem um produto para construir?
        </h2>
        <p className="mt-3 text-lg text-muted">Vamos conversar.</p>

        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href={`mailto:${profile.email}`}>
            <MailIcon className="h-4 w-4" />
            {profile.email}
          </ButtonLink>
          <ButtonLink href={profile.github} variant="secondary" external>
            <GithubIcon className="h-4 w-4" />
            {profile.githubHandle}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
