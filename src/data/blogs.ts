import type { BlogPost } from "@/types";

export const blogs: BlogPost[] = [
  {
    id: "rescueagent-edinburgh-food-rescue",
    slug: "rescueagent-edinburgh-food-rescue",
    title: "RescueAgent — Agentic Food Rescue for Edinburgh",
    excerpt:
      "AWS Hackathon build: one sentence from a kitchen manager → FSA-classified, shelter-matched, and dispatched to the 3 nearest capable drivers on a live 60 fps OSRM map. 7 tools, Strands + Bedrock Qwen 3 235B.",
    content: `Edinburgh throws away edible food every night while shelters a mile away run short. RescueAgent closes the coordination gap.

A manager types "6 kg hot chicken curry and rice, cooked 40 minutes ago". The Strands agent (Qwen 3 235B on Bedrock eu-west-2) runs 7 tools in order: analyze_food_safety → find_eligible_shelter → broadcast_rescue → accept_rescue → route_lookup. Safety lives in the tools: hot food without a thermal bag is never offered — the filter removes those drivers before the model sees the list. Shelters are hard-filtered on accepts_hot/cold/meat + capacity, then ranked by demand weighted by distance. The 3 nearest capable drivers are offered the job, first to Accept wins.

The front end is 8 pages on Streamlit — Manager console, Driver app, Live Tracking, Operations, Shelters, Drivers, History, Alerts. The delivery state machine (broadcast → to_pickup → at_pickup → to_shelter → delivered) ticks via @st.fragment(run_every=1.0) while the browser animates the driver at 60 fps along the OSRM GeoJSON polyline interpolated by distance (point_at). Both roles watch the same live map.

Data: 1,612 Edinburgh restaurants (OSM Overpass), 20 hand-curated shelters, 40 drivers (6 vehicle classes), UK FSA thermal windows (90 min hot / 240 min chilled, 14 allergens), routes cached to data/routes_cache.json.

See the full project card for challenges, outcomes, and links. Demo video and gallery below.`,
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
