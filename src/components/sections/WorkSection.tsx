"use client";

import { FiCalendar, FiMapPin } from "react-icons/fi";
import SectionHeader from "@/components/SectionHeader";

const WorkSection = () => {
  const experiences = [
    {
      role: "Software Developer — Backend & Full Stack",
      company: "MicroMerger",
      location: "Islamabad, Pakistan",
      period: "Jan 2025 — Present",
      points: [
        "Frappe-based backend developer on Python systems for enterprise clients, handling internal workflows, data integration, and reporting.",
        "Built and maintained Frappe-based API services with data flows for moving data between projects and importing records from Excel.",
        "Improved API response times by ~30% through MySQL schema restructuring and query optimization.",
        "Built interactive dashboards (Highcharts) visualizing operational data for UNICEF-supported public sector initiatives.",
        "Coordinated sprints and delivery tracking with developers, analysts, and project managers using Trello and Ajera in an Agile environment.",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Personal Projects",
      location: "Remote",
      period: "2024 — Present",
      points: [
        "Built Portfolio Website (Next.js + FastAPI) with live AI agent integrated with OpenAI API, deployed on Netlify and Render.",
        "Developed Document Processing Agent: FastAPI service converting unstructured PDFs/DOCX into validated JSON via agentic loop.",
        "Created E-commerce Platform (FastAPI + MySQL) following Frappe standards with product catalog, checkout, and CRM modules.",
      ],
    },
  ];

  return (
    <section
      id="work"
      className="relative w-full mt-14 xl:mt-28 2xl:mt-36 py-10 xl:py-16 2xl:py-24"
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

                <div className="glass-card-hover p-5 md:p-7">
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