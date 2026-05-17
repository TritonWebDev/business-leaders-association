import type { SocialsContent } from "@/lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { SocialsNewsletterForm } from "@/components/sections/socials-newsletter-form";
import "./socials-section.css";

type SocialsSectionProps = {
  content: SocialsContent;
};

const SOCIAL_ICONS: Record<string, IconDefinition> = {
  instagram: faInstagram,
  slack: faSlack,
  linkedin: faLinkedin,
};

function getSocialIcon(label: string): IconDefinition | null {
  return SOCIAL_ICONS[label.trim().toLowerCase()] ?? null;
}

export function SocialsSection({ content }: SocialsSectionProps) {
  return (
    <section className="socials-section">
      <div className="socials-section__inner">
        <p className="socials-section__eyebrow">{content.eyebrow}</p>
        <h2 className="socials-section__title">{content.title}</h2>

        <ul className="socials-section__socials">
          {content.links.map((link) => {
            const icon = getSocialIcon(link.label);

            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="socials-section__social-link"
                >
                  {icon ? (
                    <FontAwesomeIcon icon={icon} className="socials-section__social-icon" />
                  ) : (
                    <span className="socials-section__social-label">{link.label.charAt(0)}</span>
                  )}
                  <span className="socials-section__social-label">{link.label}</span>
                </a>
              </li>
            );
          })}
        </ul>

        <div className="socials-section__divider" aria-hidden="true" />

        <SocialsNewsletterForm
          title={content.newsletter.title}
          description={content.newsletter.description}
        />
      </div>
    </section>
  );
}
