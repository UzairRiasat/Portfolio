"use client";

import { useEffect } from "react";
import { scrollToSection, type SectionId } from "@/lib/nav-links";

const sectionIds: SectionId[] = ["home", "services", "work", "contact"];

export default function HashScrollHandler() {
  useEffect(() => {
    const hash = window.location.hash.slice(1) as SectionId;
    if (sectionIds.includes(hash)) {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, []);

  return null;
}
