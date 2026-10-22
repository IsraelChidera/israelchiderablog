// Project content for the homepage showcase and the /projects/[slug] case studies.
// Every claim here was checked against the live product, its repository or the CV.
// Keep it that way: no metrics or features that can't be verified.

export type ProjectStatus = "live" | "in-progress" | "internal";

export type Project = {
    slug: string;
    title: string;
    kind: string;
    status: ProjectStatus;
    statusLabel: string;
    summary: string;
    problem: string[];
    role: string;
    highlights: { title: string; body: string }[];
    decisions: { title: string; body: string }[];
    outcomes?: { value: string; label: string }[];
    stack: string[];
    links: { label: string; href: string }[];
    visual:
        | { type: "screenshot"; name: string; alt: string; url: string }
        | { type: "diagram"; name: "gateway" | "payroll" };
    note?: string;
};

export const projects: Project[] = [
    {
        slug: "ai-gateway-api",
        title: "AI Gateway API",
        kind: "Personal project",
        status: "in-progress",
        statusLabel: "In progress",
        summary:
            "A Python/FastAPI service that puts LLM chat behind a provider-agnostic interface, with the timeouts, retries and error mapping that external AI APIs need.",
        problem: [
            "When an application calls an LLM API directly, it becomes tied to one vendor's SDK, error format and failure modes. Rate limits, slow responses and temporary server errors then surface straight in the product.",
            "AI Gateway is where I'm working through those problems in a small, testable service: one interface for the application, provider-specific behaviour behind it, and predictable HTTP responses when something goes wrong.",
        ],
        role: "Sole developer. I designed the provider interface, built the Gemini and mock providers, the error-handling layer and the tests, and prototyped retrieval.",
        highlights: [
            {
                title: "Provider-agnostic interface",
                body: "An abstract AIProvider defines one async chat() method. A Gemini provider implements it with the google-genai SDK, and a deterministic mock provider implements it for tests. The route depends on an AIService, never on a vendor.",
            },
            {
                title: "Resilient provider calls",
                body: "Every request has a timeout. Responses with status 429, 500 or 503 are retried with exponential backoff and random jitter, up to a configurable limit. Other errors fail immediately.",
            },
            {
                title: "Typed errors, predictable responses",
                body: "Failures become a small error hierarchy (timeout, unavailable, rate limited). A FastAPI exception handler maps these to 504, 503 and 429 (with a Retry-After header). Anything unexpected becomes a 502.",
            },
            {
                title: "Usage and latency on every response",
                body: "Each reply includes the model used, input and output token counts, and the latency measured around the provider call.",
            },
            {
                title: "Retrieval prototype",
                body: "Overlapping text chunking, Gemini embeddings and cosine-similarity top-k search. It's a standalone prototype and isn't exposed through the API yet.",
            },
        ],
        decisions: [
            {
                title: "Interface first, vendor second",
                body: "The service layer knows nothing about Gemini. Adding a provider means implementing a single method, and the HTTP layer stays the same.",
            },
            {
                title: "Retry only what is retryable",
                body: "Client errors fail fast. Only rate limits and temporary server errors are retried, and jitter keeps retries from all arriving at the same moment.",
            },
            {
                title: "Deterministic tests without network calls",
                body: "The mock provider lets the API be tested without API keys or network access. Tests use pytest, pytest-asyncio and FastAPI's test client.",
            },
        ],
        stack: ["Python", "FastAPI", "Pydantic", "google-genai (Gemini)", "pytest"],
        links: [{ label: "Repository", href: "https://github.com/IsraelChidera/AI-Gateway-API" }],
        visual: { type: "diagram", name: "gateway" },
    },
    {
        slug: "werunam",
        title: "WeRunAm",
        kind: "Founder & engineer",
        status: "live",
        statusLabel: "Live",
        summary:
            "An errands, market-sourcing and logistics service in Lagos. I founded it and built the web platform around one rule: customers see exactly what they're paying for before they pay.",
        problem: [
            "Getting something bought, collected or moved in Lagos often means handing money to someone and hoping it works out. Prices are unclear, updates are rare, and there's little recourse when something goes wrong.",
            "WeRunAm handles market runs, errands, airport item recovery and larger import and export shipments. The product's job is to make that trustworthy for customers who aren't there to watch it happen.",
        ],
        role: "Founder and engineer. I designed the customer flows and built the web platform.",
        highlights: [
            {
                title: "A request flow for each service",
                body: "Market runs, errands, airport rescue, and import and export shipments each have their own request flow that asks for the details that service needs.",
            },
            {
                title: "Quote, then pay",
                body: "Customers submit a request without paying, receive an itemised quote, and pay through Paystack only after accepting it.",
            },
            {
                title: "Visibility before dispatch",
                body: "Customers get photo and video updates before items are dispatched, along with status updates and receipts.",
            },
            {
                title: "A defined dispute and refund process",
                body: "Customers know in advance what happens if an order goes wrong.",
            },
        ],
        decisions: [
            {
                title: "Designed for a low-trust market",
                body: "Payment comes after an itemised quote, not before. That ordering shapes the entire request flow.",
            },
            {
                title: "Familiar payment rails",
                body: "Checkout runs through Paystack, so customers pay with a provider they already know rather than a bespoke payment step.",
            },
        ],
        stack: ["Next.js", "Firebase", "RTK Query", "Paystack"],
        links: [{ label: "werunam.com", href: "https://werunam.com/" }],
        visual: {
            type: "screenshot",
            name: "werunam",
            alt: "WeRunAm homepage: 'You need it done. We run am.' with options for Market Run, Errand Run and Airport Rescue",
            url: "werunam.com",
        },
    },
    {
        slug: "enterprise-payroll-platform",
        title: "Enterprise payroll platform",
        kind: "Enterprise · Deloitte & Touche",
        status: "internal",
        statusLabel: "Internal · in production",
        summary:
            "An internal payroll platform for Deloitte's Tax & GES department. I lead development of the web application and built its OCR document automation.",
        note: "This is internal software, so this case study stays high level: no screenshots, code, client information or system details.",
        problem: [
            "Payroll processing involved manual steps, including re-keying data from payroll documents by hand. That takes time and leaves room for error in work where accuracy matters.",
        ],
        role: "I lead development of the web application, from application architecture to backend API integration, and maintain it in production. I work with backend engineers on API contracts, data flow and error handling.",
        highlights: [
            {
                title: "OCR document intake",
                body: "Payroll documents are processed with Azure Document Intelligence, and the extracted data appears in the application, replacing manual data entry.",
            },
            {
                title: "Backend integration",
                body: "The Next.js application integrates with Node.js/Express and ASP.NET APIs.",
            },
            {
                title: "Performance",
                body: "Improved load performance by 25% (Largest Contentful Paint) through server-side rendering, caching, code splitting and lazy loading.",
            },
            {
                title: "Accessibility",
                body: "Led accessibility improvements to bring key interfaces in line with WCAG 2.1 guidelines.",
            },
        ],
        decisions: [
            {
                title: "Automate the slowest manual step",
                body: "Pulling data from documents automatically, instead of re-keying it, removed most of the manual entry from the workflow.",
            },
        ],
        outcomes: [
            { value: "35%", label: "reduction in payroll processing time (platform outcome)" },
            { value: "60%", label: "less manual data entry with the OCR automation I built" },
            { value: "25%", label: "faster Largest Contentful Paint" },
        ],
        stack: ["Next.js", "TypeScript", "Azure Document Intelligence", "Node.js/Express APIs", "ASP.NET APIs"],
        links: [],
        visual: { type: "diagram", name: "payroll" },
    },
    {
        slug: "mymoney",
        title: "MyMoney",
        kind: "Personal project",
        status: "live",
        statusLabel: "Live",
        summary:
            "A personal finance tracker that brings savings, investments and goals spread across different platforms into one dashboard.",
        problem: [
            "Savings and investments often sit across several apps and platforms, so there's no single view of net worth or of progress toward a goal.",
            "MyMoney gives people one place to record them and see the whole picture. Entries are added manually; it doesn't connect to bank accounts.",
        ],
        role: "I designed and built the application end to end.",
        highlights: [
            {
                title: "Dashboard",
                body: "Net worth overview, allocation chart, contribution history and recent activity.",
            },
            {
                title: "Savings and investments",
                body: "Create, edit and delete savings accounts and investments (stocks, ETFs, bonds and crypto) across platforms.",
            },
            {
                title: "Goals and reports",
                body: "Financial targets with progress tracking and deadline countdowns, plus monthly reports with charts.",
            },
            {
                title: "Accounts",
                body: "Email and Google sign-in with Firebase Authentication. Forms are validated with Zod and react-hook-form.",
            },
        ],
        decisions: [
            {
                title: "Security lives in the data layer",
                body: "Next.js middleware redirects signed-out users as a convenience, but Firestore security rules are what stop anyone reading or writing data they don't own.",
            },
            {
                title: "A service per domain",
                body: "Savings, investments, goals and activity each have their own Firestore service, so data access stays out of the UI components. A Zustand store holds client state.",
            },
        ],
        stack: ["Next.js 14", "TypeScript", "Firebase Auth", "Cloud Firestore", "Zustand", "Recharts", "Zod", "Tailwind CSS"],
        links: [
            { label: "Live app", href: "https://track-the-money.netlify.app/" },
            { label: "Repository", href: "https://github.com/IsraelChidera/Money-tracker-app" },
        ],
        visual: {
            type: "screenshot",
            name: "mymoney",
            alt: "MyMoney landing page: 'See your entire financial life in one place'",
            url: "track-the-money.netlify.app",
        },
    },
    {
        slug: "naijatax",
        title: "NaijaTax 2026",
        kind: "Personal project",
        status: "live",
        statusLabel: "Live",
        summary:
            "A free PAYE estimator for Nigeria's 2026 tax rules, with a plain-language explainer and an AI assistant for common questions.",
        problem: [
            "The Nigeria Tax Act 2025 changes personal income tax from January 2026, with new bands, a higher tax-free threshold and the removal of the Consolidated Relief Allowance. Most people want one answer: what will I actually pay?",
            "NaijaTax turns a salary and a few optional deductions into a full PAYE breakdown, with no sign-up.",
        ],
        role: "I designed and built the application.",
        highlights: [
            {
                title: "PAYE calculator",
                body: "Six bands from 0% to 25%, with the first ₦800,000 exempt. Pension uses a configurable rate (8% by default), applied to basic, housing and transport pay when provided and to gross pay otherwise.",
            },
            {
                title: "Deductions and reliefs",
                body: "National Housing Fund, health insurance, life assurance and rent relief (20% of annual rent, capped at ₦500,000).",
            },
            {
                title: "What changed in 2026",
                body: "A short explainer covering the main changes to personal income tax under the new law.",
            },
            {
                title: "AI assistant",
                body: "Answers common questions about the new law. Its answers are labelled as informational, not legal or tax advice.",
            },
        ],
        decisions: [
            {
                title: "Salary data stays in the browser",
                body: "Calculations run client-side, with no login, so salary figures are never sent to a server.",
            },
            {
                title: "Honest about its limits",
                body: "It's an independent estimator to help people understand the rules, not an official tool or professional advice.",
            },
        ],
        stack: ["Next.js", "LLM API"],
        links: [{ label: "Live app", href: "https://my-naija-tax.netlify.app/" }],
        visual: {
            type: "screenshot",
            name: "naijatax",
            alt: "NaijaTax calculator: annual gross salary input, pension rate, deductions and a Calculate My Tax button",
            url: "my-naija-tax.netlify.app",
        },
    },
];

export const moreWork = [
    {
        title: "White-label booking template",
        context: "T40 Technologies",
        body: "A reusable booking website for intercity transport operators, with online tickets, real-time seat availability and Paystack and Monnify checkout. Adopted by two operators.",
        href: undefined as string | undefined,
    },
    {
        title: "Intercity NG",
        context: "T40 Technologies",
        body: "A consumer web app for booking interstate bus tickets, including the charter booking feature I built single-handedly.",
        href: "https://intercity.ng/",
    },
    {
        title: "DevBlog",
        context: "Open source",
        body: "A blog platform for developers, built with Astro, React and Tailwind CSS.",
        href: "https://github.com/IsraelChidera/DevBlog",
    },
    {
        title: "Focus app",
        context: "Open source",
        body: "A productivity app built with React and Firebase Authentication.",
        href: "https://github.com/IsraelChidera/focus-app",
    },
];
