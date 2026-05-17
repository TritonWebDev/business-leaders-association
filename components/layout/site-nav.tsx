"use client";

import { useCallback, useState } from "react";
import type { NavItem } from "@/lib/types";
import { hrefToSectionId, scrollToSnapSection } from "@/lib/snap-scroll";
import "./site-nav.css";

type SiteNavProps = {
  brand: string;
  links: NavItem[];
};

export function SiteNav({ brand, links }: SiteNavProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = useCallback((href: string) => {
    scrollToSnapSection(hrefToSectionId(href));
    setIsMenuOpen(false);
  }, []);

  return (
    <header className="site-nav">
      <button
        type="button"
        className="site-nav__brand site-nav__brand--desktop"
        onClick={() => handleNavClick("#homepage")}
      >
        {brand}
      </button>

      <div className="site-nav__mobile">
        <div className="site-nav__mobile-bar">
          <button
            type="button"
            className="site-nav__brand site-nav__brand--mobile"
            onClick={() => handleNavClick("#homepage")}
          >
            {brand}
          </button>
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
            {links.map((item) => (
              <li key={item.href}>
                <button
                  type="button"
                  className="site-nav__link"
                  tabIndex={isMenuOpen ? 0 : -1}
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ul className="site-nav__links site-nav__links--desktop">
        {links.map((item) => (
          <li key={item.href}>
            <button type="button" className="site-nav__link" onClick={() => handleNavClick(item.href)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
}
