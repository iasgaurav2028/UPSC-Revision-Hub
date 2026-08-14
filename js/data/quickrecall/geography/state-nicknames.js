const DATA_qr_state_nicknames = {
  id: "qr-state-nicknames",
  title: "Indian States & Their Nicknames",
  subtitle: "States & UTs — Popular Sobriquets",
  icon: "🗺",
  isLeaf: true,
  notes: {
    // NEW flexible format: `sections` lets this note use its own headings
    // and a raw-data TABLE instead of the polity-style fixed layout.
    source: "Geography",
    sections: [
      {
        type: "points",
        title: "🎯 Why It Matters",
        icon: "",
        items: [
          "State/UT nicknames are classic 'match the following' targets in Prelims and many state PSC exams",
          "Some nicknames overlap (two 'Rice Bowls', two 'Dev Bhoomi'), which makes them common trap questions",
          "The sobriquets often encode geography, agriculture or culture, aiding recall of a state's key features",
        ],
      },
      {
        type: "table",
        title: "🗺 States & Their Nicknames",
        headers: ["State", "Nickname"],
        rows: [
          ["Andhra Pradesh", "Rice Bowl of India"],
          ["Arunachal Pradesh", "Land of the Rising Sun"],
          ["Assam", "Land of Red River & Blue Hills"],
          ["Bihar", "Land of Buddha"],
          ["Chhattisgarh", "Rice Bowl of India"],
          ["Goa", "Pearl of the Orient"],
          ["Gujarat", "Land of Legends"],
          ["Haryana", "Granary of India"],
          ["Himachal Pradesh", "Dev Bhoomi (Land of Gods)"],
          ["Jharkhand", "Land of Forests"],
          ["Karnataka", "Land of Coffee"],
          ["Kerala", "God's Own Country"],
          ["Madhya Pradesh", "Heart of India"],
          ["Maharashtra", "Land of Saints"],
          ["Manipur", "Jewel of India"],
          ["Meghalaya", "Land of Highlanders"],
          ["Nagaland", "Land of Festivals"],
          ["Odisha", "Soul of India"],
          ["Punjab", "Land of Five Rivers"],
          ["Rajasthan", "Land of Kings"],
          ["Sikkim", "Organic State of India"],
          ["Tamil Nadu", "Land of Temples"],
          ["Telangana", "Land of Prosperity"],
          ["Tripura", "Land of Royal Heritage"],
          ["Uttar Pradesh", "Land of Pilgrimage"],
          ["Uttarakhand", "Dev Bhoomi (Land of Gods)"],
          ["West Bengal", "Land of Culture"],
        ],
      },
      {
        type: "table",
        title: "🏝 Union Territories & Their Nicknames",
        headers: ["Union Territory", "Nickname"],
        rows: [
          ["Andaman & Nicobar Islands", "Emerald Islands"],
          ["Chandigarh", "The City Beautiful"],
          ["Dadra & Nagar Haveli and Daman & Diu", "Green Land / Land of Sea Breeze"],
          ["Delhi (NCT)", "Heart of India"],
          ["Jammu & Kashmir", "Paradise on Earth"],
          ["Ladakh", "Land of High Passes"],
          ["Lakshadweep", "Coral Islands"],
          ["Puducherry", "French Riviera of the East"],
        ],
      },
      {
        type: "traps",
        title: "⚠ Prelims Traps",
        items: [
          {
            label: "Duplicate nicknames",
            lines: [
              "Rice Bowl of India: Andhra Pradesh AND Chhattisgarh.",
              "Dev Bhoomi (Land of Gods): Himachal Pradesh AND Uttarakhand.",
            ],
          },
          {
            label: "Easily confused pairs",
            lines: [
              "Land of the Rising Sun = Arunachal Pradesh (easternmost).",
              "Land of Five Rivers = Punjab; God's Own Country = Kerala.",
            ],
          },
        ],
      },
      {
        type: "mains",
        title: "✍ Mains / Value Addition",
        quote:
          "Regional sobriquets capture the geographical and cultural identity of India's states — a reminder that India's federal diversity is rooted in distinct physical and cultural geographies that shape agriculture, economy and tourism.",
        theme: "Regional identity and the geographical diversity of India",
      },
      {
        type: "recall",
        title: "🔑 Quick Recall",
        items: [
          "God's Own Country — Kerala",
          "Land of Five Rivers — Punjab",
          "Land of the Rising Sun — Arunachal Pradesh",
          "Rice Bowl — Andhra Pradesh & Chhattisgarh",
          "Dev Bhoomi — Himachal Pradesh & Uttarakhand",
          "Organic State — Sikkim",
          "Paradise on Earth — Jammu & Kashmir",
          "The City Beautiful — Chandigarh",
        ],
      },
    ],
  },
};
