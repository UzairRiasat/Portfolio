"use client"

import { Button } from "@/components/ui/button"
import { FiDownload, FiArrowDown } from "react-icons/fi"
import { motion } from "framer-motion"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import ServicesSection from "@/components/sections/ServicesSection"
import WorkSection from "@/components/sections/WorkSection"
import ContactSection from "@/components/sections/ContactSection"
import { scrollToSection } from "@/lib/nav-links"

const techStack = ["Python", "FastAPI", "Frappe", "Next.js", "MySQL", "OpenAI API"]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="relative flex flex-col overflow-hidden"
        style={{ minHeight: "calc(100dvh - var(--header-h))" }}
      >
        <div className="container mx-auto flex-1 flex flex-col justify-center py-8 xl:py-10">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-10 xl:gap-14">

            {/* Text side */}
            <div className="text-center xl:text-left order-2 xl:order-none flex-1 min-w-0 relative z-10">
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-card mb-5"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
                </span>
                <span className="font-primary text-xs uppercase tracking-widest text-white/70">
                  Available for work
                </span>
              </motion.div>

              <motion.p
                custom={1}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="font-primary text-xs xl:text-sm uppercase tracking-[0.3em] text-accent mb-3"
              >
                Software Engineer · Backend & Full-Stack
              </motion.p>

              <motion.h1
                custom={2}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="h1 mb-5"
              >
                <span className="block tracking-tight">Uzair<span className="text-accent">.</span></span>
                <span className="block mt-2 gradient-text text-shimmer">
                  APIs, ERP, and AI systems that ship
                </span>
              </motion.h1>

              <motion.p
                custom={3}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="text-sm xl:text-base text-white/55 mb-6 leading-relaxed max-w-[520px] mx-auto xl:mx-0"
              >
                Python/FastAPI and Frappe backends, AI-powered features with OpenAI, and Next.js UIs when the product needs a front end — from API design to deploy.
              </motion.p>

              <motion.div
                custom={4}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="flex flex-wrap justify-center xl:justify-start gap-2 mb-7"
              >
                {techStack.map((tech, i) => (
                  <motion.span
                    key={tech}
                    className="tag-pill"
                    whileHover={{ y: -4, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    style={{ animationDelay: `${i * 0.05}s` }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                custom={5}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-3 xl:gap-4"
              >
                <a href="/Assets/Uzair_Riasat_Resume.pdf" download="Uzair_Riasat_Resume">
                  <Button
                    variant="default"
                    size="lg"
                    className="flex items-center gap-2 shadow-glow hover:scale-[1.03] active:scale-[0.98] transition-transform"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-lg" />
                  </Button>
                </a>
                <Button
                  variant="outline"
                  size="lg"
                  type="button"
                  onClick={() => scrollToSection("work")}
                  className="hover:scale-[1.03] active:scale-[0.98] transition-transform"
                >
                  View work
                </Button>
              </motion.div>

              <motion.div
                custom={6}
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="mt-6 xl:mt-8"
              >
                <Socials
                  containerStyles="flex gap-3 justify-center xl:justify-start"
                  iconStyles="w-10 h-10 glass-card flex justify-center items-center text-white/60 text-sm hover:text-accent hover:border-accent/40 hover:-translate-y-1 transition-all duration-300"
                />
              </motion.div>
            </div>

            {/* 3D Photo */}
            <motion.div
              className="order-1 xl:order-none flex-shrink-0 relative z-10"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              <Photo />
            </motion.div>
          </div>

          <motion.div
            className="mt-10 xl:mt-14"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Stats />
          </motion.div>
        </div>

        <button
          onClick={() => scrollToSection("services")}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center gap-2 text-white/30 hover:text-accent transition-colors group"
          aria-label="Scroll to services"
          type="button"
        >
          <span className="font-primary text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <FiArrowDown className="text-xl group-hover:translate-y-1 transition-transform animate-bounce" />
        </button>
      </section>

      <ServicesSection />
      <WorkSection />
      <ContactSection />
    </>
  )
}

export default Home
