export const navLinks = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

const HEADER_OFFSET = 88;
const HEADER_OFFSET_XL = 112;

export function scrollToSection(id: SectionId) {
  const element = document.getElementById(id);
  if (element) {
    const offset = window.innerWidth >= 1280 ? HEADER_OFFSET_XL : HEADER_OFFSET;
    const top = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    window.history.pushState(null, "", `#${id}`);
  }
}
