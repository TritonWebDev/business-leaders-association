export const SNAP_SCROLL_CLASS = "snap-scroll";
export const SNAP_SCROLL_VISIBLE_CLASS = "snap-scroll--show-scrollbar";

export function getSnapScrollContainer(): HTMLElement | null {
  return document.querySelector<HTMLElement>(`.${SNAP_SCROLL_CLASS}`);
}

export function setSnapScrollbarVisible(visible: boolean) {
  getSnapScrollContainer()?.classList.toggle(SNAP_SCROLL_VISIBLE_CLASS, visible);
}

export function scrollToSnapSection(sectionId: string) {
  const container = getSnapScrollContainer();
  const target = document.getElementById(sectionId);

  if (!container || !target) return;

  if (sectionId === "homepage") {
    setSnapScrollbarVisible(false);
  } else {
    setSnapScrollbarVisible(true);
  }

  const containerTop = container.getBoundingClientRect().top;
  const targetTop = target.getBoundingClientRect().top;

  container.scrollTo({
    top: container.scrollTop + (targetTop - containerTop),
    behavior: "smooth",
  });
}

export function hrefToSectionId(href: string): string {
  if (href === "/" || href === "#" || href === "") return "homepage";
  return href.replace(/^#\/?/, "");
}
