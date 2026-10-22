// Project content for the homepage showcase and the /projects/[slug] case studies.
// Every claim here was checked against the live product, its repository or the CV.
// Keep it that way: no metrics or features that can't be verified.

export type ProjectStatus = "live" | "in-progress" | "internal" | "shipped";

export type Project = {
    slug: string;
    title: string;
    kind: string;
    status: ProjectStatus;
    statusLabel: string;
    featured: boolean;
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
        | { type: "image"; src: string; alt: string; width: number; height: number }
        | { type: "diagram"; name: "gateway" | "payroll" };
    note?: string;
};

// Naming Neptune publicly needs your manager's approval. If it isn't given,
// set this to false: the project then appears under the fallback title below.
const NEPTUNE_NAME_APPROVED = true;

export const projects: Project[] = [
    {
        slug: "ai-gateway-api",
        title: "AI Gateway API",
        kind: "Personal project",
        status: "in-progress",
        statusLabel: "In progress",
        featured: true,
        summary:
            "A FastAPI service that puts LLM chat and retrieval-augmented Q&A behind one stable API. It splits documents into chunks, embeds them, and answers questions only from the most relevant passages, citing its sources. When nothing relevant is stored, it says so instead of guessing. Built with retries and exponential backoff, timeouts, typed error handling and a 44-test suite.",
        problem: [
            "When an application calls an LLM API directly, it becomes tied to one vendor's SDK, error format and failure modes. Rate limits, slow responses and temporary server errors surface straight in the product, and a model asked about your documents will happily answer from general knowledge instead.",
            "AI Gateway puts one stable API in front of the model provider. It handles retries, timeouts and error mapping, and grounds answers in stored documents, refusing when it has nothing relevant to go on.",
        ],
        role: "Sole developer. I designed the provider interface and the retrieval pipeline, built the Gemini and mock providers, the error handling and the test suite.",
        highlights: [
            {
                title: "Retrieval-augmented Q&A",
                body: "POST /documents splits text into overlapping chunks, embeds them and stores them. POST /ask embeds the question, ranks stored chunks by cosine similarity, and sends the top matches, numbered [1], [2] and so on, to the model with instructions to answer only from them and cite their numbers. The response lists each source with its similarity score.",
            },
            {
                title: "A grounding guardrail",
                body: "Chunks below a similarity threshold are dropped. If none remain, the API answers \"not found\" without calling the model at all, so it never answers from general knowledge and never pays for a call it can't ground.",
            },
            {
                title: "Provider-agnostic interface",
                body: "Chat and embeddings sit behind one AIProvider interface. Gemini is implemented; a mock provider implements the full interface, including embeddings based on word overlap, so the API runs with no API key.",
            },
            {
                title: "Resilient provider calls",
                body: "Every chat and embedding call shares one wrapper: a per-request timeout, and retries with exponential backoff and jitter on 429, 500 and 503. Client errors such as 400 fail immediately.",
            },
            {
                title: "Typed errors, predictable responses",
                body: "Provider failures map to HTTP statuses: timeout 504, unavailable 503, rate limited 429 with a Retry-After header, anything else 502. Every response reports the model, token usage and latency.",
            },
            {
                title: "Tested and containerised",
                body: "44 pytest tests cover the API, retrieval, retries, error mapping and configuration, with no network calls. A Dockerfile runs the service as a non-root user.",
            },
        ],
        decisions: [
            {
                title: "Refuse rather than guess",
                body: "Below the similarity threshold the model is never called. That avoids confident answers the stored documents don't support.",
            },
            {
                title: "Retry only what can succeed on retry",
                body: "Rate limits and 500/503 errors are often transient, so they're retried. A 400 fails the same way every time, so retrying it only adds latency. Jitter stops clients that failed together from retrying together.",
            },
            {
                title: "A mock provider, not just mocked tests",
                body: "Because the mock implements real (if simple) embeddings, retrieval tests check actual ranking behaviour rather than hard-coded results.",
            },
            {
                title: "A vector store behind a small interface",
                body: "Today's store is in memory and searched by brute force, which is fine for a demo. It exposes three methods, so a database such as pgvector can replace it without touching the service.",
            },
        ],
        stack: ["Python", "FastAPI", "Pydantic", "Google Gemini API", "pytest", "Docker"],
        // Add { label: "Live API docs", href: "…" } once the service is deployed.
        links: [{ label: "GitHub", href: "https://github.com/IsraelChidera/AI-Gateway-API" }],
        visual: { type: "diagram", name: "gateway" },
    },
    {
        slug: "enterprise-payroll-platform",
        title: NEPTUNE_NAME_APPROVED
            ? "Neptune Payroll Platform"
            : "An internal payroll platform at a Big Four professional services firm",
        kind: NEPTUNE_NAME_APPROVED ? "Deloitte & Touche" : "Enterprise",
        status: "internal",
        statusLabel: "Internal · in production",
        featured: true,
        summary:
            "An internal payroll platform for the Tax & GES department. I built AI document extraction with Azure Document Intelligence that reads payroll documents and cut manual data entry by 60%. I also lead development of the web application and maintain it in production; the platform reduced payroll processing time by 35%.",
        note: "Internal tool: no public link or screenshots. This case study stays high level, with no internal architecture or client data.",
        problem: [
            "Payroll processing involved manual steps, including re-keying data from payroll documents by hand. That takes time and leaves room for error in work where accuracy matters.",
        ],
        role: "I built the AI document extraction, and I lead development of the web application, from application architecture to backend API integration, and maintain it in production.",
        highlights: [
            {
                title: "AI document extraction",
                body: "Payroll documents are read by Azure Document Intelligence, and the extracted data appears in the application, replacing manual data entry.",
            },
            {
                title: "Backend integration",
                body: "The Next.js application integrates with Node.js/Express and ASP.NET APIs. I work with backend engineers on API contracts, data flow and error handling.",
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
                body: "Extracting data from documents automatically, instead of re-keying it, removed most of the manual entry from the workflow.",
            },
        ],
        outcomes: [
            { value: "60%", label: "less manual data entry with the AI document extraction I built" },
            { value: "35%", label: "reduction in payroll processing time (platform outcome)" },
            { value: "25%", label: "faster Largest Contentful Paint" },
        ],
        stack: ["Azure Document Intelligence", "Next.js", "TypeScript", "Node.js/Express and ASP.NET APIs"],
        links: [],
        visual: { type: "diagram", name: "payroll" },
    },
    {
        slug: "werunam",
        title: "WeRunAm",
        kind: "Founder & engineer",
        status: "live",
        statusLabel: "Live",
        featured: true,
        summary:
            "I founded and built WeRunAm, a Lagos platform for market runs, errands, airport item recovery, and import and export shipments. Customers get an itemised quote before paying, then photo and video updates before dispatch, with a defined dispute and refund process, so customers can trust someone else to shop for them.",
        problem: [
            "Getting something bought, collected or moved in Lagos often means handing money to someone and hoping it works out. Prices are unclear, updates are rare, and there's little recourse when something goes wrong.",
            "WeRunAm's job is to make that trustworthy for customers who aren't there to watch it happen.",
        ],
        role: "Founder and engineer. I designed the customer flows and built the web platform.",
        highlights: [
            {
                title: "A request flow for each service",
                body: "Market runs, errands, airport item recovery, and import and export shipments each have their own request flow that asks for the details that service needs.",
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
        slug: "intercity-booking-platform",
        title: "Intercity booking platform",
        kind: "T40 Technologies",
        status: "shipped",
        statusLabel: "Shipped 2024",
        featured: true,
        summary:
            "A reusable booking website template for intercity transport operators, with online ticket purchase, real-time seat availability and schedule management. It is used by two operators and was associated with a 40% increase in booking conversions. I also built the charter booking feature on my own.",
        problem: [
            "Intercity transport operators in Nigeria needed to sell tickets online, with seat availability customers could rely on.",
            "T40's approach was one booking product that could be branded and deployed for each operator, rather than a separate site per operator.",
        ],
        role: "Software engineer at T40 Technologies. I built the white-label booking template, integrated payments with the Laravel backend, and built Intercity NG's charter booking feature on my own.",
        highlights: [
            {
                title: "White-label booking template",
                body: "One Next.js booking website, reused across operators, with online ticket purchase and schedule management.",
            },
            {
                title: "Real-time seat availability",
                body: "React Query and WebSockets keep seat availability and booking data current without manual refreshes.",
            },
            {
                title: "Online checkout",
                body: "Paystack and Monnify payment APIs integrated with a Laravel backend for ticket checkout.",
            },
            {
                title: "Charter booking",
                body: "Built single-handedly for Intercity NG: customers request and book chartered vehicles online.",
            },
        ],
        decisions: [
            {
                title: "One template, many operators",
                body: "A single codebase serves every operator, so fixes and features reach all of them at once.",
            },
            {
                title: "Push seat changes instead of polling",
                body: "WebSockets update seat availability as it changes, which matters when several customers are booking the same departure.",
            },
        ],
        outcomes: [
            { value: "2", label: "transport operators using the template" },
            { value: "40%", label: "increase in booking conversions (associated)" },
        ],
        stack: ["Next.js", "React Query", "WebSockets", "Paystack", "Monnify", "Laravel APIs"],
        links: [{ label: "intercity.ng", href: "https://intercity.ng/" }],
        visual: {
            type: "image",
            src: "/projects/t40-template.webp",
            alt: "The white-label booking template on desktop and mobile, with a ticket search form for travel between Nigerian cities",
            width: 529,
            height: 431,
        },
    },
    {
        slug: "mymoney",
        title: "MyMoney",
        kind: "Personal project",
        status: "live",
        statusLabel: "Live",
        featured: false,
        summary:
            "A personal finance tracker that brings savings, investments and goals spread across different platforms into one dashboard.",
        problem: [
            "Savings and investments often sit across several apps and platforms, so there's no single view of net worth or of progress toward a goal.",
            "MyMoney gives people one place to record them and see the whole picture. Entries are added manually; it doesn't connect to bank accounts.",
        ],
        role: "I designed and built the application end to end.",
        highlights: [
            { title: "Dashboard", body: "Net worth overview, allocation chart, contribution history and recent activity." },
            {
                title: "Savings and investments",
                body: "Create, edit and delete savings accounts and investments (stocks, ETFs, bonds and crypto) across platforms.",
            },
            { title: "Goals and reports", body: "Financial targets with progress tracking and deadline countdowns, plus monthly reports with charts." },
            { title: "Accounts", body: "Email and Google sign-in with Firebase Authentication. Forms are validated with Zod and react-hook-form." },
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
        featured: false,
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
            { title: "What changed in 2026", body: "A short explainer covering the main changes to personal income tax under the new law." },
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

// Homepage order alternates enterprise/product work and AI work.
const featuredOrder = ["enterprise-payroll-platform", "ai-gateway-api", "werunam", "intercity-booking-platform"];
export const featuredProjects = featuredOrder.map((slug) => projects.find((project) => project.slug === slug)!);

// Smaller personal and open-source projects. Entries with a slug have a case study.
export const sideProjects = [
    {
        title: "doc-analyzer",
        context: "AI · Open source",
        body: "A FastAPI service that runs uploaded documents through Gemini to analyse, summarise, extract, explain, classify or evaluate them, and says when the file doesn't contain an answer.",
        href: "https://github.com/IsraelChidera/doc-analyzer",
    },
    {
        title: "MyMoney",
        context: "Personal finance tracker",
        body: "Savings, investments and goals across platforms in one dashboard. Next.js, Firebase and Zustand.",
        href: "/projects/mymoney/",
    },
    {
        title: "NaijaTax 2026",
        context: "PAYE estimator",
        body: "Nigeria's 2026 tax rules in a client-side calculator, with an AI assistant for common questions.",
        href: "/projects/naijatax/",
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

// Client websites. Kept further down the page: they read as agency work.
export const otherWork: { title: string; body: string; href?: string }[] = [
    {
        title: "KSOM UK",
        body: "Training and Bible education institution of Eternity Network International (ENI)",
        href: "https://koinoniaschoolofministry.org.uk/",
    },
    // rdjestates.com wasn't responding on 22 Oct 2026; add the link back once it's up.
    { title: "RDJ Estates", body: "Landing page for RDJ Estates: Find Your Sustainable Dream Home" },
    {
        title: "Graft",
        body: "Landing page for an AI-powered text generator for customised, industry-specific and multilingual content",
        href: "https://graft.live/",
    },
    { title: "Good Homes", body: "A web platform to sell and rent properties without commissions", href: "https://good-homes.vercel.app/" },
    { title: "Pharmabolt", body: "Medication delivery and appointment booking with professionals", href: "https://pharmaboltapp.vercel.app/" },
    { title: "Lumixus Studio", body: "Website for a web-design agency", href: "https://lumixus-studio.com" },
];
