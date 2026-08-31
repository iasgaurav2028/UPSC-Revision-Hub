const DATA_qr_river_tributaries = {
  id: "qr-river-tributaries",
  title: "Tributaries of Major Indian Rivers",
  subtitle: "Ganga, Yamuna, Brahmaputra, Indus, Peninsular",
  icon: "🌊",
  isLeaf: true,
  notes: {
    // Flexible format: river-tributary data reads best as a table.
    source: "Geography (Drainage)",
    sections: [
      {
        type: "points",
        title: "🎯 Why It Matters",
        items: [
          "Tributaries are smaller rivers/streams that flow into a larger (main) river, increasing its water volume",
          "River–tributary pairing is a very high-frequency Prelims 'match the following' and map-based topic",
          "Understanding tributaries underpins drainage systems, irrigation and interlinking-of-rivers questions",
        ],
      },
      {
        type: "table",
        title: "🌊 Himalayan Rivers & Their Tributaries",
        headers: ["Main River", "Major Tributaries"],
        rows: [
          ["Ganga", "Yamuna, Ramganga, Ghaghara, Gandak, Kosi, Son, Damodar"],
          ["Yamuna", "Chambal, Betwa, Ken, Sindh, Tons"],
          ["Brahmaputra", "Dibang, Lohit, Subansiri, Manas, Teesta"],
          ["Indus", "Jhelum, Chenab, Ravi, Beas, Sutlej"],
        ],
      },
      {
        type: "table",
        title: "🏞 Peninsular Rivers & Their Tributaries",
        headers: ["Main River", "Major Tributaries"],
        rows: [
          ["Godavari", "Pranhita, Indravati, Manjira, Purna, Sabari"],
          ["Krishna", "Tungabhadra, Bhima, Koyna, Ghataprabha, Malaprabha"],
          ["Narmada", "Tawa, Shakkar, Hiran"],
          ["Tapi (Tapti)", "Purna, Girna, Panjhra"],
        ],
      },
      {
        type: "traps",
        title: "⚠ Prelims Traps",
        items: [
          {
            label: "Yamuna is itself a tributary",
            lines: [
              "The Yamuna is the largest tributary of the Ganga — but it has its own tributaries (Chambal, Betwa, Ken, Sindh, Tons).",
              "Son and Damodar are Ganga tributaries; Damodar is called the 'Sorrow of Bengal'.",
            ],
          },
          {
            label: "The five rivers of Punjab (Indus system)",
            lines: [
              "Jhelum, Chenab, Ravi, Beas, Sutlej — the five tributaries that give Punjab ('land of five rivers') its name.",
            ],
          },
          {
            label: "Purna appears twice",
            lines: [
              "'Purna' is a tributary of BOTH the Godavari and the Tapi — a common confusion.",
              "Tungabhadra is a major tributary of the Krishna (not the Godavari).",
            ],
          },
        ],
      },
      {
        type: "recall",
        title: "🔑 Quick Recall",
        items: [
          "Ganga → Yamuna, Ghaghara, Gandak, Kosi, Son, Damodar",
          "Yamuna → Chambal, Betwa, Ken, Sindh, Tons",
          "Brahmaputra → Dibang, Lohit, Subansiri, Manas, Teesta",
          "Indus → Jhelum, Chenab, Ravi, Beas, Sutlej",
          "Godavari → Pranhita, Indravati, Manjira, Purna, Sabari",
          "Krishna → Tungabhadra, Bhima, Koyna, Ghataprabha, Malaprabha",
          "Narmada → Tawa, Shakkar, Hiran; Tapi → Purna, Girna, Panjhra",
        ],
      },
    ],
  },
};
