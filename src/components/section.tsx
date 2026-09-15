import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  kicker: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, kicker, title, intro, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="border-t border-line"
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] lg:gap-16">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted">
              {kicker}
            </p>
            <h2
              id={`${id}-title`}
              className="mt-3 text-2xl font-semibold tracking-tight text-balance md:text-3xl"
            >
              {title}
            </h2>
          </div>
          <div>
            {intro ? (
              <p className="mb-8 max-w-2xl text-base text-muted">{intro}</p>
            ) : null}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
