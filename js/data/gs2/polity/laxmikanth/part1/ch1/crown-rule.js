// ═══════════════════════════════════════════════════════════
// GS2 › Polity › Laxmikanth › Part I › Chapter 1 › Crown Rule
// 9 acts/events: GoI Act 1858 through Indian Independence Act 1947
// ═══════════════════════════════════════════════════════════
const DATA_ch1_crown = {
  id: "ch1-crown",
  title: "Crown Rule",
  subtitle: "1858 – 1947",
  icon: "👑",
  children: [
    {
      id: "ch1-govact1858",
      title: "Government of India Act, 1858",
      icon: "⚖",
      isLeaf: true,
      pageRef: "Post Revolt of 1857",
      notes: {
        era: "Crown Rule (1858–1947)",
        significance: [
          "Enacted in the wake of the Revolt of 1857 (First War of Independence / Sepoy Mutiny)",
          "Also known as the Act for the Good Government of India",
          "Abolished the East India Company; transferred power, territories & revenues to the British Crown",
        ],
        features: [
          {
            key: "Viceroy",
            main: "Governor-General of India → renamed Viceroy of India\nDirect representative of the British Crown",
            note: "First Viceroy of India: Lord Canning",
          },
          {
            key: "End of Double Govt",
            main: "Ended the system of double government by abolishing the Board of Control & Court of Directors",
            note: "",
          },
          {
            key: "Secretary of State",
            main: "Created new office: Secretary of State for India\nComplete authority & control over Indian administration",
            note: "Member of British Cabinet, responsible to British Parliament",
          },
          {
            key: "Council of India",
            main: "Established 15-member Council of India to assist the Secretary of State",
            note: "Advisory body; Secretary of State was its Chairman",
          },
          {
            key: "Body Corporate",
            main: "Secretary of State-in-Council made a body corporate — could sue & be sued in India & England",
            note: "",
          },
        ],
        traps: [
          {
            label: "Title Trap",
            lines: [
              "Governor-General of India (1833 title) → Viceroy of India (1858 title)",
              "First Viceroy = Lord Canning",
              "(He was already G-G; became FIRST Viceroy)",
            ],
          },
          {
            label: "Scope Trap",
            lines: [
              "1858 Act mainly improved administrative machinery IN ENGLAND",
              "Did NOT substantially change government system IN INDIA",
            ],
          },
          {
            label: "Double Govt Trap",
            lines: [
              "1784 Act CREATED double govt (Court of Directors + Board of Control)",
              "1858 Act ENDED double govt",
            ],
          },
        ],
        mainsAngle:
          "The Act of 1858 shifted sovereignty from a commercial corporation to the Crown itself, but its impact was confined to restructuring control in England — genuine constitutional change in India came only with later Acts.",
        mainsTheme:
          "Sovereignty shift: Company → Crown (but India's governance largely unchanged)",
        recall: [
          "Post Revolt of 1857",
          "EIC abolished",
          "G-G of India → VICEROY of India",
          "1st Viceroy = Lord Canning",
          "Board of Control + Court of Directors → abolished",
          "New office: Secretary of State for India",
          "15-member Council of India (advisory)",
        ],
      },
    },
    {
      id: "ch1-ica1861",
      title: "Indian Councils Act, 1861",
      icon: "⚖",
      isLeaf: true,
      notes: {
        era: "Crown Rule (1858–1947)",
        significance: [
          "Important landmark — began seeking Indian cooperation in administration",
          "First of 3 Councils Acts (1861, 1892, 1909)",
        ],
        features: [
          {
            key: "Representative Beginning",
            main: "Viceroy to nominate some Indians as NON-OFFICIAL members of expanded council",
            note: "1862: Lord Canning nominated Raja of Benaras, Maharaja of Patiala, Sir Dinkar Rao",
          },
          {
            key: "Decentralisation",
            main: "Restored legislative powers to Bombay & Madras Presidencies",
            note: "Reversed centralising trend from 1773 → climax at 1833; led to provincial autonomy in 1937",
          },
          {
            key: "New Councils",
            main: "Provided for new legislative councils for Bengal (1862), NW Provinces (1886), Punjab (1897)",
            note: "",
          },
          {
            key: "Portfolio System",
            main: "Recognised the 'portfolio system' (introduced by Canning in 1859)",
            note: "One council member in-charge of one/more departments, issues final orders",
          },
          {
            key: "Emergency Ordinances",
            main: "Viceroy empowered to issue ordinances without council's concurrence during emergency",
            note: "Life of such ordinance = 6 months",
          },
        ],
        traps: [
          {
            label: "Direction Trap",
            lines: [
              "1773→1833 = CENTRALISING trend",
              "1861 Act = DECENTRALISING (reversed the trend)",
            ],
          },
          {
            label: "Nomination ≠ Election",
            lines: [
              "Indians were NOMINATED, not elected",
              "'Non-official' members ≠ elected members",
            ],
          },
          {
            label: "Portfolio System Origin",
            lines: [
              "Introduced by Canning in 1859",
              "Given legal recognition by Act of 1861",
            ],
          },
        ],
        mainsAngle:
          "The Indian Councils Act of 1861 marked a strategic pivot from pure centralisation to controlled association of Indians and provincial devolution, reflecting the Crown's post-1857 approach of co-option over exclusion.",
        mainsTheme:
          "Post-1857 pivot: centralisation → controlled association & devolution",
        recall: [
          "Indians NOMINATED (non-official) to council",
          "1862: Canning nominates Benaras, Patiala, Dinkar Rao",
          "Bombay & Madras legislative powers RESTORED",
          "Portfolio system (Canning, 1859) → recognised",
          "Viceroy: emergency ordinance power (6-month life)",
        ],
      },
    },
    {
      id: "ch1-ica1892",
      title: "Indian Councils Act, 1892",
      icon: "⚖",
      isLeaf: true,
      notes: {
        era: "Crown Rule (1858–1947)",
        significance: [
          "Expanded legislative council functions while retaining official control",
          "Introduced indirect, limited election mechanism (without using the word 'election')",
        ],
        features: [
          {
            key: "More Members",
            main: "Increased non-official members in Central & Provincial legislative councils",
            note: "Official majority still MAINTAINED",
          },
          {
            key: "Budget & Questions",
            main: "Gave councils power to discuss the budget & address questions to the executive",
            note: "Budget system introduced in British India in 1860",
          },
          {
            key: "Nomination Process",
            main: "Central Council members nominated by Viceroy on recommendation of provincial councils & Bengal Chamber of Commerce",
            note: "Provincial council members nominated by Governors on recommendation of district boards, municipalities, universities, trade bodies, zamindars",
          },
        ],
        traps: [
          {
            label: "No 'Election' Word Trap",
            lines: [
              "Act made LIMITED, INDIRECT provision for election",
              "But the word 'election' was NEVER used in the Act",
              "Called 'nomination on recommendation of bodies'",
            ],
          },
          {
            label: "Majority Trap",
            lines: [
              "Non-official members increased",
              "But OFFICIAL MAJORITY still maintained",
            ],
          },
          {
            label: "Budget Year Trap",
            lines: [
              "Budget system started in 1860",
              "Council's power to DISCUSS budget → given in 1892",
            ],
          },
        ],
        mainsAngle:
          "The 1892 Act's disguised use of quasi-electoral mechanisms — expanding representation without naming it 'election' — reflects the colonial state's cautious, incremental approach to political participation.",
        mainsTheme:
          "Cautious incrementalism: representation expanded but 'election' avoided",
        recall: [
          "Non-official members increased",
          "Official majority STILL maintained",
          "Budget discussion power given",
          "'Election' word NEVER used — indirect nomination only",
          "Budget system started 1860",
        ],
      },
    },
    {
      id: "ch1-ica1909",
      title: "Indian Councils Act, 1909",
      icon: "⚖",
      subtitle: "Morley-Minto Reforms",
      isLeaf: true,
      notes: {
        era: "Crown Rule (1858–1947)",
        significance: [
          "Known as Morley-Minto Reforms",
          "Morley = Secretary of State for India; Minto = Viceroy of India",
          "First to legalise communal representation via separate electorates",
        ],
        features: [
          {
            key: "Council Size",
            main: "Central legislative council members raised from 16 to 60",
            note: "Provincial council numbers not uniform",
          },
          {
            key: "Majority Rule",
            main: "Central council: official majority RETAINED\nProvincial councils: allowed NON-official majority",
            note: "",
          },
          {
            key: "Deliberative Functions",
            main: "Enlarged functions — members could ask supplementary questions, move budget resolutions",
            note: "",
          },
          {
            key: "Indians in Executive Council",
            main: "First-time association of Indians with Viceroy's & Governors' Executive Councils",
            note: "Satyendra Prasad Sinha — first Indian in Viceroy's Executive Council (Law Member)",
          },
          {
            key: "Separate Electorate",
            main: "Introduced communal representation for Muslims — 'separate electorate' concept",
            note: "'Legalised communalism'; Lord Minto = 'Father of Communal Electorate'",
          },
          {
            key: "Other Representation",
            main: "Separate representation for presidency corporations, chambers of commerce, universities, zamindars",
            note: "",
          },
        ],
        traps: [
          {
            label: "Central vs Provincial Majority",
            lines: [
              "Central council → Official majority RETAINED",
              "Provincial councils → NON-official majority allowed",
              "(Opposite treatment — common trap!)",
            ],
          },
          {
            label: "First Indian Trap",
            lines: [
              "Satyendra Prasad Sinha = 1st Indian in Viceroy's Exec. Council",
              "He was appointed as LAW Member",
            ],
          },
          {
            label: "Communal Electorate Trap",
            lines: [
              "1909 Act = FIRST to introduce separate electorate (for Muslims)",
              "Lord Minto = 'Father of Communal Electorate'",
              "(Not Morley — Minto was the Viceroy)",
            ],
          },
        ],
        mainsAngle:
          "The Morley-Minto Reforms of 1909, while expanding Indian participation, institutionalised communalism through separate electorates — a decision whose long-term political consequences proved deeply significant for India's constitutional trajectory.",
        mainsTheme:
          "Expanded participation but institutionalised communalism (separate electorate)",
        recall: [
          "= Morley-Minto Reforms",
          "Morley = Sec. of State; Minto = Viceroy",
          "Central council: 16 → 60 members",
          "Central = official majority; Provincial = non-official majority",
          "S.P. Sinha = 1st Indian in Exec. Council (Law Member)",
          "Separate electorate for Muslims introduced",
          "Minto = 'Father of Communal Electorate'",
        ],
      },
    },
    {
      id: "ch1-govact1919",
      title: "Government of India Act, 1919",
      icon: "⚖",
      subtitle: "Montagu-Chelmsford Reforms",
      isLeaf: true,
      notes: {
        era: "Crown Rule (1858–1947)",
        significance: [
          "Known as Montagu-Chelmsford Reforms (Montford Reforms)",
          "Montagu = Secretary of State; Chelmsford = Viceroy",
          "Followed Aug 20, 1917 declaration — first official promise of 'responsible government' in India",
          "Came into force in 1921",
        ],
        features: [
          {
            key: "Central-Provincial Split",
            main: "Classified subjects into Central & Provincial subjects (via 'Devolution Rules')",
            note: "Relaxed central control; but structure remained centralised & unitary overall",
          },
          {
            key: "Dyarchy in Provinces",
            main: "Provincial subjects split into Transferred (Governor + Ministers) & Reserved (Governor + Exec. Council)",
            note: "'Dyarchy' = Greek 'di-arche' = double rule. Largely UNSUCCESSFUL",
          },
          {
            key: "Bicameralism",
            main: "Introduced bicameralism & direct elections FIRST TIME\nUpper House = Council of State; Lower House = Legislative Assembly",
            note: "Majority of both Houses directly elected",
          },
          {
            key: "Indians in Exec. Council",
            main: "3 of 6 members of Viceroy's Exec. Council (excl. C-in-C) had to be Indian",
            note: "",
          },
          {
            key: "Communal Representation",
            main: "Extended separate electorates to Sikhs, Indian Christians, Anglo-Indians, Europeans",
            note: "",
          },
          {
            key: "Franchise",
            main: "Limited franchise granted based on property/tax qualifications",
            note: "",
          },
          {
            key: "High Commissioner",
            main: "Created office of High Commissioner for India in London",
            note: "Took over some functions from Secretary of State",
          },
          {
            key: "Public Service Commission",
            main: "Provided for a Public Service Commission",
            note: "Central PSC set up 1926 (on Lee Commission recommendation, 1923-24)",
          },
          {
            key: "Separate Budgets",
            main: "Separated Provincial budgets from Central budget FIRST TIME",
            note: "",
          },
          {
            key: "Statutory Commission",
            main: "Provided for a statutory commission to review the Act after 10 years",
            note: "This became the Simon Commission (1927)",
          },
          {
            key: "Chamber of Princes",
            main: "Proposed Chamber of Princes (Narendra Mandal); inaugurated 1921",
            note: "120 members: 108 princes + 12 representatives; headed by Viceroy",
          },
        ],
        traps: [
          {
            label: "Dyarchy Location Trap",
            lines: [
              "1919 Act: Dyarchy introduced in PROVINCES",
              "1935 Act: Dyarchy proposed at CENTRE (never implemented)",
            ],
          },
          {
            label: "First-Time Trap",
            lines: [
              "1919 = FIRST bicameralism + direct elections",
              "1919 = FIRST separate provincial budgets",
            ],
          },
          {
            label: "PSC Year Trap",
            lines: [
              "1919 Act PROVIDED for PSC",
              "Central PSC actually SET UP in 1926",
              "Based on Lee Commission (1923-24)",
            ],
          },
          {
            label: "Reforms Naming Trap",
            lines: [
              "Montagu = Secretary of State (not Viceroy)",
              "Chelmsford = Viceroy (not Secretary of State)",
            ],
          },
        ],
        mainsAngle:
          "The Government of India Act, 1919 introduced dyarchy as India's first real experiment in responsible government, but its failure demonstrated that partial devolution without genuine accountability could not satisfy nationalist aspirations.",
        mainsTheme:
          "Dyarchy: first experiment in responsible govt — largely unsuccessful",
        recall: [
          "= Montagu-Chelmsford (Montford) Reforms",
          "Montagu = Sec. of State; Chelmsford = Viceroy",
          "In force from 1921",
          "Dyarchy in PROVINCES (Transferred + Reserved)",
          "1st bicameralism + direct elections",
          "3/6 Exec. Council members = Indian",
          "Central PSC set up 1926 (Lee Commission)",
          "1st separate provincial budgets",
          "Statutory Commission clause → led to Simon Commission",
          "Chamber of Princes (Narendra Mandal) — 1921",
        ],
      },
    },
    {
      id: "ch1-simon",
      title: "Simon Commission (1927)",
      icon: "📋",
      isLeaf: true,
      notes: {
        era: "Crown Rule (1858–1947)",
        significance: [
          "Announced Nov 1927 — 2 years BEFORE its scheduled time",
          "All 7 members were British → boycotted by all Indian parties",
          "Report submitted in 1930",
        ],
        features: [
          {
            key: "Chairman",
            main: "Sir John Simon chaired the 7-member statutory commission",
            note: "",
          },
          {
            key: "Recommendations",
            main: "Abolition of dyarchy; extension of responsible govt in provinces; federation of British India + princely states; continuation of communal electorate",
            note: "",
          },
          {
            key: "Follow-up Process",
            main: "3 Round Table Conferences held → 'White Paper on Constitutional Reforms' prepared",
            note: "Sent to Joint Select Committee of British Parliament",
          },
          {
            key: "Outcome",
            main: "Committee's recommendations incorporated (with changes) into Government of India Act, 1935",
            note: "",
          },
        ],
        traps: [
          {
            label: "All-British Trap",
            lines: [
              "ALL 7 members of Simon Commission were British",
              "→ hence boycotted by ALL Indian parties",
            ],
          },
          {
            label: "Timing Trap",
            lines: [
              "Announced Nov 1927 — 2 YEARS EARLY (not on schedule)",
              "Report submitted in 1930",
            ],
          },
        ],
        mainsAngle:
          "The all-European composition of the Simon Commission, provoking universal Indian boycott, underscored the widening gap between colonial constitutional processes and genuine Indian political representation in the interwar period.",
        mainsTheme:
          "Exclusion of Indians triggers universal boycott — legitimacy crisis",
        recall: [
          "Chairman: Sir John Simon",
          "ALL 7 members British → boycotted",
          "Announced 1927 (2 yrs early)",
          "Report: 1930",
          "→ 3 Round Table Conferences",
          "→ White Paper → Joint Select Committee",
          "→ feeds into GoI Act 1935",
        ],
      },
    },
    {
      id: "ch1-communalaward",
      title: "Communal Award (1932)",
      icon: "📋",
      isLeaf: true,
      notes: {
        era: "Crown Rule (1858–1947)",
        significance: [
          "Announced Aug 1932 by British PM Ramsay MacDonald",
          "Extended separate electorate to depressed classes (Scheduled Castes)",
          "Led to the Poona Pact",
        ],
        features: [
          {
            key: "Continuation",
            main: "Continued separate electorates for Muslims, Sikhs, Indian Christians, Anglo-Indians, Europeans",
            note: "",
          },
          {
            key: "Extension",
            main: "Extended separate electorate to the Depressed Classes (Scheduled Castes)",
            note: "This is what distressed Gandhiji",
          },
          {
            key: "Gandhiji's Response",
            main: "Undertook fast unto death in Yerawada Jail (Poona) to get the award modified",
            note: "",
          },
          {
            key: "Poona Pact",
            main: "Agreement between Congress & Dr. B.R. Ambedkar (leader of depressed classes)",
            note: "Retained Hindu JOINT electorate; gave RESERVED seats to depressed classes",
          },
          {
            key: "Final Outcome",
            main: "British Govt accepted Poona Pact; dropped separate electorate for depressed classes",
            note: "Provisions incorporated into Government of India Act, 1935",
          },
        ],
        traps: [
          {
            label: "Separate vs Reserved Trap",
            lines: [
              "Communal Award = SEPARATE electorate for SCs",
              "Poona Pact = JOINT electorate + RESERVED seats for SCs",
              "(Poona Pact REPLACED separate electorate provision)",
            ],
          },
          {
            label: "Who vs Who Trap",
            lines: [
              "Poona Pact = Congress + Dr. B.R. Ambedkar",
              "NOT Gandhi + Ambedkar directly (Congress negotiated)",
            ],
          },
          {
            label: "PM Trap",
            lines: [
              "Communal Award announced by Ramsay MacDonald",
              "(British PM, NOT Viceroy)",
            ],
          },
        ],
        mainsAngle:
          "The Poona Pact represents a foundational compromise in India's social justice discourse — trading separate political identity for guaranteed representation within a joint electorate, a tension that persists in debates on reservation policy today.",
        mainsTheme:
          "Poona Pact: joint electorate + reserved seats — foundational SC representation compromise",
        recall: [
          "Announced by Ramsay MacDonald (Aug 1932)",
          "Extended separate electorate to Depressed Classes",
          "Gandhiji: fast unto death, Yerawada Jail",
          "Poona Pact = Congress + Ambedkar",
          "Result: JOINT electorate + RESERVED seats",
          "Incorporated into GoI Act 1935",
        ],
      },
    },
    {
      id: "ch1-govact1935",
      title: "Government of India Act, 1935",
      icon: "⚖",
      subtitle: "321 Sections, 10 Schedules",
      isLeaf: true,
      notes: {
        era: "Crown Rule (1858–1947)",
        significance: [
          "Second milestone towards completely responsible government",
          "Lengthy & detailed: 321 Sections, 10 Schedules",
          "Most provisions of the Indian Constitution derive from this Act",
        ],
        features: [
          {
            key: "All-India Federation",
            main: "Provided for All-India Federation of provinces + princely states",
            note: "Federal List (59), Provincial List (54), Concurrent List (36); Residuary → Viceroy. Federation NEVER came into being",
          },
          {
            key: "Provincial Autonomy",
            main: "Abolished dyarchy in provinces; introduced 'Provincial Autonomy'",
            note: "Governor to act on advice of responsible ministers. In effect 1937, discontinued 1939",
          },
          {
            key: "Dyarchy at Centre",
            main: "Provided for dyarchy at the Centre (federal subjects → reserved + transferred)",
            note: "This provision NEVER came into operation",
          },
          {
            key: "Bicameralism",
            main: "Introduced bicameralism in 6 of 11 provinces",
            note: "Bengal, Bombay, Madras, Bihar, Assam, United Provinces",
          },
          {
            key: "SC Representation",
            main: "Reserved seats for depressed classes (SCs); extended representation to women & labour",
            note: "",
          },
          {
            key: "Council of India Abolished",
            main: "Abolished the Council of India (est. by 1858 Act)",
            note: "Secretary of State given a team of advisors instead",
          },
          {
            key: "Franchise",
            main: "Extended franchise — about 14% of total population got voting rights",
            note: "",
          },
          {
            key: "RBI",
            main: "Provided for establishment of Reserve Bank of India",
            note: "",
          },
          {
            key: "Public Service Commissions",
            main: "Provided for Federal PSC, Provincial PSC, and Joint PSC (for 2+ provinces)",
            note: "",
          },
          {
            key: "Federal Court",
            main: "Provided for a Federal Court — set up in 1937",
            note: "",
          },
          {
            key: "Burma Separated",
            main: "Separated Burma (now Myanmar) from India",
            note: "",
          },
          {
            key: "New Provinces",
            main: "Created 2 new provinces: Orissa and Sind",
            note: "",
          },
          {
            key: "Minority Safeguards",
            main: "Provided safeguards to protect minority interests",
            note: "",
          },
          {
            key: "Railway Authority",
            main: "Provided for a Federal Railway Authority",
            note: "",
          },
          {
            key: "Auditor-General",
            main: "Provided for appointment of an Auditor-General of India",
            note: "",
          },
        ],
        traps: [
          {
            label: "Federation Never Happened",
            lines: [
              "All-India Federation was PROVIDED but NEVER materialised",
              "Princely states did not join",
            ],
          },
          {
            label: "Dyarchy Location Trap",
            lines: [
              "1919: Dyarchy in PROVINCES (implemented, failed)",
              "1935: Dyarchy at CENTRE (never implemented at all)",
              "1935: Provincial Autonomy REPLACED provincial dyarchy",
            ],
          },
          {
            label: "Provincial Autonomy Dates",
            lines: ["Came into effect: 1937", "Discontinued: 1939"],
          },
          {
            label: "List Numbers Trap",
            lines: [
              "Federal List = 59 items",
              "Provincial List = 54 items",
              "Concurrent List = 36 items",
              "Residuary power → Viceroy (NOT a list)",
            ],
          },
          {
            label: "Bicameral Provinces",
            lines: [
              "Only 6 of 11 provinces got bicameral legislature",
              "Bengal, Bombay, Madras, Bihar, Assam, United Provinces",
            ],
          },
        ],
        mainsAngle:
          "The Government of India Act, 1935 is the direct structural template for India's post-independence Constitution — its federal scheme, lists, provincial autonomy, and public service commissions were substantially retained by the Constituent Assembly.",
        mainsTheme:
          "Blueprint for Indian Constitution — federal scheme & institutions largely retained",
        recall: [
          "321 Sections, 10 Schedules",
          "All-India Federation — NEVER materialised",
          "Federal(59) / Provincial(54) / Concurrent(36) Lists",
          "Provincial Autonomy: 1937–1939",
          "Dyarchy shifted to Centre — never implemented",
          "Bicameral in 6/11 provinces",
          "RBI established",
          "Federal Court — 1937",
          "Burma separated; Orissa & Sind created",
          "Council of India (1858) — abolished",
        ],
      },
    },
    {
      id: "ch1-indep1947",
      title: "Indian Independence Act, 1947",
      icon: "🇮🇳",
      isLeaf: true,
      pageRef: "In force: Aug 15, 1947",
      notes: {
        era: "Crown Rule (1858–1947)",
        significance: [
          "Feb 20, 1947: PM Clement Attlee declared British rule would end by June 30, 1948",
          "June 3, 1947: Mountbatten Plan (Partition Plan) announced — accepted by Congress & Muslim League",
          "Bill introduced in British Parliament: July 4, 1947; Royal Assent: July 18, 1947",
          "Act came into force: August 15, 1947",
        ],
        features: [
          {
            key: "End of British Rule",
            main: "Ended British rule; declared India independent & sovereign from Aug 15, 1947",
            note: "",
          },
          {
            key: "Partition",
            main: "Provided for partition — creation of 2 independent dominions: India & Pakistan",
            note: "Each with right to secede from British Commonwealth",
          },
          {
            key: "Governor-General (new role)",
            main: "Abolished office of Viceroy; each dominion got a Governor-General",
            note: "Appointed by British King on advice of dominion cabinet",
          },
          {
            key: "Constituent Assemblies",
            main: "Empowered both dominions' Constituent Assemblies to frame & adopt any constitution",
            note: "Could even repeal any British Parliament Act, including this one",
          },
          {
            key: "Interim Legislation",
            main: "Assemblies empowered to legislate till new constitutions were drafted",
            note: "No post-Aug 15, 1947 British law would extend to India/Pakistan unless adopted by them",
          },
          {
            key: "Secretary of State Abolished",
            main: "Abolished office of Secretary of State for India",
            note: "Functions transferred to Secretary of State for Commonwealth Affairs",
          },
          {
            key: "Paramountcy Lapses",
            main: "British paramountcy over princely states & treaty relations with tribal areas lapsed from Aug 15, 1947",
            note: "",
          },
          {
            key: "Princely States' Choice",
            main: "Princely states free to join India, join Pakistan, or remain independent",
            note: "",
          },
          {
            key: "Interim Governance",
            main: "Each dominion & province governed by GoI Act 1935 till new constitutions framed",
            note: "Dominions authorised to modify the 1935 Act",
          },
          {
            key: "No Royal Veto",
            main: "British Monarch lost right to veto bills; this power reserved for Governor-General",
            note: "G-G had full power to assent to bills in the King's name",
          },
          {
            key: "Nominal Heads",
            main: "Governor-General of India & provincial Governors made constitutional (nominal) heads",
            note: "Acted on advice of respective Council of Ministers",
          },
          {
            key: "Title Dropped",
            main: "'Emperor of India' title dropped from British King's royal titles",
            note: "",
          },
          {
            key: "Civil Services",
            main: "Discontinued Secretary of State's power over civil service appointments/reservations",
            note: "Pre-Aug 15, 1947 civil servants retained all existing benefits",
          },
        ],
        traps: [
          {
            label: "Timeline Trap",
            lines: [
              "Attlee's declaration: Feb 20, 1947 (deadline: June 1948)",
              "Mountbatten Plan: June 3, 1947",
              "Bill introduced: July 4, 1947",
              "Royal Assent: July 18, 1947",
              "Act in force: August 15, 1947",
            ],
          },
          {
            label: "Viceroy vs Governor-General",
            lines: [
              "Office of VICEROY abolished by this Act",
              "New Governor-General (of each dominion) created instead",
              "Mountbatten = last Viceroy, 1st G-G of independent India",
            ],
          },
          {
            label: "Boundary Commission",
            lines: [
              "Boundary Commission headed by Radcliffe (not part of the Act itself)",
              "Pakistan: West Punjab, Sind, Baluchistan, East Bengal, NWFP, Sylhet (Assam)",
            ],
          },
          {
            label: "First PM vs First G-G",
            lines: [
              "Mountbatten = 1st Governor-General of independent India",
              "Nehru = 1st Prime Minister of independent India",
            ],
          },
        ],
        mainsAngle:
          "The Indian Independence Act, 1947 completed India's constitutional journey from colonial subordination to sovereign self-determination, notably empowering the Constituent Assembly to frame a constitution entirely free of British parliamentary constraint.",
        mainsTheme:
          "Final transfer of sovereignty; Constituent Assembly's unconstrained constitution-making power",
        recall: [
          "Attlee's declaration: Feb 20, 1947",
          "Mountbatten Plan: June 3, 1947",
          "Royal Assent: July 18, 1947",
          "In force: August 15, 1947",
          "India + Pakistan = 2 dominions",
          "Viceroy office ABOLISHED → Governor-General (each dominion)",
          "Mountbatten = 1st G-G of India",
          "Nehru = 1st PM of India",
          "Paramountcy over princely states LAPSED",
          "Princely states: join India / Pakistan / stay independent",
          "'Emperor of India' title dropped",
          "Radcliffe = Boundary Commission head",
        ],
      },
    },
  ],
};
