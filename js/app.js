
// ╔══════════════════════════════════════════════════════════╗
// ║  SYLLABUS TREE DATA                                       ║
// ║  Add new chapter content by inserting a new leaf object   ║
// ║  (see QUIZ_DATA below for the matching quiz format)       ║
// ╚══════════════════════════════════════════════════════════╝
const TREE_DATA = [
  {
    id: "syllabus",
    title: "UPSC Syllabus",
    subtitle: "Overview & Structure",
    icon: "📋",
    isLeaf: true,
    notes: null, // Reference-only node; renders a static info panel (handled specially)
  },
  {
    id: "gs1",
    title: "GS-1",
    subtitle: "History, Geography, Society, Culture",
    icon: "🏛",
    children: [
      {
        id: "gs1-history",
        title: "History",
        icon: "📜",
        children: [
          { id: "gs1-history-ancient", title: "Ancient History", icon: "🏺", children: [] },
          { id: "gs1-history-medieval", title: "Medieval History", icon: "🕌", children: [] },
          { id: "gs1-history-modern", title: "Modern History", icon: "🇮🇳", children: [] },
        ],
      },
      {
        id: "gs1-geography",
        title: "Geography",
        icon: "🌍",
        children: [
          {
            id: "gs1-geography-ncert",
            title: "NCERT",
            icon: "📗",
            children: [
              { id: "gs1-geo-class6", title: "Class 6", icon: "📘", children: [] },
              { id: "gs1-geo-class7", title: "Class 7", icon: "📘", children: [] },
              { id: "gs1-geo-class8", title: "Class 8", icon: "📘", children: [] },
              { id: "gs1-geo-class9", title: "Class 9", icon: "📘", children: [] },
              { id: "gs1-geo-class10", title: "Class 10", icon: "📘", children: [] },
              { id: "gs1-geo-class11", title: "Class 11", icon: "📘", subtitle: "Physical Geography — critical", children: [] },
              { id: "gs1-geo-class12", title: "Class 12", icon: "📘", children: [] },
            ],
          },
        ],
      },
      { id: "gs1-society", title: "Indian Society", icon: "👥", children: [] },
      { id: "gs1-culture", title: "Art & Culture", icon: "🎭", children: [] },
    ],
  },
  {
    id: "gs2",
    title: "GS-2",
    subtitle: "Polity, Governance, IR",
    icon: "⚖",
    children: [
      {
        id: "gs2-polity",
        title: "Polity",
        icon: "🏛",
        children: [
          {
            id: "gs2-polity-ncert",
            title: "NCERT",
            icon: "📗",
            children: [
              { id: "gs2-polity-ncert-class9", title: "Class 9", icon: "📘", children: [] },
              { id: "gs2-polity-ncert-class10", title: "Class 10", icon: "📘", children: [] },
              { id: "gs2-polity-ncert-class11", title: "Class 11", icon: "📘", children: [] },
              { id: "gs2-polity-ncert-class12", title: "Class 12", icon: "📘", children: [] },
            ],
          },
          {
            id: "gs2-polity-laxmikanth",
            title: "Laxmikanth",
            icon: "📕",
            children: [
              {
                id: "lax-part1",
                title: "Part I",
                subtitle: "Constitutional Framework",
                icon: "📖",
                children: [
                  {
                    id: "ch1",
                    title: "Chapter 1",
                    subtitle: "Historical Background",
                    icon: "📚",
                    children: [{
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
                                lines: [
                                  "Act passed = 1773",
                                  "Supreme Court established = 1774",
                                ],
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
                            mainsTheme: "Judiciary vs Executive: early tension resolved in executive's favour",
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
                            mainsTheme: "Origin of 'Double Government' — commercial vs political split",
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
                            mainsTheme: "Personalisation of institutional power in early colonial administration",
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
                            mainsTheme: "Cultural opening: Western education + missionary access begins",
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
                            mainsTheme: "Centralisation completed: Company → pure administrative trustee",
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
                            mainsTheme: "Seeds of specialised legislature + merit-based civil service",
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
                    },
                    {
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
                            mainsTheme: "Sovereignty shift: Company → Crown (but India's governance largely unchanged)",
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
                            mainsTheme: "Post-1857 pivot: centralisation → controlled association & devolution",
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
                            mainsTheme: "Cautious incrementalism: representation expanded but 'election' avoided",
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
                            mainsTheme: "Expanded participation but institutionalised communalism (separate electorate)",
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
                            mainsTheme: "Dyarchy: first experiment in responsible govt — largely unsuccessful",
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
                            mainsTheme: "Exclusion of Indians triggers universal boycott — legitimacy crisis",
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
                            mainsTheme: "Poona Pact: joint electorate + reserved seats — foundational SC representation compromise",
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
                                lines: [
                                  "Came into effect: 1937",
                                  "Discontinued: 1939",
                                ],
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
                            mainsTheme: "Blueprint for Indian Constitution — federal scheme & institutions largely retained",
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
                            mainsTheme: "Final transfer of sovereignty; Constituent Assembly's unconstrained constitution-making power",
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
                    },],
                  },
                ],
              },
              { id: "lax-part2", title: "Part II", subtitle: "System of Government", icon: "📖", children: [] },
              { id: "lax-part3", title: "Part III", subtitle: "Central Government", icon: "📖", children: [] },
              { id: "lax-part4", title: "Part IV", subtitle: "State Government", icon: "📖", children: [] },
              { id: "lax-part5", title: "Part V", subtitle: "Local Government", icon: "📖", children: [] },
              { id: "lax-part6", title: "Part VI", subtitle: "UTs and Special Areas", icon: "📖", children: [] },
              { id: "lax-part7", title: "Part VII", subtitle: "Constitutional Bodies", icon: "📖", children: [] },
              { id: "lax-part8", title: "Part VIII", subtitle: "Non-Constitutional Bodies", icon: "📖", children: [] },
              { id: "lax-part9", title: "Part IX", subtitle: "Other Constitution Dimensions", icon: "📖", children: [] },
              { id: "lax-part10", title: "Part X", subtitle: "Political Dynamics", icon: "📖", children: [] },
              { id: "lax-part11", title: "Part XI", subtitle: "Working of the Constitution", icon: "📖", children: [] },
              { id: "lax-part12", title: "Part XII", subtitle: "Judgements and Doctrines", icon: "📖", children: [] },
              { id: "lax-part13", title: "Part XIII", subtitle: "Comparison of the Constitution", icon: "📖", children: [] },
            ],
          },
        ],
      },
      { id: "gs2-ir", title: "International Relations", icon: "🌐", children: [] },
    ],
  },
  {
    id: "gs3",
    title: "GS-3",
    subtitle: "Economy, Security, S&T, Environment",
    icon: "📊",
    children: [
      { id: "gs3-economics", title: "Economics", icon: "💰", children: [] },
      { id: "gs3-security", title: "Internal Security & Challenges", icon: "🛡", children: [] },
      { id: "gs3-scitech", title: "Science & Technology", icon: "🔬", children: [] },
      { id: "gs3-environment", title: "Environment", icon: "🌱", children: [] },
      { id: "gs3-disaster", title: "Disaster Management", icon: "🌊", children: [] },
    ],
  },
  {
    id: "gs4",
    title: "GS-4",
    subtitle: "Ethics, Integrity, Aptitude",
    icon: "🧭",
    children: [
      { id: "gs4-ethics", title: "Ethics", icon: "⚖", children: [] },
      { id: "gs4-integrity", title: "Integrity", icon: "🤝", children: [] },
      { id: "gs4-attitude", title: "Attitude", icon: "🧠", children: [] },
    ],
  },
  {
    id: "essay",
    title: "Essay",
    subtitle: "Essay Paper",
    icon: "✍",
    children: [],
  },
];

// ╔══════════════════════════════════════════════════════════╗
// ║  QUIZ DATA — 20 PYQ-style MCQs per completed chapter/topic ║
// ║  Key = matching leaf node id from TREE_DATA above          ║
// ╚══════════════════════════════════════════════════════════╝
const QUIZ_DATA = {
  "ch1-regulating1773": {
    title: "Regulating Act of 1773",
    questions: [
      {
        q: "The Regulating Act of 1773 is considered a landmark because it:",
        options: [
          "Established the first Supreme Court in Madras",
          "First recognised the political and administrative functions of the East India Company",
          "Introduced the dyarchy system in Bengal",
          "Ended the East India Company's trade monopoly",
        ],
        correct: 1,
        explain: "The Act was the first British legislative step to recognise the Company's political/administrative role, distinct from its purely commercial character.",
      },
      {
        q: "Who was designated as the first Governor-General of Bengal under the Regulating Act of 1773?",
        options: ["Lord Cornwallis", "Lord William Bentinck", "Warren Hastings", "Lord Canning"],
        correct: 2,
        explain: "Warren Hastings became the first Governor-General of Bengal — NOT of India. That distinct title came only with the Charter Act of 1833 (Bentinck).",
      },
      {
        q: "Under the Regulating Act of 1773, the Governor-General of Bengal was assisted by an Executive Council of how many members?",
        options: ["Three", "Four", "Five", "Six"],
        correct: 1,
        explain: "A 4-member Executive Council was created to assist the Governor-General of Bengal.",
      },
      {
        q: "Before the Regulating Act of 1773, the relationship between the Bombay, Madras and Bengal Presidencies was:",
        options: [
          "Bengal was subordinate to Bombay",
          "All three were independent of one another",
          "Madras controlled both Bengal and Bombay",
          "They were governed jointly by a single council",
        ],
        correct: 1,
        explain: "Prior to 1773, all three presidencies functioned independently. The Act made Bombay and Madras subordinate to Bengal for the first time.",
      },
      {
        q: "The Supreme Court established at Calcutta under the Regulating Act of 1773 was actually set up in the year:",
        options: ["1772", "1773", "1774", "1775"],
        correct: 2,
        explain: "Though the Act was passed in 1773, the Supreme Court at Calcutta was actually established a year later, in 1774 — a classic UPSC year-trap.",
      },
      {
        q: "The Supreme Court at Calcutta, as provided by the Regulating Act, comprised:",
        options: [
          "One Chief Justice and two other judges",
          "One Chief Justice and three other judges",
          "Two Chief Justices and one judge",
          "A Chief Justice alone with no other judges",
        ],
        correct: 1,
        explain: "The Court comprised one Chief Justice and three other judges, as specified in the Act.",
      },
      {
        q: "Which of the following was NOT a feature of the Regulating Act of 1773?",
        options: [
          "Prohibition on Company servants from private trade",
          "Establishment of the Board of Control",
          "Governor of Bengal designated as Governor-General of Bengal",
          "Court of Directors required to report on revenue, civil and military affairs",
        ],
        correct: 1,
        explain: "The Board of Control was created later, by Pitt's India Act of 1784 — not by the Regulating Act of 1773.",
      },
      {
        q: "The Regulating Act of 1773 prohibited Company servants from:",
        options: [
          "Marrying local Indian women",
          "Learning local languages",
          "Engaging in private trade or accepting bribes/presents from natives",
          "Traveling outside Calcutta without permission",
        ],
        correct: 2,
        explain: "The Act explicitly barred Company servants from private trade and from accepting presents or bribes from 'natives.'",
      },
      {
        q: "Which body's reporting obligations to the British Government were strengthened by the Regulating Act of 1773?",
        options: ["Board of Control", "Court of Directors", "Supreme Court of Calcutta", "Governor-General's Executive Council"],
        correct: 1,
        explain: "The Court of Directors (the Company's governing body) was required to report on revenue, civil, and military affairs in India to the British Government.",
      },
      {
        q: "Consider the following statements about the Regulating Act of 1773:\n1. It was the first step by the British Government to regulate EIC affairs.\n2. It made Bombay and Madras superior to Bengal.\n3. It laid the foundation of central administration in India.\nWhich of the statements given above is/are correct?",
        options: ["1 only", "1 and 3 only", "2 and 3 only", "1, 2 and 3"],
        correct: 1,
        explain: "Statement 2 is incorrect — the Act made Bombay and Madras SUBORDINATE to Bengal, not superior. Statements 1 and 3 are both correct.",
      },
      {
        q: "The first Governor-General of India (as distinct from Bengal) was appointed under which Act?",
        options: ["Regulating Act 1773", "Pitt's India Act 1784", "Charter Act 1833", "Government of India Act 1858"],
        correct: 2,
        explain: "Lord William Bentinck became the first Governor-General of INDIA under the Charter Act of 1833 — a different office from the 1773 'Governor-General of Bengal.'",
      },
      {
        q: "Which of the following pairs is correctly matched?",
        options: [
          "Warren Hastings — First Viceroy of India",
          "Warren Hastings — First Governor-General of Bengal",
          "Warren Hastings — First Governor-General of India",
          "Warren Hastings — First Chief Justice of Calcutta Supreme Court",
        ],
        correct: 1,
        explain: "Warren Hastings was the first Governor-General of BENGAL (1773), not of India, and not Viceroy (that was Lord Canning, 1858).",
      },
      {
        q: "The Regulating Act of 1773 is significant primarily because it marked:",
        options: [
          "The end of Company rule in India",
          "The first Parliamentary attempt to control and regulate the East India Company",
          "The transfer of power to the British Crown",
          "The introduction of provincial autonomy",
        ],
        correct: 1,
        explain: "It was the FIRST step taken by British Parliament to regulate EIC's affairs — Crown takeover came much later, in 1858.",
      },
      {
        q: "Under the Regulating Act, which Presidency's Governor was designated 'Governor-General'?",
        options: ["Madras", "Bombay", "Bengal", "Agra"],
        correct: 2,
        explain: "The Governor of Bengal was designated as 'Governor-General of Bengal' under the 1773 Act.",
      },
      {
        q: "The Regulating Act of 1773 required which body to report on the Company's revenue, civil and military affairs to the British Government?",
        options: ["Board of Control", "Supreme Court", "Court of Directors", "Governor-General-in-Council"],
        correct: 2,
        explain: "The Court of Directors — the Company's own governing body — had to report to the British Government, strengthening Parliamentary oversight.",
      },
      {
        q: "Which of the following is a correct statement regarding the Supreme Court established under the Regulating Act?",
        options: [
          "It was established in Bombay",
          "It had jurisdiction only over revenue matters",
          "It was established at Calcutta in 1774",
          "It had only a Chief Justice with no other judges",
        ],
        correct: 2,
        explain: "The Supreme Court was established at Calcutta, and it began functioning in 1774 (one year after the Act was passed in 1773).",
      },
      {
        q: "The Regulating Act of 1773 is often cited as having laid the foundation of:",
        options: [
          "Indian federalism",
          "Central administration in India",
          "Universal adult franchise",
          "The Indian Judiciary's independence from the executive",
        ],
        correct: 1,
        explain: "One of its three key significances was laying the foundation of CENTRAL administration in British India.",
      },
      {
        q: "Which of the following correctly describes the pre-1773 status of the three Presidencies?",
        options: [
          "Bengal was administratively supreme",
          "They were independent of one another",
          "Madras controlled revenue collection for all three",
          "Bombay was the seat of the Supreme Court",
        ],
        correct: 1,
        explain: "Before 1773, Bengal, Bombay, and Madras Presidencies operated independently — the Regulating Act changed this by subordinating Bombay and Madras to Bengal.",
      },
      {
        q: "The Regulating Act of 1773 recognised, for the first time, which functions of the East India Company?",
        options: [
          "Only its commercial functions",
          "Its political and administrative functions",
          "Its religious functions",
          "Its military recruitment functions only",
        ],
        correct: 1,
        explain: "This was one of the Act's core significances — formal recognition of the Company's POLITICAL and ADMINISTRATIVE roles, not just commercial trading.",
      },
      {
        q: "Which of the following statements about the Regulating Act of 1773 is INCORRECT?",
        options: [
          "It designated the Governor of Bengal as Governor-General of Bengal",
          "It established a Supreme Court at Calcutta in 1774",
          "It made Bombay and Madras subordinate to Bengal",
          "It abolished the East India Company",
        ],
        correct: 3,
        explain: "The East India Company was abolished only much later, by the Government of India Act of 1858 — not by the Regulating Act of 1773.",
      },
    ],
  },

  "ch1-amending1781": {
    title: "Amending Act of 1781",
    questions: [
      { q: "The Amending Act of 1781 is also known as the:", options: ["Regulating Act", "Act of Settlement", "Pitt's India Act", "Charter Act"], correct: 1, explain: "It is also called the Act of Settlement, passed to rectify defects in the Regulating Act of 1773." },
      { q: "The primary purpose of the Amending Act of 1781 was to:", options: ["Abolish the Supreme Court", "Rectify the defects of the Regulating Act of 1773", "Establish Crown rule in India", "Create the Board of Control"], correct: 1, explain: "It was passed specifically to fix problems that had emerged from the Regulating Act of 1773." },
      { q: "Under the Amending Act of 1781, the Governor-General and Council were:", options: ["Made fully answerable to the Supreme Court", "Exempted from Supreme Court jurisdiction for official acts", "Abolished entirely", "Placed under the Board of Control"], correct: 1, explain: "The Act exempted the Governor-General and Council from Supreme Court jurisdiction for acts done in their official capacity." },
      { q: "Which matters were excluded from the Supreme Court's jurisdiction by the Amending Act of 1781?", options: ["Criminal matters", "Revenue matters and revenue-collection disputes", "Matters involving Europeans", "Matters involving the Governor-General personally"], correct: 1, explain: "Revenue matters and disputes arising from revenue collection were excluded from Supreme Court jurisdiction." },
      { q: "As per the Amending Act of 1781, over whom did the Supreme Court have jurisdiction?", options: ["All of Bengal, Bihar and Orissa", "All inhabitants of Calcutta", "Only Company servants", "Only British subjects in India"], correct: 1, explain: "The Supreme Court's jurisdiction was defined as covering all inhabitants of Calcutta." },
      { q: "Under the Amending Act of 1781, Hindus were to be tried according to:", options: ["English Common Law", "Hindu law", "Mohammedan law", "Company regulations"], correct: 1, explain: "The Act required personal laws to be applied — Hindus under Hindu law, Muslims under Mohammedan law." },
      { q: "Appeals from Provincial Courts, under the Amending Act of 1781, were to be taken to:", options: ["The Supreme Court directly", "The Governor-General-in-Council", "The Privy Council in London", "The Board of Control"], correct: 1, explain: "Appeals went to the Governor-General-in-Council, NOT to the Supreme Court — a key distinction from the 1773 arrangement." },
      { q: "The Amending Act of 1781 empowered the Governor-General-in-Council to:", options: ["Appoint the Chief Justice", "Frame regulations for Provincial Courts and Councils", "Dissolve the Supreme Court", "Levy new taxes on Britain"], correct: 1, explain: "It empowered the Governor-General-in-Council to frame regulations governing Provincial Courts and Councils." },
      { q: "Company servants, under the Amending Act of 1781, were:", options: ["Made subject to Supreme Court jurisdiction for all acts", "Exempted from Supreme Court jurisdiction for their official actions", "Barred from holding any judicial post", "Required to be tried only in England"], correct: 1, explain: "Similar to the Governor-General and Council, Company servants were exempted from SC jurisdiction for official actions." },
      { q: "Which of the following best describes the overall thrust of the Amending Act of 1781?", options: ["Strengthening judicial oversight over the executive", "Reducing judicial interference in administration and revenue matters", "Ending Company rule", "Introducing elections in India"], correct: 1, explain: "The Act's core thrust was to curb the Supreme Court's ability to interfere in administrative and revenue matters." },
      { q: "The Regulating Act of 1773 and the Amending Act of 1781 both primarily dealt with:", options: ["Trade monopoly", "The judicial-executive relationship in early Company administration", "Indian representation in legislature", "Education policy"], correct: 1, explain: "Both Acts, in different ways, shaped the balance between judicial oversight (Supreme Court) and executive authority (Governor-General)." },
      { q: "Which of the following is NOT a feature of the Amending Act of 1781?", options: ["Exemption of G-G and Council from SC jurisdiction", "Exclusion of revenue matters from SC jurisdiction", "Establishment of the Board of Control", "Application of personal law (Hindu/Mohammedan) by the SC"], correct: 2, explain: "The Board of Control was created later by Pitt's India Act of 1784, not the 1781 Act." },
      { q: "The Act of Settlement (1781) is significant chiefly for:", options: ["Introducing a system of double government", "Curtailing the powers of the newly-formed Supreme Court", "Establishing the first Legislative Council", "Ending the East India Company's monopoly"], correct: 1, explain: "Its central significance lies in restricting the Supreme Court's jurisdiction over the executive and over revenue matters." },
      { q: "Which court's jurisdiction was curtailed by the Amending Act of 1781?", options: ["Privy Council", "Federal Court", "Supreme Court at Calcutta", "Provincial Court at Madras"], correct: 2, explain: "The Supreme Court at Calcutta (established under the 1773 Act) had its jurisdiction curtailed by this Act." },
      { q: "Under the 1781 Act, who administered personal law to litigants in the Supreme Court?", options: ["Only British judges applied English law uniformly", "The Court applied Hindu law to Hindus and Mohammedan law to Muslims", "Personal law was abolished", "The Governor-General decided case by case"], correct: 1, explain: "The Court was required to apply the litigant's own personal law — Hindu law for Hindus, Mohammedan law for Muslims." },
      { q: "The exemption granted to the Governor-General and Council under the 1781 Act applied to:", options: ["All their personal financial dealings", "Acts carried out in their official capacity only", "Actions taken after retirement", "Matters relating to trade only"], correct: 1, explain: "The exemption was limited strictly to acts performed in an official capacity, not personal conduct." },
      { q: "Why was the Amending Act of 1781 necessary after the Regulating Act of 1773?", options: ["The 1773 Act had created conflict between the Supreme Court and the executive/revenue administration", "The 1773 Act failed to establish any Supreme Court", "The 1773 Act gave too much power to Bombay and Madras", "The 1773 Act abolished the Company"], correct: 0, explain: "Conflicts between the newly-created Supreme Court and the Company's executive/revenue administration necessitated the corrective 1781 Act." },
      { q: "Which of the following statements about the 1781 Act is correct?", options: ["It gave the Supreme Court appellate jurisdiction over Provincial Courts", "It removed the Supreme Court's appellate jurisdiction over Provincial Courts, redirecting appeals to the Governor-General-in-Council", "It abolished all Provincial Courts", "It merged the Supreme Court with the Board of Control"], correct: 1, explain: "Appeals from Provincial Courts went to the Governor-General-in-Council, not the Supreme Court — reducing the SC's appellate reach." },
      { q: "The Amending Act of 1781 reflects which broader tension in early colonial governance?", options: ["Centre vs States", "Judiciary vs Executive convenience", "Legislature vs Judiciary", "Crown vs Parliament"], correct: 1, explain: "It reflects the tension between judicial oversight (Supreme Court) and administrative/executive convenience — resolved in favour of the executive." },
      { q: "Which of the following is TRUE regarding the scope of the 1781 Act's exemptions?", options: ["It exempted only the Governor-General personally, not the Council", "It exempted both the Governor-General and Council, and Company servants, for official acts", "It exempted only Company servants, not the Governor-General", "It provided no exemptions at all"], correct: 1, explain: "The exemption from Supreme Court jurisdiction (for official acts) extended to the Governor-General, the Council, AND Company servants." },
    ],
  },

  "ch1-pitts1784": {
    title: "Pitt's India Act of 1784",
    questions: [
      { q: "Pitt's India Act of 1784 was introduced in the British Parliament by:", options: ["William Pitt, the British Prime Minister", "Lord Cornwallis", "Warren Hastings", "Lord Canning"], correct: 0, explain: "It was introduced by the then British Prime Minister, William Pitt, hence the name." },
      { q: "The key distinction introduced by Pitt's India Act of 1784 was between:", options: ["Central and provincial subjects", "Commercial and political functions of the Company", "Reserved and transferred subjects", "Federal and concurrent powers"], correct: 1, explain: "The Act distinguished for the first time between the Company's commercial functions and its political functions." },
      { q: "Under Pitt's India Act of 1784, commercial affairs of the Company were managed by:", options: ["The Board of Control", "The Court of Directors", "The Governor-General alone", "The British Parliament directly"], correct: 1, explain: "The Court of Directors continued to manage commercial affairs, while a new Board of Control managed political affairs." },
      { q: "The new body created by Pitt's India Act of 1784 to manage the Company's political affairs was called the:", options: ["Board of Control", "Council of India", "Secretary of State's Office", "Indian Legislative Council"], correct: 0, explain: "The Board of Control was newly created by this Act to oversee political affairs." },
      { q: "The system established by Pitt's India Act of 1784, involving both the Court of Directors and the Board of Control, is known as:", options: ["Dyarchy", "Double Government", "Provincial Autonomy", "Diarchy at the Centre"], correct: 1, explain: "This dual arrangement of commercial (Court of Directors) and political (Board of Control) control is termed 'Double Government'." },
      { q: "Pitt's India Act of 1784 empowered the Board of Control to supervise:", options: ["Only military operations", "Civil, military and revenue operations of British possessions in India", "Only revenue collection", "Only the Supreme Court's functioning"], correct: 1, explain: "The Board of Control was empowered to supervise and direct all civil, military and revenue operations." },
      { q: "Which term did Pitt's India Act of 1784 first use to describe the Company's Indian territories?", options: ["Crown colonies", "British possessions in India", "Indian Empire", "British Raj"], correct: 1, explain: "The Act was significant for first calling the Company's Indian territories 'British possessions in India'." },
      { q: "Pitt's India Act of 1784 is significant because it gave the British Government:", options: ["Complete ownership of Company profits", "Supreme control over the Company's affairs and administration in India", "The power to appoint the Chief Justice directly", "Authority to dissolve the Company immediately"], correct: 1, explain: "It gave the British Government supreme control over the Company's affairs and Indian administration, while commerce stayed with the Company." },
      { q: "Which of the following is NOT a feature of Pitt's India Act of 1784?", options: ["Creation of the Board of Control", "Distinction between commercial and political functions", "Establishment of the Supreme Court at Calcutta", "System of double government"], correct: 2, explain: "The Supreme Court at Calcutta was established earlier, under the Regulating Act of 1773, not Pitt's India Act." },
      { q: "The 'double government' system created by Pitt's India Act of 1784 was eventually ended by which Act?", options: ["Charter Act of 1833", "Government of India Act of 1858", "Indian Councils Act of 1861", "Government of India Act of 1919"], correct: 1, explain: "Double government was ended by the Government of India Act of 1858, which abolished both the Court of Directors and Board of Control." },
      { q: "Under Pitt's India Act of 1784, who retained control over the Company's trade and commerce?", options: ["The Board of Control", "The Court of Directors", "The British Crown directly", "The Governor-General-in-Council"], correct: 1, explain: "Commercial affairs remained with the Court of Directors, the Company's own governing body." },
      { q: "Pitt's India Act of 1784 can be seen as a precursor to which later development?", options: ["Introduction of separate electorates", "Full Crown takeover of Indian administration in 1858", "Provincial autonomy in 1937", "Formation of the Constituent Assembly"], correct: 1, explain: "By giving the British state political oversight while commerce stayed private, it foreshadowed the complete Crown takeover in 1858." },
      { q: "The Board of Control, established by Pitt's India Act of 1784, was primarily responsible for:", options: ["Managing the Company's tea trade", "Political and administrative oversight of British possessions in India", "Appointing judges to the Supreme Court", "Framing the Indian Constitution"], correct: 1, explain: "The Board of Control's role was political/administrative oversight, distinct from the Court of Directors' commercial role." },
      { q: "Which of the following correctly matches the body with its function under Pitt's India Act of 1784?", options: ["Court of Directors — Political affairs; Board of Control — Commercial affairs", "Court of Directors — Commercial affairs; Board of Control — Political affairs", "Both bodies handled commercial affairs jointly", "Both bodies handled political affairs jointly"], correct: 1, explain: "Court of Directors handled commerce; Board of Control handled politics — the reverse pairing is a common trap." },
      { q: "Pitt's India Act of 1784 was passed in the aftermath of concerns about:", options: ["Company mismanagement and the need for British Government oversight", "The 1857 Revolt", "The partition of Bengal", "The Simon Commission's recommendations"], correct: 0, explain: "It emerged from growing British concern over Company mismanagement, prompting the need for direct governmental oversight of political affairs." },
      { q: "Which statement about the 'British possessions in India' terminology is correct?", options: ["It was first used in the Charter Act of 1833", "It was first used in Pitt's India Act of 1784", "It was first used in the Government of India Act of 1858", "It was never officially used in any Act"], correct: 1, explain: "Pitt's India Act of 1784 was the first to officially refer to the territories as 'British possessions in India'." },
      { q: "The double government system under Pitt's India Act of 1784 meant that ultimate political authority rested with:", options: ["The Company's shareholders", "The British Government, via the Board of Control", "The Governor-General alone", "The Supreme Court"], correct: 1, explain: "Although the Company still ran commerce, ultimate political authority shifted toward the British Government through the Board of Control." },
      { q: "Compared to the Regulating Act of 1773, Pitt's India Act of 1784 represented:", options: ["A retreat from British Parliamentary control", "A deepening of British Parliamentary control over the Company's political functions", "The complete abolition of the Company", "A return to full presidency independence"], correct: 1, explain: "It deepened Parliamentary control by explicitly separating and asserting authority over the Company's political functions." },
      { q: "Which of these was a direct outcome of Pitt's India Act of 1784?", options: ["Establishment of the Board of Control", "Universal suffrage", "Formation of the Indian National Congress", "Abolition of the Governor-General's post"], correct: 0, explain: "The direct, defining outcome of the 1784 Act was the establishment of the Board of Control." },
      { q: "The dual control introduced by Pitt's India Act of 1784 lasted until:", options: ["1813", "1833", "1858", "1919"], correct: 2, explain: "The double government system persisted until 1858, when the Government of India Act ended it and transferred full control to the Crown." },
    ],
  },

  "ch1-act1786": {
    title: "Act of 1786",
    questions: [
      { q: "The Act of 1786 was enacted primarily to accommodate the demands of:", options: ["Warren Hastings", "Lord Cornwallis", "Lord William Bentinck", "Lord Canning"], correct: 1, explain: "Lord Cornwallis placed two conditions before accepting the post of Governor-General of Bengal, leading to this Act." },
      { q: "One of Lord Cornwallis's demands, fulfilled by the Act of 1786, was the power to:", options: ["Appoint all High Court judges", "Override the decision of his Council in special cases", "Abolish the Supreme Court", "Dissolve the Board of Control"], correct: 1, explain: "Cornwallis demanded, and received, the power to override his Council's decisions in special cases." },
      { q: "The second demand of Lord Cornwallis, granted by the Act of 1786, related to the post of:", options: ["Chief Justice", "Commander-in-Chief", "Secretary of State", "President of the Board of Control"], correct: 1, explain: "Cornwallis wanted to simultaneously hold the post of Commander-in-Chief alongside Governor-General." },
      { q: "Before the Act of 1786, could the Governor-General override his Council's decisions?", options: ["Yes, always", "No, this power was newly granted by this Act", "Only in matters of revenue", "Only during wartime"], correct: 1, explain: "This override power did not exist before 1786 — it was a new provision specifically for Cornwallis." },
      { q: "The Act of 1786 is significant in constitutional history mainly because it shows:", options: ["The start of federalism in India", "How an individual's personal conditions could shape institutional powers", "The end of the East India Company", "The beginning of Indian representation in governance"], correct: 1, explain: "It illustrates how Cornwallis's personal conditions became institutionalised as executive powers of the office." },
      { q: "Which office did Lord Cornwallis hold starting in 1786?", options: ["Viceroy of India", "Governor-General of Bengal", "Secretary of State for India", "Chief Justice of Calcutta"], correct: 1, explain: "Cornwallis was appointed Governor-General of Bengal in 1786, with the conditions later legislated via this Act." },
      { q: "The override power granted to Cornwallis under the 1786 Act was later extended to all future Governor-Generals and Governors by which Act?", options: ["Charter Act of 1793", "Charter Act of 1833", "Government of India Act of 1858", "Indian Councils Act of 1861"], correct: 0, explain: "The Charter Act of 1793 generalised this personal override power to all future Governor-Generals and Governors of Presidencies." },
      { q: "Which of the following is TRUE regarding the Act of 1786?", options: ["It was a broad constitutional reform applicable to all future officials", "It was enacted specifically to satisfy Cornwallis's personal conditions", "It abolished the office of Governor-General", "It introduced the Board of Control"], correct: 1, explain: "It was narrowly enacted for Cornwallis's specific demands — later Acts generalised these provisions." },
      { q: "Before becoming Governor-General, what did Cornwallis insist on regarding the Council's decisions?", options: ["That the Council alone decide, with no override", "That he be given power to override the Council's decision in special cases", "That the Council be abolished entirely", "That decisions require unanimous consent"], correct: 1, explain: "Cornwallis specifically demanded override power in special cases, not abolition of the Council." },
      { q: "The dual role Cornwallis sought — Governor-General plus Commander-in-Chief — reflects:", options: ["A demand for civilian control alone", "A demand for combined civil-military authority", "A demand to separate civil and military power", "A demand for judicial authority"], correct: 1, explain: "Cornwallis sought combined civil and military authority by holding both offices simultaneously." },
    ],
  },

  "ch1-charter1793": {
    title: "Charter Act of 1793",
    questions: [
      { q: "The Charter Act of 1793 extended the override power (first given to Cornwallis in 1786) to:", options: ["Only future Governor-Generals of Bengal", "All future Governor-Generals and Governors of Presidencies", "Only the Governor of Madras", "The Board of Control members"], correct: 1, explain: "The 1793 Act generalised the override power to ALL future Governor-Generals and Presidency Governors." },
      { q: "The Charter Act of 1793 extended the Company's trade monopoly in India for a further period of:", options: ["10 years", "15 years", "20 years", "25 years"], correct: 2, explain: "The Act extended the Company's trade monopoly in India for another 20 years." },
      { q: "Under the Charter Act of 1793, the Commander-in-Chief was:", options: ["Always a compulsory member of the Governor-General's council", "Not to be a member of the council unless specifically appointed", "Abolished as a post", "Made subordinate to the Board of Control"], correct: 1, explain: "The C-in-C was NOT to be a council member unless specifically so appointed." },
      { q: "Under the Charter Act of 1793, salaries of the Board of Control and its staff were to be paid from:", options: ["British Parliament's treasury", "Indian revenues", "The Company's trading profits only", "Personal funds of the Governor-General"], correct: 1, explain: "The Act specified that Board of Control members and staff were to be paid out of Indian revenues, not British funds." },
      { q: "The Charter Act of 1793 increased the Governor-General's control over which Presidencies?", options: ["Only Madras", "Only Bombay", "Both Bombay and Madras", "Bengal only"], correct: 2, explain: "It gave the Governor-General more power and control over the governments of both subordinate Presidencies — Bombay and Madras." },
      { q: "Which of the following was NOT extended or introduced by the Charter Act of 1793?", options: ["Override power to all future Governor-Generals", "Trade monopoly extension by 20 years", "Establishment of the Board of Control", "Payment of Board of Control staff from Indian revenue"], correct: 2, explain: "The Board of Control was established earlier, by Pitt's India Act of 1784 — not the 1793 Act." },
      { q: "The Charter Act of 1793 can best be described as an Act that:", options: ["Introduced Indian representation in legislature", "Generalised and extended provisions that were earlier personal to Cornwallis", "Ended Company rule", "Introduced dyarchy"], correct: 1, explain: "It took Cornwallis's personal 1786 concessions and made them general, systemic features of the office." },
      { q: "How many years after the Regulating Act of 1773 was the Charter Act of 1793 passed?", options: ["10 years", "15 years", "20 years", "25 years"], correct: 2, explain: "1793 minus 1773 = 20 years." },
      { q: "The Charter Act of 1793 falls under which broader phase of colonial constitutional history?", options: ["Crown Rule (1858–1947)", "Company Rule (1773–1858)", "Post-Independence era", "Interim Government era"], correct: 1, explain: "It falls within the Company Rule period (1773–1858), well before the Crown took over in 1858." },
      { q: "Which of the following correctly reflects a feature of the Charter Act of 1793?", options: ["It abolished the office of Board of Control", "It extended the override power originally given only to Cornwallis to all future Governor-Generals and Governors", "It introduced separate electorates", "It created the Federal Court"], correct: 1, explain: "This generalisation of the override power is the Act's defining feature." },
    ],
  },

  "ch1-charter1813": {
    title: "Charter Act of 1813",
    questions: [
      { q: "The Charter Act of 1813 asserted, for the first time, the sovereignty of:", options: ["The Governor-General over all India", "The British Crown over the Company's territories in India", "The Board of Control over the Court of Directors", "The Supreme Court over Provincial Courts"], correct: 1, explain: "This Act was the first to assert British Crown sovereignty over the Company's Indian territories." },
      { q: "Which trade monopoly did the Charter Act of 1813 abolish?", options: ["The Company's general trade monopoly in India, opening it to all British merchants", "The Company's monopoly over tea trade", "The Company's monopoly over trade with China", "All Company trade monopolies without exception"], correct: 0, explain: "The Act abolished the general Indian trade monopoly but retained the tea and China trade monopolies." },
      { q: "Which trade monopolies did the Company CONTINUE to hold even after the Charter Act of 1813?", options: ["Trade with France and Spain", "Trade in tea and trade with China", "Trade in textiles", "Trade in spices"], correct: 1, explain: "The Company retained its monopoly specifically over tea trade and trade with China." },
      { q: "The Charter Act of 1813 allowed which group to come to India for the first time under legal sanction?", options: ["European settlers seeking land", "Christian missionaries", "Foreign traders from France", "Journalists"], correct: 1, explain: "The Act allowed Christian missionaries to come to India for the purpose of 'enlightening' the people." },
      { q: "The Charter Act of 1813 provided for the spread of which kind of education in India?", options: ["Vernacular-only education", "Western education", "Religious education only", "Military education"], correct: 1, explain: "It provided for the spread of Western education among the inhabitants of British India." },
      { q: "Under the Charter Act of 1813, Local Governments in India were authorised to:", options: ["Print their own currency", "Impose taxes on persons and punish non-payment", "Declare war", "Appoint judges to the Supreme Court"], correct: 1, explain: "Local Governments were authorised to impose taxes and punish those who failed to pay." },
      { q: "Which of the following is a correct pairing regarding the Charter Act of 1813?", options: ["Ended tea trade monopoly, continued general trade monopoly", "Ended general trade monopoly, continued tea and China trade monopoly", "Ended all trade monopolies", "Continued all trade monopolies unchanged"], correct: 1, explain: "General trade was opened up; tea trade and China trade monopolies were specifically retained." },
      { q: "The assertion of Crown sovereignty by the Charter Act of 1813 is significant because it:", options: ["Immediately ended Company rule", "Was the first legal step toward eventual full Crown control (completed in 1858)", "Gave full voting rights to Indians", "Established the Federal Court"], correct: 1, explain: "Though the Company continued to administer India, this Act legally planted the seed of Crown sovereignty, completed only in 1858." },
      { q: "The Charter Act of 1813 is often linked to which broader social change in colonial India?", options: ["The beginning of socio-religious reform movements via Western education and missionary access", "The end of the caste system", "The abolition of sati", "The rise of the Indian National Congress"], correct: 0, explain: "By opening India to missionaries and Western education, this Act laid early cultural groundwork for later reform movements." },
      { q: "Which of the following was NOT a feature of the Charter Act of 1813?", options: ["Assertion of Crown sovereignty over Company territories", "Permission for Christian missionaries", "Abolition of the Company's trade monopoly in tea", "Authorisation for Local Governments to tax"], correct: 2, explain: "The tea trade monopoly was NOT abolished by this Act — only the general trade monopoly was, with tea and China trade retained." },
    ],
  },

  "ch1-charter1833": {
    title: "Charter Act of 1833",
    questions: [
      { q: "The Charter Act of 1833 converted the Governor-General of Bengal into the:", options: ["Viceroy of India", "Governor-General of India", "President of the Board of Control", "Secretary of State for India"], correct: 1, explain: "This Act created the office of Governor-General of INDIA, vesting him with authority over the entire British Indian territory." },
      { q: "Who became the first Governor-General of India under the Charter Act of 1833?", options: ["Warren Hastings", "Lord Cornwallis", "Lord William Bentinck", "Lord Canning"], correct: 2, explain: "Lord William Bentinck was the first Governor-General of India — distinct from Warren Hastings, who was only Governor-General of Bengal." },
      { q: "Under the Charter Act of 1833, which Presidencies lost their legislative powers?", options: ["Bengal and Agra", "Bombay and Madras", "Punjab and Sindh", "Assam and Bihar"], correct: 1, explain: "Bombay and Madras Governors were deprived of their legislative powers; only the Governor-General of India retained exclusive legislative authority." },
      { q: "Laws made under the Charter Act of 1833 and after came to be called:", options: ["Regulations", "Ordinances", "Acts", "Statutes"], correct: 2, explain: "Post-1833 laws were called 'Acts', while pre-1833 laws were called 'Regulations' — a key terminology distinction." },
      { q: "What were laws made BEFORE the Charter Act of 1833 called?", options: ["Acts", "Statutes", "Regulations", "Ordinances"], correct: 2, explain: "Pre-1833 laws under earlier Acts were called 'Regulations'." },
      { q: "The Charter Act of 1833 ended the East India Company's role as a:", options: ["Political entity", "Commercial/trading body", "Judicial authority", "Military organisation"], correct: 1, explain: "The Act ended the Company's commercial activities, making it purely an administrative body." },
      { q: "After the Charter Act of 1833, the Company held its Indian territories:", options: ["As sovereign owner", "In trust for His Majesty, His heirs and successors", "As a private commercial asset", "Jointly with the Board of Control"], correct: 1, explain: "The territories were now held 'in trust for His Majesty, His heirs and successors' — a shift toward Crown ownership in principle." },
      { q: "The Charter Act of 1833 attempted to introduce open competition for civil service selection, but this provision was:", options: ["Successfully implemented immediately", "Negated after opposition from the Court of Directors", "Delayed until 1857", "Applied only to Bengal"], correct: 1, explain: "Though proposed, the open competition clause was negated due to opposition from the Court of Directors — it did NOT actually happen in 1833." },
      { q: "The Charter Act of 1833 is often described as:", options: ["The first step toward decentralisation", "The final step towards centralisation in British India", "The beginning of provincial autonomy", "The end of British rule"], correct: 1, explain: "It represented the culmination of the centralising trend that began with the Regulating Act of 1773." },
      { q: "Which of the following is INCORRECT regarding the Charter Act of 1833?", options: ["It created the post of Governor-General of India", "It made Bombay and Madras lose legislative power", "It successfully introduced open competition for civil services in practice", "It converted the Company into a purely administrative body"], correct: 2, explain: "The open competition clause was PROPOSED but ultimately NEGATED — it was not actually implemented in 1833." },
    ],
  },

  "ch1-charter1853": {
    title: "Charter Act of 1853",
    questions: [
      { q: "The Charter Act of 1853 was the last of a series of Charter Acts spanning which years?", options: ["1773 to 1833", "1793 to 1853", "1813 to 1858", "1833 to 1861"], correct: 1, explain: "The Charter Acts series ran from 1793 to 1853, with the 1853 Act being the last of the series." },
      { q: "For the first time, the Charter Act of 1853 separated which two functions of the Governor-General's council?", options: ["Judicial and executive functions", "Legislative and executive functions", "Military and civil functions", "Revenue and expenditure functions"], correct: 1, explain: "It separated legislative and executive functions of the Governor-General's council for the first time." },
      { q: "The legislative wing created by the Charter Act of 1853 came to be known as the:", options: ["Federal Legislative Council", "Indian (Central) Legislative Council", "Imperial Legislative Assembly", "Constituent Assembly"], correct: 1, explain: "This new body was called the Indian (Central) Legislative Council, functioning like a mini-Parliament." },
      { q: "How many new 'legislative councillors' were added to the Governor-General's council by the Charter Act of 1853?", options: ["Four", "Six", "Eight", "Ten"], correct: 1, explain: "Six new members, called legislative councillors, were added to form the Indian (Central) Legislative Council." },
      { q: "Which committee was appointed in 1854 as a result of the Charter Act of 1853's civil service reforms?", options: ["Lee Commission", "Macaulay Committee", "Simon Commission", "Hunter Commission"], correct: 1, explain: "The Macaulay Committee (Committee on the Indian Civil Service) was appointed in 1854 following the Act's open competition provision." },
      { q: "Unlike earlier Charter Acts, the Charter Act of 1853 did NOT specify:", options: ["The powers of the Governor-General", "A fixed period for the Company's continued rule", "The composition of the Legislative Council", "The role of the Board of Control"], correct: 1, explain: "Earlier Charters specified a fixed tenure (often 20 years); the 1853 Act gave no fixed period, signalling Parliament could end Company rule anytime." },
      { q: "The Charter Act of 1853 introduced local representation in the Central Legislative Council by allowing appointments recommended by local governments of:", options: ["Only Bengal and Bombay", "Madras, Bombay, Bengal and Agra", "Only Madras and Punjab", "All Indian princely states"], correct: 1, explain: "Four of the six new members were appointed on recommendation of the local governments of Madras, Bombay, Bengal, and Agra." },
      { q: "How many of the six new legislative members under the 1853 Act were appointed based on local government recommendations?", options: ["Two", "Four", "Five", "All six"], correct: 1, explain: "Four of the six new members were appointed on the recommendation of local (provincial) governments." },
      { q: "The introduction of REAL open competition for civil service recruitment happened under which Act?", options: ["Charter Act of 1833 (successfully)", "Charter Act of 1853", "Government of India Act of 1919", "Indian Councils Act of 1861"], correct: 1, explain: "Unlike the failed 1833 attempt, the Charter Act of 1853 actually introduced real, functioning open competition for civil services." },
      { q: "Which of the following is INCORRECT about the Charter Act of 1853?", options: ["It separated legislative and executive functions of the council", "It specified a fixed 20-year period for continuation of Company rule", "It introduced open competition for civil services", "It introduced local representation in the legislative council"], correct: 1, explain: "Unlike earlier Charters, the 1853 Act specified NO fixed period — this was a deliberate departure signalling uncertain Company tenure." },
    ],
  },

  "ch1-govact1858": {
    title: "Government of India Act, 1858",
    questions: [
      { q: "The Government of India Act, 1858 was enacted in the immediate aftermath of:", options: ["The Charter Act of 1853", "The Revolt of 1857 (Sepoy Mutiny)", "The Simon Commission report", "The Poona Pact"], correct: 1, explain: "This Act was a direct legislative response to the Revolt of 1857, also called the First War of Independence." },
      { q: "The Government of India Act, 1858 is also referred to as the:", options: ["Act for the Good Government of India", "Morley-Minto Reforms", "Montford Reforms", "Act of Settlement"], correct: 0, explain: "It is also known as the 'Act for the Good Government of India'." },
      { q: "The Government of India Act, 1858 abolished which entity?", options: ["The Supreme Court", "The East India Company", "The Governor-General's post", "The Indian Legislative Council"], correct: 1, explain: "The Act abolished the East India Company, transferring its powers, territories, and revenues to the British Crown." },
      { q: "Under the Government of India Act, 1858, the Governor-General of India's designation was changed to:", options: ["Viceroy of India", "President of India", "Chief Administrator of India", "Secretary of State for India"], correct: 0, explain: "The Governor-General of India was redesignated as the Viceroy of India, the direct representative of the Crown." },
      { q: "Who became the first Viceroy of India under the Government of India Act, 1858?", options: ["Lord William Bentinck", "Lord Canning", "Lord Curzon", "Lord Mountbatten"], correct: 1, explain: "Lord Canning, who was already Governor-General, became the first Viceroy of India." },
      { q: "The Government of India Act, 1858 ended the system of double government by abolishing:", options: ["The Supreme Court and Privy Council", "The Board of Control and Court of Directors", "The Governor-General and Viceroy posts", "The Legislative and Executive Councils"], correct: 1, explain: "It abolished both the Board of Control and Court of Directors, ending the double government system created in 1784." },
      { q: "The new office created by the Government of India Act, 1858, with complete authority over Indian administration, was the:", options: ["Viceroy of India", "Secretary of State for India", "Governor-General of Bengal", "High Commissioner for India"], correct: 1, explain: "The Secretary of State for India was newly created, holding complete control over Indian administration and answerable to British Parliament." },
      { q: "The Secretary of State for India, created in 1858, was assisted by a council of how many members?", options: ["10", "12", "15", "20"], correct: 2, explain: "A 15-member Council of India was established to assist the Secretary of State, functioning in an advisory capacity." },
      { q: "Who served as the Chairman of the newly-formed Council of India (1858)?", options: ["The Viceroy", "The Secretary of State for India", "The Governor-General of Bengal", "The Chief Justice of Calcutta"], correct: 1, explain: "The Secretary of State for India was made the Chairman of the advisory Council of India." },
      { q: "The Government of India Act, 1858 made the Secretary of State-in-Council a body corporate, meaning it could:", options: ["Print its own currency", "Sue and be sued in India and England", "Dissolve the British Parliament", "Appoint the British Prime Minister"], correct: 1, explain: "It was constituted as a body corporate capable of suing and being sued, both in India and England." },
      { q: "The primary scope of change brought by the Government of India Act, 1858 was:", options: ["A complete overhaul of governance within India itself", "Mainly administrative restructuring in England, with limited change to India's actual governance", "The introduction of universal franchise", "The creation of a federal structure"], correct: 1, explain: "The Act largely reorganised control mechanisms in England; substantive changes to India's internal governance came only with later Acts." },
    ],
  },

  "ch1-ica1861": {
    title: "Indian Councils Act, 1861",
    questions: [
      { q: "The Indian Councils Act of 1861 began the process of associating Indians with:", options: ["The judiciary only", "The law-making process", "Military command", "Revenue collection only"], correct: 1, explain: "It marked the beginning of representative institutions by associating Indians (as non-official members) with law-making." },
      { q: "Under the Indian Councils Act of 1861, Indians nominated to the Viceroy's council were classified as:", options: ["Official members", "Non-official members", "Elected members", "Permanent members"], correct: 1, explain: "Indians were nominated as NON-OFFICIAL members — not elected, and distinct from official members." },
      { q: "In 1862, which Viceroy first nominated Indians to the legislative council under the 1861 Act?", options: ["Lord Canning", "Lord Minto", "Lord Curzon", "Lord Ripon"], correct: 0, explain: "Lord Canning, in 1862, nominated the first three Indians — the Raja of Benaras, Maharaja of Patiala, and Sir Dinkar Rao." },
      { q: "Which of the following was NOT among the first three Indians nominated to the legislative council in 1862?", options: ["Raja of Benaras", "Maharaja of Patiala", "Sir Dinkar Rao", "Satyendra Prasad Sinha"], correct: 3, explain: "Satyendra Prasad Sinha became the first Indian in the Viceroy's EXECUTIVE Council much later, under the 1909 Act — not in 1862." },
      { q: "The Indian Councils Act of 1861 restored legislative powers to which Presidencies?", options: ["Bengal and Agra", "Bombay and Madras", "Punjab and Sindh", "Assam and Orissa"], correct: 1, explain: "It restored legislative powers to Bombay and Madras, reversing the centralising trend that began in 1773 and peaked in 1833." },
      { q: "The trend reversed by the Indian Councils Act of 1861 (centralisation) had reached its peak under which Act?", options: ["Regulating Act of 1773", "Charter Act of 1833", "Pitt's India Act of 1784", "Charter Act of 1853"], correct: 1, explain: "Centralisation peaked with the Charter Act of 1833; the 1861 Act began reversing this trend toward decentralisation." },
      { q: "The 'portfolio system', recognised by the Indian Councils Act of 1861, had been introduced earlier by:", options: ["Lord Canning in 1859", "Warren Hastings in 1774", "Lord Cornwallis in 1786", "Lord Dalhousie in 1848"], correct: 0, explain: "The portfolio system was introduced by Lord Canning in 1859 and given legal recognition by the 1861 Act." },
      { q: "Under the portfolio system recognised by the 1861 Act, a council member was:", options: ["Given charge of one or more government departments and could issue final orders on their behalf", "Required to consult the full council for every decision", "Barred from any administrative role", "Only responsible for judicial matters"], correct: 0, explain: "Each member in-charge of a department (or departments) could issue final orders on behalf of the council for that department." },
      { q: "The Indian Councils Act of 1861 empowered the Viceroy to issue emergency ordinances valid for a maximum of:", options: ["3 months", "6 months", "12 months", "18 months"], correct: 1, explain: "Ordinances issued by the Viceroy without council concurrence during an emergency had a maximum life of 6 months." },
      { q: "New legislative councils established following the Indian Councils Act of 1861 included those for Bengal, North-Western Provinces, and Punjab, established respectively in:", options: ["1862, 1886, and 1897", "1861, 1870, and 1880", "1858, 1865, and 1875", "1863, 1890, and 1900"], correct: 0, explain: "Bengal's council was established in 1862, North-Western Provinces' in 1886, and Punjab's in 1897." },
      { q: "The Indian Councils Act of 1861, by restoring provincial legislative powers, eventually contributed to which later development?", options: ["Complete Indian independence in 1861 itself", "Provincial autonomy granted in 1937", "The Poona Pact", "The formation of the Constituent Assembly"], correct: 1, explain: "This policy of legislative devolution culminated in the grant of near-complete internal autonomy to provinces in 1937." },
    ],
  },

  "ch1-ica1892": {
    title: "Indian Councils Act, 1892",
    questions: [
      { q: "The Indian Councils Act of 1892 increased non-official members in legislative councils while maintaining:", options: ["Non-official majority", "Official majority", "Equal representation", "Elected majority"], correct: 1, explain: "Despite increasing non-official members, the Act maintained official majority in both Central and Provincial councils." },
      { q: "The Indian Councils Act of 1892 gave legislative councils the power to discuss:", options: ["Only foreign policy", "The budget and address questions to the executive", "Constitutional amendments", "Judicial appointments"], correct: 1, explain: "Councils were empowered to discuss the budget and pose questions to the executive — a significant deliberative expansion." },
      { q: "The system of Budget was first introduced in British India in the year:", options: ["1858", "1860", "1892", "1909"], correct: 1, explain: "The Budget system was introduced in 1860, though the power to DISCUSS it in councils was only given by the 1892 Act." },
      { q: "Central Legislative Council members, under the Indian Councils Act of 1892, were nominated by the Viceroy on recommendation of:", options: ["Direct public election", "Provincial legislative councils and the Bengal Chamber of Commerce", "The Board of Control", "The Secretary of State alone"], correct: 1, explain: "Nomination was based on recommendations from provincial legislative councils and the Bengal Chamber of Commerce." },
      { q: "Provincial legislative council members, under the 1892 Act, were nominated by Governors based on recommendations from:", options: ["District boards, municipalities, universities, trade associations, zamindars", "Only the Viceroy's office", "The British Parliament directly", "Religious bodies exclusively"], correct: 0, explain: "Governors nominated based on recommendations from district boards, municipalities, universities, trade associations, and zamindars." },
      { q: "Did the Indian Councils Act of 1892 explicitly use the word 'election'?", options: ["Yes, it introduced direct elections openly", "No, the word 'election' was never used; the process was called 'nomination on recommendation'", "Yes, but only for Bombay", "No, elections were entirely banned"], correct: 1, explain: "This is a key UPSC trap — the Act made limited, indirect provision for election but never used the word 'election' itself." },
      { q: "How would you characterise the Indian Councils Act of 1892's approach to representation?", options: ["Bold and immediate full democratisation", "Cautious, indirect and incremental expansion of representation", "Complete rejection of any representation", "Full adult franchise introduction"], correct: 1, explain: "The Act's approach was cautious and incremental — expanding representation without naming it 'election'." },
      { q: "Which of the following is TRUE about the Indian Councils Act of 1892?", options: ["It gave provincial councils a non-official majority", "It increased non-official members but kept official majority intact", "It abolished the Central Legislative Council", "It introduced separate electorates for Muslims"], correct: 1, explain: "Non-official members increased, but official majority was maintained — separate electorates came later, in 1909." },
      { q: "The Indian Councils Act of 1892 was primarily aimed at expanding which aspect of legislative councils?", options: ["Judicial powers", "Deliberative and consultative functions", "Executive powers over the military", "Financial autonomy from Britain"], correct: 1, explain: "The Act's core aim was to expand councils' deliberative functions — budget discussion and questioning the executive." },
      { q: "Which body's recommendation could lead to nomination of a Central Legislative Council member under the 1892 Act?", options: ["Bengal Chamber of Commerce", "Indian National Congress", "Muslim League", "Zamindari Association of Bengal"], correct: 0, explain: "The Bengal Chamber of Commerce was one of the bodies whose recommendation could lead to nomination." },
    ],
  },

  "ch1-ica1909": {
    title: "Indian Councils Act, 1909",
    questions: [
      { q: "The Indian Councils Act of 1909 is popularly known as the:", options: ["Montford Reforms", "Morley-Minto Reforms", "Simon Reforms", "Ripon Reforms"], correct: 1, explain: "It is known as the Morley-Minto Reforms after Lord Morley (Secretary of State) and Lord Minto (Viceroy)." },
      { q: "In the Morley-Minto Reforms of 1909, who held the post of Secretary of State for India?", options: ["Lord Morley", "Lord Minto", "Lord Curzon", "Lord Canning"], correct: 0, explain: "Lord Morley was the Secretary of State for India; Lord Minto was the Viceroy — a common pairing trap in exams." },
      { q: "Under the Indian Councils Act of 1909, the number of Central Legislative Council members was raised from 16 to:", options: ["40", "50", "60", "70"], correct: 2, explain: "The Central legislative council's size was raised from 16 to 60 members." },
      { q: "In the Central Legislative Council under the 1909 Act, which type of majority was retained?", options: ["Non-official majority", "Official majority", "Elected majority", "No majority rule applied"], correct: 1, explain: "The Central council retained OFFICIAL majority, while provincial councils were allowed non-official majority — a key contrast." },
      { q: "Which councils were allowed to have a non-official majority under the Indian Councils Act of 1909?", options: ["Central council only", "Provincial legislative councils", "Neither Central nor Provincial councils", "Only the Bengal council"], correct: 1, explain: "Provincial councils, unlike the Central council, were allowed a NON-official majority under this Act." },
      { q: "Who became the first Indian to join the Viceroy's Executive Council under the 1909 Act?", options: ["Sir Dinkar Rao", "Satyendra Prasad Sinha", "Dr. B.R. Ambedkar", "C. Rajagopalachari"], correct: 1, explain: "Satyendra Prasad Sinha was appointed as the Law Member, becoming the first Indian in the Viceroy's Executive Council." },
      { q: "Satyendra Prasad Sinha was appointed to the Viceroy's Executive Council in which capacity?", options: ["Finance Member", "Law Member", "Home Member", "Defence Member"], correct: 1, explain: "He was specifically appointed as the LAW Member of the Viceroy's Executive Council." },
      { q: "The Indian Councils Act of 1909 introduced separate electorates for which community?", options: ["Sikhs", "Muslims", "Anglo-Indians", "Christians"], correct: 1, explain: "The 1909 Act introduced the concept of separate electorate specifically for Muslims." },
      { q: "Lord Minto is popularly referred to as the:", options: ["Father of Indian Federalism", "Father of Communal Electorate", "Father of the Indian Civil Service", "Father of Provincial Autonomy"], correct: 1, explain: "Due to introducing separate electorates for Muslims, Lord Minto is called the 'Father of Communal Electorate'." },
      { q: "Besides Muslims, which other groups received separate representation under the Indian Councils Act of 1909?", options: ["Presidency corporations, chambers of commerce, universities and zamindars", "Only Anglo-Indians", "Only Sikhs and Christians", "Only the depressed classes"], correct: 0, explain: "Separate representation also extended to presidency corporations, chambers of commerce, universities and zamindars." },
      { q: "Which of the following deliberative powers did the 1909 Act grant to council members?", options: ["Asking supplementary questions and moving budget resolutions", "Declaring war", "Appointing the Viceroy", "Impeaching judges"], correct: 0, explain: "Members were allowed to ask supplementary questions and move resolutions on the budget — enlarging deliberative functions." },
      { q: "The introduction of separate electorates under the 1909 Act is often described as having:", options: ["Strengthened national unity", "Legalised communalism in Indian politics", "Ended religious representation debates permanently", "Reduced British control over elections"], correct: 1, explain: "This is widely described as having 'legalised communalism' — a phrase directly used regarding this Act's legacy." },
    ],
  },

  "ch1-govact1919": {
    title: "Government of India Act, 1919",
    questions: [
      { q: "The Government of India Act, 1919 is also known as the:", options: ["Morley-Minto Reforms", "Montagu-Chelmsford Reforms", "Simon Reforms", "Ripon Reforms"], correct: 1, explain: "This Act is known as the Montagu-Chelmsford (Montford) Reforms." },
      { q: "In the Montagu-Chelmsford Reforms, who was the Secretary of State for India?", options: ["Montagu", "Chelmsford", "Morley", "Minto"], correct: 0, explain: "Montagu was the Secretary of State for India; Chelmsford was the Viceroy of India." },
      { q: "The Government of India Act, 1919 came into force in the year:", options: ["1917", "1919", "1921", "1923"], correct: 2, explain: "Although passed in 1919, the Act actually came into force in 1921." },
      { q: "The scheme of 'dyarchy' introduced by the Government of India Act, 1919 applied at which level?", options: ["Central level only", "Provincial level", "Both Central and Provincial levels equally", "Princely states only"], correct: 1, explain: "Dyarchy (double rule) was introduced in the PROVINCES under the 1919 Act — not at the Centre." },
      { q: "Under provincial dyarchy (1919 Act), 'transferred subjects' were administered by:", options: ["The Governor alone, without any council", "The Governor with the aid of ministers responsible to the legislative council", "The Viceroy directly", "The Secretary of State for India"], correct: 1, explain: "Transferred subjects (like education, health) were run by the Governor WITH ministers accountable to the legislative council." },
      { q: "Under provincial dyarchy, 'reserved subjects' (like police and justice) were administered by:", options: ["The Governor and his executive council, without accountability to the legislative council", "Elected ministers only", "The Central Legislative Assembly", "Local municipal bodies"], correct: 0, explain: "Reserved subjects were run by the Governor and his executive council WITHOUT being responsible to the legislative council." },
      { q: "The word 'dyarchy' is derived from a Greek term meaning:", options: ["Single rule", "Double rule", "No rule", "Divine rule"], correct: 1, explain: "'Dyarchy' comes from the Greek 'di-arche', meaning double rule." },
      { q: "The Government of India Act, 1919 introduced which of the following for the first time in India?", options: ["Universal adult franchise", "Bicameralism and direct elections", "Separate electorates", "The Federal Court"], correct: 1, explain: "It introduced bicameralism (Council of State + Legislative Assembly) and direct elections for the first time." },
      { q: "Under the Government of India Act, 1919, the Upper House of the central legislature was called the:", options: ["Legislative Assembly", "Council of State", "Rajya Sabha", "Indian Legislative Council"], correct: 1, explain: "The Upper House was called the Council of State; the Lower House was the Legislative Assembly." },
      { q: "The 1919 Act required how many of the six Viceroy's Executive Council members (excluding C-in-C) to be Indian?", options: ["One", "Two", "Three", "Four"], correct: 2, explain: "Three of the six members (excluding the Commander-in-Chief) were required to be Indian." },
      { q: "The Central Public Service Commission, envisaged by the 1919 Act, was actually set up in:", options: ["1919 itself", "1923", "1926", "1935"], correct: 2, explain: "Though provided for in 1919, the Central PSC was actually established in 1926, based on the Lee Commission's recommendation (1923-24)." },
      { q: "The Lee Commission, whose recommendations led to setting up the Central PSC, submitted its report during:", options: ["1919-20", "1923-24", "1929-30", "1934-35"], correct: 1, explain: "The Lee Commission on Superior Civil Services in India reported in 1923-24." },
      { q: "For the first time, the Government of India Act, 1919 separated:", options: ["Judiciary from the executive", "Provincial budgets from the Central budget", "Legislature from the judiciary", "Police from the judiciary"], correct: 1, explain: "It separated provincial budgets from the Central budget for the first time, authorising provinces to enact their own budgets." },
      { q: "Which commission was constituted as per the statutory review clause of the Government of India Act, 1919?", options: ["Lee Commission", "Simon Commission", "Hunter Commission", "Cripps Commission"], correct: 1, explain: "The Act's provision for a statutory review after 10 years led to the constitution of the Simon Commission in 1927." },
      { q: "The Chamber of Princes (Narendra Mandal), proposed by the 1919 Act, was inaugurated in which year?", options: ["1919", "1921", "1926", "1930"], correct: 1, explain: "The Chamber of Princes was inaugurated in 1921, consisting of 120 members headed by the Viceroy." },
      { q: "The Chamber of Princes consisted of how many total members?", options: ["100", "108", "120", "135"], correct: 2, explain: "It had 120 members total: Princes of 108 states plus 12 representatives of other states." },
      { q: "Which of the following best describes the outcome of the dyarchy experiment under the 1919 Act?", options: ["It was highly successful and expanded to the Centre", "It was largely unsuccessful", "It led to immediate full independence", "It was never actually implemented"], correct: 1, explain: "Despite being India's first real experiment in responsible government, dyarchy in the provinces was largely UNSUCCESSFUL." },
      { q: "Which new office in London was created by the Government of India Act, 1919?", options: ["Secretary of State for India", "High Commissioner for India", "Viceroy's London Representative", "Board of Control Chairman"], correct: 1, explain: "The Act created the office of High Commissioner for India in London, taking over some Secretary of State functions." },
      { q: "The 1917 declaration that preceded the Government of India Act, 1919 promised:", options: ["The gradual introduction of responsible government in India", "Immediate dominion status", "Abolition of the Viceroy's post", "Complete independence by 1920"], correct: 0, explain: "The August 20, 1917 declaration promised the gradual, progressive realisation of responsible government in India." },
      { q: "Under the 1919 Act, franchise was extended based on:", options: ["Universal adult suffrage", "Property, tax, or other qualifications", "Educational qualifications alone", "Religious affiliation alone"], correct: 1, explain: "Franchise was limited and granted based on property, tax, or other qualifications — not universal suffrage." },
    ],
  },

  "ch1-simon": {
    title: "Simon Commission (1927)",
    questions: [
      { q: "The Simon Commission was announced in which year, ahead of its scheduled time?", options: ["1925", "1927", "1929", "1930"], correct: 1, explain: "It was announced in November 1927 — two years before its scheduled time." },
      { q: "The Simon Commission was chaired by:", options: ["Lord Simon", "Sir John Simon", "Lord Morley", "Lord Minto"], correct: 1, explain: "Sir John Simon chaired the seven-member statutory commission." },
      { q: "How many members did the Simon Commission have?", options: ["Five", "Seven", "Nine", "Eleven"], correct: 1, explain: "The Simon Commission was a seven-member statutory commission." },
      { q: "What was the nationality composition of the Simon Commission's members?", options: ["Mixed British and Indian members", "All members were British", "All members were Indian", "Equal British and Indian representation"], correct: 1, explain: "All members were British — this all-European composition led to its boycott by all Indian parties." },
      { q: "Why did Indian political parties boycott the Simon Commission?", options: ["It recommended immediate independence, which parties opposed", "All its members were British, with no Indian representation", "It was formed illegally", "It recommended abolishing the Indian National Congress"], correct: 1, explain: "The complete absence of Indian members led all parties to boycott the Commission." },
      { q: "The Simon Commission submitted its report in which year?", options: ["1927", "1929", "1930", "1932"], correct: 2, explain: "Despite being announced in 1927, the Commission's report was submitted only in 1930." },
      { q: "Which of the following was NOT a recommendation of the Simon Commission?", options: ["Abolition of dyarchy", "Federation of British India and princely states", "Introduction of universal adult franchise", "Continuation of communal electorate"], correct: 2, explain: "The Simon Commission did not recommend universal adult franchise — that came much later, post-independence." },
      { q: "Following the Simon Commission report, which process was undertaken to discuss its proposals?", options: ["Direct implementation without discussion", "Three Round Table Conferences", "A national referendum", "Formation of the Constituent Assembly"], correct: 1, explain: "Three Round Table Conferences were held to discuss the Commission's proposals with British and Indian representatives." },
      { q: "The discussions following the Simon Commission report led to the preparation of a:", options: ["Blue Paper on Governance", "White Paper on Constitutional Reforms", "Green Paper on Federalism", "Red Paper on Independence"], correct: 1, explain: "A 'White Paper on Constitutional Reforms' was prepared based on the Round Table Conference discussions." },
      { q: "The recommendations arising from the Simon Commission process were eventually incorporated into which Act?", options: ["Government of India Act, 1919", "Government of India Act, 1935", "Indian Independence Act, 1947", "Indian Councils Act, 1909"], correct: 1, explain: "The Joint Select Committee's recommendations, stemming from the Simon Commission process, fed into the Government of India Act, 1935." },
    ],
  },

  "ch1-communalaward": {
    title: "Communal Award (1932)",
    questions: [
      { q: "The Communal Award was announced in August 1932 by:", options: ["Lord Irwin", "Ramsay MacDonald", "Winston Churchill", "Lord Willingdon"], correct: 1, explain: "Ramsay MacDonald, the British Prime Minister, announced the Communal Award." },
      { q: "The Communal Award extended separate electorates to which additional group, beyond earlier arrangements?", options: ["Europeans", "The Depressed Classes (Scheduled Castes)", "Anglo-Indians", "Indian Christians"], correct: 1, explain: "The Award extended the principle of separate electorate to the Depressed Classes (Scheduled Castes) for the first time." },
      { q: "Which groups already had separate electorates continued under the Communal Award?", options: ["Muslims, Sikhs, Indian Christians, Anglo-Indians and Europeans", "Only Muslims", "Only Sikhs and Christians", "Only Europeans"], correct: 0, explain: "The Award continued separate electorates for Muslims, Sikhs, Indian Christians, Anglo-Indians, and Europeans." },
      { q: "Gandhiji's response to the Communal Award's extension to depressed classes was to:", options: ["Support it fully", "Undertake a fast unto death in Yerawada Jail, Poona", "Resign from the Congress", "Launch the Quit India Movement"], correct: 1, explain: "Gandhiji undertook a fast unto death at Yerawada Jail (Poona) to oppose separate electorates for depressed classes." },
      { q: "The agreement that resulted from Gandhiji's fast and negotiations over the Communal Award is known as the:", options: ["Lucknow Pact", "Poona Pact", "Gandhi-Irwin Pact", "Cabinet Mission Plan"], correct: 1, explain: "The resulting agreement is called the Poona Pact." },
      { q: "The Poona Pact was an agreement between the Congress and:", options: ["Muhammad Ali Jinnah", "Dr. B.R. Ambedkar", "Sardar Patel", "Subhas Chandra Bose"], correct: 1, explain: "The Poona Pact was concluded between the Congress and Dr. B.R. Ambedkar, leader of the depressed classes." },
      { q: "Under the Poona Pact, what replaced the idea of separate electorates for depressed classes?", options: ["No representation at all", "Joint electorate with reserved seats for depressed classes", "Nomination only, with no elections", "Separate electorate continued unchanged"], correct: 1, explain: "The Poona Pact retained a Hindu JOINT electorate but gave RESERVED seats to the depressed classes." },
      { q: "Did the British Government accept the Poona Pact?", options: ["No, it was rejected outright", "Yes, and it modified the Communal Award accordingly for depressed classes", "It was accepted only partially for a trial period", "It was never formally addressed"], correct: 1, explain: "The British Government accepted the Poona Pact and modified the Communal Award in respect of depressed classes." },
      { q: "The provisions of the Poona Pact were eventually incorporated into which Act?", options: ["Government of India Act, 1919", "Government of India Act, 1935", "Indian Independence Act, 1947", "Indian Councils Act, 1909"], correct: 1, explain: "The Poona Pact's provisions were incorporated into the Government of India Act, 1935." },
      { q: "Which of the following best summarises the shift from Communal Award to Poona Pact?", options: ["From joint electorate to separate electorate for depressed classes", "From separate electorate to joint electorate with reserved seats for depressed classes", "From reserved seats to no representation", "From nomination to direct separate representation"], correct: 1, explain: "The key shift was FROM separate electorate (Communal Award) TO joint electorate with reserved seats (Poona Pact) — a frequently tested distinction." },
    ],
  },

  "ch1-govact1935": {
    title: "Government of India Act, 1935",
    questions: [
      { q: "The Government of India Act, 1935 is often described as:", options: ["The first milestone towards responsible government", "The second milestone towards completely responsible government", "The final step of Company rule", "The beginning of Crown rule"], correct: 1, explain: "It is described as the SECOND milestone (after the 1919 Act) towards completely responsible government." },
      { q: "How many Sections and Schedules did the Government of India Act, 1935 contain?", options: ["221 Sections and 8 Schedules", "321 Sections and 10 Schedules", "421 Sections and 12 Schedules", "150 Sections and 6 Schedules"], correct: 1, explain: "It was a lengthy and detailed document with 321 Sections and 10 Schedules." },
      { q: "The All-India Federation proposed by the Government of India Act, 1935 was to consist of:", options: ["Only British Indian provinces", "Provinces and princely states as units", "Only princely states", "Provinces and Presidencies only"], correct: 1, explain: "The Federation was to include both provinces and princely states — but this federation NEVER actually came into being." },
      { q: "Why did the All-India Federation proposed by the 1935 Act never materialise?", options: ["The British Parliament rejected it", "The princely states did not join it", "World War II cancelled it", "The Congress boycotted it entirely"], correct: 1, explain: "The Federation failed to materialise because the princely states did not join it." },
      { q: "Under the Government of India Act, 1935, how many items were in the Federal List?", options: ["54", "59", "36", "97"], correct: 1, explain: "The Federal List had 59 items, meant for the Centre." },
      { q: "How many items were in the Provincial List under the Government of India Act, 1935?", options: ["59", "54", "36", "42"], correct: 1, explain: "The Provincial List, for provinces, had 54 items." },
      { q: "How many items were in the Concurrent List under the Government of India Act, 1935?", options: ["36", "54", "59", "20"], correct: 0, explain: "The Concurrent List, for both Centre and provinces, had 36 items." },
      { q: "Under the Government of India Act, 1935, residuary powers were vested in:", options: ["The provinces", "The Federal Legislature", "The Viceroy (Governor-General)", "The Federal Court"], correct: 2, explain: "Residuary powers were given to the Viceroy (Governor-General), not to any legislative body." },
      { q: "The Government of India Act, 1935 abolished dyarchy in the provinces and introduced:", options: ["Full independence", "Provincial Autonomy", "Central Autonomy", "Presidential rule"], correct: 1, explain: "Provincial dyarchy was abolished and replaced with 'Provincial Autonomy'." },
      { q: "Provincial Autonomy under the 1935 Act came into effect in which year and was discontinued in which year?", options: ["1935 and 1939", "1937 and 1939", "1939 and 1942", "1937 and 1947"], correct: 1, explain: "Provincial Autonomy came into effect in 1937 and was discontinued in 1939 (due to WWII)." },
      { q: "The dyarchy scheme proposed for the CENTRE under the 1935 Act:", options: ["Was successfully implemented", "Never came into operation at all", "Was implemented for 2 years only", "Applied only to Bengal and Bombay"], correct: 1, explain: "Unlike provincial dyarchy (1919), the dyarchy proposed at the Centre by the 1935 Act NEVER came into operation." },
      { q: "The Government of India Act, 1935 introduced bicameralism in how many of the 11 provinces?", options: ["4", "6", "8", "All 11"], correct: 1, explain: "Bicameralism was introduced in 6 of the 11 provinces: Bengal, Bombay, Madras, Bihar, Assam, and United Provinces." },
      { q: "Which of the following provinces did NOT get a bicameral legislature under the 1935 Act?", options: ["Bengal", "Madras", "Punjab", "Bihar"], correct: 2, explain: "Punjab was NOT among the six provinces (Bengal, Bombay, Madras, Bihar, Assam, United Provinces) given bicameral legislatures." },
      { q: "Approximately what percentage of the population received voting rights under the Government of India Act, 1935?", options: ["14%", "25%", "40%", "5%"], correct: 0, explain: "About 14% of the total population got the right to vote under this Act." },
      { q: "Which financial institution's establishment was provided for by the Government of India Act, 1935?", options: ["State Bank of India", "Reserve Bank of India", "National Housing Bank", "NABARD"], correct: 1, explain: "The Act provided for establishing the Reserve Bank of India, to control currency and credit." },
      { q: "The Federal Court, provided for by the Government of India Act, 1935, was actually set up in:", options: ["1935", "1937", "1940", "1950"], correct: 1, explain: "Though provided for in the 1935 Act, the Federal Court was actually set up in 1937." },
      { q: "The Government of India Act, 1935 separated which territory from India?", options: ["Ceylon", "Burma (now Myanmar)", "Nepal", "Bhutan"], correct: 1, explain: "Burma (present-day Myanmar) was separated from India under this Act." },
      { q: "Which two new provinces were created by the Government of India Act, 1935?", options: ["Bihar and Orissa", "Orissa and Sind", "Punjab and Sindh", "Assam and Bengal"], correct: 1, explain: "The Act created two new provinces: Orissa and Sind." },
      { q: "The Council of India, established originally by the Government of India Act of 1858, was abolished by:", options: ["The Indian Councils Act of 1909", "The Government of India Act of 1919", "The Government of India Act of 1935", "The Indian Independence Act of 1947"], correct: 2, explain: "The 1935 Act abolished the Council of India (established in 1858), replacing it with a team of advisors for the Secretary of State." },
      { q: "Which of the following was NOT a provision of the Government of India Act, 1935?", options: ["Establishment of a Federal Railway Authority", "Appointment of an Auditor-General of India", "Introduction of universal adult suffrage", "Establishment of Federal and Provincial Public Service Commissions"], correct: 2, explain: "Universal adult suffrage was NOT introduced by this Act — it came only with the Indian Constitution post-independence." },
    ],
  },

  "ch1-indep1947": {
    title: "Indian Independence Act, 1947",
    questions: [
      { q: "British Prime Minister Clement Attlee announced the end of British rule in India by which date?", options: ["August 15, 1947", "June 30, 1948", "December 31, 1947", "January 26, 1950"], correct: 1, explain: "On February 20, 1947, Attlee declared British rule would end by June 30, 1948 (though independence actually came earlier, on August 15, 1947)." },
      { q: "The partition plan announced on June 3, 1947 by Lord Mountbatten is known as the:", options: ["Cripps Plan", "Mountbatten Plan", "Cabinet Mission Plan", "Wavell Plan"], correct: 1, explain: "This is known as the Mountbatten Plan, accepted by both the Congress and the Muslim League." },
      { q: "The Indian Independence Bill was introduced in the British Parliament on:", options: ["June 3, 1947", "July 4, 1947", "July 18, 1947", "August 15, 1947"], correct: 1, explain: "The Bill was introduced in the British Parliament on July 4, 1947." },
      { q: "The Indian Independence Bill received Royal Assent on:", options: ["July 4, 1947", "July 18, 1947", "August 15, 1947", "August 20, 1947"], correct: 1, explain: "Royal Assent was received on July 18, 1947, and the Act came into force on August 15, 1947." },
      { q: "The Indian Independence Act, 1947 came into force on:", options: ["July 18, 1947", "August 15, 1947", "January 26, 1950", "November 26, 1949"], correct: 1, explain: "The Act came into force on August 15, 1947, the date of India's independence." },
      { q: "The Indian Independence Act, 1947 provided for the creation of how many independent dominions?", options: ["One", "Two", "Three", "Four"], correct: 1, explain: "It provided for two independent dominions: India and Pakistan." },
      { q: "Under the Indian Independence Act, 1947, the office of Viceroy was:", options: ["Retained unchanged", "Abolished, replaced by a Governor-General for each dominion", "Merged with the Prime Minister's office", "Transferred to the Secretary of State"], correct: 1, explain: "The office of Viceroy was abolished; each dominion instead got its own Governor-General." },
      { q: "Who became the first Governor-General of independent India?", options: ["Jawaharlal Nehru", "Lord Mountbatten", "C. Rajagopalachari", "Dr. Rajendra Prasad"], correct: 1, explain: "Lord Mountbatten, the last Viceroy, became the first Governor-General of independent India." },
      { q: "Who became the first Prime Minister of independent India?", options: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Dr. Rajendra Prasad", "C. Rajagopalachari"], correct: 1, explain: "Jawaharlal Nehru was sworn in by Mountbatten as the first Prime Minister of independent India." },
      { q: "Which office was abolished by the Indian Independence Act, 1947, with its functions transferred to the Secretary of State for Commonwealth Affairs?", options: ["Secretary of State for India", "Viceroy of India", "Governor-General of Bengal", "High Commissioner for India"], correct: 0, explain: "The Act abolished the office of Secretary of State for India, transferring its functions to the Secretary of State for Commonwealth Affairs." },
      { q: "Under the Indian Independence Act, 1947, British paramountcy over princely states:", options: ["Continued indefinitely", "Lapsed from August 15, 1947", "Was transferred to the United Nations", "Was extended by 5 years"], correct: 1, explain: "British paramountcy over princely states and treaty relations with tribal areas lapsed from August 15, 1947." },
      { q: "Under the Indian Independence Act, 1947, princely states were given the choice to:", options: ["Only join India", "Only join Pakistan", "Join India, join Pakistan, or remain independent", "Remain under British rule"], correct: 2, explain: "Princely states had the freedom to join India, join Pakistan, or remain independent." },
      { q: "Until new constitutions were framed, India and Pakistan were to be governed under the provisions of:", options: ["The Indian Independence Act itself", "The Government of India Act, 1935", "The Government of India Act, 1919", "The Indian Councils Act, 1909"], correct: 1, explain: "Each dominion and its provinces were to be governed by the Government of India Act, 1935, until new constitutions were framed." },
      { q: "Under the Indian Independence Act, 1947, who retained the power to assent to bills in the King's name?", options: ["The British Monarch personally", "The Governor-General", "The Secretary of State for Commonwealth Affairs", "The Chief Justice of India"], correct: 1, explain: "The British Monarch lost the right to veto bills — this power was reserved for the Governor-General instead." },
      { q: "Under the Indian Independence Act, 1947, the Governor-General and provincial Governors became:", options: ["Absolute rulers with full executive power", "Constitutional (nominal) heads, acting on ministerial advice", "Judicial authorities", "Military commanders-in-chief"], correct: 1, explain: "They became constitutional/nominal heads, required to act on the advice of the respective Council of Ministers." },
      { q: "The Indian Independence Act, 1947 dropped which title from the British King's royal titles?", options: ["King of England", "Emperor of India", "Head of the Commonwealth", "Defender of the Faith"], correct: 1, explain: "The title 'Emperor of India' was dropped from the British King's royal titles." },
      { q: "The Boundary Commission that determined the boundaries between India and Pakistan was headed by:", options: ["Lord Mountbatten", "Sir Cyril Radcliffe", "Sir John Simon", "Lord Wavell"], correct: 1, explain: "The Boundary Commission was headed by Radcliffe (Sir Cyril Radcliffe)." },
      { q: "Which of the following areas was included in Pakistan following partition?", options: ["West Bengal and Bihar", "West Punjab, Sind, Baluchistan, East Bengal, NWFP, and Sylhet (Assam)", "Delhi and Punjab (East)", "Kashmir and Jammu"], correct: 1, explain: "Pakistan included West Punjab, Sind, Baluchistan, East Bengal, North-Western Frontier Province, and the district of Sylhet in Assam." },
      { q: "The referendum results in North-Western Frontier Province and Sylhet were in favour of:", options: ["India", "Pakistan", "Remaining independent", "Joining neither dominion"], correct: 1, explain: "Both referenda favoured joining Pakistan." },
      { q: "Which of the following powers did the Constituent Assemblies of India and Pakistan receive under the Indian Independence Act, 1947?", options: ["Power to frame and adopt any constitution, including repealing the Act itself", "Power only to amend the Government of India Act, 1935", "No legislative powers until 1950", "Power only over foreign affairs"], correct: 0, explain: "The Constituent Assemblies were empowered to frame and adopt any constitution, and could even repeal the Indian Independence Act itself." },
    ],
  },
};

// ╔══════════════════════════════════════════════════════════╗
// ║  SUBJECT DASHBOARD META (icons/labels for home cards)     ║
// ╚══════════════════════════════════════════════════════════╝
const DASHBOARD_IDS = ["gs1", "gs2", "gs3", "gs4", "essay"];

// ╔══════════════════════════════════════════════════════════╗
// ║  STATE                                                    ║
// ╚══════════════════════════════════════════════════════════╝
let expanded = {};
let selectedId = null;
let completed = {}; // { [leafId]: true }

try {
  expanded = JSON.parse(localStorage.getItem("upsc-tree-expanded") || "{}");
} catch (err) { expanded = {}; }
try {
  completed = JSON.parse(localStorage.getItem("upsc-completed") || "{}");
} catch (err) { completed = {}; }

function saveExpanded() {
  try { localStorage.setItem("upsc-tree-expanded", JSON.stringify(expanded)); } catch (err) { }
}
function saveCompleted() {
  try { localStorage.setItem("upsc-completed", JSON.stringify(completed)); } catch (err) { }
}

// ╔══════════════════════════════════════════════════════════╗
// ║  TREE HELPERS                                             ║
// ╚══════════════════════════════════════════════════════════╝
function findNode(nodes, id) {
  for (const n of nodes) {
    if (n.id === id) return n;
    if (n.children) {
      const f = findNode(n.children, id);
      if (f) return f;
    }
  }
  return null;
}

function findPath(nodes, id, path = []) {
  for (const n of nodes) {
    const newPath = [...path, n.title];
    if (n.id === id) return newPath;
    if (n.children) {
      const f = findPath(n.children, id, newPath);
      if (f) return f;
    }
  }
  return null;
}

// Collect all leaf ids (nodes with isLeaf:true) under a subtree, for progress calc
function collectLeaves(node) {
  let leaves = [];
  if (node.isLeaf && node.id !== "syllabus") leaves.push(node.id);
  if (node.children) {
    for (const c of node.children) leaves = leaves.concat(collectLeaves(c));
  }
  return leaves;
}

function subtreeProgress(node) {
  const leaves = collectLeaves(node);
  if (leaves.length === 0) return null;
  const done = leaves.filter((id) => completed[id]).length;
  return { done, total: leaves.length, pct: Math.round((done / leaves.length) * 100) };
}

function overallProgress() {
  let leaves = [];
  for (const n of TREE_DATA) leaves = leaves.concat(collectLeaves(n));
  const done = leaves.filter((id) => completed[id]).length;
  return { done, total: leaves.length, pct: leaves.length ? Math.round((done / leaves.length) * 100) : 0 };
}

// Flat index of all leaf nodes for search
function buildSearchIndex() {
  const index = [];
  function walk(nodes, pathTitles) {
    for (const n of nodes) {
      const newPath = [...pathTitles, n.title];
      if (n.isLeaf && n.id !== "syllabus") {
        index.push({ id: n.id, title: n.title, path: pathTitles.join(" › ") });
      }
      if (n.children) walk(n.children, newPath);
    }
  }
  walk(TREE_DATA, []);
  return index;
}
const SEARCH_INDEX = buildSearchIndex();

// ╔══════════════════════════════════════════════════════════╗
// ║  TREE RENDERING                                           ║
// ╚══════════════════════════════════════════════════════════╝
function renderTree(nodes, depth) {
  let html = "";
  // Cap visual indent so deeply nested items (6-7 levels) never overflow
  // the sidebar — after depth 4, stop adding further indent.
  const cappedDepth = Math.min(depth, 4);
  const indentStep = 14;
  const rowPadding = 10 + cappedDepth * indentStep;

  for (const node of nodes) {
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = !!expanded[node.id];
    const isSelected = selectedId === node.id;
    const isLeaf = !!node.isLeaf && node.id !== "syllabus";
    const isDone = isLeaf && !!completed[node.id];
    const prog = !isLeaf ? subtreeProgress(node) : null;

    html += `<div>`;
    html += `<div class="tree-row ${isSelected ? "selected" : ""}" data-id="${node.id}" data-haschildren="${hasChildren}" data-isleaf="${node.id === "syllabus" ? "special" : isLeaf}" style="padding-left:${rowPadding}px">`;
    html += `<span class="tree-chevron ${hasChildren ? (isExpanded ? "expanded" : "") : "hidden"}">▶</span>`;
    if (isLeaf) {
      html += `<span class="tree-check ${isDone ? "done" : ""}" data-checkid="${node.id}">${isDone ? "✓" : ""}</span>`;
    } else {
      html += `<span class="tree-icon">${node.icon || ""}</span>`;
    }
    html += `<div class="tree-label-wrap">`;
    html += `<div class="tree-title ${depth === 0 ? "depth-0" : ""}">${node.title}</div>`;
    if (node.subtitle) html += `<div class="tree-subtitle">${node.subtitle}</div>`;
    if (node.pageRef) html += `<div class="tree-pageref">${node.pageRef}</div>`;
    html += `</div>`;
    if (prog && prog.total > 0) {
      html += `<div class="tree-progress-mini">${prog.done}/${prog.total}</div>`;
    }
    html += `</div>`;

    if (hasChildren) {
      // Fixed small margin for the connector line only — does NOT compound
      // across nesting levels (each child renders its own indent via padding).
      html += `<div class="tree-children ${isExpanded ? "" : "collapsed"}" style="margin-left:14px">`;
      html += renderTree(node.children, depth + 1);
      html += `</div>`;
    }
    html += `</div>`;
  }
  return html;
}

function refreshTree() {
  document.getElementById("treeContainer").innerHTML = renderTree(TREE_DATA, 0);
  attachTreeHandlers();
  refreshOverallProgress();
}

function refreshOverallProgress() {
  const p = overallProgress();
  document.getElementById("overallFill").style.width = p.pct + "%";
  document.getElementById("overallPct").textContent = p.pct + "%";
}

function attachTreeHandlers() {
  document.querySelectorAll(".tree-check").forEach((chk) => {
    chk.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = chk.getAttribute("data-checkid");
      completed[id] = !completed[id];
      saveCompleted();
      refreshTree();
      if (selectedId === id) renderNotes(); // update mark-done button state if viewing this note
    });
  });

  document.querySelectorAll(".tree-row").forEach((row) => {
    row.addEventListener("click", () => {
      const id = row.getAttribute("data-id");
      const hasChildren = row.getAttribute("data-haschildren") === "true";
      const isLeafAttr = row.getAttribute("data-isleaf");

      if (hasChildren) {
        expanded[id] = !expanded[id];
        saveExpanded();
      }
      if (isLeafAttr === "true" || isLeafAttr === "special") {
        selectedId = selectedId === id ? null : id;
        renderNotes();
        closeMobileDrawer();
      }
      refreshTree();
    });
  });
}

// ╔══════════════════════════════════════════════════════════╗
// ║  SEARCH                                                   ║
// ╚══════════════════════════════════════════════════════════╝
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    searchResults.classList.remove("active");
    searchResults.innerHTML = "";
    return;
  }
  const matches = SEARCH_INDEX.filter((item) => item.title.toLowerCase().includes(q) || item.path.toLowerCase().includes(q)).slice(0, 15);
  if (matches.length === 0) {
    searchResults.innerHTML = `<div class="search-empty">No matching topics found</div>`;
  } else {
    searchResults.innerHTML = matches.map((m) => `
      <div class="search-result-item" data-searchid="${m.id}">
        <div class="search-result-title">${m.title}</div>
        <div class="search-result-path">${m.path}</div>
      </div>`).join("");
  }
  searchResults.classList.add("active");

  document.querySelectorAll(".search-result-item").forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.getAttribute("data-searchid");
      selectAndReveal(id);
      searchInput.value = "";
      searchResults.classList.remove("active");
      closeMobileDrawer();
    });
  });
});

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-wrap")) searchResults.classList.remove("active");
});

// Expand all ancestors of a node and select it
function selectAndReveal(id) {
  function expandAncestors(nodes, targetId, ancestors) {
    for (const n of nodes) {
      if (n.id === targetId) {
        ancestors.forEach((a) => (expanded[a] = true));
        return true;
      }
      if (n.children && expandAncestors(n.children, targetId, [...ancestors, n.id])) return true;
    }
    return false;
  }
  expandAncestors(TREE_DATA, id, []);
  saveExpanded();
  selectedId = id;
  refreshTree();
  renderNotes();
}

// ╔══════════════════════════════════════════════════════════╗
// ║  NOTES / DASHBOARD RENDERING                              ║
// ╚══════════════════════════════════════════════════════════╝
const CIRCLED = ["①", "②", "③", "④", "⑤", "⑥", "⑦", "⑧", "⑨", "⑩"];

function esc(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

const DASH_ICONS = { gs1: "🏛", gs2: "⚖", gs3: "📊", gs4: "🧭", essay: "✍" };

function renderDashboard() {
  document.getElementById("topbarTitle").textContent = "Dashboard";
  let html = `<div class="dash-grid">`;
  for (const id of DASHBOARD_IDS) {
    const node = findNode(TREE_DATA, id);
    if (!node) continue;
    const prog = subtreeProgress(node) || { done: 0, total: 0, pct: 0 };
    html += `<div class="dash-card" data-dashid="${id}">
      <div class="dash-card-icon">${node.icon}</div>
      <div class="dash-card-title">${node.title}${node.subtitle ? " — " + node.subtitle : ""}</div>
      <div class="dash-card-bar"><div class="dash-card-fill" style="width:${prog.pct}%"></div></div>
      <div class="dash-card-pct">${prog.done}/${prog.total} topics · ${prog.pct}%</div>
    </div>`;
  }
  html += `</div>`;
  document.getElementById("notesContent").innerHTML = html;

  document.querySelectorAll(".dash-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = card.getAttribute("data-dashid");
      expanded[id] = true;
      saveExpanded();
      refreshTree();
    });
  });
}

function renderSyllabusOverview() {
  document.getElementById("topbarTitle").textContent = "UPSC Syllabus";
  document.getElementById("notesContent").innerHTML = `
    <div class="note-header">
      <div class="note-eyebrow">Reference &nbsp;·&nbsp; Overview</div>
      <div class="note-title">UPSC Syllabus Structure</div>
      <div class="note-source">Papers: GS-1, GS-2, GS-3, GS-4 &amp; Essay (Mains)</div>
    </div>
    <div class="section-title">📋 Paper-wise Breakdown</div>
    <div class="features">
      <div class="feature-row"><div class="fkey">GS-1</div><div class="fval-line first">Indian Heritage &amp; Culture, History, Geography of the World &amp; Society</div></div>
      <div class="feature-row"><div class="fkey">GS-2</div><div class="fval-line first">Governance, Constitution, Polity, Social Justice, International Relations</div></div>
      <div class="feature-row"><div class="fkey">GS-3</div><div class="fval-line first">Technology, Economic Development, Biodiversity, Environment, Security, Disaster Management</div></div>
      <div class="feature-row"><div class="fkey">GS-4</div><div class="fval-line first">Ethics, Integrity and Aptitude</div></div>
      <div class="feature-row"><div class="fkey">Essay</div><div class="fval-line first">Two essays from a choice of topics — tests articulation &amp; structured thinking</div></div>
    </div>
    <div class="section-title">🔑 How to Use This Website</div>
    <div class="sig-box">
      <div class="sig-item"><span class="sig-num">①</span><span class="sig-text">Navigate the tree on the left — click any topic to view detailed notes</span></div>
      <div class="sig-item"><span class="sig-num">②</span><span class="sig-text">Tick the checkbox next to a topic once you've revised it — your progress bar updates automatically</span></div>
      <div class="sig-item"><span class="sig-num">③</span><span class="sig-text">Use the search box to jump directly to any topic across the entire syllabus</span></div>
      <div class="sig-item"><span class="sig-num">④</span><span class="sig-text">Take the quiz at the end of a topic's notes to test yourself with PYQ-style questions</span></div>
    </div>
  `;
}

function renderNotes() {
  if (selectedId === "syllabus") { renderSyllabusOverview(); return; }
  if (!selectedId) { renderDashboard(); return; }

  const node = findNode(TREE_DATA, selectedId);
  const container = document.getElementById("notesContent");
  const topbarTitle = document.getElementById("topbarTitle");

  if (!node || !node.notes) {
    // Branch node with no notes yet, or leaf with notes:null placeholder
    const prog = subtreeProgress(node);
    topbarTitle.textContent = node ? node.title : "Dashboard";
    container.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">📖</div>
        <div class="empty-title">${node ? esc(node.title) : "Select a Topic"}</div>
        <div class="empty-desc">${prog ? `Progress: ${prog.done}/${prog.total} topics completed (${prog.pct}%)` : "Notes for this topic haven't been added yet. Share the chapter content to add it."}</div>
      </div>`;
    return;
  }

  const n = node.notes;
  const isDone = !!completed[node.id];
  const hasQuiz = !!QUIZ_DATA[node.id];
  topbarTitle.textContent = node.title;

  let html = "";
  html += `<div class="note-header"><div class="note-title-row"><div>`;
  html += `<div class="note-eyebrow">GS–II &nbsp;·&nbsp; Indian Polity &amp; Governance &nbsp;·&nbsp; ${esc(n.era || "")}</div>`;
  html += `<div class="note-title">${esc(node.title)}</div>`;
  html += `<div class="note-source">Laxmikanth ${node.pageRef ? "&nbsp;·&nbsp; " + esc(node.pageRef) : ""}</div>`;
  html += `</div>`;
  html += `<div class="note-actions">`;
  html += `<button class="mark-done-btn ${isDone ? "is-done" : ""}" id="markDoneBtn">${isDone ? "✓ Completed" : "Mark as Done"}</button>`;
  if (hasQuiz) html += `<button class="quiz-cta-btn" id="startQuizBtn">📝 Take Quiz (20 Qs)</button>`;
  html += `</div></div></div>`;

  html += `<div class="section-title">⚖ Constitutional Significance</div><div class="sig-box">`;
  (n.significance || []).forEach((s, i) => {
    html += `<div class="sig-item"><span class="sig-num">${CIRCLED[i] || (i + 1) + "."}</span><span class="sig-text">${esc(s)}</span></div>`;
  });
  html += `</div>`;

  html += `<div class="section-title">📜 Key Features</div><div class="features">`;
  (n.features || []).forEach((f) => {
    html += `<div class="feature-row"><div class="fkey">${esc(f.key)}</div><div>`;
    f.main.split("\n").forEach((line, j) => {
      html += `<div class="fval-line ${j === 0 ? "first" : ""}">${esc(line)}</div>`;
    });
    if (f.note) html += `<div class="fval-note">${esc(f.note)}</div>`;
    html += `</div></div>`;
  });
  html += `</div>`;

  html += `<div class="two-col">`;
  html += `<div class="two-col-cell"><div class="section-title">⚠ Prelims Traps</div><div class="trap-box">`;
  (n.traps || []).forEach((t) => {
    html += `<div class="trap-item"><span class="t-icon">✗</span><div>`;
    html += `<div class="t-label">${esc(t.label)}</div>`;
    t.lines.forEach((line) => { html += `<div class="t-line">${esc(line)}</div>`; });
    html += `</div></div>`;
  });
  html += `</div></div>`;

  html += `<div class="two-col-cell"><div class="section-title">✍ Mains Angle</div><div class="mains-box">`;
  html += `<div class="mains-quote">&ldquo;${esc(n.mainsAngle || "")}&rdquo;</div>`;
  html += `<div class="mains-theme-label">Key Theme</div>`;
  html += `<div class="mains-theme">${esc(n.mainsTheme || "")}</div>`;
  html += `</div></div>`;
  html += `</div>`;

  html += `<div class="section-title">🔑 Quick Recall</div><div class="hooks">`;
  (n.recall || []).forEach((r) => { html += `<span class="hook">${esc(r)}</span>`; });
  html += `</div>`;

  container.innerHTML = html;
  document.querySelector(".notes-scroll").scrollTop = 0;

  const markBtn = document.getElementById("markDoneBtn");
  if (markBtn) {
    markBtn.addEventListener("click", () => {
      completed[node.id] = !completed[node.id];
      saveCompleted();
      refreshTree();
      renderNotes();
    });
  }
  const quizBtn = document.getElementById("startQuizBtn");
  if (quizBtn) {
    quizBtn.addEventListener("click", () => openQuiz(node.id));
  }
}

// ╔══════════════════════════════════════════════════════════╗
// ║  QUIZ ENGINE                                              ║
// ╚══════════════════════════════════════════════════════════╝
let quizState = { qid: null, index: 0, answers: [], questions: [] };

function openQuiz(nodeId) {
  const quiz = QUIZ_DATA[nodeId];
  if (!quiz) return;
  quizState = { qid: nodeId, index: 0, answers: new Array(quiz.questions.length).fill(null), questions: quiz.questions };
  document.getElementById("quizTitle").textContent = quiz.title.toUpperCase() + " — QUIZ";
  document.getElementById("quizOverlay").classList.add("active");
  renderQuizQuestion();
}

function closeQuiz() {
  document.getElementById("quizOverlay").classList.remove("active");
}

function renderQuizQuestion() {
  const { index, questions, answers } = quizState;
  const footer = document.getElementById("quizFooter");
  const progressFill = document.getElementById("quizProgressFill");

  if (index >= questions.length) {
    renderQuizResult();
    return;
  }

  footer.style.display = "flex";
  progressFill.style.width = ((index) / questions.length) * 100 + "%";

  const q = questions[index];
  const selected = answers[index];
  const letters = ["A", "B", "C", "D"];

  let html = `<div class="quiz-qnum">QUESTION ${index + 1} OF ${questions.length}</div>`;
  html += `<div class="quiz-question">${esc(q.q)}</div>`;
  q.options.forEach((opt, i) => {
    let cls = "quiz-option";
    if (selected !== null) {
      if (i === q.correct) cls += " correct";
      else if (i === selected) cls += " incorrect";
    } else if (i === selected) {
      cls += " selected";
    }
    html += `<div class="${cls}" data-optindex="${i}">
      <span class="quiz-option-letter">${letters[i]}.</span>
      <span>${esc(opt)}</span>
    </div>`;
  });
  if (selected !== null) {
    html += `<div class="quiz-explain active">💡 ${esc(q.explain)}</div>`;
  }

  document.getElementById("quizBody").innerHTML = html;

  document.querySelectorAll(".quiz-option").forEach((opt) => {
    opt.addEventListener("click", () => {
      if (quizState.answers[quizState.index] !== null) return; // already answered
      const i = parseInt(opt.getAttribute("data-optindex"), 10);
      quizState.answers[quizState.index] = i;
      renderQuizQuestion();
    });
  });

  document.getElementById("quizPrevBtn").disabled = index === 0;
  document.getElementById("quizNextBtn").textContent = index === questions.length - 1 ? "Finish ▶" : "Next ▶";
  document.getElementById("quizNextBtn").disabled = selected === null;

  const score = answers.filter((a, i) => a === questions[i].correct).length;
  document.getElementById("quizScoreLabel").textContent = `Score: ${score}/${questions.length}`;
}

function renderQuizResult() {
  const { questions, answers } = quizState;
  const score = answers.filter((a, i) => a === questions[i].correct).length;
  const pct = Math.round((score / questions.length) * 100);
  document.getElementById("quizProgressFill").style.width = "100%";
  document.getElementById("quizFooter").style.display = "none";
  document.getElementById("quizBody").innerHTML = `
    <div class="quiz-result">
      <div class="quiz-result-score">${score}/${questions.length}</div>
      <div class="quiz-result-label">${pct}% Score</div>
      <button class="quiz-retry-btn" id="quizRetryBtn">Retry Quiz</button>
    </div>`;
  document.getElementById("quizRetryBtn").addEventListener("click", () => {
    quizState.index = 0;
    quizState.answers = new Array(questions.length).fill(null);
    document.getElementById("quizFooter").style.display = "flex";
    renderQuizQuestion();
  });
}

document.getElementById("quizPrevBtn").addEventListener("click", () => {
  if (quizState.index > 0) { quizState.index--; renderQuizQuestion(); }
});
document.getElementById("quizNextBtn").addEventListener("click", () => {
  quizState.index++;
  renderQuizQuestion();
});
document.getElementById("quizClose").addEventListener("click", closeQuiz);
document.getElementById("quizOverlay").addEventListener("click", (e) => {
  if (e.target.id === "quizOverlay") closeQuiz();
});

// ╔══════════════════════════════════════════════════════════╗
// ║  MOBILE DRAWER                                            ║
// ╚══════════════════════════════════════════════════════════╝
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const menuBtn = document.getElementById("menuBtn");
const closeDrawerBtn = document.getElementById("closeDrawer");

function openMobileDrawer() { sidebar.classList.add("open"); overlay.classList.add("active"); }
function closeMobileDrawer() { sidebar.classList.remove("open"); overlay.classList.remove("active"); }

menuBtn.addEventListener("click", openMobileDrawer);
closeDrawerBtn.addEventListener("click", closeMobileDrawer);
overlay.addEventListener("click", closeMobileDrawer);

// ╔══════════════════════════════════════════════════════════╗
// ║  INIT                                                     ║
// ╚══════════════════════════════════════════════════════════╝
refreshTree();
renderNotes();