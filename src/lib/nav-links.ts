export const navLinks = [
  { name: "home", id: "home" },
  { name: "services", id: "services" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
] as const;

export type SectionId = (typeof navLinks)[number]["id"];

export function scrollToSection(id: SectionId) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
    window.history.pushState(null, "", `#${id}`);
  }
}
