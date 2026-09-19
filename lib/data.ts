// ---------------------------------------------------------------------------
// Single source of truth for all portfolio content.
// Sourced directly from Karthik Nair's resume (Karthik_Nair_Master_Resume.pdf).
// Edit copy for clarity only — never change dates, tech, or claims.
// ---------------------------------------------------------------------------

export const personal = {
  name: "Karthik Nair",
  title: "Software Engineer",
  tagline: "Backend • Cloud • AI-Assisted Systems",
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
    "I am a Computer Science undergraduate with interests in Backend Engineering, Distributed Systems, Cloud Infrastructure, Full-Stack Development, and AI-Assisted Software Engineering. I have published a research paper in financial technology, competed as an international hackathon finalist, and built end-to-end software solutions across web, mobile, and cloud-native platforms.",
} as const;

export const education = {
  degree: "B.Tech, Computer Science and Engineering",
  institution: "SRM Institute of Science and Technology, Ramapuram",
  period: "Aug 2023 – May 2027",
  detail: "CGPA: 9.59 / 10",
} as const;

export const languages = [
  { name: "English", level: "Full professional proficiency" },
  { name: "German", level: "Elementary proficiency" },
  { name: "Hindi", level: "Professional working proficiency" },
  { name: "Malayalam", level: "Native or bilingual proficiency" },
  { name: "Sanskrit", level: "Limited working proficiency" },
  { name: "Tamil", level: "Full professional proficiency" },
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
  recognition?: string[];
  github?: string;
  demo?: string;
  visual: ProjectVisual;
};

export const projects: Project[] = [
  {
    slug: "smartspend",
    name: "SmartSpend",
    tagline: "AI-Powered Personal Finance Platform",
    overview:
      "A full-stack fintech platform combining robust financial analytics, AI-powered insights, and deterministic transaction processing. The system's architecture and research outcomes resulted in a published conference paper.",
    problem:
      "Expense tracking often lacks automation or relies on opaque algorithms. SmartSpend solves this by ensuring all financial processing remains deterministic and auditable, while using AI specifically for personalized insights and categorization.",
    decisions: [
      "Architected a full-stack platform leveraging Next.js and MySQL on TiDB Cloud for reliable data persistence and real-time financial analytics.",
      "Engineered an automated ingestion pipeline that integrates OCR for receipt and statement parsing, feeding directly into a deterministic financial core.",
      "Deployed the solution to modern cloud infrastructure, ensuring high availability, and integrated the Gemini API for intelligent, explainable spending categorization."
    ],
    highlights: [
      "Full-stack architecture with secure authentication",
      "Financial analytics and deterministic processing",
      "AI-powered insights via Gemini",
      "Cloud deployment and real-time dashboards",
    ],
    stack: ["Next.js", "TypeScript", "MySQL (TiDB Cloud)", "Gemini API", "NextAuth"],
    recognition: [
      "Conference Publication (ICGMRFT 2026)",
      "IEEE YESIST12 2026 International Finalist",
    ],
    github: "https://github.com/Karthik00769/SmartSpend",
    visual: {
      src: "/projects/smartspend.png",
      alt: "SmartSpend dashboard",
      width: 1537,
      height: 985,
      chrome: "light",
    },
  },
  {
    slug: "projectforge",
    name: "ProjectForge",
    tagline: "AI-Powered Proof-of-Work & Accountability Platform",
    overview:
      "A production-oriented SaaS platform for AI-assisted task creation, evidence verification, and accountable progress tracking. Built with a scalable backend and real-time collaboration features.",
    problem:
      "Self-reported progress is difficult to verify in remote environments. ProjectForge provides a transparent, cryptographically-backed audit trail for completed work.",
    decisions: [
      "Architected a scalable full-stack system with Next.js, MongoDB, and Firebase to support multi-user workflows and seamless real-time collaboration.",
      "Implemented SHA-256 cryptographic hashing to create tamper-evident audit trails, ensuring that all uploaded proof remains immutable.",
      "Integrated AI-assisted verification workflows while maintaining strict role-based access control (RBAC) and human-in-the-loop final decision making."
    ],
    highlights: [
      "Multi-user workflows and RBAC",
      "Real-time collaboration and secure data isolation",
      "Full-stack architecture with scalable backend",
      "Tamper-evident proof management",
    ],
    stack: ["Next.js", "Firebase", "MongoDB", "Vercel"],
    recognition: ["USAII® Global AI Hackathon 2026 Finalist"],
    github: "https://github.com/Karthik00769/ProjectForge",
    visual: {
      src: "/projects/projectforge.png",
      alt: "ProjectForge landing page",
      width: 1898,
      height: 916,
      chrome: "light",
    },
  },
  {
    slug: "trustbuddy",
    name: "Trust Buddy",
    tagline: "AI Financial Security Assistant",
    overview:
      "A mobile-first security application featuring a deterministic risk engine and a RAG-enhanced scam detection workflow to protect users from financial phishing and malicious content.",
    problem:
      "Users face increasingly sophisticated digital threats. Trust Buddy provides secure, AI-assisted explanations for suspicious signals while ensuring that LLM explanations cannot override deterministic security decisions.",
    decisions: [
      "Developed a robust client-server architecture using an Android (Kotlin + Jetpack Compose) frontend and a high-performance FastAPI backend.",
      "Engineered a deterministic risk engine that processes OCR, QR analysis, and voice input to identify financial phishing, credential harvesting, and malicious links.",
      "Implemented a RAG-enhanced security analysis pipeline to generate contextual threat indicators, enforcing strict boundaries so AI explanations never compromise core security protocols."
    ],
    highlights: [
      "Android (Kotlin + Jetpack Compose) app",
      "FastAPI backend and Deterministic Risk Engine",
      "RAG-enhanced scam detection workflow",
      "OCR, QR analysis, and voice input integration",
    ],
    stack: ["Kotlin", "Jetpack Compose", "FastAPI", "Gemini", "Groq", "ML Kit"],
    github: "https://github.com/Karthik00769/Trust-layer",
    visual: {
      src: "/projects/trustbuddy.png",
      alt: "Trust Buddy mobile interface",
      width: 1080,
      height: 2400,
      chrome: "dark",
    },
  },
  {
    slug: "sentinelroute",
    name: "SentinelRoute",
    tagline: "Operational Logistics Intelligence Platform",
    overview:
      "A multi-tenant operational logistics platform combining real-time event synchronization, deterministic risk scoring, and explainable recommendations for command-center decision support.",
    problem:
      "Fleet operators lack integrated visibility and proactive risk assessment. SentinelRoute provides a secure operational workspace powered by real-time state synchronization and explainable risk scoring.",
    decisions: [
      "Engineered a real-time, event-driven architecture using Socket.IO for centralized event dispatching, shared state synchronization, and live updates across dashboards.",
      "Developed an operational intelligence engine combining deterministic risk scoring with Gemini-powered explainable recommendations and confidence scoring.",
      "Designed a secure multi-tenant architecture with server-authoritative tenant isolation, role-based access control, and immutable audit trails."
    ],
    highlights: [
      "Real-time state synchronization via Socket.IO",
      "Deterministic risk scoring and analysis",
      "Explainable AI recommendations",
      "Server-authoritative tenant isolation & RBAC",
    ],
    stack: ["Next.js", "TypeScript", "MongoDB", "Firebase", "Socket.IO", "React", "Tailwind CSS"],
    github: "https://github.com/Karthik00769/SentinelRoute",
    visual: {
      src: "/projects/sentinelroute.png",
      alt: "SentinelRoute operations dashboard",
      width: 1871,
      height: 818,
      chrome: "dark",
    },
  },
  {
    slug: "dvote",
    name: "D-VOTE",
    tagline: "Decentralized Web3 Voting Platform",
    overview:
      "A secure, transparent, and blockchain-powered voting platform designed to ensure immutable voting records and transparent election management based on a decentralized trust model.",
    problem:
      "Traditional voting systems suffer from opacity and potential tampering. D-VOTE leverages Web3 architecture to provide verifiable, tamper-proof elections where trust is guaranteed by cryptography.",
    decisions: [
      "Developed robust Solidity smart contracts deployed on Ethereum Sepolia to enforce a strict one-vote-per-wallet policy and secure on-chain election management.",
      "Utilized Hardhat for comprehensive smart contract testing and deployment workflows, ensuring a resilient blockchain backend.",
      "Integrated MetaMask using ethers.js and viem to create a decentralized frontend experience that enables transparent viewing and verification of election results."
    ],
    highlights: [
      "Solidity smart contracts on Ethereum Sepolia",
      "Immutable voting records and one vote per wallet",
      "Transparent on-chain election management",
      "Web3 architecture with MetaMask integration",
    ],
    stack: ["Solidity", "Ethereum Sepolia", "Hardhat", "ethers.js", "viem", "MetaMask"],
    github: "https://github.com/Karthik00769/d-vote",
    visual: {
      src: "/projects/dvote.png",
      alt: "D-VOTE decentralized platform",
      width: 1920,
      height: 1080,
      chrome: "light",
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
    title: "Conference Publication",
    organization: "ICGMRFT 2026",
    distinction: "Co-Author",
    detail: 'Published research paper:\n"SmartSpend: A Goal-Based Personal Financial Planning Platform for Awareness-Driven Savings" (ICGMRFT 2026)',
    period: "2026",
  },
  {
    title: "IEEE YESIST12",
    organization: "IEEE",
    distinction: "International Finalist",
    detail: "Maker Fair Track — selected among 2,000+ global submissions for SmartSpend.",
    period: "2026",
  },
  {
    title: "USAII® Global AI Hackathon",
    organization: "USAII",
    distinction: "International Finalist",
    detail: "Recognized for ProjectForge and AI-assisted software innovation.",
    period: "2026",
  },
  {
    title: "ALOHA Abacus National Competition",
    organization: "ALOHA",
    distinction: "First Runner-Up",
    detail: "National-level ALOHA Abacus Competition.",
    period: "2019",
  },
  {
    title: "ALOHA Abacus State Competition",
    organization: "ALOHA",
    distinction: "State Winner",
    detail: "State-level ALOHA Abacus Competition.",
    period: "2019",
  },
  {
    title: "ALOHA Abacus Tiny Tots Competition",
    organization: "ALOHA",
    distinction: "State Winner",
    detail: "State-level ALOHA Abacus Competition (Tiny Tots Category).",
    period: "2012",
  }
];

export type SkillCategory = {
  label: string;
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "FastAPI",
      "REST APIs",
      "Authentication & RBAC",
      "File Upload Pipelines",
      "Payment Integration",
      "NextAuth.js",
      "JWT",
      "Socket.IO"
    ],
  },
  {
    label: "Cloud & Infrastructure",
    items: ["Docker", "Google Cloud Platform (GCP)", "AWS S3", "Linux", "SSH", "Nginx", "Vercel", "Containerization"],
  },
  {
    label: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Supabase"],
  },
  {
    label: "AI & Automation",
    items: ["Gemini API", "Prompt Engineering", "OCR Pipelines", "OpenCV", "ML Kit", "LLM Integration"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Firebase Authentication", "Android Development (Kotlin)", "Jetpack Compose"],
  },
  {
    label: "Languages",
    items: ["JavaScript", "TypeScript", "HTML/CSS", "Python", "SQL", "C", "C++"],
  },
  {
    label: "Developer Tools",
    items: ["Git", "GitHub", "Postman", "VS Code", "FFmpeg", "Figma", "Android Studio"],
  },
  {
    label: "Web3",
    items: ["Solidity", "Smart Contracts", "Web3.js", "Ethers.js", "Hardhat"],
  },
  {
    label: "Core CS",
    items: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "OOP", "System Design", "Database Management Systems", "Software Engineering"],
  },
];

export const nav = [
  { label: "About", href: "#about" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Volunteering", href: "#volunteering" },
  { label: "Skills", href: "#skills" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
] as const;
