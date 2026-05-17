"use client";

import type { ReactNode } from "react";
import { useEffect, useRef } from "react";
import { SNAP_SCROLL_CLASS, SNAP_SCROLL_VISIBLE_CLASS } from "@/lib/snap-scroll";

type SnapScrollContainerProps = {
  children: ReactNode;
};

export function SnapScrollContainer({ children }: SnapScrollContainerProps) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const homepage = document.getElementById("homepage");

    if (!container || !homepage) return;

    const updateScrollbar = () => {
      const pageHeight = container.clientHeight;
      const homepageEnd = homepage.offsetTop + homepage.offsetHeight;
      const atHomepage = container.scrollTop < homepageEnd - pageHeight * 0.5;

      container.classList.toggle(SNAP_SCROLL_VISIBLE_CLASS, !atHomepage);
    };

    updateScrollbar();
    container.addEventListener("scroll", updateScrollbar, { passive: true });

    return () => {
      container.removeEventListener("scroll", updateScrollbar);
    };
  }, []);

  return (
    <main ref={containerRef} className={SNAP_SCROLL_CLASS}>
      {children}
    </main>
  );
}
