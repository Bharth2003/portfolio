import type { Skill, SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  "GenAI & LLMs",
  "AI Safety",
  "Robotics",
  "CV & ML",
  "Cloud & IoT",
  "Tools",
];

export const skills: Skill[] = [
  // GenAI & LLMs
  { name: "LLM Integration (Claude, Ollama, OpenAI)", icon: "Brain", proficiency: "Advanced", category: "GenAI & LLMs" },
  { name: "Prompt Engineering & System Prompts", icon: "MessageSquare", proficiency: "Advanced", category: "GenAI & LLMs" },
  { name: "Multi-LLM Architectures", icon: "Network", proficiency: "Advanced", category: "GenAI & LLMs" },
  { name: "RAG Patterns", icon: "Database", proficiency: "Advanced", category: "GenAI & LLMs" },
  { name: "LLM Fine-Tuning (Hugging Face)", icon: "Settings", proficiency: "Proficient", category: "GenAI & LLMs" },

  // AI Safety
  { name: "Adversarial Attack & Defense Systems", icon: "Shield", proficiency: "Advanced", category: "AI Safety" },
  { name: "Hallucination Mitigation", icon: "AlertTriangle", proficiency: "Advanced", category: "AI Safety" },
  { name: "Prompt Safety & AI Governance", icon: "Lock", proficiency: "Proficient", category: "AI Safety" },

  // Robotics
  { name: "ROS 1 & 2", icon: "Bot", proficiency: "Advanced", category: "Robotics" },
  { name: "SLAM & Path Planning", icon: "Map", proficiency: "Advanced", category: "Robotics" },
  { name: "Sensor Fusion & Kalman Filters", icon: "Radio", proficiency: "Proficient", category: "Robotics" },
  { name: "Human-Robot Interaction (HRI)", icon: "Users", proficiency: "Proficient", category: "Robotics" },
  { name: "Embodied AI (AI2-THOR)", icon: "Cpu", proficiency: "Proficient", category: "Robotics" },

  // CV & ML
  { name: "OpenCV", icon: "Eye", proficiency: "Advanced", category: "CV & ML" },
  { name: "Machine Learning", icon: "TrendingUp", proficiency: "Advanced", category: "CV & ML" },
  { name: "Multi-modal AI Systems", icon: "Layers", proficiency: "Proficient", category: "CV & ML" },

  // Cloud & IoT
  { name: "MQTT & Node-RED", icon: "Wifi", proficiency: "Advanced", category: "Cloud & IoT" },
  { name: "ESP32 & Arduino", icon: "Cpu", proficiency: "Advanced", category: "Cloud & IoT" },
  { name: "Cloud IoT Pipelines (ThingSpeak)", icon: "Cloud", proficiency: "Proficient", category: "Cloud & IoT" },

  // Tools
  { name: "Python (Production-Grade)", icon: "Code", proficiency: "Advanced", category: "Tools" },
  { name: "C++", icon: "FileCode", proficiency: "Proficient", category: "Tools" },
  { name: "MATLAB", icon: "Calculator", proficiency: "Proficient", category: "Tools" },
  { name: "Docker", icon: "Container", proficiency: "Proficient", category: "Tools" },
  { name: "Git & GitHub", icon: "GitBranch", proficiency: "Advanced", category: "Tools" },
  { name: "Hugging Face", icon: "Smile", proficiency: "Advanced", category: "Tools" },
  { name: "SolidWorks", icon: "Box", proficiency: "Familiar", category: "Tools" },
];
