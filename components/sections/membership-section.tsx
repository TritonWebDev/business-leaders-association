import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBriefcase,
  faBuilding,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import type { MembershipContent } from "@/lib/types";

type MembershipSectionProps = {
  content: MembershipContent;
};

const benefits = [
  { icon: faBriefcase, label: "Internship Opportunities" },
  { icon: faBuilding, label: "Office tours" },
  { icon: faUtensils, label: "Exclusive alumni dinners" },
];

export function MembershipSection({ content }: MembershipSectionProps) {
  const primaryOption = content.options[0];

  return (
    <section
      id="membership"
      className="bg-bla-light-brown text-bla-cream py-20 px-8 scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4">
          <p className="text-sm tracking-[0.25em] uppercase mb-4 font-secondary">
            {content.eyebrow}
          </p>
          <h2 className="font-primary text-6xl md:text-7xl leading-tight">
            {content.title}
          </h2>
        </div>

        <div className="border-t border-bla-cream/20 mt-8 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="flex-1">
              <div className="inline-flex items-center bg-bla-dark-brown rounded-full px-4 py-1.5 text-sm mb-8 font-secondary">
                <span className="w-2 h-2 bg-bla-cream/60 rounded-full mr-2"></span>
                Applications reopen in Fall
              </div>
              <h3 className="font-primary text-4xl mb-3">
                {primaryOption.title}
              </h3>
              <p className="mb-10 font-secondary text-lg">
                {primaryOption.description}
              </p>
              <button className="inline-flex items-center gap-3 bg-bla-dark-brown rounded-md px-5 py-2.5 hover:bg-bla-accent transition-colors font-secondary">
                Application
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </button>
            </div>

            <div className="flex-1 w-full">
              <h3 className="font-primary text-3xl mb-8">
                What you get access to
              </h3>
              <ul className="space-y-6">
                {benefits.map((benefit) => (
                  <li
                    key={benefit.label}
                    className="flex items-center gap-6"
                  >
                    <FontAwesomeIcon
                      icon={benefit.icon}
                      className="w-6 h-6 opacity-70"
                    />
                    <span className="font-secondary text-xl">
                      {benefit.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-bla-cream/20 pt-8 text-center">
          <p className="font-secondary italic text-base opacity-80">
            ✦ Active members who attend 5 or more events per quarter earn
            Premium membership ✦
          </p>
        </div>
      </div>
    </section>
  );
}
