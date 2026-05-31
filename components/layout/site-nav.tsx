"use client";

import { useState, useCallback, type MouseEvent } from "react";
import type { NavItem } from "@/lib/types";
import "./site-nav.css";

type SiteNavProps = {
  brand?: string;
  items: NavItem[];
};

export function SiteNav({ brand = "Business Leaders Association", items }: SiteNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const handleSectionLink = useCallback(
    (event: MouseEvent<HTMLAnchorElement>, href: string) => {
      if (!href.startsWith("#")) return;

      const id = href.replace(/^#/, "");
      const target = id ? document.getElementById(id) : null;
      if (!target) return;

      event.preventDefault();

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      target.scrollIntoView({ behavior: prefersReducedMotion ? "auto" : "smooth", block: "start" });
      window.history.pushState(null, "", `#${id}`);
      closeMenu();
    },
    [],
  );

  return (
    <header className="site-nav">
      <a
        className="site-nav__brand site-nav__brand--desktop"
        href="#home"
        onClick={(event) => handleSectionLink(event, "#home")}
      >
        {brand}
      </a>

      <div className="site-nav__mobile">
        <div className="site-nav__mobile-bar">
          <a
            className="site-nav__brand site-nav__brand--mobile"
            href="#home"
            onClick={(event) => handleSectionLink(event, "#home")}
          >
            {brand}
          </a>
          <button
            type="button"
            className="site-nav__menu-toggle"
            aria-expanded={isMenuOpen}
            aria-controls="site-nav-menu"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span className={`site-nav__chevron${isMenuOpen ? " site-nav__chevron--open" : ""}`} aria-hidden>
              <svg viewBox="0 0 12 8" width="12" height="8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M1 1.5L6 6.5L11 1.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <div
          className={`site-nav__dropdown-panel${isMenuOpen ? " site-nav__dropdown-panel--open" : ""}`}
          aria-hidden={!isMenuOpen}
        >
          <ul id="site-nav-menu" className="site-nav__dropdown">
            {items.map((item) => (
              <li key={item.href}>
                <a
                  className="site-nav__link"
                  href={item.href}
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={(event) => handleSectionLink(event, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="site-nav__links site-nav__links--desktop">
        {items.map((item) => (
          <li key={item.href}>
            <a
              className="site-nav__link"
              href={item.href}
              onClick={(event) => handleSectionLink(event, item.href)}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
