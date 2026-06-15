"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";
import { navLinks, scrollToSection } from "@/lib/nav-links";
import { useActiveSection } from "@/hooks/useActiveSection";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const sectionIds = navLinks.map((link) => link.id);
  const activeSection = useActiveSection(sectionIds);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: (typeof navLinks)[number]["id"]
  ) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(id);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex items-center justify-center w-10 h-10 rounded-xl hover:bg-white/[0.05] transition-colors">
        <CiMenuFries className="text-2xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col bg-primary/95 backdrop-blur-xl border-white/10">
        <div className="mt-16 mb-12 text-center">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "home")}
            className="cursor-pointer"
          >
            <h1 className="font-display text-3xl font-bold">
              Uzair<span className="text-accent">.</span>
            </h1>
          </a>
        </div>
        <nav className="flex flex-col justify-center items-center gap-2">
          {navLinks.map((link) => {
            const isContact = link.id === "contact";
            return (
              <a
                href={`#${link.id}`}
                key={link.id}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`w-full max-w-xs text-center py-3 px-6 rounded-xl text-lg capitalize transition-all cursor-pointer ${
                  isContact
                    ? "bg-accent text-primary font-semibold mt-4"
                    : link.id === activeSection
                      ? "text-accent bg-accent/10"
                      : "text-white/70 hover:text-white hover:bg-white/[0.05]"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
