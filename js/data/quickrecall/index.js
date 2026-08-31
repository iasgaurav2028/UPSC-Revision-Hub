// ╔══════════════════════════════════════════════════════════════════╗
// ║  QUICK RECALL — top-level section (sits below Daily Newspaper).     ║
// ║                                                                    ║
// ║  Holds one branch per UPSC subject. These are placeholders ready   ║
// ║  to fill with rapid-revision topics: add child nodes (with an      ║
// ║  inline `notes: {...}` and `isLeaf: true`) into a subject's        ║
// ║  `children: [...]` array, then re-run: node build-bundle.js        ║
// ╚══════════════════════════════════════════════════════════════════╝
const DATA_quickrecall = {
  id: "quickrecall",
  title: "Quick Recall",
  subtitle: "Rapid revision — every UPSC subject",
  icon: "⚡",
  children: [
    {
      id: "qr-history",
      title: "History",
      icon: "📜",
      children: [
        DATA_qr_ancient_india,
        DATA_qr_buddhism,
        DATA_qr_jagir_mansab,
        DATA_qr_advent_europeans,
        DATA_qr_gg_viceroys,
        DATA_qr_freedom_journey,
      ],
    },
    {
      id: "qr-geography",
      title: "Geography",
      icon: "🌏",
      children: [
        DATA_qr_state_nicknames,
        DATA_qr_siliguri_corridor,
        DATA_qr_types_of_mining,
        DATA_qr_river_tributaries,
        DATA_qr_brahmaputra,
        DATA_qr_indus_water_treaty,
      ],
    },
    {
      id: "qr-polity",
      title: "Polity & Governance",
      icon: "⚖",
      children: [
        DATA_qr_presidents,
        DATA_qr_anti_defection,
        DATA_qr_original_constitution,
        DATA_qr_governance_sj,
        DATA_qr_rti_act,
        DATA_qr_exam_fraud,
      ],
    },
    { id: "qr-economics", title: "Economy", icon: "💰", children: [] },
    {
      id: "qr-society",
      title: "Society",
      icon: "👥",
      children: [DATA_qr_full_forms],
    },
    { id: "qr-culture", title: "Art & Culture", icon: "🎭", children: [] },
    {
      id: "qr-ir",
      title: "International Relations",
      icon: "🌐",
      children: [DATA_qr_levels_partnership],
    },
    {
      id: "qr-scitech",
      title: "Science & Technology",
      icon: "🔬",
      children: [],
    },
    {
      id: "qr-environment",
      title: "Environment & Ecology",
      icon: "🌱",
      children: [],
    },
    {
      id: "qr-security",
      title: "Internal Security",
      icon: "🛡",
      children: [],
    },
    {
      id: "qr-disaster",
      title: "Disaster Management",
      icon: "🌪",
      children: [],
    },
    { id: "qr-ethics", title: "Ethics (GS-4)", icon: "🧭", children: [] },
  ],
};
