export const navLinks = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

export function scrollToSection(id: SectionId) {
  const element = document.getElementById(id);
  if (!element) return;

  const header = document.querySelector("header");
  const headerHeight = header
    ? header.getBoundingClientRect().height
    : parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 88;

  // Extra gap so the section sits fully below the fixed header, not tucked under it
  const offset = headerHeight + 12;
  const top = Math.max(
    0,
    element.getBoundingClientRect().top + window.scrollY - offset
  );

  window.scrollTo({ top, behavior: "smooth" });
  window.history.pushState(null, "", `#${id}`);
}
