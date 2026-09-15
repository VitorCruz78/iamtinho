import { Section } from "@/components/section";
import { education, english } from "@/content/site";

const entries = [education, english];

export function EducationEnglish() {
  return (
    <Section id="formacao" kicker="Formação" title="Formação e idioma">
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {entries.map((entry) => (
          <div key={entry.title} className="bg-surface p-6">
            <h3 className="text-base font-semibold tracking-tight">
              {entry.title}
            </h3>
            <p className="mt-1 text-sm text-accent">{entry.detail}</p>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {entry.note}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
