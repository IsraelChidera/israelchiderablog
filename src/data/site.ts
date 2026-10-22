// Single source of truth for profile details and links used across the site.
// Facts here come from the CV in /public and should be updated alongside it.

export const site = {
    name: "Israel Chidera Edeh",
    shortName: "Israel Chidera",
    url: "https://israelchidera.netlify.app",
    title: "Israel Chidera Edeh | Software Engineer · Full-Stack & AI",
    description:
        "Software engineer in Lagos building full-stack products and AI applications with TypeScript, React, Next.js, C#/.NET and Python.",
    keywords:
        "software engineer, full-stack, AI applications, React, Next.js, TypeScript, Node.js, ASP.NET, C#, .NET, Python, FastAPI, LLM, RAG, embeddings, document AI, payments, Lagos, Nigeria",
    role: "Software Engineer",
    focus: "Full-stack products and AI applications",
    // Update whenever it changes, and keep the date current.
    now: {
        text: "Now building: vector search with pgvector and LLM evaluation. AWS Certified AI Practitioner exam: January 2027.",
        updated: "2026-10-22",
    },
    location: "Lagos, Nigeria (WAT, UTC+1)",
    availability: "Open to remote roles",
    email: "israelchidera54@gmail.com",
    resume: "/Israel-Chidera-Edeh-CV.pdf",
    ogImage: "/og.png",
    twitter: "@ChideraEl",
};

export const links = {
    github: "https://github.com/IsraelChidera",
    linkedin: "https://www.linkedin.com/in/israel-chidera-97bbab89/",
    freecodecamp: "https://www.freecodecamp.org/news/author/IsraelChiderah",
    x: "https://x.com/ChideraEl",
};

export const nav = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Projects", href: "/#work" },
    { label: "Experience", href: "/#experience" },
    { label: "Writing", href: "/#writing" },
    { label: "Contact", href: "/#contact" },
];
