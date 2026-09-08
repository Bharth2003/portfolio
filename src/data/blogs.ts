import type { BlogPost } from "@/types";

export const blogs: BlogPost[] = [
  {
    id: "rescueagent-edinburgh-food-rescue",
    slug: "rescueagent-edinburgh-food-rescue",
    title: "RescueAgent — Agentic Food Rescue for Edinburgh",
    excerpt:
      "AWS Hackathon build: one sentence from a kitchen manager → FSA-classified, shelter-matched, and dispatched to the 3 nearest capable drivers on a live 60 fps OSRM map. 7 tools, Strands + Bedrock Qwen 3 235B.",
    content: `Some nights in Edinburgh, perfectly good food gets binned while a shelter a mile away is short on meals. RescueAgent started as a simple question during the AWS hackathon: what if a kitchen manager could type one sentence and the rest just happened?

This blog is the build log, not the spec sheet. For the technical breakdown, the Featured Project card has the full architecture.

The spark was the handover — that 15-minute coordination gap where no one has time to check if food is still legally safe, which shelter can take it, and which volunteer is close enough with the right kit. We decided to make that invisible.

Day one was messy. We got the agent to parse "6 kg hot chicken curry, cooked 40 minutes ago" correctly, then watched it try to offer hot food to a driver without a thermal bag. Fix was obvious in hindsight: move safety out of the prompt and into the tools. Once the filter removed those drivers before the model saw them, it stopped hallucinating past the rule.

The live map was the hard part. OSRM gave us real road geometry, but Streamlit reruns every click. @st.fragment(run_every=1.0) finally let the map tick once a second while the browser animated at 60 fps — the first time the marker followed the road instead of cutting through buildings, we knew we had it.

What stayed with me: testing with 1,612 real Edinburgh restaurants and 20 hand-curated shelters. Seeing real place names on a dark map made it feel less like a demo and more like a city.

If you want the code, it's all on GitHub. Below is the demo video and the screens that tell the story better than I can.`,
    tags: ["AWS Hackathon", "Strands", "Bedrock", "Qwen 3", "Streamlit", "OSRM", "Food Rescue"],
    date: "2026-03-15",
    readTime: "8 min",
    premium: false,
    projectId: "rescue-agent",
    coverImage: "/images/projects/rescue-agent.svg",
    videoUrl: "https://github.com/Bharth2003/RescueAgent/raw/main/rescueagent_demo_final%20(1).mp4",
    gallery: [
      "/images/blog/rescueagent/architecture.svg",
    ],
  },
];
