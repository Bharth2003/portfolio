import type { BlogPost } from "@/types";

// Update discord link in siteConfig.ts when you create your server.
// Stripe Payment Links are FREE to create: stripe.com → Payment Links → Create → copy URL here.
// For now premium posts use a placeholder Stripe URL — replace when ready to charge.

export const blogs: BlogPost[] = [
  {
    id: "ai-safety-embodied-agents",
    slug: "ai-safety-embodied-agents",
    title: "AI Safety for Embodied Agents: Lessons from Adversarial Testing",
    excerpt:
      "How we red-team LLM-driven robots in AI2-THOR and why 90% of unsafe actions are preventable with simple guardrails.",
    content:
      "Embodied AI agents that act in the physical world need safety guarantees that chatbots don't. In this post I walk through our adversarial attack-and-defence pipeline at Heriot-Watt — how attacker LLMs try prompt-injection against a robot agent, how defender models intercept, and how a symbolic verifier reduces unsafe actions by 90%+. You'll see the AI2-THOR setup, the Hugging Face safety classifier we fine-tuned, and a checklist you can reuse for Responsible AI compliance. Full code and evaluation traces are on GitHub. Join the Discord to discuss your own safety tests.",
    tags: ["AI Safety", "LLMs", "Robotics", "AI2-THOR"],
    date: "2026-08-28",
    readTime: "6 min",
    premium: false,
  },
  {
    id: "building-cdpr-vision-pipeline",
    slug: "building-cdpr-vision-pipeline",
    title: "Building a Real-Time YOLO Pipeline for a Cable Robot",
    excerpt:
      "From MJPEG IP camera to RS-232 pick-and-place: how we hit 30 FPS YOLO detection and sub-second cycles on limited hardware.",
    content:
      "Our 4-Cable Driven Parallel Robot needed to see, decide, and grasp in real time. This post breaks down the full vision stack: authenticated MJPEG streaming, Ultralytics YOLO inference inside a user-defined ROI, coordinate calibration from pixels to robot workspace, and the 8-step serial pick-and-place sequence over PySerial. I cover the OpenCV tuning GUI, confidence-threshold trade-offs, and latency hiding between vision and motor control. Replicable on any robot platform — code is modular and open.",
    tags: ["Computer Vision", "YOLO", "Robotics", "OpenCV"],
    date: "2026-08-20",
    readTime: "5 min",
    premium: false,
  },
  {
    id: "warehouse-robot-llm-deep-dive",
    slug: "warehouse-robot-llm-deep-dive",
    title: "Warehouse Robot LLM: Dissertation Deep Dive (Premium)",
    excerpt:
      "The complete 5-stage local-first pipeline — Moondream2, privacy gateway, Qwen2.5-3B, symbolic verifier, and Gemini fallback — with failure modes and retail-ready checklist.",
    content:
      "This is the premium companion to the Warehouse Robot LLM dissertation. Free excerpt: The pipeline is local-first — frames never leave the device unless the symbolic verifier (chemical protocol, manipulation feasibility, human proximity, safety envelope) escalates. The premium section includes the full per-track evaluation (100 images across VLM isolation, SLM error propagation, cross-embodiment YouBot vs forklift, and full pipeline), latency/memory profiles from perf_counter/psutil logs, the max-2-retries revision logic, and the audit rule that every run ends in CLOUD_RECOVERY_AUTHORIZED or EMERGENCY_STOP_HALT. Unlock via Stripe to get the 6-sheet master workbook and Webots MiR100 controller walkthrough.",
    tags: ["Dissertation", "VLM", "SLM", "Privacy", "Robotics"],
    date: "2026-08-30",
    readTime: "10 min",
    premium: true,
    stripeUrl: "https://buy.stripe.com/test_abc123",
  },
];
