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
      className="bg-bla-light-brown text-bla-cream pb-20 px-8 min-w-0 max-w-full overflow-x-clip box-border"
    >
      <div className="max-w-5xl mx-auto min-w-0 w-full">
        <div className="text-center mb-16">
          <h2 className="font-primary text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
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
                className="w-full min-w-0 py-6 flex justify-between items-center gap-4 text-left focus:outline-none transition-opacity hover:opacity-80"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-primary text-xl sm:text-2xl min-w-0">{faq.question}</span>
                <FontAwesomeIcon
                  icon={openIndex === index ? faChevronUp : faChevronDown}
                  className="w-5 h-5 opacity-70"
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out font-secondary ${
                  openIndex === index
                    ? "max-h-40 pb-6 opacity-80 text-base"
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
