// GS3 › Economics › Budget (combines all budget-year content + static reference notes)
const DATA_gs3_economics_budget = {
  id: "gs3-economics-budget",
  title: "Union Budget",
  subtitle: "Yearly Budget Coverage",
  icon: "💰",
  isChapter: true, // marks this as a Prev/Next navigation boundary
  children: [
    DATA_news_budget_static,
    DATA_news_budget_priority_groups,
    DATA_news_budget_2025,
    DATA_news_budget_2026,
  ],
};
