// Quiz for: geo6-ch2 (35 questions, UPSC Prelims-style — exceeds the usual
// 20-question baseline given the density of testable content: exact degree
// values, heat zones, and time-zone calculation logic)
const QUIZ_geo6_ch2 = {
  title: "Globe: Latitudes and Longitudes",
  questions: [
    {
      q: "A globe is best described as:",
      options: [
        "A flat representation of the Earth",
        "A true model (miniature form) of the Earth",
        "A model showing only oceans",
        "A device used only for measuring time",
      ],
      correct: 1,
      explain:
        "A globe is a true model (miniature form) of the Earth, showing countries, continents, and oceans in their correct relative size.",
    },
    {
      q: [
        "Consider the following statements regarding the axis of the Earth:",
        "I. On a globe, the axis is represented by a tilted needle passing through the North and South Poles.",
        "II. On the real Earth, the axis is a physical, visible structure.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I only", "II only", "Both I and II", "Neither I nor II"],
      correct: 0,
      explain:
        "Statement I is correct. Statement II is incorrect — on the real Earth, the axis is an IMAGINARY line, unlike the physical needle used in a globe model.",
    },
    {
      q: "The equator is best described as:",
      options: [
        "An imaginary line dividing the Earth into Eastern and Western Hemispheres",
        "An imaginary line dividing the Earth into Northern and Southern Hemispheres, representing 0° latitude",
        "A physical boundary marking the Torrid Zone only",
        "The line along which all meridians converge",
      ],
      correct: 1,
      explain:
        "The equator divides the Earth into the Northern and Southern Hemispheres and represents 0° latitude.",
    },
    {
      q: [
        "Assertion (A): The size of latitude parallels decreases as one moves away from the equator toward the poles.",
        "Reason (R): Latitude parallels are circles drawn parallel to the equator, and the Earth's shape causes these circles to shrink closer to the poles.",
        "Which one of the following is correct?",
      ],
      options: [
        "Both A and R are true, and R is the correct explanation of A",
        "Both A and R are true, but R is NOT the correct explanation of A",
        "A is true, but R is false",
        "A is false, but R is true",
      ],
      correct: 0,
      explain:
        "Both are true and R correctly explains A — as latitude parallels approach the poles, the Earth's curvature causes their circumference to shrink continuously until reaching a point at the poles.",
    },
    {
      q: "The distance from the equator to either pole represents what fraction of a full circle around the Earth, and what angular value does this correspond to?",
      options: [
        "1/2 of a circle; 180°",
        "1/4 of a circle; 90°",
        "1/3 of a circle; 120°",
        "1/8 of a circle; 45°",
      ],
      correct: 1,
      explain:
        "The distance from the equator to a pole is 1/4 of a full circle (360°), which equals 90° — hence the poles are at 90°N and 90°S.",
    },
    {
      q: [
        "Consider the following statements:",
        "I. Parallels north of the equator are called 'north latitudes'.",
        "II. Chandrapur (Maharashtra, India) and Belo Horizonte (Brazil) are both located on parallels of about 20° latitude, but on opposite sides of the equator.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I only", "II only", "Both I and II", "Neither I nor II"],
      correct: 2,
      explain:
        "Both statements are correct — Chandrapur is at 20°N while Belo Horizonte is at 20°S, illustrating how the same numerical latitude value can apply to places in opposite hemispheres.",
    },
    {
      q: "Which of the following correctly lists all four 'important parallels of latitude' besides the equator and the poles?",
      options: [
        "Tropic of Cancer, Tropic of Capricorn, Arctic Circle, Antarctic Circle",
        "Tropic of Cancer, Prime Meridian, Arctic Circle, International Date Line",
        "Equator, Tropic of Capricorn, Arctic Circle, Standard Meridian",
        "Tropic of Cancer, Tropic of Capricorn, North Pole, South Pole",
      ],
      correct: 0,
      explain:
        "The four important parallels (besides equator and poles) are the Tropic of Cancer, Tropic of Capricorn, Arctic Circle, and Antarctic Circle.",
    },
    {
      q: "The Tropic of Cancer is located at:",
      options: ["23½°S", "23½°N", "66½°N", "0°"],
      correct: 1,
      explain:
        "The Tropic of Cancer is located at 23½° north of the equator, in the Northern Hemisphere.",
    },
    {
      q: [
        "Consider the following pairs:",
        "Parallel — Value",
        "I. Tropic of Capricorn — 23½°S",
        "II. Arctic Circle — 66½°N",
        "III. Antarctic Circle — 60°S",
        "How many of the above pairs are correctly matched?",
      ],
      options: [
        "Only one pair",
        "Only two pairs",
        "All three pairs",
        "None of the pairs",
      ],
      correct: 1,
      explain:
        "Pairs I and II are correctly matched. Pair III is incorrect — the Antarctic Circle is at 66½°S, not 60°S.",
    },
    {
      q: "The region between the Tropic of Cancer and the Tropic of Capricorn, where the mid-day sun is exactly overhead at least once a year on every latitude, is called the:",
      options: [
        "Temperate Zone",
        "Torrid Zone",
        "Frigid Zone",
        "Equatorial Trough",
      ],
      correct: 1,
      explain:
        "This region, receiving maximum heat, is called the Torrid Zone.",
    },
    {
      q: "Which of the following correctly describes the boundaries of the North Temperate Zone?",
      options: [
        "Between the equator and the Tropic of Cancer",
        "Between the Tropic of Cancer and the Arctic Circle",
        "Between the Arctic Circle and the North Pole",
        "Between the Tropic of Capricorn and the Antarctic Circle",
      ],
      correct: 1,
      explain:
        "The North Temperate Zone lies between the Tropic of Cancer (23½°N) and the Arctic Circle (66½°N).",
    },
    {
      q: "Why are the Frigid Zones (areas between the Arctic/Antarctic Circles and the respective Poles) very cold?",
      options: [
        "Because they receive no sunlight at all, ever",
        "Because the sun does not rise much above the horizon there, so its rays are always slanting and provide less heat",
        "Because they are located at the highest altitude on Earth",
        "Because ocean currents there are always cold",
      ],
      correct: 1,
      explain:
        "In the Frigid Zones, the sun stays low on the horizon, so its rays strike at a slanting angle, delivering less heat per unit area — not because there is no sunlight at all.",
    },
    {
      q: [
        "Consider the following statements regarding heat zones:",
        "I. The Torrid Zone lies between the two Tropics.",
        "II. The Temperate Zones lie between a Tropic and the corresponding polar Circle.",
        "III. The Frigid Zones lie between a polar Circle and the corresponding Pole.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I and II only", "II and III only", "I, II and III", "I only"],
      correct: 2,
      explain:
        "All three statements correctly describe the sequential structure of Earth's heat zones from equator to poles.",
    },
    {
      q: "Meridians of longitude are used to determine:",
      options: [
        "How far north or south a place is from the equator",
        "How far east or west a place is from a given reference line running pole to pole",
        "The height of a place above sea level",
        "The temperature zone of a place",
      ],
      correct: 1,
      explain:
        "Longitude measures east-west position relative to a reference meridian, complementing latitude's north-south measurement.",
    },
    {
      q: "Which of the following places are given as an example of locations on the SAME latitude (20°S) but needing longitude to be precisely distinguished?",
      options: [
        "Chandrapur and Belo Horizonte",
        "Tonga Islands and Mauritius Islands",
        "Dwarka and Dibrugarh",
        "Dhubri and Greenwich",
      ],
      correct: 1,
      explain:
        "Tonga Islands (Pacific Ocean) and Mauritius Islands (Indian Ocean) are both at 20°S, illustrating why longitude is needed alongside latitude to pinpoint a location precisely.",
    },
    {
      q: [
        "Assertion (A): All meridians of longitude are of equal length.",
        "Reason (R): Meridians are semi-circles running from the North Pole to the South Pole, and every such semi-circle spans the same north-south distance.",
        "Which one of the following is correct?",
      ],
      options: [
        "Both A and R are true, and R is the correct explanation of A",
        "Both A and R are true, but R is NOT the correct explanation of A",
        "A is true, but R is false",
        "A is false, but R is true",
      ],
      correct: 0,
      explain:
        "Both are true and R explains A — since every meridian runs the same pole-to-pole distance, all meridians share equal length, unlike latitude parallels which shrink toward the poles.",
    },
    {
      q: "Which of the following correctly distinguishes latitude parallels from longitude meridians in terms of length?",
      options: [
        "Latitudes are all equal in length; longitudes decrease toward the poles",
        "Longitudes are all equal in length; latitudes decrease in length toward the poles",
        "Both latitudes and longitudes are equal in length",
        "Both latitudes and longitudes decrease in length toward the poles",
      ],
      correct: 1,
      explain:
        "This is a classic, frequently tested distinction — longitudes (meridians) are all equal in length, while latitudes (parallels) decrease in length moving from the equator toward the poles.",
    },
    {
      q: "Why did countries need to select a specific reference meridian (unlike latitude, which naturally starts at the equator)?",
      options: [
        "Because meridians are of unequal length, making a natural starting point necessary",
        "Because all meridians are of EQUAL length, so there was no natural 'zero point' the way the equator serves for latitude",
        "Because longitude cannot be measured in degrees",
        "Because only some meridians pass through the poles",
      ],
      correct: 1,
      explain:
        "Since all meridians are equal in length, none stood out naturally as a 'zero' reference the way the equator does for latitude — hence the need for countries to agree on the Prime Meridian.",
    },
    {
      q: "The Prime Meridian passes through which location?",
      options: [
        "Paris, France",
        "Greenwich, location of the British Royal Observatory",
        "Washington D.C., USA",
        "New Delhi, India",
      ],
      correct: 1,
      explain:
        "The Prime Meridian passes through Greenwich, where the British Royal Observatory is located, and has a value of 0° longitude.",
    },
    {
      q: "From the Prime Meridian, longitude is counted:",
      options: [
        "90° eastward and 90° westward only",
        "180° eastward as well as 180° westward",
        "360° in one direction only",
        "45° eastward and 45° westward only",
      ],
      correct: 1,
      explain:
        "Longitude is measured 180° eastward and 180° westward from the Prime Meridian.",
    },
    {
      q: "Which of the following statements about the 180° meridian is correct?",
      options: [
        "180°E and 180°W are two entirely separate meridians on opposite sides of the Earth",
        "180°E and 180°W are actually the same line",
        "The 180° meridian passes through Greenwich",
        "The 180° meridian does not exist; longitude stops at 90°",
      ],
      correct: 1,
      explain:
        "180°E and 180°W meridians are, interestingly, the same physical line — since counting 180° eastward and 180° westward from the Prime Meridian brings you to the same point.",
    },
    {
      q: "The Prime Meridian and the 180° meridian together divide the Earth into which two hemispheres?",
      options: [
        "Northern and Southern Hemispheres",
        "Eastern and Western Hemispheres",
        "Torrid and Temperate Hemispheres",
        "Land and Water Hemispheres",
      ],
      correct: 1,
      explain:
        "Together, the Prime Meridian and the 180° meridian divide the Earth into the Eastern Hemisphere and Western Hemisphere.",
    },
    {
      q: "To precisely locate a specific point on the globe (such as Dhubri, Assam), one needs to know:",
      options: [
        "Only its latitude",
        "Only its longitude",
        "Both its latitude AND longitude together",
        "Only its distance from the equator",
      ],
      correct: 2,
      explain:
        "A precise location requires both latitude and longitude together — the chapter gives Dhubri, Assam (26°N, 90°E) as an example.",
    },
    {
      q: "Local time at a place can best be measured using:",
      options: [
        "The length of shadows cast by the moon",
        "The movement of the sun, with shadows shortest at noon and longest at sunrise/sunset",
        "Only artificial clocks calibrated in Greenwich",
        "The position of the Pole Star",
      ],
      correct: 1,
      explain:
        "Local time is traditionally reckoned using the sun's movement, with the shortest shadow at noon and longest shadows at sunrise and sunset.",
    },
    {
      q: "When the sun is at its highest point over the Prime Meridian, what time is it at all places along that meridian?",
      options: ["Sunrise", "Sunset", "Mid-day/noon", "Midnight"],
      correct: 2,
      explain:
        "When the Prime Meridian has the sun at its highest point, all places along that meridian experience mid-day/noon.",
    },
    {
      q: "Which of the following correctly describes the relationship between longitude and time difference from Greenwich?",
      options: [
        "Places east of Greenwich are behind Greenwich time; places west are ahead",
        "Places east of Greenwich are ahead of Greenwich time; places west are behind",
        "There is no relationship between longitude and time",
        "Only places exactly on the Prime Meridian have any defined time",
      ],
      correct: 1,
      explain:
        "Because the Earth rotates west to east, places east of Greenwich experience sunrise/noon earlier and are therefore AHEAD of Greenwich time, while places west are BEHIND.",
    },
    {
      q: "The Earth rotates 360° in approximately 24 hours. This corresponds to how many degrees of rotation per hour?",
      options: ["10°", "15°", "20°", "24°"],
      correct: 1,
      explain: "360° ÷ 24 hours = 15° per hour.",
    },
    {
      q: "How many minutes of time difference correspond to 1° of longitude?",
      options: ["1 minute", "2 minutes", "4 minutes", "10 minutes"],
      correct: 2,
      explain:
        "Since 15° corresponds to 60 minutes (1 hour), 1° corresponds to 60/15 = 4 minutes.",
    },
    {
      q: "If it is 12 noon at Greenwich, what time will it be at 15° WEST of Greenwich?",
      options: ["1:00 p.m.", "11:00 a.m.", "12:00 midnight", "1:00 a.m."],
      correct: 1,
      explain:
        "15° west of Greenwich is 1 hour BEHIND Greenwich time, so if it is 12 noon at Greenwich, it will be 11:00 a.m. there.",
    },
    {
      q: "If it is 12 noon at Greenwich, what time will it be at exactly 180° longitude?",
      options: [
        "6:00 a.m.",
        "6:00 p.m.",
        "12:00 midnight",
        "12:00 noon (same as Greenwich)",
      ],
      correct: 2,
      explain:
        "180° represents exactly 12 hours of time difference (180° ÷ 15° per hour = 12 hours), so it will be midnight at 180° when it is noon at Greenwich.",
    },
    {
      q: "Why do countries generally need to adopt a 'standard time' rather than using pure local time everywhere?",
      options: [
        "Because local time is scientifically inaccurate",
        "Because local times differ across meridians within the same country, making things like train timetables impractical",
        "Because only Greenwich is allowed to have an official time",
        "Because standard time is required by international law regardless of longitudinal extent",
      ],
      correct: 1,
      explain:
        "The chapter cites the practical difficulty of scheduling (e.g. train timetables) across a country if every meridian kept a slightly different local time — hence the adoption of one standard time per country.",
    },
    {
      q: "Which longitude is treated as India's Standard Meridian?",
      options: ["68°E", "82½°E", "90°E", "97°E"],
      correct: 1,
      explain:
        "82½°E (82°30'E) is India's Standard Meridian, and its local time is taken as the Indian Standard Time (IST) for the whole country.",
    },
    {
      q: "Indian Standard Time (IST) is ahead of Greenwich Mean Time (GMT) by:",
      options: [
        "4 hours 30 minutes",
        "5 hours 30 minutes",
        "6 hours 30 minutes",
        "5 hours only, no minutes",
      ],
      correct: 1,
      explain:
        "IST is 5 hours 30 minutes ahead of GMT, since India lies east of Greenwich at 82°30'E.",
    },
    {
      q: "According to the chapter's example, if a cricket match starts at 2:00 p.m. in London, what time would it begin in India?",
      options: ["7:30 a.m.", "9:30 a.m.", "7:30 p.m.", "8:30 p.m."],
      correct: 2,
      explain:
        "Since IST is 5 hours 30 minutes ahead of GMT, a 2:00 p.m. start in London corresponds to 7:30 p.m. in India.",
    },
    {
      q: [
        "Consider the following statements regarding time zones:",
        "I. Countries with a large longitudinal extent may adopt more than one standard time.",
        "II. Russia has as many as 11 standard times.",
        "III. The Earth is divided into 24 time zones of 1 hour each, each covering 15° of longitude.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I and II only", "II and III only", "I, II and III", "I only"],
      correct: 2,
      explain:
        "All three statements are correct — this set of facts (multiple time zones for large countries, Russia's 11 zones, and the 24 × 15° global division) is frequently tested together.",
    },
    {
      q: "Which of the following statements about the Indian Standard Meridian's location relative to India's landmass is best supported by the chapter?",
      options: [
        "It passes through the westernmost point of India",
        "It passes through the country roughly north-south, chosen as a central reference longitude for the whole country",
        "It lies entirely outside India's territory",
        "It changes every few years based on population shifts",
      ],
      correct: 1,
      explain:
        "82½°E was chosen as a central reference meridian running through India, whose local time is applied uniformly as IST across the country, despite India's actual longitudinal spread from about 68°E to 97°E.",
    },
  ],
};
