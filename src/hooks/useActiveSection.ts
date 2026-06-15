"use client";

import { useEffect, useState } from "react";
import type { SectionId } from "@/lib/nav-links";

export function useActiveSection(sectionIds: SectionId[]) {
  const [activeSection, setActiveSection] = useState<SectionId>(sectionIds[0]);

  useEffect(() => {
    const getHeaderOffset = () => (window.innerWidth >= 1280 ? 112 : 88);

    const updateActiveSection = () => {
      const offset = getHeaderOffset() + 8;
      let currentActive: SectionId = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom > offset) {
          currentActive = id;
          break;
        }
      }

      setActiveSection(currentActive);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [sectionIds]);

  return activeSection;
}
