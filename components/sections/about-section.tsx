import type { AboutContent } from "@/lib/types";

type AboutSectionProps = {
  content: AboutContent;
};

export function AboutSection({ content }: AboutSectionProps) {
  return (
    <div style={{ display: 'flex' }}>
      <section className="flex h-screen w-1/2 flex-col items-start justify-center bg-bla-light-brown pl-[12vh] text-center">
      <h1 className="font-primary font-bold text-bla-cream text-left text-[120px] max-w-[800px]">
        {content.title}
      </h1>
      <p className="font-secondary text-bla-cream text-left text-[30px] max-w-[800px]">
        {content.body}
      </p>
      </section>
      <div
        className="w-screen aspect-video flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${content.src})` }}
      >
      </div> 
      </div> 
    );
}
