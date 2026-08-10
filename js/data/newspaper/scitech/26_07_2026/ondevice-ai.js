const DATA_news_ondevice_ai = {
  id: "news-2026-07-26-ondevice-ai",
  title: "Are Smartphones Becoming Smarter with On-Device AI?",
  subtitle: "The Hindu, 26 July 2026",
  icon: "📱",
  isLeaf: true,
  notes: {
    newsType: true,
    date: "26 July 2026",
    paper: "The Hindu",
    subject: "Science & Technology / GS-3",
    summary:
      "On-device AI — the processing of machine learning and generative AI models directly on a smartphone's local hardware — is becoming the foundational shift in smartphone technology. Unlike cloud-based AI, on-device AI uses dedicated silicon (primarily Neural Processing Units/NPUs) to process data locally, improving privacy, speed, and personalisation. However, physical constraints prevent matching cloud-scale LLMs, pushing the industry toward a hybrid model.",

    keyPoints: [
      {
        heading: "What is On-Device AI?",
        points: [
          "Processing of machine learning algorithms and generative AI models directly on the smartphone's local hardware",
          "Uses dedicated silicon — primarily Neural Processing Units (NPUs) — purpose-built for neural network computations",
          "Unlike general-purpose CPUs or graphics-heavy GPUs, NPUs handle the mathematical operations required by AI models efficiently",
          "Data never leaves the device — eliminates the need for a constant internet connection",
          "In 2026, it is no longer a fringe feature — it is becoming the foundation of how premium smartphones function",
        ],
      },
      {
        heading: "Key Capabilities",
        points: [
          "Real-time language translation, advanced computational photography, proactive system optimisation",
          "Voice-to-voice translation, generative photo editing — features previously thought impossible on mobile",
          "System-wide AI integration: AI understands the user's workflow, analyses intent, acts across different applications",
          "Creates a bespoke user experience that improves with every interaction without ever leaving the device",
        ],
      },
      {
        heading: "Privacy Advantage",
        points: [
          "Under a cloud-only model, users share intimate data with remote servers",
          "On-device AI keeps all data on the device — no data footprint on external servers",
          "This addresses a critical tension between personalisation (needing personal data) and privacy (not wanting to share it)",
        ],
      },
      {
        heading: "Limitations and the Hybrid Model",
        points: [
          "On-device AI cannot yet match the sheer scale and raw power of cloud-based large language models (LLMs)",
          "Industry converging on a HYBRID MODEL: heavy lifting (processing massive multi-modal datasets) stays in cloud; sensitive and time-critical tasks migrate to the device edge",
          "Significant gap remains between device capabilities and user adoption — most consumers see current AI features as nice-to-have, not essential",
        ],
      },
      {
        heading: "Cross-links to Other Subjects",
        points: [
          "GS-3 Science & Technology: AI policy, semiconductor manufacturing (NPUs), data localisation",
          "GS-2 Governance: Digital Personal Data Protection (DPDP) Act 2023 — on-device AI as a privacy-preserving technology",
          "GS-3 Economy: Semiconductor mission (India Semiconductor Mission), edge computing, AI in manufacturing",
          "Essay: 'Artificial Intelligence — tool of empowerment or instrument of surveillance?'",
          "Current Affairs link: India's AI Mission (IndiaAI), PLI for semiconductors, DPDP Act 2023",
        ],
      },
    ],

    importantTerms: [
      {
        term: "Neural Processing Unit (NPU)",
        explanation:
          "A specialised processor designed specifically to accelerate neural network computations. Unlike CPUs (general purpose) or GPUs (graphics/parallel computing), NPUs are optimised for the matrix multiplication and convolution operations that underpin machine learning. Apple's Neural Engine, Qualcomm's Hexagon NPU, and Google's Tensor Processing Unit (TPU) are leading examples. India's semiconductor mission aims to develop domestic NPU manufacturing capability.",
      },
      {
        term: "On-Device AI vs Cloud AI",
        explanation:
          "Cloud AI: data sent to remote servers → processed by powerful models → results returned to device. Pros: unlimited computational power. Cons: latency, privacy risks, internet dependence. On-Device AI: data processed locally on device hardware. Pros: privacy, speed, offline capability. Cons: limited computational power, smaller models. The hybrid model combines both — sensitive tasks on-device, complex tasks in cloud.",
      },
      {
        term: "Large Language Model (LLM)",
        explanation:
          "Deep learning models trained on vast amounts of text data to understand and generate human-like text. Examples: GPT-4, Gemini, Claude. Cloud-based LLMs have hundreds of billions of parameters and require massive data centres. On-device LLMs are compressed (quantised) versions with billions (not hundreds of billions) of parameters — capable but less powerful.",
      },
      {
        term: "India AI Mission",
        explanation:
          "India's national AI policy framework approved by the Union Cabinet in March 2024 with a budget of ₹10,371.92 crore. Aims to build AI compute infrastructure (10,000+ GPUs), develop India-specific datasets, support AI startups, and ensure safe, trusted AI development. Relevant to on-device AI as it includes edge computing and semiconductor development components.",
      },
    ],

    mainsAnswerNotes: [
      "On-device AI represents a fundamental architectural shift in consumer technology — from centralised cloud intelligence to distributed edge intelligence. This has profound implications for privacy, data sovereignty, and digital governance.",
      "From India's perspective, the rise of on-device AI intersects with three critical policy priorities: the Digital Personal Data Protection (DPDP) Act 2023 (on-device processing could reduce personal data leaving devices), the India Semiconductor Mission (NPU manufacturing capability), and the IndiaAI Mission (building domestic AI ecosystem).",
      "The hybrid model (on-device for sensitive/time-critical tasks, cloud for heavy computation) mirrors broader debates in Indian digital policy about data localisation — where to store and process sensitive personal data.",
      "For GS-4 Ethics: on-device AI raises questions about informed consent (AI learning from you locally without transparency), algorithmic accountability (decisions made on-device with no external audit trail), and the 'right to explanation' under emerging AI governance frameworks.",
    ],

    prelims: [
      "NPU (Neural Processing Unit): dedicated chip for AI computations on mobile devices",
      "On-device AI: processes data locally without sending to cloud servers",
      "Hybrid AI model: on-device for sensitive/time-critical + cloud for heavy computation",
      "India AI Mission: approved March 2024; ₹10,371.92 crore; 10,000+ GPU compute target",
      "DPDP Act 2023: Digital Personal Data Protection Act — governs how personal data can be collected/processed",
      "LLM (Large Language Model): deep learning models with billions of parameters (GPT-4, Gemini, Claude)",
    ],
  },
};
