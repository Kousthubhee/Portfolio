export const PROFILE = {
  name: "Kousthubhee Krishna Kotte",
  firstName: "KOUSTHUBHEE",
  lastName: "KRISHNA KOTTE",
  role: "Data & BI Analyst",
  tagline:
    "M.Sc. Business Analytics (NEOMA, France) · ex-Infosys Systems Engineer · SQL, Python, BI & AI workflows",
  location: "India",
  email: "kousthubheekrishnakotte@gmail.com",
  phone: "+91 · available on request",
  linkedin: "https://www.linkedin.com/in/kousthubhee-krishna-kotte",
  github: "https://github.com/Kousthubhee/Projects",
  portfolio: "https://kousthubheekrishna.great-site.net/",
  summary:
    "I sit at the intersection of data, technology and business. I began by keeping enterprise systems alive at Infosys, crossed continents to study Business Analytics in France, and now I turn messy data into dashboards, models and decisions — with AI automating the repetitive parts in between.",
};

export const NAV_LINKS = [
  { id: "journey", label: "Journey" },
  { id: "story", label: "Story" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "ai-lab", label: "AI Lab" },
  { id: "skills", label: "Skills" },
];

export const HERO_QUERY = `$ query --source candidate.profile

SELECT name, focus, status
FROM   candidates
WHERE  curiosity = 'unbounded'
  AND  systems <> 'maintained, but understood'
ORDER  BY momentum DESC
LIMIT  1;`;

export const HERO_ROWS: { k: string; v: string; accent?: string }[] = [
  { k: "name", v: "Kousthubhee Krishna Kotte" },
  { k: "focus", v: "Data · BI · Business Analytics" },
  { k: "route", v: "India → France → India" },
  { k: "stack", v: "SQL · Python · Power BI · Tableau · LLMs" },
  { k: "status", v: "OPEN TO WORK", accent: "amber" },
];

export const KPIS = [
  { value: 13.3, decimals: 1, suffix: "M+", label: "transaction records analyzed" },
  { value: 93, suffix: "%", label: "CKD model accuracy" },
  { value: 240, suffix: "+", label: "survey responses turned into features" },
  { value: 60, suffix: "%+", label: "student queries auto-resolved by AI" },
  { value: 3, suffix: "", label: "roadmap decisions shaped by my KPIs" },
  { value: 9, suffix: "", label: "certifications & counting" },
];

export const TICKER = [
  "SQL", "Python", "Power BI", "Tableau", "BigQuery", "GCP", "Snowflake",
  "Looker Studio", "n8n", "Ollama", "Claude API", "ChatGPT", "Scikit-learn",
  "Pandas", "Alteryx", "R", "Supabase", "Flask", "Excel", "A/B Testing",
  "ETL / ELT", "Prompt Engineering", "Git",
];

export const ROUTE = [
  { code: "HYD", city: "Hyderabad, India", years: "2017 – 2023" },
  { code: "CDG", city: "Rouen, France", years: "2024 – 2025" },
  { code: "HYD", city: "Hyderabad, India", years: "2025 →" },
];

export const MILESTONES = [
  {
    period: "2017 — 2021",
    place: "Hyderabad, India",
    tag: "FOUNDATION",
    title: "B.E. Computer Science & Engineering",
    org: "Stanley College of Engineering & Technology",
    text: "Data structures, algorithms, DBMS, AI and data mining — the technical bedrock everything else was built on.",
    accent: "teal",
  },
  {
    period: "MAR — MAY 2021",
    place: "Remote, India",
    tag: "FIRST SIGNALS",
    title: "Data Science Intern",
    org: "ShapeAI",
    text: "Cleaned and analyzed 10,000+ records with Pandas and NumPy; designed Tableau visualizations for non-technical stakeholders. The first hint that data was the direction.",
    accent: "teal",
  },
  {
    period: "SEP 2021 — AUG 2023",
    place: "Hyderabad, India",
    tag: "SYSTEMS",
    title: "Systems Engineer — Data & Reporting Analytics",
    org: "Infosys",
    text: "Enterprise middleware operations on Oracle Fusion: incident logs queried with SQL, SLA dashboards in Excel, data validation across migrations spanning three environments.",
    accent: "coral",
  },
  {
    period: "SEP 2023 — AUG 2024",
    place: "Hyderabad, India",
    tag: "REBUILD",
    title: "Career Break — Professional Development",
    org: "Self-directed",
    text: "A deliberate year of full-time upskilling in Python, statistics and machine learning while preparing for a master's abroad. Not a gap — a pivot.",
    accent: "coral",
  },
  {
    period: "SEP 2024 — DEC 2025",
    place: "Rouen, France",
    tag: "ANALYTICS",
    title: "M.Sc. Business Analytics",
    org: "NEOMA Business School",
    text: "Statistics, predictive analytics, BI, data modeling and ML — learned to ask whether the question itself is correct before writing the query.",
    accent: "teal",
  },
  {
    period: "MAY — SEP 2025",
    place: "Rouen, France",
    tag: "PRODUCT",
    title: "Product & Data Analytics Trainee",
    org: "NEOMA Incubator",
    text: "240+ survey responses → 3 prioritized features. Built the KPI framework behind 3 roadmap decisions; shipped an AI chatbot resolving 60%+ of queries.",
    accent: "amber",
  },
  {
    period: "DEC 2025 → NOW",
    place: "India · open to the world",
    tag: "YOU ARE HERE",
    title: "Open to Data, BI, Product & Analytics Engineering roles",
    org: "India / Remote / International",
    text: "Back home with a different lens — technical, analytical and business at once. Looking for teams where data drives decisions and curiosity is an asset.",
    accent: "amber",
    current: true,
  },
];

export const CHAPTERS = [
  {
    numeral: "I",
    title: "The Beginning",
    accent: "teal",
    body: "Computer Science engineering, then Infosys as a Systems Engineer — reboots, migrations, troubleshooting, Oracle Fusion Middleware. Not glamorous, but it taught me what university could not: behind every dashboard is an ecosystem of systems, data, people and decisions.",
    quote: "Technology is not just about writing code.",
  },
  {
    numeral: "II",
    title: "Wanting Something More",
    accent: "coral",
    body: "The questions behind the technology became louder than the technology itself. Why did the process behave that way? What could the data tell us? Those questions pushed me toward analytics — and toward NEOMA Business School in France.",
    quote: "I had a technical foundation, but I wanted the why behind it.",
  },
  {
    numeral: "III",
    title: "Between Continents",
    accent: "amber",
    body: "A new country, a new language, an international classroom. Studying Business Analytics connected two parts of me that had felt separate — technology and business. Uncomfortable at times, which is precisely why it mattered.",
    quote: "A good analyst asks whether the question itself is correct.",
  },
  {
    numeral: "IV",
    title: "A Different Perspective",
    accent: "teal",
    body: "Returning to India, I was no longer just a CS graduate with enterprise experience. I could look at a problem from multiple angles at once. I also learned that skills are only half the story — a resume, a portfolio and a project must each tell a coherent story.",
    quote: "A project should show not only what was built, but why it mattered.",
  },
  {
    numeral: "V",
    title: "Learning to Build",
    accent: "coral",
    body: "I rarely want to learn something purely theoretically. A dataset becomes a pipeline, a pipeline becomes a model, a model feeds a dashboard, a dashboard becomes a decision tool — and AI sits across the whole workflow, automating the repetitive parts.",
    quote: "If I want to understand a technology, I want to build something with it.",
  },
  {
    numeral: "VI",
    title: "The Person Behind the Career",
    accent: "amber",
    body: "Curious, sometimes about too many things at once — analytics to cloud, AI to automation, portfolio to open source. But the thread is constant: I like breaking complicated things into pieces and finding the more efficient way.",
    quote: "Technology gives curiosity somewhere to go.",
  },
  {
    numeral: "VII",
    title: "What I Am Looking For",
    accent: "teal",
    body: "Work at the intersection of data, technology and business — real problems, diverse people, room to grow. Open to India and international. The tools will change; the goal is to become someone capable of learning the next one.",
    quote: "Not to memorize technologies, but to learn the next one.",
  },
  {
    numeral: "VIII",
    title: "The Road Ahead",
    accent: "amber",
    body: "From maintaining systems, to analyzing data, to connecting analytics with business, to exploring how AI transforms how problems get solved. I don't know where the road ends — and I don't need to. I just want to keep moving.",
    quote: "A story about continuously figuring things out.",
  },
];

export const EXPERIENCE = [
  {
    role: "Product & Data Analytics Trainee",
    org: "NEOMA Incubator",
    place: "Rouen, France",
    period: "May 2025 — Sep 2025 · 5 months",
    accent: "amber",
    bullets: [
      "Collected and systematically analyzed 240+ student survey responses to surface recurring platform friction points, directly informing the prioritization of 3 core product features.",
      "Defined measurable product KPIs and built a performance-tracking framework; presented insights to leadership that shaped 3 roadmap decisions.",
      "Deployed an AI-powered platform with an FAQ chatbot on structured knowledge-base data — resolving 60%+ of student queries and cutting support load by 30%.",
    ],
    stack: ["Python", "KPI Design", "LLM Chatbot", "Product Analytics"],
  },
  {
    role: "Systems Engineer — Data & Reporting Analytics",
    org: "Infosys",
    place: "Hyderabad, India",
    period: "Sep 2021 — Aug 2023 · 2 years",
    accent: "coral",
    bullets: [
      "Queried and analyzed large-scale incident log data with SQL to identify recurring failure patterns, applying root-cause analysis to improve system stability.",
      "Designed and maintained Excel-based BI dashboards tracking SLA compliance and operational KPIs, translating raw log data into trackable metrics.",
      "Performed SQL-based data validation and reconciliation across production migrations spanning 3 environments, protecting data integrity for downstream analysis.",
      "Partnered with Network, BI and Operations teams inside Agile/Scrum to prioritize data requirements and deliver timely insights.",
    ],
    stack: ["Oracle Fusion Middleware", "SQL", "Linux", "ServiceNow", "Excel BI"],
  },
  {
    role: "Career Break — Professional Development",
    org: "Self-directed",
    place: "Hyderabad, India",
    period: "Sep 2023 — Aug 2024 · 1 year",
    accent: "teal",
    bullets: [
      "Dedicated full-time to upskilling in Python, statistics and machine learning fundamentals.",
      "Prepared for and secured admission to the M.Sc. in Business Analytics at NEOMA Business School, France.",
    ],
    stack: ["Python", "Statistics", "Machine Learning"],
  },
  {
    role: "Data Science Intern",
    org: "ShapeAI",
    place: "Remote, India",
    period: "Mar 2021 — May 2021 · 3 months",
    accent: "teal",
    bullets: [
      "Applied Python (Pandas, NumPy) to clean, process and analyze 10,000+ records, identifying behavioral trends and anomalies.",
      "Designed interactive Tableau visualizations to communicate findings to non-technical stakeholders.",
    ],
    stack: ["Python", "Pandas", "NumPy", "Tableau"],
  },
];

export type Project = {
  index: string;
  title: string;
  subtitle: string;
  objective: string;
  points: string[];
  metrics: { v: string; l: string }[];
  tags: string[];
  accent: "amber" | "teal" | "coral";
  featured?: boolean;
};

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Financial Transactions Analytics",
    subtitle: "13.3M+ banking transactions turned into risk & behaviour intelligence",
    objective:
      "An end-to-end financial analytics solution for customer spending behaviour, credit utilisation and operational risk on real-scale banking data.",
    points: [
      "Integrated transaction, customer, card and merchant datasets into one unified analytical model.",
      "Feature engineering with Pandas/NumPy — credit utilisation, debt-to-income ratio, temporal features, missing-value treatment.",
      "SQLAlchemy-driven SQL workflows for complex business queries and scalable exploration.",
      "Matplotlib, Seaborn and Plotly visualizations for behaviour, merchant performance and failure analysis (insufficient balance, PIN failures, technical errors).",
    ],
    metrics: [
      { v: "13.3M+", l: "records processed" },
      { v: "4", l: "datasets unified" },
      { v: "3", l: "high-risk segments found" },
    ],
    tags: ["Python", "Pandas", "NumPy", "SQLAlchemy", "Plotly", "Seaborn"],
    accent: "amber",
    featured: true,
  },
  {
    index: "02",
    title: "Global AI Impact Analytics Dashboard",
    subtitle: "Executive-ready Tableau intelligence on AI adoption, 2020–2025",
    objective:
      "An interactive BI dashboard analyzing AI adoption, revenue growth, workforce transformation and consumer sentiment across countries and industries.",
    points: [
      "Integrated 200+ records across 20+ business metrics covering six years of AI adoption trends.",
      "KPI cards, geographic visualizations, trend analyses and story-driven navigation in Tableau.",
      "Compared adoption rates, revenue growth, consumer trust, job displacement and human–AI collaboration across regions.",
      "Interactive filters enabled cross-industry exploratory analysis for strategic stakeholders.",
    ],
    metrics: [
      { v: "200+", l: "records · 20+ metrics" },
      { v: "10×10", l: "industries × countries" },
      { v: "6 yrs", l: "of trend coverage" },
    ],
    tags: ["Tableau", "KPI Reporting", "Data Storytelling", "Dashboard Design"],
    accent: "teal",
    featured: true,
  },
  {
    index: "03",
    title: "Chronic Kidney Disease Prediction",
    subtitle: "Decision-tree ML pipeline with a real-time Flask web application",
    objective:
      "A machine-learning prediction system for early CKD detection from patient clinical data, deployed as an interactive web app.",
    points: [
      "Complete pipeline: missing-value treatment, label encoding, scaling, EDA via heatmaps and count plots.",
      "Decision Tree classifier on the UCI CKD dataset — 400 records × 25 clinical attributes.",
      "Evaluated with ROC analysis and confusion matrix; feature importance surfaced the top clinical risk indicators.",
      "Flask + HTML/CSS interface for entering patient parameters and receiving real-time predictions.",
    ],
    metrics: [
      { v: "93%", l: "classification accuracy" },
      { v: "400", l: "patient records" },
      { v: "25", l: "clinical attributes" },
    ],
    tags: ["Python", "Scikit-learn", "Pandas", "Flask", "Healthcare Analytics"],
    accent: "coral",
    featured: true,
  },
  {
    index: "04",
    title: "NEOMA Student Onboarding Platform",
    subtitle: "AI-powered onboarding — from survey friction points to shipped features",
    objective:
      "A centralized digital platform streamlining onboarding for international students, consolidating academic, administrative and campus resources.",
    points: [
      "Mapped onboarding pain points from 240+ survey responses into functional platform features.",
      "AI chatbot built on structured knowledge-base data resolved 60%+ of repetitive queries.",
      "Behavioural tracking and predictive modeling personalized user journeys.",
      "Cut support load by ~30% and demonstrated process standardization for university workflows.",
    ],
    metrics: [
      { v: "60%+", l: "queries auto-resolved" },
      { v: "−30%", l: "support load" },
      { v: "3", l: "features prioritized" },
    ],
    tags: ["Supabase", "Lovable", "AI Chatbot", "UX", "Product Analytics"],
    accent: "amber",
    featured: true,
  },
  {
    index: "05",
    title: "Airline Financial Data Analytics",
    subtitle: "Cloud ELT workflow — BigQuery, Dataform & Looker Studio",
    objective:
      "Analysis of airline financial datasets — revenue, operating profit/loss, net income — on a GCP-native analytics stack.",
    points: [
      "Cleaned and transformed multi-year financial datasets for analytical use.",
      "Designed analytical queries and KPI-focused reporting structures.",
      "Explored a cloud workflow across Cloud Storage, BigQuery, BigQuery ML, Dataform and Looker Studio.",
    ],
    metrics: [
      { v: "GCS → BQ", l: "cloud ELT flow" },
      { v: "KPI", l: "reporting structures" },
    ],
    tags: ["BigQuery", "Dataform", "Looker Studio", "GCP", "SQL"],
    accent: "teal",
  },
  {
    index: "06",
    title: "AI-Powered Job Search Automation",
    subtitle: "Treating the job hunt itself as a system to be optimized",
    objective:
      "An AI-assisted workflow that identifies relevant roles, extracts requirements, tailors applications and tracks everything automatically.",
    points: [
      "LLM-powered extraction of required skills from job descriptions.",
      "Automated resume tailoring and cover-letter generation from a master resume.",
      "ATS-oriented skill matching, recruiter discovery and structured application tracking.",
    ],
    metrics: [
      { v: "n8n", l: "orchestration" },
      { v: "LLM", l: "extraction & tailoring" },
    ],
    tags: ["n8n", "Claude API", "Ollama", "Python", "Automation"],
    accent: "coral",
  },
];

export const PIPELINE = [
  { step: "01", name: "Discover", desc: "Aggregate relevant openings from job boards", tool: "Python · APIs" },
  { step: "02", name: "Extract", desc: "Parse requirements & skills from descriptions", tool: "Claude / GPT API" },
  { step: "03", name: "Match", desc: "Score fit against the master resume", tool: "Embeddings · SQL" },
  { step: "04", name: "Tailor", desc: "Resume + cover letter per opportunity", tool: "n8n · LLM" },
  { step: "05", name: "Track", desc: "Applications in a structured database", tool: "Supabase" },
  { step: "06", name: "Refine", desc: "Experiment, measure, improve the loop", tool: "Ollama · local LLM" },
];

export const AI_TOOLS = [
  { name: "ChatGPT", use: "analysis copilot & sounding board", mark: "gpt" },
  { name: "Claude", use: "long-context extraction & writing", mark: "claude" },
  { name: "n8n", use: "workflow orchestration with LLM nodes", mark: "n8n" },
  { name: "Ollama", use: "local LLM experiments & private inference", mark: "ollama" },
  { name: "LLM APIs", use: "OpenAI & Anthropic in Python pipelines", mark: "api" },
  { name: "Supabase", use: "structured tracking + vector-friendly storage", mark: "db" },
];

export const SKILL_BARS = [
  { name: "SQL & Data Modeling", level: 90, note: "window functions · CTEs · BigQuery" },
  { name: "BI & Dashboards", level: 88, note: "Power BI · Tableau · Looker Studio" },
  { name: "Python for Analytics", level: 85, note: "Pandas · NumPy · SQLAlchemy" },
  { name: "GenAI & Prompt Engineering", level: 82, note: "Claude · GPT · Ollama · RAG-style KBs" },
  { name: "ETL / ELT & Pipelines", level: 78, note: "Dataform · validation · transformation" },
  { name: "Statistics & Machine Learning", level: 76, note: "regression · classification · A/B testing" },
  { name: "Automation & AI Workflows", level: 74, note: "n8n · APIs · Python scripting" },
  { name: "Cloud Data Platforms", level: 70, note: "GCP · BigQuery · Snowflake · Redshift" },
];

export const TOOLKIT = [
  { group: "Programming", items: ["Python", "SQL", "R", "JavaScript", "Shell Scripting"] },
  { group: "BI & Visualization", items: ["Power BI", "Tableau", "Excel", "Looker Studio", "Matplotlib", "Plotly"] },
  { group: "Cloud & Data", items: ["GCP", "BigQuery", "Cloud Storage", "Snowflake", "Redshift"] },
  { group: "Data Engineering", items: ["ETL/ELT", "Dataform", "Data Modeling", "Data Validation", "SQLAlchemy"] },
  { group: "ML & Statistics", items: ["Scikit-learn", "Regression", "Classification", "Clustering", "A/B Testing", "Time Series"] },
  { group: "AI & Automation", items: ["Generative AI", "Prompt Engineering", "LLM APIs", "Ollama", "n8n", "Chatbots"] },
  { group: "Enterprise Tech", items: ["Oracle Fusion Middleware", "Linux", "ServiceNow", "Agile / Scrum"] },
  { group: "Development", items: ["Git", "GitHub", "Flask", "HTML/CSS", "API Integration", "Supabase"] },
];

export const EDUCATION = [
  {
    degree: "M.Sc. Business Analytics",
    school: "NEOMA Business School",
    place: "Rouen, France",
    period: "Sep 2024 — Dec 2025",
    accent: "amber",
    coursework: [
      "Data Visualization & Storytelling", "Python & R for Business Analytics",
      "Enterprise Data Management", "Applied Business Analytics", "Predictive Analytics",
      "Machine Learning", "Statistics", "Data Modeling",
    ],
  },
  {
    degree: "B.E. Computer Science & Engineering",
    school: "Stanley College of Engineering & Technology",
    place: "Hyderabad, India",
    period: "Aug 2017 — Jul 2021",
    accent: "teal",
    coursework: [
      "Data Structures", "Algorithms", "Database Management Systems",
      "Artificial Intelligence", "Data Mining", "Machine Learning",
    ],
  },
];

export const CERTIFICATIONS = [
  { name: "Data Analysis with Excel Pivot Tables", issuer: "365 Financial Analyst", date: "Mar 2026" },
  { name: "Alteryx Bootcamp", issuer: "Udemy", date: "Feb 2026" },
  { name: "The Complete Agile & Scrum Project Management Course", issuer: "Udemy", date: "Jan 2026" },
  { name: "Introduction to Generative AI and Agents", issuer: "Microsoft", date: "Dec 2025" },
  { name: "The Product Management for AI & Data Science Course", issuer: "Udemy", date: "Dec 2025" },
  { name: "Practical A/B Testing", issuer: "LinkedIn Learning", date: "Sep 2025" },
  { name: "R for Data Science: Analysis and Visualization", issuer: "LinkedIn Learning", date: "Jan 2025" },
  { name: "Data Analytics and Visualization Virtual Experience", issuer: "Accenture", date: "Jul 2023" },
  { name: "Machine Learning", issuer: "SmartBridge Educational Services", date: "Jun 2020" },
];

export const LANGUAGES = [
  { name: "Telugu", level: "Native", pct: 100 },
  { name: "English", level: "C2 · Professional", pct: 96 },
  { name: "Hindi", level: "C2 · Professional", pct: 92 },
  { name: "French", level: "A2 · Learning", pct: 38 },
];

export const TARGET_ROLES = [
  "Data Analyst", "Business Analyst", "BI Analyst", "Product Analyst",
  "Analytics Engineer", "Junior Data Engineer", "Junior AI Engineer",
];
