import type { AboutContent } from "@/lib/types";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <div className="box-border flex min-h-full w-full max-w-full flex-1 flex-col md:flex-row">
      <section className="box-border flex w-full flex-1 flex-col items-start justify-center bg-bla-light-brown px-[var(--section-pad-x)] py-[var(--section-pad-y)] md:min-w-0 md:w-1/2 md:flex-[1_1_50%]">
        <h1 className="font-primary max-w-full text-left text-[length:var(--text-display)] font-bold leading-[1.1] text-bla-cream text-balance">
          {content.title}
        </h1>
        <p className="font-secondary mt-[clamp(0.75rem,2vh,1.25rem)] max-w-full text-left text-[length:var(--text-body)] leading-normal text-bla-cream">
          {content.body}
        </p>
      </section>
      <div
        className="min-h-[clamp(14rem,35dvh,22rem)] w-full max-w-full flex-1 bg-cover bg-center bg-no-repeat md:min-h-0 md:w-1/2 md:flex-[1_1_50%] md:self-stretch"
        style={{ backgroundImage: `url(${content.src})` }}
        role="img"
        aria-label={content.alt}
      />
    </div>
  );
}
