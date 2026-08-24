import type { ExperienceItem, ExtracurricularItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "msc-robotics",
    type: "education",
    title: "MSc Robotics",
    organization: "Heriot-Watt University",
    location: "Heriot-Watt University, UK",
    startDate: "Sep 2025",
    endDate: "Present",
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
  {
    id: "hyundai-intern",
    type: "work",
    title: "Production Engineer Intern",
    organization: "Hyundai Motors India Pvt",
    location: "Chennai, India",
    startDate: "Jun 2025",
    endDate: "July 2025",
    description: [
      "Inspected the industry in body part section",
      "Analysed the statistics of the production and sales",
      "Operated Hyundai robots manually when problem occured and solved the issues when manufacturing is in progress",
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
