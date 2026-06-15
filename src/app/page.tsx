import { Button } from "@/components/ui/button"
import { FiDownload, FiArrowDown } from "react-icons/fi"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import Chatbot from "@/components/Chatbot"
import ServicesSection from "@/components/sections/ServicesSection"
import WorkSection from "@/components/sections/WorkSection"
import ContactSection from "@/components/sections/ContactSection"

const techStack = ["Python", "FastAPI", "AI Agents", "LangGraph", "Next.js"]

const Home = () => {
  return (
    <>
      <section id="home" className="relative min-h-[calc(100vh-88px)] xl:min-h-[calc(100vh-112px)] flex flex-col">
        <div className="container mx-auto flex-1 flex flex-col justify-center py-12 xl:py-16">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-16">
            <div className="text-center xl:text-left order-2 xl:order-none flex-1 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="font-primary text-xs uppercase tracking-widest text-white/70">
                  Available for opportunities
                </span>
              </div>

              <p className="font-primary text-sm uppercase tracking-[0.25em] text-accent/80 mb-4">
                Backend & AI Developer
              </p>

              <h1 className="h1 mb-6">
                Building intelligent
                <br />
                <span className="gradient-text">systems that scale</span>
              </h1>

              <p className="text-lg text-white/60 mb-8 leading-relaxed max-w-[520px] mx-auto xl:mx-0">
                I&apos;m <span className="text-white font-medium">Uzair Riasat</span> — I design
                scalable backends and AI-powered applications with Python, FastAPI, and modern LLM frameworks.
              </p>

              <div className="flex flex-wrap justify-center xl:justify-start gap-2 mb-10">
                {techStack.map((tech) => (
                  <span key={tech} className="tag-pill">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 xl:gap-6">
                <a href="/Assets/Uzair_Riasat_Resume.pdf" download="Uzair_Riasat_Resume">
                  <Button
                    variant="default"
                    size="lg"
                    className="flex items-center gap-2 shadow-glow-sm"
                  >
                    <span>Download CV</span>
                    <FiDownload className="text-lg" />
                  </Button>
                </a>

                <a href="#work">
                  <Button
                    variant="outline"
                    size="lg"
                    className="flex items-center gap-2"
                  >
                    View my work
                  </Button>
                </a>
              </div>

              <div className="mt-10">
                <Socials
                  containerStyles="flex gap-3 justify-center xl:justify-start"
                  iconStyles="w-10 h-10 glass-card flex justify-center items-center text-white/60 text-sm hover:text-accent hover:border-accent/40 transition-all duration-300"
                />
              </div>
            </div>

            <div className="order-1 xl:order-none flex-shrink-0">
              <Photo />
            </div>
          </div>
        </div>

        <div className="container mx-auto pb-8">
          <Stats />
        </div>

        <a
          href="#services"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden xl:flex flex-col items-center gap-2 text-white/30 hover:text-accent transition-colors animate-bounce"
          aria-label="Scroll to services"
        >
          <FiArrowDown className="text-xl" />
        </a>

        <Chatbot />
      </section>

      <ServicesSection />
      <WorkSection />
      <ContactSection />
    </>
  )
}

export default Home
