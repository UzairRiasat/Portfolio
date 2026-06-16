"use client";

import { FiCode, FiCpu, FiDatabase, FiZap } from "react-icons/fi";
import SectionHeader from "@/components/SectionHeader";
import { scrollToSection } from "@/lib/nav-links";

const ServicesSection = () => {
  const services = [
    {
      icon: FiCode,
      title: "Backend Development",
      description:
        "Scalable and secure backend systems built with Python, FastAPI, and MySQL. Designed for performance, modular architecture, and production-ready APIs.",
      technologies: ["Python", "FastAPI", "MySQL", "Frappe"],
    },
    {
      icon: FiCpu,
      title: "AI Agent Development",
      description:
        "Intelligent agents powered by LangGraph and OpenAI. Specialized in RAG pipelines, vector retrieval, and multi-step AI workflows for real-world automation.",
      technologies: ["LangGraph", "OpenAI SDK", "RAG", "Retrieval"],
    },
    {
      icon: FiDatabase,
      title: "API Design & Integration",
      description:
        "RESTful API design and seamless integration with frontend systems. Focus on authentication, OpenAPI documentation, and reliable data flow.",
      technologies: ["REST APIs", "FastAPI", "MySQL", "Postman"],
    },
    {
      icon: FiZap,
      title: "Generative AI Solutions",
      description:
        "End-to-end generative AI applications from concept to deployment. Experience with GPT-4, prompt engineering, and AI-powered product features.",
      technologies: ["GPT-4", "Prompt Engineering", "Cursor", "Claude"],
    },
  ];

  return (
    <section
      id="services"
      className="relative w-full mt-0 xl:mt-14 2xl:mt-20 py-10 xl:py-16 2xl:py-24 scroll-mt-[112px]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-[calc(100dvh-var(--header-h))] flex flex-col justify-center py-6 xl:py-8">
          <SectionHeader
            label="01 — Services"
            title="What I Do"
            description="Leveraging modern technologies to build scalable backend systems and intelligent AI-powered solutions."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="glass-card-hover p-5 md:p-7 group relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-accent/10 transition-colors" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-5 group-hover:shadow-glow-sm transition-shadow">
                    <Icon className="text-2xl text-accent" />
                  </div>

                  <h3 className="h3 mb-3 group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-white/50 text-sm mb-5 leading-relaxed">
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
            );
          })}
          </div>
        </div>

        <div className="text-center mt-10 md:mt-12">
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