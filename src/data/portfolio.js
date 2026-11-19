// ───────────────────────────────────────────────────────────────
//  ALL PORTFOLIO CONTENT LIVES IN THIS FILE.
//  Edit text, links and lists here — no need to touch components.
// ───────────────────────────────────────────────────────────────

// Files in /public are served from the site root. BASE_URL keeps
// paths working if the site is hosted in a sub-folder.
const asset = (file) => `${import.meta.env.BASE_URL}${file}`;

export const profile = {
  name: "Muhammad Zaid",
  firstName: "Muhammad",
  lastName: "Zaid",
  initials: "MZ",
  title: "QA Engineer | Software Tester | Accessibility Testing",
  tagline: "QA Engineer focused on building reliable, accessible and high-quality software.",
  intro:
    "I test software the way people actually use it — through functional and regression suites, automated checks with Selenium and PyTest, API calls in Postman, and with a screen reader and a keyboard. Before QA, I kept enterprise users productive as a System Engineer, which taught me to trace every problem to its root cause.",
  location: "New Delhi, India",
  availability: "Open to QA & accessibility roles",
  email: "zaidsiddiquiii07@gmail.com",
  linkedin: "https://www.linkedin.com/in/zaid-sheikhhh/",

  // GitHub profile — the GitHub icon appears wherever this is set.
  github: "https://github.com/Sheiikhzaid",

  // PROFILE PHOTO: put your photo at /public/profile.jpg (square, ~800×800).
  // If the file is missing, an elegant "MZ" monogram is shown instead.
  photo: asset("profile.jpg"),

  // CV: put your PDF at /public/Muhammad_Zaid_CV.pdf (keep this exact name,
  // or change it here).
  cv: asset("Muhammad_Zaid_CV.pdf"),

  // Optional: paste a Formspree / Getform endpoint to send the contact form
  // without opening an email app, e.g. "https://formspree.io/f/abcdwxyz".
  formEndpoint: "https://formspree.io/f/mljbnkvq",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "credentials", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const stats = [
  { value: 250, suffix: "", label: "Pages & screens audited against WCAG 2.1/2.2 and Section 508" },
  { value: 120, suffix: "+", label: "Functional, regression and accessibility test cases executed" },
  { value: 45, suffix: "+", label: "Defects reported and tracked to closure in Jira" },
  { value: 20, suffix: "%", label: "Fewer repeat support tickets through better triage" },
];

export const about = {
  heading: ["Quality is a", "user experience."],
  paragraphs: [
    "I'm a B.Tech Computer Science graduate with hands-on experience in software testing, test automation, accessibility auditing and enterprise technical support.",
    "At Magic EdTech I executed functional, regression and accessibility test cases, audited hundreds of screens against WCAG and Section 508, and automated repeatable checks with Selenium and PyTest. Before that, at IP House, I resolved 40–50 support tickets a day across Windows, VDI, Citrix and VPN environments.",
    "I enjoy solving problems, finding the defects others miss, improving the experience for every user — including those who rely on assistive technology — and shipping software people can depend on.",
  ],
  facts: [
    { label: "Based in", value: "New Delhi, India" },
    { label: "Degree", value: "B.Tech, Computer Science (AKTU)" },
    { label: "Focus", value: "QA · Automation · Accessibility" },
    { label: "Status", value: "Open to opportunities" },
  ],
};

// icon = a lucide-react icon name (see https://lucide.dev/icons)
export const skills = [
  {
    title: "Testing & QA",
    icon: "ClipboardCheck",
    items: ["Manual Testing", "Functional Testing", "Regression Testing", "Smoke Testing", "Test Case Design", "Bug Reporting", "STLC & SDLC", "Agile/Scrum"],
  },
  {
    title: "Automation",
    icon: "Bot",
    items: ["Python", "Selenium WebDriver", "PyTest", "Page Object Model", "XPath", "CSS Selectors", "Axe-Core"],
  },
  {
    title: "API Testing",
    icon: "Braces",
    items: ["Postman", "REST API Testing", "JSON Validation", "HTTP Status Codes"],
  },
  {
    title: "Accessibility",
    icon: "Accessibility",
    items: ["WCAG 2.1 / 2.2", "Section 508", "NVDA", "JAWS", "VoiceOver", "Axe DevTools", "WAVE", "Keyboard Navigation", "Color Contrast"],
  },
  {
    title: "Technical Support",
    icon: "Headset",
    items: ["ServiceNow", "Jira Service Desk", "Active Directory", "Windows", "Linux", "VDI", "Citrix", "VPN", "Incident Management", "Root Cause Analysis"],
  },
  {
    title: "Tools & Databases",
    icon: "Database",
    items: ["Jira", "TestRail", "Confluence", "Git", "GitHub", "Chrome DevTools", "SQL", "MySQL", "AWS (EC2, S3, RDS)"],
  },
];

export const experience = [
  {
    role: "Software Tester",
    company: "Magic EdTech",
    period: "April 2026 – August 2026",
    tags: ["Selenium", "PyTest", "Postman", "Jira", "NVDA", "JAWS", "VoiceOver"],
    points: [
      "Executed 120+ functional, regression and accessibility test cases.",
      "Audited 250 pages and screens against WCAG 2.1/2.2 and Section 508.",
      "Reported and tracked 45+ defects using Jira.",
      "Automated functional and regression checks using Selenium and PyTest.",
      "Conducted REST API testing using Postman.",
      "Performed accessibility testing using NVDA, JAWS, VoiceOver and keyboard navigation.",
    ],
  },
  {
    role: "System Engineer",
    company: "IP House",
    period: "June 2025 – November 2025",
    tags: ["ServiceNow", "Jira Service Desk", "Active Directory", "Citrix", "VDI", "VPN"],
    points: [
      "Resolved 40–50 support tickets per day.",
      "Supported Windows, VDI, Citrix and VPN environments.",
      "Managed incidents using ServiceNow and Jira Service Desk.",
      "Troubleshot user access and account issues using Active Directory.",
      "Conducted root cause analysis and documented SOPs.",
      "Reduced repeat ticket volume by 20% through improved triage workflows.",
    ],
  },
];

// github: "" shows a muted "Code on request" note instead of a button.
// Paste each repository URL when it's ready.
export const projects = [
  {
    category: "Test automation · Accessibility",
    title: "Automated Accessibility and Functional Testing Engine",
    summary:
      "A Python framework that runs functional tests and accessibility audits in one pass, then uses an LLM to explain failures and suggest fixes.",
    points: [
      "Built an automation framework for functional testing and accessibility audits.",
      "Integrated Axe-Core to identify WCAG violations.",
      "Generated HTML test reports.",
      "Added an LLM feature to analyze test failures and suggest HTML/CSS fixes.",
    ],
    tech: ["Python", "Selenium WebDriver", "PyTest", "Axe-Core", "LLM API"],
    github: "",
  },
  {
    category: "Data · Validation",
    title: "Conversational SQL Analytics and Validation Agent",
    summary:
      "Ask questions in plain English, get SQL back — and have every query checked for syntax, correctness and speed before you trust it.",
    points: [
      "Built a natural-language-to-SQL tool.",
      "Automated validation of SQL syntax, query results and execution latency.",
    ],
    tech: ["Python", "OpenAI API", "SQL", "MySQL"],
    github: "",
  },
  {
    category: "Machine learning · Support",
    title: "Ticket Classification and Defect Support Bot",
    summary:
      "An NLP classifier that reads incoming bug reports and routes each one to the engineering team that should own it.",
    points: [
      "Developed an NLP-based classifier to categorize bug reports.",
      "Automated routing of tickets to appropriate engineering teams.",
      "Achieved 88% classification accuracy.",
    ],
    tech: ["Python", "Scikit-Learn", "NLP", "Pandas"],
    github: "",
  },
];

export const education = {
  degree: "B.Tech – Computer Science and Engineering",
  school: "Mangalmay Institute of Engineering and Technology",
  university: "Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow",
  period: "September 2020 – August 2024",
  grade: "CGPA: 6.4",
};

export const certifications = [
  { name: "Cloud Foundations", issuer: "AWS Academy Graduate" },
  { name: "Cloud Architecting", issuer: "AWS Academy Graduate" },
  { name: "Data Engineering", issuer: "AWS Academy Graduate" },
  { name: "Forward Program", issuer: "McKinsey.org" },
  { name: "Data Analytics and Visualization Virtual Job Simulation", issuer: "Accenture" },
  { name: "Data Visualisation Virtual Job Simulation", issuer: "Tata" },
];
