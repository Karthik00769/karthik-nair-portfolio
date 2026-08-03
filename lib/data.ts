// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Sourced directly from Karthik Nair's resume (Karthik_Nair_Master_Resume.pdf).
// Edit copy for clarity only — never change dates, tech, or claims.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Karthik Nair",
  title: "Software Engineer",
  tagline: "Backend • Cloud • AI-Powered Applications",
  location: "Chennai, India",
  email: "karthiknair1610@gmail.com",
  links: {
    linkedin: "https://linkedin.com/in/karthik-nair-a751ba2a5",
    github: "https://github.com/Karthik00769",
    devfolio: "https://devfolio.co/@Karthik1610",
    resume: "/resume.pdf",
  },
  profileImage: "/karthik_prof-preview.png",
  summary:
    "I build software products from idea to deployment, combining backend engineering, cloud infrastructure, and AI-powered workflows. My work focuses on scalable SaaS platforms, multi-tenant systems, and practical solutions to real-world problems through thoughtful system design and modern cloud technologies.",
} as const;

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  institution: "SRM Institute of Science and Technology, Ramapuram",
  period: "Aug 2023 – May 2027",
  detail: "CGPA: 9.59 / 10",
} as const;

export const languages = [
  { name: "English", level: "Full Professional" },
  { name: "Tamil", level: "Limited Working" },
  { name: "Malayalam", level: "Native" },
] as const;

export const aboutFocusAreas = [
  {
    label: "Backend Engineering",
    description:
      "Designing secure and scalable backend systems using REST APIs, authentication, RBAC, and modern database architectures.",
  },
  {
    label: "Cloud Computing",
    description:
      "Building and deploying cloud-native applications with Docker, Linux, GCP, AWS, and production deployment workflows.",
  },
  {
    label: "System Design",
    description:
      "Architecting maintainable software with scalable data models, multi-tenant architectures, and reliable backend workflows.",
  },
  {
    label: "AI Engineering",
    description:
      "Integrating LLMs, OCR, and intelligent automation into practical software products to solve real-world problems.",
  },
  {
    label: "Full-Stack Development",
    description:
      "Building responsive, production-ready web applications using Next.js, React, TypeScript, and modern frontend technologies.",
  },
  {
    label: "Continuous Learning",
    description:
      "Exploring distributed systems, cloud infrastructure, DevOps practices, and emerging technologies through hands-on projects and experimentation.",
  },
] as const;

export const engineeringPrinciples = [
  {
    label: "Build with a purpose",
    description:
      "Every project should solve a real problem. I prefer understanding the problem first and then choosing the right technologies instead of building around a technology for its own sake.",
  },
  {
    label: "Keep it simple",
    description:
      "I believe good software is easy to understand, maintain, and extend. I try to avoid unnecessary complexity and focus on writing clean, structured, and readable code.",
  },
  {
    label: "Think beyond the current feature",
    description:
      "While building new functionality, I try to design systems that can support future requirements without needing major rewrites. Scalability starts with good design decisions.",
  },
  {
    label: "Learn through building",
    description:
      "Most of what I've learned has come from building projects, breaking things, fixing them, and improving them over multiple iterations. Every project teaches me something new.",
  },
  {
    label: "Balance engineering and product thinking",
    description:
      "Writing code is only part of building software. I try to understand how people will actually use what I'm creating and design features that improve the overall experience rather than simply adding functionality.",
  },
  {
    label: "Never stop improving",
    description:
      "I rarely consider a project truly finished. Whether it's performance, architecture, UI, or developer experience, I enjoy revisiting my work, refactoring it, and making it better with every iteration.",
  },
] as const;

export type Experience = {
  role: string;
  organization: string;
  context?: string;
  period: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Backend Developer",
    organization: "Quantum Scripts",
    context: "Part-Time",
    period: "Nov 2025 – Jan 2026",
    points: [
      "Contributed to the backend development of an AI-powered subtitle generation platform, working across databases, cloud infrastructure, media-processing workflows, and production deployments.",
      "Migrated the platform's core data layer from Supabase to MongoDB to improve transactional reliability within payment and credit-management systems. Designed and implemented REST APIs supporting large video uploads, asynchronous processing pipelines, and media retrieval workflows.",
      "Worked extensively with Docker-based deployments, Linux servers, SSH-managed infrastructure, and cloud environments, gaining hands-on exposure to how modern applications are deployed and maintained in production. Integrated AWS S3 for large-scale media storage, implemented Razorpay payment and credit-management workflows, and supported live GCP deployments by troubleshooting issues affecting active users.",
    ],
  },
  {
    role: "Frontend Developer, Industrial Training",
    organization: "Integral Coach Factory (ICF), Ministry of Railways",
    period: "Jun 2025 – Jul 2025",
    points: [
      "Completed industrial training at the ICF IT Centre, gaining first-hand exposure to software development and operational workflows within a Government of India organization.",
      "Developed a complaint management portal using Next.js, React, and Tailwind CSS, focusing on responsive user interfaces and workflow-driven navigation. Beyond the project itself, the experience provided valuable insight into how technology, teams, and day-to-day operations are coordinated within a large industrial and administrative environment.",
    ],
  },
  {
    role: "Technical Member",
    organization: "CodeKrafters",
    period: "Nov 2024 – Present",
    points: [
      "Started my journey in collaborative software development through the Web3 domain, contributing to blockchain-focused projects, hackathons, workshops, and community-driven technical initiatives.",
      "Collaborated on full-stack and blockchain application prototypes involving frontend development, wallet integration, and smart contract interactions. Through participation in hackathons, technical events, peer reviews, and debugging sessions, I gained practical experience working in engineering teams while exploring emerging technologies and expanding my software development foundations.",
    ],
  },
];

export type ProjectVisual = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Chrome style for the browser-frame mockup */
  chrome: "light" | "dark";
};

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  overview: string;
  problem: string;
  decisions: string[];
  highlights: string[];
  stack: string[];
  recognition?: string;
  github?: string;
  demo?: string;
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    slug: "projectforge",
    name: "ProjectForge",
    tagline: "AI-Powered Proof-of-Work & Accountability Platform",
    overview:
      "A full-stack platform for AI-assisted task creation, evidence verification, and accountable progress, built around cryptographic proof, AI-assisted verification, and tamper-evident audit trails so work can be transparently verified.",
    problem:
      "Progress tracking tools are easy to game—status updates and completed tasks often have nothing verifiable behind them. ProjectForge replaces self-reported progress with AI-assisted workflows, cryptographically-backed evidence, and immutable audit records that create a transparent, trustworthy history of completed work.",
    decisions: [
      "SHA-256 cryptographic hashing and append-only audit trails ensure every uploaded proof remains tamper-evident, allowing any modification to submitted evidence to be detected while preserving a transparent verification history.",
      "AI-assisted evidence analysis generates verification summaries and confidence scores to support the review process, while the final verification decision always remains under human control through a human-in-the-loop workflow.",
      "Firebase Authentication and role-based access control (RBAC) enforce secure multi-user data isolation, allowing users to access only their own data while administrators maintain platform-wide oversight. MongoDB provides persistent storage, and Vercel powers global deployment.",
    ],
    highlights: [
      "Tamper-evident proof management via SHA-256 hashing",
      "AI-assisted verification with confidence scoring",
      "Role-based access control",
      "Full audit trails for accountability",
    ],
    stack: ["Next.js", "Firebase", "MongoDB", "Vercel"],
    recognition: "USAII® Global AI Hackathon 2026 Finalist",
    github: "https://github.com/Karthik00769/ProjectForge",
    visual: {
      src: "/projects/projectforge.png",
      alt: "ProjectForge landing page — Trust Through Evidence",
      width: 1898,
      height: 916,
      chrome: "light",
    },
  },
  {
    slug: "smartspend",
    name: "SmartSpend",
    tagline: "AI-Powered Personal Finance Platform",
    overview:
      "A full-stack fintech platform that automates personal finance through deterministic financial processing, intelligent receipt parsing, and real-time analytics.",
    problem:
      "Most expense trackers rely on manual entry, making them difficult to maintain as receipts, UPI payments, and bank statements accumulate. SmartSpend is designed to automate financial record keeping while ensuring every transaction remains deterministic, explainable, and auditable.",
    decisions: [
      "Designed a deterministic Financial Core that centralizes validation, financial calculations, and business rules, ensuring manual entry, OCR, and bank statement imports all follow the same processing pipeline.",
      "Built a modular OCR and bank statement ingestion pipeline that focuses solely on extraction, while delegating validation, categorization, and financial correctness to the Financial Core for consistent and reliable processing.",
      "Combined rule-based categorization with the Gemini API, using deterministic merchant rules first and AI only for ambiguous transactions, followed by confidence scoring to keep financial decisions explainable and trustworthy.",
    ],
    highlights: [
      "OCR pipeline for receipts and bank statements",
      "AI + rule-based spending categorization",
      "Secure authentication with NextAuth",
      "Real-time financial dashboards",
    ],
    stack: ["Next.js", "TypeScript", "MySQL (TiDB Cloud)", "Gemini API", "NextAuth"],
    recognition: "IEEE YESIST12 2026 International Finalist — Maker Fair track, selected from 2,000+ submissions",
    github: "https://github.com/Karthik00769/SmartSpend",
    visual: {
      src: "/projects/smartspend.png",
      alt: "SmartSpend dashboard — monthly spending trend and budget usage",
      width: 1537,
      height: 985,
      chrome: "light",
    },
  },
  {
    slug: "sentinelroute",
    name: "SentinelRoute",
    tagline: "Operational Logistics Intelligence Platform",
    overview:
      "A multi-tenant operational intelligence platform for logistics enterprises, combining AI-driven decision support, real-time collaboration, and event-driven operations with enterprise-grade tenant isolation.",
    problem:
      "Fleet operators often rely on disconnected systems, spreadsheets, and manual coordination, making it difficult to monitor shipments, respond to disruptions, and maintain operational visibility in real time. SentinelRoute unifies fleet operations, intelligence, and collaboration into a single secure operational workspace for every company.",
    decisions: [
      "Designed an event-driven, real-time architecture using Socket.IO, centralized event dispatching, and shared state synchronization to power live shipment tracking, operational intelligence, collaborative decision-making, and enterprise command workflows without continuous polling.",
      "Built a secure multi-tenant SaaS platform with server-authoritative tenant isolation, Firebase authentication, role-based access control, company onboarding, super-admin verification workflows, audit trails, and hardened WebSocket authorization to prevent cross-tenant data access.",
      "Developed an AI-assisted operational intelligence layer that analyzes shipment risks, predicts disruptions, generates actionable recommendations, maintains live operational feeds, and enables collaborative command-center decisions through real-time synchronization across connected users.",
    ],
    highlights: [
      "Strict multi-tenant data isolation",
      "Company onboarding & verification workflows",
      "Role-based workforce & compliance modules",
      "Localization for major regional Indian languages",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Firebase", "Socket.io"],
    github: "https://github.com/Kishore007raj/SentinelRoute",
    visual: {
      src: "/projects/sentinelroute.png",
      alt: "SentinelRoute operations dashboard — fleet risk and shipment overview",
      width: 1871,
      height: 818,
      chrome: "dark",
    },
  },
];

export type Achievement = {
  title: string;
  organization: string;
  distinction: string;
  detail: string;
  period?: string;
};

export const achievements: Achievement[] = [
  {
    title: "IEEE YESIST12 2026",
    organization: "IEEE",
    distinction: "International Finalist",
    detail: "Maker Fair track — selected from 2,000+ submissions, for SmartSpend.",
  },
  {
    title: "USAII® Global AI Hackathon 2026",
    organization: "USAII",
    distinction: "International Finalist",
    detail: "Recognized for ProjectForge.",
  },
];

export type SkillCategory = {
  label: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "HTML/CSS", "Python", "SQL", "C", "C++"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Firebase Authentication"],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication & RBAC",
      "File Upload Pipelines",
      "Payment Integration",
      "NextAuth.js",
      "JWT",
      "Socket.io"
    ],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["Google Cloud Platform", "AWS S3", "Docker", "Linux", "SSH", "Nginx", "Vercel", "Firebase"],
  },
  {
    label: "AI & Automation",
    items: ["Gemini API", "Prompt Engineering", "OCR Pipelines", "OpenCV"],
  },
  {
    label: "Web3",
    items: ["Solidity", "Smart Contracts", "Web3.js", "Ethers.js", "Hardhat"],
  },
  {
    label: "Developer Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "FFmpeg", "Figma"],
  },
  {
    label: "Core CS",
    items: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "OOP", "System Design"],
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
] as const;
