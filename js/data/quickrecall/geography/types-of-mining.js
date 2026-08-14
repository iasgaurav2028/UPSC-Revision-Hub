const DATA_qr_types_of_mining = {
  id: "qr-types-of-mining",
  title: "Types of Mining",
  subtitle: "Surface, Underground, Placer & In-Situ",
  icon: "⛏",
  isLeaf: true,
  notes: {
    // Flexible format: the four methods are shown as TYPES (a comparison
    // table + detail cards), not as generic "Key Features".
    source: "Geography (Economic)",
    sections: [
      {
        type: "points",
        title: "🎯 Why It Matters",
        items: [
          "Classification of mining methods is a standard Prelims and geography-optional fact, often paired with example minerals",
          "Rat-hole mining and in-situ uranium leaching link to current affairs (NGT bans, environmental concerns)",
          "Understanding cost, risk and environmental impact of each method supports GS-1 (resources) and GS-3 (environment/economy) answers",
        ],
      },
      {
        type: "table",
        title: "⛏ The Four Types at a Glance",
        headers: ["Type", "How it works", "Cost / Risk", "Examples"],
        rows: [
          [
            "Surface (Open-cast)",
            "Remove overlying soil & rock to reach minerals near the surface",
            "Cheapest, safest, high output",
            "Quarrying, glory-hole mining; sand",
          ],
          [
            "Underground",
            "Reach deep deposits through shafts & tunnels",
            "Risky, expensive",
            "Rat-hole (coal), drilling (oil & gas)",
          ],
          [
            "Placer",
            "Recover minerals from river beds, sand & beach deposits",
            "Low-cost, labour-intensive",
            "Gold, monazite",
          ],
          [
            "In-Situ (Solution)",
            "Inject a solution to dissolve the ore, then pump it up",
            "Low surface disturbance; groundwater risk",
            "Uranium",
          ],
        ],
      },
      {
        type: "features",
        title: "🔎 Each Type in Detail",
        items: [
          {
            key: "1. Surface (Open-cast) Mining",
            main: "Minerals lying near the surface are extracted by removing the overlying soil and rock. It is the cheapest, safest and most productive method. Examples: quarrying (e.g. in Rajasthan) and glory-hole mining.",
            note: "Environmentally disruptive — large land footprint and overburden dumps.",
          },
          {
            key: "2. Underground Mining",
            main: "Minerals lying deep below the surface are reached through shafts and tunnels. It is risky and expensive. Sub-types include drilling (for petroleum and natural gas) and rat-hole mining (traditional, hazardous coal mining, e.g. in Meghalaya).",
            note: "Higher accident risk — roof collapse, gas, flooding.",
          },
          {
            key: "3. Placer Mining",
            main: "Extraction of valuable minerals from PLACER DEPOSITS — accumulations in river beds, sand and beaches. Examples: gold and monazite (a source of thorium) recovered from alluvial and beach sands.",
            note: "Common along river valleys and coastal sands (e.g. Kerala's monazite beach sands).",
          },
          {
            key: "4. In-Situ (Solution) Mining",
            main: "Also called solution mining/leaching. A chemical solution is injected underground to dissolve the mineral, which is then pumped to the surface through pipes without physically removing rock. Example: uranium extraction.",
            note: "Lower surface disturbance but risks groundwater contamination.",
          },
        ],
      },
      {
        type: "traps",
        title: "⚠ Prelims Traps",
        items: [
          {
            label: "Cheapest vs riskiest",
            lines: [
              "Surface mining: cheapest, safest, high output.",
              "Underground mining: riskiest and most expensive.",
            ],
          },
          {
            label: "Method–mineral pairs",
            lines: [
              "Drilling → petroleum and natural gas.",
              "Placer → gold, monazite (river beds/beaches).",
              "In-situ / solution → uranium. Rat-hole → coal (Meghalaya).",
            ],
          },
          {
            label: "Rat-hole mining",
            lines: [
              "A form of UNDERGROUND mining, not surface mining.",
              "Banned by the NGT (2014) due to safety and environmental hazards, though it continues informally.",
            ],
          },
        ],
      },
      {
        type: "mains",
        title: "✍ Mains / Value Addition",
        quote:
          "The choice of mining method reflects a trade-off between cost, safety and environmental damage. India's challenge is to move from hazardous, informal practices like rat-hole mining toward scientific, regulated extraction — balancing mineral security and livelihoods against ecological and worker-safety concerns.",
        theme: "Resource extraction — efficiency versus sustainability",
      },
      {
        type: "recall",
        title: "🔑 Quick Recall",
        items: [
          "Surface/open-cast: cheapest, safest (quarrying, glory hole)",
          "Underground: risky, costly (tunnels/shafts)",
          "Drilling → petroleum & natural gas",
          "Rat-hole → coal (Meghalaya); NGT-banned",
          "Placer → gold, monazite (river beds/beaches)",
          "In-situ / solution → uranium",
        ],
      },
    ],
  },
};
