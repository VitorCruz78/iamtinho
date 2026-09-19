import { ButtonLink } from "@/components/button-link";
import { heroIntro, profile } from "@/content/site";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-8 md:py-28">
        <h1
          id="hero-title"
          className="text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl"
        >
          {profile.name}
        </h1>
        <p className="mt-3 text-lg font-medium text-accent md:text-xl">
          {profile.role}
        </p>

        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-muted md:text-lg">
          {heroIntro().map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="#projetos">Ver projetos</ButtonLink>
          <ButtonLink href="#contato" variant="secondary">
            Entrar em contato
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
