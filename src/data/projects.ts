import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "warehouse-robot-llm",
    title: "Warehouse Robot LLM — Dissertation Project",
    tagline: "Local-First Hybrid VLM-SLM Exception Recovery Pipeline",
    description:
      "MSc dissertation engineering an edge-first autonomous warehouse robot recovery pipeline. Five-stage architecture — Moondream2 VLM, privacy gateway, Qwen2.5-3B local reasoner, symbolic safety verifier, and Gemini Flash cloud fallback — evaluated on a 100-image warehouse corpus across four tracks.",
    longDescription:
      "This dissertation designs and implements an autonomous exception-recovery pipeline for warehouse robots that is local-first: frames are interpreted on-device and only escalate to the cloud when absolutely necessary. Stage A uses a Moondream2 vision model to describe warehouse frames; Stage B deterministically scrubs PII, aisle numbers, product brands, and facility coordinates before any downstream tier sees the text; Stage C runs a grammar-constrained Qwen2.5-3B model via Ollama that produces schema-valid action plans and auto-flags deadlocks when confidence drops below 0.75; Stage D applies a pure-Python symbolic verifier with four safety predicates (chemical protocol, manipulation feasibility, human proximity, safety envelope) and up to two retries; Stage E falls back to Gemini Flash only on verifier escalation, ending in either CLOUD_RECOVERY_AUTHORIZED or EMERGENCY_STOP_HALT. The evaluation harness runs all 100 corpus frames through four segregated tracks — VLM isolation, SLM error propagation, cross-embodiment (YouBot vs forklift), and the full pipeline — and packages evidence into a master six-sheet workbook.",
    image: "/images/projects/warehouse-robot-llm.svg",
    tags: ["Python", "Moondream2", "Qwen2.5-3B", "Ollama", "Gemini Flash", "Computer Vision", "Privacy", "Robotics"],
    metrics: "100-image evaluation across 4 tracks · 5-stage local-first pipeline",
    github: "https://github.com/Bharth2003/warehouse-robot-llm",
    institution: "Heriot-Watt University",
    year: "2026",
    featured: true,
    challenges: [
      "Keeping sensitive warehouse data on-device — scrubbing PII, aisle numbers, product brands, and facility coordinates before any downstream tier",
      "Producing schema-valid action plans from a small 3B local model with grammar-constrained generation and automatic deadlock detection",
      "Guaranteeing safety with a deterministic symbolic verifier covering chemical protocol, manipulation feasibility, human proximity, and safety envelope",
      "Balancing latency, privacy, and accuracy between local inference and cloud escalation",
    ],
    outcomes: [
      "Five-stage local-first pipeline that escalates to Gemini Flash only when the verifier cannot authorise a plan",
      "Auditable terminal decisions restricted to CLOUD_RECOVERY_AUTHORIZED or EMERGENCY_STOP_HALT",
      "100-image corpus evaluation across four tracks — VLM isolation, SLM error propagation, cross-embodiment (YouBot vs forklift), and full pipeline",
    ],
  },
  {
    id: "adversarial-embodied-ai",
    title: "Adversarial Safety in Embodied AI",
    tagline: "LLM Attack & Defence System for Responsible AI",
    description:
      "Designed and implemented an adversarial attack-and-defence framework for LLM-driven agents operating in AI2-THOR simulation environments. Built a multi-LLM architecture orchestrating Claude, Ollama, and fine-tuned Hugging Face models to test robustness of embodied AI systems against prompt injection and adversarial manipulation.",
    longDescription:
      "This research project tackles one of the most critical challenges in deploying AI agents in real-world environments — safety under adversarial conditions. The system implements a red-team/blue-team architecture where attacker LLMs attempt to manipulate embodied agents into unsafe actions, while defender models implement guardrails and safety verification. Fine-tuned models on Hugging Face provide domain-specific safety classification, and the entire pipeline runs in AI2-THOR for realistic 3D environment testing.",
    image: "/images/projects/adversarial-ai.svg",
    tags: ["Python", "Anthropic Claude", "Ollama", "Hugging Face", "AI2-THOR"],
    metrics: "Multi-LLM safety framework for regulated industries",
    github: "https://github.com/Bharth2003/adversarial-embodied-ai",
    institution: "Heriot-Watt University",
    year: "2025 – Present",
    featured: true,
    challenges: [
      "Designing adversarial prompts that realistically test embodied agent safety boundaries",
      "Orchestrating multiple LLMs with different capabilities in a unified evaluation pipeline",
      "Balancing agent capability with safety constraints in physical simulation",
    ],
    outcomes: [
      "Built production-grade adversarial testing pipeline for LLM-driven robots",
      "Demonstrated defence mechanisms reducing unsafe actions by 90%+",
      "Directly applicable to Responsible AI compliance in regulated industries",
    ],
  },
  {
    id: "cdpr-machine-vision",
    title: "CDPR Machine Vision Pipeline",
    tagline: "YOLO-Based Pick & Place for Cable Robots",
    description:
      "Real-time pick-and-place vision system for a 4-Cable Driven Parallel Robot using YOLO object detection, MJPEG IP camera streaming, and RS-232 serial control for full pick-and-place automation.",
    longDescription:
      "A production vision pipeline that connects an IP camera feed through YOLO-based object detection to a cable-driven parallel robot over serial communication. The system streams live MJPEG video from an authenticated IP camera, runs Ultralytics YOLO inference to detect target objects (bottles, cups, books) within a user-defined ROI, and executes an 8-step pick-and-place sequence via 5-DOF serial commands. Features include an interactive OpenCV GUI with adjustable confidence thresholds, ROI selection, crosshair overlay, and screenshot capture.",
    image: "/images/projects/computer-vision.svg",
    tags: ["Python", "YOLO (Ultralytics)", "OpenCV", "PySerial", "IP Camera", "Robotics"],
    metrics: "Real-time YOLO detection at 30 FPS with sub-second pick cycle",
    github: "https://github.com/Bharth2003/cdpr-machine-vision",
    institution: "Heriot-Watt University",
    year: "2025",
    featured: true,
    challenges: [
      "Achieving reliable YOLO detection at real-time frame rates with limited GPU resources",
      "Synchronising vision pipeline timing with robot serial communication latency",
      "Calibrating pixel coordinates to physical robot workspace within the ROI",
    ],
    outcomes: [
      "Demonstrated end-to-end pick-and-place with vision-guided automation",
      "Interactive tuning interface for rapid deployment across different environments",
      "Modular architecture adaptable to other robot platforms and detection models",
    ],
  },
  {
    id: "cable-driven-parallel-robot",
    title: "4-Cable Driven Parallel Robot",
    tagline: "Simulation, Firmware & ROS 2 Control Stack",
    description:
      "Complete software stack for a cable-driven parallel robot with 4 cables, including MuJoCo physics simulation, Arduino/OpenCR firmware with inverse kinematics and 6-DOF wrench solver, and ROS 2 nodes for IK and teleoperation.",
    longDescription:
      "An end-to-end control stack for a 4-cable parallel robot spanning simulation, embedded firmware, and ROS 2 integration. The MuJoCo simulation models cable dynamics with a PD controller tracking 5-DOF trajectories. The Arduino/OpenCR firmware (v2.0) computes real-time inverse kinematics and solves a full 6-DOF wrench balance (force + moment equilibrium) using least-squares optimisation with Tikhonov regularisation, controlling 4 Dynamixel XM430-W210-T motors with current-based position control and tension feedforward. Includes home calibration, friction identification, weight estimation, and a non-blocking stepper gripper. ROS 2 nodes provide IK computation, TF broadcasting, RViz visualisation, and keyboard teleoperation.",
    image: "/images/projects/cable-robot.svg",
    tags: ["Python", "MuJoCo", "ROS 2", "Arduino", "C++", "Dynamixel", "OpenCR"],
    metrics: "6-DOF wrench solver at 100Hz on embedded hardware",
    github: "https://github.com/Bharth2003/cable-driven-parallel-robot-4-cables",
    institution: "Heriot-Watt University",
    year: "2025",
    featured: true,
    challenges: [
      "Solving full 6-DOF wrench balance (force + moment) in real-time on an embedded microcontroller",
      "Implementing current-based position control with tension feedforward for smooth cable force management",
      "Developing calibration routines (home, friction ID, weight estimation) without external sensors",
    ],
    outcomes: [
      "Achieved stable 5-DOF pose control with minimised end-effector tilt via 6-DOF wrench solver",
      "Demonstrated unified firmware handling CDPR kinematics, motors, and gripper concurrently",
      "Full simulation-to-hardware pipeline with ROS 2 visualisation and teleoperation",
    ],
  },
  {
    id: "genai-hri",
    title: "GenAI Integration with Robotic Systems",
    tagline: "Natural Language HRI with Vision Understanding",
    description:
      "Integrated Large Language Models into physical Marty robots for natural language understanding and context-aware behaviour. Built a multi-modal system combining LLM reasoning with OpenCV computer vision for real-time human-robot interaction.",
    longDescription:
      "This project bridges the gap between powerful language models and physical robotic systems. The system enables users to give natural language commands to Marty robots, which are interpreted through an LLM pipeline that considers visual context from the robot's camera feed. OpenCV processes the environment in real-time, providing scene understanding that informs the LLM's decision-making for appropriate physical actions.",
    image: "/images/projects/genai-hri.svg",
    tags: ["Python", "LLMs", "OpenCV", "Marty Robot", "Multi-modal AI"],
    metrics: "Real-time natural language robot control",
    github: "https://github.com/Bharth2003",
    featured: true,
    challenges: [
      "Bridging the latency gap between LLM inference and real-time robot control",
      "Grounding language understanding in physical robot capabilities",
      "Fusing visual and linguistic information for context-aware actions",
    ],
    outcomes: [
      "Achieved real-time conversational robot interaction with <500ms response",
      "Multi-modal understanding combining vision + language for situated actions",
      "Demonstrated natural command interface reducing operator training time",
    ],
  },
  {
    id: "iot-pipeline",
    title: "Cloud-Connected IoT Data Pipeline",
    tagline: "End-to-End Environment Monitoring System",
    description:
      "Built a full-stack IoT solution from physical ESP32 sensors through ESP-NOW to MQTT messaging and Node-RED dashboard. Real-time temperature and humidity monitoring with bidirectional command relay and automated alerting.",
    longDescription:
      "A production IoT pipeline demonstrating edge-to-cloud architecture. ESP32 sensor nodes with DHT11 measure temperature and humidity, transmitting via ESP-NOW wireless protocol to an ESP32 gateway. The gateway bridges data to MQTT (mosquitto broker) with JSON telemetry on per-node topics, while subscribing to a command topic for bidirectional control (CLEAR, EXTEND, SET_LIMITS). A Node-RED dashboard provides real-time visualization with temperature charts, humidity gauges, and node status indicators. Sensor nodes use deep-sleep for battery efficiency with configurable alert thresholds and hysteresis logic.",
    image: "/images/projects/iot-pipeline.svg",
    tags: ["ESP32", "ESP-NOW", "MQTT", "Node-RED", "DHT11", "C++"],
    metrics: "24/7 monitoring with deep-sleep sensor nodes (<100µA idle)",
    github: "https://github.com/Bharth2003/iot-environment-monitoring",
    featured: true,
    challenges: [
      "Ensuring reliable data delivery across unreliable network connections",
      "Designing scalable message routing for multiple sensor nodes",
      "Implementing edge computing for real-time alerting without cloud dependency",
    ],
    outcomes: [
      "Deployed system handling 10+ concurrent sensor nodes",
      "Sub-2-second end-to-end latency from sensor to cloud dashboard",
      "Automated anomaly detection with configurable alert thresholds",
    ],
  },
  {
    id: "autonomous-nav",
    title: "Autonomous Navigation System",
    tagline: "ROS 2 SLAM with Advanced Path Planning",
    description:
      "Implemented a complete autonomous navigation stack using ROS 2 with SLAM for real-time mapping, Kalman filter-based noise reduction for sensor fusion, and benchmarked multiple path planning algorithms for optimal performance.",
    longDescription:
      "This project implements a production-grade autonomous navigation system using the ROS 2 framework. The system combines simultaneous localisation and mapping (SLAM) with extended Kalman filter fusion of LiDAR and IMU data for robust pose estimation. Multiple path planning algorithms (A*, RRT*, DWA) were implemented and benchmarked against standard metrics including path length, computation time, and obstacle clearance.",
    image: "/images/projects/autonomous-nav.svg",
    tags: ["Python", "C++", "ROS 2", "SLAM", "Kalman Filter", "Gazebo"],
    metrics: "Real-time SLAM at 10Hz with 95% localisation accuracy",
    github: "https://github.com/Bharth2003",
    featured: true,
    challenges: [
      "Achieving real-time SLAM performance with limited compute resources",
      "Tuning Kalman filter parameters for heterogeneous sensor fusion",
      "Benchmarking path planners fairly across diverse environment configurations",
    ],
    outcomes: [
      "10Hz real-time mapping and localisation in complex environments",
      "95% pose estimation accuracy with sensor fusion",
      "Comprehensive benchmark comparing 3 path planning algorithms",
    ],
  },
  {
    id: "waste-rover",
    title: "Semi-Automatic Natural Waste Cleaner Rover",
    tagline: "Autonomous Environmental Cleanup Robot",
    description:
      "Designed and built a semi-autonomous rover for natural waste collection in outdoor environments. Combined mechanical design with embedded control systems for terrain navigation and waste detection.",
    image: "/images/projects/rover.svg",
    tags: ["Arduino", "SolidWorks", "C++", "Embedded Systems"],
    metrics: "Bachelor's capstone project",
    github: "https://github.com/Bharth2003",
    featured: false,
  },
  {
    id: "metal-composite",
    title: "Analysis of Metal Matrix Composite with TiO2",
    tagline: "Material Science Research & Testing",
    description:
      "Conducted research on metal matrix composites reinforced with TiO2 nanoparticles, analysing mechanical properties through tensile testing, hardness measurement, and microstructure characterisation.",
    image: "/images/projects/composite.svg",
    tags: ["MATLAB", "Material Science", "Research", "Data Analysis"],
    metrics: "Published research findings",
    featured: false,
  },
  {
    id: "ebike",
    title: "National Electric Bike Challenge",
    tagline: "E-Vehicle Design & Competition",
    description:
      "Designed and built a competition-grade electric vehicle for the National Electric Bike Challenge, covering powertrain design, battery management systems, and structural analysis.",
    image: "/images/projects/ebike.svg",
    tags: ["SolidWorks", "Electrical Design", "BMS", "Team Leadership"],
    metrics: "National-level competition entry",
    featured: false,
  },
];
