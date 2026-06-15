'use client'

import { navLinks, scrollToSection } from "@/lib/nav-links"
import { useActiveSection } from "@/hooks/useActiveSection"

const Navbar = () => {
  const sectionIds = navLinks.map((link) => link.id)
  const activeSection = useActiveSection(sectionIds)

  return (
    <nav className="flex items-center gap-1">
      {navLinks.map((link) => {
        const isActive = link.id === activeSection
        const isContact = link.id === "contact"

        if (isContact) {
          return (
            <a
              href={`#${link.id}`}
              key={link.id}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection(link.id)
              }}
              className="ml-4 px-5 py-2.5 rounded-full bg-accent text-primary text-sm font-semibold hover:bg-accent-hover transition-all duration-300 hover:shadow-glow-sm capitalize"
            >
              {link.name}
            </a>
          )
        }

        return (
          <a
            href={`#${link.id}`}
            key={link.id}
            onClick={(e) => {
              e.preventDefault()
              scrollToSection(link.id)
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all duration-300 ${
              isActive
                ? "text-accent bg-accent/10"
                : "text-white/60 hover:text-white hover:bg-white/[0.05]"
            }`}
          >
            {link.name}
          </a>
        )
      })}
    </nav>
  )
}

export default Navbar
