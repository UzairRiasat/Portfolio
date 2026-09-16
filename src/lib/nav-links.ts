export const navLinks = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

const SCROLL_GAP = 12;

/** Live header height — re-measured so mobile vs desktop always match */
export function measureHeaderHeight(): number {
  if (typeof window === "undefined") return 64;
  const header = document.querySelector("header");
  return Math.ceil(header?.getBoundingClientRect().height ?? 64);
}

/** Measured fixed header height + gap — kept in sync via Header.tsx */
export function getScrollAnchor(): number {
  if (typeof window === "undefined") return 76;

  const raw = getComputedStyle(document.documentElement).getPropertyValue("--scroll-anchor");
  const parsed = parseFloat(raw);
  if (!Number.isNaN(parsed) && parsed > 0) return parsed;

  return measureHeaderHeight() + SCROLL_GAP;
}

export function scrollToSection(id: SectionId, behavior: ScrollBehavior = "smooth") {
  const element = document.getElementById(id);
  if (!element) return;

  // Always measure live so resize / mobile↔desktop nav swap can't drift
  const anchor = measureHeaderHeight() + SCROLL_GAP;
  document.documentElement.style.setProperty("--header-h", `${anchor - SCROLL_GAP}px`);
  document.documentElement.style.setProperty("--scroll-anchor", `${anchor}px`);

  const top = Math.max(0, element.getBoundingClientRect().top + window.scrollY - anchor);

  window.scrollTo({ top, behavior });
  window.history.pushState(null, "", `#${id}`);

  window.setTimeout(() => {
    window.dispatchEvent(new Event("scroll"));
  }, behavior === "smooth" ? 400 : 50);
}
