import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { profile } from "@/content/site";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title">
      <div className="mx-auto grid w-full max-w-5xl gap-12 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-center lg:gap-16">
        <div className="order-2 lg:order-1">
          <h1
            id="hero-title"
            className="text-4xl font-semibold tracking-tight text-balance md:text-5xl lg:text-6xl"
          >
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-accent md:text-xl">
            {profile.role}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <ButtonLink href="#projetos">Ver projetos</ButtonLink>
            <ButtonLink href="#contato" variant="secondary">
              Entrar em contato
            </ButtonLink>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <Image
            src="/portrait.webp"
            alt={`Retrato de ${profile.name}`}
            width={1280}
            height={1600}
            priority
            sizes="(min-width: 1024px) 20rem, 11rem"
            className="w-44 rounded-xl border border-line object-cover lg:w-full"
          />
        </div>
      </div>
    </section>
  );
}
