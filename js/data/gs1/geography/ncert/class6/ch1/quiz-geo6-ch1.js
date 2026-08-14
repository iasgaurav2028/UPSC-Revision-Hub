// Quiz for: geo6-ch1 (30 questions, UPSC Prelims-style — exceeds the usual
// 20-question baseline because this NCERT chapter is unusually rich in
// dense, individually testable factual content)
const QUIZ_geo6_ch1 = {
  title: "The Earth in the Solar System",
  questions: [
    {
      q: "Which of the following best defines a 'celestial body'?",
      options: [
        "Only planets and their moons",
        "The sun, the moon, and all objects shining in the night sky",
        "Only stars visible without a telescope",
        "Only human-made satellites",
      ],
      correct: 1,
      explain:
        "Celestial bodies include the sun, moon, and all shining objects in the night sky — a broad category covering stars, planets, satellites, asteroids, and meteoroids.",
    },
    {
      q: [
        "Consider the following statements regarding stars:",
        "I. Stars are made up of extremely hot gases.",
        "II. Stars have their own heat and light.",
        "III. All stars appear small because they are inherently smaller than planets.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I and II only", "II and III only", "I, II and III", "I only"],
      correct: 0,
      explain:
        "Statements I and II are correct. Statement III is incorrect — stars appear small/tiny because of their extreme DISTANCE from us, not because they are inherently small; in fact the Sun (a star) is far larger than Earth.",
    },
    {
      q: "The Sun is classified as a:",
      options: ["Planet", "Star", "Satellite", "Dwarf planet"],
      correct: 1,
      explain:
        "The Sun is a star — a huge, hot celestial body made of gases with its own heat and light.",
    },
    {
      q: "A 'constellation' is best defined as:",
      options: [
        "A single very bright star",
        "A pattern formed by a group of stars",
        "Another name for a galaxy",
        "A belt of asteroids",
      ],
      correct: 1,
      explain:
        "A constellation is a pattern formed by different groups of stars, such as Ursa Major.",
    },
    {
      q: "The Saptarishi, a group of seven stars, forms part of which constellation?",
      options: ["Orion", "Ursa Major (Big Bear)", "Ursa Minor", "Cassiopeia"],
      correct: 1,
      explain:
        "The Saptarishi is a group of seven stars forming part of the Ursa Major (Big Bear) constellation.",
    },
    {
      q: [
        "Assertion (A): The Pole Star (North Star) has historically been used to determine direction at night.",
        "Reason (R): The Pole Star always remains in the same position in the sky.",
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
        "Both are true and R directly explains A — the Pole Star's fixed position is precisely why it could reliably indicate the north direction for navigation.",
    },
    {
      q: "The position of the Pole Star can be located with the help of which group of stars?",
      options: [
        "Orion's Belt",
        "The Saptarishi (pointer stars)",
        "The Milky Way band",
        "The Asteroid Belt",
      ],
      correct: 1,
      explain:
        "An imaginary line joining the Saptarishi's 'pointer stars' and extended further points to the Pole Star.",
    },
    {
      q: "Which of the following correctly distinguishes a planet from a star?",
      options: [
        "Planets have their own heat and light; stars do not",
        "Planets have NO heat/light of their own and are lit by starlight; stars have their own heat and light",
        "Both planets and stars generate their own heat and light equally",
        "There is no meaningful difference between the two",
      ],
      correct: 1,
      explain:
        "This is the fundamental distinction — planets are lit by reflected/received starlight, while stars generate their own heat and light.",
    },
    {
      q: "The word 'planet' is derived from the Greek word 'Planetai', which means:",
      options: ["Shining objects", "Wanderers", "Fixed stars", "Giant bodies"],
      correct: 1,
      explain:
        "'Planetai' means 'wanderers' — reflecting how planets appear to move against the fixed backdrop of stars.",
    },
    {
      q: "A 'satellite' is best defined as a celestial body that:",
      options: [
        "Moves around the Sun directly, like a planet",
        "Moves around a planet, in the same way planets move around the Sun",
        "Generates its own heat and light",
        "Is found only in the asteroid belt",
      ],
      correct: 1,
      explain:
        "A satellite orbits a planet, analogous to how planets orbit the Sun — the Moon is Earth's natural satellite.",
    },
    {
      q: "Which of the following are examples of Indian human-made satellites?",
      options: [
        "INSAT, IRS, EDUSAT",
        "Sputnik, Apollo, Voyager",
        "Hubble, Kepler, Chandra",
        "Artemis, Orion, Gemini",
      ],
      correct: 0,
      explain:
        "INSAT, IRS, and EDUSAT are examples of Indian satellites mentioned in the chapter.",
    },
    {
      q: [
        "Consider the following statements regarding the composition of the Solar System:",
        "I. It consists of the Sun, eight planets, and satellites.",
        "II. It also includes asteroids and meteoroids.",
        "III. Pluto is officially counted among the eight planets of the Solar System.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I and II only", "I, II and III", "II and III only", "I only"],
      correct: 0,
      explain:
        "Statements I and II are correct. Statement III is incorrect — Pluto was reclassified as a 'dwarf planet' in August 2006 and is not among the eight planets.",
    },
    {
      q: "What force does the Sun provide that binds the Solar System together?",
      options: [
        "Magnetic force",
        "The pulling (gravitational) force",
        "Nuclear force",
        "Electrostatic force",
      ],
      correct: 1,
      explain:
        "The Sun provides the pulling (gravitational) force that binds the entire Solar System together.",
    },
    {
      q: "The approximate distance between the Sun and the Earth is:",
      options: [
        "108 million km",
        "150 million km",
        "228 million km",
        "778 million km",
      ],
      correct: 1,
      explain: "The Sun is approximately 150 million km away from the Earth.",
    },
    {
      q: "Which of the following correctly lists the eight planets of the Solar System in order of increasing distance from the Sun?",
      options: [
        "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
        "Venus, Mercury, Earth, Mars, Saturn, Jupiter, Neptune, Uranus",
        "Mercury, Earth, Venus, Mars, Jupiter, Uranus, Saturn, Neptune",
        "Mercury, Venus, Mars, Earth, Jupiter, Saturn, Neptune, Uranus",
      ],
      correct: 0,
      explain:
        "The correct order, matching the mnemonic 'My Very Efficient Mother Just Served Us Nuts', is Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
    },
    {
      q: "Which planet is nearest to the Sun, and approximately how long does it take to complete one orbit?",
      options: [
        "Venus; about 255 days",
        "Mercury; about 88 days",
        "Earth; about 365 days",
        "Mars; about 687 days",
      ],
      correct: 1,
      explain:
        "Mercury is nearest to the Sun and takes about 88 days to complete one orbit.",
    },
    {
      q: "Which planet is often referred to as 'Earth's twin' because of its similar size and shape?",
      options: ["Mars", "Venus", "Mercury", "Jupiter"],
      correct: 1,
      explain:
        "Venus is called 'Earth's twin' due to its size and shape being very similar to Earth's.",
    },
    {
      q: [
        "Consider the following pairs of planets and their approximate distance from the Sun (in million km):",
        "I. Mars — 228",
        "II. Jupiter — 1,427",
        "III. Neptune — 4,496",
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
        "Pairs I and III are correctly matched. Pair II is incorrect — Jupiter's distance is approximately 778 million km; 1,427 million km is Saturn's distance.",
    },
    {
      q: "The Earth is the ____ nearest planet to the Sun and the ____ largest planet in the Solar System.",
      options: [
        "third; fifth",
        "fifth; third",
        "second; fourth",
        "fourth; fifth",
      ],
      correct: 0,
      explain:
        "The Earth is the third nearest planet to the Sun and the fifth largest planet overall.",
    },
    {
      q: "The Earth's shape is described as a 'Geoid' primarily because:",
      options: [
        "It is a perfect sphere",
        "It is slightly flattened at the poles",
        "It has continents and oceans",
        "It rotates on a tilted axis",
      ],
      correct: 1,
      explain:
        "'Geoid' (earth-like shape) describes the Earth's actual shape, which is slightly flattened at the poles rather than a perfect sphere.",
    },
    {
      q: "Which of the following is NOT among the reasons the chapter gives for Earth being called a 'unique planet'?",
      options: [
        "Presence of water",
        "Presence of life-supporting gases like oxygen",
        "Neither too hot nor too cold",
        "Presence of visible rings",
      ],
      correct: 3,
      explain:
        "Visible rings are a feature of Jupiter, Saturn, and Uranus — NOT a reason cited for Earth's uniqueness. Earth's uniqueness stems from its temperature balance, water, and oxygen-rich air.",
    },
    {
      q: "The Earth is called the 'Blue Planet' because:",
      options: [
        "Its atmosphere scatters blue light exclusively",
        "Two-thirds of its surface is covered by water",
        "It appears blue due to its core temperature",
        "Its polar ice caps are blue in colour",
      ],
      correct: 1,
      explain:
        "The Earth appears blue from outer space because two-thirds of its surface is covered by water.",
    },
    {
      q: "Which planet has rings around it, as visible with powerful telescopes?",
      options: [
        "Only Saturn",
        "Jupiter, Saturn, and Uranus",
        "Only Jupiter and Mars",
        "Mercury, Venus, and Mars",
      ],
      correct: 1,
      explain:
        "Jupiter, Saturn, and Uranus all have rings — belts of small debris — visible from Earth with powerful telescopes.",
    },
    {
      q: [
        "Consider the following statements regarding Pluto:",
        "I. It was considered a planet until August 2006.",
        "II. It was reclassified as a 'dwarf planet' by the International Astronomical Union.",
        "III. Ceres and 2003 UB313 were reclassified alongside Pluto.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I and II only", "I, II and III", "II and III only", "I only"],
      correct: 1,
      explain:
        "All three statements are correct — Pluto's 2006 reclassification alongside Ceres and 2003 UB313 into the 'dwarf planet' category is a frequently tested fact.",
    },
    {
      q: "The Moon's diameter is approximately what fraction of the Earth's diameter?",
      options: ["One-half", "One-third", "One-quarter", "One-tenth"],
      correct: 2,
      explain:
        "The Moon's diameter is only about one-quarter that of the Earth's.",
    },
    {
      q: "The Moon is approximately how far from the Earth?",
      options: ["1,50,000 km", "3,84,400 km", "5,00,000 km", "10,00,000 km"],
      correct: 1,
      explain:
        "The Moon is about 3,84,400 km away from the Earth — vastly closer than the Sun (150 million km).",
    },
    {
      q: [
        "Assertion (A): Only one side of the Moon is ever visible from Earth.",
        "Reason (R): The Moon's orbital period around Earth and its rotational (spin) period on its own axis are both approximately 27 days.",
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
        "Both are true and R directly explains A — because the Moon's orbit and spin periods are equal (~27 days each), the same face always points toward Earth.",
    },
    {
      q: "Which of the following features are found on the Moon's surface?",
      options: [
        "Oceans and rivers only",
        "Mountains, plains, and depressions",
        "Dense forests",
        "Polar ice caps only",
      ],
      correct: 1,
      explain:
        "The Moon's surface has mountains, plains, and depressions, which cast shadows visible from Earth.",
    },
    {
      q: "Asteroids are found primarily in the belt located between the orbits of which two planets?",
      options: [
        "Earth and Mars",
        "Mars and Jupiter",
        "Jupiter and Saturn",
        "Venus and Earth",
      ],
      correct: 1,
      explain: "The Asteroid Belt lies between the orbits of Mars and Jupiter.",
    },
    {
      q: "According to the chapter, what do scientists believe about the origin of asteroids?",
      options: [
        "They are fragments of comets",
        "They are parts of a planet that exploded many years back",
        "They are debris from the Moon",
        "They originated from the Sun's outer layers",
      ],
      correct: 1,
      explain:
        "Scientists are of the view that asteroids are parts of a planet which exploded many years back.",
    },
    {
      q: "Which of the following correctly distinguishes asteroids from meteoroids?",
      options: [
        "Asteroids are tiny bodies orbiting the Sun (mainly in the Mars-Jupiter belt); meteoroids are small rock pieces that may fall to Earth and burn up due to atmospheric friction",
        "Meteoroids orbit only within the asteroid belt, while asteroids fall to Earth",
        "Both terms refer to exactly the same category of celestial body",
        "Asteroids are found only near the Moon, while meteoroids orbit the Sun",
      ],
      correct: 0,
      explain:
        "Asteroids are tiny Sun-orbiting bodies (mainly between Mars and Jupiter); meteoroids are small rock fragments that, upon nearing Earth, heat up and burn due to atmospheric friction — sometimes producing a visible flash or, if unburnt, a crater.",
    },
    {
      q: "The flash of light sometimes seen in the night sky, caused by a meteoroid burning up due to friction with air, is commonly called a:",
      options: ["Comet", "Meteor (shooting star)", "Nova", "Constellation"],
      correct: 1,
      explain:
        "This flash of light, caused by atmospheric friction burning a meteoroid, is what is commonly seen as a 'shooting star' or meteor.",
    },
    {
      q: "The whitish, broad, glowing band visible across a clear night sky is:",
      options: [
        "The Asteroid Belt",
        "The Milky Way galaxy",
        "The Pole Star's halo",
        "Earth's shadow",
      ],
      correct: 1,
      explain:
        "This band is the Milky Way galaxy, a cluster of millions of stars — our Solar System is part of it.",
    },
    {
      q: "In ancient India, the Milky Way was imagined as a river of light flowing in the sky and was named:",
      options: ["Ganga Sagar", "Akash Ganga", "Nakshatra Path", "Surya Marg"],
      correct: 1,
      explain:
        "The Milky Way was poetically named Akash Ganga in ancient India.",
    },
    {
      q: "A 'galaxy' is best defined as:",
      options: [
        "A single very large star",
        "A huge system of billions of stars along with clouds of dust and gases",
        "The path a planet takes around the Sun",
        "A collection of all the planets in one solar system",
      ],
      correct: 1,
      explain:
        "A galaxy is a huge system of billions of stars and clouds of dust and gases — millions of such galaxies together form the Universe.",
    },
    {
      q: "Which of the following correctly describes 'Poornima' and 'Amavasya'?",
      options: [
        "Poornima is New Moon night; Amavasya is Full Moon night",
        "Poornima is Full Moon night; Amavasya is New Moon night, occurring about a fortnight later",
        "Both refer to the same lunar phase",
        "Poornima occurs only once a year",
      ],
      correct: 1,
      explain:
        "Poornima is the Full Moon night; Amavasya, the New Moon night (when the Moon is not visible at all), occurs about a fortnight after Poornima.",
    },
    {
      q: "The night sky is best observed on which of the following nights, according to the chapter?",
      options: [
        "Poornima (Full Moon)",
        "Amavasya (New Moon), provided it is clear",
        "Any night with a full sky of clouds",
        "Only during a solar eclipse",
      ],
      correct: 1,
      explain:
        "On Amavasya (New Moon night), with no bright moonlight to interfere, the night sky can be observed best, provided it is a clear night.",
    },
    {
      q: "Neil Armstrong became the first human to step on the surface of the Moon on which date?",
      options: [
        "15 August 1969",
        "20 July 1969",
        "4 July 1969",
        "12 April 1961",
      ],
      correct: 1,
      explain:
        "Neil Armstrong stepped onto the Moon's surface on 20 July 1969.",
    },
    {
      q: "Considering the table of orbital and rotational data, which of the following pairs is correctly matched (planet — approximate number of moons)?",
      options: [
        "Earth — 2 moons",
        "Mars — 1 moon",
        "Jupiter — about 53 moons",
        "Neptune — about 27 moons",
      ],
      correct: 2,
      explain:
        "Jupiter has about 53 moons. Earth has 1 moon (not 2), Mars has 2 moons (not 1), and Neptune has 13 moons (not 27 — that figure belongs to Uranus).",
    },
    {
      q: "Which of the following planets takes LONGER to spin once on its axis than Mercury takes to complete an entire orbit around the Sun?",
      options: [
        "Earth",
        "Mars",
        "Venus",
        "None — no planet's spin period exceeds Mercury's orbital period",
      ],
      correct: 2,
      explain:
        "Venus takes about 243 days to spin once on its axis — longer than Mercury's ~88-day orbital period around the Sun, an unusual and frequently tested fact about Venus's extremely slow rotation.",
    },
    {
      q: [
        "Consider the following statements about the Sun:",
        "I. It is the centre of the Solar System.",
        "II. It provides the gravitational (pulling) force that binds the Solar System.",
        "III. It is made up of extremely hot gases.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I and II only", "II and III only", "I, II and III", "I only"],
      correct: 2,
      explain:
        "All three are correct — the Sun is the centre of the Solar System, made of hot gases, and its gravitational pull holds the system together.",
    },
    {
      q: "Approximately how far is Venus from the Sun?",
      options: [
        "58 million km",
        "108 million km",
        "150 million km",
        "228 million km",
      ],
      correct: 1,
      explain:
        "Venus lies about 108 million km from the Sun, between Mercury (58) and Earth (150).",
    },
    {
      q: [
        "Consider the following pairs (planet — approximate distance from the Sun in million km):",
        "I. Mercury — 58",
        "II. Saturn — 1,427",
        "III. Uranus — 2,869",
        "How many of the above pairs are correctly matched?",
      ],
      options: ["Only one", "Only two", "All three", "None"],
      correct: 2,
      explain:
        "All three pairs are correctly matched: Mercury 58, Saturn 1,427, and Uranus 2,869 million km.",
    },
    {
      q: "Which is the farthest planet from the Sun?",
      options: ["Uranus", "Saturn", "Neptune", "Jupiter"],
      correct: 2,
      explain:
        "Neptune, at about 4,496 million km, is the farthest planet from the Sun.",
    },
    {
      q: "Which is the largest planet in the Solar System?",
      options: ["Saturn", "Jupiter", "Earth", "Neptune"],
      correct: 1,
      explain:
        "Jupiter is the largest planet; it also lies about 778 million km from the Sun.",
    },
    {
      q: [
        "Assertion (A): A meteoroid that is not fully burnt up may create a hollow or crater on the Earth's surface.",
        "Reason (R): Friction with the air heats and burns meteoroids as they approach the Earth.",
        "Which one of the following is correct?",
      ],
      options: [
        "Both A and R are true, and R is the correct explanation of A",
        "Both A and R are true, but R is NOT the correct explanation of A",
        "A is true, but R is false",
        "A is false, but R is true",
      ],
      correct: 1,
      explain:
        "Both are true, but R is not a full explanation of A — a crater forms precisely because the meteoroid was NOT fully burnt and struck the ground, while the burning in R is what usually destroys them before impact.",
    },
    {
      q: "The Universe is best described as:",
      options: [
        "A single galaxy containing our Solar System",
        "Millions of galaxies together",
        "The Sun and its eight planets",
        "The band of the Milky Way alone",
      ],
      correct: 1,
      explain:
        "Millions of galaxies together make up the Universe; a galaxy itself is a huge system of billions of stars with dust and gases.",
    },
    {
      q: "Which pair is correctly matched (planet — approximate number of moons)?",
      options: [
        "Uranus — about 27 moons",
        "Mars — 1 moon",
        "Venus — 2 moons",
        "Earth — 3 moons",
      ],
      correct: 0,
      explain:
        "Uranus has about 27 moons. Mars has 2, Venus has 0, and Earth has 1.",
    },
    {
      q: "The Saptarishi is described as a group of how many stars?",
      options: ["Five", "Six", "Seven", "Nine"],
      correct: 2,
      explain:
        "Saptarishi means 'seven sages' — a group of seven stars forming part of the Ursa Major constellation.",
    },
    {
      q: [
        "Consider the following statements about the Moon:",
        "I. Its surface has no conditions favourable for life.",
        "II. It has mountains, plains and depressions.",
        "Which of the statements given above is/are correct?",
      ],
      options: ["I only", "II only", "Both I and II", "Neither I nor II"],
      correct: 2,
      explain:
        "Both are correct — the Moon has no life-supporting conditions, and its surface has mountains, plains and depressions that cast shadows visible from Earth.",
    },
  ],
};
