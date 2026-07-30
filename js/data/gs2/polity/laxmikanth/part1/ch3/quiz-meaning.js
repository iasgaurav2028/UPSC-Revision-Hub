const QUIZ_meaning = {
  title: "Meaning of Constitution",
  questions: [
    {
      q: "The word 'constitution' is derived from the Latin word 'constituere', which means:",
      options: [
        "To govern and administer",
        "To establish or to set up",
        "To protect and safeguard",
        "To divide and separate",
      ],
      correct: 1,
      explain:
        "'Constituere' means 'to establish' or 'to set up' — the Latin etymological root of the modern term 'constitution'.",
    },
    {
      q: [
        "In its present sense, the term 'constitution' refers to a set of principles which specify:",
        "I. The organisation and working of the government",
        "II. The relationship between the government and the people",
        "III. The rights and duties of citizens",
        "IV. The economic planning targets of the state",
        "Select the correct answer using the code given below:",
      ],
      options: [
        "I, II and III only",
        "I and II only",
        "I, II, III and IV",
        "II and III only",
      ],
      correct: 0,
      explain:
        "The present meaning of constitution covers: (I) organisation and working of the government, (II) relationship between government and people, and (III) rights and duties of citizens. Economic planning targets are NOT part of the definitional core.",
    },
    {
      q: "Which of the following is NOT one of the descriptions used for a constitution in the chapter?",
      options: [
        "'Fundamental law of the land'",
        "'Social contract of the nation'",
        "'Grundnorm of the country'",
        "'Supreme law of the state'",
      ],
      correct: 1,
      explain:
        "'Social contract of the nation' is Rousseau's political philosophy concept — it is NOT among the descriptions listed. The listed descriptions are: fundamental law of the land, supreme law of the state, basic law of the country, instrument of the government, rules of the state, basic structure of the polity, grundnorm of the country.",
    },
    {
      q: "The concept of 'Grundnorm' was given by:",
      options: ["A.V. Dicey", "Hans Kelsen", "K.C. Wheare", "Lord James Bryce"],
      correct: 1,
      explain:
        "Grundnorm is Hans Kelsen's concept from his 'Pure Theory of Law' (Reine Rechtslehre). It refers to the basic foundational legal norm from which all other legal norms in a legal system derive their validity.",
    },
    {
      q: "The constitution is described as the 'grundnorm of the country' because:",
      options: [
        "It is the oldest legal document of the country",
        "All other laws derive their validity from it — it is the foundational norm of the entire legal system",
        "It is written on the ground floor of the Parliament building",
        "It contains the norms of good governance that the ground-level administration must follow",
      ],
      correct: 1,
      explain:
        "Grundnorm (Kelsen's concept) = the basic foundational legal norm from which all other norms derive their validity. In India, Article 13 operationalises this — any law inconsistent with the Constitution is void.",
    },
    {
      q: [
        "Consider the following pairs (Scholar — Key phrase in their definition of constitution):",
        "I. Gilchrist — 'distribution of powers to the various organs of government'",
        "II. Gettell — 'document having a special legal sanctity'",
        "III. Wheare — 'collection of rules which establish and regulate the government'",
        "IV. Wade and Phillips — 'body of rules determining the organization of government'",
        "How many of the above pairs are correctly matched?",
      ],
      options: [
        "Only one pair",
        "Only two pairs",
        "Only three pairs",
        "All four pairs",
      ],
      correct: 1,
      explain:
        "Pairs I and III are correctly matched. Pair II is incorrect — 'special legal sanctity' belongs to WADE AND PHILLIPS (not Gettell). Pair IV is incorrect — 'body of rules determining organization of government' is GILCHRIST's definition.",
    },
    {
      q: "Wheare's definition of constitution is best characterised as:",
      options: [
        "The most detailed and comprehensive among the four definitions in the chapter",
        "The shortest and most concise — focusing on constitution as 'collection of rules which establish and regulate the government'",
        "The only definition that mentions rights and duties of citizens",
        "The only definition that uses the term 'special legal sanctity'",
      ],
      correct: 1,
      explain:
        "Wheare's definition is the shortest: 'The Constitution describes the whole system of government of a country, the collection of rules which establish and regulate or govern the government.' It is notable for its conciseness.",
    },
    {
      q: "Wade and Phillips' definition of constitution is distinctive because it specifically adds the idea that:",
      options: [
        "A constitution distributes sovereign powers among various organs",
        "A constitution is a document having 'special legal sanctity'",
        "A constitution establishes the method by which the state is organised",
        "A constitution describes the relationship of the government to the people",
      ],
      correct: 1,
      explain:
        "Wade and Phillips specifically added that a constitution is a DOCUMENT with 'special legal sanctity' — giving it a higher legal status than ordinary laws. This distinguishes their definition from the others.",
    },
    {
      q: [
        "Assertion (A): The Indian Constitution can be described as the 'grundnorm' of India's legal system.",
        "Reason (R): Under Article 13 of the Indian Constitution, any law inconsistent with or in derogation of the Fundamental Rights is void to the extent of such inconsistency.",
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
        "Both are true and R correctly explains A — Kelsen's grundnorm concept means the foundational norm from which all other norms derive validity. Article 13 making all inconsistent laws void is precisely the mechanism by which the Constitution functions as India's grundnorm.",
    },
    {
      q: [
        "Read the following definition carefully:",
        "'The fundamental principles that determine the form of a state are called its constitution. These include the method of which the state is organised, the distribution of its sovereign powers among the various organs of government, the scope and manner of exercise of governmental functions, and the relation of the government to the people over whom its authority is exercised.'",
        "This definition was given by:",
      ],
      options: ["Wheare", "Gilchrist", "Gettell", "Wade and Phillips"],
      correct: 2,
      explain:
        "This is Gettell's definition — identifiable by: 'fundamental principles that determine the form of a state', 'sovereign powers', and 'the relation of the government to the people over whom its authority is exercised'.",
    },
    {
      q: [
        "Read the following definition carefully:",
        "'The constitution consists of that body of rules or laws which determine the organization of government, the distribution of powers to the various organs of government, and the general principles on which these powers are to be exercised.'",
        "This definition was given by:",
      ],
      options: ["Gilchrist", "Gettell", "Wheare", "Wade and Phillips"],
      correct: 0,
      explain:
        "This is Gilchrist's definition — identifiable by: 'body of rules or laws', 'distribution of powers to the various organs', and 'general principles on which these powers are to be exercised'.",
    },
    {
      q: "Which scholar's definition of constitution is the ONLY one among the four that explicitly mentions the word 'document' and the concept of 'special legal sanctity'?",
      options: ["Gilchrist", "Gettell", "Wheare", "Wade and Phillips"],
      correct: 3,
      explain:
        "Only Wade and Phillips explicitly defined constitution as 'a document having a special legal sanctity' — adding the idea of a formal document with higher legal status than ordinary laws.",
    },
    {
      q: [
        "Consider the following statements about Gettell's definition of constitution:",
        "I. It uses the phrase 'sovereign powers' (unlike Gilchrist who simply says 'powers').",
        "II. It includes 'the relation of the government to the people' — an element absent in Gilchrist's definition.",
        "III. It specifically mentions 'special legal sanctity' as a feature of the constitution.",
        "Which of the statements given above is/are correct?",
      ],
      options: [
        "I and II only",
        "II and III only",
        "I, II and III",
        "III only",
      ],
      correct: 0,
      explain:
        "Statements I and II are correct. Statement III is incorrect — 'special legal sanctity' is from WADE AND PHILLIPS' definition, not Gettell's.",
    },
    {
      q: [
        "The term 'constitution' in its modern usage covers which of the following relationships?",
        "1. Relationship between the government and its citizens",
        "2. Relationship between the legislature and the executive",
        "3. Relationship between citizens and private corporations",
        "4. Relationship between the national government and regional governments",
        "Select the correct answer using the code below:",
      ],
      options: [
        "1 and 2 only",
        "1, 2 and 4 only",
        "1, 2, 3 and 4",
        "2, 3 and 4 only",
      ],
      correct: 1,
      explain:
        "Constitution covers: government-citizen relationship (1), inter-organ relationships like legislature-executive (2), and national-regional government relations (4 — federalism). It does NOT regulate relationships between citizens and private corporations — that is civil/corporate law's domain.",
    },
    {
      q: "Which of the following descriptions of a constitution is attributed to its role as the fundamental framework within which all government power must operate?",
      options: [
        "'Rules of the state'",
        "'Instrument of the government'",
        "'Social contract of the nation'",
        "'Charter of rights'",
      ],
      correct: 1,
      explain:
        "'Instrument of the government' captures the constitution's role as the fundamental framework and tool through which government operates — all government powers and actions must be exercised through and within the instrument of the constitution.",
    },
    {
      q: "According to the definitions studied, which element is COMMON to ALL FOUR scholars' definitions of constitution (Gilchrist, Gettell, Wheare, Wade and Phillips)?",
      options: [
        "The constitution is a document with special legal sanctity",
        "The constitution involves some form of rules or principles governing the organisation/working of government",
        "The constitution must specify sovereign powers of the state",
        "The constitution must be in written form",
      ],
      correct: 1,
      explain:
        "All four definitions — despite different emphases — share the common element that a constitution involves rules/principles/framework governing the organisation and working of government. The 'document with special sanctity' is only Wade & Phillips; 'sovereign powers' is only Gettell; 'written form' is not required by any of them.",
    },
    {
      q: "The phrase 'basic structure of the polity' as a description of the constitution is most directly reflected in India's constitutional jurisprudence through:",
      options: [
        "The Right to Constitutional Remedies under Article 32",
        "The Basic Structure Doctrine established in Kesavananda Bharati v. State of Kerala (1973)",
        "The Preamble as the 'basic structure' of the Constitution",
        "The Seventh Schedule's three legislative lists",
      ],
      correct: 1,
      explain:
        "The 'basic structure of the polity' description maps most directly to the Basic Structure Doctrine (1973) — which holds that the Constitution has an underlying basic structure that cannot be destroyed even by constitutional amendment. The Constitution IS the basic structure of India's polity.",
    },
    {
      q: [
        "Assertion (A): Not all written documents claiming to be constitutions fulfil the requirements of Wade and Phillips' definition.",
        "Reason (R): Wade and Phillips require a constitution to have 'special legal sanctity' — a higher legal status than ordinary legislation — which some constitutional documents may lack in practice.",
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
        "Both are true and R correctly explains A — Wade and Phillips' 'special legal sanctity' requirement means the constitutional document must have supreme legal status. If a 'constitution' can be overridden by ordinary legislation, it lacks this special sanctity and would not qualify under their definition.",
    },
    {
      q: "How many distinct descriptions of a constitution are listed in the chapter (in the form of 'it is variously described as...')?",
      options: ["5", "6", "7", "8"],
      correct: 2,
      explain:
        "The chapter lists exactly 7 descriptions: (1) fundamental law of the land, (2) supreme law of the state, (3) basic law of the country, (4) instrument of the government, (5) rules of the state, (6) basic structure of the polity, (7) grundnorm of the country.",
    },
    {
      q: [
        "Consider the following statements:",
        "I. The constitution is called 'fundamental law of the land' because it is older than all other laws.",
        "II. The constitution is called 'supreme law of the state' because all other laws must conform to it.",
        "III. The constitution is called 'grundnorm' because it is the foundational norm from which all other legal norms derive their validity.",
        "Which of the statements given above is/are correct?",
      ],
      options: [
        "II and III only",
        "I and II only",
        "I, II and III",
        "III only",
      ],
      correct: 0,
      explain:
        "Statements II and III are correct. Statement I is incorrect — the constitution is called 'fundamental law' because it is the FOUNDATIONAL/SUPREME law, not merely because it is oldest. Many constitutional amendments and ordinary laws are older than some constitutional provisions in other countries.",
    },
  ],
};
