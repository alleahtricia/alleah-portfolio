export const personalInfo = {
  name: "Alleah Tricia De Castro",
  title: "Data Analytics Associate",
  location: "Bulacan, Philippines",
  phone: "+63 968 559 2019",
  email: "alleahtricia.decastro08@gmail.com",
  linkedin: "https://linkedin.com/in/alleah-tricia-de-castro",
  linkedinLabel: "linkedin.com/in/alleah-tricia-de-castro",
  resumeFile: "/Alleah Tricia De Castro Resume.pdf",
} as const

export const summary =
  "Data Analyst with 2+ years of experience turning complex sales and market data into clear, actionable insights. Comfortable working deep in Excel — cleaning, validating, and structuring large datasets — and building dashboards in Power BI that make reporting faster and easier to act on. Experienced in translating requests from commercial and sales teams into practical, data-backed recommendations that actually get used."

export const stats = [
  { label: "Years of Experience", value: "2+" },
  { label: "Companies", value: "2" },
  { label: "Certifications", value: "3" },
  { label: "Core Tool", value: "Power BI" },
] as const

export const experience = [
  {
    title: "Data Analytics Associate",
    company: "Pascual Consumer Healthcare Corporation",
    period: "May 2025 – Present",
    location: "Quezon City, Philippines",
    highlights: [
      "Collect, clean, and validate daily sales data, including Daily Call Reports, stock transfers, and offtake figures, to ensure accuracy for downstream reporting.",
      "Produce descriptive analytics reports and dashboards that surface sales trends for the Marketing and Sales team.",
      "Established Standard Operating Procedures (SOPs) for the SFE Data Analytics Team, improving consistency, timeliness, and compliance with company standards.",
      "Built and maintained a centralized Data Library standardizing SFE datasets (DCR, stock transfer, offtake), reducing retrieval time and improving reporting consistency across teams.",
      "Prepared and analyzed IQVIA market data reports, delivering insights on sales performance and volume movement to support data-driven sales and marketing decisions.",
    ],
  },
  {
    title: "Senior Associate, Commercial Operations, NKA",
    company: "Pepsi-Cola Products Philippines, Inc.",
    period: "Jun 2023 – Dec 2024",
    location: "Muntinlupa City, Philippines",
    highlights: [
      "Delivered Daily Sales Reports and CSL Analysis to support the Commercial Team's decision-making.",
      "Built monthly dashboards and scorecards tracking sales volume and revenue by brand, pack size, and business unit per salesman.",
      "Presented daily, weekly, and monthly in-depth volume analysis by category and SKU to the Regional Commercial Head (SGM).",
      "Prepared and edited correspondence, reports, and presentations for the Regional Commercial Head (SGM).",
      "Provided administrative support to the executive team, coordinating meetings and handling confidential information with discretion.",
    ],
  },
] as const

export const skillGroups = [
  {
    category: "Data Analysis & Reporting",
    skills: [
      "Microsoft Excel",
      "Power BI",
      "SAP Analysis for Microsoft Office",
      "IQVIA Market Data",
      "Dashboard & Scorecard Reporting",
    ],
  },
  {
    category: "ERP & Business Systems",
    skills: ["SAP GUI", "SRCS/SRIC Systems"],
  },
  {
    category: "Productivity & Collaboration",
    skills: [
      "Microsoft 365 (Word, PowerPoint, OneDrive, Forms, Engage)",
      "Asana",
    ],
  },
  {
    category: "Business Processes",
    skills: [
      "SOP Development",
      "Data Governance",
      "Cross-functional Reporting",
      "Project Management",
    ],
  },
] as const

export const certifications = [
  { name: "Lean Six Sigma Yellow Belt", issuer: "Elevate Six Sigma" },
  {
    name: "PBI-05: Microsoft Power BI End-to-End Solutions",
    issuer: "JTR Analytics",
  },
  { name: "Sales Force Effectiveness (SFE) Certification", issuer: "MEPI" },
] as const

export const education = [
  {
    degree: "Bachelor of Science in Industrial Engineering",
    school: "Quezon City University",
    period: "Aug 2019 – Jun 2023",
    location: "Quezon City, Philippines",
  },
] as const

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
] as const
