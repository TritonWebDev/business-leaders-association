import type { NavItem } from "@/lib/types";

type SiteNavProps = {
  items: NavItem[];
};

export function SiteNav({ items }: SiteNavProps) {
  return (
    <nav
      aria-label="Main navigation"
      className="flex flex-wrap gap-x-[clamp(0.75rem,2.5vw,1.5rem)] gap-y-2 bg-bla-cream p-[clamp(1rem,3vw,1.5rem)] font-secondary text-[clamp(0.75rem,1.4vw,0.875rem)] text-bla-dark-brown"
    >
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-bla-dark-brown no-underline transition-opacity hover:opacity-75"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
