#!/usr/bin/env python3
"""Generate date-aligned resume PDFs for Uzair Riasat."""

from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.lib.colors import HexColor, black, white
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    HRFlowable,
    KeepTogether,
)
from reportlab.lib.enums import TA_CENTER, TA_LEFT

ACCENT = HexColor("#0d9488")
MUTED = HexColor("#444444")
DARK = HexColor("#111111")


def styles():
    return {
        "name": ParagraphStyle(
            "Name",
            fontName="Helvetica-Bold",
            fontSize=18,
            leading=22,
            textColor=DARK,
            alignment=TA_CENTER,
            spaceAfter=2,
        ),
        "headline": ParagraphStyle(
            "Headline",
            fontName="Helvetica",
            fontSize=9.5,
            leading=12,
            textColor=ACCENT,
            alignment=TA_CENTER,
            spaceAfter=4,
        ),
        "contact": ParagraphStyle(
            "Contact",
            fontName="Helvetica",
            fontSize=8,
            leading=11,
            textColor=MUTED,
            alignment=TA_CENTER,
            spaceAfter=8,
        ),
        "summary": ParagraphStyle(
            "Summary",
            fontName="Helvetica",
            fontSize=9,
            leading=12,
            textColor=DARK,
            alignment=TA_LEFT,
            spaceAfter=8,
        ),
        "section": ParagraphStyle(
            "Section",
            fontName="Helvetica-Bold",
            fontSize=10,
            leading=12,
            textColor=DARK,
            spaceBefore=6,
            spaceAfter=4,
        ),
        "job_title": ParagraphStyle(
            "JobTitle",
            fontName="Helvetica-Bold",
            fontSize=9.5,
            leading=12,
            textColor=DARK,
            spaceBefore=4,
        ),
        "job_meta": ParagraphStyle(
            "JobMeta",
            fontName="Helvetica",
            fontSize=8.5,
            leading=11,
            textColor=MUTED,
            spaceAfter=2,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            fontName="Helvetica",
            fontSize=8.5,
            leading=11.5,
            textColor=DARK,
            leftIndent=12,
            bulletIndent=0,
            spaceAfter=1.5,
        ),
        "skill": ParagraphStyle(
            "Skill",
            fontName="Helvetica",
            fontSize=8.5,
            leading=11.5,
            textColor=DARK,
            spaceAfter=2,
        ),
        "edu": ParagraphStyle(
            "Edu",
            fontName="Helvetica",
            fontSize=8.5,
            leading=11.5,
            textColor=DARK,
            spaceAfter=2,
        ),
    }


def section_rule():
    return HRFlowable(
        width="100%",
        thickness=0.8,
        color=ACCENT,
        spaceBefore=1,
        spaceAfter=4,
    )


def add_bullets(story, s, points):
    for p in points:
        story.append(Paragraph(f"• {p}", s["bullet"]))


def build_fullstack(path):
    s = styles()
    doc = SimpleDocTemplate(
        path,
        pagesize=letter,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.5 * inch,
    )
    story = []

    story.append(Paragraph("Uzair Riasat", s["name"]))
    story.append(
        Paragraph(
            "Software Engineer @ MicroMerger | Backend &amp; Full-Stack · Python · FastAPI · AI",
            s["headline"],
        )
    )
    story.append(
        Paragraph(
            "Islamabad, Pakistan · +92 301 8759589 · uzairriasat510@gmail.com · "
            "linkedin.com/in/uzair-riasat-b714002a3 · uzairriasat.netlify.app · github.com/UzairRiasat",
            s["contact"],
        )
    )
    story.append(
        Paragraph(
            "Full-stack web developer building complete applications — Python backends, JavaScript frontends, "
            "and Frappe systems — at MicroMerger and independently. Owns the full delivery cycle: UI implementation, "
            "API design, and code review, coordinated with cross-functional teams via Trello and Ajera.",
            s["summary"],
        )
    )

    story.append(Paragraph("SKILLS", s["section"]))
    story.append(section_rule())
    story.append(
        Paragraph(
            "<b>Backend:</b> Python, FastAPI, Frappe / ERPNext, ERP Systems, MySQL, API Architecture",
            s["skill"],
        )
    )
    story.append(
        Paragraph("<b>Frontend:</b> JavaScript, Next.js, TypeScript, React", s["skill"])
    )
    story.append(
        Paragraph(
            "<b>Full-Stack Delivery:</b> Git, Code Review, Postman",
            s["skill"],
        )
    )
    story.append(
        Paragraph(
            "<b>AI / LLM Integration:</b> OpenAI API, Prompt Engineering, GPT-4o, LangGraph",
            s["skill"],
        )
    )
    story.append(
        Paragraph(
            "<b>AI Dev Tools:</b> Cursor, GitHub Copilot, Claude",
            s["skill"],
        )
    )
    story.append(
        Paragraph(
            "<b>Deployment &amp; Tooling:</b> Render, Netlify, Trello, Jira, GitHub Actions",
            s["skill"],
        )
    )

    story.append(Paragraph("EXPERIENCE", s["section"]))
    story.append(section_rule())

    story.append(
        Paragraph(
            "Software Engineer · MicroMerger (Pvt.) Ltd.",
            s["job_title"],
        )
    )
    story.append(Paragraph("Islamabad, Pakistan · Jul 2025 – Present", s["job_meta"]))
    add_bullets(
        story,
        s,
        [
            "Backend and full-stack developer on Frappe-based Python systems for enterprise clients — internal workflows, data integration, and reporting.",
            "Built and maintained Frappe-based API services and data flows to move data between projects and import Excel records programmatically.",
            "~30% faster API response times — restructured MySQL schemas and rewrote query logic.",
            "Built interactive dashboards (Highcharts) for operational and program data, including UNICEF-supported public sector monitoring.",
            "Modified modules such as accounting to match client requirements, with custom workflows and reporting.",
            "Coordinated sprints and delivery tracking across developers, analysts, and PMs using Trello and Ajera.",
        ],
    )

    story.append(
        Paragraph("Web Development Intern · IBDA", s["job_title"])
    )
    story.append(Paragraph("Islamabad, Pakistan · Remote · Aug 2024 – Dec 2024", s["job_meta"]))
    add_bullets(
        story,
        s,
        [
            "Front-end web development internship using JavaScript, React, and Next.js. Built responsive UI and collaborated with developers on custom software delivery.",
        ],
    )

    story.append(
        Paragraph(
            "Cloud Applied Generative AI Engineer · PIAIC",
            s["job_title"],
        )
    )
    story.append(Paragraph("Islamabad, Pakistan · Feb 2023 – Dec 2024", s["job_meta"]))
    add_bullets(
        story,
        s,
        [
            "Built and deployed AI agents with the OpenAI API on real document and workflow use cases (including LangGraph for multi-step flows).",
            "Improved answer reliability with RAG pipelines that ground LLM responses in structured knowledge.",
            "Shipped two publicly deployed tools — a live portfolio AI assistant and a document extraction API.",
        ],
    )

    story.append(Paragraph("PROJECTS", s["section"]))
    story.append(section_rule())
    story.append(
        Paragraph(
            "<b>Portfolio Website</b> · Next.js · FastAPI · OpenAI API · Netlify · Render · 2024",
            s["job_title"],
        )
    )
    story.append(
        Paragraph(
            "Full-stack portfolio with a live AI agent — Next.js frontend and FastAPI backend for contact form and agent logic.",
            s["bullet"],
        )
    )
    story.append(
        Paragraph(
            "<b>Document Processing Agent</b> · FastAPI · OpenAI API · Render · 2026",
            s["job_title"],
        )
    )
    story.append(
        Paragraph(
            "Converts unstructured PDFs/DOCX into validated JSON via Extractor → Validator → Clarifier agentic loop.",
            s["bullet"],
        )
    )
    story.append(
        Paragraph(
            "<b>E-commerce Platform</b> · Python · FastAPI · MySQL · 2025",
            s["job_title"],
        )
    )
    story.append(
        Paragraph(
            "Structured learning project to Frappe standards — product catalog, cart/checkout, order tracking, and CRM.",
            s["bullet"],
        )
    )

    story.append(Paragraph("EDUCATION &amp; CERTIFICATIONS", s["section"]))
    story.append(section_rule())
    story.append(
        Paragraph(
            "<b>BSc Business &amp; Information Technology</b> · Virtual University of Pakistan · 2023 – Present",
            s["edu"],
        )
    )
    story.append(
        Paragraph(
            "<b>Computer Software Engineering</b> · PIAIC · Sep 2023 – Present",
            s["edu"],
        )
    )
    story.append(
        Paragraph(
            "<b>Certified Cloud Applied Generative AI Engineer</b> · PIAIC · 2023",
            s["edu"],
        )
    )

    doc.build(story)
    print(f"Wrote {path}")


def build_backend(path):
    s = styles()
    doc = SimpleDocTemplate(
        path,
        pagesize=letter,
        leftMargin=0.65 * inch,
        rightMargin=0.65 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.5 * inch,
    )
    story = []

    story.append(Paragraph("Uzair Riasat", s["name"]))
    story.append(
        Paragraph(
            "Software Engineer @ MicroMerger | Backend &amp; Full-Stack · Python · FastAPI · AI",
            s["headline"],
        )
    )
    story.append(
        Paragraph(
            "Islamabad, Pakistan · +92 301 8759589 · uzairriasat510@gmail.com · LinkedIn · Portfolio · GitHub",
            s["contact"],
        )
    )
    story.append(
        Paragraph(
            "Backend and AI engineer with production experience in Python and FastAPI — shipping APIs, "
            "ERP systems, and LLM-powered tools at MicroMerger and through PIAIC. Achieved ~30% reduction in API "
            "response times through schema restructuring and query optimisation. Built AI agents and RAG pipelines "
            "with the OpenAI API (LangGraph for multi-step flows where needed). Full delivery cycle: design, code "
            "review, CI/CD, testing, and production.",
            s["summary"],
        )
    )

    story.append(Paragraph("SKILLS", s["section"]))
    story.append(section_rule())
    story.append(
        Paragraph(
            "<b>Backend:</b> Python, FastAPI, REST API Design, ERP Systems, MySQL, API Architecture",
            s["skill"],
        )
    )
    story.append(
        Paragraph(
            "<b>AI / LLM:</b> OpenAI API, AI Agents, RAG Pipelines, Prompt Engineering, GPT-4o, LangGraph",
            s["skill"],
        )
    )
    story.append(
        Paragraph(
            "<b>Frontend:</b> React, Next.js, TypeScript, Tailwind CSS",
            s["skill"],
        )
    )
    story.append(
        Paragraph(
            "<b>Engineering:</b> Git, Code Review, Unit Testing, CI/CD (GitHub Actions)",
            s["skill"],
        )
    )
    story.append(
        Paragraph(
            "<b>Tooling &amp; Deploy:</b> Trello, Jira, Postman, Render, Netlify, GitHub Actions",
            s["skill"],
        )
    )

    story.append(Paragraph("EXPERIENCE", s["section"]))
    story.append(section_rule())

    story.append(
        Paragraph(
            "Software Engineer · MicroMerger (Pvt.) Ltd.",
            s["job_title"],
        )
    )
    story.append(Paragraph("Islamabad, Pakistan · Jul 2025 – Present", s["job_meta"]))
    add_bullets(
        story,
        s,
        [
            "~30% faster API response times — restructured MySQL schemas and rewrote query logic across ERP and web application endpoints.",
            "Shipped production-grade FastAPI / Frappe services covering inventory, order processing, and internal workflows under code review.",
            "Automated internal deployment workflows using GitHub Actions, reducing manual release steps and catching regressions before production.",
            "Coordinated sprints and delivery tracking across developers, analysts, and project managers using Trello and Ajera.",
        ],
    )

    story.append(Paragraph("Web Development Intern · IBDA", s["job_title"]))
    story.append(Paragraph("Islamabad, Pakistan · Remote · Aug 2024 – Dec 2024", s["job_meta"]))
    add_bullets(
        story,
        s,
        [
            "Front-end web development internship using JavaScript, React, and Next.js. Built responsive UI and collaborated with developers on custom software delivery.",
        ],
    )

    story.append(
        Paragraph(
            "Cloud Applied Generative AI Engineer · PIAIC",
            s["job_title"],
        )
    )
    story.append(Paragraph("Islamabad, Pakistan · Feb 2023 – Dec 2024", s["job_meta"]))
    add_bullets(
        story,
        s,
        [
            "Built and deployed AI agents with the OpenAI API on real document and workflow use cases (including LangGraph for multi-step flows).",
            "Improved answer reliability with RAG pipelines that ground LLM responses in structured knowledge.",
            "Shipped two publicly deployed tools — a live portfolio AI assistant and a document extraction API.",
        ],
    )

    story.append(Paragraph("PROJECTS", s["section"]))
    story.append(section_rule())
    story.append(
        Paragraph(
            "<b>Document Processing Agent</b> · FastAPI · OpenAI API · Render · GitHub Actions · 2026",
            s["job_title"],
        )
    )
    story.append(
        Paragraph(
            "Converts unstructured PDFs/DOCX into validated JSON via Extractor → Validator → Clarifier loop. CI/CD and keep-alive workflows on Render.",
            s["bullet"],
        )
    )
    story.append(
        Paragraph(
            "<b>Portfolio AI Assistant</b> · Next.js · TypeScript · OpenAI API · Netlify · 2024",
            s["job_title"],
        )
    )
    story.append(
        Paragraph(
            "Live AI assistant for visitor queries — prompt layer, conversation memory, and frontend as one integrated system.",
            s["bullet"],
        )
    )
    story.append(
        Paragraph(
            "<b>E-commerce ERP Backend</b> · Python · FastAPI · MySQL · 2025",
            s["job_title"],
        )
    )
    story.append(
        Paragraph(
            "Inventory, orders, and CRM modules with normalised schemas and independently scalable architecture.",
            s["bullet"],
        )
    )

    story.append(Paragraph("EDUCATION &amp; CERTIFICATIONS", s["section"]))
    story.append(section_rule())
    story.append(
        Paragraph(
            "<b>BSc Business &amp; Information Technology</b> · Virtual University of Pakistan · 2023 – Present",
            s["edu"],
        )
    )
    story.append(
        Paragraph(
            "<b>Computer Software Engineering</b> · PIAIC · Sep 2023 – Present",
            s["edu"],
        )
    )
    story.append(
        Paragraph(
            "<b>Agentic AI Development</b> · PIAIC certification",
            s["edu"],
        )
    )

    doc.build(story)
    print(f"Wrote {path}")


if __name__ == "__main__":
    fullstack = "/home/u.riasat/Downloads/Uzair_Riasat_Resume.pdf"
    backend = "/home/u.riasat/Downloads/Uzair_Riasat_Resume (1).pdf"
    fullstack_named = "/home/u.riasat/Downloads/Uzair_Riasat_Resume_FullStack.pdf"
    backend_named = "/home/u.riasat/Downloads/Uzair_Riasat_Resume_Backend.pdf"
    portfolio_fs = "/home/u.riasat/Documents/MM Personal/test port/portfolio cursor/Portfolio/public/Assets/Uzair_Riasat_Resume.pdf"
    portfolio_be = "/home/u.riasat/Documents/MM Personal/test port/portfolio cursor/Portfolio/public/Assets/Uzair_Riasat_Resume_Backend.pdf"

    build_fullstack(fullstack)
    build_backend(backend)
    build_fullstack(fullstack_named)
    build_backend(backend_named)
    build_fullstack(portfolio_fs)
    build_backend(portfolio_be)
