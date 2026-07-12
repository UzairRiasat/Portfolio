"use client"

import { Button } from "@/components/ui/button"
import { FiDownload, FiArrowDown } from "react-icons/fi"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import ServicesSection from "@/components/sections/ServicesSection"
import WorkSection from "@/components/sections/WorkSection"
import ContactSection from "@/components/sections/ContactSection"
import { scrollToSection } from "@/lib/nav-links"

const techStack = ["Python", "FastAPI", "Next.js", "MySQL", "OpenAI API", "Frappe"]

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative flex flex-col"
        style={{ minHeight: "calc(90dvh - var(--header-h))" }}
      >
        <div className="container mx-auto flex-1 flex flex-col justify-between py-4 xl:py-6">

          {/* ── Main hero row ─────────────────────────────────── */}
          <div className="flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-10">

            {/* Text side */}
            <div className="text-center xl:text-left order-2 xl:order-none flex-1 min-w-0">

              {/* Available badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-3 xl:mb-4">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
                <span className="font-primary text-xs uppercase tracking-widest text-white/70 whitespace-nowrap">
                  Available
                </span>
              </div>

              {/* Role label */}
              <p className="font-primary text-xs xl:text-sm uppercase tracking-[0.25em] text-accent/80 mb-2 xl:mb-3">
                Full Stack Web Developer
              </p>

              {/* Headline — uses clamp() in globals.css so it scales with viewport */}
              <h1 className="h1 mb-3 xl:mb-4">
                Building complete
                <br />
                <span className="gradient-text">full-stack applications</span>
              </h1>

              {/* Bio */}
              <p className="text-sm xl:text-base text-white/60 mb-4 xl:mb-5 leading-relaxed max-w-[500px] mx-auto xl:mx-0">
                I&apos;m <span className="text-white font-medium">Uzair Riasat</span> — I build complete applications with Python backends, JavaScript frontends, and Frappe systems. Full-stack delivery from UI to API design and deployment.
              </p>

              {/* Tech pills */}
              <div className="flex flex-wrap justify-center xl:justify-start gap-2 mb-4 xl:mb-5">
                {techStack.map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 xl:gap-4">
                <a href="/Assets/Uzair_Riasat_Resume.pdf" download="Uzair_Riasat_Resume">
                  <Button variant="default" size="lg" className="flex items-center gap-2 shadow-glow-sm">
                    <span>Download CV</span>
                    <FiDownload className="text-lg" />
                  </Button>
                </a>
              </div>

              {/* Socials */}
              <div className="mt-4 xl:mt-5">
                <Socials
                  containerStyles="flex gap-3 justify-center xl:justify-start"
                  iconStyles="w-9 h-9 xl:w-10 xl:h-10 glass-card flex justify-center items-center text-white/60 text-sm hover:text-accent hover:border-accent/40 transition-all duration-300"
                />
              </div>
            </div>

            {/* Photo side */}
            <div className="order-1 xl:order-none flex-shrink-0">
              <Photo />
            </div>
          </div>

          {/* ── Stats row — always below hero content, never overlaps ── */}
          <div className="mt-2 xl:mt-4">
            <Stats />
          </div>
        </div>

        {/* Scroll hint — only visible when there's room */}
        <button
          onClick={() => scrollToSection("services")}
          className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center gap-1 text-white/30 hover:text-accent transition-colors animate-bounce"
          aria-label="Scroll to services"
          type="button"
        >
          <FiArrowDown className="text-xl" />
        </button>
      </section>

      <ServicesSection />
      <WorkSection />
      <ContactSection />
    </>
  )
}

export default Home