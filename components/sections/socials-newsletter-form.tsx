"use client";

import { useCallback, useEffect, useState } from "react";

const DEFAULT_EMAIL = "your@email.com";
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SocialsNewsletterFormProps = {
  title: string;
  description: string;
};

function isValidEmail(value: string): boolean {
  const trimmed = value.trim();
  if (!trimmed || trimmed === DEFAULT_EMAIL) return false;
  return EMAIL_PATTERN.test(trimmed);
}

export function SocialsNewsletterForm({ title, description }: SocialsNewsletterFormProps) {
  const [email, setEmail] = useState(DEFAULT_EMAIL);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (!showToast) return;

    const timer = window.setTimeout(() => setShowToast(false), 3200);
    return () => window.clearTimeout(timer);
  }, [showToast]);

  const triggerShake = useCallback(() => {
    setIsShaking(false);
    window.requestAnimationFrame(() => setIsShaking(true));
  }, []);

  const handleSubscribe = useCallback(async () => {
    if (isSubmitting) return;

    if (!isValidEmail(email)) {
      triggerShake();
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        triggerShake();
        return;
      }

      setEmail(DEFAULT_EMAIL);
      setShowToast(true);
    } finally {
      setIsSubmitting(false);
    }
  }, [email, isSubmitting, triggerShake]);

  return (
    <>
      {showToast ? (
        <div role="status" aria-live="polite" className="socials-toast">
          <p className="socials-toast__message">Subscribed!</p>
        </div>
      ) : null}

      <div className="socials-newsletter">
        <h3 className="socials-newsletter__title">{title}</h3>
        <p className="socials-newsletter__description">{description}</p>

        <div className="socials-newsletter__form flex min-w-0 flex-row flex-nowrap items-stretch">
          <textarea
            rows={1}
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onFocus={() => {
              if (email === DEFAULT_EMAIL) setEmail("");
            }}
            onBlur={() => {
              if (email.trim() === "") setEmail(DEFAULT_EMAIL);
            }}
            onAnimationEnd={() => setIsShaking(false)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && !event.shiftKey) {
                event.preventDefault();
                void handleSubscribe();
              }
            }}
            aria-label="Email address"
            aria-invalid={isShaking}
            className={`socials-newsletter__input min-w-0 flex-1 box-border rounded-md border border-solid border-bla-cream bg-bla-dark-brown ${
              email === DEFAULT_EMAIL ? "text-bla-tan" : "socials-newsletter__input--typed text-bla-cream"
            } ${isShaking ? "socials-newsletter__input--shake" : ""}`}
          />
          <button
            type="button"
            onClick={() => void handleSubscribe()}
            disabled={isSubmitting}
            className="socials-newsletter__button box-border shrink-0 rounded-md border border-solid border-bla-cream bg-[#493F39] px-5"
          >
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
}
