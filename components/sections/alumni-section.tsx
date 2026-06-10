import type { AlumniContent } from "@/lib/types";
import { AlumniProfile } from "./alumni-profile"

type AlumniSectionProps = {
  content: AlumniContent;
};

export function AlumniSection({ content }: AlumniSectionProps) {
  return (
      <div className="pt-[120px] w-full min-h-screen bg-bla-dark-brown px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h1 className="font-primary text-bla-cream text-[120px] leading-tight">
            {content.title}
          </h1>
          <h2 className="font-secondary text-bla-cream text-[60px]">
            {content.eyebrow}
          </h2>
        </div>

        {content.stats && content.stats.length > 0 && (
          <div className="flex justify-center gap-8 mb-16">
            {content.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-bla-light-brown rounded-xl px-12 py-8 min-w-[220px]"
              >
                <div className="text-bla-cream text-5xl font-semibold">
                  {stat.number}
                </div>
                <div className="text-bla-cream text-2xl mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="w-full py-12 max-w-12xl mx-auto">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-items-center px-8 max-w-10xl mx-auto">
            {content.members.map((member) => (
              <AlumniProfile
                key={member.name}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedIn={member.linkedIn}
                gradYear={member.gradYear}
              />
            ))}
          </div>
        </div>
      </div>
  );
}
