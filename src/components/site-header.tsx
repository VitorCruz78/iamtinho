import { navLinks, profile } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6 md:px-8">
        <a href="#top" className="text-sm font-semibold tracking-tight">
          {profile.brand}
        </a>

        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="rounded-full border border-line px-4 py-2 text-sm font-medium transition-colors duration-200 hover:border-foreground"
        >
          Vamos conversar
        </a>
      </div>
    </header>
  );
}
