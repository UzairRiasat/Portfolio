import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"
import Socials from "@/components/Socials"
import Photo from "@/components/Photo"
import Stats from "@/components/Stats"
import Chatbot from "@/components/Chatbot"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">

          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">

            {/* Role */}
            <span className="text-xl text-accent">Backend & AI Developer</span>

            {/* Heading */}
            <h1 className="h1 mb-6">
              Hello I&apos;m <br /> <span className="text-accent">Uzair Riasat</span>
            </h1>

            {/* Description */}
            <p className="max-w-[500px] mb-6 text-white/80">
              I design and build scalable backend systems and AI-powered
              applications using Python, FastAPI, and modern LLM frameworks.
              My focus is creating intelligent automation, AI agents, and
              production-ready APIs.
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap justify-center xl:justify-start gap-3 mb-9 text-sm text-white/70">
              <span className="px-3 py-1 border border-accent/40 rounded-full">Python</span>
              <span className="px-3 py-1 border border-accent/40 rounded-full">FastAPI</span>
              <span className="px-3 py-1 border border-accent/40 rounded-full">AI Agents</span>
              <span className="px-3 py-1 border border-accent/40 rounded-full">LangGraph</span>
              <span className="px-3 py-1 border border-accent/40 rounded-full">Next.js</span>
            </div>

            <div className="flex flex-col xl:flex-row items-center gap-8">
              {/* Download CV */}
              <a href="/Assets/Uzair_Riasat_Resume.pdf" download="Uzair_Riasat_Resume">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>

              {/* Social*/}
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>

            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ml-4 sm:ml-0">
            <Photo />
          </div>

        </div>
      </div>      
      <div className="pb-12">
        <Stats/>   
      </div>
      <Chatbot />

    </section>
  )
}

export default Home
