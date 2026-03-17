"use client";

import { FiCode, FiCpu, FiDatabase, FiZap } from "react-icons/fi";

const Services = () => {
  const services = [
    {
      icon: <FiCode className="text-4xl text-accent" />,
      title: "Backend Development",
      description:
        "Scalable and secure backend systems built with Python, FastAPI, and MySQL. Designed for performance, modular architecture, and production-ready APIs.",
      technologies: ["Python", "FastAPI", "MySQL", "Frappe"],
      projectLink: "/projects/erp-backend",
    },
    {
      icon: <FiCpu className="text-4xl text-accent" />,
      title: "AI Agent Development",
      description:
        "Intelligent agents powered by LangGraph and OpenAI. Specialized in RAG pipelines, vector retrieval, and multi-step AI workflows for real-world automation.",
      technologies: ["LangGraph", "OpenAI SDK", "RAG", "Retrieval Systems"],
      projectLink: "/projects/ai-support-agent",
    },
    {
      icon: <FiDatabase className="text-4xl text-accent" />,
      title: "API Design & Integration",
      description:
        "RESTful API design and seamless integration with frontend systems. Focus on authentication, OpenAPI documentation, and reliable data flow.",
      technologies: ["REST APIs", "FastAPI", "MySQL", "Postman"],
      projectLink: "/projects/api-systems",
    },
    {
      icon: <FiZap className="text-4xl text-accent" />,
      title: "Generative AI Solutions",
      description:
        "End-to-end generative AI applications from concept to deployment. Experience with GPT-4, prompt engineering, and AI-powered product features.",
      technologies: ["GPT-4", "Prompt Engineering", "Cursor", "Claude"],
      projectLink: "/projects/generative-ai",
    },
  ];

  return (
    <section className="h-full py-12 xl:py-24">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center xl:text-left mb-12 xl:mb-16">
          <h2 className="h2 text-accent">My Services</h2>
          <p className="text-white/80 max-w-[600px] mx-auto xl:mx-0">
            Leveraging modern technologies to build scalable backend systems
            and intelligent AI-powered solutions.
          </p>
        </div>

        {/* Services*/}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-secondary p-6 rounded-xl border border-white/10 hover:border-accent/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="mb-4">{service.icon}</div>

                <h3 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/70 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {service.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-accent/10 text-accent border border-accent/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connect */}
        <div className="text-center mt-16">
          <p className="text-white/60">
            Interested in working together?{" "}
            <a
              href="/contact"
              className="text-accent underline hover:no-underline"
            >
              Let’s talk
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;