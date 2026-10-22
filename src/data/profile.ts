// Experience, skills, writing and education. Dates and titles follow the CV.

export const experience = [
    {
        company: "Deloitte & Touche",
        title: "Software Engineer",
        period: "Feb 2025 – Present",
        location: "Lagos · Hybrid",
        summary: "Enterprise payroll platform for the Tax & GES department.",
        points: [
            "Lead development of the web application for an enterprise payroll platform and maintain it in production. The platform cut payroll processing time by 35%.",
            "Built OCR document automation with Azure Document Intelligence that reduced manual data entry by 60%.",
            "Integrate Next.js with Node.js/Express and ASP.NET APIs, working with backend engineers on API contracts, data flow and error handling.",
            "Improved load performance by 25% (LCP) and led accessibility work against WCAG 2.1.",
        ],
        stack: "Next.js · TypeScript · Azure Document Intelligence · ASP.NET · Node.js",
    },
    {
        company: "T40 Technologies",
        title: "Software Engineer",
        period: "Apr 2024 – Nov 2024",
        location: "Remote · Intercity NG",
        summary: "Booking and payment software for intercity transport operators.",
        points: [
            "Built a reusable, white-label booking website for transport operators. Two operators adopted it, and it was associated with a 40% increase in booking conversions.",
            "Integrated Paystack and Monnify with a Laravel backend for online ticket checkout.",
            "Kept seat availability current without manual refreshes using React Query and WebSockets.",
            "Built Intercity NG's charter booking feature single-handedly.",
        ],
        stack: "Next.js · React Query · WebSockets · Paystack · Monnify · Laravel",
    },
    {
        company: "Najec Limited",
        title: "Software Engineer",
        period: "Oct 2023 – Mar 2024",
        location: "Hybrid",
        summary: "Enterprise on-street parking management.",
        points: [
            "Led development of the web application for an enterprise on-street parking management system, including admin dashboards for operational monitoring.",
            "Designed and launched the company website, increasing organic traffic to the landing page by 70% through technical SEO and performance work.",
        ],
        stack: "",
    },
    {
        company: "Tenece Professional Services",
        title: "Software Engineer",
        period: "Jan 2021 – Sep 2023",
        location: "Hybrid",
        summary: "Vendor Management System, the team's major project.",
        points: [
            "Developed the Vendor Management System using C#, ASP.NET Core, Entity Framework Core and SQL Server.",
            "Implemented features and data access with Entity Framework Core, delivering backend and business logic for vendor management workflows.",
        ],
        stack: "C# · ASP.NET Core · Entity Framework Core · SQL Server",
    },
];

export const skills = [
    { group: "Languages", items: ["TypeScript", "JavaScript", "C#", "SQL", "Python", "HTML", "CSS"] },
    {
        group: "Frontend",
        items: ["React", "Next.js (SSR/SSG)", "Redux Toolkit", "RTK Query", "React Query", "Zustand", "Zod", "Tailwind CSS", "shadcn/ui", "Astro"],
    },
    {
        group: "Backend & APIs",
        items: ["ASP.NET Core", "Entity Framework Core", "Node.js", "Express.js", "REST APIs", "GraphQL", "WebSockets", "Paystack & Monnify"],
    },
    { group: "Databases", items: ["SQL Server", "MongoDB", "Firebase / Firestore", "Supabase"] },
    {
        group: "Cloud & AI",
        items: ["Microsoft Azure", "Azure Document Intelligence", "Google Gemini API", "AWS (S3, IAM)", "Vercel", "Netlify"],
    },
    {
        group: "Practices",
        items: ["Jest", "pytest", "CI/CD", "Code review", "API design", "Core Web Vitals", "WCAG 2.1", "Agile/Scrum"],
    },
];

// Kept separate so personal-project and learning work isn't presented as professional experience.
export const developing = {
    personal: ["Python", "FastAPI", "Pydantic", "LLM API integration", "Embeddings"],
    learning: ["Retrieval-augmented generation (RAG)", "Vector search", "Cloud-based AI systems"],
};

export const writing = [
    {
        title: "How to Secure Routes in Next.js 13: Client-Side, Server-Side, and Middleware-Based Protection",
        href: "https://www.freecodecamp.org/news/secure-routes-in-next-js/",
        topic: "Next.js · Auth",
    },
    {
        title: "How to Integrate WordPress as a Headless CMS with Next.js",
        href: "https://www.freecodecamp.org/news/integrate-wordpress-with-nextjs/",
        topic: "Next.js · CMS",
    },
    {
        title: "How to Use Firebase Authentication in a React App",
        href: "https://www.freecodecamp.org/news/use-firebase-authentication-in-a-react-app/",
        topic: "React · Auth",
    },
    {
        title: "How to Avoid Prop Drilling with the React Context API",
        href: "https://www.freecodecamp.org/news/avoid-prop-drilling-with-react-context-api/",
        topic: "React · State",
    },
    {
        title: "C# Coding Best Practices: Coding Conventions with Examples",
        href: "https://www.freecodecamp.org/news/coding-best-practices-in-c-sharp/",
        topic: "C# · Practices",
    },
];

export const education = [
    { title: "Master of Technology (M.Tech.)", org: "Miva Open University", period: "May 2026 – expected May 2027", status: "In progress" },
    { title: "B.Sc., Microbiology/Biochemistry", org: "University of Nigeria, Nsukka", period: "2019" },
];

export const certifications = [
    { title: "AWS Certified AI Practitioner (AIF-C01)", org: "Amazon Web Services", period: "Exam planned January 2027", status: "In preparation" },
    { title: "React Learning Program", org: "Andela", period: "Completed Oct 2023" },
];
