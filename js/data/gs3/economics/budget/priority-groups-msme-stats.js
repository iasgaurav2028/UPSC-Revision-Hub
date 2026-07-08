// Newspaper › Economics › Budget › 4 Priority Groups + MSME Stats
// Small supplementary static file — the 4 priority groups (Garib/Yuva/
// Annadata/Nari) and key MSME statistics, both reusable across budget years.
const DATA_news_budget_priority_groups = {
  id: "news-budget-priority-groups",
  title: "4 Priority Groups & MSME Stats",
  subtitle: "Garib, Yuva, Annadata, Nari + MSME figures",
  icon: "👥",
  isLeaf: true,
  notes: {
    era: "Static Reference — Budget framing concepts",
    significance: [
      "Union Budgets since 2023-24 have consistently framed welfare spending around 4 priority groups",
      "MSME statistics are among the most frequently tested factual figures in GS-3 Economy",
    ],
    features: [
      {
        key: "Garib (Poor)",
        main: "Welfare schemes targeting poverty alleviation, food security, direct benefit transfers",
        note: "",
      },
      {
        key: "Yuva (Youth)",
        main: "Skilling missions, education infrastructure, employment-linked incentives",
        note: "",
      },
      {
        key: "Annadata (Farmer)",
        main: "Agricultural schemes — e.g. PM Dhan-Dhaanya Krishi Yojana, crop-specific missions",
        note: "",
      },
      {
        key: "Nari (Women)",
        main: "Women-centric schemes — financial inclusion, entrepreneurship support, safety",
        note: "",
      },
      {
        key: "MSME Contribution to GDP",
        main: "Approximately 30% of India's GDP",
        note: "",
      },
      {
        key: "MSME Manufacturing Output",
        main: "Approximately 45% of total manufacturing output",
        note: "",
      },
      {
        key: "MSME Export Share",
        main: "Approximately 45% of India's total exports",
        note: "",
      },
    ],
    traps: [
      {
        label: "4 Groups Order Trap",
        lines: [
          "Garib, Yuva, Annadata, Nari — commonly asked as 'which is NOT one of the 4'",
          "Other groups (e.g. senior citizens, differently-abled) are NOT part of this specific framing",
        ],
      },
      {
        label: "MSME Stats Trap",
        lines: [
          "GDP contribution ≈ 30%",
          "Manufacturing output share ≈ 45%",
          "Export share ≈ 45%",
          "(Don't confuse GDP % with export/manufacturing %)",
        ],
      },
    ],
    mainsAngle:
      "The 4 priority-group framing (Garib, Yuva, Annadata, Nari) reflects a shift toward targeted, demographic-based welfare architecture rather than universal schemes — relevant to debates on fiscal targeting versus universalism in Indian social policy.",
    mainsTheme:
      "Targeted welfare framing vs universal schemes — social policy debate",
    recall: [
      "4 groups: Garib, Yuva, Annadata, Nari",
      "MSME → GDP: ~30%",
      "MSME → Manufacturing output: ~45%",
      "MSME → Exports: ~45%",
    ],
  },
};
