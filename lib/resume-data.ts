export const personalInfo = {
  name: "Alleah Tricia De Castro",
  title: "Data Analytics Associate",
  location: "Bulacan, Philippines",
  phone: "+63 968 559 2019",
  email: "alleahtricia.decastro08@gmail.com",
  linkedin: "https://linkedin.com/in/alleah-tricia-de-castro",
  linkedinLabel: "linkedin.com/in/alleah-tricia-de-castro",
  resumeFile:
    "https://thj8grvhpdzlui4x.public.blob.vercel-storage.com/Alleah%20Tricia%20De%20Castro%20Resume.pdf",
} as const

const careerStartDate = new Date(2023, 5, 1) // June 2023, per the Pepsi-Cola Products role start

function getYearsOfExperience(startDate: Date): string {
  const now = new Date()
  let years = now.getFullYear() - startDate.getFullYear()
  const hasHadAnniversaryThisYear =
    now.getMonth() > startDate.getMonth() ||
    (now.getMonth() === startDate.getMonth() && now.getDate() >= startDate.getDate())

  if (!hasHadAnniversaryThisYear) {
    years -= 1
  }

  return `${years}+`
}

export const summary = `Data Analyst with ${getYearsOfExperience(careerStartDate)} years of experience turning messy sales and market data into decisions leadership can act on. I clean and structure complex datasets, build Power BI dashboards that cut reporting time, and translate requests from commercial and sales teams into clear, data-backed recommendations that actually get used.`

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

const companyCount = new Set(experience.map((role) => role.company)).size

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

const skillCount = skillGroups.reduce((total, group) => total + group.skills.length, 0)

export const stats = [
  { label: "Years of Experience", value: getYearsOfExperience(careerStartDate) },
  { label: "Companies", value: `${companyCount}` },
  { label: "Skills", value: `${skillCount}+` },
  { label: "Core Tool", value: "Power BI" },
]

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
