// GS1 › Geography › NCERT › Class 6 › Chapter 2: Globe — Latitudes and Longitudes
const DATA_geo6_ch2 = {
  id: "geo6-ch2",
  title: "Globe: Latitudes and Longitudes",
  subtitle: "NCERT Class 6, Chapter 2",
  icon: "🌐",
  isLeaf: true,
  isChapter: true,
  notes: {
    era: "NCERT Class 6 — Geography, Chapter 2",
    significance: [
      "Establishes the entire coordinate system (latitude/longitude) used throughout Geography, map reading, and time-zone calculations — one of the most exam-relevant foundational chapters",
      "The exact degree values (23½°, 66½°, 82½°E) and heat-zone boundaries are extremely frequently tested static facts",
      "Directly underpins understanding of India's Standard Meridian and time-zone calculation logic, both recurring Prelims themes",
    ],
    features: [
      {
        key: "Globe",
        main: "A true model (miniature form) of the Earth\nShows countries, continents, and oceans in their correct size",
        note: "Comes in varying sizes: large, small pocket globes, inflatable globe-balloons",
      },
      {
        key: "Axis",
        main: "The tilted needle fixed through the globe, connecting North Pole and South Pole\nOn the real Earth, the axis is an IMAGINARY line (no physical needle)",
        note: "",
      },
      {
        key: "Equator",
        main: "An imaginary line dividing the Earth into two equal halves\nRepresents 0° latitude",
        note: "Divides Earth into Northern Hemisphere and Southern Hemisphere",
      },
      {
        key: "Latitude — Definition",
        main: "Parallel circles running from the equator up to the poles are called parallels of latitude\nMeasured in degrees",
        note: "Size of latitude parallels DECREASES as you move away from the equator toward the poles",
      },
      {
        key: "Latitude — Range & Poles",
        main: "Distance from equator to either pole = 1/4 of a full circle = 1/4 × 360° = 90°\nNorth Pole = 90°N; South Pole = 90°S",
        note: "Parallels north of equator = 'north latitudes' (N); south of equator = 'south latitudes' (S)",
      },
      {
        key: "4 Important Parallels (besides Equator & Poles)",
        main: "Tropic of Cancer — 23½°N\nTropic of Capricorn — 23½°S\nArctic Circle — 66½°N\nAntarctic Circle — 66½°S",
        note: "",
      },
      {
        key: "Torrid Zone",
        main: "Region between Tropic of Cancer (23½°N) and Tropic of Capricorn (23½°S)\nMid-day sun is exactly overhead at least once a year on every latitude here → receives MAXIMUM heat",
        note: "",
      },
      {
        key: "Temperate Zones",
        main: "North Temperate Zone: between Tropic of Cancer and Arctic Circle\nSouth Temperate Zone: between Tropic of Capricorn and Antarctic Circle\nMid-day sun never shines directly overhead here → moderate temperatures",
        note: "",
      },
      {
        key: "Frigid Zones",
        main: "North Frigid Zone: between Arctic Circle and North Pole\nSouth Frigid Zone: between Antarctic Circle and South Pole\nSun's rays always slanting (low angle) → very cold",
        note: "",
      },
      {
        key: "Longitude — Definition",
        main: "Meridians of longitude: reference lines running from North Pole to South Pole\nUsed to find how far EAST or WEST a place is from a reference line",
        note: "Distance measured in degrees of longitude; each degree divided into minutes, minutes into seconds",
      },
      {
        key: "Longitude — Shape & Convergence",
        main: "Meridians are semi-circles\nDistance between meridians DECREASES toward the poles, becoming ZERO at the poles (where all meridians meet)",
        note: "",
      },
      {
        key: "Latitude vs Longitude — Equal Length",
        main: "Latitudes: parallels are of DIFFERENT/decreasing lengths (largest at equator)\nLongitudes: ALL meridians are of EQUAL length",
        note: "This is why longitudes needed a special reference point to be numbered (unlike latitude, which naturally starts at the equator)",
      },
      {
        key: "Prime Meridian",
        main: "Passes through Greenwich (location of the British Royal Observatory)\nValue = 0° longitude; counted 180° eastward and 180° westward from it",
        note: "180°E and 180°W meridians are actually the SAME line",
      },
      {
        key: "Eastern & Western Hemisphere",
        main: "Prime Meridian + 180° meridian together divide the Earth into Eastern Hemisphere and Western Hemisphere",
        note: "Longitude values use E (east) or W (west) suffix",
      },
      {
        key: "Locating a Point (Latitude + Longitude)",
        main: "Any point on the globe can be located using its latitude AND longitude together (the grid)",
        note: "Example given: Dhubri, Assam is at 26°N, 90°E",
      },
      {
        key: "Local Time",
        main: "Best measured by the Sun's movement — shadow is shortest at noon, longest at sunrise/sunset\nWhen the Sun is at its highest point over the Prime Meridian, all places along it have noon",
        note: "All places on the SAME meridian of longitude share the same local time",
      },
      {
        key: "Time Difference — East vs West of Greenwich",
        main: "Places EAST of Greenwich are AHEAD of Greenwich time\nPlaces WEST of Greenwich are BEHIND Greenwich time",
        note: "Earth rotates west to east, causing this directional difference",
      },
      {
        key: "Time Calculation Rate",
        main: "Earth rotates 360° in ~24 hours → 15° per hour, or 1° in 4 minutes",
        note: "15°E of Greenwich = 1 hour AHEAD; 15°W of Greenwich = 1 hour BEHIND; 180° = exactly 12 hours different (midnight when Greenwich is noon)",
      },
      {
        key: "Why Standard Time is Needed",
        main: "Local time differs across meridians within the same country — impractical for things like train timetables",
        note: "Example: Dwarka (Gujarat) and Dibrugarh (Assam) differ by about 1 hour 45 minutes in local time",
      },
      {
        key: "Indian Standard Time (IST)",
        main: "India's Standard Meridian = 82½°E (82°30'E)\nLocal time at this meridian = Indian Standard Time (IST) for the whole country",
        note: "IST is 5 hours 30 minutes AHEAD of GMT (Greenwich Mean Time)",
      },
      {
        key: "Countries with Multiple Time Zones",
        main: "Countries with great longitudinal extent may adopt more than one standard time",
        note: "Russia has as many as 11 standard times",
      },
      {
        key: "World Time Zones",
        main: "Earth divided into 24 time zones of 1 hour each\nEach zone covers 15° of longitude",
        note: "",
      },
    ],
    traps: [
      {
        label: "Latitude vs Longitude — Shape/Length Confusion",
        lines: [
          "Latitudes = circles/parallels, DECREASING size toward poles, DIFFERENT lengths",
          "Longitudes = semi-circles/meridians, ALL of EQUAL length",
          "(A very frequently tested reversal trap)",
        ],
      },
      {
        label: "Exact Degree Values",
        lines: [
          "Tropic of Cancer = 23½°N (NOT 22½° or 21½°)",
          "Tropic of Capricorn = 23½°S",
          "Arctic Circle = 66½°N; Antarctic Circle = 66½°S",
          "India's Standard Meridian = 82½°E (NOT 80° or 85°)",
        ],
      },
      {
        label: "IST Offset from GMT",
        lines: [
          "IST = GMT + 5 hours 30 minutes (India is AHEAD, being east of Greenwich)",
          "Common trap: reversing direction (India is NOT behind GMT)",
        ],
      },
      {
        label: "East = Ahead, West = Behind",
        lines: [
          "Places EAST of Greenwich → AHEAD of Greenwich time",
          "Places WEST of Greenwich → BEHIND Greenwich time",
          "This is because Earth rotates west to east",
        ],
      },
      {
        label: "180° Meridian — Same Line Both Ways",
        lines: [
          "180°E and 180°W are the SAME physical meridian",
          "This line relates to the International Date Line concept",
        ],
      },
      {
        label: "Rate of Time Change",
        lines: [
          "1° longitude = 4 minutes of time difference",
          "15° longitude = 1 hour of time difference",
          "180° longitude = 12 hours difference",
        ],
      },
      {
        label: "Torrid/Temperate/Frigid Zone Boundaries",
        lines: [
          "Torrid Zone: between the two Tropics (23½°N to 23½°S)",
          "Temperate Zones: between a Tropic and the corresponding Circle (Arctic/Antarctic)",
          "Frigid Zones: between a Circle (Arctic/Antarctic) and the corresponding Pole",
        ],
      },
    ],
    mainsAngle:
      "The latitude-longitude coordinate system and standard time mechanism illustrate how geographic and astronomical principles translate into practical governance tools — India's choice of a single standard meridian (82½°E) despite significant east-west longitudinal spread reflects a deliberate trade-off between administrative simplicity and local time accuracy, a trade-off other large countries like Russia resolved differently by adopting multiple time zones.",
    mainsTheme:
      "Geography-to-governance link: how coordinate systems enable practical administration (standard time, timetables)",
    recall: [
      "Equator = 0° latitude; Poles = 90°N/90°S",
      "Tropic of Cancer 23½°N; Tropic of Capricorn 23½°S",
      "Arctic Circle 66½°N; Antarctic Circle 66½°S",
      "Torrid → Temperate → Frigid zones (equator to poles)",
      "Prime Meridian = 0°, through Greenwich",
      "Longitudes: ALL equal length; Latitudes: decreasing length toward poles",
      "1° longitude = 4 minutes time difference",
      "India's Standard Meridian = 82½°E",
      "IST = GMT + 5:30, India is AHEAD",
      "Russia has 11 standard times",
      "24 time zones worldwide, 15° each",
    ],
  },
};
