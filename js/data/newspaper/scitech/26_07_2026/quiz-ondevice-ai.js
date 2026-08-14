const QUIZ_news_ondevice_ai = {
  title: "On-Device AI (26 Jul 2026)",
  questions: [
    {
      q: "What fundamentally distinguishes on-device AI from cloud-based AI?",
      options: [
        "On-device AI uses internet more efficiently than cloud AI",
        "On-device AI processes data directly on the smartphone's local hardware without sending it to remote servers",
        "On-device AI can only perform basic tasks like calculator functions",
        "On-device AI requires a faster internet connection than cloud AI",
      ],
      correct: 1,
      explain:
        "On-device AI processes machine learning algorithms and generative AI models directly on the smartphone's local hardware, using dedicated silicon like NPUs, without needing to send data to remote servers.",
    },
    {
      q: "Neural Processing Units (NPUs) are designed specifically for:",
      options: [
        "Managing network connectivity and Wi-Fi signals",
        "Running graphics-intensive gaming applications",
        "Handling the mathematical operations required by neural networks",
        "Managing battery consumption and power efficiency",
      ],
      correct: 2,
      explain:
        "NPUs are purpose-built for the matrix multiplication and convolution operations that underpin neural networks — unlike general-purpose CPUs or graphics-heavy GPUs, they are optimised specifically for AI computations.",
    },
    {
      q: "The 'hybrid application model' in AI refers to:",
      options: [
        "Using two smartphones simultaneously for AI processing",
        "Combining on-device processing (sensitive/time-critical tasks) with cloud processing (heavy computation)",
        "Combining AI with traditional software applications",
        "Using both Android and iOS platforms simultaneously",
      ],
      correct: 1,
      explain:
        "The hybrid model converges on-device AI (for sensitive, time-critical tasks) and cloud AI (for processing massive multi-modal datasets) — compensating for the limitations of each approach alone.",
    },
    {
      q: "Assertion (A): On-device AI resolves the tension between personalisation and privacy.\nReason (R): Since data never leaves the device, AI can learn personalised behaviour without that data being shared with or stored on external servers.\nWhich one of the following is correct?",
      options: [
        "Both A and R are true, and R is the correct explanation of A",
        "Both A and R are true, but R is NOT the correct explanation of A",
        "A is true, but R is false",
        "A is false, but R is true",
      ],
      correct: 0,
      explain:
        "Both are true and R correctly explains A — the core privacy advantage of on-device AI is that personal data used to personalise the experience never leaves the device, eliminating the privacy risk of cloud processing.",
    },
    {
      q: "India's AI Mission, approved in March 2024, has a total budget of approximately:",
      options: [
        "₹2,000 crore",
        "₹5,500 crore",
        "₹10,371.92 crore",
        "₹25,000 crore",
      ],
      correct: 2,
      explain:
        "India's AI Mission was approved by the Union Cabinet in March 2024 with a total budget of ₹10,371.92 crore, aiming to build AI compute infrastructure and support a safe, trusted AI ecosystem.",
    },
    {
      q: "Which type of processor is purpose-built to accelerate the matrix multiplication and convolution operations of neural networks?",
      options: [
        "CPU (Central Processing Unit)",
        "GPU (Graphics Processing Unit)",
        "NPU (Neural Processing Unit)",
        "PMIC (Power Management IC)",
      ],
      correct: 2,
      explain:
        "The NPU is designed specifically for neural-network computations. CPUs are general-purpose and GPUs are optimised for graphics/parallel workloads.",
    },
    {
      q: [
        "Consider the following as advantages of on-device AI over cloud AI:",
        "I. Better privacy (data stays on the device)",
        "II. Lower latency / faster response for time-critical tasks",
        "III. Offline (no constant internet) capability",
        "How many of the above are correct?",
      ],
      options: ["Only one", "Only two", "All three", "None"],
      correct: 2,
      explain:
        "All three are genuine advantages of on-device AI. Its main limitation is reduced raw computational power compared with cloud LLMs.",
    },
    {
      q: [
        "Match the company with its AI accelerator:",
        "I. Apple — a) Hexagon NPU",
        "II. Qualcomm — b) Neural Engine",
        "III. Google — c) Tensor Processing Unit (TPU)",
        "Select the correct answer:",
      ],
      options: [
        "I-b, II-a, III-c",
        "I-a, II-b, III-c",
        "I-c, II-a, III-b",
        "I-b, II-c, III-a",
      ],
      correct: 0,
      explain:
        "Apple's is the Neural Engine (b), Qualcomm's is the Hexagon NPU (a), and Google's is the Tensor Processing Unit / TPU (c).",
    },
    {
      q: [
        "Statement I: On-device AI cannot yet match the scale and raw power of cloud-based large language models.",
        "Statement II: The industry is therefore converging on a hybrid model.",
        "Which of the following is correct?",
      ],
      options: [
        "Both statements are correct and II logically follows from I",
        "Both correct but II is unrelated to I",
        "I is correct, II is incorrect",
        "I is incorrect, II is correct",
      ],
      correct: 0,
      explain:
        "Because on-device AI cannot match cloud-scale LLMs (I), the industry adopts a hybrid model — heavy computation in the cloud, sensitive/time-critical tasks on the device (II follows from I).",
    },
    {
      q: "In the hybrid AI model described, which tasks are typically kept on the device?",
      options: [
        "Processing massive multi-modal datasets",
        "Training large foundation models",
        "Sensitive and time-critical tasks",
        "Long-term data storage",
      ],
      correct: 2,
      explain:
        "The hybrid model keeps sensitive and time-critical tasks on the device (edge) while offloading heavy computation on massive datasets to the cloud.",
    },
    {
      q: "A Large Language Model (LLM) is best defined as:",
      options: [
        "A hardware chip that stores language data",
        "A deep-learning model trained on vast text data to understand and generate human-like text",
        "A cloud storage protocol for multilingual content",
        "A smartphone operating system feature",
      ],
      correct: 1,
      explain:
        "LLMs (e.g. GPT-4, Gemini, Claude) are deep-learning models trained on large text corpora, with billions to hundreds of billions of parameters.",
    },
    {
      q: "On-device LLMs differ from cloud LLMs mainly in that they are:",
      options: [
        "Trained without any data",
        "Compressed/quantised versions with fewer parameters",
        "Incapable of any text generation",
        "Always more powerful than cloud models",
      ],
      correct: 1,
      explain:
        "On-device LLMs are compressed (quantised) versions with billions — not hundreds of billions — of parameters: capable but less powerful than cloud LLMs.",
    },
    {
      q: [
        "Consider the following about the India AI Mission:",
        "I. It was approved by the Union Cabinet in March 2024.",
        "II. It targets building compute infrastructure of 10,000+ GPUs.",
        "III. It has an outlay of about ₹10,371.92 crore.",
        "How many of the statements are correct?",
      ],
      options: ["Only one", "Only two", "All three", "None"],
      correct: 2,
      explain:
        "All three are correct — the IndiaAI Mission (March 2024, ~₹10,371.92 crore) includes a 10,000+ GPU compute target among its pillars.",
    },
    {
      q: "On-device AI is most directly relevant to which Indian data-governance law?",
      options: [
        "The Information Technology Act, 2000 only",
        "The Digital Personal Data Protection (DPDP) Act, 2023",
        "The Competition Act, 2002",
        "The Consumer Protection Act, 2019",
      ],
      correct: 1,
      explain:
        "By processing personal data locally, on-device AI can reduce personal data leaving the device — directly relevant to the DPDP Act, 2023.",
    },
    {
      q: "Which of the following is a stated limitation of on-device AI adoption?",
      options: [
        "It is illegal in most countries",
        "A gap remains between device capabilities and user adoption — many see AI features as 'nice-to-have'",
        "It permanently disables cloud connectivity",
        "It cannot run on any current smartphone",
      ],
      correct: 1,
      explain:
        "The article notes a significant gap between device capabilities and user adoption, with most consumers viewing current AI features as nice-to-have rather than essential.",
    },
    {
      q: "Which of the following is NOT cited as an on-device AI capability?",
      options: [
        "Real-time language translation",
        "Advanced computational photography",
        "Proactive system optimisation",
        "Physically increasing the phone's battery capacity",
      ],
      correct: 3,
      explain:
        "On-device AI enables real-time translation, computational photography and proactive optimisation — it does not increase battery hardware capacity.",
    },
    {
      q: "The core privacy advantage of on-device AI is that it addresses the tension between:",
      options: [
        "Speed and cost",
        "Personalisation (needs personal data) and privacy (not wanting to share it)",
        "Hardware and software",
        "Domestic and foreign manufacturing",
      ],
      correct: 1,
      explain:
        "On-device processing lets AI personalise using personal data without that data leaving the device — resolving the personalisation-vs-privacy tension.",
    },
    {
      q: "Assertion (A): The rise of on-device AI intersects with India's data-localisation debate.\nReason (R): The hybrid model raises questions about where sensitive personal data should be stored and processed.\nWhich one of the following is correct?",
      options: [
        "Both A and R are true, and R is the correct explanation of A",
        "Both A and R are true, but R is NOT the correct explanation of A",
        "A is true, but R is false",
        "A is false, but R is true",
      ],
      correct: 0,
      explain:
        "Both are true and R explains A — deciding whether sensitive tasks run on-device or in the cloud is precisely the 'where to store/process data' question at the heart of data localisation.",
    },
    {
      q: "From a GS-4 (Ethics) standpoint, on-device AI raises concerns primarily about:",
      options: [
        "Informed consent, algorithmic accountability and the right to explanation",
        "Import tariffs on smartphones",
        "The physical weight of devices",
        "Screen resolution standards",
      ],
      correct: 0,
      explain:
        "On-device learning with no external audit trail raises ethical questions of informed consent, algorithmic accountability, and the emerging 'right to explanation'.",
    },
    {
      q: "The shift from cloud AI to on-device AI is best described as a move from:",
      options: [
        "Distributed intelligence to centralised intelligence",
        "Centralised (cloud) intelligence to distributed (edge) intelligence",
        "Software to hardware only",
        "Analog to digital computing",
      ],
      correct: 1,
      explain:
        "On-device AI represents a shift from centralised cloud intelligence to distributed edge intelligence, with implications for privacy and data sovereignty.",
    },
  ],
};
