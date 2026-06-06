"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import type { FaqContent } from "@/lib/types";

type FaqSectionProps = {
  content: FaqContent;
};

export function FaqSection({ content }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="bg-bla-light-brown text-bla-cream py-20 px-8 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-primary text-6xl md:text-7xl leading-tight mb-6">
            {content.title}
          </h2>
          <p className="font-secondary text-lg opacity-90">
            Can&apos;t find what you&apos;re looking for? Reach out on Instagram
            or email.
          </p>
        </div>

        <div className="border-t border-bla-cream/25">
          {content.items.map((faq, index) => (
            <div key={faq.question} className="border-b border-bla-cream/25">
              <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none transition-opacity hover:opacity-80"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-primary text-2xl">{faq.question}</span>
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                  className="w-5 h-5 opacity-70"
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out font-secondary ${
                  openIndex === index
                    ? "max-h-96 pb-6 opacity-80 text-base"
                    : "max-h-0 opacity-0"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
