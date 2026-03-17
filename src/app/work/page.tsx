"use client";

import { FiCalendar, FiBriefcase } from "react-icons/fi";

const Work = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "MicroMerger",
      location: "Islamabad, Pakistan",
      period: "2025 — Present",
      points: [
        "Develop scalable backend APIs using Python and FastAPI for ERP and web applications.",
        "Design MySQL database schemas and optimize queries for performance and reliability.",
        "Contribute to ERP system architecture improving automation and internal workflows.",
      ],
    },
    {
      role: "AI Agent Developer — Personal Projects",
      company: "Independent",
      location: "Remote",
      period: "2023 — Present",
      points: [
        "Built LLM-powered agents using LangGraph and OpenAI APIs.",
        "Developed Retrieval-Augmented Generation (RAG) pipelines for document-based Q&A systems.",
        "Integrated AI agents into backend APIs for intelligent automation tools.",
      ],
    },
  ];

  const projects = [
    {
      title: "AI Support Agent for Knowledge Retrieval",
      description:
        "LangGraph-based assistant that retrieves answers from embedded documents using vector search and OpenAI models.",
      tech: ["LangGraph", "OpenAI", "Qdrant", "RAG"],
      github: "https://github.com/yourusername/ai-support-agent",
      demo: "",
    },
    {
      title: "FastAPI Backend for Web Applications",
      description:
        "Production-ready backend system with authentication, REST APIs, and MySQL database integration.",
      tech: ["FastAPI", "MySQL", "REST", "Docker"],
      github: "https://github.com/yourusername/api-backend",
      demo: "",
    },
    {
      title: "AI Portfolio Assistant",
      description:
        "An embedded AI assistant inside a developer portfolio capable of answering questions about skills and projects.",
      tech: ["Next.js", "OpenAI", "FastAPI", "RAG"],
      github: "https://github.com/yourusername/portfolio-assistant",
      demo: "",
    },
  ];

  return (
    <section className="h-full py-12 xl:py-24">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center xl:text-left mb-12 xl:mb-16">
          <h2 className="h2 text-accent">My Work</h2>
          <p className="text-white/80 max-w-[600px] mx-auto xl:mx-0">
            My professional experience building backend systems, APIs, and AI-powered applications.
          </p>
        </div>

        {/* Experience */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
            <FiBriefcase className="text-accent" />
            Professional Experience
          </h3>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-secondary/30 p-6 rounded-xl border border-white/10 hover:border-accent/40 transition-all duration-300"
              >
                <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between mb-4">
                  <h4 className="text-xl font-semibold text-accent">
                    {exp.role} — {exp.company}
                  </h4>

                  <div className="flex items-center gap-4 text-sm text-white/60 mt-2 xl:mt-0">
                    <span className="flex items-center gap-1">
                      <FiCalendar />
                      {exp.period}
                    </span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="list-disc list-inside space-y-2 text-white/80">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;