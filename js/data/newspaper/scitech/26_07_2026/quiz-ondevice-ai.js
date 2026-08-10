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
  ],
};
