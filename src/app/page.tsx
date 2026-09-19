import { About } from "@/components/about";
import { ContactCta } from "@/components/contact-cta";
import { EducationEnglish } from "@/components/education-english";
import { Engineering } from "@/components/engineering";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { StackSection } from "@/components/stack-section";
import {
  engineeringTopics,
  profile,
  projects,
  stackGroups,
} from "@/content/site";

// Regenera a página periodicamente para o tempo de experiência não congelar no build.
export const revalidate = 86400;

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  alternateName: profile.brand,
  jobTitle: profile.role,
  description: profile.tagline,
  url: profile.siteUrl,
  email: `mailto:${profile.email}`,
  image: `${profile.siteUrl}/portrait.webp`,
  sameAs: [profile.github],
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  knowsAbout: [
    ...stackGroups.flatMap((group) => group.items),
    ...engineeringTopics,
  ],
  knowsLanguage: [
    { "@type": "Language", name: "Português" },
    { "@type": "Language", name: "Inglês" },
  ],
  subjectOf: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.name,
    description: project.summary,
    ...(project.links[0] ? { url: project.links[0].href } : {}),
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <Hero />
      <About />
      <StackSection />
      <Engineering />
      <Projects />
      <EducationEnglish />
      <ContactCta />
    </>
  );
}
