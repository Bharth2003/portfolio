import type { ExperienceItem, ExtracurricularItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "hyundai-production-intern",
    type: "work",
    title: "Production Engineering Intern",
    organization: "Hyundai Motors Pvt. Ltd.",
    responsibilities: [
      "Implemented automation strategies for quality validation within robotic production systems.",
      "Analysed operational data to inform process optimisation and identify efficiency.",
      "Prepared reports on manufacturing performance, including throughput and quality metrics.",
      "Maintained compliance in high-volume production while monitoring robotics-assisted manufacturing.",
    ],
    contributions: [
      "Automated quality validation for robotic production across multiple assembly lines.",
      "Performed data analysis on equipment and workflow to evaluate effectiveness.",
      "Contributed to defining process standardisation in support of operational excellence.",
    ],
    mission:
      "This role directly supported Hyundai Motors' objectives by enhancing manufacturing precision and efficiency through automation and data-informed decision-making, which helped maintain high production standards and comply with operational guidelines.",
    skillsDeveloped:
      "Automation, Data Analysis, Process Optimisation, Report Generation, Quality Assurance, Robotics Monitoring, Workflow Analysis, Operational Compliance",
  },
  {
    id: "upwork-startup-associate",
    type: "work",
    title: "Startup Ecosystem Associate",
    organization: "Upwork",
    responsibilities: [
      "Managed cross-functional communications, optimising workflows for client requests.",
      "Supported operational events, ensuring adherence to service protocols.",
      "Handled shift operations, balancing priorities and resolving client issues.",
    ],
    contributions: [
      "Optimised client request workflows, which reduced average response times during peak periods.",
      "Ensured 100% compliance with service protocols during operational events, while maintaining service quality for over 50 participants per event.",
      "Improved service accuracy scores by resolving complex client issues within the startup ecosystem.",
    ],
    mission:
      "This position supported Venture Cafe's mission by improving the efficiency and quality of client interactions and event operations, which contributed significantly to service delivery and ecosystem support.",
    skillsDeveloped:
      "Workflow Optimisation, Cross-functional Communication, Event Support, Operations Management, Client Issue Resolution, Service Protocol Compliance",
  },
  {
    id: "msc-robotics",
    type: "education",
    title: "MSc Robotics",
    organization: "Heriot-Watt University",
    location: "Heriot-Watt University, UK",
    startDate: "Sep 2025",
    endDate: "Sep 2026",
    description: [
      "Specialising in autonomous systems, embodied AI, and human-robot interaction",
      "Research focus on integrating LLMs with robotic systems for intelligent decision-making",
      "Coursework in advanced robotics, computer vision, and machine learning",
    ],
  },
  {
    id: "btech",
    type: "education",
    title: "B.E Mechatronics Engineering",
    organization: "Kongu Engineering College",
    location: "Perundurai, India",
    startDate: "Aug 2021",
    endDate: "May 2025",
    description: [
      "Graduated with 7.91 CGPA, specialising in robotics and AI integration",
      "Done projects in metallurgy, robot simulations(ABB, FANUC), CAD(AutoCAD, SolidWorks, Ansys)",
      "Bachelor's project related to Rover design of Prototyping and testing.",
    ],
  },
];

export const extracurricular: ExtracurricularItem[] = [
  {
    id: "robotics-club",
    title: "The Robotics Society",
    organization: "Secretary",
    description: "Lead a 30+ member team in the club by providing various events, speech, workshops and Webinars in related to Mechatronics and Robotics field in Centre of Excellence for 1 year.",
    icon: "Bot",
  },
  {
    id: "venture-cafe",
    title: "Venture Cafe's Edinburgh",
    organization: "Ambassador Volunteer",
    description: "Guided and volunteered at Venture Cafe's Edinburgh in hospitality, social media, marketing, and hosting.",
    icon: "Trophy",
  },
  {
    id: "ai-community",
    title: "AI Community Contributor",
    organization: "Hugging Face / Open Source",
    description: "Active contributor to open-source AI safety tools and LLM evaluation benchmarks.",
    icon: "Heart",
  },
];
