"use client";

import { FiCode, FiCpu, FiDatabase, FiZap } from "react-icons/fi";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import TiltCard from "@/components/TiltCard";
import MotionSection from "@/components/MotionSection";
import { scrollToSection } from "@/lib/nav-links";

const ServicesSection = () => {
  const services = [
    {
      icon: FiCode,
      title: "Full-Stack Web Development",
      description:
        "Complete applications from UI to deployment. Python and FastAPI backends integrated with Next.js frontends. Full ownership of architecture, code review, and delivery cycle.",
      technologies: ["Python", "FastAPI", "Next.js", "TypeScript", "MySQL"],
    },
    {
      icon: FiCpu,
      title: "AI & LLM Integration",
      description:
        "Intelligent applications powered by OpenAI and GPT-4o. Agentic workflows, document processing, and AI-enhanced APIs. Experienced with prompt engineering and production AI deployment.",
      technologies: ["OpenAI API", "GPT-4o", "Prompt Engineering", "Agentic AI"],
    },
    {
      icon: FiDatabase,
      title: "Enterprise Systems & ERP",
      description:
        "Frappe and ERPNext customization, API services, and business workflow automation. Database optimization, reporting dashboards, and cross-functional team coordination.",
      technologies: ["Frappe", "ERPNext", "MySQL Optimization", "Highcharts"],
    },
    {
      icon: FiZap,
      title: "Deployment & DevOps",
      description:
        "Production-ready deployments on Render and Netlify. Git workflows, code review practices, and Agile coordination with development teams using Trello and Jira.",
      technologies: ["Render", "Netlify", "Git", "Agile/Trello"],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full py-8 xl:py-10"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <MotionSection>
          <SectionHeader
            label="01 — Services"
            title="What I Do"
            description="Leveraging modern technologies to build scalable backend systems and intelligent AI-powered solutions."
            className="mb-6 xl:mb-8"
          />
        </MotionSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 perspective-scene">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <MotionSection key={index} delay={index * 0.08}>
                <TiltCard className="h-full">
                  <div className="p-4 md:p-5 group relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/20 transition-colors" />

                    <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
                      <motion.div
                        className="w-10 h-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-3"
                        whileHover={{ rotateY: 180, scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="text-xl text-accent" />
                      </motion.div>

                      <h3 className="h3 mb-2 group-hover:text-accent transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-white/50 text-sm mb-3 leading-relaxed">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, i) => (
                          <span key={i} className="tag-pill text-[11px]">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </MotionSection>
            );
          })}
        </div>

        <div className="text-center mt-6 md:mt-8">
          <p className="text-white/40 text-sm md:text-base">
            Interested in working together?{" "}
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="text-accent font-medium hover:underline inline"
            >
              Let&apos;s talk →
            </button>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
