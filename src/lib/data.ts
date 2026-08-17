export const PROFILE = {
  name: "Kousthubhee Krishna Kotte",
  firstName: "Kousthubhee Krishna",
  lastName: "KOTTE",
  role: "Data & BI Analyst",
  email: "kousthubheekrishna@gmail.com",
  phone: "+91 94417 24256",
  whatsapp: "https://wa.me/919441724256",
  linkedin: "https://www.linkedin.com/in/kousthubheekrishna/",
  github: "https://github.com/Kousthubhee/Projects",
  location: "India",
  summary:
    "From enterprise systems to business analytics — I turn messy data into decisions. M.Sc. Business Analytics (France), two years in enterprise tech (Infosys), and hands-on with SQL, Python, Power BI, Tableau and AI-assisted workflows. Currently exploring automation with n8n, Claude API and Ollama.",
};

export const NAV_LINKS = [
  { id: "journey", label: "Journey" },
  { id: "story", label: "Story" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "ai-lab", label: "AI Lab" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const HERO_QUERY = `SELECT name, focus, availability
FROM candidates
WHERE mindset = 'systems → possibilities'
  AND open_to_work = TRUE;`;

export const HERO_ROWS = [
  { k: "name", v: "Kousthubhee Krishna Kotte" },
  { k: "focus", v: "Data · BI · Business Analytics" },
  { k: "base", v: "India — open to relocation" },
  { k: "mode", v: "Hybrid / Remote" },
  { k: "status", v: "OPEN TO WORK", accent: true },
];

export const KPIS = [
  { value: 13.3, suffix: "M+", label: "transactions analyzed", decimals: 1 },
  { value: 93, suffix: "%", label: "CKD model accuracy" },
  { value: 240, suffix: "+", label: "survey responses → 3 features" },
  { value: 60, suffix: "%+", label: "queries auto-resolved by AI" },
  { value: 2, suffix: " yrs", label: "enterprise systems @ Infosys" },
  { value: 10, suffix: "+", label: "dashboards shipped" },
];

export const TICKER = [
  "SQL",
  "Python",
  "Power BI",
  "Tableau",
  "BigQuery",
  "GCP",
  "Pandas",
  "Scikit-learn",
  "Excel",
  "Looker Studio",
  "Generative AI",
  "n8n Automation",
  "Ollama",
  "Machine Learning",
  "ETL / ELT",
  "A/B Testing",
  "Data Storytelling",
];

export const MILESTONES = [
  {
    period: "Now",
    tag: "Open to work",
    title: "Looking for the right team",
    org: "Data · BI · Analytics",
    place: "India / Hybrid / Remote / International",
    text: "Seeking a Data, BI, Product or Analytics Engineering role — while continuing to explore AI-assisted workflows with n8n, Claude API and Ollama.",
    accent: "amber",
    current: true,
  },
  {
    period: "May – Sep 2025",
    tag: "Venture Studio",
    title: "Data & Product Analytics Lead",
    org: "NEOMA Business School Incubator",
    place: "Rouen, France",
    text: "Turned 240+ survey responses into product requirements, ran A/B tests on user flows, and cut repetitive support queries by 30% with an AI-powered FAQ module.",
    accent: "teal",
  },
  {
    period: "Sep 2024 – Dec 2025",
    tag: "M.Sc.",
    title: "M.Sc. Business Analytics",
    org: "NEOMA Business School",
    place: "Rouen, France",
    text: "Statistics, predictive analytics, machine learning and BI — bridging a systems engineer's discipline with the questions businesses actually ask.",
    accent: "teal",
  },
  {
    period: "Sep 2023 – Aug 2024",
    tag: "Career break",
    title: "Deliberate upskilling",
    org: "Self-directed",
    place: "India",
    text: "A pause on purpose: Python, statistics and machine-learning fundamentals, full time, while preparing the move to France.",
    accent: "coral",
  },
  {
    period: "Sep 2021 – Aug 2023",
    tag: "Systems",
    title: "Systems Engineer — Data Operations & BI Support",
    org: "Infosys",
    place: "Hyderabad (Remote), India",
    text: "Automated SLA reporting from ServiceNow via SQL, managed access control, and validated OBIEE migrations across 3 environments — where I learned how systems really behave.",
    accent: "amber",
  },
  {
    period: "Mar – May 2021",
    tag: "Internship",
    title: "Data Analytics Intern",
    org: "ShapeAI",
    place: "Remote, India",
    text: "Cleaned and analyzed 10,000+ records with Pandas and NumPy; learned to present findings to non-technical stakeholders through Tableau.",
    accent: "coral",
  },
  {
    period: "2017 – 2021",
    tag: "Foundation",
    title: "B.E. Computer Science & Engineering",
    org: "Stanley College of Engineering & Technology",
    place: "Hyderabad, India",
    text: "The technical grammar — data structures, DBMS, AI and data mining — that everything since has been written in.",
    accent: "teal",
  },
];

export const CHAPTERS = [
  {
    numeral: "I",
    title: "Systems first, questions soon",
    quote: "Behind every system is an ecosystem",
    accent: "teal",
    body: "I studied Computer Science from 2017 to 2021, then joined Infosys as a Systems Engineer — enterprise middleware, Oracle Fusion, migrations, reboots, troubleshooting. It wasn't glamorous, and it was exactly what I needed. I learned that behind every application sits an ecosystem of systems, data, people and dependencies — and how easily one small fault ripples through all of them. But the longer I kept systems running, the more I kept asking the questions behind them: why does this process behave the way it does? What would the data say? Those questions quietly pushed me toward analytics.",
  },
  {
    numeral: "II",
    title: "Between continents, between disciplines",
    quote: "A good analyst asks whether the question is correct",
    accent: "amber",
    body: "An M.Sc. in Business Analytics at NEOMA took me from India to France — a new country, a new classroom, an unfamiliar accent on everything I thought I knew. It connected two halves of me that had always felt separate: technology and business. The real lesson wasn't a tool; it was a standard. A query is only as good as the question it answers. A dashboard is only as good as the decision it enables. A model is only as valuable as the problem it solves. I came home a different analyst — one who reads a problem technically, analytically and commercially at once.",
  },
  {
    numeral: "III",
    title: "Learning by building",
    quote: "A dataset becomes a pipeline becomes a decision",
    accent: "coral",
    body: "I rarely want to learn anything purely in theory — if a technology interests me, I want to build something with it. So a dataset became a pipeline, a pipeline became a model, a model fed a dashboard, and the dashboard became a decision-making tool. Increasingly, AI sits across that whole chain, quietly automating the repetitive parts — which is exactly what I'm exploring right now with n8n, Claude API and Ollama. Underneath all of it is one constant: curiosity. Technology simply gives that curiosity somewhere to go.",
  },
  {
    numeral: "IV",
    title: "From systems toward possibilities",
    quote: "Continuously figuring things out",
    accent: "amber",
    body: "I'm not chasing a title. I'm looking for work at the intersection of data, technology and business — real problems, varied teammates, room to grow — in India or internationally, hybrid or remote, and I'm open to relocation. The tools I use today will change; the point is to be someone capable of learning the next one. If my journey fits in one sentence, it's this: from maintaining systems, toward possibilities. What I know is that the most interesting part of the story may still be ahead.",
  },
];

export const TARGET_ROLES = [
  "Data Analyst",
  "Business Analyst",
  "BI Analyst",
  "Product Analyst",
  "Junior Data Scientist",
  "Analytics Engineer",
  "Junior Data Engineer",
  "Junior AI Engineer",
];

export const EXPERIENCE = [
  {
    role: "Data & Product Analytics Lead",
    org: "NEOMA Business School Incubator — Venture Studio",
    place: "Rouen, France",
    period: "May – Sep 2025 · 5 months",
    accent: "teal",
    bullets: [
      "Spearheaded user research across 240+ international students, using statistical analysis of qualitative survey data to pinpoint critical onboarding friction points.",
      "Translated insights into product requirements, co-developing a centralized platform that eliminated fragmented peer-to-peer querying and improved data accessibility.",
      "Designed and executed A/B tests on user flows and integrated an AI-powered FAQ module that cut repetitive support queries by 30%, validating core product hypotheses.",
      "Pitched data-backed product concepts to university executives — securing selection into the competitive NEOMA Venture Studio and delivering a full analytics report.",
    ],
    stack: ["User Research", "A/B Testing", "Product Analytics", "AI FAQ Module", "SQL", "Python"],
  },
  {
    role: "Systems Engineer — Data Operations & BI Support",
    org: "Infosys",
    place: "Hyderabad (Remote), India",
    period: "Sep 2021 – Aug 2023 · 2 years",
    accent: "amber",
    bullets: [
      "Automated SLA compliance and ticket-volume reporting by extracting incident data from ServiceNow via SQL, cutting manual reporting time for Network and BI teams by 40%.",
      "Enforced data security and role-based access control by managing database user permissions via SQL — 100% compliance with enterprise IT governance policies.",
      "Executed data validation and reconciliation across Oracle BI (OBIEE) RPD migrations spanning 3 production environments, resolving integrity issues for downstream financial reporting.",
      "Partnered with Network, BI and Operations teams in Agile/Scrum to troubleshoot middleware incidents, prioritizing critical reporting requirements via Jira and Confluence.",
    ],
    stack: ["SQL", "ServiceNow", "Oracle BI (OBIEE)", "Oracle Fusion Middleware", "Agile/Scrum", "Jira", "Confluence"],
  },
  {
    role: "Professional Development",
    org: "Career Break",
    place: "Full-time upskilling",
    period: "Sep 2023 – Aug 2024 · 1 year",
    accent: "coral",
    bullets: [
      "Dedicated full-time to Python, statistics and machine-learning fundamentals while preparing for M.Sc. Business Analytics admission in France.",
    ],
    stack: ["Python", "Statistics", "Machine Learning"],
  },
  {
    role: "Data Analytics Intern",
    org: "ShapeAI",
    place: "Remote, India",
    period: "Mar – May 2021 · 3 months",
    accent: "teal",
    bullets: [
      "Applied Python (Pandas, NumPy) to clean, process and analyze 10,000+ records, identifying behavioral trends and anomalies that informed business rules.",
      "Designed interactive Tableau dashboards to communicate analytical findings and KPIs to non-technical stakeholders, driving actionable business recommendations.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Tableau"],
  },
];

export interface Project {
  index: string;
  title: string;
  subtitle: string;
  objective: string;
  points: string[];
  tags: string[];
  accent: "amber" | "teal" | "coral";
  metrics: { v: string; l: string }[];
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Financial Transactions Dataset Analytics",
    subtitle: "End-to-end analytics on 13.3M+ banking records",
    objective:
      "Turn millions of raw banking transactions into decisions about segmentation, risk and operations — one unified analytical model across transaction, customer, card and merchant data.",
    points: [
      "Engineered features with Python (Pandas, NumPy): missing-value treatment, temporal extraction, credit utilization and debt-to-income ratios.",
      "Built SQL analytical workflows for complex business queries at scale.",
      "Profiled transaction failures and customer financial health to support risk segmentation and operational efficiency.",
    ],
    tags: ["Python", "Pandas", "SQL", "Plotly", "Feature Engineering"],
    accent: "amber",
    metrics: [
      { v: "13.3M+", l: "records" },
      { v: "4", l: "datasets joined" },
      { v: "3", l: "risk segments" },
    ],
    featured: true,
  },
  {
    index: "02",
    title: "Global AI Content Impact Dashboard",
    subtitle: "AI adoption, workforce & sentiment across 10 industries",
    objective:
      "An executive-ready Tableau dashboard that lets stakeholders compare AI adoption, revenue growth, consumer trust and workforce transformation across countries and industries.",
    points: [
      "Integrated 200+ records with 20+ business metrics covering AI adoption trends from 2020–2025.",
      "Compared adoption rates, job displacement, human–AI collaboration and market share with interactive filters and story-driven navigation.",
      "Surfaced which industries and regions pair the highest adoption with the strongest revenue growth.",
    ],
    tags: ["Tableau", "KPI Reporting", "Data Storytelling", "Geographic Viz"],
    accent: "teal",
    metrics: [
      { v: "200+", l: "records" },
      { v: "10", l: "industries" },
      { v: "6", l: "years of data" },
    ],
    featured: true,
  },
  {
    index: "03",
    title: "Chronic Kidney Disease Prediction",
    subtitle: "Machine learning for early clinical detection",
    objective:
      "A complete ML pipeline plus a Flask web app for early CKD detection from patient clinical data — supporting faster diagnosis and better healthcare decisions.",
    points: [
      "Preprocessed 400 records × 25 clinical attributes: imputation, encoding, scaling, and visual EDA with heatmaps and count plots.",
      "Trained a Decision Tree classifier evaluated with ROC analysis and confusion matrix; extracted top clinical risk indicators from feature importance.",
      "Wrapped the model in a Flask app with an HTML/CSS interface for real-time predictions from patient parameters.",
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "Flask", "ML"],
    accent: "coral",
    metrics: [
      { v: "93%", l: "accuracy" },
      { v: "400", l: "records" },
      { v: "25", l: "attributes" },
    ],
    featured: true,
  },
  {
    index: "04",
    title: "NEOMA Student Onboarding Platform",
    subtitle: "One interface for the entire arrival journey",
    objective:
      "A centralized platform for international students — academic processes, housing, transport and campus services in one place — born from real onboarding friction.",
    points: [
      "Mapped recurring pain points (scattered information, repetitive admin queries) into functional features.",
      "Applied user-centric design to cut information fragmentation and standardize onboarding workflows.",
    ],
    tags: ["Lovable", "Supabase", "Business Analysis", "UX"],
    accent: "amber",
    metrics: [
      { v: "1", l: "unified hub" },
      { v: "60%+", l: "queries automated" },
    ],
    featured: false,
  },
  {
    index: "05",
    title: "Everyday AI Automation",
    subtitle: "An ongoing bench of LLM experiments",
    objective:
      "Not a production system — a running set of experiments asking how far AI can take the repetitive parts of analytics: extraction, summarization, drafting, chatbots and small tools.",
    points: [
      "Chained LLM calls, data and triggers into repeatable flows with n8n and Claude; ran local models through Ollama and LM Studio for private extraction and summarization.",
      "Prototyped interfaces and tools via vibe-coding with Lovable and Bolt, and explored coding agents like Qwen Code and Opencode along the way.",
    ],
    tags: ["n8n", "Claude", "Ollama", "LM Studio", "Lovable", "Bolt", "Qwen Code"],
    accent: "coral",
    metrics: [
      { v: "6+", l: "tools in rotation" },
      { v: "now", l: "& ongoing" },
    ],
    featured: false,
  },
];

export const AI_TOOLS = [
  { name: "ChatGPT", mark: "gpt" },
  { name: "Claude & Claude API", mark: "claude" },
  { name: "n8n", mark: "n8n" },
  { name: "Ollama", mark: "ollama" },
  { name: "LLM APIs", mark: "api" },
  { name: "Supabase", mark: "db" },
];

export const AI_ALSO = [
  "LM Studio",
  "Qwen Code",
  "Opencode",
  "Lovable",
  "Bolt",
  "…and whatever the ecosystem ships next",
];

export const PIPELINE = [
  {
    step: "01",
    name: "Ingest",
    desc: "Pull raw data in — files, webhooks, databases and feeds.",
    tool: "n8n triggers",
  },
  {
    step: "02",
    name: "Clean",
    desc: "Normalize, dedupe and validate into one tidy shape.",
    tool: "Python · SQL",
  },
  {
    step: "03",
    name: "Analyze",
    desc: "Run the metrics, models and queries that matter.",
    tool: "BigQuery · Pandas",
  },
  {
    step: "04",
    name: "Generate",
    desc: "An LLM drafts the summary, insight or next-step note.",
    tool: "Claude API · Ollama",
  },
  {
    step: "05",
    name: "Review",
    desc: "A human checks the draft — AI suggests, people decide.",
    tool: "human-in-the-loop",
  },
  {
    step: "06",
    name: "Ship",
    desc: "Push to a dashboard, report or alert automatically.",
    tool: "Power BI · webhooks",
  },
];

export const SKILL_AREAS = [
  {
    name: "Data Analytics",
    note: "SQL · Python · R · EDA · data cleaning & wrangling",
  },
  {
    name: "Business Intelligence",
    note: "Power BI · Tableau · Excel · dashboard design & storytelling",
  },
  {
    name: "Statistics & Machine Learning",
    note: "Regression · classification · clustering · A/B testing · time series",
  },
  {
    name: "Cloud & Data Engineering",
    note: "GCP · BigQuery · ETL/ELT · data modeling & validation",
  },
  {
    name: "AI & Automation",
    note: "Generative AI · prompt engineering · n8n · Ollama workflows",
  },
];

export const TOOLKIT = [
  { group: "Programming", items: ["Python", "SQL", "R", "JavaScript"] },
  {
    group: "BI & Visualization",
    items: ["Power BI", "Tableau", "Excel", "Looker Studio", "Matplotlib", "Plotly"],
  },
  { group: "Cloud & Data", items: ["GCP", "BigQuery", "Cloud Storage", "ETL / ELT"] },
  { group: "Databases", items: ["SQL", "Oracle", "PostgreSQL"] },
  {
    group: "ML & Statistics",
    items: ["Scikit-learn", "Pandas", "NumPy", "Hypothesis Testing", "Time Series"],
  },
  {
    group: "Enterprise Tech",
    items: ["Oracle Fusion Middleware", "Linux", "ServiceNow"],
  },
  {
    group: "AI & Automation",
    items: ["Generative AI", "Prompt Engineering", "n8n", "Ollama", "AI Workflows"],
  },
  { group: "Development", items: ["Git", "GitHub", "HTML", "CSS"] },
];

export const EDUCATION = [
  {
    school: "NEOMA Business School",
    degree: "M.Sc. Business Analytics",
    period: "Sep 2024 – Dec 2025",
    place: "Rouen, France",
    coursework: [
      "Data Visualization & Storytelling",
      "Python & R for Business Analytics",
      "Enterprise Data Management",
      "Applied Business Analytics",
    ],
    accent: "teal",
  },
  {
    school: "Stanley College of Engineering & Technology",
    degree: "B.E. Computer Science & Engineering",
    period: "Aug 2017 – Jul 2021",
    place: "Hyderabad, India",
    coursework: [
      "Data Structures",
      "Algorithms",
      "DBMS",
      "Artificial Intelligence",
      "Data Mining",
      "Machine Learning",
    ],
    accent: "amber",
  },
];

export const CERTIFICATIONS = [
  { name: "Data Analysis with Excel Pivot Tables", issuer: "365 Financial Analyst", date: "Mar 2026" },
  { name: "Alteryx Bootcamp", issuer: "Udemy", date: "Feb 2026" },
  { name: "Agile & Scrum Project Management", issuer: "Udemy", date: "Jan 2026" },
  { name: "Intro to Generative AI & Agents", issuer: "Microsoft", date: "Dec 2025" },
  { name: "Product Management for AI & Data Science", issuer: "Udemy", date: "Dec 2025" },
  { name: "Practical A/B Testing", issuer: "LinkedIn Learning", date: "Sep 2025" },
  { name: "R for Data Science", issuer: "LinkedIn Learning", date: "Jan 2025" },
  { name: "Data Analytics & Visualization VEP", issuer: "Accenture", date: "Jul 2023" },
  { name: "Machine Learning", issuer: "SmartBridge", date: "Jun 2020" },
];

export const LANGUAGES = [
  { name: "English", level: "C2", pct: 98 },
  { name: "Telugu", level: "Native", pct: 100 },
  { name: "Hindi", level: "C2", pct: 96 },
  { name: "French", level: "A2 · beginner", pct: 28 },
];
