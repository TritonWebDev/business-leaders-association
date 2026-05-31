import type { HeroContent } from "@/lib/types";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <div
      className="box-border flex min-h-full w-full max-w-full flex-1 flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-[var(--section-pad-x)] py-[var(--section-pad-y)]"
      style={{ backgroundImage: `url(${content.src})` }}
    >
      <h1 className="font-primary mb-[clamp(0.75rem,2vh,1rem)] text-center text-[length:var(--text-display)] font-bold leading-[1.1] text-bla-cream text-balance whitespace-pre-line drop-shadow-[2px_4px_6px_rgb(0_0_0/30%)]">
        {content.title}
      </h1>
      <p className="font-secondary max-w-[min(100%,37.5rem)] text-center text-[length:var(--text-body)] leading-[1.4] text-bla-cream">
        {content.description}
      </p>
    </div>
  );
}
