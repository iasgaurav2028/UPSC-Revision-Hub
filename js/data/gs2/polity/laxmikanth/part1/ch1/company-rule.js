// ═══════════════════════════════════════════════════════════
// GS2 › Polity › Laxmikanth › Part I › Chapter 1 › Company Rule
// 8 acts: Regulating Act 1773 through Charter Act 1853
// ═══════════════════════════════════════════════════════════
const DATA_ch1_company = {
  id: "ch1-company",
  title: "Company Rule",
  subtitle: "1773 – 1858",
  icon: "🏛",
  children: [
    {
      id: "ch1-regulating1773",
      title: "Regulating Act of 1773",
      icon: "⚖",
      isLeaf: true,
      pageRef: "Pages 5–7",
      notes: {
        era: "Company Rule (1773–1858)",
        significance: [
          "First step by British Government to control & regulate the East India Company",
          "First recognition of the Company's political & administrative functions",
          "Laid the foundations of Central Administration in India",
        ],
        features: [
          {
            key: "Governor-General",
            main: 'Bengal\'s Governor → "Governor-General of Bengal"\nAssisted by 4-member Executive Council',
            note: "First G-G of Bengal: Lord Warren Hastings",
          },
          {
            key: "Subordination",
            main: "Bombay & Madras made subordinate to Bengal",
            note: "(Before 1773 — all 3 presidencies were independent)",
          },
          {
            key: "Supreme Court",
            main: "Established at Calcutta in 1774",
            note: "Act passed in 1773  ·  1 Chief Justice + 3 Judges",
          },
          {
            key: "Prohibition",
            main: "Company servants banned from private trade, presents or bribes from natives",
            note: "",
          },
          {
            key: "Parliamentary Control",
            main: "Court of Directors must report revenue, civil & military affairs to British Govt",
            note: "",
          },
        ],
        traps: [
          {
            label: "Title Trap",
            lines: [
              "Warren Hastings = G-G of Bengal  ✗  NOT India",
              "1st G-G of India → Lord William Bentinck (1833)",
              "1st Viceroy of India → Lord Canning (1858)",
            ],
          },
          {
            label: "Year Trap",
            lines: ["Act passed = 1773", "Supreme Court established = 1774"],
          },
          {
            label: "Relations Trap",
            lines: [
              "Before 1773 → all 3 presidencies equal",
              "After 1773 → Bengal is superior",
            ],
          },
        ],
        mainsAngle:
          "The Regulating Act of 1773 marked the beginning of Parliamentary oversight over EIC — transitioning it from a trading body to a political-administrative authority.",
        mainsTheme: "EIC's transition:  Trade → Governance",
        recall: [
          "Act → 1773",
          "Sup. Court → 1774",
          "Warren Hastings = Bengal",
          "Bentinck = India (1833)",
          "Canning = Viceroy (1858)",
          "Council = 4 Members",
          "Bengal > Bombay > Madras",
          "No Private Trade",
          "CJ + 3 Judges",
        ],
      },
    },
    {
      id: "ch1-amending1781",
      title: "Amending Act of 1781",
      icon: "⚖",
      isLeaf: true,
      pageRef: "Act of Settlement",
      notes: {
        era: "Company Rule (1773–1858)",
        significance: [
          "Passed to rectify the defects of the Regulating Act of 1773",
          "Also known as the Act of Settlement",
        ],
        features: [
          {
            key: "SC Jurisdiction (Exec)",
            main: "Governor-General & Council exempted from Supreme Court's jurisdiction for official acts",
            note: "Company servants also exempted for official actions",
          },
          {
            key: "Revenue Matters",
            main: "Excluded revenue matters & revenue-collection disputes from Supreme Court's jurisdiction",
            note: "",
          },
          {
            key: "Personal Law",
            main: "SC had jurisdiction over all inhabitants of Calcutta\nHindus tried by Hindu law, Muslims by Mohammedan law",
            note: "",
          },
          {
            key: "Appeals",
            main: "Appeals from Provincial Courts → Governor-General-in-Council (NOT Supreme Court)",
            note: "",
          },
          {
            key: "Regulations",
            main: "Governor-General-in-Council empowered to frame regulations for Provincial Courts & Councils",
            note: "",
          },
        ],
        traps: [
          {
            label: "Naming Trap",
            lines: [
              "Amending Act of 1781 = Act of Settlement",
              "Don't confuse with Regulating Act 1773",
            ],
          },
          {
            label: "Jurisdiction Trap",
            lines: [
              "Appeals from Provincial Courts → Gov-Gen-in-Council",
              "NOT to the Supreme Court",
            ],
          },
          {
            label: "Personal Law Trap",
            lines: [
              "Hindus → Hindu law",
              "Muslims → Mohammedan law",
              "(Applied within Calcutta jurisdiction)",
            ],
          },
        ],
        mainsAngle:
          "The Act of 1781 reveals an early and recurring tension in colonial constitutional design — between judicial oversight and executive convenience — resolved here in favour of executive immunity.",
        mainsTheme:
          "Judiciary vs Executive: early tension resolved in executive's favour",
        recall: [
          "Also called Act of Settlement",
          "G-G + Council exempt from SC (official acts)",
          "Revenue matters excluded from SC",
          "SC jurisdiction → Calcutta inhabitants",
          "Hindu law / Mohammedan law applied",
          "Appeals → Gov-Gen-in-Council",
        ],
      },
    },
    {
      id: "ch1-pitts1784",
      title: "Pitt's India Act of 1784",
      icon: "⚖",
      isLeaf: true,
      pageRef: "By PM William Pitt",
      notes: {
        era: "Company Rule (1773–1858)",
        significance: [
          "Introduced by PM William Pitt in British Parliament",
          "Company's territories first called 'British possessions in India'",
          "British Govt given supreme control over Company's affairs & administration",
        ],
        features: [
          {
            key: "Commercial vs Political",
            main: "Distinguished between the commercial and political functions of the Company",
            note: "",
          },
          {
            key: "Board of Control",
            main: "Court of Directors → manage commercial affairs\nNew Board of Control → manage political affairs",
            note: "Established a system of DOUBLE GOVERNMENT",
          },
          {
            key: "Supervisory Power",
            main: "Board of Control empowered to supervise & direct all civil, military & revenue operations of British possessions in India",
            note: "",
          },
        ],
        traps: [
          {
            label: "Double Government Trap",
            lines: [
              "Court of Directors → Commercial affairs",
              "Board of Control → Political affairs",
              "Together = 'Double Government' system",
            ],
          },
          {
            label: "Terminology Trap",
            lines: [
              "First Act to call Indian territories 'British possessions in India'",
            ],
          },
        ],
        mainsAngle:
          "Pitt's India Act of 1784 institutionalised dual control — commercial functions with the Company, political authority with the British state — foreshadowing the eventual full transfer of power to the Crown in 1858.",
        mainsTheme:
          "Origin of 'Double Government' — commercial vs political split",
        recall: [
          "By PM William Pitt",
          "Court of Directors = Commercial",
          "Board of Control = Political",
          "= 'Double Government'",
          "Territories = 'British possessions in India'",
        ],
      },
    },
    {
      id: "ch1-act1786",
      title: "Act of 1786",
      icon: "⚖",
      isLeaf: true,
      pageRef: "Lord Cornwallis's demands",
      notes: {
        era: "Company Rule (1773–1858)",
        significance: [
          "Enacted to satisfy Lord Cornwallis's conditions for accepting the post of Governor-General of Bengal",
        ],
        features: [
          {
            key: "Override Power",
            main: "Governor-General given power to override the decision of his Council in special cases",
            note: "",
          },
          {
            key: "Commander-in-Chief",
            main: "Governor-General could also simultaneously hold the post of Commander-in-Chief",
            note: "",
          },
        ],
        traps: [
          {
            label: "Person-Act Link",
            lines: [
              "Act of 1786 ↔ Lord Cornwallis's 2 demands",
              "① Override power  ② Commander-in-Chief role",
            ],
          },
        ],
        mainsAngle:
          "The Act of 1786 shows how individual administrators shaped constitutional design — Cornwallis's personal conditions became institutionalised executive powers.",
        mainsTheme:
          "Personalisation of institutional power in early colonial administration",
        recall: [
          "Lord Cornwallis → G-G of Bengal (1786)",
          "Demand 1: Override power over Council",
          "Demand 2: Also Commander-in-Chief",
        ],
      },
    },
    {
      id: "ch1-charter1793",
      title: "Charter Act of 1793",
      icon: "⚖",
      isLeaf: true,
      notes: {
        era: "Company Rule (1773–1858)",
        significance: [
          "Extended and generalised the powers granted personally to Cornwallis in 1786",
        ],
        features: [
          {
            key: "Override Power",
            main: "Extended override power to ALL future Governor-Generals & Governors of Presidencies",
            note: "",
          },
          {
            key: "G-G's Control",
            main: "Gave Governor-General more power & control over Bombay & Madras governments",
            note: "",
          },
          {
            key: "Trade Monopoly",
            main: "Extended Company's trade monopoly in India for another 20 years",
            note: "",
          },
          {
            key: "Commander-in-Chief",
            main: "C-in-C NOT to be a member of Governor-General's council unless specifically appointed",
            note: "",
          },
          {
            key: "Board of Control Salary",
            main: "Members of Board of Control & staff to be paid out of Indian revenues",
            note: "",
          },
        ],
        traps: [
          {
            label: "Generalisation Trap",
            lines: [
              "1786 Act = personal to Cornwallis",
              "1793 Act = extended to ALL future G-Generals",
            ],
          },
          {
            label: "Funding Trap",
            lines: [
              "Board of Control's salary paid from INDIAN revenue",
              "— not British treasury",
            ],
          },
        ],
        mainsAngle:
          "The Charter Act of 1793 converted an individual privilege into a systemic feature — reflecting the gradual institutionalisation of centralised executive authority under Company rule.",
        mainsTheme: "From personal privilege to systemic centralisation",
        recall: [
          "Override power → ALL future G-Gens",
          "Trade monopoly extended 20 yrs",
          "C-in-C not council member (unless appointed)",
          "Board of Control paid from Indian revenue",
        ],
      },
    },
    {
      id: "ch1-charter1813",
      title: "Charter Act of 1813",
      icon: "⚖",
      isLeaf: true,
      notes: {
        era: "Company Rule (1773–1858)",
        significance: [
          "Asserted British Crown's sovereignty over Company's Indian territories for the first time",
          "Opened the door to Western education & Christian missionary activity",
        ],
        features: [
          {
            key: "Trade Monopoly",
            main: "Abolished Company's trade monopoly in India (open to all British merchants)",
            note: "EXCEPT: monopoly over tea trade & trade with China continued",
          },
          {
            key: "Crown Sovereignty",
            main: "Asserted sovereignty of the British Crown over Company's territories in India",
            note: "",
          },
          {
            key: "Missionaries",
            main: "Allowed Christian missionaries to come to India",
            note: "",
          },
          {
            key: "Education",
            main: "Provided for spread of Western education in British territories",
            note: "",
          },
          {
            key: "Local Taxation",
            main: "Authorised Local Governments to impose & collect taxes; punish non-payers",
            note: "",
          },
        ],
        traps: [
          {
            label: "Partial Monopoly Trap",
            lines: [
              "General trade monopoly = Abolished",
              "Tea trade & China trade monopoly = CONTINUED",
            ],
          },
          {
            label: "First-Time Trap",
            lines: [
              "1813 Act = FIRST to assert Crown sovereignty over Indian territories",
            ],
          },
        ],
        mainsAngle:
          "The Charter Act of 1813 marked the beginning of India's exposure to Western liberal ideas — through education and missionary access — laying early cultural groundwork for future socio-religious reform movements.",
        mainsTheme:
          "Cultural opening: Western education + missionary access begins",
        recall: [
          "Trade monopoly ABOLISHED (except tea & China)",
          "Crown sovereignty asserted (1st time)",
          "Missionaries allowed",
          "Western education promoted",
          "Local govts could tax",
        ],
      },
    },
    {
      id: "ch1-charter1833",
      title: "Charter Act of 1833",
      icon: "⚖",
      isLeaf: true,
      pageRef: "Final step to centralisation",
      notes: {
        era: "Company Rule (1773–1858)",
        significance: [
          "Final step towards centralisation in British India",
          "First Act to vest Government of India with authority over ALL British territory in India",
        ],
        features: [
          {
            key: "Governor-General of India",
            main: "Governor-General of Bengal → Governor-General of India\nVested with all civil & military powers",
            note: "First G-G of India: Lord William Bentinck",
          },
          {
            key: "Legislative Power",
            main: "Bombay & Madras Governors lost legislative powers\nG-G of India got EXCLUSIVE legislative power for all of British India",
            note: "Pre-1833 laws = 'Regulations'; laws under this Act = 'Acts'",
          },
          {
            key: "End of Commercial Role",
            main: "Company ended as a commercial body → became a purely administrative body",
            note: "Territories held 'in trust for His Majesty, His heirs and successors'",
          },
          {
            key: "Open Competition (failed)",
            main: "Attempted open competition for civil service selection; Indians not to be debarred from office",
            note: "Provision NEGATED after opposition from Court of Directors",
          },
        ],
        traps: [
          {
            label: "Title Trap",
            lines: [
              "1st Governor-General of BENGAL → Warren Hastings (1773)",
              "1st Governor-General of INDIA → Lord William Bentinck (1833)",
            ],
          },
          {
            label: "Regulations vs Acts",
            lines: [
              "Laws before 1833 = 'Regulations'",
              "Laws under & after 1833 = 'Acts'",
            ],
          },
          {
            label: "Failed Provision Trap",
            lines: [
              "Open competition for civil services was PROPOSED",
              "But NEGATED — did not actually happen in 1833",
            ],
          },
        ],
        mainsAngle:
          "The Charter Act of 1833 completed the centralisation begun in 1773, converting the East India Company from a commercial-cum-political hybrid into a pure administrative trustee of the Crown — a decisive step toward unified governance.",
        mainsTheme:
          "Centralisation completed: Company → pure administrative trustee",
        recall: [
          "G-G of Bengal → G-G of INDIA",
          "First G-G of India = Lord William Bentinck",
          "Bombay/Madras lose legislative power",
          "Pre-1833 laws = Regulations; post = Acts",
          "Company = purely administrative now",
          "Open competition clause NEGATED",
        ],
      },
    },
    {
      id: "ch1-charter1853",
      title: "Charter Act of 1853",
      icon: "⚖",
      isLeaf: true,
      pageRef: "Last of the Charter Acts",
      notes: {
        era: "Company Rule (1773–1858)",
        significance: [
          "Last of the Charter Acts (series ran 1793–1853)",
          "Significant constitutional landmark",
          "No fixed period given for Company's rule — could be ended anytime Parliament wished",
        ],
        features: [
          {
            key: "Legislature Separation",
            main: "Separated legislative & executive functions of Governor-General's council for the FIRST time",
            note: "Added 6 new 'legislative councillors' → formed Indian (Central) Legislative Council, a mini-Parliament",
          },
          {
            key: "Open Competition (real)",
            main: "Introduced REAL open competition for civil service recruitment; opened to Indians",
            note: "Macaulay Committee appointed in 1854",
          },
          {
            key: "No Fixed Tenure",
            main: "Extended Company's rule but did NOT specify a fixed period (unlike earlier Charters)",
            note: "Signal that Parliament could end Company rule anytime",
          },
          {
            key: "Local Representation",
            main: "Introduced local representation in Central Legislative Council for the first time",
            note: "4 of 6 new members appointed by local govts of Madras, Bombay, Bengal, Agra",
          },
        ],
        traps: [
          {
            label: "1833 vs 1853 Trap",
            lines: [
              "1833: Legislative power CENTRALISED (only G-G of India)",
              "1853: Legislative FUNCTION separated from executive",
              "(Different concepts — don't mix up!)",
            ],
          },
          {
            label: "Real vs Failed Trap",
            lines: [
              "1833: Open competition PROPOSED but negated",
              "1853: Open competition ACTUALLY introduced",
            ],
          },
          {
            label: "No-Tenure Trap",
            lines: [
              "Earlier Charters gave a fixed period (usually 20 yrs)",
              "1853 Act gave NO fixed period",
            ],
          },
        ],
        mainsAngle:
          "The Charter Act of 1853 introduced the principle of legislative specialisation and merit-based recruitment — early institutional seeds of a professional, parliamentary-style legislature in India.",
        mainsTheme:
          "Seeds of specialised legislature + merit-based civil service",
        recall: [
          "Last Charter Act (series: 1793–1853)",
          "Legislative & executive functions SEPARATED",
          "Indian (Central) Legislative Council formed",
          "Open competition for civil services (real)",
          "Macaulay Committee — 1854",
          "No fixed tenure for Company rule",
          "Local representation begins (4/6 members)",
        ],
      },
    },
  ],
};
