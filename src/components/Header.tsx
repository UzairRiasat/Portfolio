"use client";

import { useEffect } from "react";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { motion } from "framer-motion";
import { measureHeaderHeight, navLinks, scrollToSection, type SectionId } from "@/lib/nav-links";

const SCROLL_GAP = 12;
const sectionIds = navLinks.map((l) => l.id) as SectionId[];

const Header = () => {
  useEffect(() => {
    const syncHeaderHeight = () => {
      const height = measureHeaderHeight();
      document.documentElement.style.setProperty("--header-h", `${height}px`);
      document.documentElement.style.setProperty(
        "--scroll-anchor",
        `${height + SCROLL_GAP}px`
      );
    };

    /** Keep current section aligned after resize / orientation change */
    let resizeTimer: number | undefined;
    const realignToHash = () => {
      syncHeaderHeight();
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        const hash = window.location.hash.slice(1) as SectionId;
        if (!sectionIds.includes(hash) || hash === "home") return;
        scrollToSection(hash, "auto");
      }, 120);
    };

    syncHeaderHeight();
    window.addEventListener("resize", realignToHash);
    window.addEventListener("orientationchange", realignToHash);
    window.addEventListener("load", syncHeaderHeight);

    const observer = new ResizeObserver(syncHeaderHeight);
    const header = document.querySelector("header");
    if (header) observer.observe(header);

    return () => {
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", realignToHash);
      window.removeEventListener("orientationchange", realignToHash);
      window.removeEventListener("load", syncHeaderHeight);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full">
      {/* Solid mask so previous-section content cannot peek above the floating nav */}
      <div
        className="absolute inset-x-0 top-0 bg-primary pointer-events-none"
        style={{ height: "var(--header-h)" }}
        aria-hidden
      />

      <div className="relative mx-auto w-full max-w-[1200px] py-2 xl:py-3 px-4 xl:px-5">
        <motion.div
          initial={{ y: -24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-between items-center bg-primary/80 backdrop-blur-2xl border border-white/[0.08] px-5 py-2.5 xl:px-7 xl:py-3 rounded-2xl shadow-card"
        >
          <a href="#home" className="cursor-pointer group">
            <h1 className="font-display text-xl xl:text-2xl font-bold tracking-tight">
              Uzair
              <span className="text-accent group-hover:drop-shadow-[0_0_8px_rgba(0,229,160,0.8)] transition-all">
                .
              </span>
            </h1>
          </a>

          <div className="hidden xl:flex items-center gap-2">
            <Navbar />
          </div>

          <div className="xl:hidden">
            <MobileNav />
          </div>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
