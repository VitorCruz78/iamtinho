import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
};

const styles = {
  primary:
    "bg-foreground text-background hover:opacity-85 border border-transparent",
  secondary: "border border-line text-foreground hover:border-foreground",
} as const;

export function ButtonLink({
  href,
  children,
  variant = "primary",
  external,
}: ButtonLinkProps) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-[opacity,border-color,background-color] duration-200 ${styles[variant]}`}
    >
      {children}
    </a>
  );
}
