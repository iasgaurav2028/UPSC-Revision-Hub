// Newspaper › Economics › Budget › Static Concepts (Budget Process, FRBM, Funds, Rev vs Cap Exp)
// These are evergreen concepts that apply to EVERY year's budget — kept
// separate from budget-2025.js / budget-2026.js so they aren't repeated.
const DATA_news_budget_static = {
  id: "news-budget-static",
  title: "Budget — Static Concepts",
  subtitle: "FRBM, Funds, Process, Rev vs Cap Exp",
  icon: "📘",
  isLeaf: true,
  notes: {
    era: "Static Reference — applies to every Union Budget",
    significance: [
      "These concepts are asked almost every year in Prelims, often as standalone factual questions",
      "Forms the backbone for analysing ANY year's Budget for Mains (fiscal prudence, federalism, governance angles)",
      "Frequently linked with Economic Survey and FRBM roadmap questions",
    ],
    features: [
      {
        key: "Revenue vs Capital Expenditure",
        main: "Revenue Expenditure: recurring, no asset created — salaries, pensions, interest payments, subsidies\nCapital Expenditure: creates assets — roads, railways, airports, ports, irrigation",
        note: "CapEx → Infrastructure → Investment → Employment → Growth (a chain UPSC often tests indirectly)",
      },
      {
        key: "Fiscal Deficit",
        main: "Total expenditure minus total receipts (excluding borrowings)\nIndicates how much the government needs to borrow",
        note: "",
      },
      {
        key: "Revenue Deficit",
        main: "Revenue expenditure minus revenue receipts\nSignals government is borrowing even for consumption, not just asset creation",
        note: "",
      },
      {
        key: "Primary Deficit",
        main: "Fiscal Deficit minus interest payments\nShows the deficit excluding the burden of past borrowing",
        note: "",
      },
      {
        key: "FRBM Act, 2003",
        main: "Fiscal Responsibility and Budget Management Act — mandates the government to reduce fiscal deficit and revenue deficit to sustainable levels over time",
        note: "Provides the 'roadmap' every Budget's fiscal deficit target is measured against; criticised for repeated deadline extensions/deviations",
      },
      {
        key: "Consolidated Fund of India",
        main: "All government revenues, loans raised, and repayments of loans flow into this fund\nNo money can be withdrawn without Parliament's authorisation",
        note: "Article 266",
      },
      {
        key: "Contingency Fund of India",
        main: "Used for unforeseen/urgent expenditure, pending Parliamentary approval\nCorpus placed at the disposal of the President",
        note: "Article 267",
      },
      {
        key: "Public Account of India",
        main: "Holds money where government acts as a banker — provident funds, small savings, etc.\nDoes NOT require Parliamentary appropriation to spend from it",
        note: "Article 266(2)",
      },
      {
        key: "Budget Process Flow",
        main: "Budget presented → Finance Bill (tax proposals) → Appropriation Bill (spending authorisation) → passed by Parliament → President's Assent",
        note: "Finance Bill and Appropriation Bill are both Money Bills — only introduced in Lok Sabha",
      },
    ],
    traps: [
      {
        label: "Deficit Type Confusion",
        lines: [
          "Fiscal Deficit = Total Expenditure − Total Receipts (excl. borrowings)",
          "Revenue Deficit = Revenue Expenditure − Revenue Receipts",
          "Primary Deficit = Fiscal Deficit − Interest Payments",
          "(All three are commonly swapped in options — read carefully)",
        ],
      },
      {
        label: "Fund Confusion",
        lines: [
          "Consolidated Fund → needs Parliamentary approval to withdraw",
          "Contingency Fund → at President's disposal, for urgent unforeseen needs",
          "Public Account → government as banker, NO appropriation needed",
        ],
      },
      {
        label: "Bill Type Trap",
        lines: [
          "Finance Bill & Appropriation Bill = Money Bills",
          "Money Bills can be introduced ONLY in Lok Sabha (Article 110)",
          "Rajya Sabha can only recommend changes, not amend/reject",
        ],
      },
    ],
    mainsAngle:
      "The FRBM framework and the distinction between revenue and capital expenditure together define India's fiscal prudence debate — governments often face a trade-off between meeting fiscal deficit targets and sustaining growth-oriented capital expenditure, especially during economic slowdowns.",
    mainsTheme:
      "Fiscal prudence (FRBM) vs growth-oriented capital spending — recurring tension",
    recall: [
      "Fiscal Deficit = Total Exp − Total Receipts (excl. borrowing)",
      "Revenue Deficit = Rev Exp − Rev Receipts",
      "Primary Deficit = Fiscal Deficit − Interest Payments",
      "FRBM Act — 2003",
      "Consolidated Fund — Article 266",
      "Contingency Fund — Article 267, President's disposal",
      "Public Account — Article 266(2), no appropriation needed",
      "Finance + Appropriation Bill = Money Bills → Lok Sabha only",
    ],
  },
};
