"use client";

import { FiCalendar, FiMapPin } from "react-icons/fi";
import SectionHeader from "@/components/SectionHeader";

const WorkSection = () => {
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
      role: "AI Agent Developer",
      company: "Personal Projects",
      location: "Remote",
      period: "2023 — Present",
      points: [
        "Built LLM-powered agents using LangGraph and OpenAI APIs.",
        "Developed Retrieval-Augmented Generation (RAG) pipelines for document-based Q&A systems.",
        "Integrated AI agents into backend APIs for intelligent automation tools.",
      ],
    },
  ];

  return (
    <section
      id="work"
      className="relative w-full mt-32 xl:mt-36 py-16 xl:py-24 min-h-[calc(100vh-88px)] xl:min-h-[calc(100vh-112px)] scroll-mt-[112px]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="02 — Experience"
          title="My Work"
          description="Professional experience building backend systems, APIs, and AI-powered applications."
        />

        <div className="relative">
          <div className="absolute left-[19px] xl:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent/50 via-accent/20 to-transparent hidden sm:block" />

          <div className="space-y-6 md:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative sm:pl-14 xl:pl-16">
                <div className="absolute left-0 top-6 md:top-8 hidden sm:flex w-10 h-10 xl:w-12 xl:h-12 items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-glow-sm ring-4 ring-accent/20" />
                </div>

                <div className="glass-card-hover p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-5">
                    <div>
                      <p className="font-primary text-xs uppercase tracking-widest text-accent/70 mb-1">
                        {exp.company}
                      </p>
                      <h3 className="h3 text-white">{exp.role}</h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-sm text-white/40">
                      <span className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-full whitespace-nowrap text-xs md:text-sm">
                        <FiCalendar className="text-accent/70 flex-shrink-0" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-full whitespace-nowrap text-xs md:text-sm">
                        <FiMapPin className="text-accent/70 flex-shrink-0" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-white/60 text-sm leading-relaxed">
                        <span className="text-accent mt-1.5 flex-shrink-0">▸</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
