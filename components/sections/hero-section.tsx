import type { HeroContent } from "@/lib/types";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <div
      className="w-screen aspect-video flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${content.src})` }}
    >
      <h1 className="font-primary font-bold text-white text-center text-[120px] mb-4 whitespace-pre-line drop-shadow-[2px_4px_6px_rgba(0,0,0,0.3)]">
        {content.title}
      </h1>
      <p className="font-secondary text-white text-center text-[30px] max-w-[600px]">
        {content.description}
      </p>
    </div>
  );
}